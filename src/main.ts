/**
 * Main entry point for the portfolio application
 */

import './styles/global.css';
import { initializeNavigation, initializeScrollIndicator } from './utils/navigation';
import { initializeScrollAnimations } from './utils/scroll';
import { initializeContactForm } from './utils/form';

const initializeApp = (): void => {
  // Initialize all modules
  initializeNavigation();
  initializeScrollIndicator();
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
