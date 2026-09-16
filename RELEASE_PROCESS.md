# Release Process

Dieser Prozess beschreibt, wie groessere Aenderungen an `design.volt.link` vor einer Veroeffentlichung geprueft werden.

## Aenderungen vorbereiten

Groessere Aenderungen sollen ueber Pull Requests gegen `main` laufen. Dazu zaehlen:

- neue oder stark geaenderte Inhaltsseiten,
- neue Komponenten,
- Aenderungen an Navigation, Sprache, Theme oder Layout,
- neue Assets oder Beispielmaterialien,
- Aenderungen am Deployment oder an Tests.

Kleine Textkorrekturen koennen ebenfalls ueber Pull Requests laufen, brauchen aber nur die jeweils passenden Pruefschritte.

## Preview

Bei Pull Requests baut GitHub Actions das oeffentliche `dist/`-Artefakt und laedt es als Preview-Artefakt hoch. Dieses Artefakt ist die Grundlage fuer die fachliche Pruefung, weil es dem spaeteren oeffentlichen Build entspricht.

Storybook ist eine interne technische Vorschau fuer Komponenten, Zustaende, Dokumentation und Accessibility. Es ist nicht die Preview der oeffentlichen Hauptseite.

## Pflichtpruefungen

Vor einem Merge muessen die automatischen Pruefungen erfolgreich sein:

- `npm run test`
- `npm run build`
- `npm run smoke`
- `npm run test:storybook`
- `npm run build-storybook`

Bei Inhalts- und UI-Aenderungen sollen zusaetzlich manuell geprueft werden:

- deutsche und mindestens eine nicht-deutsche Sprache,
- Light und Dark Mode,
- mobile Ansicht,
- Sidebar und Suche,
- relevante Hash-Links,
- Impressum und Datenschutz,
- sichtbare Fokuszustaende bei interaktiven Elementen.

## Freigabe

Eine Aenderung sollte erst gemergt werden, wenn die jeweils passenden Perspektiven geprueft haben:

- Redaktion: Inhalt, Verstaendlichkeit, Aktualitaet.
- Designteam: Volt-Konformitaet, Layout, Beispiele.
- Website-Team: technische Umsetzung, Tests, Accessibility, Deployment.
- Rechtliche Pruefung: Logo-, Bild-, Vorlagen- und Datenschutzfragen, falls betroffen.

Wenn eine Perspektive nicht betroffen ist, reicht ein kurzer Hinweis im Pull Request.

## Veroeffentlichung

Ein Push auf `main` loest das Deployment aus. Deployed wird ausschliesslich `dist/` auf den Branch `deploy_frontend` mit der Domain `design.volt.link`.

Nach groesseren Releases soll geprueft werden:

- oeffentliche Startseite laedt,
- direkte Hash-Links funktionieren,
- Archiv bleibt sichtbar,
- Storybook ist nicht Teil der oeffentlichen Navigation,
- Rechtliche Links zeigen auf die erwarteten URLs.
