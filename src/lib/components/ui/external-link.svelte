<script lang="ts">
  import { ExternalLink as ExternalIcon } from 'lucide-svelte';
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    class?: string;
    iconSize?: number;
    showIcon?: boolean;
    children?: Snippet;
  }

  const {
    href,
    class: className = '',
    iconSize = 14,
    showIcon = true,
    children,
  }: Props = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class={cn('group inline-flex items-center gap-1 hover:underline', className)}
>
  {@render children?.()}

  {#if showIcon}
    <ExternalIcon
      size={iconSize}
      class="opacity-50 group-hover:opacity-100 transition"
    />
  {/if}
</a>
