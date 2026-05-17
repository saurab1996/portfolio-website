import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import { fileURLToPath } from 'url';
import path from 'node:path'; // Built-in, no install needed
import tailwind from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import compressor from 'astro-compressor';

const mode = process.env.NODE_ENV || 'development';

// load ALL env (no prefix filter)
const env = loadEnv(mode, process.cwd(), '');

// To replicate SvelteKit's $lib behavior perfectly:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  trailingSlash: 'never',
  outDir: './build',
  integrations: [
    svelte(),
    compressor({
      gzip: true,
      brotli: false,
      zstd: false,
      fileExtensions: ['.html', '.json'],
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    assets: 'assets',
    // Replacing paths.assets for CDN support
    assetsPrefix:
      env.USE_CDN_ASSETS === 'true' ? env.PUBLIC_CDN_URL : undefined,
  },
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        $lib: path.resolve(__dirname, './src/lib'),
        $layouts: path.resolve(__dirname, './src/layouts'),
      },
    },
    build: {
      cssCodeSplit: false,
    },
    environments: {
      client: {
        build: {
          rollupOptions: {
            output: {
              manualChunks: () => 'app',
              // path names relative to `outDir`
              entryFileNames: 'js/[name]-[hash].js',
              chunkFileNames: 'js/chunks/[name]-[hash].js',
              assetFileNames: 'static/[name]-[hash][extname]',
            },
          },
        },
      },
    },
  },
});
