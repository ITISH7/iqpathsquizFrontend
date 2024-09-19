import React, { useEffect, useState } from 'react';
import { useQuiz } from '../../context/QuizContext'; // Ensure correct path
import useTimer from '../../hooks/useTimer';
import { PageCenter } from '../../styles/Global';
import Button from '../ui/Button';
import ModalWrapper from '../ui/ModalWrapper';
import Question from './Question/index';
import QuizHeader from './QuizHeader/index';
import { ScreenTypes } from '../../types/types'; 
import styles from './QuestionScreen.module.css';

const QuestionScreen = () => {
  const quizContext = useQuiz();

  const {
    questions = [],
    quizDetails = { totalQuestions: 0, totalTime: 0, totalScore: 0, selectedQuizTopic: '' },
    result = [],
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
  } = quizContext;

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const currentQuestion = questions[activeQuestion];
  const { question, type, choices, code, image, correctAnswers } = currentQuestion || {};

  const onClickNext = () => {
    const isMatch =
      selectedAnswer.length === correctAnswers?.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer));

    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }]);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const timeTaken = quizDetails.totalTime - timer;
      setEndTime(timeTaken);
      setShowResultModal(true);
    }
    setSelectedAnswer([]);
  };

  const handleAnswerSelection = (e) => {
    const { name, checked } = e.target;

    if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        );
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name]);
      }
    }

    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name]);
      }
    }
  };

  const handleModal = () => {
    // Use ScreenTypes.ResultScreen for correct navigation
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showTimerModal, showResultModal]);

  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal);

  return (
    <PageCenter>
      <div className={`${styles.quizContainer} ${selectedAnswer.length > 0 ? styles.selected : ''}`}>
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />
        <Question
          question={question}
          code={code}
          image={image}
          choices={choices}
          type={type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <div className={styles.buttonWrapper}>
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<img src="src/assets/icons/next.svg" alt="Check Icon" style={{ width: '24px', height: '24px' }} />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </div>
      </div>

      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal} // Trigger result screen on button click
          icon={
            showResultModal ? (
              <img src="src/assets/icons/check.svg" alt="Check Icon" style={{ width: '24px', height: '24px' }} />
            ) : (
              <img src="src/assets/icons/timer.svg" alt="Timer Icon" style={{ width: '24px', height: '24px' }} />
            )
          }
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
  );
};

export default QuestionScreen;
