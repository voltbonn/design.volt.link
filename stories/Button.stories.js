import { fn } from 'storybook/test';

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
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Vorlage oeffnen',
  },
};

export const Secondary = {
  args: {
    label: 'Mehr erfahren',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Designguide starten',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Download',
  },
};

export const Hover = {
  args: {
    primary: true,
    label: 'Hover-Zustand',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Focus = {
  args: {
    primary: true,
    label: 'Fokus-Zustand',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};
