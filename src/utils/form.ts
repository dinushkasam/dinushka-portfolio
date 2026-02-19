/**
 * Form handling utilities with input sanitization and validation
 */

import { showToast } from '../components/Toast';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Validation limits
const LIMITS = {
  NAME_MIN: 2,
  NAME_MAX: 100,
  EMAIL_MAX: 254,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 5000,
} as const;

// Patterns to detect potential injection attacks
const INJECTION_PATTERNS = [
  // SQL injection patterns
  /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE)\b.*\b(FROM|INTO|TABLE|WHERE)\b)/i,
  /(\b(OR|AND)\b\s+\d+\s*=\s*\d+)/i,
  /(--|#|\/\*|\*\/)/,
  /(\b(EXEC|EXECUTE|XP_)\b)/i,
  // Script injection patterns
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /javascript:/i,
  /on\w+\s*=/i,
  // Common XSS patterns
  /(<iframe|<object|<embed|<applet)/i,
];

export const initializeContactForm = (): void => {
  const contactForm = document.querySelector('.contact-form') as HTMLFormElement;

  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
    
    // Add real-time sanitization on input
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', (e) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement;
        target.value = sanitizeInput(target.value);
      });
    });
  }
};

const handleContactFormSubmit = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

  // Honeypot check - if filled, it's likely a bot
  const honeypot = formData.get('_honey') as string;
  if (honeypot && honeypot.length > 0) {
    // Silently reject spam
    showToast({ message: 'Message sent successfully!', type: 'success' });
    form.reset();
    return;
  }

  // Sanitize all inputs
  const data: ContactFormData = {
    name: sanitizeInput((formData.get('name') as string) || ''),
    email: sanitizeEmail((formData.get('email') as string) || ''),
    message: sanitizeInput((formData.get('message') as string) || ''),
  };

  // Update formData with sanitized values
  formData.set('name', data.name);
  formData.set('email', data.email);
  formData.set('message', data.message);

  // Validate the sanitized data
  const validation = validateContactForm(data);
  if (!validation.valid) {
    showToast({ message: validation.message, type: 'error' });
    return;
  }

  // Check for injection attempts
  if (containsInjectionAttempt(data)) {
    showToast({ message: 'Invalid characters detected. Please remove special sequences.', type: 'error' });
    return;
  }

  try {
    // Disable button while submitting
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    // Submit to FormSubmit.co
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showToast({ message: 'Message sent successfully! I\'ll get back to you soon.', type: 'success' });
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    showToast({ message: 'Failed to send message. Please try again later.', type: 'error' });
    console.error('Form submission error:', error);
  } finally {
    // Re-enable button
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    }
  }
};

/**
 * Sanitize general text input
 * - Removes HTML tags
 * - Escapes special characters
 * - Trims whitespace
 * - Normalizes spaces
 */
const sanitizeInput = (input: string): string => {
  if (!input) return '';

  return input
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove null bytes
    .replace(/\0/g, '')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    // Trim
    .trim();
};

/**
 * Sanitize email input
 * - Converts to lowercase
 * - Removes spaces
 * - Removes dangerous characters
 */
const sanitizeEmail = (email: string): string => {
  if (!email) return '';

  return email
    .toLowerCase()
    .trim()
    // Remove any HTML
    .replace(/<[^>]*>/g, '')
    // Remove spaces
    .replace(/\s/g, '')
    // Only allow valid email characters
    .replace(/[^a-z0-9.@+_-]/gi, '');
};

/**
 * Check if input contains potential injection attempts
 */
const containsInjectionAttempt = (data: ContactFormData): boolean => {
  const allText = `${data.name} ${data.email} ${data.message}`;
  
  return INJECTION_PATTERNS.some(pattern => pattern.test(allText));
};

interface ValidationResult {
  valid: boolean;
  message: string;
}

const validateContactForm = (data: ContactFormData): ValidationResult => {
  // Name validation
  if (!data.name.trim()) {
    return { valid: false, message: 'Please enter your name.' };
  }
  if (data.name.length < LIMITS.NAME_MIN) {
    return { valid: false, message: `Name must be at least ${LIMITS.NAME_MIN} characters.` };
  }
  if (data.name.length > LIMITS.NAME_MAX) {
    return { valid: false, message: `Name must be less than ${LIMITS.NAME_MAX} characters.` };
  }

  // Email validation
  if (!data.email.trim()) {
    return { valid: false, message: 'Please enter your email address.' };
  }
  if (data.email.length > LIMITS.EMAIL_MAX) {
    return { valid: false, message: 'Email address is too long.' };
  }
  if (!validateEmail(data.email)) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }

  // Message validation
  if (!data.message.trim()) {
    return { valid: false, message: 'Please enter a message.' };
  }
  if (data.message.length < LIMITS.MESSAGE_MIN) {
    return { valid: false, message: `Message must be at least ${LIMITS.MESSAGE_MIN} characters.` };
  }
  if (data.message.length > LIMITS.MESSAGE_MAX) {
    return { valid: false, message: `Message must be less than ${LIMITS.MESSAGE_MAX} characters.` };
  }

  return { valid: true, message: '' };
};

const validateEmail = (email: string): boolean => {
  // More comprehensive email validation
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};
