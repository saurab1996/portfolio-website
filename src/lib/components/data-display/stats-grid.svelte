<script lang="ts">
  import type { ParsedStat } from '$lib/types/general.types';
  import { countUp } from '$lib/utils/countUp';
  import { useInView } from '$lib/utils/useInView.svelte';
  import { GlassCard } from '$lib/components/ui';

  type StatEntry = {
    value: string;
    label: string;
    display: string;
  };

  const stats = [
    {
      value: '5+',
      label: 'Years Full-Stack in Production',
    },
    {
      value: '150K+',
      label: 'SEO Pages Engineered at Scale',
    },
    {
      value: '10+',
      label: 'Client Products Led & Delivered',
    },
    {
      value: '<2s',
      label: 'From Server to Screen',
    },
  ];

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
    <GlassCard class="p-6 flex flex-col gap-2" as="h3">
      <span class="text-primary text-3xl font-bold tracking-tight tabular-nums">
        {stat.display}
      </span>
      <span
        class="text-muted-foreground text-[10px] font-bold tracking-widest uppercase"
      >
        {stat.label}
      </span>
    </GlassCard>
  {/each}
</section>
