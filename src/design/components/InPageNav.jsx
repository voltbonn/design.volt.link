import { useT } from '../i18n';
import './designComponents.css';

export const InPageNav = ({ items }) => {
  const t = useT();

  return (
    <nav className="volt-in-page-nav" aria-label={t('inPageNav.label')}>
      {items.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};
