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

const SCROLL_POSITION_KEY = 'portfolio_scroll_position';

/**
 * Save current scroll position to sessionStorage
 */
export const saveScrollPosition = (): void => {
  sessionStorage.setItem(SCROLL_POSITION_KEY, String(window.scrollY));
};

/**
 * Restore scroll position from sessionStorage
 * @returns true if position was restored, false otherwise
 */
export const restoreScrollPosition = (): boolean => {
  const savedPosition = sessionStorage.getItem(SCROLL_POSITION_KEY);
  if (savedPosition !== null) {
    const position = parseInt(savedPosition, 10);
    if (!isNaN(position)) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, position);
      });
      sessionStorage.removeItem(SCROLL_POSITION_KEY);
      return true;
    }
  }
  return false;
};

/**
 * Initialize scroll position preservation for project card links
 */
export const initializeScrollPositionPreservation = (): void => {
  // Save scroll position when clicking on project cards
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      saveScrollPosition();
    });
  });
};
