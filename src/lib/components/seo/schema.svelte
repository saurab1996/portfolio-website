<script lang="ts">
  import { page } from '$app/state';
  import { pageSchema, defaultSchema } from '$lib/components/seo/schema';
  const schema = $derived(pageSchema[page.url.pathname] ?? defaultSchema);
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
