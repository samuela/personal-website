import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: "Samuel Ainsworth's Blog",
    home_page_url: new URL('/blog', context.site).href,
    feed_url: new URL('/blog/feed.json', context.site).href,
    description: 'Thoughts on machine learning, programming languages, and more.',
    language: 'en-US',
    authors: [
      {
        name: 'Samuel Ainsworth',
        url: context.site?.href,
      },
    ],
    items: sortedPosts.map((post) => ({
      id: new URL(`/blog/${post.slug}/`, context.site).href,
      url: new URL(`/blog/${post.slug}/`, context.site).href,
      title: post.data.title,
      summary: post.data.description,
      date_published: post.data.pubDate.toISOString(),
      ...(post.data.updatedDate && {
        date_modified: post.data.updatedDate.toISOString(),
      }),
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
    },
  });
}
