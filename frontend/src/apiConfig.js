// src/apiConfig.js
const API_BASE_URL = 'https://novaka-backend.onrender.com/api';

export const API_ENDPOINTS = {
  company: `${API_BASE_URL}/company/`,
  services: `${API_BASE_URL}/services/`,
  team: `${API_BASE_URL}/team/`,
  testimonials: `${API_BASE_URL}/testimonials/`,
  clients: `${API_BASE_URL}/clients/`,
  contact: `${API_BASE_URL}/contact/`,
};

// Generic fetch function
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// API Functions
export const getCompanyInfo = async () => fetchData(API_ENDPOINTS.company);
export const getServices = async () => fetchData(API_ENDPOINTS.services);
export const getTeamMembers = async () => fetchData(API_ENDPOINTS.team);
export const getTestimonials = async () => fetchData(API_ENDPOINTS.testimonials);
export const getClients = async () => fetchData(API_ENDPOINTS.clients);

export const submitContactForm = async (formData) => {
  return fetchData(API_ENDPOINTS.contact, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};