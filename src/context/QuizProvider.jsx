import React, { useEffect, useState } from 'react';
import { quiz } from '../data/QuizQuestions';
import { QuizContext, initialState } from './QuizContext';

const QuizProvider = ({ children }) => {
  const [timer, setTimer] = useState(initialState.timer);
  const [endTime, setEndTime] = useState(initialState.endTime);
  const [quizTopic, setQuizTopic] = useState(initialState.quizTopic);
  const [result, setResult] = useState(initialState.result);
  const [currentScreen, setCurrentScreen] = useState(initialState.currentScreen);
  const [questions, setQuestions] = useState(initialState.questions);

  // Destructure quiz data based on the selected quiz topic
  // const selectedQuizData = quiz[quizTopic] || {}; 
  // const { totalQuestions = 0, totalTime = 0, totalScore = 0, questions: quizQuestions = [] } = selectedQuizData;

  const selectQuizTopic = (topic) => {
      setQuizTopic(topic); 
  };

  // Update timer and questions when quizTopic changes
  useEffect(() => {
    // if (quiz[quizTopic]) {
    //   setTimer(quiz[quizTopic].totalTime || 0);
    //   setQuestions(quiz[quizTopic].questions || []);
    // }

    console.log('quizTopic: provider me ye hia bhai', quizTopic);
    console.log('questions: provider me ye aye', questions);
  }, [quizTopic]);

  // Prepare quiz details object to pass in context
  const quizDetails = {
    totalQuestions: questions.length,
    totalScore: 100,
    totalTime: timer,
    selectedQuizTopic: quizTopic,
  };
  // const [quizDetails, setQuizDetails] = useState({
  //   totalQuestions: 0,
  //   totalScore: 100,
  //   totalTime: 0,
  //   selectedQuizTopic: ''
  // });
  
  // useEffect(() => {
  //   console.log('quiztopic provide me jo useeffect hai:', quizTopic);
  //   const newQuizDetails = {
  //     totalQuestions: questions.length,
  //     totalScore: 100, // assuming fixed total score
  //     totalTime: timer,
  //     selectedQuizTopic: quizTopic,
  //   };
  //   setQuizDetails(newQuizDetails); // Store in state
  // }, [ quizTopic]); // Ensure all dependencies are included
  

  const quizContextValue = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    timer,
    setTimer,
    endTime,
    setEndTime,
    quizDetails,
  };

  return <QuizContext.Provider value={quizContextValue}>
    {children}
  </QuizContext.Provider>;
};

export default QuizProvider;
