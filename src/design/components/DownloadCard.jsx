import { useT } from '../i18n';
import './designComponents.css';

export const DownloadCard = ({ title, description, href, format }) => {
  const t = useT();

  return (
    <article className="volt-download-card">
      <div>
        <p className="volt-download-card__format">{format}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {href ? (
        <a href={href} download>
          {t('downloadCard.download')}
        </a>
      ) : (
        <span>{t('downloadCard.pending')}</span>
      )}
    </article>
  );
};
