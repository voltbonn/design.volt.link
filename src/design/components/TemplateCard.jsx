import { useT } from '../i18n';
import './designComponents.css';

export const TemplateCard = ({
  title,
  tool,
  format,
  target,
  status = 'geplant',
  visibility,
  href,
  updatedAt,
}) => {
  const t = useT();
  const meta = [status, visibility].filter(Boolean).join(' · ');

  return (
    <article className="volt-template-card">
      <div>
        <p className="volt-template-card__meta">{tool} · {format}</p>
        <h3>{title}</h3>
        {target && <p>{target}</p>}
      </div>
      {meta && <span className="volt-template-card__status">{meta}</span>}
      {updatedAt && <p className="volt-template-card__updated">{t('templateCard.updated')}: {updatedAt}</p>}
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {t('templateCard.open')}
        </a>
      ) : (
        <p>{t('templateCard.linkPending')}</p>
      )}
    </article>
  );
};
