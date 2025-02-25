import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import useAuthStore from "../store/authStore";
import { formattedDate } from "../utils/dataTime";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function Results() {
  const queryClient = useQueryClient();
  const { userData } = useAuthStore();
  const location = useLocation();
  const result = location.state?.result;

  const addMutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testResults"] });
    },
  });

  const handleResultsView = () => {
    addMutation.mutate({
      nickname: userData.nickname,
      result: result,
      visibility: true,
      date: formattedDate,
      userId: userData.userId,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4 text-center text-red-500">
          테스트 결과: {result}
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          {mbtiDescriptions[result] || "해당 성격 유형에 대한 설명이 없습니다."}
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/history"
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
            onClick={handleResultsView}
          >
            내 테스트 결과 저장하기
          </Link>
          <Link
            to="/"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            홈으로
          </Link>
        </div>
      </div>
    </div>
  );
}
