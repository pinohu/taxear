import topics from './data/topics.json';
export const parts = topics.parts;
export const partBySlug = (s: string) => parts.find(p => p.slug === s);
export const allTopics = parts.flatMap(p => p.domains.flatMap(d => d.sections.flatMap(s => s.topics.map(t => ({ ...t, part: p, domain: d, section: s })))));
export const topicByCode = (code: string) => allTopics.find(t => t.code === code);
export const idOf = (t: any) => `${t.part.slug}/${t.domain.slug}/${t.section.slug}/${t.slug}`;
