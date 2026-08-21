import {
  applications,
  archive,
  accessibility,
  brandVoice,
  colors,
  deployment,
  designPrinciples,
  digitalComponents,
  fileExport,
  governance,
  graphicElements,
  help,
  iconsUi,
  imageLanguage,
  layout,
  loginPlanning,
  logo,
  newsletter,
  presentations,
  sources,
  socialMedia,
  templates,
  typography,
  videoMotion,
  websites,
} from '../content/guidePages';
import { templates as templateData } from '../data/templates';
import { useI18n } from '../i18n';
import { ApplicationCard } from './ApplicationCard';
import { ColorSwatch } from './ColorSwatch';
import { DosDonts } from './DosDonts';
import { DownloadCard } from './DownloadCard';
import { GuidelineGrid } from './GuidelineGrid';
import { InPageNav } from './InPageNav';
import { LegalLinks } from './LegalLinks';
import { TemplateGallery } from './TemplateGallery';
import { TypographySample } from './TypographySample';

const pages = {
  applications,
  archive,
  accessibility,
  brandVoice,
  colors,
  deployment,
  designPrinciples,
  digitalComponents,
  fileExport,
  governance,
  graphicElements,
  help,
  iconsUi,
  imageLanguage,
  layout,
  loginPlanning,
  logo,
  newsletter,
  presentations,
  sources,
  socialMedia,
  templates,
  typography,
  videoMotion,
  websites,
};

const genericPageIds = [
  'accessibility',
  'brandVoice',
  'deployment',
  'designPrinciples',
  'digitalComponents',
  'fileExport',
  'governance',
  'iconsUi',
  'loginPlanning',
  'newsletter',
  'presentations',
  'socialMedia',
  'videoMotion',
  'websites',
  'archive',
];

const localeContent = (page, locale) => page[locale] ?? page.de;

const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const RichList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.label ?? item}>
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

const GenericSection = ({ section }) => (
  <section>
    <h2 id={section.id}>{section.title}</h2>
    {section.text && <p>{section.text}</p>}
    {section.items.length > 0 &&
      (section.ordered ? (
        <ol>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <RichList items={section.items} />
      ))}
  </section>
);

export const GuidePage = ({ page: pageId }) => {
  const { locale } = useI18n();
  const page = pages[pageId];
  const c = localeContent(page, locale);

  return (
    <>
      <h1>{c.title}</h1>
      {c.lead && <p>{c.lead}</p>}

      {c.nav && <InPageNav items={c.nav} />}

      {pageId === 'sources' && (
        <>
          <p>
            <a href="https://volteuropa.org/visual_identity">https://volteuropa.org/visual_identity</a>
          </p>
          <h2 id={c.sections.foundation.id}>{c.sections.foundation.title}</h2>
          <List items={c.sections.foundation.items} />
          <h2 id={c.sections.legal.id}>{c.sections.legal.title}</h2>
          <p>{c.sections.legal.text}</p>
          <h2 id={c.sections.links.id}>{c.sections.links.title}</h2>
          <p>{c.sections.links.text}</p>
          <LegalLinks />
          <h2 id={c.sections.open.id}>{c.sections.open.title}</h2>
          <List items={c.sections.open.items} />
        </>
      )}

      {pageId === 'logo' && (
        <>
          <h2 id={c.sections.rules.id}>{c.sections.rules.title}</h2>
          <List items={c.sections.rules.items} />
          <GuidelineGrid items={c.guidelines} />
          <h2 id={c.sections.dos.id}>{c.sections.dos.title}</h2>
          {c.dosDonts.map((item) => (
            <DosDonts key={item.doText} doText={item.doText} dontText={item.dontText} />
          ))}
          <h2 id={c.sections.storage.id}>{c.sections.storage.title}</h2>
          <List items={c.sections.storage.items} />
          <DownloadCard {...c.download} />
        </>
      )}

      {pageId === 'colors' && (
        <>
          <h2 id={c.sections.rules.id}>{c.sections.rules.title}</h2>
          <GuidelineGrid items={c.guidelines} />
          <h2 id={c.sections.values.id}>{c.sections.values.title}</h2>
          {c.swatches.map((swatch) => (
            <ColorSwatch key={swatch.name} {...swatch} />
          ))}
          <h2 id={c.sections.combinations.id}>{c.sections.combinations.title}</h2>
          <List items={c.sections.combinations.items} />
          <h2 id={c.sections.avoid.id}>{c.sections.avoid.title}</h2>
          <List items={c.sections.avoid.items} />
        </>
      )}

      {pageId === 'typography' && (
        <>
          <h2 id={c.sections.roles.id}>{c.sections.roles.title}</h2>
          {c.samples.map((sample) => (
            <TypographySample key={sample.label} {...sample} />
          ))}
          <h2 id={c.sections.hierarchy.id}>{c.sections.hierarchy.title}</h2>
          <List items={c.sections.hierarchy.items} />
          <h2 id={c.sections.formats.id}>{c.sections.formats.title}</h2>
          <List items={c.sections.formats.items} />
          <h2 id={c.sections.open.id}>{c.sections.open.title}</h2>
          <List items={c.sections.open.items} />
        </>
      )}

      {pageId === 'layout' && (
        <>
          <GuidelineGrid items={c.guidelines} />
          <h2 id={c.sections.rules.id}>{c.sections.rules.title}</h2>
          <List items={c.sections.rules.items} />
          <h2 id={c.sections.orientation.id}>{c.sections.orientation.title}</h2>
          <List items={c.sections.orientation.items} />
        </>
      )}

      {pageId === 'graphicElements' && (
        <>
          <h2 id={c.sections.document.id}>{c.sections.document.title}</h2>
          <List items={c.sections.document.items} />
        </>
      )}

      {pageId === 'imageLanguage' && (
        <>
          <GuidelineGrid items={c.guidelines} />
          <DosDonts doText={c.doText} dontText={c.dontText} />
          <h2 id={c.sections.clarify.id}>{c.sections.clarify.title}</h2>
          <List items={c.sections.clarify.items} />
          <h2 id={c.sections.storage.id}>{c.sections.storage.title}</h2>
          <p>{c.sections.storage.text}</p>
        </>
      )}

      {pageId === 'applications' && (
        <>
          <h2 id={c.sections.examples.id}>{c.sections.examples.title}</h2>
          {c.cards.map((card) => (
            <ApplicationCard key={card.title} {...card} />
          ))}
        </>
      )}

      {pageId === 'templates' && (
        <>
          <h2 id={c.sections.metadata.id}>{c.sections.metadata.title}</h2>
          <List items={c.sections.metadata.items} />
          <h2 id={c.sections.guidance.id}>{c.sections.guidance.title}</h2>
          <List items={c.sections.guidance.items} />
          <h2 id={c.sections.gallery.id}>{c.sections.gallery.title}</h2>
          <TemplateGallery templates={templateData} />
        </>
      )}

      {pageId === 'help' && (
        <>
          <h2 id={c.sections.topics.id}>{c.sections.topics.title}</h2>
          <List items={c.sections.topics.items} />
          <h2 id={c.sections.answers.id}>{c.sections.answers.title}</h2>
          {c.answers.map((answer) => (
            <section key={answer.question}>
              <h3>{answer.question}</h3>
              <p>{answer.answer}</p>
            </section>
          ))}
          <h2 id={c.sections.legal.id}>{c.sections.legal.title}</h2>
          <LegalLinks />
        </>
      )}

      {genericPageIds.includes(pageId) && (
        <>
          {c.sections.map((section) => (
            <GenericSection key={section.id} section={section} />
          ))}
        </>
      )}
    </>
  );
};
