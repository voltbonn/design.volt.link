import { useT } from '../i18n';
import './designComponents.css';

export const LegalLinks = () => {
  const t = useT();

  return (
    <nav className="volt-legal-links" aria-label={t('legalLinks.label')}>
      <a href="https://voltdeutschland.org/impressum" target="_blank" rel="noreferrer">
        {t('legalLinks.imprint')}
      </a>
      <a href="https://voltdeutschland.org/datenschutz" target="_blank" rel="noreferrer">
        {t('legalLinks.privacy')}
      </a>
    </nav>
  );
};
