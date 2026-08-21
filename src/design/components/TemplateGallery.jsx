import { useMemo, useState } from 'react';

import { TemplateCard } from './TemplateCard';
import './designComponents.css';

const tools = ['Alle', 'Canva', 'Figma'];

export const TemplateGallery = ({ templates }) => {
  const [query, setQuery] = useState('');
  const [tool, setTool] = useState('Alle');

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return templates.filter((template) => {
      const matchesTool = tool === 'Alle' || template.tool === tool;
      const text = `${template.title} ${template.tool} ${template.format} ${template.target}`.toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || text.includes(normalizedQuery);

      return matchesTool && matchesQuery;
    });
  }, [query, templates, tool]);

  return (
    <section className="volt-template-gallery">
      <div className="volt-template-gallery__controls">
        <label>
          <span>Suchen</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="z. B. Instagram, Plakat, Website"
          />
        </label>
        <label>
          <span>Tool</span>
          <select value={tool} onChange={(event) => setTool(event.target.value)}>
            {tools.map((toolName) => (
              <option key={toolName}>{toolName}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="volt-template-gallery__grid">
        {filteredTemplates.map((template) => (
          <TemplateCard key={`${template.tool}-${template.title}`} {...template} />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <p className="volt-template-gallery__empty">Keine Vorlage fuer diese Suche gefunden.</p>
      )}
    </section>
  );
};

