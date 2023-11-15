import React from "react";
import Quiz from "./Quiz";

const EtiquetteQuiz = () => {
  const etiquetteQuizData = [
    {
      image: "",
      correctAnswer: "Bow",
      options: ["Clap", "Bow", "Shake hands", "Salute"],
      questionStatement: "What is a common greeting gesture in Korea?",
    },
    {
      image: "/images/familyeating.jpg",
      correctAnswer: "Wait until adults are done",
      options: [
        "Wait until adults are done",
        "Start eating before elders start to eat",
        "Ask personal questions",
        "Eat loudly",
      ],
      questionStatement: "What is a common decency when eating food with family in Korea?",
    },
    {
      image: "/images/traffic.jpg",
      correctAnswer: "Give up your seat for elders",
      options: [
        "Pretend to sleep and refuse to give up your seat",
        "Give up your seat for elders",
        "Listen to music loudly",
        "Talk loudly on the phone",
      ],
      questionStatement: "What is considered polite on public transportation in Korea?",
    },
  ];

  return <Quiz quizData={etiquetteQuizData} quizTitle="Etiquette Quiz" />;
};

export default EtiquetteQuiz;
