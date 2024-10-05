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
import { Service } from '../../axios/config'; // Ensure correct path
import { AuthContext } from '../../context/AuthContext'; // Ensure correct path
import { useContext } from 'react';


const service = new Service(); 


// const saveTest = async ( userId, quizTopic, result, totalScore, score ) => { 
//     console.log('userId:', userId);
//     console.log('quizTopic:', quizTopic);
//     console.log('result:', result);
//     console.log('totalScore:', totalScore);
//     console.log('score:', score);
//     const response = await service.SubmitTest("66f1063d2851cc36ff0f7f6a", quizTopic , result, totalScore, score);
//     console.log('response:', response);
//     return response;
//   };

const saveTest = async (userId, quizTopic, result, totalScore, score) => {
  console.log('userId:', userId);
  console.log('quizTopic:', quizTopic);
  console.log('result:', result);
  console.log('totalScore:', totalScore);
  console.log('score:', score);
  
  // Prepare the payload according to the API structure
  const payload = {
    id: userId, // Assuming this is the ID to send
    subjectName: quizTopic, // Assuming quizTopic corresponds to subjectName
    questions: result, // Assuming result is the list of questions
    totalMarks: totalScore, // Assuming totalScore represents totalMarks
    totalScore: score // score represents the final score
  };

  try {
    const response = await service.SubmitTest(payload);
    console.log('response:', response);
    return response;
  } catch (error) {
    console.error('Error while submitting test:', error);
  }
};


const QuestionScreen = () => {
  const quizContext = useQuiz();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { userId} = useContext(AuthContext)
  // console.log('userId:', userId);

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
    score,
    quizTopic,
  } = quizContext;
  // console.log('result jo hai abhi :', result);

  const {totalScore} = quizDetails;

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const currentQuestion = questions[activeQuestion];
  const { questionContent, type, options, code, image, correctAnswers } = currentQuestion || {};
  // console.log('question:', question);
  // console.log('options', options);

  const onClickNext = () => {
    const isMatch =
      selectedAnswer.length === correctAnswers?.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer));

    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }]);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const timeTaken = initialTime - timer;
      console.log('initialTime:', initialTime);
      console.log('timer:', timer);
      setEndTime(timeTaken);
      setShowResultModal(true);
    }
    setSelectedAnswer([]);
  };

  const handleAnswerSelection = (e) => {
    const { name, checked } = e.target;

    // if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        );
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name]);
      }
    // }

    // if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name]);
      // }
    }
  };

  const handleModal = () => {
    // Use ScreenTypes.ResultScreen for correct navigation
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = 'auto';
    setFinalTime(timer);
    // saveTest(userId, quizTopic, result, totalScore, score);
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

    // Enter fullscreen on component mount
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
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<img src="src/assets/icons/next.svg" alt="Next Icon" style={{ width: '24px', height: '24px' }} />}
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
