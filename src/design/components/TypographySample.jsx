import './designComponents.css';

export const TypographySample = ({ label, sample, description }) => (
  <article className="volt-typography-sample">
    <p className="volt-typography-sample__label">{label}</p>
    <p className="volt-typography-sample__text">{sample}</p>
    {description && <p className="volt-typography-sample__description">{description}</p>}
  </article>
);
