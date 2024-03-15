import axios from 'axios';

const API_ENDPOINT = "http://localhost:8000";

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const authService = {
    login: async (formData) => {
        try {
            const response = await axios.post(`/api/login`, formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    register: async (formData) => {
        try {
            const response = await axios.post(`/api/register`, formData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    logout: async () => {
        try {
            const response = await axios.post(`/api/logout`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};