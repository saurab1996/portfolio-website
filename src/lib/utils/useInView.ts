// $lib/utils/useInView.ts
export function useInView(
  el: HTMLElement | null,
  callback: () => (() => void) | void,
  options: IntersectionObserverInit = { threshold: 0.3 },
): () => void {
  if (!el) return () => {};

  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    observer.disconnect();
    const cleanup = callback();
    return cleanup;
  }, options);

  observer.observe(el);

  return () => observer.disconnect();
}
