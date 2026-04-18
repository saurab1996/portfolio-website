<script lang="ts">
  import { page } from '$app/state';
  import { Button } from '$lib/components/ui';

  const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/technical', label: 'STACK' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/blog', label: 'BLOG' },
    { href: '/contact', label: 'CONTACT' },
  ];
  type Props = {
    class?: string;
  };
  let props: Props = $props();
</script>

<nav class={`${props?.class || ''}`} aria-label="Main navigation">
  {#each navLinks as link}
    <Button
      variant="nav"
      href={link.href}
      aria-current={page.url.pathname === link.href ? 'page' : undefined}
      class="font-medium text-sm tracking-wide transition-colors duration-200
          {page.url.pathname === link.href
        ? 'text-primary'
        : 'text-on-surface-variant hover:text-primary'}"
    >
      {link.label}
    </Button>
  {/each}
</nav>
