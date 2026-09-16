import React from 'react';

export const supportedThemes = ['light', 'dark'];

export const getSystemTheme = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return getSystemTheme();
  }

  const storedTheme = window.localStorage.getItem('volt-theme');

  return supportedThemes.includes(storedTheme) ? storedTheme : getSystemTheme();
};

export const applyTheme = (theme) => {
  if (typeof document === 'undefined') {
    return;
  }

  const activeTheme = supportedThemes.includes(theme) ? theme : 'light';

  document.documentElement.dataset.theme = activeTheme;
  document.body.dataset.theme = activeTheme;
  document.documentElement.style.colorScheme = activeTheme;
  document.body.style.colorScheme = activeTheme;
};

export const ThemeProvider = ({ theme = 'light', children }) => {
  const activeTheme = supportedThemes.includes(theme) ? theme : 'light';

  React.useLayoutEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  return children;
};
