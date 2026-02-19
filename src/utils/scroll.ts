/**
 * Scroll animations using Intersection Observer API
 */

export const initializeScrollAnimations = (): void => {
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-5');
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll(
    '.project-card, .skill-item, .service-card'
  );

  animatableElements.forEach((element) => {
    element.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-600');
    observer.observe(element);
  });
};

/**
 * Get scroll progress percentage
 */
export const getScrollProgress = (): number => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return (scrollTop / (documentHeight - windowHeight)) * 100;
};

/**
 * Check if element is in viewport
 */
export const isElementInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};
