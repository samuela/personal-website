import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  const site = context.site!;
  const updated = sortedPosts.length > 0
    ? sortedPosts[0].data.pubDate.toISOString()
    : new Date().toISOString();

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Samuel Ainsworth's Blog</title>
  <subtitle>Thoughts on machine learning, programming languages, and more.</subtitle>
  <link href="${new URL('/blog/atom.xml', site)}" rel="self" type="application/atom+xml"/>
  <link href="${new URL('/blog', site)}" rel="alternate" type="text/html"/>
  <id>${new URL('/blog', site)}</id>
  <updated>${updated}</updated>
  <author>
    <name>Samuel Ainsworth</name>
    <uri>${site}</uri>
  </author>
${sortedPosts.map(post => `  <entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${new URL(`/blog/${post.slug}/`, site)}" rel="alternate" type="text/html"/>
    <id>${new URL(`/blog/${post.slug}/`, site)}</id>
    <published>${post.data.pubDate.toISOString()}</published>
    <updated>${(post.data.updatedDate || post.data.pubDate).toISOString()}</updated>
    <summary>${escapeXml(post.data.description)}</summary>
  </entry>`).join('\n')}
</feed>`;

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
