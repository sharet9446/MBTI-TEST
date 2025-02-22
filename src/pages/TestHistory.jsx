import { Link } from "react-router-dom";

function TestHistory() {
  // TODO: 실제 테스트 히스토리 데이터 가져오기
  const testHistory = [
    { id: 1, date: "9/1/2024, 3:20:56 AM", result: "ISTJ" },
    { id: 2, date: "9/1/2024, 3:38:35 AM", result: "ENTJ" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">모든 테스트 결과</h2>
      <div className="space-y-4">
        {testHistory.map((test) => (
          <div key={test.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{test.result}</h3>
                <p className="text-sm text-gray-500">{test.date}</p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                  공개로 전환
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/test"
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          새 테스트 시작하기
        </Link>
      </div>
    </div>
  );
}

export default TestHistory;
