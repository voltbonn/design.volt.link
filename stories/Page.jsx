import React from 'react';

import { Header } from './Header';
import './page.css';

export const Page = () => {
  const [showTemplates, setShowTemplates] = React.useState(false);

  return (
    <article>
      <Header onOpenTemplates={() => setShowTemplates(true)} />

      {showTemplates ? (
        <section className="protected-page" aria-label="Anpassbare Vorlagen">
          <div>
            <p>Platzhalter fuer spaetere Funktionen</p>
            <h2>Anpassbare Vorlagen</h2>
            <button type="button" onClick={() => setShowTemplates(false)}>
              Zurueck zum Designguide
            </button>
          </div>
        </section>
      ) : (
        <section className="storybook-page">
          <p className="eyebrow">Version 1</p>
          <h2>Volt Design einfach anwenden</h2>
          <p className="lead">
            Ein oeffentlicher Designguide fuer Mitglieder und Teams, die Materialien, Websites,
            Social-Media-Grafiken oder Vorlagen im Volt Design erstellen.
          </p>
          <div className="storybook-page__grid">
            <article>
              <h3>Grundlagen</h3>
              <p>Logo, Farben, Typografie, Layout, Bildsprache und grafische Elemente.</p>
            </article>
            <article>
              <h3>Anwendungen</h3>
              <p>Beispiele fuer Social Media, Print, Praesentationen, Websites und Materialarbeit.</p>
            </article>
            <article>
              <h3>Vorlagen</h3>
              <p>Figma- und Canva-Vorlagen mit Format, Status, Link und Nutzungshinweisen.</p>
            </article>
          </div>
          <p>
            Anpassbare Vorlagen sind als eigener Bereich vorbereitet. Ein Backend oder Login gibt
            es aktuell noch nicht.
          </p>
        </section>
      )}
    </article>
  );
};
