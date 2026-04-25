import type { PageSchema } from '$lib/types/seo.types';

import {
  SITE_URL,
  SITE_NAME,
  LINKEDIN_ADDRESS,
  GITHUB_ADDRESS,
  CDN_URL,
  SITE_DESC,
} from '$lib/config';

export const defaultSchema: PageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESC,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    name: SITE_NAME,
    jobTitle: 'Full Stack Developer',
    url: SITE_URL,
    sameAs: [LINKEDIN_ADDRESS, GITHUB_ADDRESS],
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${CDN_URL}/images/favicon.svg`,
    },
  },
};
export const pageSchema: Record<string, PageSchema> = {
  '/': defaultSchema,

  '/about': {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `About — ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: 'Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'NeoSOFT',
      },
    },
  },

  '/projects': {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Projects — ${SITE_NAME}`,
    url: `${SITE_URL}/projects`,
    mainEntity: {
      '@type': 'ItemList',
      name: 'Featured Projects',
    },
  },

  '/blog': {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Blog — ${SITE_NAME}`,
    url: `${SITE_URL}/blog`,
    author: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
  },

  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact — ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': 'Person',
      name: SITE_NAME,
      url: SITE_URL,
    },
  },
};
