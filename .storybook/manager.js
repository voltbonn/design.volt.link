import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'design.volt.link',
    brandUrl: '/',
    brandTarget: '_self',
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
});
