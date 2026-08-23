// remark plugin: replaces {fig:some.key} in markdown text with the value from
// src/data/figures.json. Missing keys render loudly.
//
// THE SIGNATURE MOVE. Every figure on this site carries the authority it came from
// and the date that authority was opened. That provenance used to live in a `title`
// attribute — invisible, unreachable by keyboard, and useless on touch, which is
// most readers. It is now an inspectable citation: the number is a button, and it
// opens its own source in place.
//
// Built on the native Popover API, so there is no JavaScript, no framework, and no
// runtime assembling anything. The button is a real button: reachable by Tab,
// dismissed by Escape, announced by screen readers. Where popover is unsupported the
// source simply renders inline after the figure — more verbose, never broken.
//
// A loose-leaf tax service was trusted because every page said when it was last
// replaced. This is that promise, made operable.
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync(new URL('../src/data/figures.json', import.meta.url), 'utf8'));
const RE = /\{fig:([a-z0-9_.]+)\}/g;

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Turn a bare source string into a link where it names one, so the reader can go and
// check it themselves — the whole point of citing it.
function sourceHtml(source) {
  const s = esc(source);
  return s.replace(/((?:https?:\/\/)?(?:www\.)?(?:law\.cornell\.edu|irs\.gov)\/[^\s,;)]+)/g,
    (m) => `<a href="${m.startsWith('http') ? m : 'https://' + m}" rel="noopener">${m}</a>`);
}

export default function remarkFigures() {
  return (tree, file) => {
    // Popover targets must be unique within a document, so count per file.
    let n = 0;
    const slug = String(file?.path ?? 'p').replace(/[^a-zA-Z0-9]/g, '').slice(-12) || 'p';

    const render = (key) => {
      const f = data.figures[key];
      if (!f) {
        return `<span class="figure figure-missing" title="MISSING FIGURE KEY">{fig:${esc(key)}}</span>`;
      }
      const id = `fig-${slug}-${n++}`;
      const verified = f.verified ?? 'PENDING';
      const label = `${f.value} — source and verification date`;
      return (
        `<button type="button" class="figure" popovertarget="${id}" aria-label="${esc(label)}">` +
          `${esc(f.value)}<sup>TY${esc(f.taxYear)}</sup>` +
        `</button>` +
        `<span class="figure-src" id="${id}" popover>` +
          `<span class="figure-src-head">Verified ${esc(verified)}</span>` +
          `<span class="figure-src-body">${sourceHtml(f.source)}</span>` +
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
