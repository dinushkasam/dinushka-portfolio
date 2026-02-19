/**
 * Main entry point for the portfolio application
 */

import './styles/global.css';
import { Navigation, HeroSection, WorkSection, TwoDDesignSection, ContactSection, Footer, ScrollToTop } from './components';
import { initializeNavigation, initializeScrollIndicator, initializeScrollToTop } from './utils/navigation';
import { initializeScrollAnimations } from './utils/scroll';
import { initializeContactForm } from './utils/form';
import { getProjectById } from './config/projects';
import { getTwoDProjectById } from './config/twoDProjects';

const renderHomePage = (): void => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${Navigation()}
    ${HeroSection()}
    ${WorkSection()}
    ${TwoDDesignSection()}
    ${ContactSection()}
    ${Footer()}
    ${ScrollToTop()}
  `;
};

const renderProjectPageComponents = (): void => {
  const navContainer = document.getElementById('nav-container');
  const footerContainer = document.getElementById('footer-container');
  const projectTitle = document.getElementById('project-title');
  
  if (navContainer) {
    navContainer.innerHTML = Navigation({ isProjectPage: true });
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = Footer();
  }
  
  // Get project ID from URL and update title
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  if (projectId && projectTitle) {
    const project = getProjectById(projectId);
    if (project) {
      projectTitle.textContent = project.title;
      document.title = `${project.title} - Dinushka Samaranayake`;
    }
  }
};

const render2DProjectPageComponents = (): void => {
  const navContainer = document.getElementById('nav-container');
  const footerContainer = document.getElementById('footer-container');
  const projectTitle = document.getElementById('project-title');
  const artworkContainer = document.getElementById('artwork-container');
  
  if (navContainer) {
    navContainer.innerHTML = Navigation({ isProjectPage: true });
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = Footer();
  }
  
  // Get 2D project ID from URL and load artwork
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');
  
  if (projectId) {
    const project = getTwoDProjectById(projectId);
    if (project) {
      if (projectTitle) {
        projectTitle.textContent = project.title;
      }
      document.title = `${project.title} - Dinushka Samaranayake`;
      
      if (artworkContainer) {
        artworkContainer.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="w-full h-auto">
        `;
      }
    }
  }
};

const initializeApp = (): void => {
  // Check if we're on the home page (has #app container)
  const app = document.getElementById('app');
  const artworkContainer = document.getElementById('artwork-container');
  
  if (app) {
    // Render home page components
    renderHomePage();
  } else if (artworkContainer) {
    // 2D Project page
    render2DProjectPageComponents();
  } else {
    // 3D Project page - render navigation and footer
    renderProjectPageComponents();
  }

  // Initialize all modules
  initializeNavigation();
  initializeScrollIndicator();
  initializeScrollToTop();
  initializeScrollAnimations();
  initializeContactForm();

  // Log that app is ready
  console.log('Portfolio app initialized successfully');
};

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
