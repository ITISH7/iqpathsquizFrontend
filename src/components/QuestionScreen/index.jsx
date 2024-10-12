import React, { useEffect, useState } from "react";
import { useQuiz } from "../../context/QuizContext";
import useTimer from "../../hooks/useTimer";
import { PageCenter } from "../../styles/Global";
import Button from "../ui/Button";
import ModalWrapper from "../ui/ModalWrapper";
import Question from "./Question/index";
import QuizHeader from "./QuizHeader/index";
import { ScreenTypes } from "../../types/types";
import styles from "./QuestionScreen.module.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { formatTime } from "../../utils/helpers";

const QuestionScreen = () => {
  const quizContext = useQuiz();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const { userId } = useContext(AuthContext);
  const {
    questions = [],
    quizDetails = {
      totalQuestions: 0,
      totalTime: 0,
      totalScore: 0,
      selectedQuizTopic: "",
    },
    result = [],
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    initialTime,
    setEndTime,
    setFinalTime,
  } = quizContext;

  const { totalScore } = quizDetails;

  const currentQuestion = questions[activeQuestion];
  const { questionContent, type, options, code, image, correctAnswers } =
    currentQuestion || {};

  // New state to track attempted questions
  const [attemptedQuestions, setAttemptedQuestions] = useState(
    []
  ); 

  // New state to track visited questions
  const [visitedQuestions, setVisitedQuestions] = useState(
   []
  ); 
  useEffect(() => {
    setAttemptedQuestions(Array(questions.length).fill(false));
    setVisitedQuestions(Array(questions.length).fill(false));
  }, [questions]);
  

  const isMatch =
    selectedAnswer.length === correctAnswers?.length &&
    selectedAnswer.every((answer) => correctAnswers.includes(answer));

  const saveAnswerForQuestion = (index) => {
    const currentQuestion = questions[index];

    // Calculate if the selected answers match the correct ones
    const isMatch =
      selectedAnswer.length === currentQuestion.correctAnswers?.length &&
      selectedAnswer.every((answer) =>
        currentQuestion.correctAnswers.includes(answer)
      );

    // Mark the current question as attempted
    if (selectedAnswer.length !== 0) {
      setAttemptedQuestions((prev) => {
        const newAttempted = [...prev];
        newAttempted[activeQuestion] = true;
        console.log("newAttempted", newAttempted);
        return newAttempted;
      });

    }
    
    //mark the current question as visited
    setVisitedQuestions((prev) => {
      const newVisited = [...prev];
      newVisited[activeQuestion] = true;
      console.log("newVisited", newVisited);
      return newVisited;
    });

    // Save the answer for the question
    setResult((prevResult) => {
      const newResult = [...prevResult];
      newResult[index] = {
        ...currentQuestion,
        selectedAnswer, // Store the selected answer
        isMatch, // Store whether the answer is correct
      };
      return newResult;
    });
  };

  const onClickNext = () => {
    saveAnswerForQuestion(activeQuestion); // Save the current question result before moving

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const timeTaken = initialTime - timer;
      setEndTime(timeTaken);
      setShowResultModal(true);
    }

    setSelectedAnswer(result[activeQuestion + 1]?.selectedAnswer || []); // Restore next question's selected answer
  };

  const onClicPrev = () => {
    if (activeQuestion > 0) {
      saveAnswerForQuestion(activeQuestion); // Save the current question result before moving back
      setActiveQuestion((prev) => prev - 1);
      setSelectedAnswer(result[activeQuestion - 1]?.selectedAnswer || []); // Restore previous question's selected answer
    }
  };

  const handleAnswerSelection = (e) => {
    const { name, checked } = e.target;

    // if (type === 'MAQs') {
    if (checked) {
      setSelectedAnswer((prev) => [...prev, name]);
    } else {
      setSelectedAnswer((prev) => prev.filter((ans) => ans !== name));
    }
    // } else if (type === 'MCQs' || type === 'boolean') {
    if (checked) {
      setSelectedAnswer([name]);
      // }

      // Mark the current question as attempted
      if (selectedAnswer.length !== 0) {
        setAttemptedQuestions((prev) => {
          const newAttempted = [...prev];
          newAttempted[activeQuestion] = true;
          console.log("newAttempted", newAttempted);
          return newAttempted;
        });
      }

      //mark the current question as visited
      setVisitedQuestions((prev) => {
        const newVisited = [...prev];
        newVisited[activeQuestion] = true;
        console.log("newVisited", newVisited);
        return newVisited;
      });
    }
  };

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = "auto";
    setFinalTime(timer);
  };

  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
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

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = "hidden";
    }
  }, [showTimerModal, showResultModal]);

  useTimer(
    timer,
    quizDetails,
    setEndTime,
    setTimer,
    setShowTimerModal,
    showResultModal
  );

  const handleQuestionJump = (questionIndex) => {
    // Save the current question's answer before jumping
    saveAnswerForQuestion(activeQuestion);

    // Update the active question to the one jumped to
    setActiveQuestion(questionIndex);

    // Retrieve and set the selected answer for the new question if it was answered before
    const previousResult = result[questionIndex];
    setSelectedAnswer(previousResult ? previousResult.selectedAnswer : []);
  };

  const getAttemptedCount = () => {
    // return attemptedQuestions.filter((attempted) => attempted === true).length;
    return attemptedQuestions?.filter((attempted) => attempted === true).length;
  };

  return (
    <div className={styles.quizWrapper}>
      <div className="sidePannel">
        <div className={styles.quizPannelContainer}>
          <h1 className={styles.quizTitle}>{quizDetails.selectedQuizTopic}</h1>
          <p className={styles.quizDescription}>
            <span className={styles.infoItem}>
              {` Total Questions: ${quizDetails.totalQuestions}`}
            </span>
            <span className={styles.infoItem}>
              {` Total Score: ${totalScore}`}
            </span>
            <span className={styles.infoItem}>
              {`Attempted: ${getAttemptedCount()} `}
            </span>
            <span className={styles.infoItem}>
              {/* {` Total Time: $(formatTime(${quizDetails.totalTime} ))mins`} */}
              {`Time Left: ${formatTime(quizDetails.totalTime)} mins`}
            </span>
          </p>
          <hr className={styles.breakLine}/>
          <div className={styles.navigationLegend}>
            <ul>
              <li className={styles.greyCircle}>Not Visited</li>
              <li className={styles.yellowCircle}>Visited but Not Attempted</li>
              <li className={styles.greenCircle}>Attempted</li>
            </ul>
          </div>
        </div>
        {/* old slidebar */}
        <div className={styles.sidebar}>
          {questions.map((_, index) => {
            if (
              index >= attemptedQuestions.length ||
              index >= visitedQuestions.length
            ) {
              return null;
            }

            const isAttempted = attemptedQuestions[index];
            const isVisited = visitedQuestions[index];

            return (
              <button
                key={index}
                className={`${styles.paginationButton} ${
                  index === activeQuestion ? styles.activeButton : ""
                } ${
                  isAttempted
                    ? styles.attempted
                    : isVisited
                    ? styles.visitedButNotAttempted
                    : ""
                }`}
                onClick={() => handleQuestionJump(index)}
                title={`Question ${index + 1}`} // Tooltip for better accessibility
              >
                {index + 1}
              </button>
            );
          })}
        </div>
       
      </div>
      <PageCenter className={styles.PageCenter}>
        <div
          className={`${styles.quizContainer} ${
            selectedAnswer.length > 0 ? styles.selected : ""
          }`}
        >
          <QuizHeader
            activeQuestion={activeQuestion}
            totalQuestions={quizDetails.totalQuestions}
            timer={timer}
          />
          <Question
            question={questionContent}
            code={code}
            image={image}
            options={options}
            type={type}
            handleAnswerSelection={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />
          <div className={styles.buttonWrapper}>
            <Button
              text={"Prev"}
              onClick={onClicPrev}
              icon={
                <img
                  src="src/assets/icons/next.svg"
                  alt="Next Icon"
                  style={{ width: "24px", height: "24px", rotate: "180deg" }}
                />
              }
              iconPosition="left"
            />
            <Button
              text={activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              onClick={onClickNext}
              icon={
                <img
                  src="src/assets/icons/next.svg"
                  alt="Next Icon"
                  style={{ width: "24px", height: "24px" }}
                />
              }
              iconPosition="right"
            />
          </div>
        </div>

        {(showTimerModal || showResultModal) && (
          <ModalWrapper
            title={showResultModal ? "Done!" : "Your time is up!"}
            subtitle={`You have attempted ${result.length} questions in total.`}
            onClick={handleModal}
            icon={
              showResultModal ? (
                <img
                  src="src/assets/icons/check.svg"
                  alt="Check Icon"
                  style={{ width: "24px", height: "24px" }}
                />
              ) : (
                <img
                  src="src/assets/icons/timer.svg"
                  alt="Timer Icon"
                  style={{ width: "24px", height: "24px" }}
                />
              )
            }
            buttonTitle="SHOW RESULT"
          />
        )}
      </PageCenter>
    </div>
  );
};

export default QuestionScreen;
