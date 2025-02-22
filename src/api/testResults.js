import axios from "axios";
import { produce } from "immer";

const API_URL = "http://localhost:4000/testResults";

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

export const deleteTestResult = async (id, setTestHistory) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  setTestHistory((prev) =>
    produce(prev, (draft) => {
      const index = draft.findIndex((test) => test.id === id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    })
  );

  return response.data;
};

export const updateTestResultVisibility = async (
  id,
  visibility,
  setTestHistory
) => {
  const response = await axios.patch(`${API_URL}/${id}`, { visibility });

  setTestHistory((prev) =>
    produce(prev, (draft) => {
      const index = draft.findIndex((test) => test.id === id);
      if (index !== -1) {
        draft[index].visibility = response.data.visibility;
      }
    })
  );

  return response.data;
};
