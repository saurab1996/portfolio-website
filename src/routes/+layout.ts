import type { SEOMeta } from '$lib/types/seo.types';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'never';

export const load: LayoutLoad = () => {
  return { meta: undefined as Partial<SEOMeta> | undefined };
};
