import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useEffect } from "react";

function ProtectedRoute() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인을 해주세요!");
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center">
        <span className="text-[20px]">로그인을 해주세요!</span>
      </div>
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
