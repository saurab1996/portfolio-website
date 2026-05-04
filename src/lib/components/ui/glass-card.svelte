<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  interface Props {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
    hover?: boolean;
    variant?: 'glass' | 'surface';
    children?: Snippet;
  }

  const {
    as = 'div',
    class: className = '',
    hover = true,
    variant = 'glass',
    children,
  }: Props = $props();
</script>

<svelte:element
  this={as}
  class={cn(
    'text-foreground relative rounded-xl transition-all duration-300',

    variant === 'glass' &&
      'border border-border/50 bg-card/90 backdrop-blur-md shadow-glass',

    variant === 'surface' &&
      'border border-outline-variant/20 bg-surface-container-lowest',

    hover &&
      (variant === 'glass'
        ? 'hover:-translate-y-0.5'
        : 'hover:border-primary/50 hover:shadow-lg'),

    className,
  )}
>
  {@render children?.()}
</svelte:element>
