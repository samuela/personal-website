import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.yaml' }),
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
  loader: glob({ base: './src/content/news', pattern: '**/*.yaml' }),
  schema: z.object({
    date: z.coerce.date(),
    emoji: z.string().optional(),
    content: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Samuel Ainsworth'),
    draft: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = { publications, news, blog };
