import React from "react";
import Quiz from "./Quiz";

const CommonPhraseQuiz = () => {
  const commonPhraseQuizData = [
    {
      correctAnswer: "안녕하세요",
      options: ["안녕하세요", "감사합니다", "미안해요", "죄송합니다"],
      questionStatement: "Which phrase means 'Hello'?",
    },
    {
      correctAnswer: "고맙습니다",
      options: ["사랑해요", "미안해요", "고맙습니다", "화이팅"],
      questionStatement: "Which phrase means 'Thank you'?",
    },
    {
      correctAnswer: "미안해요",
      options: ["화이팅", "고맙습니다", "천만에요", "미안해요"],
      questionStatement: "Which phrase means 'I'm sorry'?",
    },
  ];

  return <Quiz quizData={commonPhraseQuizData} quizTitle="Common Phrase Quiz" />;
};

export default CommonPhraseQuiz;
