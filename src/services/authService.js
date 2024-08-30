import { post, get } from './api';
import { API_ENDPOINTS } from '../utils/constants/apiEndpoints';

export const login = async (username, password) => {
  try {
    const response = await post(API_ENDPOINTS.LOGIN, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

export const logout = async () => {
  try {
    // Supondo que a API de logout seja um endpoint GET; ajuste conforme necessário
    await get(API_ENDPOINTS.LOGOUT);
  } catch (error) {
    throw new Error('Logout failed: ' + error.message);
  }
};

export const getUser = async () => {
  try {
    const response = await get(API_ENDPOINTS.GET_USER);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user: ' + error.message);
  }
};

// Você pode adicionar mais funções relacionadas à autenticação conforme necessário.
