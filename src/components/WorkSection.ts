/**
 * Work Section Component
 * Renders project cards dynamically from config
 */

import { projects } from '../config/projects';
import type { Project } from '../types/index';

const renderProjectCard = (project: Project): string => {
  const projectTypeColor = project.projectType === 'Individual' 
    ? 'bg-blue-900/50 text-blue-300 border-blue-700/50'
    : 'bg-purple-900/50 text-purple-300 border-purple-700/50';

  return `
    <a href="project.html?id=${project.id}" class="project-card group block">
      <div class="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-gray-700 group-hover:border-gray-600 transition-colors p-4">
        <!-- Thumbnail placeholder - replace with actual image -->
        <span class="text-gray-600 text-sm">Thumbnail</span>
      </div>
      <div class="p-4 sm:p-6 bg-gray-800/30">
        <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">${project.title}</h3>
        <p class="text-gray-400 text-sm sm:text-base mb-4">${project.year}</p>
        <div class="mb-3 sm:mb-4">
          <p class="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">Software Used</p>
          <p class="text-sm sm:text-base text-gray-300">${project.softwareUsed.join(', ')}</p>
        </div>
        <div>
          <p class="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">Project Type</p>
          <span class="inline-block px-3 py-1 ${projectTypeColor} text-xs sm:text-sm rounded-full border">${project.projectType}</span>
        </div>
      </div>
    </a>
  `;
};

export const WorkSection = (): string => {
  const projectCards = projects.map(renderProjectCard).join('');

  return `
    <section id="work" class="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div class="section-container">
        <div class="mb-12 sm:mb-16 md:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Featured Work
          </h2>
          <p class="text-gray-400 text-base sm:text-lg md:text-xl">
            Projects showcasing my passion for 3D modelling, game development, and design.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          ${projectCards}
        </div>
      </div>
    </section>
  `;
};
