import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">무료 성격 테스트</h1>
        <p className="text-gray-600">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">성격 유형 검사</h2>
          <p className="text-gray-600 mb-4">
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">성격 유형 이해</h2>
          <p className="text-gray-600 mb-4">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">팀 평가</h2>
          <p className="text-gray-600 mb-4">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/test"
          className="inline-block bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors"
        >
          내 성격 알아보러 가기
        </Link>
      </div>
    </div>
  );
}

export default Home;
