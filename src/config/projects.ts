/**
 * Projects configuration
 */

import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 'miku-fan',
    title: 'Miku Fan',
    year: 2026,
    description: 'A fan website dedicated to Miku with interactive features and community engagement.',
    softwareUsed: ['React', 'TypeScript', 'Tailwind CSS'],
    projectType: 'Individual',
    images: [],
    videoUrl: '',
  },
  {
    id: 'unity-character',
    title: 'Unity Character',
    year: 2026,
    description: 'A 3D character model created in Blender and imported in Unity for game development.',
    softwareUsed: ['Unity', 'C#', 'Blender'],
    projectType: 'Group',
    images: [],
    videoUrl: '',
  },
  {
    id: 'project-3',
    title: 'Project 3',
    year: 2026,
    description: 'Your project description here.',
    softwareUsed: ['Your Tech Stack'],
    projectType: 'Individual',
    images: [],
    videoUrl: '',
  },
  {
    id: 'project-4',
    title: 'Project 4',
    year: 2026,
    description: 'Your project description here.',
    softwareUsed: ['Your Tech Stack'],
    projectType: 'Group',
    images: [],
    videoUrl: '',
  },
  {
    id: 'project-5',
    title: 'Project 5',
    year: 2026,
    description: 'Your project description here.',
    softwareUsed: ['Your Tech Stack'],
    projectType: 'Individual',
    images: [],
    videoUrl: '',
  },
  {
    id: 'project-6',
    title: 'Project 6',
    year: 2026,
    description: 'Your project description here.',
    softwareUsed: ['Your Tech Stack'],
    projectType: 'Group',
    images: [],
    videoUrl: '',
  },
];

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
