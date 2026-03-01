/**
 * Main entry point for the portfolio application
 */

import './styles/global.css';
import { Navigation, HeroSection, WorkSection, TwoDDesignSection, ContactSection, Footer, ScrollToTop } from './components';
import { initializeNavigation, initializeScrollIndicator, initializeScrollToTop } from './utils/navigation';
import { initializeScrollAnimations, initializeScrollPositionPreservation, restoreScrollPosition } from './utils/scroll';
import { initializeContactForm } from './utils/form';
import { fetchProjectIndex, fetchProjectMetadata, fetchAllProjects } from './config/api';
import type { Project, TwoDProject } from './types/index';
import { renderProjectSidebar } from './components/Sidebar';

const renderHomePage = (projects3d: Project[], projects2d: TwoDProject[]): void => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${Navigation()}
    ${HeroSection()}
    ${WorkSection(projects3d)}
    ${TwoDDesignSection(projects2d)}
    ${ContactSection()}
    ${Footer()}
    ${ScrollToTop()}
  `;

  // Restore scroll position if available, otherwise scroll to hash
  setTimeout(() => {
    // @ts-ignore: restoreScrollPosition is globally available or imported
    const restored = typeof restoreScrollPosition === 'function' ? restoreScrollPosition() : false;
    if (!restored && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Hero background slideshow logic (fetch hero images from index.json)
    fetch('https://pub-37c984a390cf46e299cda313408bfe6a.r2.dev/index.json?t=' + Date.now())
      .then(res => res.json())
      .then(indexData => {
        const heroArray = Array.isArray(indexData.hero) ? indexData.hero : [];
        if (!heroArray.length) return;
        // Use the same base URL as in getAssetUrl, but for hero images, they are in different project folders
        const BASE_URL = 'https://pub-37c984a390cf46e299cda313408bfe6a.r2.dev';
        const images = heroArray.map((path: string) => {
          // If path is already absolute, use as is
          if (path.startsWith('http') || path.startsWith('blob:') || path.startsWith('data:')) return path;
          // path is like 'sage/thumb.png' or 'abstract/1-scaled.png'
          return `${BASE_URL}/${path}`;
        });
        let current = 0;
        const heroBg = document.getElementById('hero-bg');
        let first = true;
        
        // Preload images to avoid loading delay during transition
        const preloadedImages: { [key: string]: HTMLImageElement } = {};
        images.forEach((src, idx) => {
          const preloadImg = new window.Image();
          preloadImg.src = src;
          preloadedImages[src] = preloadImg;
        });
        
        function showNextImage() {
          if (!heroBg || !images.length) return;
          current = (current + 1) % images.length;
          const img = document.createElement('img');
          img.src = images[current];
          img.className = 'inactive';
          heroBg.appendChild(img);
          setTimeout(() => {
            img.className = 'active';
          }, 50);
          if (!first) {
            const prevImg = heroBg.querySelectorAll('img')[0];
            if (prevImg) {
              prevImg.className = 'inactive';
              setTimeout(() => {
                if (prevImg.parentNode) prevImg.parentNode.removeChild(prevImg);
              }, 2500);
            }
          } else {
            first = false;
          }
          setTimeout(showNextImage, 4000);
        }
        setTimeout(showNextImage, 500);
      });
  }, 0);
};

const renderProjectPageComponents = async (): Promise<void> => {
  const navContainer = document.getElementById('nav-container');
  const footerContainer = document.getElementById('footer-container');
  const projectTitle = document.getElementById('project-title');
  const projectContent = document.getElementById('project-content');
  
  if (navContainer) {
    navContainer.innerHTML = Navigation({ isProjectPage: true });
    // Render sidebar after nav is in DOM
    renderProjectSidebar();
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = Footer();
  }
  
  // Get project ID from URL and update title
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  if (projectId) {
    try {
      const project = await fetchProjectMetadata<Project>('3d', projectId);
      if (project) {
        if (projectTitle) {
          projectTitle.textContent = project.name;
          
          if (project.description) {
            projectTitle.insertAdjacentHTML('afterend', `
              <p id="project-description" class="mt-3 sm:mt-4 text-gray-400 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base px-4">
                ${project.description}
              </p>
            `);
          }
        }
        document.title = `${project.name} - Dinushka Samaranayake`;

        if (projectContent) {
          let contentHtml = '';

          // Render sections from config.json
          if (project.sections && project.sections.length > 0) {
            project.sections.forEach((section) => {
              if (section.type === 'image') {
                contentHtml += `
                  <div class="rounded-2xl shadow-lg overflow-hidden bg-gray-900/20 mb-8 last:mb-0">
                      <img src="${section.src}" alt="${project.name}" class="w-full h-full object-contain cursor-magnify block" data-lightbox>
                  </div>
                `;
              } else if (section.type === 'video') {
                contentHtml += `
                  <div class="rounded-2xl overflow-hidden bg-black shadow-lg mb-8 last:mb-0">
                      <video 
                          src="${section.src}" 
                          poster="${section.thumbnail || project.thumbnail || ''}"
                          class="w-full h-full object-contain" 
                          ${section.autoplay ? 'autoplay' : ''} 
                          ${section.loop ? 'loop' : ''} 
                          controls
                      ></video>
                  </div>
                `;
              } else if (section.type === 'grid' && Array.isArray(section.src)) {
                const gridCols = section.src.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
                contentHtml += `
                  <div class="grid grid-cols-1 ${gridCols} gap-4 sm:gap-6 mb-8 last:mb-0">
                    ${section.src.map(imgSrc => `
                      <img src="${imgSrc}" alt="${project.name}" class="w-full object-contain rounded-xl shadow-md cursor-magnify hover:scale-[1.01] transition-transform duration-300" data-lightbox>
                    `).join('')}
                  </div>
                `;
              }
            });
          }

          projectContent.innerHTML = contentHtml || '<p class="text-center text-gray-500">No content available for this project.</p>';
          
          // Re-initialize lightbox for the new content
          initializeLightbox();
        }
      }
    } catch (error) {
      console.error('Error loading project:', error);
      if (projectContent) {
        projectContent.innerHTML = '<p class="text-center text-red-500">Failed to load project details.</p>';
      }
    }
  }
};

const render2DProjectPageComponents = async (): Promise<void> => {
  const navContainer = document.getElementById('nav-container');
  const footerContainer = document.getElementById('footer-container');
  const projectTitle = document.getElementById('project-title');
  const artworkContainer = document.getElementById('artwork-container');
  
  if (navContainer) {
    navContainer.innerHTML = Navigation({ isProjectPage: true });
    // Render sidebar after nav is in DOM
    renderProjectSidebar();
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = Footer();
  }
  
  // Get 2D project ID from URL and load artwork
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  if (projectId) {
    try {
      const project = await fetchProjectMetadata<TwoDProject>('2d', projectId);
      if (project) {
        if (projectTitle) {
          projectTitle.textContent = project.name;

          if (project.description) {
            projectTitle.insertAdjacentHTML('afterend', `
              <p id="project-description" class="mt-3 sm:mt-4 text-gray-400 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base px-4">
                ${project.description}
              </p>
            `);
          }
        }
        document.title = `${project.name} - Dinushka Samaranayake`;
        
        if (artworkContainer) {
          let contentHtml = '';

          if (project.sections && project.sections.length > 0) {
            project.sections.forEach((section) => {
              if (section.type === 'image') {
                contentHtml += `
                  <div class="overflow-hidden rounded-2xl shadow-lg mb-8 last:mb-0 bg-gray-900/20">
                    <img src="${section.src}" alt="${project.name}" class="w-full h-full object-contain cursor-magnify block" data-lightbox>
                  </div>
                `;
              } else if (section.type === 'video') {
                contentHtml += `
                  <div class="rounded-2xl overflow-hidden bg-black shadow-lg mb-8 last:mb-0">
                      <video 
                          src="${section.src}" 
                          poster="${section.thumbnail || project.thumbnail || ''}"
                          class="w-full h-full object-contain" 
                          ${section.autoplay ? 'autoplay' : ''} 
                          ${section.loop ? 'loop' : ''} 
                          controls
                      ></video>
                  </div>
                `;
              } else if (section.type === 'grid' && Array.isArray(section.src)) {
                const gridCols = section.src.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
                contentHtml += `
                  <div class="grid grid-cols-1 ${gridCols} gap-4 sm:gap-6 mb-8 last:mb-0">
                    ${section.src.map(imgSrc => `
                      <img src="${imgSrc}" alt="${project.name}" class="w-full object-contain rounded-xl shadow-md cursor-magnify hover:scale-[1.01] transition-transform duration-300" data-lightbox>
                    `).join('')}
                  </div>
                `;
              }
            });
          }

          artworkContainer.innerHTML = contentHtml || '<p class="text-center text-gray-500">No content available for this artwork.</p>';
          initializeLightbox();
        }
      }
    } catch (error) {
      console.error('Error loading 2D project:', error);
      if (artworkContainer) {
        artworkContainer.innerHTML = '<p class="text-center text-red-500">Failed to load artwork.</p>';
      }
    }
  }
};

const initializeApp = async (): Promise<void> => {
  try {
    // Check if we're on the home page (has #app container)
    const app = document.getElementById('app');
    const artworkContainer = document.getElementById('artwork-container');
    const projectContent = document.getElementById('project-content');
    const isHomePage = !!app;
    
    if (app) {
      // Home page - fetch everything
      const index = await fetchProjectIndex();
      const [projects3d, projects2d] = await Promise.all([
        fetchAllProjects<Project>('3d', index['3d']),
        fetchAllProjects<TwoDProject>('2d', index['2d'])
      ]);
      renderHomePage(projects3d, projects2d);
    } else if (artworkContainer) {
      // 2D Project page
      await render2DProjectPageComponents();
    } else if (projectContent) {
      // 3D Project page
      await renderProjectPageComponents();
    }

    // Initialize all modules
    initializeNavigation();
    initializeScrollIndicator();
    initializeScrollToTop();
    initializeScrollAnimations();
    initializeContactForm();
    initializeLightbox();

    // Initialize scroll position preservation for home page
    if (isHomePage) {
      initializeScrollPositionPreservation();
      // Restore scroll position after everything is initialized
      restoreScrollPosition();
    }

    // Show page with fade-in after content is ready
    document.body.classList.add('loaded');

  } catch (error) {
    console.error('Initialization error:', error);
    document.body.classList.add('loaded'); // Show page anyway but maybe with error messages
  }
};

const initializeLightbox = (): void => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement;
  const lightboxClose = document.getElementById('lightbox-close');
  
  if (!lightbox || !lightboxImg) return;

  // Add click handlers to all images with data-lightbox attribute
  document.querySelectorAll('[data-lightbox]').forEach((img) => {
    img.addEventListener('click', () => {
      const imgEl = img as HTMLImageElement;
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }
  });

  // Update onclick to also remove flex class
  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }
  };

  // Close button click handler
  if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
      e.stopPropagation();
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    });
  }
};



// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
