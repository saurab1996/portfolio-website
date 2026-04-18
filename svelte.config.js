import adapter from '@sveltejs/adapter-static';
import { relative, sep } from 'node:path';
import { loadEnv } from 'vite';

const mode = process.env.NODE_ENV || 'development';

// load ALL env (no prefix filter)
const env = loadEnv(mode, process.cwd(), '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // defaults to rune mode for the project, except for `node_modules`. Can be removed in svelte 6.
    runes: ({ filename }) => {
      const relativePath = relative(import.meta.dirname, filename);
      const pathSegments = relativePath.toLowerCase().split(sep);
      const isExternalLibrary = pathSegments.includes('node_modules');

      return isExternalLibrary ? undefined : true;
    },
  },
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      pages: 'build/html', // output dir
      assets: 'build',
      fallback: undefined,
      precompress: true,
    }),
    output: {
      bundleStrategy: 'single',
    },
    paths: {
      assets: env.USE_CDN_ASSETS === 'true' ? env.PUBLIC_CDN_URL : undefined,
    },
    appDir: 'assets',
  },
};

export default config;
