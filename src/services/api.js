import axios from 'axios';

// Cria uma instância do Axios com configurações padrão
const api = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela URL base da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para fazer GET requests
export const get = (url, params = {}) => api.get(url, { params });

// Função para fazer POST requests
export const post = (url, data) => api.post(url, data);

// Função para fazer PUT requests
export const put = (url, data) => api.put(url, data);

// Função para fazer DELETE requests
export const del = (url) => api.delete(url);

export default api;
