import { describe, expect, it } from 'vitest';
import { isFormValid, validateContactForm } from './validation';

describe('validateContactForm', () => {
  it('requires name, phone, inquiry type, and message', () => {
    const errors = validateContactForm({});
    expect(errors.fullName).toBeTruthy();
    expect(errors.phone).toBeTruthy();
    expect(errors.inquiryType).toBeTruthy();
    expect(errors.message).toBeTruthy();
    expect(isFormValid(errors)).toBe(false);
  });

  it('accepts a valid Pakistani mobile number', () => {
    const errors = validateContactForm({
      fullName: 'Ali Khan',
      phone: '03040474640',
      inquiryType: 'buying',
      message: 'I am interested in a residential property listing.',
    });
    expect(errors).toEqual({});
    expect(isFormValid(errors)).toBe(true);
  });

  it('rejects invalid email when provided', () => {
    const errors = validateContactForm({
      fullName: 'Ali Khan',
      phone: '03040474640',
      email: 'not-an-email',
      inquiryType: 'general',
      message: 'Please contact me about available properties.',
    });
    expect(errors.email).toBeTruthy();
  });
});
