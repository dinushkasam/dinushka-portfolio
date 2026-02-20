/**
 * 2D Design Section Component
 * Displays 2D artwork with a grid layout - simplified cards with title and thumbnail
 */

import { twoDProjects, type TwoDProject } from '../config/twoDProjects';

const renderTwoDCard = (project: TwoDProject): string => {
  return `
    <a href="2d-project.html?id=${project.id}" class="project-card group block">
      <div class="h-56 sm:h-64 md:h-72 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center border-b border-gray-700 group-hover:border-gray-600 transition-colors overflow-hidden rounded-t-xl">
        <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-gray-600 text-sm\\'>Image coming soon</span>';">
      </div>
      <div class="p-4 sm:p-6 bg-gray-800/30 rounded-b-xl">
        <h3 class="text-lg sm:text-xl font-bold text-white text-center">${project.title}</h3>
      </div>
    </a>
  `;
};

export const TwoDDesignSection = (): string => {
  const projectCards = twoDProjects.map(renderTwoDCard).join('');

  return `
    <section id="design-2d" class="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div class="section-container">
        <div class="mb-12 sm:mb-16 md:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            2D Design
          </h2>
          <p class="text-gray-400 text-base sm:text-lg md:text-xl">
            Illustrations, concept art, and drawings.
          </p>
        </div>

        <!-- 2D Art Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          ${projectCards}
        </div>
      </div>
    </section>
  `;
};
