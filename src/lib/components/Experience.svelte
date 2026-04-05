<script lang="ts">
  import { experiences } from '$lib/data/experience';
</script>

<section id="experience">
  <div
    class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
  >
    <div>
      <h2 class="text-4xl font-headline font-bold tracking-tight">
        Experience
      </h2>
    </div>
    <div
      class="h-[1px] flex-grow mx-8 bg-surface-container-high hidden md:block"
    ></div>
  </div>

  <div
    class="relative space-y-12
    "
  >
    <div
      class="absolute top-0 bottom-0 left-[1.25rem] md:left-1/2 w-0.5 -translate-x-1/2 z-0 bg-[#4648d4] opacity-30"
    ></div>

    {#each experiences as exp (exp.id)}
      <div
        class={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
      >
        <!-- Dot -->
        <div
          class={`relative z-20 flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300
    ${exp.isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}
        >
          <span class="material-symbols-outlined text-lg">work</span>
        </div>

        <!-- Card -->
        <div
          class={`w-[calc(100%-4rem)] md:w-[45%] p-6 relative z-10 rounded-xl flex flex-col gap-2 transition-all duration-300
    ${
      exp.isActive
        ? 'bg-white shadow-[0_20px_50px_rgba(70,72,212,0.12)] scale-[1.02]'
        : 'bg-white shadow-[0_20px_40px_rgba(70,72,212,0.06)] hover:-translate-y-0.5'
    }`}
        >
          <div class="flex items-center justify-between space-x-2 mb-1">
            <div class="font-bold text-on-surface font-headline">
              {exp.company}
            </div>
            <time
              class={`font-mono text-xs font-bold ${
                exp.isActive ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {exp.period}
            </time>
          </div>

          <div
            class="text-sm font-semibold text-secondary mb-1 uppercase tracking-wider"
          >
            {exp.title}
          </div>

          <div class="text-xs text-on-surface-variant mb-4">
            {exp.location}
          </div>

          <ul class="space-y-3">
            {#each exp.achievements as achievement}
              <li class="flex gap-3 text-sm text-on-surface-variant">
                <span
                  class={`material-symbols-outlined text-base shrink-0 ${
                    exp.isActive ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {achievement.icon}
                </span>
                {achievement.text}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>
