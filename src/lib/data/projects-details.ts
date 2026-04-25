import type { Project } from '$lib/types/project.types';

export const projects: Project[] = [
  {
    id: 'kivicare',
    header: {
      title: 'KiviCare - Clinic & Patient Management System',
      role: 'Plugin Team Lead',
      meta: [
        { key: 'tenure', value: '2021 – 2023' },
        { key: 'platform', value: 'WordPress / WooCommerce / Mobile App Sync' },
      ],
      liveLink: { label: 'View Live Product', url: 'https://kivicare.io' },
      visualSuggestion:
        'Use the KiviCare logo or a high-quality mockup showing the dashboard on both desktop and mobile',
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
            description:
              'Integrated automated patient reminders (Twilio/Nexmo)',
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
        items: ['PHP', 'WordPress', 'WooCommerce', 'MySQL', 'REST API'],
      },
      {
        category: 'Frontend',
        items: ['Vue.js', 'React.js'],
      },
      {
        category: 'Tools & Version Control',
        items: ['Git'],
      },
    ],
    cta: {
      heading: "Let's Discuss Scalable Plugin Architecture",
      buttonLabel: 'Contact Saurab',
    },
  },
  {
    id: 'fintech-platform',
    header: {
      title: 'Global FinTech Platform Orchestration',
      role: 'Senior Technical Lead',
      meta: [
        {
          key: 'scale',
          value: '150,000+ Dynamic Nodes | 15+ International Regions',
        },
        {
          key: 'objective',
          value:
            'Scaling a high-compliance WordPress ecosystem for enterprise performance and programmatic growth.',
        },
      ],
      liveLink: null,
      visualSuggestion: null,
    },
    summary: {
      mission: {
        heading: 'The Enterprise Challenge',
        body: 'The objective was to manage an immense global footprint while maintaining the strict security and performance standards required for a financial services platform. The primary hurdle was supporting a massive SEO strategy (150k+ pages) without compromising database integrity or Core Web Vitals (CWV).',
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
        items: ['WordPress Core', 'PHP', 'Custom MySQL Schemas', 'Memcached'],
      },
      {
        category: 'Frontend',
        items: ['TypeScript', 'React', 'SCSS', 'Rollup'],
      },
      {
        category: 'Infrastructure',
        items: ['AWS (ECS/ALB)', 'Docker', 'Jenkins CI/CD'],
      },
    ],
    cta: {
      heading: "Let's Discuss Scalable Plugin Architecture",
      buttonLabel: 'Contact Saurab',
    },
  },
  {
    id: 'graphina',
    header: {
      title: 'Graphina – The Enterprise Data Visualization Suite',
      role: 'Plugin Developer Team Lead',
      meta: [
        { key: 'tenure', value: '2021 – 2023' },
        { key: 'platform', value: 'WordPress (Elementor / Divi / Gutenberg)' },
      ],
      liveLink: {
        label: 'View Live Product',
        url: 'https://wordpress.org/plugins/graphina-elementor-charts-and-graphs/',
      },
      visualSuggestion:
        'A multi-device mockup showing complex charts (Radar, Polar, Mixed) being edited within the Elementor side-panel',
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
            action:
              'Developed a client-side "Chart Swapper" and filter engine.',
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
        category: 'Frontend & Viz',
        items: ['JavaScript (ES6+)', 'React', 'ApexCharts', 'Chart.js'],
      },
      {
        category: 'Backend & APIs',
        items: [
          'PHP (OOP)',
          'WordPress Plugin API',
          'REST API (JSON)',
          'MySQL',
        ],
      },
      {
        category: 'Integrations',
        items: [
          'Google Sheets API',
          'Firebase',
          'Elementor/Divi/Gutenberg APIs',
        ],
      },
    ],
    cta: {
      heading: 'Ready to build data-driven WordPress solutions?',
      buttonLabel: 'Contact Saurab',
    },
  },
];
