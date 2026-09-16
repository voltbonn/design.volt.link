import { describe, expect, it } from 'vitest';

import { resources, supportedLocales } from './i18n.jsx';

const requiredKeys = [
  'common.statusPlanned',
  'common.visibilityInternal',
  'common.updatedOpen',
  'legalLinks.imprint',
  'legalLinks.privacy',
  'legalLinks.sidebarLabel',
  'publicGuide.language',
  'publicGuide.logoAlt',
  'publicGuide.sections.archive',
  'templateCard.linkPending',
  'templateCard.updated',
];

const getPath = (object, path) =>
  path.split('.').reduce((current, key) => current?.[key], object);

describe('i18n resources', () => {
  it('defines all supported public locales', () => {
    expect(supportedLocales).toEqual(['de', 'en', 'nl', 'fr']);
    expect(Object.keys(resources).sort()).toEqual([...supportedLocales].sort());
  });

  it('contains required UI keys for every locale', () => {
    for (const locale of supportedLocales) {
      const translation = resources[locale].translation;

      for (const key of requiredKeys) {
        expect(getPath(translation, key), `${locale}.${key}`).toBeTruthy();
      }
    }
  });

  it('keeps every locale mapped to a valid html language', () => {
    for (const locale of supportedLocales) {
      expect(resources[locale].translation.meta.htmlLang).toBe(locale);
      expect(resources[locale].translation.meta.languageName).toEqual(expect.any(String));
    }
  });
});
