/**
 * Type definitions for the portfolio application
 */

export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  softwareUsed: string[];
  projectType: 'Individual' | 'Group';
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
