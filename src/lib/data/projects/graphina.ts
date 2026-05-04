import type { Project } from '$lib/types/project.types';

export const graphinaProject: Project = {
  id: 'graphina',
  oneLiner:
    'Built and scaled a WordPress charting system for dynamic data visualization. Integrated across Elementor, Divi, and Gutenberg with a focus on performance and flexibility.',
  header: {
    title: 'Graphina – Charts and Graphs Plugins and Addons',
    role: 'Backend Developer',
    meta: [
      { key: 'tenure', value: '2021 – 2023' },
      { key: 'platform', value: 'WordPress (Elementor / Divi / Gutenberg)' },
    ],
    liveLink: {
      label: 'View Live Product',
      url: 'https://wordpress.org/plugins/graphina-elementor-charts-and-graphs/',
    },
  },
  visualSuggestion: {
    full: {
      url: '/images/project/graphina-banner.webp',
      alt: 'Graphina project banner',
      height: 500,
      width: 1544,
    },
    thumbnail: {
      url: '/images/project/graphina-banner-thumbnail.webp',
      alt: 'Graphina project thumbnail',
      height: 249,
      width: 768,
    },
  },
  summary: {
    mission: {
      heading: 'The Executive Summary',
      body: 'I led the engineering team behind the Graphina suite, architecting a "Data-Agnostic" engine that transformed WordPress into a powerhouse for data visualization. Our goal was to enable users to pull complex information from any source—SQL, APIs, or Cloud Spreadsheets—and render it into 30+ interactive, enterprise-grade charts.',
    },
    stats: {
      heading: 'Key Technical Metrics',
      items: [
        {
          label: 'Chart Variety',
          value: '30+ Interactive Chart Types',
        },
        {
          label: 'Integration',
          value: 'Native support for 3 major Page Builders',
        },
        {
          label: 'Feature Parity',
          value: '100% logic sync across all versions',
        },
        {
          label: 'Security',
          value: 'Zero-injection SQL Query Builder',
        },
      ],
    },
  },
  sections: [
    {
      id: 'data-engine',
      type: 'architecture',
      heading: 'The "Any-Source" Data Engine',
      body: 'The primary technical challenge was creating a unified backend logic that could ingest disparate data formats—JSON from APIs, rows from SQL, or cells from Google Sheets—and normalize them for frontend rendering engines like ApexCharts and Chart.js.',
      solution: {
        heading: 'Solution: Unified Data Normalization Layer',
        description:
          'I architected a modular parser system that sits between the data source and the frontend, ensuring real-time syncing and high performance.',
        points: [
          {
            label: 'AJAX Auto-Reloading',
            detail:
              'Implemented a non-blocking polling system that updates charts dynamically without refreshing the page as source data changes.',
          },
          {
            label: 'Visual SQL Builder',
            detail:
              'Developed a secure, GUI-based query builder allowing users to fetch WordPress data or connect to external MySQL servers without writing code.',
          },
          {
            label: 'Dynamic API Parsing',
            detail:
              'Built a custom parser for REST APIs that supports User ID-based variables, enabling personalized data views for logged-in users.',
          },
        ],
      },
    },
    {
      id: 'security-interactivity',
      type: 'cards',
      heading: 'Enterprise Features & Security',
      items: [
        {
          id: 'privacy',
          heading: 'Multi-Layered Data Protection',
          subheading: 'Access Control & Encryption',
          problem:
            'Corporate users needed to display sensitive financial metrics that shouldn’t be visible to all site visitors.',
          action: 'Engineered a robust restriction and privacy layer.',
          detail:
            'Implemented Role-Based Access Control (RBAC) and a unique Password Protection feature for individual charts, ensuring data is only decrypted and rendered for authorized sessions.',
        },
        {
          id: 'interactivity',
          heading: 'Dynamic Frontend Logic',
          subheading: 'Real-time Interactivity',
          problem:
            'Users often need to compare data across different formats (e.g., switching a Bar chart to a Line chart) instantly.',
          action: 'Developed a client-side "Chart Swapper" and filter engine.',
          detail:
            'Created logic that allows users to toggle chart types and apply complex filters to API/SQL datasets on the fly, providing a "Dashboard" feel within standard WordPress pages.',
        },
        {
          id: 'optimization',
          heading: 'Performance at Scale',
          subheading: 'Conditional Logic & Assets',
          problem:
            'Each chart featured 100+ customization options, which threatened to bloat the page builder editor performance.',
          action: 'Optimized rendering via "Core Library" approach.',
          detail:
            'Centralized the core visualization logic into a shared library used across Elementor, Divi, and Gutenberg. Used conditional asset loading to ensure only the necessary JS/CSS for a specific chart type is loaded on the frontend.',
        },
      ],
    },
    {
      id: 'export-styling',
      type: 'grid',
      heading: 'Advanced Visual Capabilities',
      body: 'Beyond data fetching, we focused on high-fidelity output and intelligent styling to meet corporate reporting standards.',
      items: [
        {
          name: 'High-Fidelity Export',
          description: 'Frontend engine for PNG, SVG, and CSV downloads.',
        },
        {
          name: 'Conditional Coloring',
          description:
            'Logic-driven styling (e.g., Red for loss, Green for profit).',
        },
        {
          name: 'Firebase Integration',
          description: 'Real-time NoSQL data syncing for live tracking.',
        },
        {
          name: 'Mixed Charts',
          description:
            'Combining multiple data types (Line/Area/Column) in one view.',
        },
      ],
    },
    {
      id: 'lead-perspective',
      type: 'quote',
      heading: "The Team Lead's Perspective",
      quote:
        'Managing the Graphina suite required a deep understanding of how different page builders handle state. By establishing a "Core Library" for our 30+ chart types, I ensured that a feature developed for Elementor would work identically in Gutenberg or Divi. This architectural consistency allowed us to maintain three separate products with a single, agile engineering team.',
    },
  ],
  techStack: [
    {
      category: 'Backend',
      items: [
        'PHP (OOP)',
        'WordPress Plugin API',
        'REST API (JSON)',
        'MySQL',
        'Google Sheets API',
        'Firebase',
      ],
    },
    {
      category: 'Frontend',
      items: ['JavaScript (ES6+)', 'React', 'ApexCharts', 'Chart.js'],
    },
    {
      category: 'WordPress',
      items: [
        'Core Development',
        'Plugin Development',
        'Theme Development',
        'Elementor',
        'Divi',
        'Gutenberg (Block Editor)',
      ],
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitLab'],
    },
  ],
  cta: {
    heading: 'Ready to build data-driven WordPress solutions?',
  },
};
