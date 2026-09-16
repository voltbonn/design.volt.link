import React from 'react';
import {
  applications,
  archive,
  accessibility,
  brandVoice,
  colors,
  designPrinciples,
  digitalComponents,
  fileExport,
  graphicElements,
  help,
  iconsUi,
  imageLanguage,
  layout,
  logo,
  newsletter,
  presentations,
  sources,
  socialMedia,
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
  { id: 'help', section: '05', content: help },
  { id: 'archive', section: 'archive', content: archive },
];

const sectionOrder = ['00', '01', '02', '03', '05', 'archive'];

const languages = [
  { value: 'de', label: 'Deutsch' },
  { value: 'en', label: 'English' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'fr', label: 'Français' },
];

const getHashPage = () => window.location.hash.replace(/^#\/?/, '') || 'intro';

const backgroundModes = ['guide', 'white', 'brand'];

const pageSection = (pageId) => (pages.find((item) => item.id === pageId) ?? pages[0]).section;

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
  const [showGrid, setShowGrid] = React.useState(false);
  const [showOutline, setShowOutline] = React.useState(false);
  const [backgroundIndex, setBackgroundIndex] = React.useState(0);
  const [closedSections, setClosedSections] = React.useState(
    () => new Set(sectionOrder.filter((section) => section !== pageSection(getHashPage()))),
  );
  const activeNavLinkRef = React.useRef(null);

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

  const groupedPages = React.useMemo(
    () =>
      sectionOrder
        .map((section) => ({
          section,
          pages: visiblePages.filter((item) => item.section === section),
        }))
        .filter((group) => group.pages.length > 0),
    [visiblePages],
  );

  const page = pages.find((item) => item.id === activePage) ?? pages[0];
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const background = backgroundModes[backgroundIndex];
  const backgroundLabel = t(`publicGuide.backgrounds.${background}`);
  const isSearching = query.trim().length > 0;

  const toggleSection = React.useCallback((section) => {
    setClosedSections((current) => {
      const next = new Set(current);

      if (next.has(section)) {
        next.delete(section);
      } else {
        next.add(section);
      }

      return next;
    });
  }, []);

  React.useEffect(() => {
    setClosedSections((current) => {
      if (!current.has(page.section)) {
        return current;
      }

      const next = new Set(current);
      next.delete(page.section);
      return next;
    });

    activeNavLinkRef.current?.scrollIntoView({ block: 'nearest' });
  }, [page.id, page.section, groupedPages]);

  return (
    <div className="public-guide" data-theme={theme}>
      <header className="public-guide__topbar">
        <a className="public-guide__brand" href="#intro">
          <span className="public-guide__mark">V</span>
          <span className="public-guide__brand-copy">
            <strong>design.volt.link</strong>
          </span>
        </a>
        <div className="public-guide__tools" aria-label={t('publicGuide.tools.label')}>
          <button
            type="button"
            aria-pressed={showGrid}
            title={t('publicGuide.tools.grid')}
            onClick={() => setShowGrid((value) => !value)}
          >
            <span aria-hidden="true">#</span>
            <span>{t('publicGuide.tools.gridShort')}</span>
          </button>
          <button
            type="button"
            title={`${t('publicGuide.tools.background')}: ${backgroundLabel}`}
            onClick={() => setBackgroundIndex((value) => (value + 1) % backgroundModes.length)}
          >
            <span aria-hidden="true">□</span>
            <span>
              {t('publicGuide.tools.backgroundShort')}: {backgroundLabel}
            </span>
          </button>
          <button
            type="button"
            aria-pressed={showOutline}
            title={t('publicGuide.tools.outline')}
            onClick={() => setShowOutline((value) => !value)}
          >
            <span aria-hidden="true">⌗</span>
            <span>{t('publicGuide.tools.outlineShort')}</span>
          </button>
        </div>
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
            {groupedPages.map((group) => {
              const isExpanded = isSearching || !closedSections.has(group.section);
              const sectionLabel = t(`publicGuide.sections.${group.section}`);

              return (
                <section key={group.section} className="public-guide__nav-section">
                  <button
                    type="button"
                    className="public-guide__nav-section-toggle"
                    aria-expanded={isExpanded}
                    aria-label={t(isExpanded ? 'publicGuide.collapseSection' : 'publicGuide.expandSection', {
                      section: sectionLabel,
                    })}
                    onClick={() => toggleSection(group.section)}
                  >
                    <span aria-hidden="true" className="public-guide__nav-section-chevron">
                      {isExpanded ? '-' : '+'}
                    </span>
                    <span>{sectionLabel}</span>
                  </button>
                  {isExpanded && (
                    <div className="public-guide__nav-section-links">
                      {group.pages.map((item) => (
                        <a
                          key={item.id}
                          className={item.id === page.id ? 'is-active' : undefined}
                          ref={item.id === page.id ? activeNavLinkRef : undefined}
                          href={`#${item.id}`}
                        >
                          {pageTitle(item, locale, t)}
                        </a>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </nav>

          <LegalLinks />
        </aside>

        <main className="public-guide__content">
          <div className="public-guide__content-header">
            <span>{t(`publicGuide.sections.${page.section}`)}</span>
            <strong>{pageTitle(page, locale, t)}</strong>
          </div>
          <article
            className={[
              'public-guide__canvas',
              `public-guide__canvas--${background}`,
              showGrid ? 'is-grid-visible' : '',
              showOutline ? 'is-outline-visible' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {page.id === 'intro' ? (
              <GuideIntro
                hrefs={{
                  foundations: '#designPrinciples',
                  applications: '#websites',
                  help: '#help',
                }}
              />
            ) : (
              <GuidePage page={page.id} />
            )}
          </article>
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
