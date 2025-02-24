import { produce } from "immer";
import { JSONAPI } from "./axios";

export const getTestResults = async () => {
  const response = await JSONAPI.get("/testResults");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await JSONAPI.post("/testResults", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await JSONAPI.delete(`/testResults/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (
  id,
  visibility,
  setTestHistory
) => {
  const response = await JSONAPI.patch(`/testResults/${id}`, { visibility });

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
