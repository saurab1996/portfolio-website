import { createHighlighter, type Highlighter } from 'shiki';
import { createCssVariablesTheme } from 'shiki/core';

const customTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
});

// A private variable scoped to this module to store the promise
let highlighterPromise: Promise<Highlighter> | null = null;

export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      langs: [
        'typescript',
        'javascript',
        'tsx',
        'jsx',
        'html',
        'css',
        'json',
        'bash',
        'php',
        'astro',
        'nginx',
        'sql',
      ],
      themes: [customTheme],
    });
  }
  return highlighterPromise;
}
