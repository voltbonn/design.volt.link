import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const brandConfig = {
  brandTitle: 'design.volt.link',
  brandUrl: '?path=/docs/volt-design-00-einstieg--docs',
  brandTarget: '_self',
};

const managerThemes = {
  light: create({
    base: 'light',
    ...brandConfig,
    colorPrimary: '#502379',
    colorSecondary: '#502379',
    appBg: '#f7f4fa',
    appContentBg: '#ffffff',
    appBorderColor: '#d8d3e0',
    appBorderRadius: 8,
    barBg: '#ffffff',
    barTextColor: '#625a6f',
    barSelectedColor: '#502379',
    textColor: '#201a29',
    textMutedColor: '#625a6f',
    inputBg: '#ffffff',
    inputBorder: '#d8d3e0',
    inputTextColor: '#201a29',
    inputBorderRadius: 8,
  }),
  dark: create({
    base: 'dark',
    ...brandConfig,
    colorPrimary: '#fdc220',
    colorSecondary: '#fdc220',
    appBg: '#150d20',
    appContentBg: '#21152e',
    appBorderColor: '#71558d',
    appBorderRadius: 8,
    barBg: '#21152e',
    barTextColor: '#cfc4dc',
    barSelectedColor: '#fdc220',
    textColor: '#f8f2ff',
    textMutedColor: '#cfc4dc',
    inputBg: '#1b1028',
    inputBorder: '#71558d',
    inputTextColor: '#f8f2ff',
    inputBorderRadius: 8,
  }),
};

let currentManagerTheme = null;

const searchLabels = {
  de: 'Komponenten suchen',
  en: 'Find components',
  nl: 'Componenten zoeken',
  fr: 'Rechercher des composants',
};

const templateLabels = {
  de: 'Anpassbare Vorlagen',
  en: 'Customisable Templates',
  nl: 'Aanpasbare Sjablonen',
  fr: 'Modèles personnalisables',
};

const getLocaleFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, '').replace(/^\?/, ''));
  const globals = params.get('globals') ?? hashParams.get('globals') ?? '';
  const match = globals.match(/(?:^|;)locale:(de|en|nl|fr)(?:;|$)/);

  return match?.[1] ?? 'de';
};

const getThemeFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, '').replace(/^\?/, ''));
  const globals = params.get('globals') ?? hashParams.get('globals') ?? '';
  const match = globals.match(/(?:^|;)theme:(light|dark)(?:;|$)/);

  return match?.[1] ?? 'light';
};

const getThemeFromPayload = (payload) => {
  const theme = payload?.globals?.theme ?? payload?.userGlobals?.theme ?? payload?.initialGlobals?.theme;

  return theme === 'dark' || theme === 'light' ? theme : null;
};

const applyManagerTheme = (nextTheme = getThemeFromUrl(), { force = false } = {}) => {
  const theme = nextTheme === 'dark' || nextTheme === 'light' ? nextTheme : 'light';

  if (!force && currentManagerTheme === theme) {
    return;
  }

  currentManagerTheme = theme;

  document.documentElement.dataset.theme = theme;
  document.body?.setAttribute('data-theme', theme);
  addons.setConfig({
    theme: managerThemes[theme],
  });
};

const applyManagerThemeFromEvent = (payload) => {
  const theme = getThemeFromPayload(payload);

  if (theme) {
    applyManagerTheme(theme);
  }
};

const injectManagerThemeStyles = () => {
  const styleId = 'volt-manager-theme';
  let style = document.getElementById(styleId);

  if (!style) {
    style = document.createElement('style');
    style.id = styleId;
    document.head.appendChild(style);
  }

  style.textContent = `
    .volt-manager-templates-link {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      min-height: 28px !important;
      border: 0 !important;
      border-radius: 6px !important;
      background: #502379 !important;
      color: #ffffff !important;
      padding: 0 10px !important;
      margin: 0 6px !important;
      font: 700 12px/1 Ubuntu, Arial, sans-serif !important;
      text-decoration: none !important;
      white-space: nowrap !important;
    }

    .volt-manager-templates-link:hover {
      background: #3d185f !important;
      color: #ffffff !important;
    }

    html[data-theme='dark'],
    html[data-theme='dark'] body,
    body[data-theme='dark'],
    body[data-theme='dark'] #root {
      background: #150d20 !important;
      color: #f8f2ff !important;
    }

    body[data-theme='dark'] #root > div,
    body[data-theme='dark'] #root [class*='css-'],
    body[data-theme='dark'] #root [class*='sidebar'],
    body[data-theme='dark'] #root [class*='Sidebar'],
    body[data-theme='dark'] #root [class*='bar'],
    body[data-theme='dark'] #root [class*='Bar'],
    body[data-theme='dark'] #root [class*='panel'],
    body[data-theme='dark'] #root [class*='Panel'] {
      border-color: #71558d;
    }

    body[data-theme='dark'] #root [class*='sidebar'],
    body[data-theme='dark'] #root [class*='Sidebar'],
    body[data-theme='dark'] #root [class*='panel'],
    body[data-theme='dark'] #root [class*='Panel'],
    body[data-theme='dark'] #root [class*='bar'],
    body[data-theme='dark'] #root [class*='Bar'] {
      background-color: #21152e;
      color: #f8f2ff;
    }

    body[data-theme='dark'] input,
    body[data-theme='dark'] textarea,
    body[data-theme='dark'] select {
      background: #1b1028 !important;
      border-color: #71558d !important;
      color: #f8f2ff !important;
    }

    body[data-theme='dark'] [role='dialog'],
    body[data-theme='dark'] [role='menu'],
    body[data-theme='dark'] [role='listbox'],
    body[data-theme='dark'] [data-radix-popper-content-wrapper],
    body[data-theme='dark'] .modal,
    body[data-theme='dark'] .popover {
      background: #21152e !important;
      color: #f8f2ff !important;
      border-color: #71558d !important;
    }

    body[data-theme='dark'] .volt-manager-templates-link {
      background: #6c3a96 !important;
      color: #ffffff !important;
    }

    body[data-theme='dark'] .volt-manager-templates-link:hover {
      background: #7f4fac !important;
      color: #ffffff !important;
    }
  `;
};

