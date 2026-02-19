/**
 * Layout for main pages
 */

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const MainLayout = (content: HTMLElement): HTMLElement => {
  const wrapper = document.createElement('div');
  wrapper.appendChild(Navigation());
  wrapper.appendChild(content);
  wrapper.appendChild(Footer());
  return wrapper;
};
