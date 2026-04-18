<script lang="ts">
  import { Button } from '$lib/components/ui';

  const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/technical', label: 'STACK' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
  ];
</script>

<nav class="flex items-center gap-8" aria-label="Footer navigation">
  {#each navLinks as link}
    <Button
      variant="nav"
      href={link.href}
      class="text-on-surface-variant hover:text-primary"
    >
      {link.label}
    </Button>
  {/each}
</nav>
