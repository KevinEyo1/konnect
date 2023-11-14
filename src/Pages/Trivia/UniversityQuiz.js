import React, { useState } from "react";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

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
      questionStatement: "",
    },
    {
      image: "/images/kaist.jpg",
      correctAnswer: "Daejeon",
      options: ["Busan", "Daejeon", "Seoul", "New York"],
      questionStatement: "In which city is this university located?",
    },
    {
      image: "/images/yonsei.jpg",
      correctAnswer: "Yonsei University",
      options: ["Pohang University of Science and Technology", "Yonsei University", "Sogang University", "Hanyang University"],
      questionStatement: "",
    },
    {
      image: "/images/korea.jpg",
      correctAnswer: "Korea University",
      options: ["Kyung Hee University", "Korea University", "Inha University", "Ulsan National Institute of Science and Technology"],
      questionStatement: "",
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
      <div style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          University Quiz
        </Typography>
        {currentQuizIndex < quizData.length && (
          <div style={{ marginBottom: "20px" }}>
            <img
              src={quizData[currentQuizIndex].image}
              alt={`Quiz ${currentQuizIndex + 1}`}
              style={{ width: "300px", height: "200px", objectFit: "cover", marginBottom: "10px" }}
            />
            <Typography variant="h6" gutterBottom>
              Question {currentQuizIndex + 1}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {quizData[currentQuizIndex].questionStatement}
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {quizData[currentQuizIndex].options.map((option, optionIndex) => (
                <li key={optionIndex} style={{ marginBottom: "10px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      handleAnswerSelection(option, quizData[currentQuizIndex].correctAnswer)
                    }
                    disabled={selectedAnswer !== null}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#87CEEB",
                      color: "black", // Set text color to black
                    }}
                  >
                    {option}
                  </Button>
                </li>
              ))}
            </ul>
            {selectedAnswer !== null && (
              <div>
                {isAnswerCorrect ? (
                  <Typography variant="body1" style={{ color: "green", marginBottom: "10px" }}>
                    Correct! The answer is {quizData[currentQuizIndex].correctAnswer}.
                  </Typography>
                ) : (
                  <Typography variant="body1" style={{ color: "red", marginBottom: "10px" }}>
                    Incorrect. The correct answer is {quizData[currentQuizIndex].correctAnswer}.
                  </Typography>
                )}
                {!isLastQuiz && (
                  <Button variant="contained" color="primary" onClick={handleNextQuiz}>
                    Next Question
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
        {isLastQuiz && selectedAnswer !== null && (
          <div>
            <Typography variant="body1" gutterBottom>
              Congratulations! You have completed the quiz.
            </Typography>
            <Typography variant="body1" gutterBottom>
              You got {correctAnswersCount} out of {quizData.length} questions correct.
            </Typography>
            <Link to="/trivia" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" style={{ marginTop: "10px" }}>
                Try other Trivia
              </Button>
            </Link>
          </div>
        )}
      </div>
    </LayoutWithSidebar>
  );
};

export default UniversityQuiz;
