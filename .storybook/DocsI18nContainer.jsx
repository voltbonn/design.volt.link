import React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { I18nProvider } from '../src/design/i18n';
import { ThemeProvider } from '../src/design/theme';

const getLocaleFromUrl = () => {
  const globals = new URLSearchParams(window.location.search).get('globals') ?? '';
  const match = globals.match(/(?:^|;)locale:(de|en|nl|fr)(?:;|$)/);

  return match?.[1] ?? 'de';
};

const getThemeFromUrl = () => {
  const globals = new URLSearchParams(window.location.search).get('globals') ?? '';
  const match = globals.match(/(?:^|;)theme:(light|dark)(?:;|$)/);

  return match?.[1] ?? 'light';
};

export const DocsI18nContainer = ({ children, context, theme }) => {
  const [locale, setLocale] = React.useState(getLocaleFromUrl);
  const [activeTheme, setActiveTheme] = React.useState(getThemeFromUrl);

  React.useEffect(() => {
    const updateGlobals = () => {
      setLocale(getLocaleFromUrl());
      setActiveTheme(getThemeFromUrl());
    };
    const interval = window.setInterval(updateGlobals, 250);

    window.addEventListener('popstate', updateGlobals);
    window.addEventListener('hashchange', updateGlobals);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener('popstate', updateGlobals);
      window.removeEventListener('hashchange', updateGlobals);
    };
  }, []);

  return (
    <ThemeProvider theme={activeTheme}>
      <I18nProvider locale={locale}>
        <DocsContainer context={context} theme={theme}>
          {children}
        </DocsContainer>
      </I18nProvider>
    </ThemeProvider>
  );
};
