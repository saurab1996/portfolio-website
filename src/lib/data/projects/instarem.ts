import type { Project } from '$lib/types/project.types';

export const instaremProject: Project = {
  id: 'instarem',
  oneLiner:
    'A multi-region fintech marketing website powering large-scale SEO, localized content, and high-performance user journeys.',

  header: {
    title: 'Instarem – Multi-Region FinTech Marketing Website',
    role: 'Senior Web Developer & Team Lead',
    meta: [
      {
        key: 'scale',
        value: '150,000+ Pages | 15+ Regions',
      },
      {
        key: 'focus',
        value: 'WordPress, Programmatic SEO, Performance Optimization',
      },
    ],
    liveLink: {
      label: 'View Website',
      url: 'https://www.instarem.com/en-sg/',
    },
  },
  visualSuggestion: {
    full: {
      url: '/images/project/instarem-banner.webp',
      alt: 'Instarem project banner',
      height: 500,
      width: 1544,
    },
    thumbnail: {
      url: '/images/project/instarem-banner-thumbnail.webp',
      alt: 'Instarem project thumbnail',
      height: 249,
      width: 768,
    },
  },
  summary: {
    mission: {
      heading: 'Overview',
      body: 'A high-scale WordPress marketing website built to support global fintech operations, enabling localized content delivery, programmatic SEO, and consistent Core Web Vitals across multiple regions.',
    },
    stats: null,
  },
  sections: [
    {
      id: 'architectural-pillars',
      type: 'pillars',
      heading: 'Key Architectural Pillars',
      items: [
        {
          id: 'programmatic-infrastructure',
          number: 1,
          heading: 'High-Scale Programmatic Infrastructure',
          body: "Instead of traditional page creation, I architected a Virtual Routing Layer to support the platform's global reach.",
          points: [
            {
              label: 'Decoupled Content Delivery',
              detail:
                'Engineered a system that maps 150k+ unique SEO-driven URLs to a single optimized WordPress template.',
            },
            {
              label: 'Custom Data Schemas',
              detail:
                'Developed high-performance custom SQL tables to manage regional data, bypassing the limitations of standard WordPress metadata to ensure sub-second query execution.',
            },
            {
              label: 'Dynamic Hydration',
              detail:
                'Utilized WordPress rewrite rules to intercept requests and hydrate templates on-the-fly based on localized data sets.',
            },
          ],
        },
        {
          id: 'performance-engineering',
          number: 2,
          heading: 'Performance Engineering & Resource Optimization',
          body: 'To maintain a "Green" status in Google\'s Core Web Vitals across a heavy-traffic site:',
          points: [
            {
              label: 'Intelligent Asset Loading (MU-Plugins)',
              detail:
                'Developed a Must-Use plugin architecture to conditionally load scripts and backend logic only when required by the specific route. This significantly reduced the DOM size and initial execution time.',
            },
            {
              label: 'Object-Level Caching',
              detail:
                'Integrated Memcached to offload repetitive database lookups, reducing server strain during peak global traffic hours.',
            },
            {
              label: 'Custom Query Engine',
              detail:
                'Built a lightweight alternative to standard WP queries to fetch data with minimal overhead.',
            },
          ],
        },
        {
          id: 'security-governance',
          number: 3,
          heading: 'Security & Quality Governance',
          body: 'Operating in the FinTech space required a "Security-First" development lifecycle (SDLC).',
          points: [
            {
              label: 'Automated Guardrails',
              detail:
                'Integrated SonarQube for static code analysis and Snyk for dependency vulnerability scanning within the CI/CD pipeline.',
            },
            {
              label: 'Edge Management',
              detail:
                'Orchestrated Cloudflare configurations (WAF/Workers) to optimize delivery and mitigate potential security threats at the edge.',
            },
          ],
        },
      ],
    },
    {
      id: 'leadership',
      type: 'leadership',
      heading: 'Leadership & Stakeholder Alignment',
      body: 'I served as the technical bridge between cross-functional teams:',
      items: [
        {
          team: 'Marketing',
          contribution:
            'Translated SEO requirements into a scalable programmatic engine.',
        },
        {
          team: 'DevOps',
          contribution:
            'Aligned application deployment cycles with AWS container orchestration.',
        },
        {
          team: 'Design',
          contribution:
            'Ensured high-fidelity UI implementation while maintaining strict performance budgets.',
        },
      ],
    },
  ],
  techStack: [
    {
      category: 'Backend',
      items: ['WordPress Core', 'PHP', 'MySQL', 'Memcached'],
    },
    {
      category: 'Frontend',
      items: ['TypeScript', 'React', 'SCSS', 'Rollup'],
    },
    {
      category: 'WordPress',
      items: [
        'Core Development',
        'Plugins Development',
        'Theme Development',
        'MU Plugin',
        'Rest API',
        'Admin Panel',
        'Custom Query Builder',
      ],
    },
    {
      category: 'DevOps',
      items: ['AWS (ECS/ALB)', 'Docker', 'Jenkins CI/CD', 'Cloudflare', 'CDN'],
    },
    {
      category: 'SEO & Analytics',
      items: [
        'Programmatic SEO',
        'Google Analytics (GA4)',
        'Google Tag Manager (GTM)',
        'Google Search Console (GSC)',
        'Structured Data (Schema.org)',
        'Technical SEO (CWV, Indexing)',
        'XML Sitemap Generation',
      ],
    },
    {
      category: 'Workflow & Collaboration',
      items: [
        'Agile (Scrum/Kanban)',
        'Jira (Project Tracking)',
        'Sprint Planning & Estimation',
        'Code Reviews',
      ],
    },
    {
      category: 'Version Control',
      items: ['Git', 'Bitbucket'],
    },
  ],
  cta: {
    heading: "Let's Discuss Scalable Plugin Architecture",
  },
};
