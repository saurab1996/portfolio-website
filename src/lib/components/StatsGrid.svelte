<script lang="ts">
  import { stats } from '$lib/data/stats';
  import type { ParsedStat } from '$lib/types/general.types';
  import { countUp } from '$lib/utils/countUp';
  import { useInView } from '$lib/utils/useInView.svelte';

  type StatEntry = {
    value: string;
    label: string;
    display: string;
  };

  const parseStatValue = (value: string): ParsedStat => {
    const match = value.match(/^([<>~]?)(\d+(?:\.\d+)?)(.*)/);
    return {
      prefix: match?.[1] ?? '',
      numeric: match ? parseFloat(match[2]) : null,
      suffix: match?.[3] ?? '',
    };
  };

  let animated = $state<StatEntry[]>(
    stats.map((s) => ({ value: s.value, label: s.label, display: s.value })),
  );

  let sectionEl: HTMLElement;

  useInView(
    () => sectionEl,
    () => {
      const cleanups: (() => void)[] = [];

      stats.forEach((stat, i) => {
        const { prefix, numeric, suffix } = parseStatValue(stat.value);
        if (numeric === null) return;

        animated[i].display = `${prefix}0${suffix}`;

        const stop = countUp({
          to: numeric,
          onUpdate: (val) => {
            animated[i].display = `${prefix}${val}${suffix}`;
          },
          onComplete: () => {
            animated[i].display = stat.value;
          },
        });

        cleanups.push(stop);
      });

      return () => cleanups.forEach((fn) => fn());
    },
  );
</script>

<section bind:this={sectionEl} class="grid grid-cols-2 md:grid-cols-4 gap-4">
  {#each animated as stat}
    <div
      class="bg-white p-6 rounded-xl shadow-[0_20px_40px_rgba(70,72,212,0.06)] flex flex-col gap-2 hover:-translate-y-0.5 transition-transform"
    >
      <span
        class="text-[#6366F1] text-3xl font-bold tracking-tight tabular-nums"
      >
        {stat.display}
      </span>
      <span
        class="text-[#444748] text-[10px] font-bold tracking-widest uppercase"
      >
        {stat.label}
      </span>
    </div>
  {/each}
</section>
