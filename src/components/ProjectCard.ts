/**
 * Project Card Component
 * Reusable project card for displaying projects
 */

import type { Project } from '../types/index';

export const ProjectCard = (project: Project): HTMLElement => {
  const card = document.createElement('a');
  card.href = `project.html?id=${project.id}`;
  card.className = 'project-card group block';

  const projectTypeColor = project.projectType === 'Individual' 
    ? 'bg-blue-900/50 text-blue-300 border-blue-700/50'
    : 'bg-purple-900/50 text-purple-300 border-purple-700/50';

  card.innerHTML = `
    <div class="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center border-b border-gray-700 group-hover:border-gray-600 transition-colors p-4">
      <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-center">${project.title}</h3>
      <p class="text-gray-400 text-base sm:text-lg mb-4">${project.year}</p>
    </div>
    <div class="p-4 sm:p-6 bg-gray-800/30">
      <div class="mb-3 sm:mb-4">
        <p class="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">Software Used</p>
        <p class="text-sm sm:text-base text-gray-300">${project.softwareUsed.join(', ')}</p>
      </div>
      <div>
        <p class="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-2">Project Type</p>
        <span class="inline-block px-3 py-1 ${projectTypeColor} text-xs sm:text-sm rounded-full border">${project.projectType}</span>
      </div>
    </div>
  `;

  return card;
};
