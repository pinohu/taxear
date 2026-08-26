#!/usr/bin/env node
// Structural check for every question-bank file under src/data/questions/, mirroring
// the discipline of the main site's scripts/verify_pages.mjs: run this before adding
// or editing any domain file. Checks shape only — it cannot verify tax-law accuracy,
// that's still on whoever writes the questions.
import fs from 'node:fs';
import path from 'node:path';

const dir = new URL('../src/data/questions/', import.meta.url).pathname;
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));

let errors = 0;
const seenIds = new Set();
const seenDomains = new Set();

for (const file of files) {
  const full = path.join(dir, file);
  const raw = fs.readFileSync(full, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error(`✗ ${file}: invalid JSON — ${e.message}`);
    errors++;
    continue;
  }

  for (const key of ['domain', 'domainTitle', 'outlineSection', 'questions']) {
    if (!(key in data)) { console.error(`✗ ${file}: missing top-level key "${key}"`); errors++; }
  }
  if (data.domain) {
    if (seenDomains.has(data.domain)) { console.error(`✗ ${file}: duplicate domain slug "${data.domain}"`); errors++; }
    seenDomains.add(data.domain);
  }
  if (!Array.isArray(data.questions) || data.questions.length === 0) {
    console.error(`✗ ${file}: "questions" must be a non-empty array`);
    errors++;
    continue;
  }

  for (const q of data.questions) {
    const where = `${file}#${q.id ?? '(no id)'}`;
    if (!q.id) { console.error(`✗ ${where}: missing id`); errors++; }
    else if (seenIds.has(q.id)) { console.error(`✗ ${where}: duplicate question id across the whole bank`); errors++; }
    else seenIds.add(q.id);

    if (!/^\d+(\.\d+){2,3}\.[a-z]$/.test(q.code ?? '')) {
      console.error(`✗ ${where}: code "${q.code}" doesn't look like an outline code (e.g. 1.1.1.e)`);
      errors++;
    }
    if (!q.stem || typeof q.stem !== 'string' || q.stem.length < 20) {
      console.error(`✗ ${where}: stem missing or implausibly short`); errors++;
    }
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`✗ ${where}: must have exactly 4 options`); errors++;
    } else if (new Set(q.options).size !== 4) {
      console.error(`✗ ${where}: options must be distinct`); errors++;
    }
    if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) {
      console.error(`✗ ${where}: answerIndex must be an integer 0–3`); errors++;
    }
    if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.length < 20) {
      console.error(`✗ ${where}: explanation missing or implausibly short`); errors++;
    }
  }
}

console.log(`\nverify_questions: ${files.length} file(s), ${seenIds.size} question(s) checked; ${errors} error(s)`);
if (errors > 0) process.exit(1);
