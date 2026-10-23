import { useState } from 'react';
import { INQUIRY_TYPES } from '../config/site';
import { isFormValid, validateContactForm } from '../utils/validation';
import { submitContact, submitInquiry } from '../services/api';

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  inquiryType: 'general',
  propertyTitle: '',
  message: '',
  website: '', // honeypot
};

const ContactForm = ({
  mode = 'contact',
  propertyId = '',
  propertyTitle = '',
  defaultInquiryType = 'general',
}) => {
  const [form, setForm] = useState({
    ...initialState,
    inquiryType: defaultInquiryType,
    propertyTitle: propertyTitle || '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  // Visitor email is optional on the form. Company email display is gated in ContactCTA/Footer.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    if (!isFormValid(validationErrors)) return;

    setSubmitting(true);
    try {
      const payload = {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        inquiryType: form.inquiryType,
        propertyId: propertyId || undefined,
        propertyTitle: form.propertyTitle.trim() || propertyTitle || undefined,
        message: form.message.trim(),
        website: form.website,
      };

      const result =
        mode === 'inquiry' ? await submitInquiry(payload) : await submitContact(payload);

      setStatus({
        type: 'success',
        message: result.message || 'Thank you. We have received your request.',
      });
      setForm({
        ...initialState,
        inquiryType: defaultInquiryType,
        propertyTitle: propertyTitle || '',
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Unable to submit. Please try again or call us.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium text-navy">Full Name *</span>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="input-field"
            autoComplete="name"
            required
          />
          {errors.fullName && <span className="mt-1 block text-sm text-red-600">{errors.fullName}</span>}
        </label>

        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium text-navy">Phone Number *</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="03040474640"
            autoComplete="tel"
            required
          />
          {errors.phone && <span className="mt-1 block text-sm text-red-600">{errors.phone}</span>}
        </label>
      </div>

      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium text-navy">Email (optional)</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="input-field"
          autoComplete="email"
        />
        {errors.email && <span className="mt-1 block text-sm text-red-600">{errors.email}</span>}
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium text-navy">Inquiry Type *</span>
          <select
            name="inquiryType"
            value={form.inquiryType}
            onChange={handleChange}
            className="input-field"
            required
          >
            {INQUIRY_TYPES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.inquiryType && (
            <span className="mt-1 block text-sm text-red-600">{errors.inquiryType}</span>
          )}
        </label>

        <label className="block text-left">
          <span className="mb-1.5 block text-sm font-medium text-navy">
            Property of Interest (optional)
          </span>
          <input
            type="text"
            name="propertyTitle"
            value={form.propertyTitle}
            onChange={handleChange}
            className="input-field"
            placeholder="Property name or reference"
          />
        </label>
      </div>

      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium text-navy">Message *</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="input-field resize-y"
          required
        />
        {errors.message && <span className="mt-1 block text-sm text-red-600">{errors.message}</span>}
      </label>

      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {status.message && (
        <div
          role="status"
          className={`border px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <button type="submit" className="btn-primary w-full md:w-auto" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  );
};

export default ContactForm;
