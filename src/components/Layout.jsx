import { Link, Outlet } from "react-router-dom";
import useBearStore from "../store/bearsStore";

function Layout() {
  const { isAuthenticated, setIsAuthenticated } = useBearStore();
  const handleLogOut = () => {
    alert("로그아웃 되었습니다.");
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                to="/"
                className="flex items-center text-red-500 font-semibold"
              >
                홈
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  프로필
                </Link>
              )}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  로그인
                </Link>
              ) : (
                <button
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                  onClick={handleLogOut}
                >
                  로그아웃
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
