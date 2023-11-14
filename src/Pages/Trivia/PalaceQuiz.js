import React, { useState } from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import { Link } from "react-router-dom";

const PalaceQuiz = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const quizData = [
    {
      image: "/images/deoksu.jpg",
      correctAnswer: "Deoksu Palace",
      options: ["Deoksu Palace", "Changdeok Palace", "Kyeongbok Palace", "Kyeonghui Palace"],
    },
    {
      image: "/images/changdeok.jpg",
      correctAnswer: "Changdeok Palace",
      options: ["Kyeonghui Palace", "Deoksu Palace", "Changdeok Palace", "Kyeongbok Palace"],
    },
    {
      image: "/images/kyeongbok.jpg",
      correctAnswer: "Kyeongbok Palace",
      options: ["Deoksu Palace", "Kyeonghui Palace", "Changdeok Palace", "Kyeongbok Palace"],
    },
    {
      image: "/images/kyeonghui.jpg",
      correctAnswer: "Kyeonghui Palace",
      options: ["Changdeok Palace", "Deoksu Palace", "Kyeongbok Palace", "Kyeonghui Palace"],
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

export default PalaceQuiz;
