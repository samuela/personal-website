import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://samlikes.pizza',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: { className: ['anchor-link'] },
        content: { type: 'text', value: '#' }
      }]
    ],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
