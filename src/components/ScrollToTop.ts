/**
 * Scroll To Top Button Component
 */

export const ScrollToTop = (): string => {
  return `
    <button id="scroll-to-top" class="fixed bottom-8 right-8 w-14 h-14 bg-gray-700/80 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 invisible z-50 shadow-lg" aria-label="Scroll to top">
      <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  `;
};
