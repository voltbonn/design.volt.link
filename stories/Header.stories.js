import { fn } from 'storybook/test';

import { Header } from './Header';

export default {
  title: 'Volt Design/04 Komponenten/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onStartGuide: fn(),
  },
};

export const Default = {};
