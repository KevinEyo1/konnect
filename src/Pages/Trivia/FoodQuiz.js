import React, { useState } from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import { Link } from "react-router-dom";

const FoodQuiz = () => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const quizData = [
    {
      image: "/images/tteokbokki.jpg",
      correctAnswer: "Tteokbokki",
      options: ["Kimchi Jjigae", "Banchan", "Tteokbokki", "Samgyeopsal"],
    },
    {
      image: "/images/bibimbap.jpg",
      correctAnswer: "Bibimbap",
      options: ["Sundubu Jjigae", "Japchae", "Bibimbap", "Galbi"],
    },
    {
      image: "/images/bulgogi.jpg",
      correctAnswer: "Bulgogi",
      options: ["Bibimbap", "Galbi", "Bulgogi", "Kimchi Fried Rice"],
    },
    {
      image: "/images/naengmyeon.jpg",
      correctAnswer: "Naengmyeon",
      options: ["Jajangmyeon", "Bibimbap", "Naengmyeon", "Bibim Naengmyeon"],
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

export default FoodQuiz;
