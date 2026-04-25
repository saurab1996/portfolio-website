<script lang="ts">
  import { EMAIL_ADDRESS, GITHUB_ADDRESS, LINKEDIN_ADDRESS } from "$lib/config";
  import Globe from "@lucide/svelte/icons/globe";
  import User from "@lucide/svelte/icons/user";
  import Mail from "@lucide/svelte/icons/mail";
  const links = [
    {
      label: "GitHub",
      href: GITHUB_ADDRESS,
      icon: Globe,
    },
    {
      label: "LinkedIn",
      href: LINKEDIN_ADDRESS,
      icon: User,
    },
    {
      label: "Contact",
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
