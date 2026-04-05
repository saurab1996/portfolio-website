<script lang="ts">
  import { page } from '$app/state';
  import { SITE_URL, CDN_URL } from '$lib/config';
  import { FAVICON_URL } from '$lib/data/cdn-assets';
  import { getPageMeta } from '$lib/data/seo';
  import type { SEOMeta } from '$lib/types/seo.types';

  interface Props {
    override?: Partial<SEOMeta>;
  }

  const { override }: Props = $props();

  const meta = $derived(getPageMeta(page.url.pathname, override));
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  {#if meta.keywords}
    <meta name="keywords" content={meta.keywords} />
  {/if}

  <!-- Canonical -->
  <link
    rel="canonical"
    href={meta.canonical ?? `${SITE_URL}${page.url.pathname}`}
  />

  <!-- Open Graph -->
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />
  <meta property="og:url" content={`${SITE_URL}${page.url.pathname}`} />
  <meta property="og:type" content="website" />
  {#if meta.ogImage}
    <meta property="og:image" content={`${CDN_URL}${meta.ogImage}`} />
  {/if}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.description} />
  {#if meta.ogImage}
    <meta name="twitter:image" content={`${CDN_URL}${meta.ogImage}`} />
  {/if}
  <link rel="icon" href={`${CDN_URL}${FAVICON_URL}`} />
  <link rel="apple-touch-icon" href={`${CDN_URL}${FAVICON_URL}`} />
  <meta name="msapplication-TileImage" content={`${CDN_URL}${FAVICON_URL}`} />
</svelte:head>
