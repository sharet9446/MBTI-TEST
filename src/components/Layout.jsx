import { Link, Outlet } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Layout() {
  const { isAuthenticated, isLogout } = useAuthStore();

  const handleLogOut = () => {
    isLogout();
    alert("로그아웃 되었습니다.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-red-500 font-semibold text-lg"
              >
                MBTI 테스트
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <Link
                    to="/history"
                    className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    테스트 결과
                  </Link>
                  <Link
                    to="/profile"
                    className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    프로필
                  </Link>
                </>
              )}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  로그인
                </Link>
              ) : (
                <button
                  className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={handleLogOut}
                >
                  로그아웃
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-16 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © MBTI 테스트. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Layout;
