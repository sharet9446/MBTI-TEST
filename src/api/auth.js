import axios from "axios";

const API_URL = "https://www.nbcamp-react-auth.link";

export const register = async (userData) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, userData);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, userData);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    const { data } = await axios.get(`${API_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const updateProfile = async (nickname, token) => {
  try {
    const formData = new FormData();
    if (nickname) formData.append("nickname", nickname);
    const { data } = await axios.patch(`${API_URL}/profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
