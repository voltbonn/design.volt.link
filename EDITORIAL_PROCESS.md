# Editorial Process

Dieser Prozess beschreibt, wie Inhalte, Beispiele und Assets fuer `design.volt.link` vorgeschlagen, geprueft und veroeffentlicht werden.

## Rollenperspektiven

Die konkreten Personen oder Teams muessen noch benannt werden. Fuer die Pruefung werden diese Perspektiven unterschieden:

- Redaktion: Verstaendlichkeit, Sprache, Struktur und Aktualitaet.
- Designteam: Volt-Konformitaet, Layout, Beispiele, Logo- und Farbnutzung.
- Website-Team: technische Umsetzung, Build, Tests, Accessibility und Deployment.
- Materialteam: Printtauglichkeit, Produktionshinweise und lokale Materialpraxis.
- Social-Media-Team: Plattformformate, Safe Areas, Sharepic- und Story-Nutzung.
- Rechtliche Pruefung: Logo-, Bild-, Vorlagen-, Datenschutz- und Impressumsfragen.

## Aenderungsablauf

1. Inhalt, Beispiel, Asset oder technische Aenderung vorschlagen.
2. Betroffene Seite, Komponente oder Datei benennen.
3. Quelle oder fachlichen Grund angeben.
4. Redaktionelle Pruefung durchfuehren.
5. Designpruefung durchfuehren, wenn visuelle Regeln, Beispiele oder Assets betroffen sind.
6. Rechtliche Pruefung einholen, wenn Logo-, Bild-, Vorlagen-, Datenschutz- oder externe Nutzungsrechte betroffen sind.
7. Technische Pruefung durchfuehren.
8. Aenderung mergen und veroeffentlichen.
9. Release- oder Aenderungshinweis aktualisieren, wenn die Aenderung fuer Nutzer relevant ist.

## Technische Mindestpruefung

Vor groesseren Aenderungen sollten lokal oder in CI erfolgreich sein:

- `npm run test`
- `npm run build`
- `npm run smoke`
- `npm run test:storybook`
- `npm run build-storybook`

Bei reinen Inhaltsaenderungen reicht die jeweils passende Teilmenge, solange der oeffentliche Build und Smoke-Test nicht umgangen werden.

## Accessibility und Motion

Die oeffentliche App nutzt keine Animationen, die zentrale Information transportieren. Bewegungen sind auf kleine Interaktionszustaende begrenzt; `prefers-reduced-motion` reduziert Animationen und Transitions technisch. Fokuszustaende, ARIA-Labels, Viewports, Hash-Routing und Axe-Pruefungen werden ueber `npm run smoke` beziehungsweise Storybook-a11y mitgeprueft.

## Aktualisierungsrhythmus

- Monatlich: sichtbare Platzhalter und grobe Inhaltsaktualitaet pruefen.
- Automatisch in CI: externe Links ueber `npm run check:links` pruefen.
- Automatisch woechentlich: npm- und GitHub-Actions-Abhaengigkeiten ueber Dependabot pruefen.
- Quartalsweise: zentrale Kapitel, Beispiele, Downloads und Assets pruefen.
- Nach Volt-Brand-Updates: Farben, Logo-Regeln, Typografie, Downloads und Beispiele abgleichen.
- Vor Kampagnen: relevante Social-Media-, Print-, Praesentations- und Website-Regeln pruefen.
- Nach groesseren Releases: Startseite, Hash-Links, Archiv, Rechtslinks, Sprachwechsel, Theme-Wechsel und Mobile Layout pruefen.

## Dokumentation

Redaktionell offene Inhalte werden in `CONTENT_GAPS.md` gesammelt. Version-2-Themen liegen in `VERSION2_PLAN.md`. Release- und Preview-Regeln liegen in `RELEASE_PROCESS.md`.
