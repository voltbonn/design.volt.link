# design.volt.link

Öffentliches Designportal für das Volt Design.

Dieses Projekt soll eine einfach einsehbare und nachvollziehbare Seite für alle werden, die bei Volt mit Gestaltung arbeiten: Mitglieder, Materialteam, Social-Media-Team, Website-Team, Designteam und interessierte Mitglieder. Ziel ist ein praktischer Designguide mit erklärten Grundlagen, Beispielen und Links zu Figma- und Canva-Vorlagen.

Als technisches Fundament gibt es zwei Ebenen:

- Die öffentliche Website läuft als eigene React/Vite-Seite. Sie nutzt die Guide-Inhalte, ist mehrsprachig und zeigt keine Storybook-Oberfläche.
- Storybook bleibt als Arbeitsumgebung für Komponenten, Zustände, technische Prüfung und Designentwicklung erhalten.

## Ziel für Version 1

Version 1 ist ein öffentlicher Designguide ohne Login und ohne eigenen Vorlagen-Editor.

Der erste Ausbau orientiert sich an der offiziellen Volt-Europa-Seite zur Visual Identity:

https://volteuropa.org/visual_identity

Die dort beschriebenen Grundlagen werden zuerst übernommen und verständlich aufbereitet:

- Logo und Logo-Nutzung
- Farben
- Typografie mit Ubuntu
- Streifen und grafische Elemente
- Downloads und Nutzungsbedingungen
- Links zu Figma- und Canva-Vorlagen

Später kann die Seite um einen Loginbereich erweitert werden. Hinter dem Login sollen dann anpassbare Designvorlagen, interne Dateien und eventuell ein Vorlagen-Editor liegen.

## Geplante Inhalte

- Startseite mit kurzer Orientierung und direkten Sprunglinks
- Logo: Varianten, Schutzraum, Mindestgrößen, helle und dunkle Hintergründe, Do's und Don'ts
- Farben: HEX, RGB, CMYK, Kontraste und typische Farbkombinationen
- Typografie: Schriftfamilie, Hierarchie, Headlines, Fließtext, Calls to Action
- Layout: Raster, Abstände, Flächen, Bild/Text-Verhältnis
- Bildsprache: Motive, Tonalität, Bildrechte und Barrierefreiheit
- Icons und grafische Elemente
- Anwendungsbeispiele für Social Media, Plakate, Flyer, Präsentationen, Websites und Materialarbeit
- Vorlagenübersicht mit Figma- und Canva-Links
- Hilfe/FAQ mit häufigen Fehlern, Kontakt und Freigabeprozess

## Empfohlene Projektstruktur

```text
design.volt.link/
  stories/
    design/
      VoltDesign.mdx
      Logo.mdx
      Colors.mdx
      Typography.mdx
      Templates.mdx

  src/
    design/
      tokens/
        colors.js
        typography.js
      i18n.jsx
      components/
        ColorSwatch.jsx
        TemplateCard.jsx
        DosDonts.jsx

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

## Ablage für Logos und Designmaterial

`public/brand/logos/source/`

Originaldateien und Quellen, zum Beispiel SVG, AI, EPS, PDF oder ZIP.

`public/brand/logos/web/`

Optimierte Web-Versionen, die direkt im Designguide angezeigt werden können, zum Beispiel SVG oder PNG.

`public/brand/logos/print/`

Druckdateien und CMYK-Varianten, falls vorhanden.

`public/brand/icons/`

Icons, Piktogramme und einfache grafische Elemente.

`public/brand/examples/`

Beispielgrafiken für Social Media, Plakate, Flyer, Websites, Newsletter oder Präsentationen.

`public/brand/templates/previews/`

Vorschaubilder für Figma- und Canva-Vorlagen.

`public/brand/templates/figma/`

Lokale Exporte oder Begleitdateien zu Figma-Vorlagen. Reine Figma-Links sollten später besser in einer Datenliste gepflegt werden.

`public/brand/templates/canva/`

Lokale Exporte oder Begleitdateien zu Canva-Vorlagen. Reine Canva-Template-Links sollten später besser in einer Datenliste gepflegt werden.

## Design-Tokens

Wiederverwendbare Designwerte sollen in `src/design/tokens/` liegen.

Geplante Startwerte aus der Volt Visual Identity:

- Volt Purple: `#502379`
- Volt Yellow: `#FDC220`
- Volt Blue: `#82D0F4`
- Volt Green: `#1BBE6F`
- Volt Red: `#E63E12`
- White: `#FFFFFF`
- Schrift: Ubuntu
- Grafisches Element: Streifen in bevorzugt `21deg`, in Sonderfaellen `5deg` oder `55deg`

## Mehrsprachigkeit

Die öffentliche Website enthält einen Sprachschalter für Deutsch, Englisch, Niederländisch und Französisch. Die UI-Übersetzungen laufen über `react-i18next` und liegen in `src/design/i18n.jsx`; die strukturierten Guide-Kapitel liegen in `src/design/content/guidePages.js` und nutzen die aktive i18next-Sprache.

Storybook enthält ebenfalls einen Sprachschalter für die gerenderten Inhalte. Die Storybook-eigene Oberfläche wie Controls, Actions, Interactions oder die Sidebar-Suche ist jedoch Storybook-UI und nicht Teil des öffentlichen Designguides.

## Entwicklung

Abhängigkeiten installieren:

```bash
npm install
```

Öffentliche Website lokal starten:

```bash
npm run dev
```

Öffentliche Website bauen:

```bash
npm run build
```

Storybook lokal starten:

```bash
npm run storybook
```

Storybook bauen:

```bash
npm run build-storybook
```

## Nächste Schritte

Die konkrete Arbeitsliste liegt in `todo.txt`.

Kurzfristig wichtig:

- Storybook-Beispielinhalte entfernen
- erste echte Designguide-Seiten anlegen
- Design-Tokens für Farben und Typografie erstellen
- Logo- und Vorlagenstruktur im `public/brand/`-Ordner anlegen
- Figma- und Canva-Vorlagen mit Vorschau, Format und Status dokumentieren
