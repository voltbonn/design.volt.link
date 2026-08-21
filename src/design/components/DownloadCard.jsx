import './designComponents.css';

export const DownloadCard = ({ title, description, href, format }) => (
  <article className="volt-download-card">
    <div>
      <p className="volt-download-card__format">{format}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    {href ? (
      <a href={href} download>
        Herunterladen
      </a>
    ) : (
      <span>Wird ergaenzt</span>
    )}
  </article>
);
