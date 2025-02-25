import axios from "axios";

export const AUTH_API = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
});

export const JSON_API = axios.create({
  baseURL: import.meta.env.VITE_JSON_API_URL,
});
