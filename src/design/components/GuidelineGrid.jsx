import './designComponents.css';

export const GuidelineGrid = ({ items }) => (
  <div className="volt-guideline-grid">
    {items.map((item) => (
      <article key={item.title}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </article>
    ))}
  </div>
);

