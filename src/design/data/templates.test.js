import { describe, expect, it } from 'vitest';

import { templates } from './templates.js';

const requiredFields = [
  'id',
  'title',
  'tool',
  'format',
  'category',
  'target',
  'status',
  'visibility',
  'href',
  'updatedAt',
];

describe('template data', () => {
  it('uses unique template ids', () => {
    const ids = templates.map((template) => template.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it('keeps every template in the planned internal state for version 1', () => {
    for (const template of templates) {
      expect(Object.keys(template).sort()).toEqual([...requiredFields].sort());
      expect(template.status).toBe('planned');
      expect(template.visibility).toBe('internal');
      expect(template.href).toBeNull();
      expect(template.updatedAt).toBeNull();
    }
  });

  it('contains searchable text for all visible metadata fields', () => {
    for (const template of templates) {
      expect(template.id).toMatch(/^[a-z][A-Za-z0-9]*$/);
      expect(template.title.trim()).not.toBe('');
      expect(template.tool.trim()).not.toBe('');
      expect(template.format.trim()).not.toBe('');
      expect(template.category.trim()).not.toBe('');
      expect(template.target.trim()).not.toBe('');
    }
  });
});
