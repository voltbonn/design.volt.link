import { createServer } from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import axeCore from 'axe-core';
import { chromium } from 'playwright';

const root = resolve('dist');
const port = 4179;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

const checkedViewports = [
  { label: 'mobile', width: 390, height: 844 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'small desktop', width: 1024, height: 768 },
  { label: 'desktop', width: 1280, height: 800 },
  { label: 'wide desktop', width: 1440, height: 900 },
];

const publicPageIds = [
  'intro',
  'sources',
  'designPrinciples',
  'brandVoice',
  'logo',
  'colors',
  'typography',
  'layout',
  'graphicElements',
  'imageLanguage',
  'accessibility',
  'websites',
  'digitalComponents',
  'iconsUi',
  'socialMedia',
  'newsletter',
  'presentations',
  'videoMotion',
  'fileExport',
  'applications',
  'help',
  'archive',
];

const forbiddenPublicSelectors = [
  'a[href*="storybook"]',
  'a[href="#templates"]',
  'a[href="#deployment"]',
  'a[href="#governance"]',
  'a[href="#loginPlanning"]',
].join(', ');

const assertNoHorizontalScroll = async (page, label) => {
  const viewport = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  if (viewport.scrollWidth > viewport.clientWidth) {
    throw new Error(`${label}: horizontales Scrollen erkannt.`);
  }
};

const assertNoForbiddenPublicLinks = async (page) => {
  const forbiddenLinks = await page.locator(forbiddenPublicSelectors).count();

  if (forbiddenLinks > 0) {
    throw new Error('Oeffentliche Navigation enthaelt Storybook-, Vorlagen- oder Planungs-Link.');
  }
};

const assertNoA11yViolations = async (page, label) => {
  const hasAxe = await page.evaluate(() => Boolean(window.axe));

  if (!hasAxe) {
    await page.addScriptTag({ content: axeCore.source });
  }

  const results = await page.evaluate(async () =>
    window.axe.run(document, {
      resultTypes: ['violations'],
    }),
  );

  if (results.violations.length > 0) {
    const summary = results.violations
      .map((violation) => {
        const targets = violation.nodes
          .slice(0, 3)
          .map((node) => node.target.join(' '))
          .join(', ');

        return `${violation.id} (${violation.impact ?? 'unknown'}): ${targets}`;
      })
      .join('\n');

    throw new Error(`${label}: Accessibility-Verstoesse gefunden:\n${summary}`);
  }
};

const assertVisibleFocus = async (page, selector, label) => {
  const locator = page.locator(selector).first();
  await locator.focus();

  const focusState = await locator.evaluate((element) => {
    const style = getComputedStyle(element);

    return {
      isFocused: document.activeElement === element,
      boxShadow: style.boxShadow,
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
    };
  });

  const hasVisibleFocus =
    focusState.boxShadow !== 'none' ||
    (focusState.outlineStyle !== 'none' && focusState.outlineWidth !== '0px');

  if (!focusState.isFocused || !hasVisibleFocus) {
    throw new Error(`${label}: Fokuszustand ist nicht sichtbar.`);
  }
};

const waitForLogoVariant = async (page, variant, label) => {
  await page.waitForFunction(
    (expectedVariant) => {
      const image = document.querySelector('.public-guide__mark img');

      return Boolean(
        image &&
          image.complete &&
          image.naturalWidth > 0 &&
          image.getAttribute('src')?.includes(expectedVariant),
      );
    },
    variant,
    { timeout: 10000 },
  );

  const logo = await page.locator('.public-guide__mark img').evaluate((image) => ({
    src: image.getAttribute('src'),
    loaded: image.complete && image.naturalWidth > 0,
  }));

  if (!logo.loaded || !logo.src.includes(variant)) {
    throw new Error(`${label} wird nicht korrekt geladen.`);
  }
};

const assertSemanticStructure = async (page, label) => {
  const structure = await page.evaluate(() => {
    const headings = [...document.querySelectorAll('main h1, main h2, main h3')].map((heading) => ({
      level: Number(heading.tagName.slice(1)),
      text: heading.textContent.trim(),
    }));
    const unlabeledNavs = [...document.querySelectorAll('nav')].filter(
      (nav) => !nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby'),
    );

    return {
      headings,
      h1Count: document.querySelectorAll('main h1').length,
      unlabeledNavCount: unlabeledNavs.length,
    };
  });

  if (structure.h1Count !== 1) {
    throw new Error(`${label}: erwartet genau eine H1, gefunden: ${structure.h1Count}.`);
  }

  if (structure.unlabeledNavCount > 0) {
    throw new Error(`${label}: Navigation ohne Label gefunden.`);
  }

  for (let index = 1; index < structure.headings.length; index += 1) {
    const previous = structure.headings[index - 1];
    const current = structure.headings[index];

    if (current.level > previous.level + 1) {
      throw new Error(
        `${label}: Heading-Sprung von H${previous.level} zu H${current.level} bei "${current.text}".`,
      );
    }
  }
};

