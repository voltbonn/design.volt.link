import '../src/design/global.css';
import { DocsI18nContainer } from './DocsI18nContainer';
import { I18nProvider } from '../src/design/i18n';
import { withVoltPreviewBackground } from '../src/design/storybookBackground';
import { ThemeProvider } from '../src/design/theme';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    locale: {
      description: 'Sprache',
      defaultValue: 'de',
      toolbar: {
        icon: 'globe',
        title: 'Sprache',
        items: [
          { value: 'de', title: 'Deutsch' },
          { value: 'en', title: 'English' },
          { value: 'nl', title: 'Nederlands' },
          { value: 'fr', title: 'Français' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Darstellung',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        title: 'Darstellung',
        items: [
          { value: 'light', title: 'Hell' },
          { value: 'dark', title: 'Dunkel' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: 'de',
    theme: 'light',
  },
  decorators: [
    withVoltPreviewBackground,
    (Story, context) => (
      <ThemeProvider theme={context.globals.theme}>
        <I18nProvider key={context.globals.locale} locale={context.globals.locale}>
          <Story />
        </I18nProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      container: DocsI18nContainer,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    backgrounds: {
      default: 'Guide Light',
      disable: false,
      options: {
        'Guide Light': { name: 'Guide Light', value: '#F7F4FA' },
        White: { name: 'White', value: '#FFFFFF' },
        'Volt Purple': { name: 'Volt Purple', value: '#502379' },
        'Volt Yellow': { name: 'Volt Yellow', value: '#FDC220' },
      },
      grid: {
        cellSize: 20,
        cellAmount: 5,
        opacity: 0.45,
      },
    },

    viewport: {
      viewports: {
        mobileSmall: {
          name: 'Mobile 360',
          styles: { width: '360px', height: '740px' },
        },
        mobileLarge: {
          name: 'Mobile 430',
          styles: { width: '430px', height: '932px' },
        },
        tablet: {
          name: 'Tablet 768',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop 1440',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },

    options: {
      storySort: {
        order: [
          'Volt Design',
          [
            '00 Einstieg',
            ['Einstieg', 'Quellen und Regeln'],
            '01 Grundlagendesign',
            [
              'Designprinzipien',
              'Marke und Tonalität',
              'Logo',
              'Farben',
              'Typografie',
              'Layout',
              'Grafische Elemente',
              'Bildsprache',
              'Barrierefreiheit',
            ],
            '02 Digitale Anwendung',
            [
              'Websites',
              'Komponenten',
              'Icons und UI-Elemente',
              'Social Media',
              'Newsletter',
              'Präsentationen',
              'Video und Motion',
              'Dateien und Export',
            ],
            '03 Anwendungen',
            '04 Vorlagen',
            '05 Hilfe',
            '06 Planung',
            ['Deployment', 'Betrieb und Pflege', 'Loginbereich'],
          ],
          'Archiv',
        ],
      },
    },
  },
};

export default preview;
