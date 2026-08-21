import '../src/design/global.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
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
      values: [
        { name: 'Guide Light', value: '#F7F4FA' },
        { name: 'White', value: '#FFFFFF' },
        { name: 'Volt Purple', value: '#502379' },
        { name: 'Volt Yellow', value: '#FDC220' },
      ],
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
            '01 Grundlagen',
            ['Logo', 'Farben', 'Typografie', 'Layout', 'Grafische Elemente', 'Bildsprache'],
            '02 Anwendungen',
            '03 Vorlagen',
            '04 Komponenten',
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
