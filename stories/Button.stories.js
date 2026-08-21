import { fn } from 'storybook/test';
import React from 'react';

import { useT } from '../src/design/i18n';
import { Button } from './Button';

export default {
  title: 'Volt Design/04 Komponenten/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/oONSivQBz9b52yuD5IXeaT/thomas-stuff?node-id=222-643&t=1VxjD8XeYmSluwa1-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    labelKey: { table: { disable: true } },
  },
  args: { onClick: fn() },
  render: ({ labelKey, ...args }) => {
    const t = useT();

    return React.createElement(Button, { ...args, label: t(labelKey) });
  },
};

export const Primary = {
  args: {
    primary: true,
    labelKey: 'buttonStories.openTemplate',
  },
};

export const Secondary = {
  args: {
    labelKey: 'buttonStories.learnMore',
  },
};

export const Large = {
  args: {
    size: 'large',
    labelKey: 'buttonStories.startGuide',
  },
};

export const Small = {
  args: {
    size: 'small',
    labelKey: 'buttonStories.download',
  },
};

export const Hover = {
  args: {
    primary: true,
    labelKey: 'buttonStories.hover',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus = {
  args: {
    primary: true,
    labelKey: 'buttonStories.focus',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};
