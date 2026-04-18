import { SITE_DESC, SITE_NAME } from '$lib/config';
import type { SEOMeta } from '$lib/types/seo.types';

export const defaultMeta: SEOMeta = {
  title: SITE_NAME,
  description: SITE_DESC,
  ogImage: '/og-default.png',
};

export const pageMeta: Record<string, SEOMeta> = {
  '/': {
    title: 'Saurab Gupta — Full-Stack Developer & Team Lead',
    description: SITE_DESC,
    keywords:
      'full-stack developer, react, next.js, vue, node.js, team lead, web performance, core web vitals',
    ogImage: '/og-home.png',
  },
  '/about': {
    title: 'About — Saurab Gupta',
    description:
      '5+ years of full-stack experience across fintech, healthcare, and media. Specializing in performant frontends, robust APIs, and CI/CD-driven delivery.',
    keywords:
      'about saurab gupta, full-stack developer, team lead, instarem, web performance',
  },
  '/projects': {
    title: 'Projects — Saurab Gupta',
    description:
      'Production projects including programmatic SEO at scale, eCommerce platforms, EHR systems, and video streaming products.',
    keywords:
      'projects, portfolio, react, next.js, programmatic seo, instarem, kivicare, streamit',
  },
  '/blog': {
    title: 'Blog — Saurab Gupta',
    description:
      'Writing on frontend performance, Core Web Vitals, scalable architecture, and full-stack engineering.',
    keywords:
      'blog, core web vitals, web performance, react, next.js, full-stack engineering',
  },
  '/contact': {
    title: 'Contact — Saurab Gupta',
    description:
      "Open to full-stack roles, team lead positions, and freelance projects. Let's build something fast and scalable.",
    keywords: 'contact, hire full-stack developer, saurab gupta, freelance',
  },
};
