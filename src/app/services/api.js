import axios from 'axios';

const API_ENDPOINT = "http://localhost:8000";

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const apiService = {
    getDestinationsByPage: async (page) => {
        try {
            const response = await axios.get(`/api/?page=${page}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getDestinationById: async (id) => {
        try {
            const response = await axios.get(`/api/destinations/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
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
};