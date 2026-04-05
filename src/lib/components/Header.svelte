<script lang="ts">
  import { page } from '$app/state';

  import { navLinks } from '$lib/data/links';
  import Logo from './ui/Logo.svelte';
  import ResumeButton from './ui/ResumeButton.svelte';
  let isSticky = $state(false);

  $effect(() => {
    if (typeof window === 'undefined') return;

    const onScroll = () => {
      isSticky = window.scrollY > 10;
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header
  class="fixed top-0 w-full z-50 transition-all duration-300
    {isSticky
    ? 'bg-background/80 backdrop-blur-xl shadow-lg'
    : 'bg-transparent shadow-none'}"
>
  <div class="content-width flex justify-between items-center px-8 py-5 w-full">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3" aria-label="Go to homepage">
      <Logo class="hidden md:block" />
      <Logo mobile class="md:hidden" />
    </a>

    <!-- Navigation -->
    <nav class="hidden md:flex gap-8 items-center" aria-label="Main navigation">
      {#each navLinks as link}
        <a
          href={link.href}
          aria-current={page.url.pathname === link.href ? 'page' : undefined}
          class="font-medium text-sm tracking-wide transition-colors duration-200
            {page.url.pathname === link.href
            ? 'text-primary'
            : 'text-on-surface-variant hover:text-primary'}"
        >
          {link.label}
        </a>
      {/each}

      <!-- CTA -->
      <ResumeButton />
    </nav>
  </div>

  <!-- Divider -->
  <div class="bg-surface-container-low h-px w-full"></div>
</header>
