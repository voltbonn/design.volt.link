import './designComponents.css';

export const SectionNav = ({ items }) => (
  <nav className="volt-section-nav" aria-label="Kapitel">
    {items.map((item) => (
      <a key={item.href} href={item.href}>
        <span>{item.label}</span>
        {item.description && <small>{item.description}</small>}
      </a>
    ))}
  </nav>
);
