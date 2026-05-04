<script lang="ts">
  import { BlogCard } from '$lib/components/data-display';
  import Button from '$lib/components/ui/button.svelte';
  import type { Category, Post } from '$lib/types/post.types';
  import { getFilteredPosts, POSTS_PER_PAGE } from '$lib/data/posts';

  interface Props {
    initialPosts: Post[];
    categories: Category[];
  }

  let isLoading = $state(false);

  let { initialPosts, categories }: Props = $props();

  let activeCategory = $state('all-blogs');
  let categoryPosts = $state<Post[] | null>(null);

  // Use categoryPosts if set (after a category switch), else fall back to prop
  const posts = $derived(categoryPosts ?? initialPosts);

  async function handleCategoryChange(slug: string) {
    if (slug === activeCategory || isLoading) return;
    activeCategory = slug;
    isLoading = true;
    categoryPosts = await getFilteredPosts(slug, POSTS_PER_PAGE);
    isLoading = false;
  }
</script>

<section class="flex flex-col gap-5 md:gap-6 lg:gap-7">
  <div
    class="bg-surface-container-low rounded-lg p-2 flex flex-wrap gap-2 items-center"
  >
    {#each categories as cat}
      <Button
        variant={activeCategory === cat.slug ? 'surface' : 'ghost'}
        size="sm"
        disabled={isLoading}
        aria-pressed={activeCategory === cat.slug}
        onclick={() => handleCategoryChange(cat.slug)}
        class="text-[11px] font-semibold tracking-wider uppercase"
      >
        {cat.name}
      </Button>
    {/each}
  </div>

  <div class="relative">
    {#if isLoading}
      <div
        class="absolute inset-0 z-10 flex items-center justify-center
                  bg-surface/60 backdrop-blur-sm rounded-xl"
      >
        <div
          class="h-8 w-8 rounded-full border-2 border-primary
                    border-t-transparent animate-spin"
        ></div>
      </div>
    {/if}

    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
      class:opacity-40={isLoading}
      class:pointer-events-none={isLoading}
    >
      {#each posts as post (post.slug)}
        <BlogCard {post} />
      {/each}

      {#if !isLoading && posts.length === 0}
        <p class="text-on-surface-variant text-sm">No posts found.</p>
      {/if}
    </div>
  </div>
</section>
