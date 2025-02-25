import { X } from "lucide-react";

const ShareModal = ({ isOpen, onClose, result, description }) => {
  if (!isOpen) return null;

  const shareUrl = "https://mbti-test-orpin-alpha.vercel.app";
  const shareTitle = `내 MBTI 결과는 ${result}입니다!`;
  const shareDescription = description.split("!")[0] + "!";

  const shareToTwitter = () => {
    const text = encodeURIComponent(`${shareTitle}\n${shareDescription}\n`);
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(url, "_blank");
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}&quote=${encodeURIComponent(shareTitle)}`;
    window.open(url, "_blank");
  };

  const shareToKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: shareTitle,
          description: shareDescription,
          imageUrl: "https://your-image-url.com/sample.jpg",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
        buttons: [
          {
            title: "테스트 하러가기",
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
        ],
      });
    } else {
      alert("카카오톡 공유 기능을 사용할 수 없습니다.");
    }
  };

  const copyToClipboard = () => {
    const shareText = `${shareTitle}\n${shareDescription}\n${shareUrl}`;
    navigator.clipboard
      .writeText(shareText)
      .then(() => alert("링크가 복사되었습니다!"));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">공유하기</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={shareToKakao}
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
          >
            카카오톡
          </button>
          <button
            onClick={shareToFacebook}
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            페이스북
          </button>
          <button
            onClick={shareToTwitter}
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          >
            트위터
          </button>
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            링크 복사
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
