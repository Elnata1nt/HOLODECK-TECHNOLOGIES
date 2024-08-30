import { validateEmail } from '../helpers/validateEmail';

export const validateForm = (formData) => {
  const errors = {};

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Invalid email address';
  }

  if (!formData.password || formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};
