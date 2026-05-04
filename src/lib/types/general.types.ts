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

export interface currentPathType {
  currentPath: string;
  params?: Record<string, string | undefined>;
}

export type SkillCategory =
  | 'Backend'
  | 'Frontend'
  | 'DevOps'
  | 'WordPress'
  | 'Version Control'
  | 'SEO & Analytics'
  | 'Workflow & Collaboration';

export type ImageSize = 'full' | 'thumbnail';

export type ImageItem = {
  [key in ImageSize]?: {
    url: string;
    alt: string;
    height: number;
    width: number;
  };
};

export interface TocHeading {
  id: string;
  text: string;
  depth: number;
}
