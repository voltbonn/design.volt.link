import {
  applications,
  archive,
  accessibility,
  brandManualLinks,
  brandManualPageAdditions,
  brandVoice,
  changes,
  colors,
  decisionGuide,
  deployment,
  designPrinciples,
  designTokens,
  digitalComponents,
  downloads,
  fileExport,
  glossary,
  governance,
  graphicElements,
  guideUsage,
  help,
  iconsUi,
  imageLanguage,
  layout,
  loginPlanning,
  logo,
  machineReadability,
  newsletter,
  pageBlueprint,
  presentations,
  resources,
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
  changes,
  colors,
  decisionGuide,
  deployment,
  designPrinciples,
  designTokens,
  digitalComponents,
  downloads,
  fileExport,
  glossary,
  governance,
  graphicElements,
  guideUsage,
  help,
  iconsUi,
  imageLanguage,
  layout,
  loginPlanning,
  logo,
  machineReadability,
  newsletter,
  pageBlueprint,
  presentations,
  resources,
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
  'changes',
  'decisionGuide',
  'deployment',
  'designPrinciples',
  'designTokens',
  'digitalComponents',
  'downloads',
  'fileExport',
  'glossary',
  'governance',
  'iconsUi',
  'guideUsage',
  'loginPlanning',
  'machineReadability',
  'newsletter',
  'pageBlueprint',
  'presentations',
  'resources',
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
            {item.href && (
              <>
                {' '}
                <a href={item.href}>{item.hrefLabel ?? item.href}</a>
              </>
            )}
            {item.access && <span className="volt-access-note">{item.access}</span>}
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

const ChangeLog = ({ entries }) => (
  <div className="volt-change-log">
    {entries.map((entry) => (
      <article key={`${entry.date}-${entry.category}`} className="volt-change-log__entry">
        <p className="volt-change-log__meta">
          <time dateTime={entry.date}>{entry.date}</time>
          <span>{entry.category}</span>
        </p>
        <List items={entry.items} />
      </article>
    ))}
  </div>
);

const BrandManualLinks = ({ links }) => {
  const { t } = useI18n();

  return (
    <section>
      <h2 id="brand-manual-2026-links">{t('brandManualLinks.title')}</h2>
      <p>{t('brandManualLinks.lead')}</p>
      <div className="volt-link-register">
        {links.map((link) => (
          <article key={link.url}>
            <p className="volt-link-register__meta">
              <span>{t('brandManualLinks.page', { pages: link.pages.join(', ') })}</span>
              <span>{t(`brandManualLinks.access.${link.access}`)}</span>
            </p>
            <h3>{link.label}</h3>
            <a href={link.url}>{link.url}</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export const GuidePage = ({ page: pageId }) => {
  const { locale } = useI18n();
  const page = pages[pageId];
  const c = localeContent(page, locale);
  const manualAdditions = brandManualPageAdditions[pageId]
    ? localeContent(brandManualPageAdditions[pageId], locale)
    : null;

  return (
    <>
      <h1>{c.title}</h1>
      {c.lead && <p>{c.lead}</p>}
      {c.meta && (
        <dl className="volt-page-meta">
          {c.meta.map((item) => (
            <div key={`${item.label}-${item.value}`}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {c.nav && (
        <InPageNav
          items={c.nav.map((item) => ({
            ...item,
            href: `#${pageId}/${item.href.replace(/^#/, '')}`,
          }))}
        />
      )}

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
          <GuidelineGrid headingLevel={2} items={c.guidelines} />
          <h2 id={c.sections.rules.id}>{c.sections.rules.title}</h2>
          <List items={c.sections.rules.items} />
          <h2 id={c.sections.spacing.id}>{c.sections.spacing.title}</h2>
          <List items={c.sections.spacing.items} />
          <h2 id={c.sections.orientation.id}>{c.sections.orientation.title}</h2>
          <List items={c.sections.orientation.items} />
        </>
      )}

      {pageId === 'graphicElements' && (
        <>
          <h2 id={c.sections.document.id}>{c.sections.document.title}</h2>
          <List items={c.sections.document.items} />
          <h2 id={c.sections.markers.id}>{c.sections.markers.title}</h2>
          <List items={c.sections.markers.items} />
        </>
      )}

      {pageId === 'imageLanguage' && (
        <>
          <GuidelineGrid headingLevel={2} items={c.guidelines} />
          <DosDonts doText={c.doText} dontText={c.dontText} />
          <h2 id={c.sections.sources.id}>{c.sections.sources.title}</h2>
          <List items={c.sections.sources.items} />
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

      {pageId === 'changes' && c.entries && <ChangeLog entries={c.entries} />}

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

      {manualAdditions && (
        <>
          {manualAdditions.sections.map((section) => (
            <GenericSection key={section.id} section={section} />
          ))}
        </>
      )}

      {pageId === 'resources' && <BrandManualLinks links={brandManualLinks} />}
    </>
  );
};
