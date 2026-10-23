const phoneRegex = /^(\+92|0)?3\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContactForm = (values) => {
  const errors = {};

  if (!values.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name';
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(values.phone.trim())) {
    errors.phone = 'Enter a valid Pakistani mobile number';
  }

  if (values.email?.trim() && !emailRegex.test(values.email.trim())) {
    errors.email = 'Enter a valid email address';
  }

  if (!values.inquiryType) {
    errors.inquiryType = 'Please select an inquiry type';
  }

  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide a bit more detail (at least 10 characters)';
  }

  return errors;
};

export const isFormValid = (errors) => Object.keys(errors).length === 0;
