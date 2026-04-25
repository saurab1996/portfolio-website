<script lang="ts">
  import { Button } from "$lib/components/ui";
  import type { currentPathType } from "$lib/types/general.types";

  const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/technical", label: "STACK" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/blog", label: "BLOG" },
    { href: "/contact", label: "CONTACT" },
  ];
  interface Props extends currentPathType {
    class?: string;
  }
  const { currentPath, class: className }: Props = $props();
</script>

<nav class={className || ""} aria-label="Main navigation">
  {#each navLinks as link}
    <Button
      variant="nav"
      href={link.href}
      aria-current={currentPath === link.href ? "page" : undefined}
      class="font-medium text-sm tracking-wide transition-colors duration-200
          {currentPath === link.href
        ? 'text-primary'
        : 'text-on-surface-variant hover:text-primary'}"
    >
      {link.label}
    </Button>
  {/each}
</nav>
