/**
 * Projects configuration and utilities
 */

import type { Project } from '../types/index';
import { projects } from './projectsData';

// Re-export projects for convenience
export { projects };

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getSocialLinks = () => [
  {
    name: 'LinkedIn',
    url: 'https://lk.linkedin.com/in/dinushkasam',
    icon: 'linkedin',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@dinushkasam',
    icon: 'youtube',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/dinushkasam',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:dinushkasam@gmail.com',
    icon: 'email',
  },
];

