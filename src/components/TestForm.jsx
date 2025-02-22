import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const newAnswers = [
      ...answers,
      { type: questions[currentQuestion].type, answer },
    ];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      onSubmit(newAnswers);
    }
  };

  if (currentQuestion >= questions.length) {
    return null;
  }

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition duration-200"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500">
        질문 {currentQuestion + 1} / {questions.length}
      </div>
    </div>
  );
};

export default TestForm;
