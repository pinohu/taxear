#!/usr/bin/env node
// Lists changelog entries marked `material: true` that are present in the working tree
// but were absent at a given git revision. Used by .github/workflows/notify.yml after a
// push to main: the new material entries are sent to study.taxear.com/api/notify, which
// emails the people who follow those topics. Prints a JSON array to stdout.
//
//   node scripts/material_changes.mjs <before-sha>
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const before = process.argv[2];
if (!before) { console.error('usage: material_changes.mjs <before-sha>'); process.exit(2); }

const ROOT = new URL('../', import.meta.url).pathname;
const TOPICS = 'src/content/topics';

function entries(md) {
  // Frontmatter changelog items are inline YAML objects, one per line:
  //   - { date: "2026-09-02", summary: "…", material: true }
  const fm = md.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const code = fm.match(/^code:\s*"?([^"\n]+)"?/m)?.[1];
  const out = [];
  for (const line of fm.split('\n')) {
    if (!/^\s*-\s*\{.*material:\s*true/.test(line)) continue;
    const date = line.match(/date:\s*"?(\d{4}-\d{2}-\d{2})"?/)?.[1];
    const summary = line.match(/summary:\s*"((?:[^"\\]|\\.)*)"/)?.[1]?.replace(/\\"/g, '"');
    if (code && date && summary) out.push({ code, date, summary });
  }
  return out;
}

const changed = execSync(`git diff --name-only ${before} HEAD -- ${TOPICS}`, { cwd: ROOT }).toString().trim().split('\n').filter(Boolean);
const result = [];
for (const file of changed) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) continue;
  const now = entries(fs.readFileSync(full, 'utf8'));
  if (now.length === 0) continue;
  let old = [];
  try { old = entries(execSync(`git show ${before}:${file}`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString()); } catch { /* new file */ }
  const seen = new Set(old.map((e) => `${e.code}|${e.date}`));
  for (const e of now) if (!seen.has(`${e.code}|${e.date}`)) result.push(e);
}
process.stdout.write(JSON.stringify(result));
