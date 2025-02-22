import React, { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" })
  );

  const handleAnswer = (answer) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      const newAnswers = [...answers];
      newAnswers[question.id - 1] = {
        type: questions[question.id - 1].type,
        answer,
      };
      setAnswers(newAnswers);
    } else {
      onSubmit(answers);
    }
  };

  if (currentQuestion >= questions.length) {
    return null;
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 text-left border rounded hover:bg-gray-50"
            >
              {option}
            </button>
          ))}
          {currentQuestion + 1} / {questions.length}
        </div>
      </div>
    </div>
  );
};

export default TestForm;
