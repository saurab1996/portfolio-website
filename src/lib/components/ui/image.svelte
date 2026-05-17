<script lang="ts">
  import type { ImageItem, ImageSize } from '$lib/types/general.types';
  import { cdnImgUrl, defaultImg } from '$lib/utils/helpers';
  import type { HTMLImgAttributes } from 'svelte/elements';

  interface Props extends ImageItem, HTMLImgAttributes {
    priority?: boolean;
    mainImg?: ImageSize;
  }

  let {
    thumbnail,
    full,
    mainImg,
    priority = false,
    class: className,
    ...restProps
  }: Props = $props();

  const primary = $derived(mainImg === 'thumbnail' ? thumbnail : full);
  const fallback = $derived(mainImg === 'thumbnail' ? full : thumbnail);

  const url = $derived(
    primary?.url
      ? cdnImgUrl(primary.url)
      : fallback?.url
        ? cdnImgUrl(fallback.url)
        : '',
  );

  // Only provide srcset when both sizes exist AND we want responsive switching
  const srcset = $derived(
    thumbnail?.url && full?.url
      ? `${cdnImgUrl(thumbnail.url)} ${thumbnail.width}w, ${cdnImgUrl(full.url)} ${full.width}w`
      : undefined,
  );

  // Sizes must reflect actual display size — otherwise browser ignores src
  const sizes = $derived(
    mainImg === 'full'
      ? '(max-width: 768px) 100vw, 1020px'
      : '(max-width: 768px) 100vw, 400px',
  );
</script>

{#if url}
  <img
    src={url}
    {srcset}
    {sizes}
    alt={primary?.alt || fallback?.alt || 'image preview'}
    width={primary?.width || fallback?.width}
    height={primary?.height || fallback?.height}
    loading={priority ? 'eager' : 'lazy'}
    fetchpriority={priority ? 'high' : 'auto'}
    decoding="async"
    onerror={(e) => {
      const target = e.currentTarget as HTMLImageElement;
      target.srcset = ''; // Clear the broken responsive sources
      target.src = defaultImg(); // Set the fallback
    }}
    class={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${className ?? ''}`}
    {...restProps}
  />
{/if}
