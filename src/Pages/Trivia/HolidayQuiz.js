import React from "react";
import Quiz from "./Quiz"; // Import the Quiz component

const HolidayQuiz = () => {
  // Define your food quiz data
  const holidayQuizData = [
    {
      image: "/images/seollal.jpg",
      correctAnswer: "Eat Songpyeon",
      options: ["Se-Bae", "Eat Tteokguk", "Play Yuttnori", "Eat Songpyeon"],
      questionStatement: "What do people NOT do in Seoullal?",
    },
    {
      image: "/images/chuseok.jpg",
      correctAnswer: "Chuseok",
      options: ["Chuseok", "Seollal", "Christmas", "Danoh"],
      questionStatement: "What holiday are they celebrating in the picture?",
    },
    {
      image: "",
      correctAnswer: "5/5",
      options: ["2/2", "3/3", "4/4", "5/5"],
      questionStatement: "When is the Children's Day in Korea?",
    },
  ];

  return <Quiz quizData={holidayQuizData} quizTitle="Holiday Quiz" />;
};

export default HolidayQuiz;
