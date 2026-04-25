<script lang="ts">
  import { Logo } from "$lib/components/ui";
  import { HeaderNavigation } from "$lib/components/navigation";
  import { ResumeButton, ThemeToggleButton } from "$lib/components/buttons";
  import { MobileMenu } from "$lib/components/layout";
  import type { currentPathType } from "$lib/types/general.types";

  let isSticky = $state(false);
  $effect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        isSticky = window.scrollY > 10;
        ticking = false;
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  });

  const { currentPath }: currentPathType = $props();
</script>

<header
  class="fixed top-0 w-full z-50 transition-all duration-300 {isSticky
    ? 'backdrop-blur-xl shadow-lg'
    : 'shadow-none'}"
  style={isSticky
    ? "background: color-mix(in srgb, var(--background) 80%, transparent)"
    : "background: transparent"}
>
  <div
    class="content-width flex justify-between items-center px-4 lg:px-0 py-5 w-full"
  >
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3" aria-label="Go to homepage">
      <Logo />
    </a>

    <!-- Navigation -->
    <HeaderNavigation {currentPath} class="hidden lg:flex items-center gap-8" />
    <div class="flex gap-3 items-center">
      <ThemeToggleButton />
      <ResumeButton size="lg" />
      <MobileMenu {currentPath} />
    </div>
  </div>

  <!-- Divider -->
  <div class="bg-surface-container-low h-px w-full"></div>
</header>
