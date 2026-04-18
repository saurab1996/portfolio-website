export interface Skill {
  readonly name: string;
  readonly icon?: string;
}

export type CountUpOptions = {
  from?: number;
  to: number;
  duration?: number;
  steps?: number;
  onUpdate: (value: number) => void;
  onComplete?: () => void;
};

export type ParsedStat = {
  prefix: string;
  numeric: number | null;
  suffix: string;
};

export type ThemeMode = 'light' | 'dark';
