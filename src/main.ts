/**
 * Main entry point for the portfolio application
 */

import './styles/global.css';
import { Navigation, HeroSection, WorkSection, ContactSection, Footer, ScrollToTop } from './components';
import { initializeNavigation, initializeScrollIndicator, initializeScrollToTop } from './utils/navigation';
import { initializeScrollAnimations } from './utils/scroll';
import { initializeContactForm } from './utils/form';

const renderHomePage = (): void => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${Navigation()}
    ${HeroSection()}
    ${WorkSection()}
    ${ContactSection()}
    ${Footer()}
    ${ScrollToTop()}
  `;
};

const initializeApp = (): void => {
  // Check if we're on the home page (has #app container)
  const app = document.getElementById('app');
  
  if (app) {
    // Render home page components
    renderHomePage();
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
