import './designComponents.css';

export const InPageNav = ({ items }) => (
  <nav className="volt-in-page-nav" aria-label="Inhalt">
    {items.map((item) => (
      <a key={item.href} href={item.href}>
        {item.label}
      </a>
    ))}
  </nav>
);

