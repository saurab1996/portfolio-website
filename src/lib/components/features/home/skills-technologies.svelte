<script>
  import Server from "@lucide/svelte/icons/server";
  import Cloud from "@lucide/svelte/icons/cloud";
  import Database from "@lucide/svelte/icons/database";
  import Code from "@lucide/svelte/icons/code";
  import GitBranch from "@lucide/svelte/icons/git-branch";
  import Boxes from "@lucide/svelte/icons/boxes";
  import Workflow from "@lucide/svelte/icons/workflow";
  import HardDrive from "@lucide/svelte/icons/hard-drive";
  import Zap from "@lucide/svelte/icons/zap";
  import Globe from "@lucide/svelte/icons/globe";
  import Wrench from "@lucide/svelte/icons/wrench";
  import { GlassCard } from "$lib/components/ui";

  const skillGroups = [
    {
      category: "Backend",
      skills: [
        { name: "PHP / Laravel", icon: Code },
        { name: "WordPress (Core/Custom)", icon: Server },
        { name: "Node.js / Express", icon: Code },
        { name: "Redis", icon: Zap },
        { name: "Memcached", icon: HardDrive },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "MySQL / PostgreSQL", icon: Database },
        { name: "React / Next.js", icon: Code },
        { name: "TypeScript", icon: Code },
        { name: "Tailwind CSS", icon: Code },
        { name: "Vue.js", icon: Code },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "AWS", icon: Cloud },
        { name: "Cloudflare (CDN, R2, Workers)", icon: Globe },

        { name: "Docker", icon: Boxes },
        { name: "Kubernetes", icon: Boxes },

        { name: "CI/CD Pipelines", icon: Workflow },
        { name: "Jenkins", icon: Wrench },
      ],
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git / GitHub", icon: GitBranch },
        { name: "Bitbucket", icon: GitBranch },
        { name: "GitLab", icon: GitBranch },
      ],
    },
  ];
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
      class="hidden md:block flex-1 h-px mx-8 bg-linear-to-r from-transparent via-gray-300 to-transparent opacity-60"
    ></div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each skillGroups as group}
      <GlassCard class="p-6 flex flex-col gap-2" as="h3">
        <div
          class="text-[10px] font-bold text-primary tracking-widest uppercase mb-4"
        >
          {group.category}
        </div>
        <ul class="space-y-2 text-sm font-medium">
          {#each group.skills as skill}
            <li class="flex items-center gap-2">
              {#if skill.icon}
                <skill.icon class="w-4 h-4 text-primary" />
              {:else}
                <span class="w-1 h-1 bg-primary rounded-full"></span>
              {/if}
              <span>{skill.name}</span>
            </li>
          {/each}
        </ul>
      </GlassCard>
    {/each}
  </div>
</section>
