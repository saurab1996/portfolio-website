<script>
  import { skillGroups } from '$lib/data/skills';
  import SkillCard from '$lib/components/SkillCard.svelte';
</script>

<section id="skills">
  <div
    class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
  >
    <div>
      <h2 class="text-4xl font-headline font-bold tracking-tight">
        Skills & Technologies
      </h2>
    </div>
    <div
      class="h-[1px] flex-grow mx-8 bg-surface-container-high hidden md:block"
    ></div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each skillGroups as group}
      <SkillCard category={group.category} skills={group.skills} />
    {/each}
  </div>
</section>
