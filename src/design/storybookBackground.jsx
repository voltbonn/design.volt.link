import React from 'react';

const STYLE_ID = 'volt-storybook-background';

const resolveBackground = (context) => {
  const config = context.parameters?.backgrounds ?? {};
  const data = context.globals?.backgrounds;
  const selected = typeof data === 'string' ? data : data?.value;
  const name = selected ?? config.default;
  const item = config.options?.[name];
  const background = typeof item === 'string' ? item : item?.value;

  if (context.globals?.theme === 'dark' && (!selected || name === config.default || background === '#F7F4FA')) {
    return 'var(--volt-surface-muted)';
  }

  return background;
};

const setPreviewBackground = (background) => {
  let style = document.getElementById(STYLE_ID);

  if (!background) {
    style?.remove();
    return;
  }

  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }

  style.textContent = `
    body.sb-show-main,
    body.sb-show-main #storybook-root,
    body.sb-show-main #storybook-docs,
    body.sb-show-main .docs-story,
    body.sb-show-main .sbdocs,
    body.sb-show-main .sbdocs-wrapper,
    body.sb-show-main .sbdocs-content {
      background-color: ${background} !important;
      color: var(--volt-text) !important;
    }
  `;
};

export const withVoltPreviewBackground = (Story, context) => {
  const background = resolveBackground(context);

  React.useEffect(() => {
    setPreviewBackground(background);

    return () => setPreviewBackground(null);
  }, [background]);

  return <Story />;
};
