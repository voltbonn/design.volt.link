import './designComponents.css';

export const GuidelineGrid = ({ headingLevel = 3, items }) => {
  const Heading = `h${headingLevel}`;

  return (
  <div className="volt-guideline-grid">
    {items.map((item) => (
      <article key={item.title}>
        <Heading>{item.title}</Heading>
        <p>{item.text}</p>
      </article>
    ))}
  </div>
  );
};
