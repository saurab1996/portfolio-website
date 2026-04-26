<script lang="ts">
  import Zap from '@lucide/svelte/icons/zap';
  import Rocket from '@lucide/svelte/icons/rocket';
  import Database from '@lucide/svelte/icons/database';
  import TrendingUp from '@lucide/svelte/icons/trending-up';
  import Gauge from '@lucide/svelte/icons/gauge';
  import Globe from '@lucide/svelte/icons/globe';
  import RefreshCw from '@lucide/svelte/icons/refresh-cw';
  import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard';
  import { Timeline } from '$lib/components/data-display';
  import { ExternalLink, GlassCard } from '$lib/components/ui';

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: {
        name: 'NeoSOFT',
        url: 'https://www.neosofttech.com',
        type: 'onsite',
      },

      client: {
        name: 'NIUM',
        url: 'https://www.nium.com',
      },
      location: 'Mumbai, India',
      date: '2023 - Present',
      isActive: true,
      description:
        'Worked on Instarem, NIUM’s global remittance platform, focusing on performance, scalability, and backend architecture.',

      achievements: [
        {
          icon: Zap,
          text: 'Led performance optimization of 150,000+ SEO-driven pages, including large-scale programmatic content',
        },
        {
          icon: Rocket,
          text: 'Architected and maintained Dockerized development environments for consistent workflows',
        },
        {
          icon: Database,
          text: 'Designed custom database tables and optimized schemas to support scalable and high-performance features',
        },
        {
          icon: TrendingUp,
          text: 'Implemented advanced programmatic SEO strategies, significantly improving organic traffic',
        },
        {
          icon: Gauge,
          text: 'Built custom plugins and MU-plugins to extend WordPress core and optimize performance-critical features',
        },
        {
          icon: Globe,
          text: 'Developed custom REST API endpoints for high-performance data access and integrations',
        },
        {
          icon: RefreshCw,
          text: 'Engineered a custom query builder to replace WP_Query for complex and efficient data retrieval',
        },
        {
          icon: LayoutDashboard,
          text: 'Extended Elementor core functionality for dynamic components and scalable UI systems',
        },
      ],
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: {
        name: 'Goldenmace',
        url: 'https://www.goldenmace.com',
        type: 'onsite',
      },
      client: null,
      location: 'Mumbai, India',
      date: '2022 - 2023',
      isActive: false,
      description:
        'Delivered scalable WordPress solutions and modern web applications, focusing on performance, SEO, and full-stack architecture.',

      achievements: [
        {
          icon: TrendingUp,
          text: 'Delivered scalable and secure WordPress plugins, themes, and addons improving user experience',
        },
        {
          icon: Gauge,
          text: 'Built SEO-optimized frontends using React.js and Next.js (SSG) for high-performance rendering',
        },
        {
          icon: Globe,
          text: 'Developed robust REST APIs and eCommerce systems using Laravel and PHP',
        },
        {
          icon: RefreshCw,
          text: 'Managed complex state and data fetching using TanStack Query and custom React hooks',
        },
        {
          icon: Rocket,
          text: 'Published and maintained premium products on WordPress.org and ThemeForest',
        },
      ],
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: {
        name: 'Goldenmace',
        url: 'https://www.goldenmace.com',
        type: 'onsite',
      },
      client: null,
      location: 'Mumbai, India',
      date: '2021 - 2022',
      isActive: false,
      description:
        'Worked on backend development and frontend integrations, building scalable features using Laravel, Core PHP, and Vue.js.',

      achievements: [
        {
          icon: Database,
          text: 'Developed backend systems using Laravel and Core PHP',
        },
        {
          icon: LayoutDashboard,
          text: 'Built dynamic and responsive UI components using Vue.js',
        },
        {
          icon: RefreshCw,
          text: 'Integrated APIs and handled data flow between frontend and backend systems',
        },
      ],
    },
  ] as const;

  const items = experiences.map((exp) => exp);
</script>

<Timeline {items}>
  {#snippet content(item)}
    <GlassCard class={`p-6  flex flex-col gap-2 transition-all duration-300`}>
      <div class="flex justify-between items-start mb-2 gap-4">
        <!-- LEFT -->
        <h3 class="flex flex-col gap-1">
          <!-- Company + type -->
          <div class="flex items-center gap-2 flex-wrap">
            <ExternalLink
              href={item.company.url}
              class="font-semibold text-base"
            >
              {item.company.name}
            </ExternalLink>

            <!-- type badge -->
            <span
              class={`text-[10px] px-2 py-0.5 rounded capitalize
                  ${
                    item.company.type === 'onsite'
                      ? 'bg-green-100 text-green-700'
                      : item.company.type === 'remote'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                  }`}
            >
              {item.company.type}
            </span>
          </div>

          <!-- Client inline (cleaner) -->
          {#if item.client}
            <div class="flex items-center gap-2 text-xs">
              <span class="text-gray-400 font-bold">Client</span>

              <ExternalLink
                href={item.client.url}
                class="px-2 py-0.5 rounded-md bg-muted text-foreground hover:bg-muted/70 transition font-semibold"
              >
                {item.client.name}
              </ExternalLink>
            </div>
          {/if}
        </h3>

        <!-- RIGHT (date aligned properly) -->
        <div class="text-right shrink-0">
          <span
            class={`text-xs font-semibold ${
              item.isActive ? 'text-primary' : 'text-gray-500'
            }`}
          >
            {item.date}
          </span>
        </div>
      </div>

      <div class="text-sm font-semibold text-primary uppercase">
        {item.title}
      </div>

      <div class="text-xs text-gray-500 mb-4">{item.location}</div>

      <ul class="space-y-3">
        {#each item.achievements as a}
          {@const Icon = a.icon}

          <li class="flex gap-3 text-sm">
            {#if Icon}
              <Icon
                size={16}
                class={item.isActive ? 'text-primary' : 'text-gray-400'}
              />
            {/if}
            {a.text}
          </li>
        {/each}
      </ul>
    </GlassCard>
  {/snippet}
</Timeline>
