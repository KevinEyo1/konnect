import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWithSidebar from "../../components/LayoutWithSidebar";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

const QuizList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Trivia = () => {
  const navigate = useNavigate();

  const navigateToQuiz = (quizPath) => {
    navigate(`/trivia${quizPath}`);
  };

  const QuizItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
      width: 600px; /* Adjusted image size */
      height: 600px; /* Adjusted image size */
      object-fit: cover;
      border-radius: 8px;
    }

    p {
      margin-top: 50px;
    }

    .quiz-info {
      display: flex;
      align-items: center;
      margin-top: 4px;
    }

    .question-count {
      margin-top: 8px;
      font-size: 14px;
      color: #888;
    }

    .rating {
      margin-right: 4px;
    }

    margin-bottom: 200px;

   .author {
      display: flex;
      align-items: center;
      margin-top: 40px;
    }

    .author-icon {
      margin-right: 4px;
    }

    .rating-container {
      display: flex;
      align-items: center;
      margin-top: 4px;
    }
  
    .rating-text {
      margin-left: 4px;
      font-size: 16px;
      font-weight: bold; 
    }
  
    .quiz-title {
      font-size: 36px; 
      font-weight: bold; 
    }
  
    .author-name {
      font-size: 20px; 
      font-weight: bold;
    }
  `;

  return (
    <LayoutWithSidebar>
      <h1>Solve and Create Trivias to Share Your Knowledge About Korean, or KAIST Cultures!</h1>
      <QuizList>
        <li>
          <QuizItem onClick={() => navigateToQuiz("food")}>
            <img src="/images/tteokbokki.jpg" alt="Tteokbokki Quiz" />
            <p className="quiz-title">Korean Food Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={4}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(4/5)</span>
            </div>
            <div className="author">
              <span className="author-name">Dongwon</span>
            </div>
            <div className="question-count">
              <span>Questions: {4}</span>
            </div>
          </QuizItem>
        </li>

        <li>
          <QuizItem>
            <img src="/images/kaist.jpg" alt="KAIST Culture Quiz" />
            <p className="quiz-title">KAIST Culture Trivia (Under Verification)</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(5/5)</span>
            </div>
            <div className="author">
              <span className="author-name">Junyoung</span>
            </div>
            <div className="question-count">
              <span>Questions: {4}</span>
            </div>
          </QuizItem>
        </li>

        <li>
          <QuizItem onClick={() => navigateToQuiz("university")}>
            <img src="/images/yonsei.jpg" alt="University Quiz" />
            <p className="quiz-title">Korean University Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={3.4}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(3.4/5)</span>
            </div>
            <div className="author">
              <span className="author-name">Junyoung</span>
            </div>
            <div className="question-count">
              <span>Questions: {4}</span>
            </div>
          </QuizItem>
        </li>

        <li>
          <QuizItem onClick={() => navigateToQuiz("palace")}>
            <img src="/images/kyeongbok.jpg" alt="Palace Quiz" />
            <p className="quiz-title">Korean Palace Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(5/5)</span>
            </div>
            <div className="author">
              <span className="author-name">Kevin</span>
            </div>
            <div className="question-count">
              <span>Questions: {4}</span>
            </div>
          </QuizItem>
        </li>
        
        <li>
          <QuizItem onClick={() => navigateToQuiz("holiday")}>
            <img src="/images/seollal.jpg" alt="Holiday Quiz" />
            <p className="quiz-title">Korean Holiday Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(5/5)</span>
            </div>
            <div className="author">
              <span className="author-name">John</span>
            </div>
            <div className="question-count">
              <span>Questions: {3}</span>
            </div>
          </QuizItem>
        </li>

        <li>
          <QuizItem onClick={() => navigateToQuiz("commonphrase")}>
            <img src="/images/hangeul.jpg" alt="Common Phrase Quiz" />
            <p className="quiz-title">Korean Common Phrase Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(5/5)</span>
            </div>
            <div className="author">
              <span className="author-name">James</span>
            </div>
            <div className="question-count">
              <span>Questions: {3}</span>
            </div>
          </QuizItem>
        </li>

        <li>
          <QuizItem onClick={() => navigateToQuiz("etiquette")}>
            <img src="/images/familyeating.jpg" alt="Etiquette Quiz" />
            <p className="quiz-title">Korean Etiquette Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(5/5)</span>
            </div>
            <div className="author">
              <span className="author-name">Alex</span>
            </div>
            <div className="question-count">
              <span>Questions: {3}</span>
            </div>
          </QuizItem>
        </li>
        
        <li>
          <QuizItem onClick={() => navigateToQuiz("kpop")}>
            <img src="/images/blackpink.jpg" alt="kpop Quiz" />
            <p className="quiz-title">K-Pop Trivia</p>
            <div className="quiz-info">
              <Rating
                className="rating"
                name="read-only"
                value={5}
                precision={0.5}
                readOnly
              />
              <span className="rating-text">(5/5)</span>
            </div>
            <div className="author">
              <span className="author-name">Yoojin</span>
            </div>
            <div className="question-count">
              <span>Questions: {4}</span>
            </div>
          </QuizItem>
        </li>

      </QuizList>
    </LayoutWithSidebar>
  );
};

export default Trivia;
