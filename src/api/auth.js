import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  console.log("🚀 ~ register ~ response:", response);

  return response.data;
};

export const login = async (userData) => {};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
