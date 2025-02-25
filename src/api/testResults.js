import { JSON_API } from "./axios";

export const getTestResults = async () => {
  try {
    const { data } = await JSON_API.get("/testResults");
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const createTestResult = async (resultData) => {
  try {
    const { data } = await JSON_API.post("/testResults", resultData);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const deleteTestResult = async (id) => {
  try {
    const { data } = await JSON_API.delete(`/testResults/${id}`);
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
  try {
    const { data } = await JSON_API.patch(`/testResults/${id}`, { visibility });
    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
