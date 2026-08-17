// Mechanical checks for topic, form, and notice pages.
//
// Scope: pages at `review` or `published`. A page reaches `review` only when the
// definition of done is met, so both statuses are gated the same way. Stubs and
// drafts are counted but not checked.
//
// Errors fail the build (exit 1). Warnings are printed for judgement calls.
//
//   npm run verify            check review + published
//   npm run verify -- --warn-only   report everything, never fail
import fs from 'node:fs';
import path from 'node:path';

const WARN_ONLY = process.argv.includes('--warn-only');
const GATED = new Set(['review', 'published']);
const REQUIRED_HEADINGS = ['The rule', 'How it works in practice', 'How this has changed', 'Exam focus', 'Check yourself'];
const WORDS_MIN = 1400, WORDS_MAX = 2500;
const DESC_MIN = 150, DESC_MAX = 170;
const RELATED_MIN = 3;

const figures = JSON.parse(fs.readFileSync('src/data/figures.json', 'utf8')).figures;
const outline = JSON.parse(fs.readFileSync('src/data/topics.json', 'utf8'));
const outlineTopics = new Map(
  outline.parts.flatMap(p => p.domains.flatMap(d => d.sections.flatMap(s => s.topics.map(t => [t.code, t])))),
);

let errors = 0, warnings = 0;
const err = (f, m) => { console.log(`✗ ${f}: ${m}`); errors++; };
const warn = (f, m) => { console.log(`  ! ${f}: ${m}`); warnings++; };

const walk = d => !fs.existsSync(d) ? [] : fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)])
  .filter(f => f.endsWith('.md'));

// Frontmatter is read with regexes rather than a YAML parser: the same shapes the
// content schema already validates at build time, so this only needs to see fields.
function parse(file) {
  const src = fs.readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  return { src, fm, body: src.slice(fm.length + 8), status: fm.match(/^status:\s*(\w+)/m)?.[1] ?? 'stub' };
}
const scalar = (fm, key) => fm.match(new RegExp(`^${key}:\\s*"?([^"\n]*)"?`, 'm'))?.[1]?.trim() ?? '';
const list = (fm, key) => {
  const inline = fm.match(new RegExp(`^${key}:\\s*\\[(.*)\\]`, 'm'));
  if (inline) return inline[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  const block = fm.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-.*\\n?)+)`, 'm'));
  return block ? block[1].split('\n').map(l => l.replace(/^\s*-\s*/, '').trim()).filter(Boolean) : [];
};

// Invented facts inside scenarios and practice questions are meant to be inline;
// only tax-year figures in the editorial voice must use {fig:} tokens.
const stripInvented = body => body
  .replace(/<div class="scenario">[\s\S]*?<\/div>/g, ' ')
  .replace(/## Check yourself[\s\S]*$/, ' ');

const formSlug = n => n.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/^-+|-+$/g, '');
const formFiles = new Set(walk('src/content/forms').map(f => path.basename(f, '.md')));
const noticeFiles = new Set(walk('src/content/notices').map(f => path.basename(f, '.md')));

// ---------------------------------------------------------------- topic pages
const topicFiles = walk('src/content/topics');
const pages = topicFiles.map(f => ({ file: f, ...parse(f) }));
const gated = pages.filter(p => GATED.has(p.status));
const relatedByCode = new Map();

for (const p of gated) {
  const { file, fm, body } = p;
  const code = scalar(fm, 'code');
  const rel = list(fm, 'related');
  if (code) relatedByCode.set(code, { file, rel, status: p.status });

  // frontmatter
  if (!/^taxYear:\s*\d{4}/m.test(fm)) err(file, 'missing taxYear');
  if (!/^lastReviewed:\s*"?\d{4}-\d{2}-\d{2}/m.test(fm)) err(file, 'missing or malformed lastReviewed (YYYY-MM-DD)');
  if (!scalar(fm, 'reviewedBy')) err(file, 'missing reviewedBy');
  if (!code) err(file, 'missing code');
  else if (!outlineTopics.has(code)) err(file, `code ${code} is not in the SEE outline`);
  const desc = scalar(fm, 'description');
  if (desc.length < DESC_MIN || desc.length > DESC_MAX) err(file, `description is ${desc.length} chars, needs ${DESC_MIN}–${DESC_MAX}`);
  if (!/^authorities:\s*\n\s+-/m.test(fm)) err(file, 'no authorities listed');
  if (!/^changelog:\s*\n\s+-\s*\{\s*date:\s*"\d{4}-\d{2}-\d{2}"/m.test(fm)) err(file, 'changelog needs at least one dated entry');

  // body shape
  const headings = [...body.matchAll(/^##\s+(.+)$/gm)].map(m => m[1].trim());
  let cursor = -1;
  for (const h of REQUIRED_HEADINGS) {
    const at = headings.findIndex((x, i) => i > cursor && x === h);
    if (at === -1) err(file, `missing or out-of-order section "## ${h}"`);
    else cursor = at;
  }
  const scenarios = [...body.matchAll(/<div class="scenario">([\s\S]*?)<\/div>/g)];
  if (scenarios.length < 2) err(file, `${scenarios.length} scenario block(s), template requires 2–4`);
  if (scenarios.length > 4) warn(file, `${scenarios.length} scenario blocks, template suggests 2–4`);
  if (scenarios.some(s => !/<h3>/.test(s[1]))) err(file, 'a scenario block has no <h3> title');
  if (!/class="callout trap"/.test(body)) err(file, 'no traps callout');

  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (words < WORDS_MIN) err(file, `${words} words, target ${WORDS_MIN}–${WORDS_MAX}`);
  else if (words > WORDS_MAX) warn(file, `${words} words, target ${WORDS_MIN}–${WORDS_MAX}`);

  const questions = (body.match(/^\*\*\d+\./gm) ?? []).length;
  if (questions < 3) err(file, `${questions} practice questions under "Check yourself", needs 3–5`);
  if (questions > 5) warn(file, `${questions} practice questions, template allows up to 5`);
  const answers = (body.match(/^\*Answer:/gm) ?? []).length;
  if (answers !== questions) err(file, `${questions} questions but ${answers} answer lines`);

  // figures
  const editorial = stripInvented(body);
  for (const [, key] of body.matchAll(/\{fig:([a-z0-9_.]+)\}/g)) {
    const fig = figures[key];
    if (!fig) err(file, `unknown figure key ${key}`);
    else if (!fig.verified) err(file, `figure ${key} has no verified date`);
    else if (!fig.source) err(file, `figure ${key} has no source`);
  }
  for (const m of editorial.matchAll(/\$\d[\d,]*(?:\.\d+)?/g)) err(file, `inline dollar amount ${m[0]} outside a scenario — use a {fig:} token`);
  for (const m of editorial.matchAll(/\b\d+(?:\.\d+)?\s?(?:%|percent)\b/g)) warn(file, `inline rate "${m[0]}" in the editorial voice — consider a {fig:} token`);

  // citations: every IRC section relied on in the body should be in the authority list
  if (!/\((?:IRC|Reg\.|Circular 230|IRM)\s/.test(body)) err(file, 'no in-line authority citation in the body');
  const cited = new Set([...body.matchAll(/IRC\s*§+\s*(\d+[A-Z]?)/g)].map(m => m[1]));
  for (const sec of cited) {
    if (!new RegExp(`type:\\s*IRC,\\s*ref:\\s*"§+\\s*${sec}\\b`).test(fm)) warn(file, `body cites IRC § ${sec} but it is not in authorities[]`);
  }

  // links out
  if (rel.length < RELATED_MIN) err(file, `${rel.length} related topics, needs at least ${RELATED_MIN}`);
  for (const r of rel) {
    if (r === code) err(file, 'related[] lists the page itself');
    else if (!outlineTopics.has(r)) err(file, `related code ${r} is not in the SEE outline`);
  }
  for (const f of list(fm, 'forms')) {
    if (!formFiles.has(formSlug(f))) err(file, `forms[] lists ${f} with no page at src/content/forms/${formSlug(f)}.md`);
  }
}

