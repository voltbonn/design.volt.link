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
        visibilityInternal: 'intern',
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
        helpTitle: 'Hilfe',
        helpText: 'FAQ, Quellen, Freigaben, Kontakt und typische Fehler.',
        startNotice: 'Der Designguide ist die öffentliche Version-1-Oberfläche. Storybook bleibt intern.',
      },
      guideIntro: {
        title: 'Volt Design',
        lead:
          'Der zentrale Designguide für Volt Materialien, Websites, Social Media, Präsentationen und Vorlagen.',
        version:
          'Hier findest du die wichtigsten Gestaltungsregeln, Beispiele und Prüfungen, damit Volt Auftritte klar, wiedererkennbar und zugänglich bleiben.',
        directRoutes: 'Direkte Wege',
        foundationsLabel: 'Grundlagendesign',
        foundationsDescription: 'Prinzipien, Marke, Logo, Farben, Typografie, Layout, Bildsprache und Barrierefreiheit.',
        applicationsLabel: 'Digitale Anwendung',
        applicationsDescription: 'Websites, Komponenten, UI-Elemente, Social Media, Newsletter, Präsentationen und Export.',
        templatesLabel: 'Vorlagen',
        templatesDescription: 'Figma- und Canva-Vorlagen mit Format, Status, Link und Nutzungshinweisen.',
        helpLabel: 'Hilfe',
        helpDescription: 'FAQ, Quellen, Qualitätssicherung, Kontakt und typische Fehler.',
        structure: 'Was du hier findest',
        structureItems: [
          'Klare Markenregeln für Logo, Farbe, Typografie, Layout, Bildsprache und Barrierefreiheit.',
          'Praktische Hinweise für Websites, UI, Social Media, Newsletter, Präsentationen, Video und Export.',
          'Orientierung für wiederkehrende Materialien, Kampagnen und lokale Anpassungen.',
          'Checklisten für den letzten Blick vor Veröffentlichung.',
        ],
        editorialPrinciple: 'Wofür der Guide da ist',
        editorialText:
          'Der Guide übersetzt die Volt Visual Identity in konkrete Entscheidungen: Was ist verbindlich, was ist gute Praxis und worauf sollte jedes Team vor Veröffentlichung achten?',
        startTitle: 'Schnell starten',
        startItems: [
          'Wähle zuerst dein Format: Social Post, Website, Präsentation, Printmaterial oder UI-Element.',
          'Nutze die direkten Wege, um zum passenden Kapitel zu springen.',
          'Übernimm Logo, Farben, Typografie und Abstände aus den Grundlagen.',
          'Prüfe vor Veröffentlichung Lesbarkeit, Kontrast, mobile Ansicht und Bildquelle.',
        ],
        officialSource: 'Offizielle Volt Europe Visual Identity',
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
        sidebarLabel: 'Rechtliche Links in der Seitenleiste',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
      },
      brandManualLinks: {
        title: 'Brand Manual 2026 Links',
        lead:
          'Diese Links wurden am 16.09.2026 ohne Login geprüft. Sie laden öffentlich; Bearbeitungsrechte in Drive oder Figma können trotzdem eingeschränkt sein.',
        page: 'Manual-Seite {{pages}}',
        access: {
          public: 'öffentlich ohne Login',
        },
      },
      inPageNav: {
        label: 'Inhalt',
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
        breadcrumb: 'Breadcrumb',
        copyLink: 'Link kopieren',
        nextPage: 'Nächste Seite',
        skipToContent: 'Zum Hauptinhalt springen',
        language: 'Sprache',
        search: 'Suchen',
        searchPlaceholder: 'Kapitel suchen',
        noResults: 'Keine Kapitel gefunden.',
        expandSection: '{{section}} ausklappen',
        collapseSection: '{{section}} einklappen',
        logoAlt: 'design.volt.link Logo',
        intro: 'Volt Design',
        productLine: 'Civic-Tech Designguide',
        sidebarTitle: 'Volt Design',
        tools: {
          label: 'Ansichtswerkzeuge',
          grid: 'Raster anzeigen',
          gridShort: 'Raster',
          background: 'Hintergrund wechseln',
          backgroundShort: 'Hintergrund',
          outline: 'Konturen anzeigen',
          outlineShort: 'Konturen',
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
          '05': 'Hilfe',
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
      visibilityInternal: 'internal',
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
      helpTitle: 'Help',
      helpText: 'FAQ, sources, approvals, contact and common mistakes.',
      startNotice: 'The design guide is the public version-1 surface. Storybook remains internal.',
    },
    guideIntro: {
      title: 'Volt Design',
      lead:
        'The central design guide for Volt materials, websites, social media, presentations and templates.',
      version:
        'Find the key design rules, examples and checks that keep Volt appearances clear, recognisable and accessible.',
      directRoutes: 'Direct Routes',
      foundationsLabel: 'Foundational Design',
      foundationsDescription: 'Principles, brand, logo, colours, typography, layout, imagery and accessibility.',
      applicationsLabel: 'Digital Application',
      applicationsDescription: 'Websites, components, UI elements, social media, newsletters, presentations and export.',
      templatesLabel: 'Templates',
      templatesDescription: 'Figma and Canva templates with format, status, link and usage notes.',
      helpLabel: 'Help',
      helpDescription: 'FAQ, sources, quality checks, contact and common mistakes.',
      structure: 'What You Will Find Here',
      structureItems: [
        'Clear brand rules for logo, colour, typography, layout, imagery and accessibility.',
        'Practical guidance for websites, UI, social media, newsletters, presentations, video and export.',
        'Orientation for recurring materials, campaigns and local adaptations.',
        'Checklists for the final review before publishing.',
      ],
      editorialPrinciple: 'What This Guide Is For',
      editorialText:
        'The guide turns the Volt visual identity into concrete decisions: what is required, what is good practice and what every team should check before publishing.',
      startTitle: 'Start Quickly',
      startItems: [
        'First choose your format: social post, website, presentation, print material or UI element.',
        'Use the direct routes to jump to the matching chapter.',
        'Take logo, colours, typography and spacing from the foundations.',
        'Before publishing, check readability, contrast, mobile view and image source.',
      ],
      officialSource: 'Official Volt Europe Visual Identity',
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
      sidebarLabel: 'Legal links in the sidebar',
      imprint: 'Legal notice',
      privacy: 'Privacy',
    },
    brandManualLinks: {
      title: 'Brand Manual 2026 Links',
      lead:
        'These links were checked on 2026-09-16 without logging in. They load publicly; edit rights in Drive or Figma may still be restricted.',
      page: 'Manual page {{pages}}',
      access: {
        public: 'public without login',
      },
    },
    inPageNav: {
      label: 'Contents',
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
        breadcrumb: 'Breadcrumb',
        copyLink: 'Copy link',
        nextPage: 'Next page',
        skipToContent: 'Skip to main content',
        language: 'Language',
        search: 'Search',
        searchPlaceholder: 'Search chapters',
        noResults: 'No chapters found.',
        expandSection: 'Expand {{section}}',
        collapseSection: 'Collapse {{section}}',
        logoAlt: 'design.volt.link logo',
        intro: 'Volt Design',
        productLine: 'Civic-tech design guide',
        sidebarTitle: 'Volt Design',
        tools: {
          label: 'View tools',
          grid: 'Show grid',
          gridShort: 'Grid',
          background: 'Change background',
          backgroundShort: 'Background',
          outline: 'Show outlines',
          outlineShort: 'Outlines',
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
          '05': 'Help',
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
      visibilityInternal: 'intern',
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
      helpTitle: 'Hulp',
      helpText: 'FAQ, bronnen, goedkeuringen, contact en veelgemaakte fouten.',
      startNotice: 'De designgids is de openbare versie-1-omgeving. Storybook blijft intern.',
    },
    guideIntro: {
      title: 'Volt Design',
      lead:
        'De centrale designgids voor Volt-materialen, websites, social media, presentaties en sjablonen.',
      version:
        'Hier vind je de belangrijkste ontwerpregels, voorbeelden en controles die Volt-uitingen helder, herkenbaar en toegankelijk houden.',
      directRoutes: 'Directe Routes',
      foundationsLabel: 'Basisdesign',
      foundationsDescription: 'Principes, merk, logo, kleuren, typografie, lay-out, beeldtaal en toegankelijkheid.',
      applicationsLabel: 'Digitale Toepassing',
      applicationsDescription: 'Websites, componenten, UI-elementen, social media, nieuwsbrieven, presentaties en export.',
      templatesLabel: 'Sjablonen',
      templatesDescription: 'Figma- en Canva-sjablonen met formaat, status, link en gebruikstips.',
      helpLabel: 'Hulp',
      helpDescription: 'FAQ, bronnen, kwaliteitscontrole, contact en veelgemaakte fouten.',
      structure: 'Wat je hier vindt',
      structureItems: [
        'Duidelijke merkregels voor logo, kleur, typografie, lay-out, beeldtaal en toegankelijkheid.',
        'Praktische aanwijzingen voor websites, UI, social media, nieuwsbrieven, presentaties, video en export.',
        'Oriëntatie voor terugkerende materialen, campagnes en lokale aanpassingen.',
        'Checklists voor de laatste controle vóór publicatie.',
      ],
      editorialPrinciple: 'Waarvoor deze gids dient',
      editorialText:
        'De gids vertaalt de Volt visual identity naar concrete keuzes: wat is verplicht, wat is goede praktijk en wat moet elk team controleren vóór publicatie?',
      startTitle: 'Snel starten',
      startItems: [
        'Kies eerst je formaat: social post, website, presentatie, printmateriaal of UI-element.',
        'Gebruik de directe routes om naar het juiste hoofdstuk te springen.',
        'Neem logo, kleuren, typografie en spacing over uit de basis.',
        'Controleer vóór publicatie leesbaarheid, contrast, mobiele weergave en beeldbron.',
      ],
      officialSource: 'Officiële Volt Europe visual identity',
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
      sidebarLabel: 'Juridische links in de zijbalk',
      imprint: 'Colofon',
      privacy: 'Privacy',
    },
    brandManualLinks: {
      title: 'Brand Manual 2026-links',
      lead:
        'Deze links zijn op 16-09-2026 zonder login gecontroleerd. Ze laden openbaar; bewerkingsrechten in Drive of Figma kunnen toch beperkt zijn.',
      page: 'Manual-pagina {{pages}}',
      access: {
        public: 'openbaar zonder login',
      },
    },
    inPageNav: {
      label: 'Inhoud',
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
        breadcrumb: 'Breadcrumb',
        copyLink: 'Link kopiëren',
        nextPage: 'Volgende pagina',
        skipToContent: 'Naar hoofdinhoud springen',
        language: 'Taal',
        search: 'Zoeken',
        searchPlaceholder: 'Hoofdstukken zoeken',
        noResults: 'Geen hoofdstukken gevonden.',
        expandSection: '{{section}} uitklappen',
        collapseSection: '{{section}} inklappen',
        logoAlt: 'design.volt.link-logo',
        intro: 'Volt Design',
        productLine: 'Civic-tech designgids',
        sidebarTitle: 'Volt Design',
        tools: {
          label: 'Weergavetools',
          grid: 'Raster tonen',
          gridShort: 'Raster',
          background: 'Achtergrond wisselen',
          backgroundShort: 'Achtergrond',
          outline: 'Contouren tonen',
          outlineShort: 'Contouren',
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
          '05': 'Hulp',
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
        visibilityInternal: 'interne',
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
        helpTitle: 'Aide',
        helpText: 'FAQ, sources, validations, contact et erreurs fréquentes.',
        startNotice: 'Le guide de design est l’interface publique de la version 1. Storybook reste interne.',
      },
      guideIntro: {
        title: 'Design Volt',
        lead:
          'Le guide de design central pour les supports Volt, sites web, réseaux sociaux, présentations et modèles.',
        version:
          'Vous y trouverez les règles, exemples et contrôles essentiels pour garder les supports Volt clairs, reconnaissables et accessibles.',
        directRoutes: 'Accès directs',
        foundationsLabel: 'Design fondamental',
        foundationsDescription: 'Principes, marque, logo, couleurs, typographie, mise en page, langage visuel et accessibilité.',
        applicationsLabel: 'Application numérique',
        applicationsDescription: 'Sites web, composants, éléments UI, réseaux sociaux, newsletters, présentations et export.',
        templatesLabel: 'Modèles',
        templatesDescription: 'Modèles Figma et Canva avec format, statut, lien et consignes d’utilisation.',
        helpLabel: 'Aide',
        helpDescription: 'FAQ, sources, contrôles qualité, contact et erreurs fréquentes.',
        structure: 'Ce que vous trouverez ici',
        structureItems: [
          'Règles de marque claires pour logo, couleur, typographie, mise en page, langage visuel et accessibilité.',
          'Conseils pratiques pour sites web, UI, réseaux sociaux, newsletters, présentations, vidéo et export.',
          'Orientation pour supports récurrents, campagnes et adaptations locales.',
          'Checklists pour le dernier contrôle avant publication.',
        ],
        editorialPrinciple: 'À quoi sert ce guide',
        editorialText:
          'Le guide traduit l’identité visuelle Volt en décisions concrètes : ce qui est obligatoire, ce qui relève des bonnes pratiques et ce que chaque équipe doit vérifier avant publication.',
        startTitle: 'Commencer rapidement',
        startItems: [
          'Choisir d’abord le format : post social, site web, présentation, support print ou élément UI.',
          'Utiliser les accès directs pour aller au chapitre correspondant.',
          'Reprendre logo, couleurs, typographie et espacements depuis les fondamentaux.',
          'Avant publication, vérifier lisibilité, contraste, vue mobile et source d’image.',
        ],
        officialSource: 'Identité visuelle officielle de Volt Europe',
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
        sidebarLabel: 'Liens juridiques de la barre latérale',
        imprint: 'Mentions légales',
        privacy: 'Confidentialité',
      },
      brandManualLinks: {
        title: 'Liens Brand Manual 2026',
        lead:
          'Ces liens ont été vérifiés le 16/09/2026 sans connexion. Ils chargent publiquement ; les droits de modification dans Drive ou Figma peuvent rester limités.',
        page: 'Page du manuel {{pages}}',
        access: {
          public: 'public sans connexion',
        },
      },
      inPageNav: {
        label: 'Contenu',
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
        breadcrumb: 'Fil d’Ariane',
        copyLink: 'Copier le lien',
        nextPage: 'Page suivante',
        skipToContent: 'Aller au contenu principal',
        language: 'Langue',
        search: 'Rechercher',
        searchPlaceholder: 'Rechercher des chapitres',
        noResults: 'Aucun chapitre trouvé.',
        expandSection: 'Développer {{section}}',
        collapseSection: 'Replier {{section}}',
        logoAlt: 'Logo design.volt.link',
        intro: 'Design Volt',
        productLine: 'Guide civic-tech',
        sidebarTitle: 'Design Volt',
        tools: {
          label: 'Outils d’affichage',
          grid: 'Afficher la grille',
          gridShort: 'Grille',
          background: 'Changer l’arrière-plan',
          backgroundShort: 'Fond',
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
          '05': 'Aide',
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
        status: ['geplant', 'planned'].includes(template.status) ? t('common.statusPlanned') : template.status,
        visibility: ['öffentlich geplant', 'public_planned'].includes(template.visibility)
          ? t('common.visibilityPublicPlanned')
          : template.visibility === 'internal'
            ? t('common.visibilityInternal')
            : template.visibility,
        updatedAt: template.updatedAt ?? (template.updated === 'offen' ? t('common.updatedOpen') : template.updated),
      })),
    [templates, t],
  );
};
