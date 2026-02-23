/**
 * API Configuration for Cloudflare R2
 */

import type { Project, TwoDProject } from '../types';

export const R2_ACCOUNT_ID = 'd4bd51c11efd0a01400acb82b568f1fe';
export const BASE_URL = `https://pub-37c984a390cf46e299cda313408bfe6a.r2.dev`; 

export interface ProjectIndex {
  '3d': string[];
  '2d': string[];
}

/**
 * Fetch the project index
 */
export async function fetchProjectIndex(): Promise<ProjectIndex> {
  const response = await fetch(`${BASE_URL}/index.json?t=${Date.now()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project index');
  }
  return response.json();
}

/**
 * Fetch metadata for a specific project
 */
export async function fetchProjectMetadata<T>(type: '3d' | '2d', id: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/${id}/config.json?t=${Date.now()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch metadata for project: ${id}`);
  }
  const data = await response.json();
  const project = data as any;
  
  // Set the id as the folder name from index.json
  project.id = id;
  
  // Transform relative paths to full URLs using the project id (folder name)
  if (project.thumbnail) {
    project.thumbnail = getAssetUrl(id, project.thumbnail);
  }
  
  if (project.sections && Array.isArray(project.sections)) {
    project.sections = project.sections.map((section: any) => {
      const updatedSection = { ...section };
      
      if (section.type === 'grid' && Array.isArray(section.src)) {
        updatedSection.src = section.src.map((path: string) => getAssetUrl(id, path));
      } else if (typeof section.src === 'string') {
        updatedSection.src = getAssetUrl(id, section.src);
      }

      if (section.thumbnail) {
        updatedSection.thumbnail = getAssetUrl(id, section.thumbnail);
      }
      
      return updatedSection;
    });
  }
  
  return data as T;
}

/**
 * Fetch all projects of a certain type
 */
export async function fetchAllProjects<T>(type: '3d' | '2d', ids: string[]): Promise<T[]> {
  const promises = ids.map(id => fetchProjectMetadata<T>(type, id));
  return Promise.all(promises);
}

/**
 * Helper to get the full URL for an asset
 */
export function getAssetUrl(projectId: string, assetPath: string): string {
  if (!assetPath) return '';
  if (assetPath.startsWith('http') || assetPath.startsWith('blob:') || assetPath.startsWith('data:')) return assetPath;
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return `${BASE_URL}/${projectId}/${cleanPath}`;
}
