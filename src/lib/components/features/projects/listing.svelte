<script lang="ts">
  import { ProjectCard } from '$lib/components/data-display';
  import Button from '$lib/components/ui/button.svelte';
  import { projects } from '$lib/data/projects';
  import { flip } from 'svelte/animate';

  // Define categories to exclude from the filter list
  const EXCLUDED_CATEGORIES = [
    'Tools & Version Control',
    'Integrations',
    'SEO & Analytics',
  ];

  const categoryMap = projects.reduce((acc, project) => {
    // 1. Add "All"
    if (!acc.has('All')) acc.set('All', []);
    acc.get('All').push(project.id);

    // 2. Filter by Project Type (The "What")
    const type = project.projectType;
    if (!acc.has(type)) acc.set(type, []);
    acc.get(type).push(project.id);

    // 3. Filter by Tech Stack (The "How")
    project.techStack.forEach(({ category }) => {
      if (category && !EXCLUDED_CATEGORIES.includes(category)) {
        if (!acc.has(category)) acc.set(category, []);
        // Prevent duplicate IDs if a project type and tech category share a name
        if (!acc.get(category).includes(project.id)) {
          acc.get(category).push(project.id);
        }
      }
    });

    return acc;
  }, new Map());

  let activeCategory = $state('All');

  // Derived state for the grid
  const visibleProjectIds = $derived(categoryMap.get(activeCategory) || []);
</script>

<section class="flex flex-col gap-6">
  <!-- Filter Bar -->
  <div
    class="bg-surface-container-low rounded-xl p-1.5 flex flex-wrap gap-1 items-center border border-outline/10"
  >
    {#each Array.from(categoryMap.keys()) as category}
      <Button
        variant={activeCategory === category ? 'surface' : 'ghost'}
        size="sm"
        onclick={() => (activeCategory = category)}
        class="text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-all duration-200"
      >
        {category}
      </Button>
    {/each}
  </div>

  <!-- Project Grid -->
  <div class="grid grid-cols-1 gap-8">
    {#each projects.filter( (p) => visibleProjectIds.includes(p.id), ) as project (project.id)}
      <div animate:flip={{ duration: 300 }}>
        <ProjectCard {project} />
      </div>
    {/each}
  </div>
</section>
