#!/usr/bin/env node
import { loadEnv } from 'vite';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

const WORDPRESS_GRAPHQL_URL = env.WORDPRESS_GRAPHQL_URL;

const OUT_DIR = resolve(process.cwd(), 'public/data');
const POSTS_FILE = resolve(OUT_DIR, 'posts.json');
const CONTENT_DIR = resolve(OUT_DIR, 'posts-content');

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
      `GraphQL errors:\n${errors.map((e) => e.message).join('\n')}`,
    );
  }

  return data.posts.nodes;
}

async function main() {
  try {
    const posts = await fetchPosts();

    mkdirSync(OUT_DIR, { recursive: true });
    mkdirSync(CONTENT_DIR, { recursive: true });

    // 1. posts.json — listing, no content
    const listing = posts.map(({ content, ...rest }) => rest);
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
    console.log(`✅ Wrote posts listing → ${POSTS_FILE}`);

    // 2. public/data/content/{id}.json — one file per post
    for (const { databaseId, content } of posts) {
      const filePath = resolve(CONTENT_DIR, `${databaseId}.json`);
      writeFileSync(filePath, JSON.stringify({ content }, null, 2), 'utf-8');
    }
    console.log(`✅ Wrote ${posts.length} content files → ${CONTENT_DIR}/`);
  } catch (err) {
    console.error('❌ fetch-posts failed:', err.message);
    process.exit(1);
  }
}

main();
