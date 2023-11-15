import React from "react";
import Quiz from "./Quiz"; // Import the Quiz component

const FoodQuiz = () => {
  // Define your food quiz data
  const foodQuizData = [
    {
      image: "/images/tteokbokki.jpg",
      correctAnswer: "Tteokbokki",
      options: ["Kimchi Jjigae", "Banchan", "Tteokbokki", "Samgyeopsal"],
      questionStatement: "",
    },
    {
      image: "/images/bean.jpg",
      correctAnswer: "Bean",
      options: ["Bean", "Onion", "Rice", "Milk"],
      questionStatement: "What is the common ingredient of these dishes?",
    },
    {
      image: "/images/bibimbap.jpg",
      correctAnswer: "Gochujang",
      options: ["Gochujang", "Ganjang", "Gejang", "Ssamjang"],
      questionStatement: "What sauce goes well together with this dish?",
    },
    {
      image: "/images/bulgogi.jpg",
      correctAnswer: "Bulgogi",
      options: ["Bibimbap", "Galbi", "Bulgogi", "Kimchi Fried Rice"],
      questionStatement: "",
    },
  ];

  return <Quiz quizData={foodQuizData} quizTitle="Food Quiz" />;
};

export default FoodQuiz;
