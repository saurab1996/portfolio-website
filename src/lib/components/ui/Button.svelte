<script lang="ts">
  import type { Snippet } from 'svelte';
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from 'svelte/elements';

  type Variant = 'primary' | 'outline';
  type Size = 'sm' | 'md' | 'lg';

  type BaseProps = {
    variant?: Variant;
    size?: Size;
    children?: Snippet;
  };

  type Props =
    | (BaseProps & { href: string } & HTMLAnchorAttributes)
    | (BaseProps & { href?: never } & HTMLButtonAttributes);

  let {
    variant = 'primary',
    size = 'lg',
    href,
    children,
    ...rest
  }: Props = $props();
  const classes =
    $derived(`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300
    ${size === 'lg' ? 'px-8 py-4 text-lg' : ''}
    ${size === 'md' ? 'px-6 py-3 text-base' : ''}
    ${size === 'sm' ? 'px-4 py-2 text-sm' : ''}
    ${
      variant === 'primary'
        ? 'bg-primary-gradient text-on-primary active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary'
        : 'border-2 border-outline hover:bg-surface-container'
    }`);
</script>

{#if href}
  <a {href} class={classes} {...rest as HTMLAnchorAttributes}>
    {@render children?.()}
  </a>
{:else}
  <button type="button" class={classes} {...rest as HTMLButtonAttributes}>
    {@render children?.()}
  </button>
{/if}
