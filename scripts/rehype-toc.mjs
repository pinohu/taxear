// rehype plugin: gives every <h2> a stable id and, when a page carries three or more
// of them, prepends a table of contents built from that same list.
//
// No new dependency — hand-walks the hast tree the same way rehype-table-scroll.mjs
// and remark-figures.mjs do. A page with fewer than three h2 sections doesn't get a
// ToC: at that length skipping to a section isn't a real need, and an unearned nav
// box is exactly the decorative default DESIGN.md forbids.
const slugify = (s) => s.toLowerCase()
  .replace(/[’'"]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

function textOf(node) {
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(textOf).join('');
  return '';
}

export default function rehypeToc() {
  return (tree) => {
    const heads = [];
    for (const node of tree.children ?? []) {
      if (node.type === 'element' && node.tagName === 'h2') {
        const text = textOf(node).trim();
        if (!text) continue;
        const id = slugify(text);
        node.properties = { ...(node.properties ?? {}), id };
        heads.push({ id, text });
      }
    }
    if (heads.length < 3) return;

    const nav = {
      type: 'element', tagName: 'nav',
      properties: { className: ['toc-page'], 'aria-label': 'On this page' },
      children: [
        { type: 'element', tagName: 'p', properties: { className: ['eyebrow'] }, children: [{ type: 'text', value: 'On this page' }] },
        {
          type: 'element', tagName: 'ol', properties: {},
          children: heads.map((h) => ({
            type: 'element', tagName: 'li', properties: {},
            children: [{
              type: 'element', tagName: 'a', properties: { href: `#${h.id}` },
              children: [{ type: 'text', value: h.text }],
            }],
          })),
        },
      ],
    };
    tree.children.unshift(nav);
  };
}
