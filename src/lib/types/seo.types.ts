import type { WithContext, Thing } from 'schema-dts';
export type SEOMeta = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
};

export type PageSchema = WithContext<Thing>;
