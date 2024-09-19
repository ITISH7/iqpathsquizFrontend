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
  const selectedQuizData = quiz[quizTopic] || {}; // Safe check if quizTopic does not exist
  const { totalQuestions = 0, totalTime = 0, totalScore = 0, questions: quizQuestions = [] } = selectedQuizData;

  const selectQuizTopic = (topic) => {
    if (quiz[topic]) {
      setQuizTopic(topic); // Only set topic if it exists in the quiz object
    } else {
      console.error(`Quiz topic ${topic} not found.`);
    }
  };

  // Update timer and questions when quizTopic changes
  useEffect(() => {
    if (quiz[quizTopic]) {
      setTimer(quiz[quizTopic].totalTime || 0);
      setQuestions(quiz[quizTopic].questions || []);
    }
  }, [quizTopic]);

  // Prepare quiz details object to pass in context
  const quizDetails = {
    totalQuestions,
    totalScore,
    totalTime,
    selectedQuizTopic: quizTopic,
  };

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
