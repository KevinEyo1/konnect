import React from "react";
import Quiz from "./Quiz"; // Import the Quiz component

const UniversityQuiz = () => {
  // Define your university quiz data
  const universityQuizData = [
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

  return <Quiz quizData={universityQuizData} quizTitle="University Quiz" />;
};

export default UniversityQuiz;
