// Mechanical checks for topic pages. Fails on published pages that violate the template.
import fs from 'node:fs'; import path from 'node:path';
const root = 'src/content/topics'; const figs = JSON.parse(fs.readFileSync('src/data/figures.json','utf8')).figures;
const walk = d => fs.readdirSync(d, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(d,e.name)) : [path.join(d,e.name)]);
let errors = 0, published = 0;
for (const f of walk(root)) {
  const src = fs.readFileSync(f,'utf8'); const fm = src.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const status = fm.match(/^status:\s*(\w+)/m)?.[1]; if (status !== 'published') continue; published++;
  const body = src.slice(fm.length + 8); const err = m => { console.log(`✗ ${f}: ${m}`); errors++; };
  if (!/^taxYear:\s*\d{4}/m.test(fm)) err('missing taxYear');
  if (!/^lastReviewed:\s*"?\d{4}-\d{2}-\d{2}/m.test(fm)) err('missing lastReviewed');
  if (!/^reviewedBy:\s*\S/m.test(fm)) err('missing reviewedBy');
  const desc = fm.match(/^description:\s*"(.*)"/m)?.[1] ?? ''; if (desc.length < 120 || desc.length > 170) err(`description length ${desc.length}`);
  if (!/^authorities:\s*\n\s+-/m.test(fm)) err('no authorities listed');
  if (!/class="scenario"/.test(body)) err('no scenarios');
  if (!/class="callout trap"/.test(body)) err('no traps callout');
  for (const [,k] of body.matchAll(/\{fig:([a-z0-9_.]+)\}/g)) {
    if (!figs[k]) err(`unknown figure key ${k}`); else if (!figs[k].verified) err(`figure ${k} not verified`);
  }
  if (/\$\d[\d,]*(\.\d+)?/.test(body.replace(/\{fig:[^}]+\}/g,''))) err('inline dollar amount — use {fig:} tokens');
}
console.log(`verify: ${published} published pages, ${errors} problems`); process.exit(errors ? 1 : 0);
