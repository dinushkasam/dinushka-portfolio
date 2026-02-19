/**
 * Navigation Component
 * Reusable navigation bar component
 */

export interface NavigationProps {
  isProjectPage?: boolean;
}

export const Navigation = (props: NavigationProps = {}): string => {
  const links = props.isProjectPage 
    ? `<li><a href="/#work" class="nav-link text-sm sm:text-base">Work</a></li>
       <li><a href="/#contact" class="nav-link text-sm sm:text-base">Contact</a></li>`
    : `<li><a href="#work" class="nav-link text-sm sm:text-base">Work</a></li>
       <li><a href="#contact" class="nav-link text-sm sm:text-base">Contact</a></li>`;

  return `
    <nav class="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-gray-800 z-50">
      <div class="section-container">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Navigation Links -->
          <ul class="flex gap-4 sm:gap-8">
            ${links}
          </ul>
          
          <!-- Logo/Name - Centered -->
          <a href="/" class="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-bold italic text-white">
            Dinushka Samaranayake
          </a>
          
          <!-- Logo - Right -->
          <a href="/" class="flex-shrink-0">
            <img src="/src/media/logo.jpeg" alt="DS Logo" class="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
          </a>
        </div>
      </div>
    </nav>
  `;
};
