import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, token);
  return response.data;
};

export const updateProfile = async (formData) => {
  const response = await axios.patch(`${API_URL}/profile`, formData);
  return response.data;
};
