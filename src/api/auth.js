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
    return response;
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw new Error('注册失败');
    }
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
    if (error.response && error.response.data) {
      throw error.response.data;
    } else {
      throw new Error('登录失败');
    }
  }
};
