import React, { useState } from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import { Link } from "react-router-dom";

const UniversityQuiz = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const quizData = [
    {
      image: "/images/seoul.jpg",
      correctAnswer: "Seoul National University",
      options: ["Seoul National University", "KAIST", "Yonsei University", "Korea University"],
    },
    {
      image: "/images/kaist.jpg",
      correctAnswer: "KAIST",
      options: ["Sungkyunkwan University", "KAIST", "Ewha Womans University", "Chung-Ang University"],
    },
    {
      image: "/images/yonsei.jpg",
      correctAnswer: "Yonsei University",
      options: ["Pohang University of Science and Technology", "Yonsei University", "Sogang University", "Hanyang University"],
    },
    {
      image: "/images/korea.jpg",
      correctAnswer: "Korea University",
      options: ["Kyung Hee University", "Korea University", "Inha University", "Ulsan National Institute of Science and Technology"],
    },
  ];
  

  const handleAnswerSelection = (selectedOption, correctAnswer) => {
    setSelectedAnswer(selectedOption);
    const isCorrect = selectedOption === correctAnswer;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  };

  const handleNextQuiz = () => {
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setCurrentQuizIndex((prevIndex) => prevIndex + 1);
  };

  const isLastQuiz = currentQuizIndex === quizData.length - 1;

  return (
    <LayoutWithSidebar>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Food Quiz</h2>
        {currentQuizIndex < quizData.length && (
          <div style={{ marginBottom: "20px" }}>
            <img
              src={quizData[currentQuizIndex].image}
              alt={`Quiz ${currentQuizIndex + 1}`}
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
            <h3>Question {currentQuizIndex + 1}</h3>
            <ul>
              {quizData[currentQuizIndex].options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <button
                    onClick={() =>
                      handleAnswerSelection(option, quizData[currentQuizIndex].correctAnswer)
                    }
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            {selectedAnswer !== null && (
              <div>
                {isAnswerCorrect ? (
                  <p>Correct! The answer is {quizData[currentQuizIndex].correctAnswer}.</p>
                ) : (
                  <p>Incorrect. The correct answer is {quizData[currentQuizIndex].correctAnswer}.</p>
                )}
                {!isLastQuiz && (
                  <button onClick={handleNextQuiz}>Next Question</button>
                )}
              </div>
            )}
          </div>
        )}
        {isLastQuiz && selectedAnswer !== null && (
          <div>
            <p>Congratulations! You have completed the quiz.</p>
            <p>You got {correctAnswersCount} out of {quizData.length} questions correct.</p>
            <Link to="/trivia">
              <button style={{ padding: "10px", cursor: "pointer" }}>Try other Trivia</button>
            </Link>
          </div>
        )}
      </div>
    </LayoutWithSidebar>
  );
};

export default UniversityQuiz;
