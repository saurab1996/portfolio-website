export const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'NeoSOFT (Client: NIUM)',
    location: 'Mumbai, India',
    period: '2023 - Present',
    isActive: true,
    description:
      "Contributing to the development of Instarem, NIUM's global remittance business website with focus on performance optimization and technical oversight.",
    achievements: [
      {
        icon: 'bolt',
        text: 'Led performance optimization of 150,000+ SEO-optimized pages',
      },
      {
        icon: 'deployed_code',
        text: 'Architected Dockerized development environments',
      },
      {
        icon: 'cached',
        text: 'Integrated Memcached and Cloudflare for CDN and caching',
      },
      {
        icon: 'search_insights',
        text: 'Applied advanced programmatic SEO techniques driving significant organic traffic growth',
      },
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Goldenmace',
    location: 'Mumbai, India',
    period: '2021 - 2023',
    isActive: false,
    description:
      'Managed and optimized high-traffic WordPress money transfer platform, focusing on performance improvements and scalable architecture.',
    achievements: [
      {
        icon: 'trending_up',
        text: 'Achieved 200% increase in website traffic',
      },
      {
        icon: 'speed',
        text: 'Improved performance using Docker, Memcached, and Cloudflare CDN',
      },
      {
        icon: 'travel_explore',
        text: 'Implemented advanced programmatic SEO strategies',
      },
      {
        icon: 'sync_alt',
        text: 'Maintained code quality with Jenkins CI/CD and SonarQube',
      },
    ],
  },
  {
    id: 3,
    title: 'WordPress Developer',
    company: 'KiviCare Project',
    location: 'Mumbai, India',
    period: '2021 - 2023',
    isActive: false,
    description:
      "Led development and maintenance of KiviCare's WordPress plugins, themes, and addons for clinic management system and EHR solutions.",
    achievements: [
      {
        icon: 'medical_services',
        text: 'Built responsive UI using Vue.js and Bootstrap',
      },
      {
        icon: 'translate',
        text: 'Implemented multi-language support for localization',
      },
      {
        icon: 'deployed_code',
        text: 'Successfully released plugins on WordPress.org and ThemeForest',
      },
      {
        icon: 'dashboard',
        text: 'Managed cross-functional team delivery of healthcare solutions',
      },
    ],
  },
] as const;
