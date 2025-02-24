import axios from "axios";

export const AUTHAPI = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
});

export const JSONAPI = axios.create({
  baseURL: "http://localhost:4000",
});
