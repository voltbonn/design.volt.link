# Version 2 Plan

Version 2 beschreibt den spaeteren geschuetzten Bereich fuer Vorlagen, Rollen und redaktionelle Verwaltung. Version 1 bleibt davon getrennt: oeffentliche statische Website, kein Login, kein Backend.

## Ziele

- Geschuetzter Vorlagenbereich fuer Volt-Mitglieder und Teams.
- Klare Rollen fuer Nutzung, Redaktion und Administration.
- Verwaltbare Figma- und Canva-Links mit Status, Zielgruppe und Aktualisierung.
- Nachvollziehbare Freigaben, ohne unfertige oder rechtlich ungepruefte Materialien oeffentlich sichtbar zu machen.

## Rollen

- `visitor`: sieht nur den oeffentlichen Designguide aus Version 1.
- `member`: kann freigegebene geschuetzte Vorlagen sehen und nutzen.
- `editor`: kann Vorlagen-Metadaten pflegen und Aenderungen zur Freigabe vorbereiten.
- `admin`: kann Rollen verwalten, Freigaben setzen und archivierte Eintraege wiederherstellen.

## Authentifizierung

Die bevorzugte Richtung ist ein bestehender Identity Provider statt eigener Passwortverwaltung. Vor einer Umsetzung muss entschieden werden:

- welche Volt-Konten zugelassen sind,
- ob externe Accounts erlaubt sind,
- wie Offboarding funktioniert,
- wer Rollen vergibt und entzieht.

Eigene Passwortspeicherung ist nicht vorgesehen, solange ein geeigneter Identity Provider verfuegbar ist.

## Geschuetzte Inhalte

Geschuetzt werden koennen:

- Figma-Dateien,
- Canva-Vorlagen,
- interne Download-Links,
- Vorlagen-Vorschauen,
- redaktionelle Notizen,
- Freigabe- und Audit-Informationen.

Oeffentlich sichtbar bleiben nur Inhalte, die redaktionell und rechtlich freigegeben sind.

## Vorlagenmodell

Eine spaetere Vorlage sollte mindestens enthalten:

- `id`
- `title`
- `description`
- `tool`
- `format`
- `category`
- `targetAudience`
- `visibility`
- `status`
- `sourceUrl`
- `previewUrl`
- `ownerTeam`
- `reviewedBy`
- `updatedAt`
- `createdAt`

Empfohlene Statuswerte:

- `draft`
- `in_review`
- `approved`
- `archived`

Empfohlene Sichtbarkeit:

- `public`
- `members`
- `editors`
- `archived`

## Freigabeprozess

1. Vorlage oder Aenderung anlegen.
2. Redaktion prueft Titel, Zielgruppe, Beschreibung und Nutzbarkeit.
3. Designteam prueft Volt-Konformitaet.
4. Rechtliche Pruefung klaert Logo-, Bild- und Vorlagenrechte.
5. Technische Pruefung kontrolliert Link, Vorschau, Status und Zugriff.
6. Admin oder Redaktion setzt `approved`.
7. Aktualisierungsdatum und verantwortliches Team werden gepflegt.

## Audit

Jede relevante Aenderung sollte nachvollziehbar sein:

- wer geaendert hat,
- was geaendert wurde,
- wann geaendert wurde,
- welcher Freigabestatus danach galt.

Ein einfacher Audit-Log reicht fuer Version 2; eine komplexe Versionshistorie ist erst noetig, wenn viele Teams regelmaessig dieselben Vorlagen bearbeiten.

## Architekturentscheidung

Die bevorzugte Architektur fuer Version 2 ist:

- statisches Frontend weiterhin fuer den oeffentlichen Guide,
- geschuetzter App-Bereich im selben Frontend oder als separater Route-Bereich,
- API fuer Authentifizierung, Rollen, Vorlagen-Metadaten und Audit,
- Datenbank fuer Vorlagen, Rollen und Freigaben,
- externe Tools wie Figma und Canva bleiben Quelle der eigentlichen Designdateien.

Ein CMS kann fuer redaktionelle Inhalte sinnvoll sein, sollte aber nicht die erste Entscheidung fuer Auth, Rollen und geschuetzte Vorlagen sein.

## Vorlagen-Editor

Ein eigener Vorlagen-Editor wird fuer Version 2 nicht eingeplant. Er wird erst sinnvoll, wenn klar ist:

- welche Vorlagen sehr haeufig angepasst werden,
- welche Felder wirklich editierbar sein muessen,
- wer Ergebnisse prueft,
- wie Missbrauch und falsche Nutzung verhindert werden,
- ob Figma oder Canva diese Arbeit nicht bereits besser abdecken.

Bis dahin werden Figma- und Canva-Vorlagen verlinkt und kuratiert, aber nicht im Portal selbst bearbeitet.

## Offene rechtliche Klaerung

Vor Umsetzung eines Logins muessen separat geklaert werden:

- welche personenbezogenen Daten gespeichert werden,
- welche Rechtsgrundlage gilt,
- wer verantwortlich ist,
- welche Loesch- und Auskunftsprozesse gelten,
- wie Rollen- und Zugriffsdaten dokumentiert werden.
