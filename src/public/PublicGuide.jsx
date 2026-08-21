import React from 'react';
import {
  applications,
  archive,
  accessibility,
  brandVoice,
  colors,
  deployment,
  designPrinciples,
  digitalComponents,
  fileExport,
  governance,
  graphicElements,
  help,
  iconsUi,
  imageLanguage,
  layout,
  loginPlanning,
  logo,
  newsletter,
  presentations,
  sources,
  socialMedia,
  templates,
  typography,
  videoMotion,
  websites,
} from '../design/content/guidePages';
import { GuideIntro } from '../design/components/GuideIntro';
import { GuidePage } from '../design/components/GuidePage';
import { LegalLinks } from '../design/components/LegalLinks';
import { I18nProvider, supportedLocales, useI18n } from '../design/i18n';
import { applyTheme, getStoredTheme, supportedThemes, ThemeProvider } from '../design/theme';

const pages = [
  { id: 'intro', section: '00', content: null },
  { id: 'sources', section: '00', content: sources },
  { id: 'designPrinciples', section: '01', content: designPrinciples },
  { id: 'brandVoice', section: '01', content: brandVoice },
  { id: 'logo', section: '01', content: logo },
  { id: 'colors', section: '01', content: colors },
  { id: 'typography', section: '01', content: typography },
  { id: 'layout', section: '01', content: layout },
  { id: 'graphicElements', section: '01', content: graphicElements },
  { id: 'imageLanguage', section: '01', content: imageLanguage },
  { id: 'accessibility', section: '01', content: accessibility },
  { id: 'websites', section: '02', content: websites },
  { id: 'digitalComponents', section: '02', content: digitalComponents },
  { id: 'iconsUi', section: '02', content: iconsUi },
  { id: 'socialMedia', section: '02', content: socialMedia },
  { id: 'newsletter', section: '02', content: newsletter },
  { id: 'presentations', section: '02', content: presentations },
  { id: 'videoMotion', section: '02', content: videoMotion },
  { id: 'fileExport', section: '02', content: fileExport },
  { id: 'applications', section: '03', content: applications },
  { id: 'templates', section: '04', content: templates },
  { id: 'help', section: '05', content: help },
  { id: 'deployment', section: '06', content: deployment },
  { id: 'governance', section: '06', content: governance },
  { id: 'loginPlanning', section: '06', content: loginPlanning },
  { id: 'archive', section: 'archive', content: archive },
];

const languages = [
  { value: 'de', label: 'Deutsch' },
  { value: 'en', label: 'English' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'fr', label: 'Français' },
];

const getHashPage = () => window.location.hash.replace(/^#\/?/, '') || 'intro';

const pageTitle = (page, locale, t) => {
  if (page.id === 'intro') {
    return t('publicGuide.intro');
  }

  return page.content[locale]?.title ?? page.content.de.title;
};

const PublicGuideInner = ({ setLocale, setTheme, theme }) => {
  const { locale, t } = useI18n();
  const [activePage, setActivePage] = React.useState(getHashPage);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const onHashChange = () => setActivePage(getHashPage());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const visiblePages = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return pages;
    }

    return pages.filter((page) => {
      const title = pageTitle(page, locale, t).toLowerCase();
      const section = t(`publicGuide.sections.${page.section}`).toLowerCase();

      return `${title} ${section}`.includes(normalizedQuery);
    });
  }, [locale, query, t]);

  const page = pages.find((item) => item.id === activePage) ?? pages[0];
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <div className="public-guide" data-theme={theme}>
      <header className="public-guide__topbar">
        <a className="public-guide__brand" href="#intro">
          <span className="public-guide__mark">S</span>
          <strong>design.volt.link</strong>
        </a>
        <div className="public-guide__actions">
          <label>
            <span>{t('publicGuide.language')}</span>
            <select value={locale} onChange={(event) => setLocale(event.target.value)}>
              {languages.map((language) => (
                <option key={language.value} value={language.value}>
                  {language.label}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="public-guide__theme-toggle"
            aria-label={t(`publicGuide.theme.${nextTheme}`)}
            aria-pressed={theme === 'dark'}
            title={t(`publicGuide.theme.${nextTheme}`)}
            onClick={() => setTheme(nextTheme)}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span>{t(`publicGuide.theme.current.${theme}`)}</span>
          </button>
          <a className="public-guide__template-link" href="#templates">
            {t('common.templates')}
          </a>
        </div>
      </header>

      <div className="public-guide__layout">
        <aside className="public-guide__sidebar">
          <label className="public-guide__search">
            <span>{t('publicGuide.search')}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('publicGuide.searchPlaceholder')}
            />
          </label>

          <nav aria-label={t('publicGuide.navigation')}>
            {visiblePages.length === 0 && <p className="public-guide__empty">{t('publicGuide.noResults')}</p>}
            {visiblePages.map((item) => (
              <a
                key={item.id}
                className={item.id === page.id ? 'is-active' : undefined}
                href={`#${item.id}`}
              >
                <span>{t(`publicGuide.sections.${item.section}`)}</span>
                {pageTitle(item, locale, t)}
              </a>
            ))}
          </nav>

          <LegalLinks />
        </aside>

        <main className="public-guide__content">
          {page.id === 'intro' ? (
            <GuideIntro
              hrefs={{
                foundations: '#designPrinciples',
                applications: '#websites',
                templates: '#templates',
                help: '#help',
              }}
            />
          ) : (
            <GuidePage page={page.id} />
          )}
        </main>
      </div>
    </div>
  );
};

export const PublicGuide = () => {
  const [locale, setLocale] = React.useState('de');
  const [theme, setThemeState] = React.useState(getStoredTheme);
  const activeLocale = supportedLocales.includes(locale) ? locale : 'de';
  const activeTheme = supportedThemes.includes(theme) ? theme : 'light';

  const setTheme = React.useCallback((nextTheme) => {
    const safeTheme = supportedThemes.includes(nextTheme) ? nextTheme : 'light';
    applyTheme(safeTheme);
    window.localStorage.setItem('volt-theme', safeTheme);
    setThemeState(safeTheme);
  }, []);

  return (
    <ThemeProvider theme={activeTheme}>
      <I18nProvider locale={activeLocale}>
        <PublicGuideInner setLocale={setLocale} setTheme={setTheme} theme={activeTheme} />
      </I18nProvider>
    </ThemeProvider>
  );
};
