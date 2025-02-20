import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";

function Login() {
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      const { nickname } = await login(formData);
      alert(`${nickname}님 안녕하세요!`);
      navigate("/");
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-sm text-red-500 hover:underline">
            계정이 없으신가요? 회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
