import { useT } from '../i18n';
import { SectionNav } from './SectionNav';
import './designComponents.css';

const defaultHrefs = {
  foundations: '?path=/docs/volt-design-01-grundlagen-logo--docs',
  applications: '?path=/docs/volt-design-02-anwendungen-übersicht--docs',
  help: '?path=/docs/volt-design-05-hilfe-faq--docs',
};

const isQuestionList = (items) => {
  const questionCount = items.filter((item) => typeof item === 'string' && item.trim().endsWith('?')).length;

  return questionCount >= 2 && questionCount >= Math.ceil(items.length / 2);
};

const List = ({ items, ordered = false }) => {
  const Tag = ordered ? 'ol' : 'ul';

  return (
    <Tag
      className={[
        'volt-guide-list',
        ordered ? 'volt-guide-list--ordered' : '',
        !ordered && isQuestionList(items) ? 'volt-guide-list--check' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
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
    </Tag>
  );
};

const IntroSection = ({ children }) => <section className="volt-guide-section">{children}</section>;

const LinkedList = ({ items }) => (
  <ul className="volt-linked-list">
    {items.map((item) => (
      <li key={item.href}>
        <a href={item.href}>
          <strong>{item.label}</strong>
          <span>{item.text}</span>
        </a>
      </li>
    ))}
  </ul>
);

export const GuideIntro = ({ hrefs = defaultHrefs }) => {
  const t = useT();

  return (
    <>
      <h1>{t('guideIntro.title')}</h1>

      <p>{t('guideIntro.lead')}</p>
      <p>{t('guideIntro.version')}</p>

      <IntroSection>
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
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.whatTitle')}</h2>
        <p>{t('guideIntro.whatLead')}</p>
        <List ordered items={t('guideIntro.whatItems')} />
        <p>{t('guideIntro.whatNote')}</p>
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.quickStartTitle')}</h2>
        <p>{t('guideIntro.quickStartLead')}</p>
        <List ordered items={t('guideIntro.quickStartItems')} />
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.brandBasisTitle')}</h2>
        <p>{t('guideIntro.brandBasisText')}</p>
        <p>
          <a href="https://volteuropa.org/visual_identity">{t('guideIntro.officialSource')}</a>
        </p>

        <h3>{t('guideIntro.foundationsTitle')}</h3>
        <List items={t('guideIntro.foundationItems')} />
        <p>{t('guideIntro.templatesText')}</p>
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.recognitionTitle')}</h2>
        <p>{t('guideIntro.recognitionLead')}</p>
        <List items={t('guideIntro.recognitionItems')} />
        <p>{t('guideIntro.recognitionQuestion')}</p>
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.goodDesignTitle')}</h2>
        <p>{t('guideIntro.goodDesignLead')}</p>
        <List items={t('guideIntro.goodDesignItems')} />
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.chapterPickerTitle')}</h2>
        <p>{t('guideIntro.chapterPickerLead')}</p>
        <LinkedList
          items={[
            {
              label: t('guideIntro.chapterItems.social.label'),
              text: t('guideIntro.chapterItems.social.text'),
              href: '#socialMedia',
            },
            {
              label: t('guideIntro.chapterItems.website.label'),
              text: t('guideIntro.chapterItems.website.text'),
              href: '#websites',
            },
            {
              label: t('guideIntro.chapterItems.presentation.label'),
              text: t('guideIntro.chapterItems.presentation.text'),
              href: '#presentations',
            },
            {
              label: t('guideIntro.chapterItems.print.label'),
              text: t('guideIntro.chapterItems.print.text'),
              href: '#layout',
            },
            {
              label: t('guideIntro.chapterItems.newsletter.label'),
              text: t('guideIntro.chapterItems.newsletter.text'),
              href: '#newsletter',
            },
            {
              label: t('guideIntro.chapterItems.ui.label'),
              text: t('guideIntro.chapterItems.ui.text'),
              href: '#iconsUi',
            },
          ]}
        />
      </IntroSection>

      <IntroSection>
        <h2>{t('guideIntro.preflightTitle')}</h2>
        <p>{t('guideIntro.preflightLead')}</p>
        <List items={t('guideIntro.preflightItems')} />
        <p>{t('guideIntro.preflightClose')}</p>
      </IntroSection>
    </>
  );
};
