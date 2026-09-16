# Release Notes

## Version 1

Version 1 ist die oeffentliche statische Website fuer `design.volt.link`. Sie ist als klarer Designguide ohne Login, Backend oder oeffentlichen Vorlagenbereich geplant.

### Enthalten

- Oeffentliche Vite/React-App als Hauptseite.
- Kapitelstruktur fuer Einstieg, Quellen, Grundlagendesign, digitale Anwendung, Anwendungen, Hilfe und Archiv.
- Sprachwechsel fuer Deutsch, Englisch, Niederlaendisch und Franzoesisch.
- Startsprache anhand der Browsersprache.
- Light/Dark Mode mit passender Logo-Variante.
- Sichtbares Archiv.
- Rechtliche Links zu Impressum und Datenschutz von Volt Deutschland.
- Smokechecks fuer Hash-Routing, Rechtslinks, Viewports, Sprachwechsel, Theme-Wechsel, Logo-Varianten und Public-Only-Navigation.
- Axe-Accessibility-Pruefung fuer die oeffentliche Seite.
- Storybook als interne Komponenten-, Dokumentations- und Accessibility-Pruefung.
- GitHub-Pages-Deployment fuer `design.volt.link` aus dem `dist/`-Artefakt.

### Bewusst nicht enthalten

- Loginbereich.
- Backend, CMS oder Datenbank.
- Admin-Funktionen.
- Oeffentliche Vorlagenverwaltung.
- Geschuetzte Figma- oder Canva-Vorlagen.
- Storybook als oeffentliche Hauptseite.
- Planungsseiten als oeffentliche Kapitel.

### Feedback

Feedback sollte vor einem Release ueber Pull Requests gesammelt werden. Inhaltliche Rueckmeldungen sollen mindestens benennen:

- betroffene Seite oder Komponente,
- Problem oder Verbesserungsvorschlag,
- fachliche Quelle, falls relevant,
- gewuenschte Dringlichkeit.

Technische Aenderungen sollen vor dem Merge mindestens `npm run test`, `npm run build`, `npm run smoke`, `npm run test:storybook` und `npm run build-storybook` bestehen.
