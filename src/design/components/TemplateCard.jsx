import './designComponents.css';

export const TemplateCard = ({ title, tool, format, status = 'geplant', href }) => (
  <article className="volt-template-card">
    <div>
      <p className="volt-template-card__meta">{tool} · {format}</p>
      <h3>{title}</h3>
    </div>
    <span className="volt-template-card__status">{status}</span>
    {href ? (
      <a href={href} target="_blank" rel="noreferrer">
        Vorlage oeffnen
      </a>
    ) : (
      <p>Link wird ergaenzt.</p>
    )}
  </article>
);
