<script lang="ts">
  import { cn } from '$lib/utils';

  interface Props {
    as?: keyof HTMLElementTagNameMap;
    class?: string;
    hover?: boolean;
    children?: import('svelte').Snippet;
  }

  const {
    as = 'div',
    class: className = '',
    hover = true,
    children,
  }: Props = $props();
</script>

<svelte:element
  this={as}
  class={cn(
    'relative rounded-xl',
    'border border-white/20 dark:border-white/10',
    'bg-white/60 dark:bg-white/5',
    'backdrop-blur-md',
    'shadow-glass',
    hover && 'hover:-translate-y-0.5 transition-transform',
    className,
  )}
>
  {@render children?.()}
</svelte:element>
