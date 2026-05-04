<script lang="ts">
  import type { Project } from '$lib/types/project.types';
  import { ExternalLink, GlassCard, Image } from '$lib/components/ui';
  interface Props {
    project: Project;
  }
  const { project }: Props = $props();
</script>

<GlassCard
  variant="surface"
  class="group flex flex-col md:flex-row gap-5 md:gap-6 overflow-hidden p-5 md:p-6"
>
  <!-- Image -->
  <div
    class="w--full md:w-[40%] md:min-w-50 md:max-w-70 overflow-hidden rounded-lg"
  >
    <div class="aspect-16/10 h-full">
      <Image
        mainImg="thumbnail"
        full={project.visualSuggestion.full}
        thumbnail={project.visualSuggestion.thumbnail}
        class="h-full w-full"
      />
    </div>
  </div>

  <!-- Content -->
  <div class="flex flex-col flex-1 gap-2">
    <!-- Title -->
    <ExternalLink
      href={project.header.liveLink.url}
      class="font-semibold text-base md:text-lg text-on-surface group-hover:text-primary transition-colors"
      showIcon={false}
    >
      {project.header.title}
    </ExternalLink>

    <!-- Role -->
    <div class="text-xs text-muted-foreground">
      <span class="font-semibold text-foreground/80">Role:</span>
      {project.header.role}
    </div>

    <!-- Description -->
    <p class="text-sm text-on-surface-variant leading-relaxed flex-1">
      {project.oneLiner}
    </p>

    <!-- Tech -->
    <div class="flex flex-wrap gap-2 pt-1">
      {#each project.techStack as stack}
        <span
          class="px-2.5 py-1 rounded-md bg-surface-container-low text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant"
        >
          {stack.category}
        </span>
      {/each}
    </div>
  </div>
</GlassCard>
