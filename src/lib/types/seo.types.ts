import type { WithContext, Thing } from 'schema-dts';
export type SEOMeta = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
};

export type PageSchema = WithContext<Thing>;
