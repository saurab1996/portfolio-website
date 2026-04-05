import type { CountUpOptions } from '$lib/types/general.types';

export function countUp({
  from = 0,
  to,
  duration = 1800,
  steps = 60,
  onUpdate,
  onComplete,
}: CountUpOptions): () => void {
  const interval = duration / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += 1;
    const progress = current / steps;
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(from + eased * (to - from));

    onUpdate(value);

    if (current >= steps) {
      clearInterval(timer);
      onUpdate(to);
      onComplete?.();
    }
  }, interval);

  return () => clearInterval(timer);
}
