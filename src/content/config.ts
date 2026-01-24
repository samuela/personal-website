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

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Samuel Ainsworth'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = { publications, news, blog };
