// src/pages/sitemap.xml.ts
import { SITE_URL } from '$lib/config';
import { blogPageUrl, cdnImgUrl } from '$lib/utils/helpers';
import { getAllPosts } from '$lib/data/posts';

const lastmod: Record<string, string> = {
  '/': '2025-04-26',
  '/projects': '2025-05-15',
  '/contact': '2025-04-29',
  '/blogs': '2025-05-03',
};

export async function GET() {
  const pages = Object.keys(lastmod);

  const urlEntries = pages
    .map((page) => {
      const date = lastmod[page] ? new Date(lastmod[page]) : new Date();

      return `
        <url>
          <loc>${SITE_URL}${page}</loc>
          <lastmod>${date.toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `;
    })
    .join('');

  const allPosts = await getAllPosts();
  const blogEntries = allPosts
    .map((blog) => {
      const featuredImage = cdnImgUrl(blog.blogFields.thumbnailFullImageUrl);
      const date = blog.modifiedGmt ? new Date(blog.modifiedGmt) : new Date();
      // Fallback: Use image alt text first, then the post title
      const imageTitle = blog.blogFields.thumbnailAlt || blog.title;

      return `
        <url>
          <loc>${SITE_URL}${blogPageUrl(blog.slug)}</loc>
          <lastmod>${date.toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
          ${
            featuredImage
              ? `
          <image:image>
            <image:loc>${featuredImage}</image:loc>
            ${imageTitle ? `<image:title><![CDATA[${imageTitle}]]></image:title>` : ''}
          </image:image>
          `
              : ''
          }
        </url>
      `;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${urlEntries}
      ${blogEntries}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
