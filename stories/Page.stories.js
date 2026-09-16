import { expect, userEvent, within } from 'storybook/test';

import { Page } from './Page';

export default {
  title: 'Volt Design/04 Komponenten/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

export const StartAction = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const startButton = canvas.getByRole('button', { name: /Designguide starten/i });
    await expect(startButton).toBeInTheDocument();
    await userEvent.click(startButton);

    await expect(canvas.getByText(/Storybook bleibt intern/i)).toBeInTheDocument();
  },
};
