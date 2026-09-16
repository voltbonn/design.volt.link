import React from 'react';

import { useT } from '../src/design/i18n';
import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [highlightGuide, setHighlightGuide] = React.useState(false);
  const t = useT();

  return (
    <article>
      <Header onStartGuide={() => setHighlightGuide(true)} />

      <section className="storybook-page" data-highlight={highlightGuide ? 'true' : 'false'}>
        <p className="eyebrow">{t('common.version')}</p>
        <h2>{t('page.headline')}</h2>
        <p className="lead">{t('page.lead')}</p>
        <div className="storybook-page__grid">
          <article>
            <h3>{t('page.foundationsTitle')}</h3>
            <p>{t('page.foundationsText')}</p>
          </article>
          <article>
            <h3>{t('page.applicationsTitle')}</h3>
            <p>{t('page.applicationsText')}</p>
          </article>
          <article>
            <h3>{t('page.helpTitle')}</h3>
            <p>{t('page.helpText')}</p>
          </article>
        </div>
        {highlightGuide && <p className="storybook-page__notice">{t('page.startNotice')}</p>}
      </section>
    </article>
  );
};
