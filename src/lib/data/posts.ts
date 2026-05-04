/**
 * src/lib/posts.ts
 *
 * Reads the pre-fetched WordPress posts from public/data/posts.json.
 * Import these helpers anywhere in your Astro pages / components.
 */

import { CDN_URL, DEV_MODE } from '$lib/config';
import type { Category, Post, PostsData } from '$lib/types/post.types';

export const POSTS_PER_PAGE = 6;

let cache: Promise<Post[]> | null = null;

export const getPostContent = async (id: number): Promise<string> =>
  import('fs').then(({ readFileSync }) =>
    import('path').then(({ resolve }) => {
      const raw = readFileSync(
        resolve(`public/data/posts-content/${id}.json`),
        'utf-8',
      );
      return (JSON.parse(raw) as { content: string }).content;
    }),
  );

function loadPosts(): Promise<Post[]> {
  if (cache) return cache;

  if (typeof window === 'undefined') {
    // Build/SSR — dynamic import keeps fs out of the client bundle
    cache = import('fs')
      .then(({ readFileSync }) =>
        import('path').then(({ resolve }) => {
          const raw = readFileSync(resolve('public/data/posts.json'), 'utf-8');
          return (JSON.parse(raw) as PostsData).posts;
        }),
      )
      .catch((err) => {
        cache = null;
        throw err;
      });
  } else {
    const URL = DEV_MODE ? '/data/posts.json' : `${CDN_URL}/data/posts.json`;
    // Client — fetch the static file
    cache = fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        return res.json() as Promise<PostsData>;
      })
      .then((d) => d.posts)
      .catch((err) => {
        cache = null;
        throw err;
      });
  }

  return cache;
}

export async function getAllPosts() {
  return loadPosts();
}

export async function getPostBySlug(slug: string) {
  const posts = await loadPosts();
  return posts.find((p) => p.slug === slug);
}

export async function getFilteredPosts(categorySlug: string, limit?: number) {
  const posts = await loadPosts();
  const filtered =
    categorySlug === 'all-blogs'
      ? posts
      : posts.filter((p) =>
          p.categories.nodes.some((c) => c.slug === categorySlug),
        );
  return limit ? filtered.slice(0, limit) : filtered;
}

export async function getAllCategories() {
  const posts = await loadPosts();
  const seen = new Set<string>();
  const cats: Category[] = [{ slug: 'all-blogs', name: 'All Blogs' }];
  for (const post of posts) {
    for (const cat of post.categories.nodes) {
      if (!seen.has(cat.slug)) {
        seen.add(cat.slug);
        cats.push(cat);
      }
    }
  }
  return cats;
}
