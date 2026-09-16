import './designComponents.css';

export const ApplicationCard = ({ title, team, format, guidance }) => (
  <article className="volt-application-card">
    <p className="volt-application-card__meta">{team} · {format}</p>
    <h3>{title}</h3>
    <p>{guidance}</p>
  </article>
);

