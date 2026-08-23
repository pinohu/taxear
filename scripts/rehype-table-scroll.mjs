// rehype plugin: wraps every <table> in a horizontally scrollable container.
//
// A few topic pages carry tables whose columns are genuinely wider than a phone
// screen — the statute-of-limitations table is the current example. Letting the
// page scroll sideways breaks the reading column for the whole document, so the
// table scrolls inside its own box instead.
//
// The wrapper is a real element rather than the `display:block` CSS trick because
// a scroll region has to be reachable by keyboard: tabindex makes it a focus stop,
// and role="group" with a name gives that stop something to announce. `group` is
// deliberate — `region` would add a landmark for every table on the page.
//
// No dependencies: the hast tree is walked by hand, the same way
// remark-figures.mjs walks mdast.

const WRAPPED = 'table-scroll';

function isTable(node) {
  return node && node.type === 'element' && node.tagName === 'table';
}

function wrap(node) {
  return {
    type: 'element',
    tagName: 'div',
    properties: {
      className: [WRAPPED],
      tabIndex: 0,
      role: 'group',
      'aria-label': 'Table (scrollable)',
    },
    children: [node],
  };
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;
  for (let i = 0; i < node.children.length; i += 1) {
    const child = node.children[i];
    if (isTable(child)) {
      node.children[i] = wrap(child);
      continue; // the table itself holds no nested tables worth re-scanning
    }
    walk(child);
  }
}

export default function rehypeTableScroll() {
  return (tree) => walk(tree);
}
