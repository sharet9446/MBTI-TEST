import { Link } from "react-router-dom";
import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/testResults";
import { useEffect, useState } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import useAuthStore from "../store/authStore";

function TestHistory() {
  const [testHistory, setTestHistory] = useState([]);
  const { userData } = useAuthStore();

  useEffect(() => {
    const fetchTestResults = async () => {
      const testResults = await getTestResults();
      setTestHistory(testResults);
    };
    fetchTestResults();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        테스트 기록
      </h2>

      <div className="space-y-6">
        {testHistory.map(
          (test) =>
            (test.visibility === true || test.userId === userData.userId) && (
              <div
                key={test.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {test.nickname}
                    </h3>

                    <p className="text-sm text-gray-500">{test.date}</p>
                  </div>

                  <div className="flex flex-col items-end">
                    <h4 className="text-2xl font-bold text-red-500 mb-2">
                      {test.result}
                    </h4>

                    {test.userId === userData.userId && (
                      <div className="flex space-x-2 mt-2">
                        <button
                          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                          onClick={() => {
                            updateTestResultVisibility(
                              test.id,
                              !test.visibility,
                              setTestHistory
                            );
                          }}
                        >
                          {test.visibility ? "비공개로 전환" : "공개로 전환"}
                        </button>

                        <button
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                          onClick={() => {
                            if (window.confirm("정말 삭제하시겠습니까?")) {
                              deleteTestResult(test.id, setTestHistory);
                            }
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-gray-600">
                  {mbtiDescriptions[test.result]}
                </p>
              </div>
            )
        )}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/test"
          className="inline-block bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          새 테스트 시작하기
        </Link>
      </div>
    </div>
  );
}

export default TestHistory;
