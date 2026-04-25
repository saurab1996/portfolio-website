// ─── Primitives ───────────────────────────────────────────────────────────────

export interface LabelDetail {
  label: string;
  detail: string;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface LiveLink {
  label: string;
  url: string;
}

export interface MetaItem {
  key: string;
  value: string;
}

// ─── Header ───────────────────────────────────────────────────────────────────

export interface ProjectHeader {
  title: string;
  role: string;
  meta: MetaItem[];
  liveLink: LiveLink | null;
  visualSuggestion: string | null;
}

// ─── Summary ──────────────────────────────────────────────────────────────────

export interface MissionBlock {
  heading: string;
  body: string;
}

export interface StatsBlock {
  heading: string;
  items: LabelValue[];
}

export interface ProjectSummary {
  mission: MissionBlock;
  stats: StatsBlock | null;
}

// ─── Sections ─────────────────────────────────────────────────────────────────

interface BaseSection {
  id: string;
  heading: string;
}

// --- architecture ---
export interface ArchitectureSolution {
  heading: string;
  description: string;
  points: LabelDetail[];
}

export interface ArchitectureSection extends BaseSection {
  type: 'architecture';
  body: string;
  solution: ArchitectureSolution;
}

// --- cards ---
export interface CardItem {
  id: string;
  heading: string;
  subheading: string;
  problem: string;
  action: string;
  detail: string;
}

export interface CardsSection extends BaseSection {
  type: 'cards';
  items: CardItem[];
}

// --- grid ---
export interface GridItem {
  name: string;
  description: string;
}

export interface GridSection extends BaseSection {
  type: 'grid';
  body: string;
  items: GridItem[];
}

// --- quote ---
export interface QuoteSection extends BaseSection {
  type: 'quote';
  quote: string;
}

// --- pillars ---
export interface PillarItem {
  id: string;
  number: number;
  heading: string;
  body: string;
  points: LabelDetail[];
}

export interface PillarsSection extends BaseSection {
  type: 'pillars';
  items: PillarItem[];
}

// --- leadership ---
export interface LeadershipItem {
  team: string;
  contribution: string;
}

export interface LeadershipSection extends BaseSection {
  type: 'leadership';
  body: string;
  items: LeadershipItem[];
}

// --- union ---
export type ProjectSection =
  | ArchitectureSection
  | CardsSection
  | GridSection
  | QuoteSection
  | PillarsSection
  | LeadershipSection;

export type SectionType = ProjectSection['type'];

// ─── Tech Stack ───────────────────────────────────────────────────────────────

export interface TechStack {
  category: string | null;
  items: string[];
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

export interface CTA {
  heading: string;
  buttonLabel: string;
}

// ─── Project (unified) ────────────────────────────────────────────────────────

export interface Project {
  id: string;
  header: ProjectHeader;
  summary: ProjectSummary;
  sections: ProjectSection[];
  techStack: TechStack[];
  cta: CTA | null;
}

// ─── Section Type Guards ──────────────────────────────────────────────────────

export const isArchitectureSection = (
  s: ProjectSection,
): s is ArchitectureSection => s.type === 'architecture';

export const isCardsSection = (s: ProjectSection): s is CardsSection =>
  s.type === 'cards';

export const isGridSection = (s: ProjectSection): s is GridSection =>
  s.type === 'grid';

export const isQuoteSection = (s: ProjectSection): s is QuoteSection =>
  s.type === 'quote';

export const isPillarsSection = (s: ProjectSection): s is PillarsSection =>
  s.type === 'pillars';

export const isLeadershipSection = (
  s: ProjectSection,
): s is LeadershipSection => s.type === 'leadership';
