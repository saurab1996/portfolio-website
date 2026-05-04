<script lang="ts">
  import { ProjectCard } from '$lib/components/data-display';
  import Button from '$lib/components/ui/button.svelte';
  import { projects } from '$lib/data/projects';

  const categorys = projects.reduce((acc, project) => {
    if (!acc.has('All Projects')) {
      acc.set('All Projects', []);
    }
    acc.get('All Projects').push(project.id);

    for (const { category } of project.techStack) {
      if (
        ['Tools & Version Control', 'Integrations'].includes(category || '')
      ) {
        continue;
      }
      const list = acc.get(category);

      if (list) {
        list.push(project.id);
      } else {
        acc.set(category, [project.id]);
      }
    }

    return acc;
  }, new Map());

  let activeCategory = $state('All Projects');
  const selectCategoryProjectIds = $derived(
    categorys.get(activeCategory),
  ) as string[];
</script>

<section class="flex flex-col gap-5 md:gap-6 lg:gap-7">
  <div
    class="bg-surface-container-low rounded-lg p-2 flex flex-wrap gap-2 items-center"
  >
    {#each categorys.keys() as f}
      <Button
        variant={activeCategory === f ? 'surface' : 'ghost'}
        size="sm"
        aria-pressed={activeCategory === f}
        onclick={() => (activeCategory = f)}
        class="text-[11px] font-semibold tracking-wider uppercase"
      >
        {f}
      </Button>
    {/each}
  </div>
  <div class="grid grid-cols-1 gap-6 md:gap-8">
    {#each projects as project}
      {#if selectCategoryProjectIds.includes(project.id)}
        <ProjectCard {project} />
      {/if}
    {/each}
  </div>
</section>
