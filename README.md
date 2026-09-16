# design.volt.link

Oeffentliches Designportal fuer das Volt Design.

Version 1 ist eine statische React/Vite-Website fuer Mitglieder und Teams, die Volt-Materialien, Websites, Social-Media-Grafiken oder Praesentationen konsistent gestalten wollen. Die oeffentliche Seite ist bewusst einfach: kein Login, kein oeffentlicher Vorlagenbereich, keine Storybook-Oberflaeche als Hauptprodukt.

## Version 1

Die oeffentliche Website bietet:

- Einstieg und Quellen
- Grundlagendesign
- Digitale Anwendung
- Anwendungen
- Hilfe und FAQ
- Archiv
- Impressum und Datenschutz als feste Rechtslinks

Nicht Teil von Version 1:

- oeffentlicher Loginbereich
- Admin- oder Backend-Funktionen
- oeffentliche Vorlagenverwaltung
- sichtbare Storybook-Navigation
- Planungsseiten als oeffentliche Kapitel

Storybook bleibt als interne Arbeitsumgebung fuer Komponenten, Zustaende, Accessibility-Pruefung und Designentwicklung erhalten.

## Inhalte

Der erste Ausbau orientiert sich an der offiziellen Volt-Europa-Seite zur Visual Identity:

https://volteuropa.org/visual_identity

Oeffentlich gepflegte Kapitel liegen in `src/design/content/guidePages.js`. UI-Texte und Accessibility-Labels liegen in `src/design/i18n.jsx` und werden fuer Deutsch, Englisch, Niederlaendisch und Franzoesisch gepflegt.

## Projektstruktur

```text
design.volt.link/
  src/
    public/
      PublicGuide.jsx
      publicGuide.css
    design/
      content/
        guidePages.js
      components/
      data/
      tokens/
      i18n.jsx
      global.css
  stories/
    design/
    *.stories.js
  public/
    brand/
      logos/
        source/
        web/
        print/
      icons/
      examples/
      templates/
        previews/
        figma/
        canva/
```

## Assets

`public/brand/` ist fuer freigegebene Marken- und Beispielmaterialien vorgesehen. Offizielle Logo-Dateien, Web-Varianten, Print-Dateien, Icons, Beispiele und spaetere Vorlagen-Vorschauen sollen dort getrennt abgelegt werden. Nur rechtlich und redaktionell freigegebenes Material darf oeffentlich eingebunden werden.

## Entwicklung

Abhaengigkeiten installieren:

```bash
npm install
```

Oeffentliche Website lokal starten:

```bash
npm run dev
```

Oeffentliche Website bauen:

```bash
npm run build
```

Storybook intern starten:

```bash
npm run storybook
```

Storybook als technische Pruefung bauen:

```bash
npm run build-storybook
```

Oeffentliche Smokechecks ausfuehren:

```bash
npm run smoke
```

## Build und Deployment

Der oeffentliche Produktionsbuild ist:

```bash
npm run build
```

Der Output liegt in `dist/`. Dieses Verzeichnis ist das Deployment-Artefakt fuer die oeffentliche Website. `storybook-static/` ist nur fuer interne Storybook-Pruefungen gedacht und nicht der Hauptoutput fuer `design.volt.link`.

## Roadmap

Die konkrete Arbeitsliste liegt in `todoKI.txt`. `todo.txt` ist nur noch fuer sehr kurze, aktuelle Bugs gedacht.