const assertKeyboardReachable = async (page, checks) => {
  for (const check of checks) {
    let isReachable = false;

    for (let index = 0; index < check.maxTabs; index += 1) {
      isReachable = await page.evaluate((selector) => document.activeElement?.matches(selector) ?? false, check.selector);

      if (isReachable) {
        break;
      }

      await page.keyboard.press('Tab');
    }

    if (!isReachable) {
      throw new Error(`${check.label}: nicht per Tastatur erreichbar.`);
    }
  }
};

const assertMinimumContentBlocks = async (page) => {
  const checks = [
    { pageId: 'colors', selector: '.volt-color-swatch', label: 'Farbkarten' },
    { pageId: 'logo', selector: '.volt-dos-donts article', label: 'Do/Don’t-Beispiele' },
    { pageId: 'logo', selector: '.volt-download-card', label: 'Download-Hinweis' },
    { pageId: 'layout', selector: '.volt-guideline-grid article', label: 'Guideline-Karten' },
    { pageId: 'applications', selector: '.volt-application-card', label: 'Anwendungskarten' },
    { pageId: 'sources', selector: 'main ul li', label: 'Listeninhalt' },
  ];

  for (const check of checks) {
    await page.goto(`http://127.0.0.1:${port}/#${check.pageId}`);
    await page.locator(check.selector).first().waitFor();
    await assertNoHorizontalScroll(page, `${check.pageId} ${check.label}`);
  }
};

const createBrowserDiagnostics = (page) => {
  const consoleMessages = [];
  const pageErrors = [];

  page.on('console', (message) => {
    if (['error', 'warning'].includes(message.type())) {
      consoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });

  page.on('pageerror', (error) => {
    pageErrors.push(error.stack || error.message);
  });

  return async (label) => {
    const rootHtml = await page.locator('#root').evaluate((element) => element.innerHTML.slice(0, 1200)).catch(() => '');

    return [
      `${label} konnte die oeffentliche App nicht laden.`,
      pageErrors.length > 0 ? `Page errors:\n${pageErrors.join('\n')}` : 'Page errors: keine',
      consoleMessages.length > 0 ? `Console:\n${consoleMessages.join('\n')}` : 'Console: keine relevanten Meldungen',
      `Root HTML:\n${rootHtml || '[leer]'}`,
    ].join('\n\n');
  };
};

const waitForPublicGuide = async (page, diagnostics, label) => {
  try {
    await page.locator('.public-guide').waitFor({ timeout: 60000 });
    await page.locator('.public-guide__canvas h1').waitFor({ timeout: 60000 });
  } catch {
    throw new Error(await diagnostics(label));
  }
};

if (!existsSync(join(root, 'index.html'))) {
  throw new Error('dist/index.html fehlt. Bitte zuerst `npm run build` ausfuehren.');
}

const distEntries = await readdir(root, { recursive: true });
const storybookArtifacts = distEntries.filter((entry) => /(^|[/\\])storybook(-static)?([/\\]|$)/i.test(entry));
const requiredRootFiles = ['robots.txt', 'sitemap.xml', 'llms.txt', 'site.webmanifest'];
const missingRootFiles = requiredRootFiles.filter((file) => !existsSync(join(root, file)));

if (missingRootFiles.length > 0) {
  throw new Error(`dist/ enthaelt nicht alle Maschinenlesbarkeits-Dateien: ${missingRootFiles.join(', ')}`);
}

if (storybookArtifacts.length > 0) {
  throw new Error(`dist/ enthaelt Storybook-Artefakte: ${storybookArtifacts.slice(0, 5).join(', ')}`);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://127.0.0.1:${port}`);
    const rawPath = url.pathname === '/' ? '/index.html' : url.pathname;
    const filePath = resolve(root, `.${rawPath}`);

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end('Forbidden');
      return;
    }

    const file = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(file);
  } catch {
    const fallback = await readFile(join(root, 'index.html'));
    response.writeHead(200, { 'Content-Type': mimeTypes['.html'] });
    response.end(fallback);
  }
});

