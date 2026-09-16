import { decisionGuide, guideUsage, sources } from '../content/guidePages';
import { useI18n, useT } from '../i18n';
import { SectionNav } from './SectionNav';
import './designComponents.css';

const defaultHrefs = {
  foundations: '?path=/docs/volt-design-01-grundlagen-logo--docs',
  applications: '?path=/docs/volt-design-02-anwendungen-übersicht--docs',
  help: '?path=/docs/volt-design-05-hilfe-faq--docs',
};

const localizedContent = (content, locale) => content[locale] ?? content.de;

const RichList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={typeof item === 'string' ? item : `${item.label}-${item.text}`}>
        {typeof item === 'string' ? (
          item
        ) : (
          <>
            <strong>{item.label}</strong>
            {item.text}
          </>
        )}
      </li>
    ))}
  </ul>
);

export const GuideIntro = ({ hrefs = defaultHrefs }) => {
  const { locale } = useI18n();
  const t = useT();
  const structureItems = t('guideIntro.structureItems');
  const startItems = t('guideIntro.startItems');
  const sourceContent = localizedContent(sources, locale);
  const usageContent = localizedContent(guideUsage, locale);
  const decisionContent = localizedContent(decisionGuide, locale);

  return (
    <>
      <h1>{t('guideIntro.title')}</h1>

      <p>{t('guideIntro.lead')}</p>
      <p>{t('guideIntro.version')}</p>

      <h2>{t('guideIntro.directRoutes')}</h2>
      <SectionNav
        label={t('guideIntro.directRoutes')}
        items={[
          {
            label: t('guideIntro.foundationsLabel'),
            description: t('guideIntro.foundationsDescription'),
            href: hrefs.foundations,
          },
          {
            label: t('guideIntro.applicationsLabel'),
            description: t('guideIntro.applicationsDescription'),
            href: hrefs.applications,
          },
          {
            label: t('guideIntro.helpLabel'),
            description: t('guideIntro.helpDescription'),
            href: hrefs.help,
          },
        ]}
      />

      <h2>{t('guideIntro.structure')}</h2>
      <ol>
        {(Array.isArray(structureItems) ? structureItems : []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2>{t('guideIntro.editorialPrinciple')}</h2>
      <p>{t('guideIntro.editorialText')}</p>

      <h2>{t('guideIntro.startTitle')}</h2>
      <ol>
        {(Array.isArray(startItems) ? startItems : []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <h2 id="quellen-und-arbeitsgrundlage">{sourceContent.title}</h2>
      <p>{sourceContent.lead}</p>
      <p>
        <a href="https://volteuropa.org/visual_identity">{t('guideIntro.officialSource')}</a>
      </p>
      <h3 id={sourceContent.sections.foundation.id}>{sourceContent.sections.foundation.title}</h3>
      <RichList items={sourceContent.sections.foundation.items} />
      <h3 id={sourceContent.sections.editorial.id}>{sourceContent.sections.editorial.title}</h3>
      <RichList items={sourceContent.sections.editorial.items} />

      <h2 id="so-nutzt-du-diesen-guide">{usageContent.title}</h2>
      <p>{usageContent.lead}</p>
      {usageContent.sections.map((section) => (
        <section key={section.id}>
          <h3 id={section.id}>{section.title}</h3>
          <RichList items={section.items} />
        </section>
      ))}

      <h2 id="entscheidungshilfe">{decisionContent.title}</h2>
      <p>{decisionContent.lead}</p>
      {decisionContent.sections.map((section) => (
        <section key={section.id}>
          <h3 id={section.id}>{section.title}</h3>
          <RichList items={section.items} />
        </section>
      ))}
    </>
  );
};
