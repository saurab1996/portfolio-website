import type { PageLoad } from './$types';
import { pageMeta } from '$lib/data/seo';

export const load: PageLoad = () => {
  return { meta: pageMeta['/'] };
};
