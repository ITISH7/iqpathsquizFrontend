import React, { useContext, useEffect, useState } from "react";
import { useQuiz } from "../../context/QuizContext";
import Button from "../ui/Button";
import CodeSnippet from "../ui/CodeSnippet";
import QuizImage from "../ui/QuizImage";
import ResultOverview from "./ResultOverview/index";
import styles from "./ResultScreen.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ScreenTypes } from "../../types/types";


const ResultScreen = () => {
  const { result, quizTopic, score, initialTime, finalTime, setEndTime, setCurrentScreen } = useQuiz(); 

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullScreen) {
      document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {
      document.msExitFullScreen();
    }
  };

  const handleDoneClick = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen);
    exitFullScreen();
  };


  const renderAnswers = (choices, selectedAnswer, correctAnswers) => {
    return choices.map((ans, i) => {
      const label = String.fromCharCode(65 + i);
      const isCorrect = correctAnswers.includes(ans); // Check if the answer is correct
      const isSelected = selectedAnswer.includes(ans); // Check if the answer was selected by the user

      const correct = isSelected && isCorrect; // Selected and correct
      const wrong = isSelected && !isCorrect; // Selected but wrong

      return (
        <li
          key={ans}
          className={`${styles.answer} ${
            isCorrect ? styles.correctWithTick : ""
          } ${wrong ? styles.clickedWrong : ""}`}
        >
          <span>{label}.</span> {ans}
          {/* Display tick if the answer is correct */}
          {isCorrect && <div className={styles.tick}>✔</div>}
          {/* Display cross if the selected answer was wrong */}
          {wrong && <div className={styles.cross}>✗</div>}
        </li>
      );
    });
  };

  // Function to render correct answers
  const renderCorrectAnswers = (correctAnswers, choices) => {
    return (
      <div className={styles.correctAnswersContainer}>
        <p className={styles.correctAnswersTitle}>Correct Answer:</p>
        <ul className={styles.correctAnswerList}>
          {correctAnswers.map((correctAnswer) => {
            const answerIndex = choices.indexOf(correctAnswer);
            const label = String.fromCharCode(65 + answerIndex);
            return (
              <li key={correctAnswer} className={styles.correctAnswerItem}>
                <span>{label}.</span> {correctAnswer}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // Ensure each question is unique in the result
  const uniqueResults = result.reduce((acc, item) => {
    if (!acc.some((el) => el.questionContent === item.questionContent)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.msRequestFullScreen) {
      element.msRequestFullScreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        enterFullScreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    enterFullScreen();

    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      if (header) header.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.resultScreenContainer}>
        <div className={styles.innerContainer}>
          <ResultOverview result={result} />
          {uniqueResults.map(
            (
              {
                questionContent,
                options,
                code,
                image,
                correctAnswers,
                selectedAnswer,
                score,
                isMatch,
              },
              index
            ) => (
              <div
                className={styles.questionContainer}
                key={`${index}-${questionContent}`}
              >
                <div className={styles.resizableBox}>
                  <div className={styles.flex}>
                    <h6 className={styles.questionNumber}>{`${
                      index + 1
                    }. `}</h6>
                    <span className={styles.questionStyle}>
                      {questionContent}
                    </span>
                  </div>
                  <div>
                    {code && <CodeSnippet code={code} language="javascript" />}
                    {image && <QuizImage image={image} />}
                    <ul>
                      {renderAnswers(options, selectedAnswer, correctAnswers)}
                    </ul>
                    {/* Always show correct answers after user answers */}
                    {renderCorrectAnswers(correctAnswers, options)}
                  </div>
                </div>
                <span
                  className={`${styles.score} ${
                    isMatch ? styles.right : styles.wrong
                  }`}
                >
                  {`Score ${isMatch ? score : 0}`}
                </span>
              </div>
            )
          )}
        </div>
        <div className={styles.ButtonContainer}>
       
          <Link to="/">
            <Button
              text="DONE"
              onClick={handleDoneClick}
              iconPosition="left"
              bold
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
