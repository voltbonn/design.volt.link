import { useT } from '../i18n';
import { LegalLinks } from './LegalLinks';
import { SectionNav } from './SectionNav';
import './designComponents.css';

const defaultHrefs = {
  foundations: '?path=/docs/volt-design-01-grundlagen-logo--docs',
  applications: '?path=/docs/volt-design-02-anwendungen-übersicht--docs',
  templates: '?path=/docs/volt-design-03-vorlagen-übersicht--docs',
  help: '?path=/docs/volt-design-05-hilfe-faq--docs',
};

export const GuideIntro = ({ hrefs = defaultHrefs }) => {
  const t = useT();
  const structureItems = t('guideIntro.structureItems');

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
            label: t('guideIntro.templatesLabel'),
            description: t('guideIntro.templatesDescription'),
            href: hrefs.templates,
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

      <h2>{t('guideIntro.legal')}</h2>
      <LegalLinks />
    </>
  );
};
