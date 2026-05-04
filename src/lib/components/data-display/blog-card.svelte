<script lang="ts">
  import { ExternalLink, GlassCard, Image } from '$lib/components/ui';
  import Clock from '@lucide/svelte/icons/clock';
  import Calendar from '@lucide/svelte/icons/calendar';
  import User from '@lucide/svelte/icons/user';
  import type { Post } from '$lib/types/post.types';
  import { blogPageUrl, generateBlogImageItem } from '$lib/utils/helpers';

  interface Props {
    post: Post;
  }

  const { post }: Props = $props();
</script>

<GlassCard
  as="article"
  variant="surface"
  class="group flex flex-col overflow-hidden"
>
  <!-- Image -->
  <div class="aspect-video w-full overflow-hidden">
    <Image
      full={generateBlogImageItem(
        post.blogFields.thumbnailFullImageUrl,
        post.blogFields.thumbnailAlt,
        'full',
      )}
      thumbnail={generateBlogImageItem(
        post.blogFields.thumbnailUrl,
        post.blogFields.thumbnailAlt,
        'thumbnail',
      )}
      mainImg="thumbnail"
      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      alt={post.blogFields.thumbnailAlt}
    />
  </div>

  <!-- Content -->
  <div class="flex flex-col flex-1 gap-4 p-5">
    <!-- Categories -->
    <div class="flex flex-wrap gap-1.5">
      {#each post.categories.nodes as category}
        <span
          class="px-2 py-0.5 rounded bg-surface-container-low text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant"
        >
          {category.name}
        </span>
      {/each}
    </div>

    <!-- Title -->
    <ExternalLink
      href={blogPageUrl(post.slug)}
      class="font-semibold text-base md:text-lg text-on-surface group-hover:text-primary transition-colors leading-snug"
      showIcon={false}
    >
      {post.title}
    </ExternalLink>

    <!-- Excerpt -->
    <p class="text-sm text-on-surface-variant leading-relaxed flex-1">
      {@html post.excerpt}
    </p>

    <!-- Meta -->

    <div
      class="border-t border-outline-variant pt-2.5 grid grid-cols-[1fr_auto] items-center gap-2"
    >
      <!-- Left: author stacked above date -->
      <div class="flex flex-col gap-0.5 min-w-0">
        {#if post?.author?.node}
          <div class="flex items-center gap-1.5 shrink-0">
            <User size={12} class="text-primary shrink-0" />
            <span class="text-xs font-medium text-on-surface truncate">
              {post.author.node.firstName}
              {post.author.node.lastName}
            </span>
          </div>
        {/if}
        <time
          datetime={post.modifiedGmt}
          class="text-[11px] text-on-surface-variant flex items-center gap-1.5 shrink-0"
        >
          <Calendar size={11} class="text-primary" />
          {new Date(post.modifiedGmt).toLocaleDateString()}
        </time>
      </div>

      <!-- Right: read time -->
      {#if post.blogFields?.readTime}
        <div
          class="flex items-center gap-1.5 shrink-0 text-[11px] text-on-surface-variant"
        >
          <Clock size={11} class="text-primary" />
          <span>{post.blogFields.readTime} read</span>
        </div>
      {/if}
    </div>
  </div>
</GlassCard>
