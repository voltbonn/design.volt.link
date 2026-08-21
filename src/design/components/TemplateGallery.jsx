import { useMemo, useState } from 'react';

import { useLocalizedTemplates, useT } from '../i18n';
import { TemplateCard } from './TemplateCard';
import './designComponents.css';

const toolValues = ['all', 'Canva', 'Figma'];

export const TemplateGallery = ({ templates }) => {
  const [query, setQuery] = useState('');
  const [tool, setTool] = useState('all');
  const t = useT();
  const localizedTemplates = useLocalizedTemplates(templates);

  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return localizedTemplates.filter((template) => {
      const matchesTool = tool === 'all' || template.tool === tool;
      const text = `${template.title} ${template.tool} ${template.format} ${template.target}`.toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || text.includes(normalizedQuery);

      return matchesTool && matchesQuery;
    });
  }, [localizedTemplates, query, tool]);

  return (
    <section className="volt-template-gallery">
      <div className="volt-template-gallery__controls">
        <label>
          <span>{t('templateGallery.search')}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('templateGallery.searchPlaceholder')}
          />
        </label>
        <label>
          <span>{t('templateGallery.tool')}</span>
          <select value={tool} onChange={(event) => setTool(event.target.value)}>
            {toolValues.map((toolName) => (
              <option key={toolName} value={toolName}>
                {toolName === 'all' ? t('templateGallery.allTools') : toolName}
              </option>
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
        <p className="volt-template-gallery__empty">{t('templateGallery.empty')}</p>
      )}
    </section>
  );
};
