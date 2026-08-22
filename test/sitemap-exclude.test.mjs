// The sitemap filter and the noindex decision have to agree. If this drifts, the site
// starts advertising URLs it also tells search engines to drop.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { unpublishedPaths } from '../scripts/sitemap-exclude.mjs';

const walk = d => fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)])
  .filter(f => f.endsWith('.md'));

const statusOf = f =>
  (fs.readFileSync(f, 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '').match(/^status:\s*(\w+)/m)?.[1] ?? 'stub';

test('every content file that is not published is excluded, and every published one is not', () => {
  const excluded = unpublishedPaths();
  for (const f of walk('src/content/topics')) {
    const url = '/' + path.relative('src/content/topics', f).replace(/\.md$/, '') + '/';
    const published = statusOf(f) === 'published';
    assert.equal(excluded.has(url), !published, `${url} (status ${statusOf(f)})`);
  }
  for (const [dir, prefix] of [['src/content/forms', 'forms'], ['src/content/notices', 'notices']]) {
    for (const f of walk(dir)) {
      const url = `/${prefix}/${path.basename(f, '.md')}/`;
      assert.equal(excluded.has(url), statusOf(f) !== 'published', url);
    }
  }
});

test('hub and index pages are always listed', () => {
  const excluded = unpublishedPaths();
  for (const url of ['/', '/about/', '/changes/', '/ea-exam/', '/forms/', '/notices/',
                     '/individuals/', '/businesses/', '/representation/']) {
    assert.equal(excluded.has(url), false, url);
  }
});

test('the 404 page is never listed', () => {
  assert.equal(unpublishedPaths().has('/404/'), true);
});

test('topic URLs are built with a trailing slash, matching trailingSlash: always', () => {
  for (const url of unpublishedPaths()) assert.match(url, /\/$/);
});
