import { Link } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function TestHistory() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        테스트 기록
      </h2>

      <ResultCard />

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
