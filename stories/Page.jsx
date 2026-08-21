import React from 'react';

import { useT } from '../src/design/i18n';
import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [showTemplates, setShowTemplates] = React.useState(false);
  const t = useT();

  return (
    <article>
      <Header onOpenTemplates={() => setShowTemplates(true)} />

      {showTemplates ? (
        <section className="protected-page" aria-label={t('common.templates')}>
          <div>
            <p>{t('page.placeholder')}</p>
            <h2>{t('common.templates')}</h2>
            <button type="button" onClick={() => setShowTemplates(false)}>
              {t('common.backToGuide')}
            </button>
          </div>
        </section>
      ) : (
        <section className="storybook-page">
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
              <h3>{t('page.templatesTitle')}</h3>
              <p>{t('page.templatesText')}</p>
            </article>
          </div>
          <p>{t('page.templateNotice')}</p>
        </section>
      )}
    </article>
  );
};
