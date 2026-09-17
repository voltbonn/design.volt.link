const finiteVerbWords = new Set([
  'add',
  'adds',
  'are',
  'avoid',
  'be',
  'blijft',
  'blijven',
  'can',
  'check',
  'choose',
  'clarify',
  'come',
  'comes',
  'do',
  'does',
  'fit',
  'fits',
  'follow',
  'follows',
  'gebruik',
  'gebruiken',
  'geldt',
  'gelden',
  'geven',
  'gibt',
  'gilt',
  'give',
  'gives',
  'garder',
  'has',
  'have',
  'helps',
  'houd',
  'is',
  'ist',
  'kan',
  'keep',
  'kies',
  'können',
  'kann',
  'lassen',
  'let',
  'maak',
  'maakt',
  'mag',
  'may',
  'moet',
  'moeten',
  'must',
  'need',
  'needs',
  'noem',
  'nommer',
  'nutz',
  'nutze',
  'prüfe',
  'reste',
  'restent',
  'sind',
  'soll',
  'sollen',
  'sollte',
  'sollten',
  'should',
  'staat',
  'stellen',
  'stemt',
  'testen',
  'use',
  'utiliser',
  'utilise',
  'utilisent',
  'vermeide',
  'vermeiden',
  'verwende',
  'verwenden',
  'vérifier',
  'werk',
  'werkt',
  'werken',
  'wordt',
  'werden',
  'wird',
  'wirken',
  'works',
  'zorg',
  'zijn',
]);

const abbreviations = ['z. B.', 'e.g.', 'i.e.', 'etc.', 'u. a.', 'bzw.'];

const looksLikeCompleteSentence = (value) => {
  if (/[.!?]\s+\p{Lu}/u.test(value)) {
    return true;
  }

  const words = value
    .toLowerCase()
    .replace(/[^\p{L}\s-]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);

  return words.some((word) => finiteVerbWords.has(word));
};

export const stripFragmentPeriod = (value, { force = false } = {}) => {
  if (typeof value !== 'string') {
    return value;
  }

  const trimmedEnd = value.trimEnd();

  if (!trimmedEnd.endsWith('.') || abbreviations.some((abbreviation) => trimmedEnd.endsWith(abbreviation))) {
    return value;
  }

  if (!force && looksLikeCompleteSentence(trimmedEnd)) {
    return value;
  }

  return `${trimmedEnd.slice(0, -1)}${value.slice(trimmedEnd.length)}`;
};
