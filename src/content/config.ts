import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    url: z.string(),
    authors: z.string(),
    venue: z.string(),
    thumbnail: z.string(),
    order: z.number(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
    notes: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'data',
  schema: z.object({
    date: z.coerce.date(),
    emoji: z.string().optional(),
    content: z.string(),
  }),
});

export const collections = { publications, news };
