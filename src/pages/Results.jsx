import { Link } from "react-router-dom";

export default function Results() {
  // TODO: 실제 결과 계산 로직 구현

  const result = "INFP";

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">
          테스트 결과: {result}
        </h2>
        <p className="text-gray-600 mb-6">
          INFP: 현실에서 방황하는 시인! INFP는 세상의 아름다움과 인간의 감정에
          대해 깊이 생각하는 사람들입니다. 이들은 항상 자신의 마음속에서 새로운
          시나 시를 짓고 있으며, 세상의 모든 측면과 기쁨을 시적으로 표현하고
          싶어해요. 하지만 가끔은 현실에서 너무 멀리 떨어져 있어 '지금 내가 이걸
          왜 하고 있지?'라고 스스로에게 묻곤 합니다. 그럼에도 불구하고 이들은
          정말 따뜻하고 이해심 많은 친구들이에요.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/history"
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            결과 페이지로 이동하기
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
