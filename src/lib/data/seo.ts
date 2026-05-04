import { SITE_DESC, SITE_NAME } from '$lib/config';
import type { SEOMeta } from '$lib/types/seo.types';

export const DEFAULT_OG_IMAGE = '/images/favicon.svg';
export const defaultMeta: SEOMeta = {
  title: SITE_NAME,
  description: SITE_DESC,
};

export const pageMeta: Record<string, SEOMeta> = {
  '/': {
    title:
      'Saurab Gupta — Senior Full-Stack Developer | Scalable WordPress & SaaS Systems',
    description: SITE_DESC,
    keywords:
      'full-stack developer, scalable wordpress, saas architecture, react, node.js, web performance, core web vitals',
  },

  '/about': {
    title: 'About Saurab Gupta — Full-Stack Developer & System Architect',
    description:
      '5+ years building scalable WordPress, SaaS platforms, and high-performance web applications across fintech and healthcare.',
    keywords:
      'about saurab gupta, wordpress developer, saas developer, system architecture, web performance',
  },

  '/projects': {
    title: 'Projects — Scalable Systems, SaaS & WordPress Architecture',
    description:
      'Real-world projects including high-scale SEO systems, SaaS platforms, and performance-optimized WordPress architectures.',
    keywords:
      'portfolio projects, scalable systems, wordpress architecture, saas projects, programmatic seo',
  },

  '/blogs': {
    title: 'Engineering Blog — Performance, Architecture & Scale',
    description:
      'Insights on Core Web Vitals, scalable architecture, WordPress optimization, and full-stack engineering.',
    keywords:
      'engineering blog, web performance, core web vitals, wordpress optimization, system design',
  },

  '/contact': {
    title: 'Contact Saurab Gupta — Let’s Build Scalable Systems',
    description:
      'Open to full-stack roles, backend positions, team lead positions, and freelance projects focused on performance and scalable architecture.',
    keywords:
      'hire full-stack developer, wordpress expert, saas developer, contact saurab gupta',
  },
};
