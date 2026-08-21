import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const searchLabels = {
  de: 'Komponenten suchen',
  en: 'Find components',
  nl: 'Componenten zoeken',
  fr: 'Rechercher des composants',
};

const getLocaleFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, '').replace(/^\?/, ''));
  const globals = params.get('globals') ?? hashParams.get('globals') ?? '';
  const match = globals.match(/(?:^|;)locale:(de|en|nl|fr)(?:;|$)/);

  return match?.[1] ?? 'de';
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

const watchManagerText = () => {
  if (!document.body) {
    window.requestAnimationFrame(watchManagerText);
    return;
  }

  localizeSearch();

  const observer = new MutationObserver(localizeSearch);
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['placeholder', 'aria-label', 'type'],
    childList: true,
    subtree: true,
  });

  window.addEventListener('popstate', localizeSearch);
  window.addEventListener('hashchange', localizeSearch);
  window.addEventListener('click', () => window.setTimeout(localizeSearch, 0), true);
  window.addEventListener('focusin', () => window.setTimeout(localizeSearch, 0), true);
  window.setInterval(localizeSearch, 250);
};

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'design.volt.link',
    brandUrl: '?path=/docs/volt-design-00-einstieg--docs',
    brandTarget: '_self',
  }),
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', watchManagerText, { once: true });
} else {
  watchManagerText();
}
