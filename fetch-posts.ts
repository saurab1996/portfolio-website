#!/usr/bin/env node
import { loadEnv } from 'vite';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import type { PostContent, PostList } from '$lib/types/post.types';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

const WORDPRESS_GRAPHQL_URL = env.WORDPRESS_GRAPHQL_URL;

const OUT_DIR = resolve(process.cwd(), 'public/data');
const LOCAL_OUT_DIR = resolve(process.cwd(), 'local-data');
const POSTS_FILE = resolve(OUT_DIR, 'post-list.json');
const CONTENT_DIR = resolve(LOCAL_OUT_DIR, 'posts-content');

const GET_POSTS = /* GraphQL */ `
  query GetPosts {
    posts(first: 100) {
      nodes {
        id
        databaseId
        title
        excerpt
        slug
        content
        dateGmt
        modifiedGmt
        author {
          node {
            firstName
            lastName
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        blogFields {
          metaDescription
          metaTitle
          thumbnailFullImageUrl
          thumbnailUrl
          thumbnailAlt
          readTime
          faqs
          getInTouchCta
          getInTouchCtaDescription
        }
      }
    }
  }
`;

async function fetchPosts() {
  console.log(`⏳ Fetching posts from ${WORDPRESS_GRAPHQL_URL} …`);

  const res = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: GET_POSTS }),
  });

  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

  const { data, errors } = await res.json();
  if (errors?.length) {
    throw new Error(
      `GraphQL errors:\n${errors.map((e: any) => e.message).join('\n')}`,
    );
  }

  return data.posts.nodes;
}

async function main() {
  try {
    const posts = await fetchPosts();

    mkdirSync(OUT_DIR, { recursive: true });
    mkdirSync(CONTENT_DIR, { recursive: true });

    const listing = [];

    for (const post of posts) {
      // 1. Build your PostList item explicitly for the listing array
      const postListItem: PostList = {
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        modifiedGmt: post.modifiedGmt,
        databaseId: post.databaseId,
        categories: {
          nodes: post.categories.nodes.map((cat: any) => ({ name: cat.name })),
        },
        author: post.author,
        blogFields: {
          readTime: post.blogFields.readTime,
          thumbnailAlt: post.blogFields.thumbnailAlt,
          thumbnailFullImageUrl: post.blogFields.thumbnailFullImageUrl,
          thumbnailUrl: post.blogFields.thumbnailUrl,
        },
      };
      listing.push(postListItem);

      // 2. Clone the original post object to avoid mutating the source data
      // We deep-clone blogFields since we need to delete keys nested inside it
      const detailOnlyData = {
        ...post,
        blogFields: { ...post.blogFields },
      };

      // 3. Delete everything that is already captured in the PostList
      delete detailOnlyData.title;
      delete detailOnlyData.excerpt;
      delete detailOnlyData.slug;
      delete detailOnlyData.modifiedGmt;
      delete detailOnlyData.author;
      // Remove the categories with slugs (since listing uses the slimmed version)
      delete detailOnlyData.categories;

      // Delete specific sub-properties inside blogFields
      delete detailOnlyData.blogFields.readTime;
      delete detailOnlyData.blogFields.thumbnailAlt;
      delete detailOnlyData.blogFields.thumbnailFullImageUrl;
      delete detailOnlyData.blogFields.thumbnailUrl;

      // 4. Save what's left directly to the individual file
      const filePath = resolve(CONTENT_DIR, `${postListItem.slug}.json`);
      writeFileSync(
        filePath,
        JSON.stringify(detailOnlyData as PostContent, null, 2),
        'utf-8',
      );
    }

    // 5. Save the compiled posts.json listing
    writeFileSync(
      POSTS_FILE,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          total: listing.length,
          posts: listing,
        },
        null,
        2,
      ),
      'utf-8',
    );

    console.log(`✅ Wrote slim entries to → ${POSTS_FILE}`);
    console.log(`✅ Wrote remainder detail structures to → ${CONTENT_DIR}/`);
  } catch (err: any) {
    console.error('❌ fetch-posts failed:', err.message);
    process.exit(1);
  }
}

main();
