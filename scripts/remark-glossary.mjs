// remark plugin: replaces {gloss:some-term} with an inspectable glossary entry.
// Same mechanism as the figure citations in remark-figures.mjs — a native Popover,
// no JavaScript, Tab-reachable, Escape-dismissed, degrading to inline text where
// popover is unsupported — so a reader who already knows how to open a figure's
// source already knows how to open a term's definition. One interaction, two uses.
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('../src/data/glossary.json', import.meta.url), 'utf8'));
const RE = /\{gloss:([a-z0-9-]+)\}/g;

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default function remarkGlossary() {
  return (tree, file) => {
    let n = 0;
    const slug = String(file?.path ?? 'p').replace(/[^a-zA-Z0-9]/g, '').slice(-12) || 'p';

    const render = (key) => {
      const g = data.terms[key];
      if (!g) return `<span class="figure figure-missing" title="MISSING GLOSSARY KEY">{gloss:${esc(key)}}</span>`;
      const id = `gloss-${slug}-${n++}`;
      return (
        `<button type="button" class="term" popovertarget="${id}" aria-label="${esc(g.term)} — definition">` +
          `${esc(g.term)}` +
        `</button>` +
        `<span class="term-def" id="${id}" popover>` +
          `<span class="term-def-head">${esc(g.term)}</span>` +
          `<span class="term-def-body">${esc(g.definition)}</span>` +
        `</span>`
      );
    };

    const walk = (node, parent, idx) => {
      if (node.type === 'text' && RE.test(node.value)) {
        RE.lastIndex = 0;
        const parts = []; let last = 0; let m;
        while ((m = RE.exec(node.value))) {
          if (m.index > last) parts.push({ type: 'text', value: node.value.slice(last, m.index) });
          parts.push({ type: 'html', value: render(m[1]) });
          last = m.index + m[0].length;
        }
        if (last < node.value.length) parts.push({ type: 'text', value: node.value.slice(last) });
        parent.children.splice(idx, 1, ...parts);
        return parts.length;
      }
      if (node.children) { for (let i = 0; i < node.children.length; ) i += walk(node.children[i], node, i) || 1; }
      return 1;
    };

    walk(tree, null, 0);
  };
}
