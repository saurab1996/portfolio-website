import type { ThemeMode } from '$lib/types/general.types';

const applyTheme = (value: ThemeMode): void => {
  document.documentElement.classList.toggle('dark', value === 'dark');
  localStorage.setItem('theme', value);
};

export const toggleTheme = (current: ThemeMode): ThemeMode => {
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
};