const isSearchInput = (input) => {
  const text = [input.placeholder, input.getAttribute('aria-label'), input.type].join(' ').toLowerCase();

  return (
    input.type === 'search' ||
    text.includes('find components') ||
    text.includes('komponenten suchen') ||
    text.includes('componenten zoeken') ||
    text.includes('rechercher des composants') ||
    text.includes('search')
  );
};

const localizeSearch = () => {
  const label = searchLabels[getLocaleFromUrl()];

  document.querySelectorAll('input').forEach((input) => {
    if (isSearchInput(input)) {
      input.placeholder = label;
      input.setAttribute('aria-label', label);
    }
  });
};

const getTemplatesHref = () => {
  const params = new URLSearchParams(window.location.search);
  const globals = params.get('globals');
  const globalsQuery = globals ? `&globals=${encodeURIComponent(globals)}` : '';

  return `?path=/docs/volt-design-04-vorlagen-übersicht--docs${globalsQuery}`;
};

const findManagerToolbar = () => {
  const buttons = [...document.querySelectorAll('button, a')];
  const languageButton = buttons.find((element) =>
    ['Deutsch', 'English', 'Nederlands', 'Français'].includes(element.textContent.trim()),
  );

  return languageButton?.parentElement ?? document.querySelector('[role="toolbar"]');
};

const ensureTemplatesLink = () => {
  const toolbar = findManagerToolbar();

  if (!toolbar) {
    return;
  }

  let link = document.querySelector('.volt-manager-templates-link');

  if (!link) {
    link = document.createElement('a');
    link.className = 'volt-manager-templates-link';
    toolbar.appendChild(link);
  }

  const label = templateLabels[getLocaleFromUrl()];

  link.href = getTemplatesHref();
  link.textContent = label;
  link.title = label;
  link.setAttribute('aria-label', label);
};

const watchManagerText = () => {
  if (!document.body) {
    window.requestAnimationFrame(watchManagerText);
    return;
  }

  injectManagerThemeStyles();
  applyManagerTheme(getThemeFromUrl(), { force: true });
  localizeSearch();
  ensureTemplatesLink();

  const updateManager = () => {
    applyManagerTheme(getThemeFromUrl());
    localizeSearch();
    ensureTemplatesLink();
  };

  const channel = addons.getChannel?.();

  channel?.on('globalsUpdated', (payload) => {
    applyManagerThemeFromEvent(payload);
    localizeSearch();
    ensureTemplatesLink();
  });

  channel?.on('updateGlobals', (payload) => {
    applyManagerThemeFromEvent(payload);
    localizeSearch();
    ensureTemplatesLink();
  });

  channel?.on('setGlobals', (payload) => {
    applyManagerThemeFromEvent(payload);
    localizeSearch();
    ensureTemplatesLink();
  });

  const observer = new MutationObserver(updateManager);
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['placeholder', 'aria-label', 'type', 'data-theme'],
    childList: true,
    subtree: true,
  });

  window.addEventListener('popstate', updateManager);
  window.addEventListener('hashchange', updateManager);
  window.addEventListener('click', () => window.setTimeout(updateManager, 0), true);
  window.addEventListener('focusin', () => window.setTimeout(updateManager, 0), true);
  window.setInterval(updateManager, 250);
};

addons.setConfig({ theme: managerThemes.light });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', watchManagerText, { once: true });
} else {
  watchManagerText();
}
