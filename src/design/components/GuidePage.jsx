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
  digitalComponents,
  downloads,
  fileExport,
  foundationTldr,
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
  digitalComponents,
  downloads,
  fileExport,
  foundationTldr,
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
  'foundationTldr',
  'designPrinciples',
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

const normalizeLabel = (label = '') => label.toLowerCase().replace(/[:：]/g, '').trim();
const isWeakExampleLabel = (label) =>
  ['statt', 'instead of', 'nicht', 'au lieu de'].includes(normalizeLabel(label));
const isStrongExampleLabel = (label) =>
  ['besser', 'better', 'mieux'].includes(normalizeLabel(label));
const isQuestionItem = (item) => typeof item === 'string' && item.trim().endsWith('?');
const isQuestionList = (items) => {
  const questionCount = items.filter(isQuestionItem).length;

  return questionCount >= 2 && questionCount >= Math.ceil(items.length / 2);
};
const isDefinitionList = (items) =>
  items.length > 1 &&
  items.every(
    (item) =>
      typeof item === 'object' &&
      item?.label &&
      item?.text &&
      !isWeakExampleLabel(item.label) &&
      !isStrongExampleLabel(item.label),
  );

const ExamplePair = ({ weak, strong }) => (
  <li className="volt-example-pair">
    <article className="volt-example-pair__item volt-example-pair__item--weak">
      <strong>{weak.label}</strong>
      <p>{weak.text.trim()}</p>
    </article>
    <article className="volt-example-pair__item volt-example-pair__item--strong">
      <strong>{strong.label}</strong>
      <p>{strong.text.trim()}</p>
    </article>
  </li>
);

const renderListItems = (items, renderItem) =>
  items.reduce((nodes, item, index) => {
    const next = items[index + 1];

    if (item?.label && next?.label && isWeakExampleLabel(item.label) && isStrongExampleLabel(next.label)) {
      nodes.push(<ExamplePair key={`${item.label}-${next.label}-${index}`} weak={item} strong={next} />);
      return nodes;
    }

    if (index > 0 && items[index - 1]?.label && isWeakExampleLabel(items[index - 1].label) && isStrongExampleLabel(item?.label)) {
      return nodes;
    }

    nodes.push(
      <li key={typeof item === 'string' ? item : `${item.label}-${item.text}`}>
        {typeof item === 'string' ? item : renderItem(item)}
      </li>,
    );

    return nodes;
  }, []);

const List = ({ items }) => (
  isDefinitionList(items) ? (
    <DefinitionList items={items} />
  ) : (
    <ul className={`volt-guide-list${isQuestionList(items) ? ' volt-guide-list--check' : ''}`}>
      {renderListItems(items, (item) => (
        <>
          <strong>{item.label}</strong>
          {item.text}
        </>
      ))}
    </ul>
  )
);

const RichList = ({ items }) => (
  isDefinitionList(items) ? (
    <DefinitionList items={items} />
  ) : (
    <ul className={`volt-guide-list volt-guide-list--rich${isQuestionList(items) ? ' volt-guide-list--check' : ''}`}>
      {renderListItems(items, (item) => (
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
      ))}
    </ul>
  )
);

const DefinitionList = ({ items }) => (
  <dl className="volt-definition-list">
    {items.map((item) => (
      <div key={`${item.label}-${item.text}`}>
        <dt>{item.label.replace(/[:：]\s*$/, '')}</dt>
        <dd>
          {item.text.trim()}
          {item.href && (
            <>
              {' '}
              <a href={item.href}>{item.hrefLabel ?? item.href}</a>
            </>
          )}
          {item.access && <span className="volt-access-note">{item.access}</span>}
        </dd>
      </div>
    ))}
  </dl>
);