await new Promise((resolveListen) => server.listen(port, '127.0.0.1', resolveListen));

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  locale: 'en-US',
  viewport: { width: 390, height: 844 },
});
const page = await context.newPage();
const diagnostics = createBrowserDiagnostics(page);
await page.addInitScript(() => {
  if (!window.localStorage.getItem('volt-theme')) {
    window.localStorage.setItem('volt-theme', 'light');
  }
});

try {
  await page.goto(`http://127.0.0.1:${port}/#intro`);
  await waitForPublicGuide(page, diagnostics, 'Initialer Smoke-Test');
  await page.locator('.public-guide[data-theme="light"]').waitFor();
  await page.locator('.public-guide__actions select').waitFor();

  const browserLocale = await page.locator('.public-guide__actions select').inputValue();

  if (browserLocale !== 'en') {
    throw new Error('Browsersprache en-US wird nicht als Startsprache verwendet.');
  }

  await page.getByRole('searchbox', { name: 'Search' }).waitFor();
  await page.locator('.public-guide__actions select').selectOption('de');
  await page.getByRole('searchbox', { name: 'Suchen' }).waitFor();
  await page.getByRole('button', { name: /Archiv/ }).waitFor();

  const imprintHref = await page.getByRole('link', { name: 'Impressum' }).first().getAttribute('href');
  const privacyHref = await page.getByRole('link', { name: 'Datenschutz' }).first().getAttribute('href');

  if (imprintHref !== 'https://voltdeutschland.org/impressum') {
    throw new Error('Impressum-Link zeigt nicht auf die erwartete URL.');
  }

  if (privacyHref !== 'https://voltdeutschland.org/datenschutz') {
    throw new Error('Datenschutz-Link zeigt nicht auf die erwartete URL.');
  }

  await waitForLogoVariant(page, 'logo_lila', 'Logo im Light Mode');

  await assertNoHorizontalScroll(page, 'mobile initial');

  await page.getByRole('button', { name: /Hintergrund/ }).click();
  await page.getByRole('button', { name: /Hintergrund/ }).click();
  await page.getByRole('button', { name: 'Raster' }).click();
  await page.getByRole('button', { name: 'Konturen' }).click();

  const canvasState = await page.locator('.public-guide__canvas').evaluate((element) => ({
    className: element.className,
    background: getComputedStyle(element).backgroundColor,
  }));

  if (!canvasState.className.includes('public-guide__canvas--brand')) {
    throw new Error('Hintergrundwechsel erreicht den Lila-Modus nicht.');
  }

  if (!canvasState.className.includes('is-grid-visible') || !canvasState.className.includes('is-outline-visible')) {
    throw new Error('Raster oder Konturen werden nicht aktiviert.');
  }

  await page.getByRole('button', { name: /Light Mode aktivieren|Dark Mode aktivieren/ }).click();
  await page.locator('.public-guide[data-theme="dark"]').waitFor();
  await waitForLogoVariant(page, 'logo_white', 'Logo im Dark Mode');

  await page.reload();
  await waitForPublicGuide(page, diagnostics, 'Smoke-Test nach Reload');
  await page.locator('.public-guide[data-theme="dark"]').waitFor();
  await page.getByRole('searchbox', { name: 'Search' }).waitFor({ timeout: 60000 });

  await page.locator('.public-guide__actions select').selectOption('en');
  await page.getByRole('searchbox', { name: 'Search' }).waitFor();
  await page.locator('.public-guide__actions select').selectOption('de');
  await page.getByRole('searchbox', { name: 'Suchen' }).waitFor();

  await page.getByRole('button', { name: /Grundlagendesign/ }).click();
  await page.getByRole('button', { name: /Grundlagendesign/ }).click();
  await page.getByRole('searchbox', { name: 'Suchen' }).fill('Farben');
  await page.getByRole('link', { name: 'Farben', exact: true }).waitFor();
  await page.getByRole('searchbox', { name: 'Suchen' }).fill('');

  const sectionToggles = await page.locator('.public-guide__nav-section-toggle').all();
  for (const toggle of sectionToggles) {
    if ((await toggle.getAttribute('aria-expanded')) === 'false') {
      await toggle.click();
    }
  }
  await assertNoHorizontalScroll(page, 'sidebar all groups open');

  for (const toggle of sectionToggles) {
    if ((await toggle.getAttribute('aria-expanded')) === 'true') {
      await toggle.click();
    }
  }
  await assertNoHorizontalScroll(page, 'sidebar all groups closed');

  await page.getByRole('searchbox', { name: 'Suchen' }).fill('Logo');
  await page.getByRole('link', { name: 'Logo', exact: true }).click();
  await page.getByRole('heading', { name: 'Logo', level: 1 }).waitFor();
  await page.getByRole('searchbox', { name: 'Suchen' }).fill('');
  await assertNoHorizontalScroll(page, 'sidebar search and page switch');

  for (const pageId of publicPageIds) {
    await page.goto(`http://127.0.0.1:${port}/#${pageId}`);
    await page.locator('.public-guide__canvas h1').waitFor();
    await assertSemanticStructure(page, pageId);
    await assertNoA11yViolations(page, pageId);

    const activeHref = await page.locator('.public-guide__nav-section-links a.is-active').first().getAttribute('href');

    if (activeHref !== `#${pageId}`) {
      throw new Error(`Direkter Hash-Link #${pageId} aktiviert nicht die erwartete Seite.`);
    }
  }

  await page.goto(`http://127.0.0.1:${port}/#logo`);
  await page.locator('.volt-in-page-nav a').first().click();
  await page.getByRole('heading', { name: 'Logo', level: 1 }).waitFor();

  const inPageHash = new URL(page.url()).hash;
  if (!inPageHash.startsWith('#logo/')) {
    throw new Error('In-Page-Navigation nutzt keinen seitenspezifischen Hash.');
  }

  await assertMinimumContentBlocks(page);

  await assertNoForbiddenPublicLinks(page);
  await assertNoA11yViolations(page, 'public guide initial');
  await assertVisibleFocus(page, '.public-guide__brand', 'Brand-Link');
  await assertVisibleFocus(page, '.public-guide__tools button', 'Header-Werkzeug');
  await assertVisibleFocus(page, '.public-guide__actions select', 'Sprachwahl');
  await assertVisibleFocus(page, '.public-guide__theme-toggle', 'Theme Toggle');
  await assertVisibleFocus(page, '.public-guide__search input', 'Suche');
  await assertVisibleFocus(page, '.public-guide__nav-section-toggle', 'Sidebar-Gruppe');
  await assertVisibleFocus(page, '.public-guide__nav-section-links a', 'Sidebar-Link');
  await assertVisibleFocus(page, '.volt-legal-links a', 'Rechtlicher Link');

  await page.goto(`http://127.0.0.1:${port}/#intro`);
  await page.locator('.public-guide__actions select').selectOption('de');
  await page.locator('body').click({ position: { x: 1, y: 1 } });
  await assertKeyboardReachable(page, [
    { selector: '.public-guide__brand', label: 'Brand-Link', maxTabs: 5 },
    { selector: '.public-guide__tools button', label: 'Header-Werkzeug', maxTabs: 5 },
    { selector: '.public-guide__actions select', label: 'Sprachwahl', maxTabs: 8 },
    { selector: '.public-guide__theme-toggle', label: 'Theme Toggle', maxTabs: 5 },
    { selector: '.public-guide__search input', label: 'Suche', maxTabs: 5 },
    { selector: '.public-guide__nav-section-toggle', label: 'Sidebar-Gruppe', maxTabs: 8 },
    { selector: '.public-guide__nav-section-links a', label: 'Sidebar-Link', maxTabs: 8 },
    { selector: '.volt-legal-links a', label: 'Rechtlicher Link', maxTabs: 60 },
  ]);

  const loginLinks = await page.getByRole('link', { name: /^Login$/ }).count();
  if (loginLinks > 0) {
    throw new Error('Oeffentliche Navigation enthaelt einen Login-Link.');
  }

  for (const viewport of checkedViewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    for (const locale of ['de', 'en', 'nl', 'fr']) {
      await page.locator('.public-guide__actions select').selectOption(locale);
      await page.getByRole('searchbox').waitFor();
      await assertNoHorizontalScroll(page, `${viewport.label} ${locale}`);
      await assertNoForbiddenPublicLinks(page);
    }
  }
} finally {
  await context.close();
  await browser.close();
  await new Promise((resolveClose) => server.close(resolveClose));
}

console.log('Public smokechecks passed.');
