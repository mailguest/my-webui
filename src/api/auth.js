import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (username, password) => {
  try {
    const encryptedUsername = btoa(username);
    const encryptedPassword = btoa(password);
    const response = await axios.post(`${API_URL}/register`, {
      username: encryptedUsername,
      password: encryptedPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (username, password) => {
  try {
    const encryptedUsername = btoa(username);
    const encryptedPassword = btoa(password);
    const response = await axios.post(`${API_URL}/login`, {
      username: encryptedUsername,
      password: encryptedPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