const GenericSection = ({ section }) => (
  <section className="volt-guide-section">
    <div className="volt-guide-section__header">
      <h2 id={section.id}>{section.title}</h2>
      {section.text && <p className="volt-section-lead">{section.text}</p>}
    </div>
    {section.items.length > 0 &&
      (section.ordered ? (
        <ol className="volt-guide-list volt-guide-list--ordered">
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

const LogoVariantGallery = ({ items }) => {
  const { t } = useI18n();

  return (
    <div className="volt-logo-variant-grid">
      {items.map((item) => (
        <article key={item.href} className="volt-logo-variant-card">
          <div className={`volt-logo-variant-card__preview volt-logo-variant-card__preview--${item.preview}`}>
            <img src={item.href} alt={item.alt} />
          </div>
          <div className="volt-logo-variant-card__content">
            <p className="volt-download-card__format">{item.format}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.href} download>
              {t('downloadCard.download')}
            </a>
          </div>
        </article>
      ))}
    </div>
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
          <h2 id={c.sections.editorial.id}>{c.sections.editorial.title}</h2>
          <List items={c.sections.editorial.items} />
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
          <h2 id={c.sections.files.id}>{c.sections.files.title}</h2>
          {c.sections.files.text && <p>{c.sections.files.text}</p>}
          <List items={c.sections.files.items} />
          <LogoVariantGallery items={c.logoVariants} />
          <h2 id={c.sections.taglines.id}>{c.sections.taglines.title}</h2>
          {c.sections.taglines.text && <p>{c.sections.taglines.text}</p>}
          <List items={c.sections.taglines.items} />
          <h2 id={c.sections.subbrands.id}>{c.sections.subbrands.title}</h2>
          {c.sections.subbrands.text && <p>{c.sections.subbrands.text}</p>}
          <List items={c.sections.subbrands.items} />
          <h2 id={c.sections.check.id}>{c.sections.check.title}</h2>
          {c.sections.check.text && <p>{c.sections.check.text}</p>}
          <List items={c.sections.check.items} />
        </>
      )}

      {pageId === 'colors' && (
        <>
          <h2 id={c.sections.rules.id}>{c.sections.rules.title}</h2>
          <GuidelineGrid items={c.guidelines} />
          {c.sections.rules.items && <List items={c.sections.rules.items} />}
          <h2 id={c.sections.values.id}>{c.sections.values.title}</h2>
          <div className="volt-color-palette-grid">
            {c.swatches.map((swatch) => (
              <ColorSwatch key={swatch.name} {...swatch} />
            ))}
          </div>
          <h2 id={c.sections.combinations.id}>{c.sections.combinations.title}</h2>
          <List items={c.sections.combinations.items} />
          <h2 id={c.sections.accessibility.id}>{c.sections.accessibility.title}</h2>
          <List items={c.sections.accessibility.items} />
          <h2 id={c.sections.data.id}>{c.sections.data.title}</h2>
          <List items={c.sections.data.items} />
          <h2 id={c.sections.digitalPrint.id}>{c.sections.digitalPrint.title}</h2>
          <List items={c.sections.digitalPrint.items} />
          <h2 id={c.sections.onPurple.id}>{c.sections.onPurple.title}</h2>
          <List items={c.sections.onPurple.items} />
          <h2 id={c.sections.avoid.id}>{c.sections.avoid.title}</h2>
          <List items={c.sections.avoid.items} />
          <h2 id={c.sections.check.id}>{c.sections.check.title}</h2>
          <List items={c.sections.check.items} />
        </>
      )}

      {pageId === 'typography' && (
        <>
          <h2 id={c.sections.roles.id}>{c.sections.roles.title}</h2>
          {c.sections.roles.text && <p>{c.sections.roles.text}</p>}
          {c.sections.roles.items && <List items={c.sections.roles.items} />}
          {c.samples.map((sample) => (
            <TypographySample key={sample.label} {...sample} />
          ))}
          <h2 id={c.sections.hierarchy.id}>{c.sections.hierarchy.title}</h2>
          {c.sections.hierarchy.text && <p>{c.sections.hierarchy.text}</p>}
          <List items={c.sections.hierarchy.items} />
          {c.sections.readability && (
            <>
              <h2 id={c.sections.readability.id}>{c.sections.readability.title}</h2>
              {c.sections.readability.text && <p>{c.sections.readability.text}</p>}
              <List items={c.sections.readability.items} />
            </>
          )}
          <h2 id={c.sections.formats.id}>{c.sections.formats.title}</h2>
          {c.sections.formats.text && <p>{c.sections.formats.text}</p>}
          <List items={c.sections.formats.items} />
          {c.sections.check && (
            <>
              <h2 id={c.sections.check.id}>{c.sections.check.title}</h2>
              <List items={c.sections.check.items} />
            </>
          )}
          {c.sections.open && (
            <>
              <h2 id={c.sections.open.id}>{c.sections.open.title}</h2>
              <List items={c.sections.open.items} />
            </>
          )}
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
