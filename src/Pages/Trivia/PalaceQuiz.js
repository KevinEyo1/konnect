import React from "react";
import Quiz from "./Quiz"; // Import the Quiz component

const PalaceQuiz = () => {
  // Define your palace quiz data
  const palaceQuizData = [
    {
      image: "/images/deoksu.jpg",
      correctAnswer: "Deoksu Palace",
      options: ["Deoksu Palace", "Changdeok Palace", "Kyeongbok Palace", "Kyeonghui Palace"],
      questionStatement: "",
    },
    {
      image: "/images/changdeok.jpg",
      correctAnswer: "Changdeok Palace",
      options: ["Kyeonghui Palace", "Deoksu Palace", "Changdeok Palace", "Kyeongbok Palace"],
      questionStatement: "",
    },
    {
      image: "/images/kyeongbok.jpg",
      correctAnswer: "Kyeongbok Palace",
      options: ["Deoksu Palace", "Kyeonghui Palace", "Changdeok Palace", "Kyeongbok Palace"],
      questionStatement: "",
    },
    {
      image: "/images/kyeonghui.jpg",
      correctAnswer: "Kyeonghui Palace",
      options: ["Changdeok Palace", "Deoksu Palace", "Kyeongbok Palace", "Kyeonghui Palace"],
      questionStatement: "",
    },
  ];

  return <Quiz quizData={palaceQuizData} quizTitle="Palace Quiz" />;
};

export default PalaceQuiz;
