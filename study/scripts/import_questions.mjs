#!/usr/bin/env node
// Builds the Study question bank from the reference site's own pages.
//
// Every published topic page under ../src/content/topics carries three to five
// original "Check yourself" questions, written by the same editor under the same
// copyright rule (CLAUDE.md rule 2) that governs this product. This script parses them
// with the site's own parser (scripts/checkyourself.mjs, the one that emits the pages'
// FAQ structured data), keeps the ones that are four-option lettered questions, tags
// each with its outline position, and writes one file per exam part into
// src/data/questions/. Hand-written questions under src/data/handwritten/ are merged in.
//
// The questions stay free on their pages. What Study sells is the exam engine around
// them; see docs/REVENUE_BUILD.md. Run: npm run import  (then npm run verify).
import fs from 'node:fs';
import path from 'node:path';
import { checkYourself } from '../../scripts/checkyourself.mjs';

const ROOT = new URL('../../', import.meta.url).pathname;
const TOPICS = path.join(ROOT, 'src/content/topics');
const OUTLINE = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/topics.json'), 'utf8'));
const OUT = new URL('../src/data/questions/', import.meta.url).pathname;
const HAND = new URL('../src/data/handwritten/', import.meta.url).pathname;

// code -> outline position
const position = new Map();
for (const p of OUTLINE.parts) for (const d of p.domains) for (const s of d.sections) for (const t of s.topics) {
  position.set(t.code, { part: p.part, partTitle: p.name, domain: d.code, domainTitle: d.title, section: s.code, sectionTitle: s.title, pagePath: t.path, pageTitle: t.title });
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(dir, e.name)) : e.name.endsWith('.md') ? [path.join(dir, e.name)] : []);
}
function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  const fm = m ? m[1] : '';
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]*)"?\\s*$`, 'm')) || [])[1];
  return { code: get('code'), title: get('title'), status: get('status'), body: md.slice(m ? m[0].length : 0) };
}

const stats = { pages: 0, published: 0, parsed: 0, kept: 0, drills: 0, skippedOptions: 0, skippedAnswer: 0, handwritten: 0 };
const byPart = { 1: [], 2: [], 3: [] };
// Open questions with a worked answer (most of Parts 1 and 2) become recall drills:
// prompt, reveal, self-grade. Same tagging, separate array.
const drillsByPart = { 1: [], 2: [], 3: [] };

const pageTitles = new Map();
const publishedCodes = new Set();
for (const file of walk(TOPICS).sort()) {
  stats.pages++;
  const { code, title, status, body } = frontmatter(fs.readFileSync(file, 'utf8'));
  if (title) pageTitles.set(code, title);
  if (status !== 'published') continue;
  publishedCodes.add(code);
  stats.published++;
  const pos = position.get(code);
  if (!pos) { console.error(`no outline position for ${code} (${file})`); continue; }
  const qs = checkYourself(body);
  qs.forEach((q, i) => {
    stats.parsed++;
    if (q.options.length === 0 && !q.answer) {
      if (q.reason.length < 20) { stats.skippedAnswer++; return; }
      stats.drills++;
      drillsByPart[pos.part].push({
        id: `${code}-d${i + 1}`, code, part: pos.part, domain: pos.domain, domainTitle: pos.domainTitle,
        section: pos.section, sectionTitle: pos.sectionTitle,
        prompt: q.question, answer: q.reason, pagePath: pos.pagePath, pageTitle: title || pos.pageTitle,
      });
      return;
    }
    if (q.options.length !== 4 || q.options.map((o) => o.letter).join('') !== 'ABCD') { stats.skippedOptions++; return; }
    const answerIndex = 'ABCD'.indexOf(q.answer);
    if (answerIndex < 0) { stats.skippedAnswer++; return; }
    stats.kept++;
    byPart[pos.part].push({
      id: `${code}-${i + 1}`, code, part: pos.part, domain: pos.domain, domainTitle: pos.domainTitle,
      section: pos.section, sectionTitle: pos.sectionTitle,
      stem: q.question, options: q.options.map((o) => o.text), answerIndex,
      explanation: q.reason, pagePath: pos.pagePath, pageTitle: title || pos.pageTitle, source: 'page',
    });
  });
}

if (fs.existsSync(HAND)) {
  for (const f of fs.readdirSync(HAND).filter((f) => f.endsWith('.json'))) {
    const data = JSON.parse(fs.readFileSync(path.join(HAND, f), 'utf8'));
    for (const q of data.questions) {
      const pos = position.get(q.code);
      if (!pos) { console.error(`handwritten ${q.id}: no outline position for ${q.code}`); continue; }
      stats.handwritten++;
      byPart[pos.part].push({
        id: `hw-${q.id}`, code: q.code, part: pos.part, domain: pos.domain, domainTitle: pos.domainTitle,
        section: pos.section, sectionTitle: pos.sectionTitle,
        stem: q.stem, options: q.options, answerIndex: q.answerIndex, explanation: q.explanation,
        pagePath: pos.pagePath, pageTitle: pos.pageTitle, source: 'handwritten',
      });
    }
  }
}

fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) if (/^part-\d\.json$/.test(f)) fs.unlinkSync(path.join(OUT, f));
for (const part of [1, 2, 3]) {
  const p = OUTLINE.parts.find((x) => x.part === part);
  const byCode = (a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }) || a.id.localeCompare(b.id);
  const questions = byPart[part].sort(byCode);
  const drills = drillsByPart[part].sort(byCode);
  fs.writeFileSync(path.join(OUT, `part-${part}.json`), JSON.stringify({
    part, partTitle: p.name, generatedFrom: 'src/content/topics (published pages) + src/data/handwritten',
    counts: { questions: questions.length, drills: drills.length, topics: new Set([...questions, ...drills].map((q) => q.code)).size },
    questions, drills,
  }, null, 1) + '\n');
  console.log(`part-${part}.json: ${questions.length} multiple-choice, ${drills.length} drills (${new Set([...questions, ...drills].map((q) => q.code)).size} topics)`);
}
// The Functions bundle reads an ES module rather than JSON so it needs no import
// attributes in either Node (tests) or the Workers bundler.
const DATA_JS = new URL('../functions/_lib/bank.data.js', import.meta.url).pathname;
const parts = [1, 2, 3].map((n) => JSON.parse(fs.readFileSync(path.join(OUT, `part-${n}.json`), 'utf8')));
// No date stamp: the header must be stable or root CI's bank-sync check would fail
// the day after every import. Provenance is the git history of this file.
fs.writeFileSync(DATA_JS, `// Generated by scripts/import_questions.mjs — do not edit.\nexport const PARTS = ${JSON.stringify(parts)};\n`);
// The outline (code, page title, path, published) for the follow endpoints, so a follow
// can be validated against published pages and an alert can use the page's own title.
const OUTLINE_JS = new URL('../functions/_lib/outline.data.js', import.meta.url).pathname;
const outline = [...position.entries()].map(([code, p]) => ({ code, part: p.part, title: pageTitles.get(code) || p.pageTitle, path: p.pagePath, published: publishedCodes.has(code) }));
fs.writeFileSync(OUTLINE_JS, `// Generated by scripts/import_questions.mjs from src/data/topics.json — do not edit.\nexport const OUTLINE = ${JSON.stringify(outline)};\n`);
console.log('import:', JSON.stringify(stats));
