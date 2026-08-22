import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkFigures from './scripts/remark-figures.mjs';
import { unpublishedPaths } from './scripts/sitemap-exclude.mjs';

// Computed once per build: every path that renders with noindex.
const excluded = unpublishedPaths();

export default defineConfig({
  site: 'https://taxear.com',
  trailingSlash: 'always',
  integrations: [sitemap({
    // Only pages search engines are actually invited to index.
    filter: (page) => !excluded.has(new URL(page).pathname),
  })],
  build: { format: 'directory' },
  markdown: { remarkPlugins: [remarkFigures] },
});
