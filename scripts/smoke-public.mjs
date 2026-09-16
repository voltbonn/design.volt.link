import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
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
  '.webp': 'image/webp',
};

const checkedViewports = [
  { label: 'mobile', width: 390, height: 844 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'small desktop', width: 1024, height: 768 },
  { label: 'desktop', width: 1280, height: 800 },
  { label: 'wide desktop', width: 1440, height: 900 },
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
  await page.addScriptTag({ content: axeCore.source });

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

if (!existsSync(join(root, 'index.html'))) {
  throw new Error('dist/index.html fehlt. Bitte zuerst `npm run build` ausfuehren.');
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
await page.addInitScript(() => {
  if (!window.localStorage.getItem('volt-theme')) {
    window.localStorage.setItem('volt-theme', 'light');
  }
});

try {
  await page.goto(`http://127.0.0.1:${port}/#intro`);
  await page.getByRole('heading', { name: 'Volt Design' }).waitFor();
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

  const initialLogo = await page.locator('.public-guide__mark img').evaluate((image) => ({
    src: image.getAttribute('src'),
    loaded: image.complete && image.naturalWidth > 0,
  }));

  if (!initialLogo.loaded || !initialLogo.src.includes('logo_lila')) {
    throw new Error('Logo im Light Mode wird nicht korrekt geladen.');
  }

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
  await page.locator('.public-guide[data-theme="dark"], .public-guide[data-theme="light"]').waitFor();

  const darkLogo = await page.locator('.public-guide__mark img').evaluate((image) => ({
    src: image.getAttribute('src'),
    loaded: image.complete && image.naturalWidth > 0,
  }));

  if (!darkLogo.loaded || !darkLogo.src.includes('logo_white')) {
    throw new Error('Logo im Dark Mode wird nicht korrekt geladen.');
  }

  await page.reload();
  await page.locator('.public-guide[data-theme="dark"]').waitFor();

  await page.locator('.public-guide__actions select').selectOption('en');
  await page.getByRole('heading', { name: 'Volt Design' }).waitFor();
  await page.locator('.public-guide__actions select').selectOption('de');

  await page.getByRole('button', { name: /Grundlagendesign/ }).click();
  await page.getByRole('button', { name: /Grundlagendesign/ }).click();
  await page.getByRole('searchbox', { name: 'Suchen' }).fill('Farben');
  await page.getByRole('link', { name: 'Farben', exact: true }).waitFor();
  await page.getByRole('searchbox', { name: 'Suchen' }).fill('');

  await assertNoForbiddenPublicLinks(page);
  await assertNoA11yViolations(page, 'public guide initial');

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
