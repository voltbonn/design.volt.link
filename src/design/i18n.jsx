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
          'Ein Designguide für Volt-Materialien, Websites, Social Media, Präsentationen und Vorlagen.',
        version:
          'Hier findest du die wichtigsten Gestaltungsregeln, Beispiele und praktische Hilfen, damit Volt überall klar, wiedererkennbar und zugänglich auftritt.',
        directRoutes: 'Direkte Wege',
        foundationsLabel: 'Grundlagen',
        foundationsDescription: 'Marke, Logo, Farben, Typografie, Layout, Bildsprache und Barrierefreiheit.',
        applicationsLabel: 'Digitale Anwendungen',
        applicationsDescription: 'Websites, Komponenten, UI-Elemente, Social Media, Newsletter, Präsentationen und Export.',
        templatesLabel: 'Vorlagen',
        templatesDescription: 'Figma- und Canva-Vorlagen mit Format, Status, Link und Nutzungshinweisen.',
        helpLabel: 'Hilfe & Qualitätssicherung',
        helpDescription: 'FAQ, Quellen, Checklisten, typische Fehler und Kontaktmöglichkeiten.',
        whatTitle: 'Was du hier findest',
        whatLead: 'Du findest hier:',
        whatItems: [
          'verbindliche Grundlagen für Logo, Farben und Typografie,',
          'praktische Empfehlungen für Layout, Bildsprache und Barrierefreiheit,',
          'Hinweise für Websites, Social Media, Präsentationen, Newsletter, Print und UI,',
          'Vorlagen und Beispiele für typische Anwendungen,',
          'Checklisten für den letzten Qualitätscheck vor der Veröffentlichung.',
        ],
        whatNote:
          'Dabei wird deutlich unterschieden zwischen verbindlichen Vorgaben, Empfehlungen und guten Beispielen.',
        quickStartTitle: 'Schnell starten',
        quickStartLead: 'Du willst direkt loslegen?',
        quickStartItems: [
          { label: 'Wähle dein Format:', text: ' Social Post, Website, Präsentation, Printmaterial oder UI.' },
          { label: 'Öffne das passende Kapitel', text: ' über die direkten Wege oder die Übersicht weiter unten.' },
          { label: 'Nutze die Grundlagen', text: ' für Logo, Farben, Typografie und Layout.' },
          { label: 'Prüfe dein Ergebnis', text: ' vor der Veröffentlichung auf Lesbarkeit, Kontrast, Darstellung und Bildrechte.' },
        ],
        brandBasisTitle: 'Markenbasis',
        brandBasisText:
          'Grundlage dieses Guides ist die offizielle Volt Europe Visual Identity. Der Guide überträgt diese Vorgaben auf typische Anwendungen und Materialien bei Volt.',
        officialSource: 'Offizielle Volt Europe Visual Identity',
        foundationsTitle: 'Die wichtigsten Grundlagen',
        foundationItems: [
          { label: 'Logo:', text: ' Der Volt-Schriftzug ist das zentrale Markenzeichen. Je nach Anwendung kann er mit den EU-Sternen kombiniert werden.' },
          { label: 'Farben:', text: ' Volt Lila und Weiß bilden die Basis. Gelb, Blau, Grün und Rot ergänzen die Farbwelt für definierte Anwendungen.' },
          { label: 'Typografie:', text: ' Ubuntu ist die Standardschrift für Überschriften, Fließtext und Calls to Action.' },
          { label: 'Grafische Elemente:', text: ' Linien und rechteckige Formen können die Gestaltung unterstützen. Typisch für Volt ist dabei insbesondere der aufwärts gerichtete 21-Grad-Winkel.' },
          { label: 'Barrierefreiheit:', text: ' Gestaltung muss nicht nur gut aussehen, sondern auch gut lesbar und zugänglich sein.' },
        ],
        templatesText:
          'Vorlagen und Beispiele zeigen, wie diese Grundlagen in verschiedenen Formaten zusammenspielen.',
        recognitionTitle: 'Volt erkennbar machen',
        recognitionLead:
          'Nicht jedes Material muss gleich aussehen. Es sollte aber immer eindeutig als Volt erkennbar sein.',
        recognitionItems: [
          'Die offiziellen Volt-Europe-Vorgaben bilden die gemeinsame Grundlage.',
          'Materialien sollen an Format, Zielgruppe und lokalen Kontext angepasst werden.',
          'Logo, Farben und Typografie sorgen für eine konsistente Markenbildung.',
          'Gestaltung unterstützt die Botschaft und sollte nicht mit ihr konkurrieren.',
          'Öffentliche Inhalte sollten auch ohne Vorwissen schnell verständlich sein.',
        ],
        recognitionQuestion:
          'Ein gutes Volt-Design beantwortet auf den ersten Blick drei Fragen: Wer spricht? Worum geht es? Was soll ich als Nächstes tun?',
        goodDesignTitle: 'Gute Gestaltung im Alltag',
        goodDesignLead: 'Einige Grundsätze funktionieren unabhängig vom Format:',
        goodDesignItems: [
          { label: 'Eine klare Hauptbotschaft:', text: ' Nicht alles muss gleichzeitig Aufmerksamkeit bekommen.' },
          { label: 'Klare Hierarchie:', text: ' Die wichtigste Information sollte zuerst auffallen.' },
          { label: 'Genug Weißraum:', text: ' Inhalte brauchen Platz, um schnell erfasst werden zu können.' },
          { label: 'Konsistente Gestaltung:', text: ' Farben, Schrift, Abstände und Bildsprache sollten zusammenpassen.' },
          { label: 'Klare Handlungsaufforderung:', text: ' Wenn Menschen etwas tun sollen, sollte sofort verständlich sein, was.' },
          { label: 'Mobile mitdenken:', text: ' Gerade Social Media, Websites und Newsletter werden häufig auf kleinen Bildschirmen gesehen.' },
        ],
        chapterPickerTitle: 'Welches Kapitel brauche ich?',
        chapterPickerLead: 'Wenn du etwas Konkretes erstellen möchtest, kannst du direkt beim Format einsteigen:',
        chapterItems: {
          social: { label: 'Social Post:', text: ' Social Media, Farben, Typografie, Bildsprache und Barrierefreiheit' },
          website: { label: 'Website:', text: ' Websites, Komponenten, Farben und Barrierefreiheit' },
          presentation: { label: 'Präsentation:', text: ' Präsentationen, Logo, Typografie sowie Dateien & Export' },
          print: { label: 'Flyer oder Plakat:', text: ' Layout, Farben, Logo, Bildquellen und Print-Export' },
          newsletter: { label: 'Newsletter:', text: ' Typografie, Farben, Bildsprache, Barrierefreiheit und Newsletter' },
          ui: { label: 'Icon oder UI-Element:', text: ' Icons & UI, Komponenten, Accessibility und Farben' },
        },
        preflightTitle: 'Vor der Veröffentlichung',
        preflightLead: 'Ein kurzer letzter Check verhindert die häufigsten Fehler:',
        preflightItems: [
          'Ist auf den ersten Blick erkennbar, dass das Material von Volt kommt?',
          'Ist die wichtigste Botschaft innerhalb weniger Sekunden verständlich?',
          'Stimmen Logo, Farben und Typografie mit den Volt-Vorgaben überein?',
          'Sind Text und Kontraste gut lesbar?',
          'Funktioniert das Material auch auf einem Smartphone?',
          'Haben verwendete Bilder eine klare Quelle und dürfen sie genutzt werden?',
          'Sind notwendige Alt-Texte oder andere Anforderungen an die Barrierefreiheit berücksichtigt?',
        ],
        preflightClose:
          'Wenn diese Punkte passen, ist das Material in der Regel bereit für die Veröffentlichung.',
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
          format: 'Komponenten und UI',
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
        'A design guide for Volt materials, websites, social media, presentations and templates.',
      version:
        'Find the key design rules, examples and practical help that make Volt clear, recognisable and accessible everywhere.',
      directRoutes: 'Direct Routes',
      foundationsLabel: 'Foundations',
      foundationsDescription: 'Brand, logo, colours, typography, layout, imagery and accessibility.',
      applicationsLabel: 'Digital Applications',
      applicationsDescription: 'Websites, components, UI elements, social media, newsletters, presentations and export.',
      templatesLabel: 'Templates',
      templatesDescription: 'Figma and Canva templates with format, status, link and usage notes.',
      helpLabel: 'Help & Quality Assurance',
      helpDescription: 'FAQ, sources, checklists, common mistakes and contact options.',
      whatTitle: 'What You Will Find Here',
      whatLead: 'You will find:',
      whatItems: [
        'binding foundations for logo, colours and typography,',
        'practical recommendations for layout, imagery and accessibility,',
        'guidance for websites, social media, presentations, newsletters, print and UI,',
        'templates and examples for typical applications,',
        'checklists for the final quality check before publishing.',
      ],
      whatNote:
        'The guide clearly distinguishes between binding rules, recommendations and good examples.',
      quickStartTitle: 'Start Quickly',
      quickStartLead: 'Want to get going right away?',
      quickStartItems: [
        { label: 'Choose your format:', text: ' social post, website, presentation, print material or UI.' },
        { label: 'Open the matching chapter', text: ' through the direct routes or the overview below.' },
        { label: 'Use the foundations', text: ' for logo, colours, typography and layout.' },
        { label: 'Check your result', text: ' before publishing for readability, contrast, display and image rights.' },
      ],
      brandBasisTitle: 'Brand Basis',
      brandBasisText:
        'This guide is based on the official Volt Europe Visual Identity. It translates those rules into typical Volt applications and materials.',
      officialSource: 'Official Volt Europe Visual Identity',
      foundationsTitle: 'The Most Important Foundations',
      foundationItems: [
        { label: 'Logo:', text: ' The Volt wordmark is the central brand mark. Depending on the application, it may be combined with the EU stars.' },
        { label: 'Colours:', text: ' Volt Purple and white form the base. Yellow, blue, green and red extend the palette for defined applications.' },
        { label: 'Typography:', text: ' Ubuntu is the standard typeface for headings, body text and calls to action.' },
        { label: 'Graphic elements:', text: ' Lines and rectangular shapes can support the design. The upward 21-degree angle is especially typical for Volt.' },
        { label: 'Accessibility:', text: ' Design must not only look good; it also needs to be readable and accessible.' },
      ],
      templatesText:
        'Templates and examples show how these foundations work together across different formats.',
      recognitionTitle: 'Make Volt Recognisable',
      recognitionLead:
        'Not every material has to look the same. But it should always be clearly recognisable as Volt.',
      recognitionItems: [
        'The official Volt Europe rules form the shared foundation.',
        'Materials should be adapted to format, audience and local context.',
        'Logo, colours and typography create consistent brand recognition.',
        'Design supports the message and should not compete with it.',
        'Public content should be quickly understandable without prior knowledge.',
      ],
      recognitionQuestion:
        'Good Volt design answers three questions at first glance: who is speaking, what is it about, and what should I do next?',
      goodDesignTitle: 'Good Everyday Design',
      goodDesignLead: 'Some principles work regardless of format:',
      goodDesignItems: [
        { label: 'One clear main message:', text: ' not everything needs attention at the same time.' },
        { label: 'Clear hierarchy:', text: ' the most important information should stand out first.' },
        { label: 'Enough whitespace:', text: ' content needs room so it can be understood quickly.' },
        { label: 'Consistent design:', text: ' colours, type, spacing and imagery should work together.' },
        { label: 'Clear call to action:', text: ' if people should do something, it should be immediately clear what.' },
        { label: 'Think mobile:', text: ' social media, websites and newsletters are often seen on small screens.' },
      ],
      chapterPickerTitle: 'Which Chapter Do I Need?',
      chapterPickerLead: 'If you want to create something concrete, start directly with the format:',
      chapterItems: {
        social: { label: 'Social post:', text: ' social media, colours, typography, imagery and accessibility' },
        website: { label: 'Website:', text: ' websites, components, colours and accessibility' },
        presentation: { label: 'Presentation:', text: ' presentations, logo, typography and files & export' },
        print: { label: 'Flyer or poster:', text: ' layout, colours, logo, image sources and print export' },
        newsletter: { label: 'Newsletter:', text: ' typography, colours, imagery, accessibility and newsletter' },
        ui: { label: 'Icon or UI element:', text: ' icons & UI, components, accessibility and colours' },
      },
      preflightTitle: 'Before Publishing',
      preflightLead: 'A short final check prevents the most common mistakes:',
      preflightItems: [
        'Is it immediately recognisable that the material comes from Volt?',
        'Is the most important message understandable within a few seconds?',
        'Do logo, colours and typography match the Volt rules?',
        'Are text and contrasts easy to read?',
        'Does the material also work on a smartphone?',
        'Do used images have a clear source and permission for use?',
        'Are required alt texts or other accessibility requirements covered?',
      ],
      preflightClose:
        'If these points are covered, the material is usually ready for publication.',
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
        format: 'Components and UI',
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
        'Een designgids voor Volt-materialen, websites, social media, presentaties en sjablonen.',
      version:
        'Hier vind je de belangrijkste ontwerpregels, voorbeelden en praktische hulp, zodat Volt overal helder, herkenbaar en toegankelijk verschijnt.',
      directRoutes: 'Directe Routes',
      foundationsLabel: 'Basis',
      foundationsDescription: 'Merk, logo, kleuren, typografie, lay-out, beeldtaal en toegankelijkheid.',
      applicationsLabel: 'Digitale toepassingen',
      applicationsDescription: 'Websites, componenten, UI-elementen, social media, nieuwsbrieven, presentaties en export.',
      templatesLabel: 'Sjablonen',
      templatesDescription: 'Figma- en Canva-sjablonen met formaat, status, link en gebruikstips.',
      helpLabel: 'Hulp & kwaliteitscontrole',
      helpDescription: 'FAQ, bronnen, checklists, veelgemaakte fouten en contactmogelijkheden.',
      whatTitle: 'Wat je hier vindt',
      whatLead: 'Je vindt hier:',
      whatItems: [
        'bindende basisregels voor logo, kleuren en typografie,',
        'praktische aanbevelingen voor lay-out, beeldtaal en toegankelijkheid,',
        'aanwijzingen voor websites, social media, presentaties, nieuwsbrieven, print en UI,',
        'sjablonen en voorbeelden voor typische toepassingen,',
        'checklists voor de laatste kwaliteitscontrole vóór publicatie.',
      ],
      whatNote:
        'Daarbij wordt duidelijk onderscheid gemaakt tussen bindende regels, aanbevelingen en goede voorbeelden.',
      quickStartTitle: 'Snel starten',
      quickStartLead: 'Wil je direct beginnen?',
      quickStartItems: [
        { label: 'Kies je formaat:', text: ' social post, website, presentatie, printmateriaal of UI.' },
        { label: 'Open het passende hoofdstuk', text: ' via de directe routes of het overzicht hieronder.' },
        { label: 'Gebruik de basis', text: ' voor logo, kleuren, typografie en lay-out.' },
        { label: 'Controleer je resultaat', text: ' vóór publicatie op leesbaarheid, contrast, weergave en beeldrechten.' },
      ],
      brandBasisTitle: 'Merkbasis',
      brandBasisText:
        'De basis van deze gids is de officiële Volt Europe visual identity. De gids vertaalt deze regels naar typische toepassingen en materialen bij Volt.',
      officialSource: 'Officiële Volt Europe visual identity',
      foundationsTitle: 'De belangrijkste basisregels',
      foundationItems: [
        { label: 'Logo:', text: ' Het Volt-woordmerk is het centrale merkteken. Afhankelijk van de toepassing kan het met de EU-sterren worden gecombineerd.' },
        { label: 'Kleuren:', text: ' Volt Purple en wit vormen de basis. Geel, blauw, groen en rood vullen de kleurwereld aan voor gedefinieerde toepassingen.' },
        { label: 'Typografie:', text: ' Ubuntu is het standaardlettertype voor koppen, lopende tekst en calls to action.' },
        { label: 'Grafische elementen:', text: ' Lijnen en rechthoekige vormen kunnen de vormgeving ondersteunen. Vooral de opwaartse hoek van 21 graden is typisch voor Volt.' },
        { label: 'Toegankelijkheid:', text: ' Vormgeving moet niet alleen goed ogen, maar ook goed leesbaar en toegankelijk zijn.' },
      ],
      templatesText:
        'Sjablonen en voorbeelden tonen hoe deze basisregels in verschillende formaten samenwerken.',
      recognitionTitle: 'Volt herkenbaar maken',
      recognitionLead:
        'Niet elk materiaal hoeft er hetzelfde uit te zien. Het moet wel altijd duidelijk als Volt herkenbaar zijn.',
      recognitionItems: [
        'De officiële Volt Europe-richtlijnen vormen de gemeenschappelijke basis.',
        'Materialen moeten worden aangepast aan formaat, doelgroep en lokale context.',
        'Logo, kleuren en typografie zorgen voor consistente merkherkenning.',
        'Vormgeving ondersteunt de boodschap en mag daar niet mee concurreren.',
        'Openbare inhoud moet ook zonder voorkennis snel begrijpelijk zijn.',
      ],
      recognitionQuestion:
        'Een goed Volt-design beantwoordt in één oogopslag drie vragen: wie spreekt, waarover gaat het en wat moet ik daarna doen?',
      goodDesignTitle: 'Goede vormgeving in de praktijk',
      goodDesignLead: 'Enkele principes werken onafhankelijk van het formaat:',
      goodDesignItems: [
        { label: 'Eén duidelijke hoofdboodschap:', text: ' niet alles hoeft tegelijk aandacht te krijgen.' },
        { label: 'Duidelijke hiërarchie:', text: ' de belangrijkste informatie moet als eerste opvallen.' },
        { label: 'Genoeg witruimte:', text: ' inhoud heeft ruimte nodig om snel begrepen te worden.' },
        { label: 'Consistente vormgeving:', text: ' kleuren, lettertype, afstanden en beeldtaal moeten bij elkaar passen.' },
        { label: 'Duidelijke call to action:', text: ' als mensen iets moeten doen, moet meteen duidelijk zijn wat.' },
        { label: 'Denk mobiel mee:', text: ' social media, websites en nieuwsbrieven worden vaak op kleine schermen bekeken.' },
      ],
      chapterPickerTitle: 'Welk hoofdstuk heb ik nodig?',
      chapterPickerLead: 'Als je iets concreets wilt maken, kun je direct bij het formaat beginnen:',
      chapterItems: {
        social: { label: 'Social post:', text: ' social media, kleuren, typografie, beeldtaal en toegankelijkheid' },
        website: { label: 'Website:', text: ' websites, componenten, kleuren en toegankelijkheid' },
        presentation: { label: 'Presentatie:', text: ' presentaties, logo, typografie en bestanden & export' },
        print: { label: 'Flyer of poster:', text: ' lay-out, kleuren, logo, beeldbronnen en print-export' },
        newsletter: { label: 'Newsletter:', text: ' typografie, kleuren, beeldtaal, toegankelijkheid en newsletter' },
        ui: { label: 'Icon of UI-element:', text: ' icons & UI, componenten, toegankelijkheid en kleuren' },
      },
      preflightTitle: 'Vóór publicatie',
      preflightLead: 'Een korte laatste check voorkomt de meest voorkomende fouten:',
      preflightItems: [
        'Is op het eerste gezicht herkenbaar dat het materiaal van Volt komt?',
        'Is de belangrijkste boodschap binnen enkele seconden begrijpelijk?',
        'Kloppen logo, kleuren en typografie met de Volt-richtlijnen?',
        'Zijn tekst en contrasten goed leesbaar?',
        'Werkt het materiaal ook op een smartphone?',
        'Hebben gebruikte beelden een duidelijke bron en mogen ze worden gebruikt?',
        'Zijn noodzakelijke alt-teksten of andere toegankelijkheidseisen meegenomen?',
      ],
      preflightClose:
        'Als deze punten kloppen, is het materiaal meestal klaar voor publicatie.',
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
        format: 'Componenten en UI',
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
          'Un guide de design pour les supports Volt, sites web, réseaux sociaux, présentations et modèles.',
        version:
          'Vous y trouverez les règles de design essentielles, des exemples et une aide pratique pour que Volt apparaisse partout de façon claire, reconnaissable et accessible.',
        directRoutes: 'Accès directs',
        foundationsLabel: 'Fondamentaux',
        foundationsDescription: 'Marque, logo, couleurs, typographie, mise en page, langage visuel et accessibilité.',
        applicationsLabel: 'Applications numériques',
        applicationsDescription: 'Sites web, composants, éléments UI, réseaux sociaux, newsletters, présentations et export.',
        templatesLabel: 'Modèles',
        templatesDescription: 'Modèles Figma et Canva avec format, statut, lien et consignes d’utilisation.',
        helpLabel: 'Aide & qualité',
        helpDescription: 'FAQ, sources, checklists, erreurs fréquentes et contacts.',
        whatTitle: 'Ce que vous trouverez ici',
        whatLead: 'Vous trouverez ici :',
        whatItems: [
          'des bases obligatoires pour logo, couleurs et typographie,',
          'des recommandations pratiques pour mise en page, langage visuel et accessibilité,',
          'des indications pour sites web, réseaux sociaux, présentations, newsletters, print et UI,',
          'des modèles et exemples pour les applications typiques,',
          'des checklists pour le dernier contrôle qualité avant publication.',
        ],
        whatNote:
          'Le guide distingue clairement règles obligatoires, recommandations et bons exemples.',
        quickStartTitle: 'Commencer rapidement',
        quickStartLead: 'Vous voulez démarrer directement ?',
        quickStartItems: [
          { label: 'Choisir le format :', text: ' post social, site web, présentation, support print ou UI.' },
          { label: 'Ouvrir le bon chapitre', text: ' via les accès directs ou l’aperçu ci-dessous.' },
          { label: 'Utiliser les fondamentaux', text: ' pour logo, couleurs, typographie et mise en page.' },
          { label: 'Vérifier le résultat', text: ' avant publication : lisibilité, contraste, affichage et droits d’image.' },
        ],
        brandBasisTitle: 'Base de marque',
        brandBasisText:
          'La base de ce guide est l’identité visuelle officielle de Volt Europe. Le guide transpose ces règles aux applications et supports typiques de Volt.',
        officialSource: 'Identité visuelle officielle de Volt Europe',
        foundationsTitle: 'Les fondamentaux essentiels',
        foundationItems: [
          { label: 'Logo :', text: ' le mot-symbole Volt est le signe central de la marque. Selon l’usage, il peut être combiné avec les étoiles européennes.' },
          { label: 'Couleurs :', text: ' Volt Purple et le blanc forment la base. Jaune, bleu, vert et rouge complètent la palette pour des usages définis.' },
          { label: 'Typographie :', text: ' Ubuntu est la police standard pour titres, texte courant et appels à l’action.' },
          { label: 'Éléments graphiques :', text: ' lignes et formes rectangulaires peuvent soutenir la mise en page. L’angle ascendant de 21 degrés est particulièrement typique de Volt.' },
          { label: 'Accessibilité :', text: ' le design ne doit pas seulement être esthétique, mais aussi lisible et accessible.' },
        ],
        templatesText:
          'Les modèles et exemples montrent comment ces bases fonctionnent ensemble dans différents formats.',
        recognitionTitle: 'Rendre Volt reconnaissable',
        recognitionLead:
          'Tous les supports ne doivent pas se ressembler. Mais ils doivent toujours être clairement reconnaissables comme Volt.',
        recognitionItems: [
          'Les règles officielles de Volt Europe constituent la base commune.',
          'Les supports doivent être adaptés au format, au public cible et au contexte local.',
          'Logo, couleurs et typographie assurent une image de marque cohérente.',
          'Le design soutient le message et ne doit pas entrer en concurrence avec lui.',
          'Les contenus publics doivent être rapidement compréhensibles sans connaissance préalable.',
        ],
        recognitionQuestion:
          'Un bon design Volt répond au premier coup d’œil à trois questions : qui parle ? de quoi s’agit-il ? que dois-je faire ensuite ?',
        goodDesignTitle: 'Bon design au quotidien',
        goodDesignLead: 'Quelques principes fonctionnent quel que soit le format :',
        goodDesignItems: [
          { label: 'Un message principal clair :', text: ' tout ne doit pas attirer l’attention en même temps.' },
          { label: 'Une hiérarchie claire :', text: ' l’information la plus importante doit apparaître en premier.' },
          { label: 'Assez d’espace blanc :', text: ' les contenus ont besoin d’espace pour être compris rapidement.' },
          { label: 'Un design cohérent :', text: ' couleurs, typographie, espacements et images doivent fonctionner ensemble.' },
          { label: 'Un appel à l’action clair :', text: ' si l’on attend une action, elle doit être immédiatement compréhensible.' },
          { label: 'Penser mobile :', text: ' réseaux sociaux, sites web et newsletters sont souvent consultés sur petits écrans.' },
        ],
        chapterPickerTitle: 'De quel chapitre ai-je besoin ?',
        chapterPickerLead: 'Pour créer un support concret, commencez directement par le format :',
        chapterItems: {
          social: { label: 'Post social :', text: ' réseaux sociaux, couleurs, typographie, images et accessibilité' },
          website: { label: 'Site web :', text: ' sites web, composants, couleurs et accessibilité' },
          presentation: { label: 'Présentation :', text: ' présentations, logo, typographie et fichiers & export' },
          print: { label: 'Flyer ou affiche :', text: ' mise en page, couleurs, logo, sources d’images et export print' },
          newsletter: { label: 'Newsletter :', text: ' typographie, couleurs, images, accessibilité et newsletter' },
          ui: { label: 'Icône ou élément UI :', text: ' icônes & UI, composants, accessibilité et couleurs' },
        },
        preflightTitle: 'Avant publication',
        preflightLead: 'Un dernier contrôle rapide évite les erreurs les plus fréquentes :',
        preflightItems: [
          'Voit-on immédiatement que le support vient de Volt ?',
          'Le message principal est-il compréhensible en quelques secondes ?',
          'Logo, couleurs et typographie respectent-ils les règles Volt ?',
          'Texte et contrastes sont-ils bien lisibles ?',
          'Le support fonctionne-t-il aussi sur smartphone ?',
          'Les images utilisées ont-elles une source claire et peuvent-elles être utilisées ?',
          'Les textes alternatifs nécessaires ou autres exigences d’accessibilité sont-ils pris en compte ?',
        ],
        preflightClose:
          'Si ces points sont remplis, le support est généralement prêt pour publication.',
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
          format: 'Composants et UI',
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
