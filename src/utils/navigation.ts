/**
 * Navigation utilities for smooth scrolling and active link highlighting
 */

export const initializeNavigation = (): void => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Highlight active navigation link on scroll
  const updateActiveLink = (): void => {
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).clientHeight;

      if (window.scrollY >= sectionTop - 300) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('text-blue-400');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('text-blue-400');
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink);
};

/**
 * Initialize scroll indicator functionality
 */
export const initializeScrollIndicator = (): void => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const workSection = document.querySelector('#work');

  if (scrollIndicator && workSection) {
    scrollIndicator.addEventListener('click', () => {
      workSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
};

/**
 * Initialize scroll-to-top button functionality
 */
export const initializeScrollToTop = (): void => {
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    const toggleButtonVisibility = (): void => {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'invisible');
        scrollToTopBtn.classList.add('opacity-100', 'visible');
      } else {
        scrollToTopBtn.classList.remove('opacity-100', 'visible');
        scrollToTopBtn.classList.add('opacity-0', 'invisible');
      }
    };

    window.addEventListener('scroll', toggleButtonVisibility);

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};
