import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useBearStore from "../store/bearsStore";
import { useEffect } from "react";

function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated } = useBearStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("로그인을 해주세요!");
      navigate("/login");
    }
  }, [isAuthenticated, navigate, location]);
  if (!isAuthenticated) {
    return <>로그인을 해주세요!</>;
  }

  return <Outlet />;
}

export default ProtectedRoute;
