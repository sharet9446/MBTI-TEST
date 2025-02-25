import axios from "axios";

const BASE_URL = "https://your-api-url.com/api";

export const shareResult = async ({ platform, data }) => {
  const response = await axios.post(`${BASE_URL}/share/${platform}`, data);
  return response.data;
};

export const trackShare = async ({ platform, resultId }) => {
  const response = await axios.post(`${BASE_URL}/analytics/share`, {
    platform,
    resultId,
  });
  return response.data;
};
