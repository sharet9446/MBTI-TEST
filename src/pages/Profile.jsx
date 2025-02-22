import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import { getUserProfile, updateProfile } from "../api/auth";

function Profile() {
  const [nickname, setNickname] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const { userData, updateNickName } = useAuthStore();

  useEffect(() => {
    const fetchNickname = async () => {
      if (!userData) return;
      const userProfile = await getUserProfile(userData.accessToken);

      updateNickName(userProfile.nickname);
    };

    fetchNickname();
  }, [userData, updateNickName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdated(true);
    updateProfile(nickname, userData.accessToken);
    updateNickName(nickname);
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">프로필 수정</h1>
        {isUpdated && (
          <div className="text-center text-green-600 mb-4">
            프로필이 성공적으로 업데이트되었습니다!
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nickname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              현재 닉네임 : {userData.nickname}
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="닉네임을 입력해주세요."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
