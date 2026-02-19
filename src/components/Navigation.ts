/**
 * Navigation Component
 * Reusable navigation bar component
 */

export interface NavigationProps {
  isProjectPage?: boolean;
}

export const Navigation = (props: NavigationProps = {}): HTMLElement => {
  const nav = document.createElement('nav');
  nav.className = 'fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-gray-800 z-50';

  if (props.isProjectPage) {
    nav.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <a href="/" class="inline-flex items-center text-gray-300 hover:text-blue-400 font-semibold text-sm sm:text-base transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back
          </a>
          <a href="/" class="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            DS
          </a>
        </div>
      </div>
    `;
  } else {
    nav.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <div class="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            DS
          </div>
          
          <ul class="flex gap-4 sm:gap-8">
            <li><a href="#work" class="nav-link text-sm sm:text-base">Work</a></li>
            <li><a href="#contact" class="nav-link text-sm sm:text-base">Contact</a></li>
          </ul>
        </div>
      </div>
    `;
  }

  return nav;
};
