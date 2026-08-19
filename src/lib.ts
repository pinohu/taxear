import topics from './data/topics.json';
export const parts = topics.parts;
export const partBySlug = (s: string) => parts.find(p => p.slug === s);
export const allTopics = parts.flatMap(p => p.domains.flatMap(d => d.sections.flatMap(s => s.topics.map(t => ({ ...t, part: p, domain: d, section: s })))));
export const topicByCode = (code: string) => allTopics.find(t => t.code === code);
export const idOf = (t: any) => `${t.part.slug}/${t.domain.slug}/${t.section.slug}/${t.slug}`;

// Codes whose page is published. A related[] entry is kept in frontmatter even while its
// counterpart is a stub — verify enforces the two-way graph — but a published page must not
// render a link to an unpublished one, or the reader lands on an empty page. The sitemap
// already excludes unpublished pages; this keeps the on-page links consistent with that.
export const publishedCodes = async (getCollection: any) => {
  const entries = await getCollection('topics');
  return new Set(entries.filter((e: any) => e.data.status === 'published').map((e: any) => e.data.code));
};
