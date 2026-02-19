/**
 * 2D Design Section Component
 * Displays 2D artwork with a grid layout
 */

export const TwoDDesignSection = (): string => {
  return `
    <section id="design-2d" class="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div class="section-container">
        <div class="mb-12 sm:mb-16 md:mb-20">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            2D Design
          </h2>
          <p class="text-gray-400 text-base sm:text-lg md:text-xl">
            Illustrations, concept art, and graphic design work.
          </p>
        </div>

        <!-- 2D Art Grid - Placeholder for future content -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="bg-gray-900/50 rounded-xl p-8 text-center text-gray-500">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  `;
};
