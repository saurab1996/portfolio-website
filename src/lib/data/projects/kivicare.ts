import type { Project } from '$lib/types/project.types';

export const kivicareProject: Project = {
  id: 'kivicare',
  oneLiner:
    'A healthcare management platform designed for patient records, appointments, and billing operations for WordPress Ecosystems',
  header: {
    title: 'KiviCare - Clinic & Patient Management System',
    role: 'Plugin Team Lead',
    meta: [
      { key: 'tenure', value: '2021 – 2023' },
      { key: 'platform', value: 'WordPress / WooCommerce / Mobile App Sync' },
    ],
    liveLink: { label: 'View Live Product', url: 'https://kivicare.io' },
  },
  visualSuggestion: {
    full: {
      url: '/images/project/kivicare-banner.webp',
      alt: 'Kivicare project banner',
      height: 500,
      width: 1544,
    },
    thumbnail: {
      url: '/images/project/kivicare-banner-thumbnail.webp',
      alt: 'Kivicare project thumbnail',
      height: 249,
      width: 768,
    },
  },
  summary: {
    mission: {
      heading: 'The Brief',
      body: 'As Team Lead, I spearheaded the technical transformation of KiviCare. The goal was to evolve the plugin from a simple booking tool into a comprehensive, robust Clinic Management System (CMS) capable of competing with standalone SaaS solutions, all while remaining within the WordPress ecosystem.',
    },
    stats: {
      heading: 'Project Impact (During Tenure)',
      items: [
        {
          label: 'Market Position',
          value: '#1 Best Selling Clinic Management Plugin on Envato',
        },
        {
          label: 'Performance',
          value: '~30% reduction in dashboard load times',
        },
        { label: 'Ecosystem', value: 'Scaled from 2 to 10+ Premium Add-ons' },
        {
          label: 'User Base',
          value: 'Powering thousands of clinics globally',
        },
      ],
    },
  },
  sections: [
    {
      id: 'architecture',
      type: 'architecture',
      heading: 'The Architectural Dilemma',
      body: 'The central challenge was reconciling legacy WordPress constraints with the demand for a fast, modern "app-like" user experience. Clinics need instant data updates, complex scheduling interfaces, and detailed medical records without frequent page reloads.',
      solution: {
        heading: 'Solution: The Decoupled Frontend Approach',
        description:
          'Instead of relying solely on PHP rendering, I architected a hybrid system using modern JS frameworks injected directly into the WordPress admin.',
        points: [
          {
            label: 'Vue.js Dashboard',
            detail:
              'The main clinic overview and reporting modules were built in Vue.js for rapid data binding and responsiveness.',
          },
          {
            label: 'React.js Scheduling',
            detail:
              'Due to the complex state management required for the drag-and-drop appointment calendar, I implemented React.js for this high-interactivity module.',
          },
          {
            label: 'Isolation',
            detail:
              'Ensured complete CSS/JS scoping to prevent conflicts with other third-party WordPress plugins installed by the user.',
          },
        ],
      },
    },
    {
      id: 'technical-leadership',
      type: 'cards',
      heading: 'Deep Technical Leadership & Solutions',
      items: [
        {
          id: 'rbac',
          heading: 'Strict Healthcare Access Control',
          subheading: 'Advanced RBAC (Permission Module)',
          problem:
            'Standard WordPress capabilities were insufficient for a multi-role clinic environment (Doctor, Receptionist, Accountant, Patient).',
          action: 'Engineered a custom Permission & Role Management Module.',
          detail:
            'Created a sophisticated multi-dimensional permission matrix. This enforced strict data security by checking capabilities not just at the UI level (hiding menus), but critically at the REST API level, blocking unauthorized data access attempts.',
        },
        {
          id: 'i18n',
          heading: 'Global Ready via Core API',
          subheading: 'The Localization (i18n) Engine',
          problem:
            'Maintaining a global product requires seamless translation, but the mixed JS/PHP environment presented an i18n bottleneck.',
          action: 'Unified the translation pipeline using Core WP API.',
          detail:
            'Implemented wp-i18n for the Vue and React frontends. This allowed our modern JS components to utilize standard WordPress .po/.mo files, ensuring the plugin remained fully localized using the standard WP community translation ecosystem.',
        },
        {
          id: 'db-api',
          heading: 'Scaling for Performance',
          subheading: 'Database & API Optimization',
          problem:
            'Storing thousands of medical encounters and patient records in wp_postmeta (EAV model) was extremely slow.',
          action: 'Implemented Custom DB Tables and an API Layer.',
          detail:
            'Moved critical clinic data (Appointments, Billing) to custom optimized SQL tables. Simultaneously, I standardized the REST API endpoints used by the web frontend and Flutter mobile app, utilizing caching and strict schema validation for speed and data integrity.',
        },
      ],
    },
    {
      id: 'addon-ecosystem',
      type: 'grid',
      heading: 'Modular Extension Strategy',
      body: 'To keep the core plugin lightweight, I managed the development of an extensive suite of specialized add-ons.',
      items: [
        {
          name: 'KiviCare Pro',
          description: 'EHR (Electronic Health Records) & Custom Reports',
        },
        {
          name: 'Telemedicine',
          description: 'Secure Zoom/Video integration for remote consults',
        },
        {
          name: 'SMS/Email Gateways',
          description: 'Integrated automated patient reminders (Twilio/Nexmo)',
        },
        {
          name: 'Payment Integrations',
          description: 'Stripe and PayPal setup for global clinic billing',
        },
      ],
    },
    {
      id: 'team-lead-perspective',
      type: 'quote',
      heading: "The Team Lead's Perspective",
      quote:
        'My role transcended code. I was responsible for bridging the gap between product vision and technical feasibility. Managing a mix of Vue, React, and PHP meant enforcing strict coding standards, overseeing cross-platform API consistency, and mentoring the development team through weekly sprints. This technical orchestration is what allowed KiviCare to scale from a simple plugin into a market leader.',
    },
  ],
  techStack: [
    {
      category: 'Backend',
      items: ['PHP', 'WooCommerce', 'MySQL', 'REST API', 'Redis', 'Webhooks'],
    },
    {
      category: 'Frontend',
      items: ['Vue.js', 'React.js', 'Bootstrap'],
    },

    {
      category: 'WordPress',
      items: [
        'Core Development',
        'Plugin Development',
        'Theme Development',
        'Elementor',
        'Localization',
        'Gutenberg (Block Editor)',
      ],
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitLab'],
    },
  ],
  cta: {
    heading: "Let's Discuss Scalable Plugin Architecture",
  },
};
