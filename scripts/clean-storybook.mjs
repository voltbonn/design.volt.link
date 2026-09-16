import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDir = resolve('storybook-static');

await rm(outputDir, { force: true, recursive: true });
