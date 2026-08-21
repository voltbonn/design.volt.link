import './designComponents.css';

export const TemplateCard = ({
  title,
  tool,
  format,
  target,
  status = 'geplant',
  href,
  updated,
}) => (
  <article className="volt-template-card">
    <div>
      <p className="volt-template-card__meta">{tool} · {format}</p>
      <h3>{title}</h3>
      {target && <p>{target}</p>}
    </div>
    <span className="volt-template-card__status">{status}</span>
    {updated && <p className="volt-template-card__updated">Stand: {updated}</p>}
    {href ? (
      <a href={href} target="_blank" rel="noreferrer">
        Vorlage oeffnen
      </a>
    ) : (
      <p>Link wird ergaenzt.</p>
    )}
  </article>
);