// related[] both ways: an error when the counterpart is also gated, a warning while it is still a stub
for (const [code, { file, rel }] of relatedByCode) {
  for (const r of rel) {
    const other = relatedByCode.get(r);
    if (!other) warn(file, `related ${r} is not authored yet, so the link is one-way`);
    else if (!other.rel.includes(code)) err(other.file, `does not link back to ${code} in related[]`);
  }
}

// ------------------------------------------------------- forms and notices
for (const [dir, kind, files] of [['src/content/forms', 'form', formFiles], ['src/content/notices', 'notice', noticeFiles]]) {
  for (const file of walk(dir)) {
    const { fm, status } = parse(file);
    if (!GATED.has(status)) continue;
    const desc = scalar(fm, 'description');
    if (desc.length < DESC_MIN || desc.length > DESC_MAX) err(file, `description is ${desc.length} chars, needs ${DESC_MIN}–${DESC_MAX}`);
    if (!scalar(fm, 'number')) err(file, 'missing number');
    if (!scalar(fm, 'title')) err(file, 'missing title');
    if (!/^lastReviewed:\s*"?\d{4}-\d{2}-\d{2}/m.test(fm)) err(file, 'missing or malformed lastReviewed (YYYY-MM-DD)');
    if (kind === 'form' && !/^irsUrl:\s*"?https:/m.test(fm)) err(file, 'missing irsUrl');
    const topics = list(fm, 'topics');
    if (topics.length === 0) err(file, 'topics[] is empty — every form and notice links back to its topics');
    for (const t of topics) {
      if (!outlineTopics.has(t)) err(file, `topics[] code ${t} is not in the SEE outline`);
      // the topic page must list this form for the link to be two-way
      const back = relatedByCode.get(t);
      if (kind === 'form' && back) {
        const listed = list(parse(back.file).fm, 'forms').some(f => formSlug(f) === path.basename(file, '.md'));
        if (!listed) warn(back.file, `form ${scalar(fm, 'number')} lists this topic but the page does not list the form`);
      }
    }
  }
}

// ------------------------------------------------------------------ summary
const counts = pages.reduce((a, p) => (a[p.status] = (a[p.status] ?? 0) + 1, a), {});
const shape = ['stub', 'draft', 'review', 'published'].map(s => `${counts[s] ?? 0} ${s}`).join(' · ');
console.log(`\nverify: ${pages.length} topic pages (${shape}); checked ${gated.length}; ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors && !WARN_ONLY ? 1 : 0);
