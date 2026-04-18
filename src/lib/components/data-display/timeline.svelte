<script lang="ts" generics="T extends { date?: string, isActive?:boolean }">
  import { onMount, onDestroy } from 'svelte';
  import type { Snippet } from 'svelte';

  const {
    items = [],
    content,
  }: {
    items: T[];
    content: Snippet<[T]>;
  } = $props();

  let progress = $state(0);
  let container: HTMLDivElement;
  let ticking = false;

  function updateProgress() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (!container || typeof window === 'undefined') {
        ticking = false;
        return;
      }

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height;

      // How far the center of the viewport has travelled through the container
      const scrolled = windowHeight * 0.5 - rect.top;

      progress = Math.max(0, Math.min(scrolled / total, 1));

      ticking = false;
    });
  }

  onMount(() => {
    if (typeof window === 'undefined') return;
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
  });

  onDestroy(() => {
    if (typeof window === 'undefined') return;
    window.removeEventListener('scroll', updateProgress);
    window.removeEventListener('resize', updateProgress);
  });
</script>

<div bind:this={container} class="relative mx-auto max-w-7xl space-y-8">
  {#each items as item, i}
    {@const isEven = i % 2 === 0}
    <div
      data-timeline-item="true"
      class="flex items-start {isEven ? 'md:flex-row' : 'md:flex-row-reverse'}"
    >
      <!-- LEFT SIDE desktop -->
      <div
        class="hidden w-full md:flex md:flex-1 md:items-start {isEven
          ? 'md:justify-end'
          : 'md:justify-start'}"
      >
        {#if item.date}
          <span
            class="inline-flex px-2 py-0.5 rounded-sm text-sm font-medium bg-primary text-primary-foreground
                ${item.isActive
              ? `bg-primary text-primary-foreground shadow-[0_0_8px_rgba(var(--primary-rgb),0.35)]`
              : `bg-muted text-muted-foreground`}"
          >
            {item.date}
          </span>
        {/if}
      </div>

      <!-- DOT — in flex flow, sticky -->
      <div class="relative flex flex-col items-center pr-4 md:px-4">
        <div
          data-timeline-dot="true"
          class="sticky top-40 z-40 flex items-center justify-center"
        >
          <span
            class="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10"
          >
            <span
              class="size-3 rounded-full bg-primary transition-colors duration-300"
            ></span>
          </span>
        </div>
      </div>

      <!-- RIGHT SIDE desktop + mobile -->
      <div
        class="w-full md:flex md:flex-1 {isEven
          ? 'md:justify-start'
          : 'md:justify-end'}"
      >
        <!-- mobile date badge -->
        {#if item.date}
          <span
            class="mb-4 block px-2 py-0.5 rounded-sm text-sm font-medium bg-primary text-primary-foreground md:hidden w-fit
             ${item.isActive
              ? `bg-primary text-primary-foreground shadow-[0_0_8px_rgba(var(--primary-rgb),0.35)]`
              : `bg-muted text-muted-foreground`}"
          >
            {item.date}
          </span>
        {/if}

        <div class="md:max-w-lg w-full">
          {@render content(item)}
        </div>
      </div>
    </div>
  {/each}

  <!-- LINE: single container with inner progress div, placed last -->
  <div
    class="absolute left-3 w-0.5 overflow-hidden md:left-1/2 md:-translate-x-1/2 bg-border"
    style="height: calc(100% - 12px); top: 12px;"
  >
    <div
      class="absolute inset-x-0 top-0 w-0.5 rounded-full bg-primary"
      style="height: {progress * 100}%; opacity: 1;"
    ></div>
  </div>
</div>
