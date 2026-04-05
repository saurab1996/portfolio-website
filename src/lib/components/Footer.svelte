<script lang="ts">
  import Logo from '$lib/components/ui/Logo.svelte';
  import { navLinks } from '$lib/data/links';
  import { page } from '$app/stores';
</script>

<footer class="full-width py-12 bg-surface-container-low mt-auto">
  <div class="content-width">
    <!-- Top row: logo left, nav links right -->
    <div class="flex items-center justify-between mb-8">
      <Logo />
      <nav class="flex items-center gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            aria-current={$page.url.pathname === link.href ? 'page' : undefined}
            class="text-sm tracking-widest tracking-widest transition-colors duration-200
              {$page.url.pathname === link.href
              ? 'text-primary'
              : 'text-on-surface-variant hover:text-primary'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>
    </div>

    <!-- Divider -->
    <div class="w-full h-px bg-outline-variant mb-8"></div>

    <!-- Bottom row: social left, copyright right -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a
          href="https://github.com/saurabgupta"
          class="text-on-surface-variant hover:text-primary text-sm tracking-tight transition-colors"
          >GitHub</a
        >
        <a
          href="https://linkedin.com/in/saurabgupta"
          class="text-on-surface-variant hover:text-primary text-sm tracking-tight transition-colors"
          >LinkedIn</a
        >
        <a
          href="mailto:saurab@email.com"
          class="text-on-surface-variant hover:text-primary text-sm tracking-tight transition-colors"
          >Contact</a
        >
      </div>
      <p class="text-on-surface-variant text-sm tracking-tight">
        © 2026 Saurab Gupta. Crafted with precision.
      </p>
    </div>
  </div>
</footer>
