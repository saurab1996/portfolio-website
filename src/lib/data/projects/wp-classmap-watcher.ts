import type { Project } from '$lib/types/project.types';

export const wpClassmapWatcher: Project = {
  id: 'wp-classmap-watcher',
  projectType: 'Open Source',
  oneLiner: `PHP Classmap Watcher is a lightweight VS Code extension for any PHP project.
It automatically generates a high-performance classmap, replacing expensive recursive autoloading with instant O(1) lookups.

`,
  header: {
    title: 'PHP Classmap Watcher',
    role: 'Open Source Author',
    meta: [
      { key: 'version', value: 'v1.0.0 (Open Source)' },
      { key: 'focus', value: 'Developer Experience (DX) & Build Automation' },
    ],
    liveLink: {
      label: 'View GitHub Repo',
      url: 'https://github.com/saurab1996/wp-classmap-watcher',
    },
  },
  visualSuggestion: {
    full: {
      url: '/images/blog/php-classmap-watcher.webp',
      alt: 'PHP Classmap Watcher CLI Interface',
    },
    thumbnail: {
      url: '/images/blog/php-classmap-watcher-thumbnail.webp',
      alt: 'PHP Classmap Watcher Thumbnail',
    },
  },
  summary: {
    mission: {
      heading: 'The Brief',
      body: 'In modern WordPress development using Composer, adding new classes often requires a manual `composer dump-autoload` to update the classmap. This project was built to eliminate that friction by watching the file system and automatically regenerating the autoloader, ensuring new PHP classes are instantly discoverable during the dev cycle.',
    },
    stats: {
      heading: 'Technical Impact',
      items: [
        {
          label: 'Workflow efficiency',
          value: 'Eliminates manual CLI commands during class creation',
        },
        {
          label: 'Speed',
          value: 'Sub-second classmap regeneration on file save',
        },
        {
          label: 'Compatibility',
          value: 'Supports PSR-4 and Classmap autoloading',
        },
        {
          label: 'Integration',
          value: 'Zero-config support for standard WP structures',
        },
      ],
    },
  },
  sections: [
    {
      id: 'the-problem',
      type: 'architecture',
      heading: 'Solving the Autoloader Friction',
      body: 'When building complex WordPress plugins, developers often prefer Classmap autoloading for performance. However, every new file addition breaks the runtime until the developer manually triggers a dump. This breaks the "flow state."',
      solution: {
        heading: 'Solution: Reactive File Watching',
        description:
          'I developed a lightweight watcher that monitors specific directories and intelligently triggers Composer commands only when structural changes are detected.',
        points: [
          {
            label: 'Selective Invalidation',
            detail:
              'Instead of watching all files, it specifically targets .php files containing class/interface/trait declarations.',
          },
          {
            label: 'Optimized CLI Execution',
            detail:
              'Wrapped Composer’s native dump-autoload into a non-blocking process to ensure the IDE remains responsive.',
          },
          {
            label: 'Cross-Platform',
            detail:
              'Ensured path handling works seamlessly across Windows (WAMP/Laragon) and Unix-based (Docker/Valet) environments.',
          },
        ],
      },
    },
    {
      id: 'technical-implementation',
      type: 'cards',
      heading: 'Key Technical Features',
      items: [
        {
          id: 'fs-events',
          heading: 'Event-Driven Architecture',
          subheading: 'Node.js / Chokidar Integration',
          problem:
            'Polling directories for changes is resource-intensive and slow.',
          action: 'Implemented native OS file-system events.',
          detail:
            'Utilized low-level FS events to trigger updates, ensuring the CPU usage remains near zero until an actual file change occurs.',
        },
        {
          id: 'composer-api',
          heading: 'Composer Deep Integration',
          subheading: 'Smart Autoloading',
          problem: 'Full dumps can be slow in massive vendor directories.',
          action: 'Configurable scope targeting.',
          detail:
            'Allowed developers to define specific namespaces or directories (like /src or /includes) to watch, preventing unnecessary overhead from the /vendor folder.',
        },
      ],
    },
    {
      id: 'team-lead-perspective',
      type: 'quote',
      heading: "Developer's Perspective",
      quote:
        'PHP Classmap Watcher was born out of personal frustration. By automating the most repetitive part of the PHP development workflow in WordPress, I was able to save hours of cumulative time across projects. It’s a small tool that makes a massive difference in maintaining developer momentum.',
    },
  ],
  techStack: [
    {
      category: 'Backend',
      items: [
        'PHP 8.x',
        'Composer Internal API',
        'Node.js Runtime',
        'Shell Scripting',
      ],
    },
    {
      category: 'DevOps',
      items: [
        'Native FS Watchers (Chokidar)',
        'Process Automation',
        'CLI Architecture',
        'Cross-Platform Path Handling',
      ],
    },
    {
      category: 'WordPress',
      items: [
        'Advanced Autoloading Strategy',
        'PSR-4 Implementation',
        'Modern Plugin Boilerplating',
        'Developer Experience (DX) Tooling',
      ],
    },
  ],
  cta: {
    heading: 'Interested in WordPress Workflow Automation?',
  },
};
