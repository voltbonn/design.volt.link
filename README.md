# design.volt.link

Oeffentliches Designportal fuer das Volt Design.

Dieses Projekt soll eine einfach einsehbare und nachvollziehbare Seite fuer alle werden, die bei Volt mit Gestaltung arbeiten: Mitglieder, Materialteam, Social-Media-Team, Website-Team, Designteam und interessierte Mitglieder. Ziel ist ein praktischer Designguide mit erklaerten Grundlagen, Beispielen und Links zu Figma- und Canva-Vorlagen.

Als technisches Fundament wird Storybook genutzt. Damit koennen Designregeln, UI-Komponenten, Beispiele und Vorlagen an einem Ort dokumentiert und weiterentwickelt werden.

## Ziel fuer Version 1

Version 1 ist ein oeffentlicher Designguide ohne Login und ohne eigenen Vorlagen-Editor.

Der erste Ausbau orientiert sich an der offiziellen Volt-Europa-Seite zur Visual Identity:

https://volteuropa.org/visual_identity

Die dort beschriebenen Grundlagen werden zuerst uebernommen und verstaendlich aufbereitet:

- Logo und Logo-Nutzung
- Farben
- Typografie mit Ubuntu
- Streifen und grafische Elemente
- Downloads und Nutzungsbedingungen
- Links zu Figma- und Canva-Vorlagen

Spaeter kann die Seite um einen Loginbereich erweitert werden. Hinter dem Login sollen dann anpassbare Designvorlagen, interne Dateien und eventuell ein Vorlagen-Editor liegen.

## Geplante Inhalte

- Startseite mit kurzer Orientierung und direkten Sprunglinks
- Logo: Varianten, Schutzraum, Mindestgroessen, helle und dunkle Hintergruende, Do's und Don'ts
- Farben: HEX, RGB, CMYK, Kontraste und typische Farbkombinationen
- Typografie: Schriftfamilie, Hierarchie, Headlines, Fliesstext, Calls to Action
- Layout: Raster, Abstaende, Flaechen, Bild/Text-Verhaeltnis
- Bildsprache: Motive, Tonalitaet, Bildrechte und Barrierefreiheit
- Icons und grafische Elemente
- Anwendungsbeispiele fuer Social Media, Plakate, Flyer, Praesentationen, Websites und Materialarbeit
- Vorlagenuebersicht mit Figma- und Canva-Links
- Hilfe/FAQ mit haeufigen Fehlern, Kontakt und Freigabeprozess

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

## Ablage fuer Logos und Designmaterial

`public/brand/logos/source/`

Originaldateien und Quellen, zum Beispiel SVG, AI, EPS, PDF oder ZIP.

`public/brand/logos/web/`

Optimierte Web-Versionen, die direkt im Designguide angezeigt werden koennen, zum Beispiel SVG oder PNG.

`public/brand/logos/print/`

Druckdateien und CMYK-Varianten, falls vorhanden.

`public/brand/icons/`

Icons, Piktogramme und einfache grafische Elemente.

`public/brand/examples/`

Beispielgrafiken fuer Social Media, Plakate, Flyer, Websites, Newsletter oder Praesentationen.

`public/brand/templates/previews/`

Vorschaubilder fuer Figma- und Canva-Vorlagen.

`public/brand/templates/figma/`

Lokale Exporte oder Begleitdateien zu Figma-Vorlagen. Reine Figma-Links sollten spaeter besser in einer Datenliste gepflegt werden.

`public/brand/templates/canva/`

Lokale Exporte oder Begleitdateien zu Canva-Vorlagen. Reine Canva-Template-Links sollten spaeter besser in einer Datenliste gepflegt werden.

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

## Entwicklung

Abhaengigkeiten installieren:

```bash
npm install
```

Storybook lokal starten:

```bash
npm run storybook
```

Storybook bauen:

```bash
npm run build-storybook
```

## Naechste Schritte

Die konkrete Arbeitsliste liegt in `todo.txt`.

Kurzfristig wichtig:

- Storybook-Beispielinhalte entfernen
- erste echte Designguide-Seiten anlegen
- Design-Tokens fuer Farben und Typografie erstellen
- Logo- und Vorlagenstruktur im `public/brand/`-Ordner anlegen
- Figma- und Canva-Vorlagen mit Vorschau, Format und Status dokumentieren
