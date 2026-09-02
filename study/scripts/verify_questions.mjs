#!/usr/bin/env node
// Structural check for the generated bank under src/data/questions/ (one file per exam
// part, written by import_questions.mjs) and the hand-written sets under
// src/data/handwritten/. Shape only — accuracy of the law is the page's job, and every
// imported question points back at the page it came from.
import fs from 'node:fs';
import path from 'node:path';

const QDIR = new URL('../src/data/questions/', import.meta.url).pathname;
const HDIR = new URL('../src/data/handwritten/', import.meta.url).pathname;
let errors = 0;
const err = (m) => { console.error(`✗ ${m}`); errors++; };
const CODE = /^\d\.\d+\.\d+\.[a-z]$/;

const ids = new Set();
let mcq = 0, drills = 0;
for (const file of fs.readdirSync(QDIR).filter((f) => /^part-[123]\.json$/.test(f))) {
  let data;
  try { data = JSON.parse(fs.readFileSync(path.join(QDIR, file), 'utf8')); } catch (e) { err(`${file}: invalid JSON — ${e.message}`); continue; }
  const part = Number(file.match(/\d/)[0]);
  if (data.part !== part) err(`${file}: part field ${data.part} does not match the file name`);
  if (!Array.isArray(data.questions) || !Array.isArray(data.drills)) { err(`${file}: questions[] and drills[] required`); continue; }
  if (data.counts?.questions !== data.questions.length || data.counts?.drills !== data.drills.length) err(`${file}: counts do not match the arrays`);
  for (const q of data.questions) {
    const w = `${file}#${q.id ?? '(no id)'}`;
    if (!q.id) err(`${w}: missing id`); else if (ids.has(q.id)) err(`${w}: duplicate id`); else ids.add(q.id);
    if (!CODE.test(q.code ?? '')) err(`${w}: code "${q.code}" is not an outline code`);
    if (q.part !== part) err(`${w}: part ${q.part} in the part-${part} file`);
    for (const k of ['domain', 'domainTitle', 'section', 'sectionTitle', 'pagePath', 'pageTitle']) if (!q[k]) err(`${w}: missing ${k}`);
    if (!q.stem || q.stem.length < 12) err(`${w}: stem missing or implausibly short`);
    if (!Array.isArray(q.options) || q.options.length !== 4) err(`${w}: must have exactly 4 options`);
    else if (new Set(q.options).size !== 4) err(`${w}: options must be distinct`);
    if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex > 3) err(`${w}: answerIndex must be 0–3`);
    if (typeof q.explanation !== 'string') err(`${w}: explanation must be a string`);
    if (!/^\//.test(q.pagePath ?? '')) err(`${w}: pagePath must be a site path`);
    mcq++;
  }
  for (const d of data.drills) {
    const w = `${file}#${d.id ?? '(no id)'}`;
    if (!d.id) err(`${w}: missing id`); else if (ids.has(d.id)) err(`${w}: duplicate id`); else ids.add(d.id);
    if (!CODE.test(d.code ?? '')) err(`${w}: code "${d.code}" is not an outline code`);
    if (!d.prompt || d.prompt.length < 15) err(`${w}: prompt missing or implausibly short`);
    if (!d.answer || d.answer.length < 20) err(`${w}: answer missing or implausibly short`);
    if (!/^\//.test(d.pagePath ?? '')) err(`${w}: pagePath must be a site path`);
    drills++;
  }
}

// Hand-written sets keep the original pilot shape and are merged by the importer.
if (fs.existsSync(HDIR)) for (const file of fs.readdirSync(HDIR).filter((f) => f.endsWith('.json'))) {
  const data = JSON.parse(fs.readFileSync(path.join(HDIR, file), 'utf8'));
  for (const q of data.questions ?? []) {
    const w = `handwritten/${file}#${q.id}`;
    if (!CODE.test(q.code ?? '')) err(`${w}: bad code`);
    if (!Array.isArray(q.options) || q.options.length !== 4) err(`${w}: 4 options required`);
    if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex > 3) err(`${w}: bad answerIndex`);
    if (!q.explanation || q.explanation.length < 20) err(`${w}: explanation required`);
  }
}

if (mcq === 0) err('no multiple-choice questions at all — run npm run import');
console.log(`\nverify_questions: ${mcq} multiple-choice, ${drills} drills, ${ids.size} ids; ${errors} error(s)`);
if (errors > 0) process.exit(1);
