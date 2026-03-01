/// <reference types="vite/client" />
/**
 * Navigation Component
 * Reusable navigation bar component
 */

export interface NavigationProps {
  isProjectPage?: boolean;
}

export const Navigation = (props: NavigationProps = {}): string => {
  const baseUrl = import.meta.env.BASE_URL;
  
  const links = props.isProjectPage 
    ? `<li><a href="${baseUrl}#work" class="nav-link text-sm sm:text-base">3D Design</a></li>
       <li><a href="${baseUrl}#design-2d" class="nav-link text-sm sm:text-base">2D Design</a></li>
       <li><a href="${baseUrl}#contact" class="nav-link text-sm sm:text-base">Contact</a></li>`
    : `<li><a href="#work" class="nav-link text-sm sm:text-base">3D Design</a></li>
       <li><a href="#design-2d" class="nav-link text-sm sm:text-base">2D Design</a></li>
       <li><a href="#contact" class="nav-link text-sm sm:text-base">Contact</a></li>`;

  return `
    <nav class="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div class="section-container">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Navigation Links -->
          <ul class="flex gap-4 sm:gap-8">
            ${links}
          </ul>
          
          <!-- Logo/Name - Centered (hidden on small screens) -->
          <a href="${baseUrl}" class="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-bold italic text-white hidden lg:block">
            Dinushka Samaranayake
          </a>
          
          <!-- Logo - Right -->
          <a href="${baseUrl}" class="flex-shrink-0">
            <img src="${baseUrl}logo.jpeg" alt="DS Logo" class="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
          </a>
        </div>
      </div>
    </nav>
  `;
};
