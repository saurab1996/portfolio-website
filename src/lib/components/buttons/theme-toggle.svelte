<script lang="ts">
  import { Sun, Moon } from '@lucide/svelte/icons';
  import { Button } from '$lib/components/ui';
  import { toggleTheme } from '$lib/utils/theme';
  import type { ThemeMode } from '$lib/types/general.types';

  let theme = $state<ThemeMode>('light');

  const handleToggle = () => {
    theme = toggleTheme(theme);
  };

  $effect(() => {
    theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  });
</script>

<Button
  variant="outline"
  size="icon-lg"
  onclick={handleToggle}
  aria-label="Toggle theme"
>
  {#if theme === 'dark'}
    <Sun class="h-5 w-5" />
  {:else}
    <Moon class="h-5 w-5" />
  {/if}
</Button>
