import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import AuthForm from "../components/AuthForm";

function SignUp() {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    try {
      const { message } = await register(formData);
      alert(message);
      navigate("/login");
    } catch ({ response }) {
      alert(response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">회원가입</h2>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <div className="mt-4 text-center">
          <Link to="/login" className="text-sm text-red-500 hover:underline">
            이미 계정이 있으신가요? 로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
