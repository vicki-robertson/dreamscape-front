import axios from 'axios';

const API_ENDPOINT = "http://localhost:8000";

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.interceptors.request.use(function (config) {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('auth_token') : null;
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const destinationService = {
    getDestinations: async () => {
        try {
            const response = await axios.get(`/api/`);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getDestinationsByPage: async (page) => {
        try {
            const response = await axios.get(`/api/page/?page=${page}`);
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
    createDestination: async (destinationData) => {
        try {
            const response = await axios.post(`/api/destinations`, destinationData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    updateDestination: async (id, destinationData) => {
        try {
            const response = await axios.put(`/api/destinations/${id}`, destinationData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    deleteDestination: async (id) => {
        try {
            const response = await axios.delete(`/api/destinations/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    searchDestinations: async (searchTerm) => {
        try {
            const response = await axios.get(`/api/search?search=${searchTerm}`);
            // console.log("Response from searchDestinations:", response);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};