import React from "react";
import Quiz from "./Quiz";

const KpopQuiz = () => {
  const kpopQuizData = [
    {
      image: "/images/bts.jpg",
      correctAnswer: "BTS",
      options: ["EXO", "Blackpink", "BTS", "Twice"],
      questionStatement: "",
    },
    {
      image: "/images/twice.jpg",
      correctAnswer: "Twice",
      options: ["Red Velvet", "NCT", "Twice", "ATEEZ"],
      questionStatement: "",
    },
    {
      image: "/images/exo.jpg",
      correctAnswer: "EXO",
      options: ["BTS", "EXO", "Mamamoo", "Got7"],
      questionStatement: "",
    },
    {
      image: "/images/blackpink.jpg",
      correctAnswer: "Blackpink",
      options: ["Itzy", "Blackpink", "Stray Kids", "Super Junior"],
      questionStatement: "",
    },
  ];

  return <Quiz quizData={kpopQuizData} quizTitle="K-pop Quiz" />;
};

export default KpopQuiz;
