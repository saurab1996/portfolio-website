import type { TocHeading } from '$lib/types/general.types';
import { parse } from 'node-html-parser';
import { highlightCode } from '$lib/utils/helpers';
export const parseBlogHtml = async (
  content: string,
): Promise<{
  headings: TocHeading[];
  processedContent: string;
}> => {
  const root = parse(content ?? '');

  // 1. Process Headings for TOC
  root.querySelectorAll('h2, h3').forEach((el) => {
    if (!el.getAttribute('id')) {
      const id = el.text
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
      el.setAttribute('id', id);
    }
  });

  const preElements = root.querySelectorAll('.wp-block-code');

  for (const preEl of preElements) {
    // 2. Find the <code> tag directly inside this specific <pre>
    const codeEl = preEl.firstChild;
    if (!codeEl) continue;

    // Ensure there's a valid parent node to replace
    if (!preEl.parentNode) continue;

    // Extract the language
    const className = preEl.getAttribute('class') || '';
    const langMatch = className.match(/language-(\w+)/);
    const lang = langMatch ? langMatch[1] : 'text';

    // Get the raw code
    let rawCode = codeEl.text;
    rawCode = rawCode.replace(/<\/?code[^>]*>/gi, '');

    try {
      // Generate the highlighted HTML using Shiki
      const highlightedHtml = await highlightCode(rawCode, lang);

      const placeholder = `<component name="CodeBlock" data-lang="${lang}" data-code="${encodeURIComponent(highlightedHtml)}"></component>`;

      const tempNode = parse(placeholder);

      // Replace the entire <pre> element with the Shiki HTML
      preEl.parentNode.exchangeChild(preEl, tempNode);
    } catch (err) {
      console.error(`Failed to highlight code for language "${lang}":`, err);
    }
  }

  return {
    headings: root.querySelectorAll('h2, h3').map((el) => ({
      id: el.getAttribute('id')!,
      text: el.text.trim(),
      depth: parseInt(el.tagName[1]),
    })),
    processedContent: root.toString(),
  };
};
