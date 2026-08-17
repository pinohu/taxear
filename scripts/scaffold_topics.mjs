// Create one stub content file per IRS outline topic (never overwrites existing files).
import fs from 'node:fs'; import path from 'node:path';
const t = JSON.parse(fs.readFileSync('src/data/topics.json', 'utf8'));
let made = 0, kept = 0;
for (const p of t.parts) for (const d of p.domains) for (const s of d.sections) for (const x of s.topics) {
  const dir = path.join('src/content/topics', p.slug, d.slug, s.slug);
  const file = path.join(dir, `${x.slug}.md`);
  fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(file)) { kept++; continue; }
  const fm = `---
title: "${x.title.replace(/"/g, '\\"')}"
code: "${x.code}"
part: ${p.part}
domain: "${d.title.replace(/"/g, '\\"')}"
section: "${s.title.replace(/"/g, '\\"')}"
description: "TODO – 150-170 char meta description."
status: stub
authorities: []
forms: []
related: []
changelog: []
---

<!-- Follow docs/PAGE_TEMPLATE.md. Delete this comment when drafting. -->
`;
  fs.writeFileSync(file, fm); made++;
}
console.log(`scaffold: created ${made}, kept ${kept}`);
