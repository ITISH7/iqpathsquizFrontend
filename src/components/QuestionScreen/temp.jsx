import React, { useEffect, useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import useTimer from '../../hooks/useTimer';
import { PageCenter } from '../../styles/Global';
import Button from '../ui/Button';
import ModalWrapper from '../ui/ModalWrapper';
import Question from './Question/index';
import QuizHeader from './QuizHeader/index';
import { ScreenTypes } from '../../types/types';
import styles from './QuestionScreen.module.css';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

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
    quizDetails = { totalQuestions: 0, totalTime: 0, totalScore: 0, selectedQuizTopic: '' },
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
  const { questionContent, type, options, code, image, correctAnswers } = currentQuestion || {};

  // Check if the selected answer is correct
  const isMatch = selectedAnswer.length === correctAnswers?.length && selectedAnswer.every((answer) => correctAnswers.includes(answer));

  const saveAnswerForQuestion = (index) => {
    setResult((prevResult) => {
      const newResult = [...prevResult];
      newResult[index] = {
        ...questions[index],
        selectedAnswer,
        isMatch,
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
    }
  };

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = 'auto';
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

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    enterFullScreen();
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showTimerModal, showResultModal]);

  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal);

  return (
    <PageCenter>
      <div className={`${styles.quizContainer} ${selectedAnswer.length > 0 ? styles.selected : ''}`}>
        <QuizHeader activeQuestion={activeQuestion} totalQuestions={quizDetails.totalQuestions} timer={timer} />
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
          <Button text={'Prev'} onClick={onClicPrev} icon={<img src="src/assets/icons/next.svg" alt="Next Icon" style={{ width: '24px', height: '24px' }} />} iconPosition="right" />
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<img src="src/assets/icons/next.svg" alt="Next Icon" style={{ width: '24px', height: '24px' }} />}
            iconPosition="right"
          />
        </div>
      </div>

      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal}
          icon={showResultModal ? <img src="src/assets/icons/check.svg" alt="Check Icon" style={{ width: '24px', height: '24px' }} /> : <img src="src/assets/icons/timer.svg" alt="Timer Icon" style={{ width: '24px', height: '24px' }} />}
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
  );
};

export default QuestionScreen;
