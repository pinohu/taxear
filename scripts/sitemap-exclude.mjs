// Paths that must stay out of the sitemap.
//
// Content pages carry `noindex` unless their status is `published` (see the page
// components), so listing them in the sitemap asks search engines to crawl URLs they
// are then told to drop. This derives the exclusion set from the same frontmatter the
// noindex decision uses, so the two cannot drift apart.
//
// Hub and index pages (/, /representation/, /forms/, /about/, /changes/, …) are always
// indexable and are not touched here.
import fs from 'node:fs';
import path from 'node:path';

const walk = d => !fs.existsSync(d) ? [] : fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)])
  .filter(f => f.endsWith('.md'));

const isPublished = file =>
  /^status:\s*published\s*$/m.test(fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '');

export function unpublishedPaths() {
  const out = new Set(['/404/']);
  // topics: content path mirrors the URL, e.g.
  // src/content/topics/representation/a/b/c.md -> /representation/a/b/c/
  for (const f of walk('src/content/topics')) {
    if (isPublished(f)) continue;
    out.add('/' + path.relative('src/content/topics', f).replace(/\.md$/, '') + '/');
  }
  for (const [dir, prefix] of [['src/content/forms', 'forms'], ['src/content/notices', 'notices']]) {
    for (const f of walk(dir)) {
      if (isPublished(f)) continue;
      out.add(`/${prefix}/${path.basename(f, '.md')}/`);
    }
  }
  return out;
}
