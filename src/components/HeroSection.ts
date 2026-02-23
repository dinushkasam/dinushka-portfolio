/**
 * Hero Section Component
 */

export const HeroSection = (): string => {
  return `
    <section class="pt-16 sm:pt-20 md:pt-24 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-section">
      <!-- Background gradient effect -->
      <div class="absolute inset-0 -z-20 h-full w-full bg-slate-900 opacity-80"></div>
      <div class="absolute inset-0 -z-20 h-full w-full bg-gradient-to-b from-slate-800 to-slate-900"></div>

      <!-- Background Slideshow -->
      <div id="hero-bg" class="absolute inset-0 w-full h-full pointer-events-none z-0"></div>

      <div class="text-center max-w-4xl mx-auto relative z-10">
        <!-- Main heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white">
          Hi, I'm Dinushka!
        </h1>

        <!-- Subtitle -->
        <p class="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 font-light max-w-2xl mx-auto">
          Welcome to my portfolio
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer text-gray-500 hover:text-blue-400 transition-colors z-10">
        <svg class="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style>
        #hero-bg img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s;
          z-index: 0;
        }
        #hero-bg img.active {
          opacity: 0.15;
        }
        #hero-bg img.inactive {
          opacity: 0;
        }
      </style>

    </section>
  `;
};
