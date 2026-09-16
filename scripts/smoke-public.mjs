import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
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
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

try {
  await page.goto(`http://127.0.0.1:${port}/#intro`);
  await page.getByRole('heading', { name: 'Volt Design' }).waitFor();

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

  await page.locator('.public-guide__actions select').selectOption('en');
  await page.getByRole('heading', { name: 'Volt Design' }).waitFor();
  await page.locator('.public-guide__actions select').selectOption('de');

  await page.getByRole('button', { name: /Grundlagendesign/ }).click();
  await page.getByRole('button', { name: /Grundlagendesign/ }).click();
  await page.getByRole('searchbox', { name: 'Suchen' }).fill('Farben');
  await page.getByRole('link', { name: 'Farben', exact: true }).waitFor();

  const forbiddenLinks = await page.locator('a[href*="storybook"], a[href="#templates"]').count();
  if (forbiddenLinks > 0) {
    throw new Error('Oeffentliche Navigation enthaelt Storybook- oder Templates-Link.');
  }

  const loginLinks = await page.getByRole('link', { name: /^Login$/ }).count();
  if (loginLinks > 0) {
    throw new Error('Oeffentliche Navigation enthaelt einen Login-Link.');
  }
} finally {
  await browser.close();
  await new Promise((resolveClose) => server.close(resolveClose));
}

console.log('Public smokechecks passed.');
