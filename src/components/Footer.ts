/**
 * Footer Component
 * Reusable footer component
 */

export interface FooterProps {
  isProjectPage?: boolean;
}

export const Footer = (props: FooterProps = {}): HTMLElement => {
  const footer = document.createElement('footer');
  footer.className = 'border-t border-gray-800 bg-slate-900/50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8';

  if (props.isProjectPage) {
    footer.innerHTML = `
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p class="text-gray-500 text-sm sm:text-base text-center sm:text-left">
            &copy; 2026 Dinushka Samaranayake. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="/#work" class="text-gray-500 hover:text-blue-400 transition-colors text-sm">Back to Work</a>
            <a href="/#contact" class="text-gray-500 hover:text-blue-400 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    `;
  } else {
    footer.innerHTML = `
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p class="text-gray-500 text-sm sm:text-base text-center sm:text-left">
            &copy; 2026 Dinushka Samaranayake. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors text-sm">Privacy</a>
            <a href="#" class="text-gray-500 hover:text-blue-400 transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    `;
  }

  return footer;
};
