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

export const TemplatesArea = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const templatesButton = canvas.getByRole('button', { name: /Anpassbare Vorlagen/i });
    await expect(templatesButton).toBeInTheDocument();
    await userEvent.click(templatesButton);

    await expect(canvas.getByLabelText(/Anpassbare Vorlagen/i)).toBeInTheDocument();
    await expect(canvas.getByRole('heading', { name: /Anpassbare Vorlagen/i })).toBeInTheDocument();
  },
};
