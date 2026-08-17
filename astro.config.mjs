import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkFigures from './scripts/remark-figures.mjs';

export default defineConfig({
  site: 'https://taxear.com',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !page.includes('/drafts/'),
  })],
  build: { format: 'directory' },
  markdown: { remarkPlugins: [remarkFigures] },
});
