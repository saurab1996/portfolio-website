<script lang="ts">
  import '../app.css';
  import { Header, Footer } from '$lib/components/layout';
  import { PageSchema, SEO } from '$lib/components/seo';
  import type { LayoutData } from './$types';
  import type { Snippet } from 'svelte';
  import { CDN_URL } from '$lib/config';

  const { children, data }: { children: Snippet; data: LayoutData } = $props();
</script>

<svelte:head>
  <link rel="dns-prefetch" href={CDN_URL} />
  <link rel="preconnect" href={CDN_URL} crossorigin="anonymous" />
  <script>
    const theme =
      localStorage.getItem('theme') ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  </script>
</svelte:head>
<SEO override={data.meta} />

<PageSchema />
<div class="min-h-screen flex flex-col">
  <Header />

  <main
    class="flex-1 pt-32 md:pt-40 pb-20 px-4 lg:px-0 content-width w-full space-y-24 md:space-y-32 lg:space-y-40"
  >
    {@render children()}
  </main>

  <Footer />
</div>
