<script lang="ts">
  import { onMount } from 'svelte';
  import MenuIcon from '@lucide/svelte/icons/menu';
  import XIcon from '@lucide/svelte/icons/x';
  import type { TocHeading } from '$lib/types/general.types';
  import { Button } from '$lib/components/ui';
  import { cn } from '$lib/utils';

  interface Props {
    headings: TocHeading[];
    variant?: 'inline' | 'popover';
  }

  let { headings, variant = 'inline' }: Props = $props();

  let open = $state(false);
  const isPopover = $derived(variant === 'popover');

  const grouped = $derived(
    headings.reduce<(TocHeading & { children: TocHeading[] })[]>((acc, h) => {
      if (h.depth === 2) {
        acc.push({ ...h, children: [] });
      } else if (h.depth === 3 && acc.length > 0) {
        acc[acc.length - 1].children.push(h);
      }
      return acc;
    }, []),
  );

  const handleClick = (id: string) => {
    if (isPopover) open = false;
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  onMount(() => {
    if (headings.length === 0) return;

    const observedHeadings = document.querySelectorAll(
      '#content h2, #content h3',
    );
    if (observedHeadings.length === 0) return;

    const links = document.querySelectorAll<HTMLButtonElement>('.toc-link');

    function updateActiveState(activeId: string) {
      if (!activeId || links.length === 0) return;
      links.forEach((l) => {
        const href = l.getAttribute('data-href');
        const isDirectMatch = href === activeId;
        const parentLi = l.closest('li');
        const hasActiveChild =
          parentLi &&
          parentLi.querySelector(`ol button[data-href="${activeId}"]`);
        const active = Boolean(isDirectMatch || hasActiveChild);

        l.classList.toggle('text-foreground', active);
        l.classList.toggle('font-bold', active);
        l.classList.toggle('translate-x-1.5', active);
        l.classList.toggle('text-muted-foreground', !active);

        const line = l.querySelector('.toc-line');
        if (line) {
          line.classList.toggle('bg-primary', active);
          line.classList.toggle('w-5', active);
          line.classList.toggle('bg-border', !active);
          line.classList.toggle('w-3', !active);
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) updateActiveState(`#${e.target.id}`);
        });
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0.1 },
    );

    observedHeadings.forEach((el) => observer.observe(el));

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) open = false;
    };

    if (isPopover) window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      if (isPopover) window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>

{#if headings.length > 0}
  <div data-variant={variant} class="toc-wrapper">
    {#if isPopover}
      <Button
        onclick={() => (open = !open)}
        aria-label="Table of contents"
        aria-expanded={open}
        class="fixed right-4 top-1/2 -translate-y-1/2 z-50 size-10 rounded-full shadow-lg"
      >
        {#if open}
          <XIcon class="size-4" />
        {:else}
          <MenuIcon class="size-4" />
        {/if}
      </Button>

      {#if open}
        <div
          role="presentation"
          class="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onclick={() => (open = false)}
        ></div>
      {/if}
    {/if}

    <!-- ↓ fixed: was class:list (Astro-only), now proper Svelte class binding -->
    <div
      id="toc-container"
      class={cn(
        isPopover
          ? 'fixed right-16 top-1/2 -translate-y-1/2 z-50 w-80 md:w-96 max-h-[70vh] overflow-y-auto rounded-2xl border border-border bg-popover text-popover-foreground shadow-xl transition-all duration-200'
          : 'w-full max-w-sm',
        isPopover && !open && 'opacity-0 translate-x-4 pointer-events-none',
        isPopover && open && 'opacity-100 translate-x-0 pointer-events-auto',
      )}
    >
      <div class={isPopover ? 'p-4' : ''}>
        <p
          class="text-lg font-semibold text-primary mb-4 flex items-center tracking-tight"
        >
          <span class={!isPopover ? 'ms-2.5' : ''}>What This Blog Covers</span>
        </p>

        <ul class="toc-list list-none space-y-3.5 ps-7 border-s border-border">
          {#each grouped as item}
            <li class="relative group transition-all duration-200">
              <button
                onclick={() => handleClick(item.id)}
                data-href={`#${item.id}`}
                class="toc-link w-full text-left block text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-200"
              >
                <span
                  class="toc-line absolute inset-s-[-1.6rem] top-2.5 w-3 h-0.5 rounded-full bg-border group-hover:bg-primary transition-all duration-200"
                  aria-hidden="true"
                ></span>
                <span class="toc-link-text transition-all duration-200">
                  {item.text}
                </span>
              </button>

              {#if item.children.length > 0}
                <ol
                  class="ms-5 mt-2.5 space-y-2 border-s border-border/50 ps-4"
                >
                  {#each item.children as child}
                    <li class="relative group transition-all duration-200">
                      <button
                        onclick={() => handleClick(child.id)}
                        data-href={`#${child.id}`}
                        class="toc-link w-full text-left block text-sm font-normal text-muted-foreground hover:text-foreground transition-all duration-200"
                      >
                        <span
                          class="toc-line absolute inset-s-[-1.1rem] top-2 w-2 h-0.5 rounded-full bg-border group-hover:bg-primary transition-all duration-200"
                          aria-hidden="true"
                        ></span>
                        <span class="toc-link-text transition-all duration-200">
                          {child.text}
                        </span>
                      </button>
                    </li>
                  {/each}
                </ol>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
{/if}
