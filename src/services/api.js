import { API_URL } from '../config/site';

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

export const fetchProperties = async (filters = {}) => {
  const response = await fetch(`${API_URL}/properties${buildQuery(filters)}`);
  return handleResponse(response);
};

export const fetchPropertyById = async (id) => {
  const response = await fetch(`${API_URL}/properties/${id}`);
  return handleResponse(response);
};

export const fetchFilterOptions = async () => {
  const response = await fetch(`${API_URL}/properties/meta/filters`);
  return handleResponse(response);
};

export const fetchProjects = async (category) => {
  const response = await fetch(
    `${API_URL}/projects${buildQuery(category ? { category } : {})}`
  );
  return handleResponse(response);
};

export const submitInquiry = async (data) => {
  const response = await fetch(`${API_URL}/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const submitContact = async (data) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const checkHealth = async () => {
  const response = await fetch(`${API_URL}/health`);
  return handleResponse(response);
};
