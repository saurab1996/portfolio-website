import { CDN_URL } from '$lib/config';
import { getHighlighter } from '$lib/utils/highlighter';
import { PLACEHOLDER_IMG } from '$lib/data/cdn-assets';
import type { ImageItem, ImageSize } from '$lib/types/general.types';

export const cdnImgUrl = (img: string): string => {
  return `${CDN_URL}${img}`;
};

export const defaultImg = (): string => {
  return cdnImgUrl(PLACEHOLDER_IMG);
};

export const projectPageUrl = (projectSlug: string): string => {
  return `projects/${projectSlug}`;
};

export const blogPageUrl = (projectSlug: string): string => {
  return `/blogs/${projectSlug}`;
};

export const generateImageItem = <T extends ImageSize>(
  img: string,
  alt: string,
  type: T,
): ImageItem[T] => {
  const sizes: Record<ImageSize, { width: number; height: number }> = {
    full: { width: 1024, height: 572 },
    thumbnail: { width: 768, height: 429 },
  };
  return {
    url: img,
    alt,
    width: sizes[type].width,
    height: sizes[type].height,
  };
};

export const highlightCode = async (code: string, lang: string) => {
  const shiki = await getHighlighter();
  return shiki.codeToHtml(code, { lang, theme: 'css-variables' });
};
