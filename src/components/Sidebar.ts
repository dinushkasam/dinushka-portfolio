/**
 * ProjectSidebar Component
 * Minimal sidebar with collapsible 3D and 2D project sections
 * Expands on hover, always visible, inspired by modern UI
 */

import { fetchProjectIndex, fetchProjectMetadata } from '../config/api';
import type { Project, TwoDProject } from '../types/index';

export async function renderProjectSidebar(currentProjectId?: string): Promise<void> {
  let sidebar = document.getElementById('project-sidebar');
  if (!sidebar) {
    sidebar = document.createElement('aside');
    sidebar.id = 'project-sidebar';
    document.body.appendChild(sidebar);
  }

  // Add a toggle button for the sidebar immediately
  const navBar = document.querySelector('nav');
  if (navBar) {
    const toggleButton = document.createElement('button');
    toggleButton.id = 'sidebar-toggle';
    toggleButton.innerHTML = '<span>☰</span>';
    toggleButton.style.position = 'absolute';
    toggleButton.style.top = '50%';
    toggleButton.style.transform = 'translateY(-50%)';
    toggleButton.style.left = '50px';
    toggleButton.style.background = 'transparent';
    toggleButton.style.border = 'none';
    toggleButton.style.color = 'white';
    toggleButton.style.fontSize = '24px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.addEventListener('click', () => {
      const sidebar = document.getElementById('project-sidebar');
      if (sidebar) {
        sidebar.classList.toggle('open');

        // Ensure 3D and 2D project sections are displayed when sidebar is open
        const sections = sidebar.querySelectorAll('.sidebar-section');
        if (sidebar.classList.contains('open')) {
          sections.forEach(section => section.classList.add('open'));
        } else {
          sections.forEach(section => section.classList.remove('open'));
        }
      }
    });
    navBar.appendChild(toggleButton);
  }

  // Add styles to remove focus outline from the toggle button
  const toggleButtonStyle = document.createElement('style');
  toggleButtonStyle.textContent = `
    #sidebar-toggle {
      outline: none;
    }
    #sidebar-toggle:focus {
      outline: none;
      box-shadow: none;
    }
  `;
  document.head.appendChild(toggleButtonStyle);



  // Get current project id from URL if not provided
  let projectId = currentProjectId;
  if (!projectId) {
    const urlParams = new URLSearchParams(window.location.search);
    projectId = urlParams.get('id') || undefined;
  }

  // Try to get cached metadata from sessionStorage
  let projects3d: Project[] = [];
  let projects2d: TwoDProject[] = [];
  const cache3d = sessionStorage.getItem('sidebar_projects3d');
  const cache2d = sessionStorage.getItem('sidebar_projects2d');

  if (cache3d && cache2d) {
    try {
      projects3d = JSON.parse(cache3d);
      projects2d = JSON.parse(cache2d);
    } catch (e) {
      projects3d = [];
      projects2d = [];
    }
  }

  if (!projects3d.length || !projects2d.length) {
    const index = await fetchProjectIndex();
    [projects3d, projects2d] = await Promise.all([
      Promise.all(index['3d'].map(id => fetchProjectMetadata<Project>('3d', id))),
      Promise.all(index['2d'].map(id => fetchProjectMetadata<TwoDProject>('2d', id)))
    ]);
    // Cache results for this session
    sessionStorage.setItem('sidebar_projects3d', JSON.stringify(projects3d));
    sessionStorage.setItem('sidebar_projects2d', JSON.stringify(projects2d));
  }

  // Sidebar HTML
  sidebar.innerHTML = `
    <style>
      #project-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 200px; /* Increased width */
        background: rgba(15,23,42,0.92);
        border-right: 1px solid #222;
        z-index: 60;
        transition: width 0.25s cubic-bezier(.4,0,.2,1);
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 56px;
      }
      #project-sidebar:hover {
        width: 260px;
        box-shadow: 2px 0 16px 0 rgba(0,0,0,0.12);
      }
      .sidebar-section {
        width: 100%;
        margin-bottom: 18px;
      }
      .sidebar-section-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        font-weight: 600;
        color: #cbd5e1;
        font-size: 1rem;
        border-radius: 6px;
        transition: background 0.15s;
      }
      .sidebar-section-header:hover {
        background: #1e293b;
      }
      .sidebar-section-list {
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        display: none;
        flex-direction: column;
        gap: 2px;
      }
      .sidebar-section.open .sidebar-section-list {
        display: flex;
      }
      .sidebar-item {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 4px 12px;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.15s;
        white-space: nowrap;
        font-size: 0.95rem;
      }
      .sidebar-item.active {
        background: #334155;
        font-weight: bold;
      }
      .sidebar-thumb {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        object-fit: cover;
        margin-right: 0;
        flex-shrink: 0;
      }
      #project-sidebar:not(:hover) .sidebar-section-header span,
      #project-sidebar:not(:hover) .sidebar-item span {
        display: none;
      }
    </style>
    <div class="sidebar-section" id="sidebar-3d">
      <div class="sidebar-section-header" tabindex="0">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2l9 5-9 5-9-5 9-5zm0 13l9-5-9-5-9 5-9 5zm0 0v9"></path>
        </svg>
        <span>3D Projects</span>
        <button class="dropdown-toggle" aria-label="Toggle 3D Projects">▼</button>
      </div>
      <ul class="sidebar-section-list">
        ${projects3d.map(p => `
          <li class="sidebar-item${p.id === projectId ? ' active' : ''}" data-id="${p.id}">
            <img src="${p.thumbnail}" alt="${p.name}" class="sidebar-thumb" />
            <span>${p.name}</span>
          </li>
        `).join('')}
      </ul>
    </div>
    <div class="sidebar-section" id="sidebar-2d">
      <div class="sidebar-section-header" tabindex="0">
        <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke-width="2"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8"/>
        </svg>
        <span>2D Projects</span>
        <button class="dropdown-toggle" aria-label="Toggle 2D Projects">▼</button>
      </div>
      <ul class="sidebar-section-list">
        ${projects2d.map(p => `
          <li class="sidebar-item${p.id === projectId ? ' active' : ''}" data-id="${p.id}">
            <img src="${p.thumbnail}" alt="${p.name}" class="sidebar-thumb" />
            <span>${p.name}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `;


  // Collapsible logic
  sidebar.querySelectorAll('.sidebar-section-header').forEach((header) => {
    const dropdownButton = header.querySelector('.dropdown-toggle');
    dropdownButton?.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent triggering the header click event
      const section = header.parentElement;
      if (section) section.classList.toggle('open');
    });

    header.addEventListener('click', () => {
      const section = header.parentElement;
      if (section) section.classList.toggle('open');
    });

    header.addEventListener('keydown', (e) => {
      const keyboardEvent = e as KeyboardEvent;
      if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        const section = header.parentElement;
        if (section) section.classList.toggle('open');
      }
    });
  });

  // Add click handlers to project items for navigation
  sidebar.querySelectorAll('#sidebar-3d .sidebar-item').forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      if (id) {
        window.location.href = `/project.html?id=${id}`;
      }
    });
  });
  sidebar.querySelectorAll('#sidebar-2d .sidebar-item').forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      if (id) {
        window.location.href = `/2d-project.html?id=${id}`;
      }
    });
  });

  // Add event listeners to hide the sidebar when not hovering
  const projectSidebar = document.getElementById('project-sidebar');
  if (projectSidebar) {
    projectSidebar.addEventListener('mouseleave', () => {
      projectSidebar.classList.remove('open');
    });

    projectSidebar.addEventListener('mouseenter', () => {
      projectSidebar.classList.add('open');
    });
  }

  // Update styles for the sidebar to increase its width
  const style = document.createElement('style');
  style.textContent = `
    #sidebar-toggle {
      z-index: 100;
    }
    #project-sidebar {
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      background: rgba(15, 23, 42, 0.9); /* Semi-transparent background */
      width: 130px; 
    }
    #project-sidebar.open {
      transform: translateX(0);
    }
    #project-sidebar .sidebar-item {
      background: rgba(255, 255, 255, 0.1); /* Semi-transparent item background */
      font-size: 13px; 
    }
    #project-sidebar .sidebar-item:hover {
      background: rgba(255, 255, 255, 0.2); /* Slightly more visible on hover */
    }
    
    /* Hide sidebar on screens smaller than 1400px to prevent overlap */
    @media (max-width: 1290px) {
      #sidebar-toggle,
      #project-sidebar {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}
