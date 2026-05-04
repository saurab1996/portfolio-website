<script lang="ts">
  import Copy from '@lucide/svelte/icons/copy';
  import Check from '@lucide/svelte/icons/check';
  import { Button } from '$lib/components/ui';
  import type { ButtonProps } from '$lib/components/ui';

  let {
    class: className = '',
    codeToCopy,
    ...restProps
  }: ButtonProps & { codeToCopy: string } = $props();

  let copied = $state(false);

  async function handleCopy() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = codeToCopy;
    const plainText = tempDiv.textContent || tempDiv.innerText || '';

    try {
      await navigator.clipboard.writeText(plainText);
      copied = true;

      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }
</script>

<Button
  variant="ghost"
  size="icon"
  /* Combine the base classes and the conditional 'copied' class here */
  class="copy-button {className} {copied ? 'copied' : ''}"
  aria-label="Copy code"
  title="Copy code"
  onclick={handleCopy}
  {...restProps}
>
  {#if copied}
    <Check class="icon-check size-4 text-(--accent-teal)" />
  {:else}
    <Copy class="icon-copy size-4" />
  {/if}
</Button>

<style>
  :global(.copy-button.copied) {
    color: var(--accent-teal) !important;
  }
</style>
