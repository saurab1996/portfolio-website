<script lang="ts">
  import type { Skill } from '$lib/types/general.types';

  interface Props {
    category: string;
    skills: readonly Skill[];
  }

  const { category, skills }: Props = $props();
</script>

<div
  class="bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(70,72,212,0.06)] flex flex-col gap-2 hover:-translate-y-0.5 transition-transform"
>
  <div
    class="text-[10px] font-bold text-primary tracking-widest uppercase mb-4"
  >
    {category}
  </div>
  <ul class="space-y-2 text-sm font-medium">
    {#each skills as skill}
      <li class="flex items-center space-x-2">
        {#if skill.icon}
          <i class="{skill.icon} text-primary text-base"></i>
        {:else}
          <span class="w-1 h-1 bg-primary rounded-full"></span>
        {/if}
        <span>{skill.name}</span>
      </li>
    {/each}
  </ul>
</div>
