import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";
import ShareModal from "../components/ShareModal";
import { Share2, Save, Loader2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTestResult } from "../api/testResults";
import { formattedDate } from "../utils/dataTime";
import useAuthStore from "../store/authStore";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userData } = useAuthStore();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const result = location.state?.result || "INFP";

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
    }
  }, []);

  const saveResultMutation = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testResults"] });
      navigate("/history");
    },
    onError: (error) => {
      console.error("결과 저장 실패:", error);
      alert("결과 저장에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const handleResultsView = () => {
    saveResultMutation.mutate({
      nickname: userData.nickname,
      result: result,
      visibility: true,
      date: formattedDate,
      userId: userData.userId,
    });
  };

  if (!location.state?.result) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-lg text-gray-700">테스트를 먼저 완료해주세요.</p>
        <button
          onClick={() => navigate("/test")}
          className="mt-4 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          테스트 시작하기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-500">테스트 결과</h2>
          <p className="text-5xl font-bold mt-4 mb-6">{result}</p>
        </div>
        <div className="mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {mbtiDescriptions[result] ||
              "해당 성격 유형에 대한 설명이 없습니다."}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            disabled={saveResultMutation.isPending}
          >
            <Share2 className="w-5 h-5" />
            결과 공유하기
          </button>
          <button
            onClick={handleResultsView}
            disabled={saveResultMutation.isPending}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:bg-gray-400"
          >
            {saveResultMutation.isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {saveResultMutation.isPending ? "저장 중..." : "결과 저장하기"}
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            disabled={saveResultMutation.isPending}
          >
            홈으로
          </button>
        </div>
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        result={result}
        description={mbtiDescriptions[result]}
      />
    </div>
  );
}
