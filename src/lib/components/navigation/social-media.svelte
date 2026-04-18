<script lang="ts">
  import { EMAIL_ADDRESS, LINKEDIN_ADDRESS } from '$lib/config';
  import { Globe, User, Mail } from 'lucide-svelte';
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/saurabgupta',
      icon: Globe,
    },
    {
      label: 'LinkedIn',
      href: LINKEDIN_ADDRESS,
      icon: User,
    },
    {
      label: 'Contact',
      href: `mailto:${EMAIL_ADDRESS}`,
      icon: Mail,
    },
  ];
</script>

{#each links as link (link.href)}
  <a
    href={link.href}
    class="flex items-center gap-2 text-on-surface-variant hover:text-primary text-sm tracking-tight transition-colors"
  >
    <link.icon class="size-4" />
    <span>{link.label}</span>
  </a>
{/each}
