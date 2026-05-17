import type { Project } from '$lib/types/project.types';
import { instaremProject } from '$lib/data/projects/instarem';
import { graphinaProject } from '$lib/data/projects/graphina';
import { kivicareProject } from '$lib/data/projects/kivicare';
import { wpClassmapWatcher } from '$lib/data/projects/wp-classmap-watcher';

export const projects: Project[] = [
  instaremProject,
  kivicareProject,
  wpClassmapWatcher,
  graphinaProject,
];
