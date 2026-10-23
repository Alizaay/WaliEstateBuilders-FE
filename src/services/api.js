import { API_URL, COMPANY, USE_MOCK_DATA, WHATSAPP_URL } from '../config/site';
import {
  SAMPLE_PROJECTS,
  SAMPLE_PROPERTIES,
  filterSampleProperties,
  getSamplePropertyById,
} from '../data/sampleData';

const buildQuery = (params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, String(value));
    }
  });
  const qs = query.toString();
  return qs ? `?${qs}` : '';
};

const handleResponse = async (response) => {
  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message =
      payload?.message ||
      payload?.errors?.[0]?.message ||
      'Something went wrong. Please try again.';
    const error = new Error(message);
    error.status = response.status;
    error.errors = payload?.errors || [];
    throw error;
  }

  return payload;
};

const delay = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProperties = async (filters = {}) => {
  if (USE_MOCK_DATA) {
    await delay();
    return filterSampleProperties(filters);
  }

  const response = await fetch(`${API_URL}/properties${buildQuery(filters)}`);
  return handleResponse(response);
};

export const fetchPropertyById = async (id) => {
  if (USE_MOCK_DATA) {
    await delay();
    const result = getSamplePropertyById(id);
    if (!result) {
      const error = new Error('Property not found');
      error.status = 404;
      throw error;
    }
    return result;
  }

  const response = await fetch(`${API_URL}/properties/${id}`);
  return handleResponse(response);
};

export const fetchFilterOptions = async () => {
  if (USE_MOCK_DATA) {
    await delay();
    const prices = SAMPLE_PROPERTIES.map((p) => p.price);
    return {
      success: true,
      data: {
        propertyTypes: [...new Set(SAMPLE_PROPERTIES.map((p) => p.propertyType))],
        transactionTypes: [...new Set(SAMPLE_PROPERTIES.map((p) => p.transactionType))],
        locations: [...new Set(SAMPLE_PROPERTIES.map((p) => p.location))].sort(),
        priceRange: {
          min: Math.min(...prices),
          max: Math.max(...prices),
        },
      },
    };
  }

  const response = await fetch(`${API_URL}/properties/meta/filters`);
  return handleResponse(response);
};

export const fetchProjects = async (category) => {
  if (USE_MOCK_DATA) {
    await delay();
    const data = category
      ? SAMPLE_PROJECTS.filter((p) => p.category === category)
      : SAMPLE_PROJECTS;
    return { success: true, data };
  }

  const response = await fetch(
    `${API_URL}/projects${buildQuery(category ? { category } : {})}`
  );
  return handleResponse(response);
};

const buildWhatsAppInquiryText = (data) => {
  const lines = [
    'Assalam-o-Alaikum, new website inquiry:',
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
  ];
  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.inquiryType) lines.push(`Type: ${data.inquiryType}`);
  if (data.propertyTitle) lines.push(`Property: ${data.propertyTitle}`);
  lines.push(`Message: ${data.message}`);
  return lines.join('\n');
};

export const submitInquiry = async (data) => {
  if (USE_MOCK_DATA) {
    await delay(300);
    if (typeof window !== 'undefined') {
      const text = encodeURIComponent(buildWhatsAppInquiryText(data));
      window.open(`${WHATSAPP_URL}?text=${text}`, '_blank', 'noopener,noreferrer');
    }
    return {
      success: true,
      message: `Thank you. WhatsApp will open so you can send this inquiry to ${COMPANY.phoneDisplay}. You can also call us anytime.`,
      data: { id: `local-${Date.now()}`, createdAt: new Date().toISOString() },
    };
  }

  const response = await fetch(`${API_URL}/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const submitContact = async (data) => submitInquiry({ ...data, source: 'contact' });

export const checkHealth = async () => {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      message: 'Frontend mock mode (no backend)',
      database: 'local-sample-data',
    };
  }

  const response = await fetch(`${API_URL}/health`);
  return handleResponse(response);
};
