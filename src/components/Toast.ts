/**
 * Toast Notification Component
 * Shows temporary notifications for user feedback
 */

type ToastType = 'success' | 'error' | 'info';

interface ToastOptions {
  message: string;
  type: ToastType;
  duration?: number;
}

const toastStyles: Record<ToastType, string> = {
  success: 'bg-green-600 border-green-500',
  error: 'bg-red-600 border-red-500',
  info: 'bg-blue-600 border-blue-500',
};

const toastIcons: Record<ToastType, string> = {
  success: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
  </svg>`,
  error: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>`,
  info: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>`,
};

let toastContainer: HTMLElement | null = null;

const getToastContainer = (): HTMLElement => {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed top-4 right-4 z-[100] flex flex-col gap-2';
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
};

export const showToast = ({ message, type, duration = 5000 }: ToastOptions): void => {
  const container = getToastContainer();

  const toast = document.createElement('div');
  toast.className = `
    flex items-center gap-3 px-4 py-3 rounded-lg border text-white shadow-lg
    transform translate-x-full opacity-0 transition-all duration-300
    ${toastStyles[type]}
  `.trim().replace(/\s+/g, ' ');

  toast.innerHTML = `
    <span class="flex-shrink-0">${toastIcons[type]}</span>
    <span class="text-sm font-medium">${escapeHtml(message)}</span>
    <button class="ml-2 flex-shrink-0 hover:opacity-70 transition-opacity" aria-label="Close">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-x-full', 'opacity-0');
    toast.classList.add('translate-x-0', 'opacity-100');
  });

  // Close button handler
  const closeBtn = toast.querySelector('button');
  closeBtn?.addEventListener('click', () => removeToast(toast));

  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(() => removeToast(toast), duration);
  }
};

const removeToast = (toast: HTMLElement): void => {
  toast.classList.add('translate-x-full', 'opacity-0');
  setTimeout(() => toast.remove(), 300);
};

/**
 * Escape HTML to prevent XSS
 */
const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};
