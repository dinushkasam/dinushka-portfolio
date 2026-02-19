/**
 * Type definitions for the portfolio application
 */

export enum ProjectType {
  Individual = 'Individual',
  Group = 'Group',
}

export interface Project {
  id: string;
  title: string;
  year: number;
  softwareUsed: string[];
  projectType: ProjectType;
  thumbnail?: string;
  images?: string[];
  videoUrl?: string;
  relatedProjects?: string[];
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
