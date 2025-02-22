import { calculateMBTI } from "../utils/mbtiCalculator";
import { useNavigate } from "react-router-dom";
import TestForm from "../components/TestForm";

const Test = () => {
  const navigate = useNavigate();

  const handleTestSubmit = (answers) => {
    const mbtiResult = calculateMBTI(answers);
    navigate("/results", { state: { result: mbtiResult } });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-50 py-12">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">
          MBTI 테스트
        </h1>
        <TestForm onSubmit={handleTestSubmit} />
      </div>
    </div>
  );
};

export default Test;
