import React from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';

export const supportedLocales = ['de', 'en', 'nl', 'fr'];

const I18nContext = React.createContext(null);

export const resources = {
  de: {
    translation: {
      meta: {
        languageName: 'Deutsch',
        htmlLang: 'de',
      },
      common: {
        templates: 'Anpassbare Vorlagen',
        backToGuide: 'Zurück zum Designguide',
        version: 'Version 1',
        statusPlanned: 'geplant',
        visibilityPublicPlanned: 'öffentlich geplant',
        updatedOpen: 'offen',
      },
      header: {
        title: 'Volt Design',
      },
      page: {
        placeholder: 'Platzhalter für spätere Funktionen',
        headline: 'Volt Design einfach anwenden',
        lead:
          'Ein öffentlicher Designguide für Mitglieder und Teams, die Materialien, Websites, Social-Media-Grafiken oder Vorlagen im Volt Design erstellen.',
        foundationsTitle: 'Grundlagen',
        foundationsText: 'Logo, Farben, Typografie, Layout, Bildsprache und grafische Elemente.',
        applicationsTitle: 'Anwendungen',
        applicationsText: 'Beispiele für Social Media, Print, Präsentationen, Websites und Materialarbeit.',
        templatesTitle: 'Vorlagen',
        templatesText: 'Figma- und Canva-Vorlagen mit Format, Status, Link und Nutzungshinweisen.',
        templateNotice:
          'Anpassbare Vorlagen sind als eigener Bereich vorbereitet. Ein Backend oder Login gibt es aktuell noch nicht.',
      },
      guideIntro: {
        title: 'Volt Design',
        lead:
          'Der öffentliche Designguide für alle, die Volt sichtbar machen: Mitglieder, Materialteam, Social-Media-Team, Website-Team, Designteam und interessierte Mitglieder.',
        version:
          'Version 1 ist bewusst einfach: ein nachvollziehbarer Guide ohne Login und ohne Vorlagen-Editor. Die erste inhaltliche Grundlage ist die offizielle Volt-Europa-Seite zur Visual Identity.',
        directRoutes: 'Direkte Wege',
        foundationsLabel: 'Grundlagendesign',
        foundationsDescription: 'Prinzipien, Marke, Logo, Farben, Typografie, Layout, Bildsprache und Barrierefreiheit.',
        applicationsLabel: 'Digitale Anwendung',
        applicationsDescription: 'Websites, Komponenten, UI-Elemente, Social Media, Newsletter, Präsentationen und Export.',
        templatesLabel: 'Vorlagen',
        templatesDescription: 'Figma- und Canva-Vorlagen mit Format, Status, Link und Nutzungshinweisen.',
        helpLabel: 'Hilfe',
        helpDescription: 'FAQ, Quellen, Freigaben, Kontakt und typische Fehler.',
        structure: 'Kapitelstruktur',
        structureItems: [
          'Grundlagendesign: Prinzipien, Marke, Logo, Farben, Typografie, Layout, Bildsprache und Barrierefreiheit.',
          'Digitale Anwendung: Websites, Komponenten, UI, Social Media, Newsletter, Präsentationen, Video und Export.',
          'Anwendungen: konkrete Beispiele für wiederkehrende Materialien und Kampagnen.',
          'Vorlagen: Figma- und Canva-Links mit Format, Zielgruppe und Status.',
          'Hilfe: FAQ, Kontakt, Freigabeprozess und typische Fehler.',
        ],
        editorialPrinciple: 'Redaktionsprinzip',
        editorialText:
          'Jedes Kapitel soll kurz erklären, was erlaubt ist, warum es wichtig ist und wie man es praktisch anwendet. Wo möglich, sollen Beispiele, Downloads und Vorlagen direkt neben der Regel stehen.',
        legal: 'Rechtliches',
      },
      templateGallery: {
        search: 'Suchen',
        searchPlaceholder: 'z. B. Instagram, Plakat, Website',
        tool: 'Tool',
        allTools: 'Alle',
        empty: 'Keine Vorlage für diese Suche gefunden.',
      },
      templateCard: {
        open: 'Vorlage öffnen',
        linkPending: 'Link wird ergänzt.',
        updated: 'Stand',
      },
      downloadCard: {
        download: 'Herunterladen',
        pending: 'Wird ergänzt',
      },
      legalLinks: {
        label: 'Rechtliche Links',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
      buttonStories: {
        openTemplate: 'Vorlage öffnen',
        learnMore: 'Mehr erfahren',
        startGuide: 'Designguide starten',
        download: 'Download',
        hover: 'Hover-Zustand',
        focus: 'Fokus-Zustand',
      },
      publicGuide: {
        navigation: 'Navigation',
        language: 'Sprache',
        search: 'Suchen',
        searchPlaceholder: 'Kapitel suchen',
        noResults: 'Keine Kapitel gefunden.',
        intro: 'Volt Design',
        sidebarTitle: 'Volt Design',
        storybook: 'Komponenten',
        tools: {
          label: 'Ansichtswerkzeuge',
          grid: 'Raster anzeigen',
          gridShort: 'Raster',
          background: 'Hintergrund wechseln',
          outline: 'Konturen anzeigen',
          outlineShort: 'Kontur',
        },
        backgrounds: {
          guide: 'Guide',
          white: 'Weiß',
          brand: 'Lila',
        },
        theme: {
          light: 'Light Mode aktivieren',
          dark: 'Dark Mode aktivieren',
          current: {
            light: 'Hell',
            dark: 'Dunkel',
          },
        },
        sections: {
          '00': 'Einstieg',
          '01': 'Grundlagendesign',
          '02': 'Digitale Anwendung',
          '03': 'Anwendungen',
          '04': 'Vorlagen',
          '05': 'Hilfe',
          '06': 'Planung',
          archive: 'Archiv',
        },
      },
      templates: {
        instagramPost: {
          target: 'Social-Media-Team und Mitglieder, die einfache Sharepics erstellen.',
        },
        instagramStory: {
          target: 'Social-Media-Team für Eventhinweise, Rückblicke und kurze Statements.',
        },
        poster: {
          title: 'Plakat',
          target: 'Materialteam für lokale Aktionen, Veranstaltungen und Kampagnen.',
        },
        designSystem: {
          title: 'Designsystem',
          format: 'Komponenten und Tokens',
          target: 'Designteam und Website-Team für Komponenten, Farben und Layoutmuster.',
        },
        websiteBlocks: {
          title: 'Website-Bausteine',
          format: 'Responsive Komponenten',
          target: 'Website-Team für wiederkehrende Abschnitte und Seitentypen.',
        },
      },
    },
  },
  en: {
    translation: {
    meta: {
      languageName: 'English',
      htmlLang: 'en',
    },
    common: {
      templates: 'Customisable Templates',
      backToGuide: 'Back to the design guide',
      version: 'Version 1',
      statusPlanned: 'planned',
      visibilityPublicPlanned: 'public planned',
      updatedOpen: 'open',
    },
    header: {
      title: 'Volt Design',
    },
    page: {
      placeholder: 'Placeholder for future features',
      headline: 'Use Volt Design with confidence',
      lead:
        'A public design guide for members and teams creating materials, websites, social media graphics or templates in Volt Design.',
      foundationsTitle: 'Foundations',
      foundationsText: 'Logo, colours, typography, layout, imagery and graphic elements.',
      applicationsTitle: 'Applications',
      applicationsText: 'Examples for social media, print, presentations, websites and materials.',
      templatesTitle: 'Templates',
      templatesText: 'Figma and Canva templates with format, status, link and usage notes.',
      templateNotice:
        'Customisable templates are prepared as a separate area. There is currently no backend or login.',
    },
    guideIntro: {
      title: 'Volt Design',
      lead:
        'The public design guide for everyone making Volt visible: members, materials teams, social media teams, website teams, design teams and interested members.',
      version:
        'Version 1 is intentionally simple: a clear guide without login and without a template editor. The first content basis is the official Volt Europe visual identity page.',
      directRoutes: 'Direct Routes',
      foundationsLabel: 'Foundational Design',
      foundationsDescription: 'Principles, brand, logo, colours, typography, layout, imagery and accessibility.',
      applicationsLabel: 'Digital Application',
      applicationsDescription: 'Websites, components, UI elements, social media, newsletters, presentations and export.',
      templatesLabel: 'Templates',
      templatesDescription: 'Figma and Canva templates with format, status, link and usage notes.',
      helpLabel: 'Help',
      helpDescription: 'FAQ, sources, approvals, contact and common mistakes.',
      structure: 'Chapter Structure',
      structureItems: [
        'Foundational design: principles, brand, logo, colours, typography, layout, imagery and accessibility.',
        'Digital application: websites, components, UI, social media, newsletters, presentations, video and export.',
        'Applications: practical examples for recurring materials and campaigns.',
        'Templates: Figma and Canva links with format, audience and status.',
        'Help: FAQ, contact, approval process and common mistakes.',
      ],
      editorialPrinciple: 'Editorial Principle',
      editorialText:
        'Each chapter should briefly explain what is allowed, why it matters and how to apply it in practice. Where possible, examples, downloads and templates should sit next to the rule.',
      legal: 'Legal',
    },
    templateGallery: {
      search: 'Search',
      searchPlaceholder: 'e.g. Instagram, poster, website',
      tool: 'Tool',
      allTools: 'All',
      empty: 'No template found for this search.',
    },
    templateCard: {
      open: 'Open template',
      linkPending: 'Link will be added.',
      updated: 'Updated',
    },
    downloadCard: {
      download: 'Download',
      pending: 'Will be added',
    },
    legalLinks: {
      label: 'Legal links',
      imprint: 'Legal notice',
      privacy: 'Privacy',
    },
      buttonStories: {
        openTemplate: 'Open template',
        learnMore: 'Learn more',
        startGuide: 'Start design guide',
        download: 'Download',
        hover: 'Hover state',
        focus: 'Focus state',
      },
      publicGuide: {
        navigation: 'Navigation',
        language: 'Language',
        search: 'Search',
        searchPlaceholder: 'Search chapters',
        noResults: 'No chapters found.',
        intro: 'Volt Design',
        sidebarTitle: 'Volt Design',
        storybook: 'Components',
        tools: {
          label: 'View tools',
          grid: 'Show grid',
          gridShort: 'Grid',
          background: 'Change background',
          outline: 'Show outlines',
          outlineShort: 'Outline',
        },
        backgrounds: {
          guide: 'Guide',
          white: 'White',
          brand: 'Purple',
        },
        theme: {
          light: 'Enable light mode',
          dark: 'Enable dark mode',
          current: {
            light: 'Light',
            dark: 'Dark',
          },
        },
        sections: {
          '00': 'Introduction',
          '01': 'Foundational Design',
          '02': 'Digital Application',
          '03': 'Applications',
          '04': 'Templates',
          '05': 'Help',
          '06': 'Planning',
          archive: 'Archive',
        },
      },
      templates: {
      instagramPost: {
        target: 'Social media team and members creating simple sharepics.',
      },
      instagramStory: {
        target: 'Social media team for event announcements, recaps and short statements.',
      },
      poster: {
        title: 'Poster',
        target: 'Materials team for local actions, events and campaigns.',
      },
      designSystem: {
        title: 'Design system',
        format: 'Components and tokens',
        target: 'Design team and website team for components, colours and layout patterns.',
      },
      websiteBlocks: {
        title: 'Website blocks',
        format: 'Responsive components',
        target: 'Website team for recurring sections and page types.',
      },
    },
    },
  },
  nl: {
    translation: {
    meta: {
      languageName: 'Nederlands',
      htmlLang: 'nl',
    },
    common: {
      templates: 'Aanpasbare Sjablonen',
      backToGuide: 'Terug naar de designgids',
      version: 'Versie 1',
      statusPlanned: 'gepland',
      visibilityPublicPlanned: 'openbaar gepland',
      updatedOpen: 'open',
    },
    header: {
      title: 'Volt Design',
    },
    page: {
      placeholder: 'Plaatshouder voor latere functies',
      headline: 'Volt Design eenvoudig gebruiken',
      lead:
        'Een openbare designgids voor leden en teams die materiaal, websites, socialmediabeelden of sjablonen in Volt Design maken.',
      foundationsTitle: 'Basis',
      foundationsText: 'Logo, kleuren, typografie, lay-out, beeldtaal en grafische elementen.',
      applicationsTitle: 'Toepassingen',
      applicationsText: 'Voorbeelden voor social media, drukwerk, presentaties, websites en materiaal.',
      templatesTitle: 'Sjablonen',
      templatesText: 'Figma- en Canva-sjablonen met formaat, status, link en gebruikstips.',
      templateNotice:
        'Aanpasbare sjablonen zijn voorbereid als aparte omgeving. Er is momenteel nog geen backend of login.',
    },
    guideIntro: {
      title: 'Volt Design',
      lead:
        'De openbare designgids voor iedereen die Volt zichtbaar maakt: leden, materiaalteams, socialmediateams, websiteteams, designteams en geïnteresseerde leden.',
      version:
        'Versie 1 is bewust eenvoudig: een duidelijke gids zonder login en zonder sjablooneditor. De eerste inhoudelijke basis is de officiële Volt Europe-pagina over de visuele identiteit.',
      directRoutes: 'Directe Routes',
      foundationsLabel: 'Basisdesign',
      foundationsDescription: 'Principes, merk, logo, kleuren, typografie, lay-out, beeldtaal en toegankelijkheid.',
      applicationsLabel: 'Digitale Toepassing',
      applicationsDescription: 'Websites, componenten, UI-elementen, social media, nieuwsbrieven, presentaties en export.',
      templatesLabel: 'Sjablonen',
      templatesDescription: 'Figma- en Canva-sjablonen met formaat, status, link en gebruikstips.',
      helpLabel: 'Hulp',
      helpDescription: 'FAQ, bronnen, goedkeuringen, contact en veelgemaakte fouten.',
      structure: 'Hoofdstukstructuur',
      structureItems: [
        'Basisdesign: principes, merk, logo, kleuren, typografie, lay-out, beeldtaal en toegankelijkheid.',
        'Digitale toepassing: websites, componenten, UI, social media, nieuwsbrieven, presentaties, video en export.',
        'Toepassingen: praktische voorbeelden voor terugkerende materialen en campagnes.',
        'Sjablonen: Figma- en Canva-links met formaat, doelgroep en status.',
        'Hulp: FAQ, contact, goedkeuringsproces en veelgemaakte fouten.',
      ],
      editorialPrinciple: 'Redactioneel Principe',
      editorialText:
        'Elk hoofdstuk moet kort uitleggen wat is toegestaan, waarom het belangrijk is en hoe je het praktisch toepast. Waar mogelijk staan voorbeelden, downloads en sjablonen direct naast de regel.',
      legal: 'Juridisch',
    },
    templateGallery: {
      search: 'Zoeken',
      searchPlaceholder: 'bijv. Instagram, poster, website',
      tool: 'Tool',
      allTools: 'Alle',
      empty: 'Geen sjabloon gevonden voor deze zoekopdracht.',
    },
    templateCard: {
      open: 'Sjabloon openen',
      linkPending: 'Link wordt toegevoegd.',
      updated: 'Stand',
    },
    downloadCard: {
      download: 'Downloaden',
      pending: 'Wordt toegevoegd',
    },
    legalLinks: {
      label: 'Juridische links',
      imprint: 'Colofon',
      privacy: 'Privacy',
    },
      buttonStories: {
        openTemplate: 'Sjabloon openen',
        learnMore: 'Meer weten',
        startGuide: 'Designgids starten',
        download: 'Download',
        hover: 'Hover-status',
        focus: 'Focus-status',
      },
      publicGuide: {
        navigation: 'Navigatie',
        language: 'Taal',
        search: 'Zoeken',
        searchPlaceholder: 'Hoofdstukken zoeken',
        noResults: 'Geen hoofdstukken gevonden.',
        intro: 'Volt Design',
        sidebarTitle: 'Volt Design',
        storybook: 'Componenten',
        tools: {
          label: 'Weergavetools',
          grid: 'Raster tonen',
          gridShort: 'Raster',
          background: 'Achtergrond wisselen',
          outline: 'Contouren tonen',
          outlineShort: 'Contour',
        },
        backgrounds: {
          guide: 'Gids',
          white: 'Wit',
          brand: 'Paars',
        },
        theme: {
          light: 'Light mode inschakelen',
          dark: 'Dark mode inschakelen',
          current: {
            light: 'Licht',
            dark: 'Donker',
          },
        },
        sections: {
          '00': 'Start',
          '01': 'Basisdesign',
          '02': 'Digitale Toepassing',
          '03': 'Toepassingen',
          '04': 'Sjablonen',
          '05': 'Hulp',
          '06': 'Planning',
          archive: 'Archief',
        },
      },
      templates: {
      instagramPost: {
        target: 'Socialmediateam en leden die eenvoudige sharepics maken.',
      },
      instagramStory: {
        target: 'Socialmediateam voor eventberichten, terugblikken en korte statements.',
      },
      poster: {
        title: 'Poster',
        target: 'Materiaalteam voor lokale acties, evenementen en campagnes.',
      },
      designSystem: {
        title: 'Designsysteem',
        format: 'Componenten en tokens',
        target: 'Designteam en websiteteam voor componenten, kleuren en lay-outpatronen.',
      },
      websiteBlocks: {
        title: 'Website-bouwstenen',
        format: 'Responsive componenten',
        target: 'Websiteteam voor terugkerende secties en paginatypes.',
      },
    },
    },
  },
  fr: {
    translation: {
      meta: {
        languageName: 'Français',
        htmlLang: 'fr',
      },
      common: {
        templates: 'Modèles personnalisables',
        backToGuide: 'Retour au guide de design',
        version: 'Version 1',
        statusPlanned: 'prévu',
        visibilityPublicPlanned: 'public prévu',
        updatedOpen: 'ouvert',
      },
      header: {
        title: 'Design Volt',
      },
      page: {
        placeholder: 'Espace réservé pour des fonctions futures',
        headline: 'Utiliser le design Volt avec confiance',
        lead:
          'Un guide de design public pour les membres et les équipes qui créent des supports, sites web, visuels pour les réseaux sociaux ou modèles au design Volt.',
        foundationsTitle: 'Fondamentaux',
        foundationsText: 'Logo, couleurs, typographie, mise en page, langage visuel et éléments graphiques.',
        applicationsTitle: 'Applications',
        applicationsText: 'Exemples pour les réseaux sociaux, l’impression, les présentations, les sites web et les supports.',
        templatesTitle: 'Modèles',
        templatesText: 'Modèles Figma et Canva avec format, statut, lien et consignes d’utilisation.',
        templateNotice:
          'Les modèles personnalisables sont préparés comme espace séparé. Il n’y a actuellement ni backend ni connexion.',
      },
      guideIntro: {
        title: 'Design Volt',
        lead:
          'Le guide de design public pour toutes les personnes qui rendent Volt visible : membres, équipes matériel, réseaux sociaux, site web, design et membres intéressés.',
        version:
          'La version 1 reste volontairement simple : un guide clair, sans connexion et sans éditeur de modèles. La première base de contenu est la page officielle de Volt Europe sur l’identité visuelle.',
        directRoutes: 'Accès directs',
        foundationsLabel: 'Design fondamental',
        foundationsDescription: 'Principes, marque, logo, couleurs, typographie, mise en page, langage visuel et accessibilité.',
        applicationsLabel: 'Application numérique',
        applicationsDescription: 'Sites web, composants, éléments UI, réseaux sociaux, newsletters, présentations et export.',
        templatesLabel: 'Modèles',
        templatesDescription: 'Modèles Figma et Canva avec format, statut, lien et consignes d’utilisation.',
        helpLabel: 'Aide',
        helpDescription: 'FAQ, sources, validations, contact et erreurs fréquentes.',
        structure: 'Structure des chapitres',
        structureItems: [
          'Design fondamental : principes, marque, logo, couleurs, typographie, mise en page, langage visuel et accessibilité.',
          'Application numérique : sites web, composants, UI, réseaux sociaux, newsletters, présentations, vidéo et export.',
          'Applications : exemples concrets pour supports récurrents et campagnes.',
          'Modèles : liens Figma et Canva avec format, public cible et statut.',
          'Aide : FAQ, contact, processus de validation et erreurs fréquentes.',
        ],
        editorialPrinciple: 'Principe éditorial',
        editorialText:
          'Chaque chapitre doit expliquer brièvement ce qui est autorisé, pourquoi c’est important et comment l’appliquer concrètement. Lorsque c’est possible, exemples, téléchargements et modèles doivent être placés près de la règle.',
        legal: 'Mentions légales',
      },
      templateGallery: {
        search: 'Rechercher',
        searchPlaceholder: 'p. ex. Instagram, affiche, site web',
        tool: 'Outil',
        allTools: 'Tous',
        empty: 'Aucun modèle trouvé pour cette recherche.',
      },
      templateCard: {
        open: 'Ouvrir le modèle',
        linkPending: 'Le lien sera ajouté.',
        updated: 'Mise à jour',
      },
      downloadCard: {
        download: 'Télécharger',
        pending: 'Sera ajouté',
      },
      legalLinks: {
        label: 'Liens juridiques',
        imprint: 'Mentions légales',
        privacy: 'Confidentialité',
      },
      buttonStories: {
        openTemplate: 'Ouvrir le modèle',
        learnMore: 'En savoir plus',
        startGuide: 'Ouvrir le guide de design',
        download: 'Télécharger',
        hover: 'État au survol',
        focus: 'État de focus',
      },
      publicGuide: {
        navigation: 'Navigation',
        language: 'Langue',
        search: 'Rechercher',
        searchPlaceholder: 'Rechercher des chapitres',
        noResults: 'Aucun chapitre trouvé.',
        intro: 'Design Volt',
        sidebarTitle: 'Design Volt',
        storybook: 'Composants',
        tools: {
          label: 'Outils d’affichage',
          grid: 'Afficher la grille',
          gridShort: 'Grille',
          background: 'Changer l’arrière-plan',
          outline: 'Afficher les contours',
          outlineShort: 'Contours',
        },
        backgrounds: {
          guide: 'Guide',
          white: 'Blanc',
          brand: 'Violet',
        },
        theme: {
          light: 'Activer le mode clair',
          dark: 'Activer le mode sombre',
          current: {
            light: 'Clair',
            dark: 'Sombre',
          },
        },
        sections: {
          '00': 'Introduction',
          '01': 'Design fondamental',
          '02': 'Application numérique',
          '03': 'Applications',
          '04': 'Modèles',
          '05': 'Aide',
          '06': 'Planification',
          archive: 'Archive',
        },
      },
      templates: {
        instagramPost: {
          target: 'Équipe réseaux sociaux et membres qui créent des visuels simples à partager.',
        },
        instagramStory: {
          target: 'Équipe réseaux sociaux pour annonces d’événements, rétrospectives et courts messages.',
        },
        poster: {
          title: 'Affiche',
          target: 'Équipe matériel pour actions locales, événements et campagnes.',
        },
        designSystem: {
          title: 'Système de design',
          format: 'Composants et tokens',
          target: 'Équipe design et site web pour composants, couleurs et modèles de mise en page.',
        },
        websiteBlocks: {
          title: 'Blocs de site web',
          format: 'Composants responsives',
          target: 'Équipe site web pour sections et types de pages récurrents.',
        },
      },
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'de',
  supportedLngs: supportedLocales,
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
});

export const I18nProvider = ({ locale = 'de', children }) => {
  const activeLocale = supportedLocales.includes(locale) ? locale : 'de';
  const fixedT = React.useMemo(() => i18next.getFixedT(activeLocale), [activeLocale]);
  const value = React.useMemo(
    () => ({
      locale: activeLocale,
      t: fixedT,
      i18n: i18next,
    }),
    [activeLocale, fixedT],
  );

  React.useEffect(() => {
    if (i18next.language !== activeLocale) {
      i18next.changeLanguage(activeLocale);
    }

    document.documentElement.lang = i18next.getFixedT(activeLocale)('meta.htmlLang');
  }, [activeLocale]);

  return (
    <I18nextProvider i18n={i18next}>
      <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
    </I18nextProvider>
  );
};

export const useI18n = () => {
  const context = React.useContext(I18nContext);
  const { i18n, t } = useTranslation();

  if (context) {
    return context;
  }

  const locale = supportedLocales.includes(i18n.language) ? i18n.language : 'de';

  return { locale, t, i18n };
};

export const useT = () => {
  const { t } = useI18n();

  return t;
};

export const useLocalizedTemplates = (templates) => {
  const { t } = useI18n();

  return React.useMemo(
    () =>
      templates.map((template) => ({
        ...template,
        title: t(`templates.${template.id}.title`) === `templates.${template.id}.title`
          ? template.title
          : t(`templates.${template.id}.title`),
        format: t(`templates.${template.id}.format`) === `templates.${template.id}.format`
          ? template.format
          : t(`templates.${template.id}.format`),
        target: t(`templates.${template.id}.target`) === `templates.${template.id}.target`
          ? template.target
          : t(`templates.${template.id}.target`),
        status: template.status === 'geplant' ? t('common.statusPlanned') : template.status,
        visibility:
          template.visibility === 'öffentlich geplant' ? t('common.visibilityPublicPlanned') : template.visibility,
        updated: template.updated === 'offen' ? t('common.updatedOpen') : template.updated,
      })),
    [templates, t],
  );
};
