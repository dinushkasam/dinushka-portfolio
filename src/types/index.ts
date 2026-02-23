/**
 * Type definitions for the portfolio application
 */

export enum ProjectType {
  Individual = 'Individual',
  Group = 'Group',
}

export interface ProjectSection {
  type: 'image' | 'video' | 'grid';
  src: string | string[]; // src is string for image/video, string[] for grid
  thumbnail?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export interface Project {
  id: string; // The folder name from index.json
  name: string;
  date: string;
  description?: string;
  thumbnail: string;
  softwareUsed?: string[];
  projectType?: ProjectType;
  sections: ProjectSection[];
}

export interface TwoDProject {
  id: string; // The folder name from index.json
  name: string;
  date?: string;
  description?: string;
  thumbnail: string;
  sections: ProjectSection[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // SVG icon name
}
