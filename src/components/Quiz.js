import React, { useState } from "react";

const Quiz = ({ questions, correctAnswers }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));

  const handleAnswer = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === correctAnswers[index]) {
        score += 1;
      }
    });
    alert(`Your score is ${score} points.`);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          <ul>
            {["Option 1", "Option 2", "Option 3", "Option 4"].map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleAnswer(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={calculateScore}>Check Results</button>
    </div>
  );
};

export default Quiz;
