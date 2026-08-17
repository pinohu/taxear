// remark plugin: replaces {fig:some.key} in markdown text with the value from src/data/figures.json,
// rendered as <span class="figure" title="source">value<sup>TY2026</sup></span>. Missing keys render loudly.
import fs from 'node:fs';
const data = JSON.parse(fs.readFileSync(new URL('../src/data/figures.json', import.meta.url), 'utf8'));
const RE = /\{fig:([a-z0-9_.]+)\}/g;
function walk(node, parent, idx) {
  if (node.type === 'text' && RE.test(node.value)) {
    RE.lastIndex = 0;
    const parts = []; let last = 0; let m;
    while ((m = RE.exec(node.value))) {
      if (m.index > last) parts.push({ type: 'text', value: node.value.slice(last, m.index) });
      const f = data.figures[m[1]];
      const html = f
        ? `<span class="figure" title="${(f.source||'').replace(/"/g,'&quot;')} · verified ${f.verified ?? 'PENDING'}">${f.value}<sup>TY${f.taxYear}</sup></span>`
        : `<span class="figure" style="background:#f8d0d0" title="MISSING FIGURE KEY">{fig:${m[1]}}</span>`;
      parts.push({ type: 'html', value: html }); last = m.index + m[0].length;
    }
    if (last < node.value.length) parts.push({ type: 'text', value: node.value.slice(last) });
    parent.children.splice(idx, 1, ...parts); return parts.length;
  }
  if (node.children) { for (let i = 0; i < node.children.length; ) i += walk(node.children[i], node, i) || 1; }
  return 1;
}
export default function remarkFigures() { return (tree) => { walk(tree, null, 0); }; }
