<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import MobileNav from '$lib/components/MobileNav.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import type { LayoutData } from './$types';
  import type { Snippet } from 'svelte';

  const { children, data }: { children: Snippet; data: LayoutData } = $props();
</script>

<SEO override={data.meta} />

<div class="min-h-screen flex flex-col">
  <Header />

  <main
    class="flex-1 pt-32 md:pt-40 pb-20 px-8 content-width w-full space-y-24 md:space-y-32 lg:space-y-40"
  >
    {@render children()}
  </main>

  <Footer />
  <MobileNav />
</div>
