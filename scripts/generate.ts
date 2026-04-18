// scripts/generate.js
import {
  mkdirSync,
  writeFileSync,
  existsSync,
  readFileSync,
  appendFileSync,
} from 'fs';
import { join } from 'path';

const [, , command, name, type = 'components'] = process.argv;

if (!command || !name) {
  console.log(`
Usage:
  node scripts/generate.js component <ComponentName> [ui|forms|components]
  node scripts/generate.js page <page-name>
  node scripts/generate.js page <parent>/<page-name>
  node scripts/generate.js page <parent>/[slug]
  node scripts/generate.js page <parent>/[...slug]
  `);
  process.exit(1);
}

function toKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function generateComponent(name, type) {
  const fileName = toKebab(name);
  const folder = type === 'components' ? `${fileName}` : `${type}/${fileName}`;
  const base = `src/lib/components/${folder}`;

  if (existsSync(base)) {
    console.error(`❌ ${base} already exists`);
    process.exit(1);
  }

  mkdirSync(base, { recursive: true });

  // 1. Create component
  writeFileSync(
    join(base, `${fileName}.svelte`),
    `<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    class?: string;
    children?: Snippet;
  }

  const { class: className = '', children }: Props = $props();
</script>

<div class={className}>
  {@render children?.()}
</div>
`,
  );

  // 2. Barrel file path (ui/index.ts, forms/index.ts etc)
  const barrelPath = `src/lib/components/${type}/index.ts`;

  const exportLine = `export { default as ${name} } from '$libs/components/${fileName}/${fileName}.svelte';\n`;

  // 3. Create or update barrel
  if (!existsSync(barrelPath)) {
    writeFileSync(barrelPath, exportLine);
  } else {
    const content = readFileSync(barrelPath, 'utf-8');

    // prevent duplicate export
    if (!content.includes(exportLine)) {
      appendFileSync(barrelPath, exportLine);
    }
  }

  console.log(`✅ Component created: ${base}`);
  console.log(`📦 Exported in: ${barrelPath}`);
}

function generatePage(route) {
  const segments = route.split('/');
  const last = segments[segments.length - 1];

  // detect dynamic segments
  const isDynamic = last.startsWith('[') && last.endsWith(']');
  const isCatchAll = isDynamic && last.startsWith('[...');

  const base = `src/routes/${route}`;

  if (existsSync(base)) {
    console.error(`❌ ${base} already exists`);
    process.exit(1);
  }

  mkdirSync(base, { recursive: true });

  // +page.svelte
  const paramName = isDynamic
    ? last.replace('[', '').replace(']', '').replace('...', '')
    : null;

  const scriptContent = isDynamic
    ? `  import { page } from '$app/stores';
  const ${paramName} = $derived($page.params.${paramName});`
    : `  // component logic`;

  const htmlContent = isDynamic
    ? isCatchAll
      ? `<p>Catch-all: {${paramName}}</p>`
      : `<p>Param: {${paramName}}</p>`
    : `<p>${last} page</p>`;

  writeFileSync(
    join(base, '+page.svelte'),
    `<script lang="ts">
${scriptContent}
</script>

<div>
  ${htmlContent}
</div>
`,
  );

  // +page.ts (load function)
  const loadContent = isDynamic
    ? `import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  return {
    ${paramName}: params.${paramName},
  };
};
`
    : `import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {};
};
`;

  writeFileSync(join(base, '+page.ts'), loadContent);

  // +layout.svelte only for parent (non-dynamic) segments with children
  if (segments.length === 1 && !isDynamic) {
    writeFileSync(
      join(base, '+layout.svelte'),
      `<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<div>
  {@render children()}
</div>
`,
    );
    console.log(`   +layout.svelte`);
  }

  console.log(`✅ Page created: ${base}/`);
  console.log(`   +page.svelte`);
  console.log(`   +page.ts`);
}

// router
if (command === 'component') {
  generateComponent(name, type);
} else if (command === 'page') {
  generatePage(name);
} else {
  console.error(`❌ Unknown command: ${command}. Use 'component' or 'page'`);
  process.exit(1);
}
