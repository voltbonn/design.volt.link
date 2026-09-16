import { brandManualLinks } from '../src/design/content/guidePages.js';

const externalUrls = [
  'https://volteuropa.org/visual_identity',
  'https://voltdeutschland.org/impressum',
  'https://voltdeutschland.org/datenschutz',
  ...brandManualLinks.map((link) => link.url),
];

const checkUrl = async (url) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'design.volt.link link checker',
      },
      redirect: 'follow',
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.url;
  } finally {
    clearTimeout(timeout);
  }
};

const failures = [];

for (const url of externalUrls) {
  try {
    const finalUrl = await checkUrl(url);
    console.log(`OK ${url}${finalUrl !== url ? ` -> ${finalUrl}` : ''}`);
  } catch (error) {
    failures.push(`${url}: ${error.message}`);
  }
}

if (failures.length > 0) {
  throw new Error(`Linkcheck fehlgeschlagen:\n${failures.join('\n')}`);
}
