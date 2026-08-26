import { defineConfig } from 'astro/config';

// A separate Astro project from the main reference site, deployed as its own
// Cloudflare Pages project bound to study.taxear.com. Kept fully outside the
// root package.json/CI so the reference site's build is never affected by this.
export default defineConfig({
  site: 'https://study.taxear.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
