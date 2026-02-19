/**
 * Form handling utilities
 */

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const initializeContactForm = (): void => {
  const contactForm = document.querySelector('.contact-form') as HTMLFormElement;

  if (contactForm) {
    contactForm.addEventListener('submit', handleContactFormSubmit);
  }
};

const handleContactFormSubmit = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data: ContactFormData = {
    name: (formData.get('name') as string) || '',
    email: (formData.get('email') as string) || '',
    message: (formData.get('message') as string) || '',
  };

  if (validateContactForm(data)) {
    try {
      // TODO: Add your form submission logic here
      // Example: await submitToEmailService(data);

      // Show success message
      showFormMessage('Thank you! I will get back to you soon.', 'success');

      // Reset form
      form.reset();

      // Optional: Clear message after 5 seconds
      setTimeout(() => clearFormMessage(), 5000);
    } catch (error) {
      showFormMessage('Something went wrong. Please try again.', 'error');
      console.error('Form submission error:', error);
    }
  }
};

const validateContactForm = (data: ContactFormData): boolean => {
  if (!data.name.trim()) {
    showFormMessage('Please enter your name.', 'error');
    return false;
  }

  if (!validateEmail(data.email)) {
    showFormMessage('Please enter a valid email address.', 'error');
    return false;
  }

  if (!data.message.trim()) {
    showFormMessage('Please enter a message.', 'error');
    return false;
  }

  return true;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showFormMessage = (message: string, type: 'success' | 'error'): void => {
  const messageContainer = document.querySelector('.form-message');

  if (messageContainer) {
    messageContainer.textContent = message;
    messageContainer.classList.remove('hidden', 'text-red-400', 'text-green-400');
    messageContainer.classList.add(
      'block',
      type === 'success' ? 'text-green-400' : 'text-red-400'
    );
  }
};

const clearFormMessage = (): void => {
  const messageContainer = document.querySelector('.form-message');

  if (messageContainer) {
    messageContainer.classList.add('hidden');
    messageContainer.textContent = '';
  }
};
