import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per IRS SEE outline topic. Path in the site == folder path in content/topics.
const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    code: z.string(),                       // IRS outline code, e.g. 3.3.1.c
    part: z.number().int().min(1).max(3),
    domain: z.string(),
    section: z.string(),
    description: z.string().max(170),       // meta description
    status: z.enum(['stub', 'draft', 'review', 'published']).default('stub'),
    taxYear: z.number().int().optional(),   // tax year the figures are verified for
    lastReviewed: z.string().optional(),    // YYYY-MM-DD
    reviewedBy: z.string().optional(),
    authorities: z.array(z.object({        // primary sources cited on the page
      type: z.enum(['IRC', 'Reg', 'Circ230', 'IRM', 'Pub', 'Form', 'RevProc', 'RevRul', 'Case', 'Notice', 'Statute']),
      ref: z.string(),                      // e.g. "§ 6501(a)"
      title: z.string().optional(),
      url: z.string().url().optional(),
    })).default([]),
    forms: z.array(z.string()).default([]), // e.g. ["2848", "8821"]
    related: z.array(z.string()).default([]), // topic codes
    changelog: z.array(z.object({
      date: z.string(), summary: z.string(),
    })).default([]),
  }),
});

const forms = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/forms' }),
  schema: z.object({
    number: z.string(), title: z.string(), description: z.string().max(170),
    status: z.enum(['stub', 'draft', 'review', 'published']).default('stub'),
    irsUrl: z.string().url().optional(), topics: z.array(z.string()).default([]),
    lastReviewed: z.string().optional(),
  }),
});

const notices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notices' }),
  schema: z.object({
    number: z.string(), title: z.string(), description: z.string().max(170),
    status: z.enum(['stub', 'draft', 'review', 'published']).default('stub'),
    urgency: z.enum(['informational', 'action-required', 'deadline-critical']).default('informational'),
    topics: z.array(z.string()).default([]), lastReviewed: z.string().optional(),
  }),
});

export const collections = { topics, forms, notices };
