import { onMount } from 'svelte';

export function useInView(
  getEl: () => HTMLElement | undefined,
  callback: () => (() => void) | void,
  options: IntersectionObserverInit = { threshold: 0.3 },
) {
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      observer.disconnect();
      callback();
    }, options);

    const el = getEl();
    if (el) observer.observe(el);

    return () => observer.disconnect();
  });
}
