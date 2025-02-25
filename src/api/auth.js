import { AUTH_API } from "./axios";

export const register = async (userData) => {
  try {
    const { data } = await AUTH_API.post(`/register`, userData);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const { data } = await AUTH_API.post(`/login`, userData);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    const { data } = await AUTH_API.get(`/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    alert(response.data.message);
  }
};

export const updateProfile = async (nickname, token) => {
  try {
    const formData = new FormData();
    if (nickname) formData.append("nickname", nickname);
    const { data } = await AUTH_API.patch(`/profile`, formData, {
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
