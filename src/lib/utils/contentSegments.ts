import { CodeBlock } from '$lib/components/data-display';
import { Button } from '$lib/components/ui';

// lib/content-segments.ts
type HtmlSegment = { type: 'html'; content: string };
type ComponentSegment = {
  type: 'component';
  name: string;
  props: Record<string, unknown>;
};
export type Segment = HtmlSegment | ComponentSegment;

// parse all data-* attributes off a tag into a plain object
const parseDataAttrs = (raw: string): Record<string, string> => {
  const attrs: Record<string, string> = {};
  const attrRegex = /data-([\w-]+)="([^"]*)"/g;
  let m: RegExpExecArray | null;
  while ((m = attrRegex.exec(raw)) !== null) {
    // convert data-foo-bar → fooBar
    const key = m[1].replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    attrs[key] = decodeURIComponent(m[2]);
  }
  return attrs;
};

export const parseSegments = (html: string): Segment[] => {
  const segments: Segment[] = [];
  const regex = /<component\s+name="([^"]+)"([^>]*)(?:\/>|><\/component>)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'html',
        content: html.slice(lastIndex, match.index),
      });
    }

    segments.push({
      type: 'component',
      name: match[1],
      props: parseDataAttrs(match[2]),
    });

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < html.length) {
    segments.push({ type: 'html', content: html.slice(lastIndex) });
  }

  return segments;
};

export const componentMap = { Button, CodeBlock } as const;
export type ComponentName = keyof typeof componentMap;

// extract props from Astro, React, Svelte, or any component shape
type InferProps<T> = T extends (props: infer P) => unknown
  ? P // Astro / function component
  : T extends new (props: infer P) => unknown
    ? P // class component
    : T extends { new (props: infer P, ...a: any[]): unknown }
      ? P // React (2-arg constructor)
      : never;

export type ComponentPropsMap = {
  [K in ComponentName]: InferProps<(typeof componentMap)[K]>;
};
