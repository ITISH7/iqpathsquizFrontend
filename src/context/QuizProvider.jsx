import React, { useEffect, useState } from 'react';
import { QuizContext, initialState } from './QuizContext';

const QuizProvider = ({ children }) => {
  const [timer, setTimer] = useState(initialState.timer);
  const [endTime, setEndTime] = useState(initialState.endTime);
  const [quizTopic, setQuizTopic] = useState(initialState.quizTopic);
  const [result, setResult] = useState(initialState.result);
  const [currentScreen, setCurrentScreen] = useState(initialState.currentScreen);
  const [questions, setQuestions] = useState(initialState.questions);
  const [score, setScore] = useState(initialState.score);
  const [totalMarks, setTotalMarks] = useState(initialState.totalMarks);
  const [initialTime, setInitialTime] = useState(initialState.initialTime);
  const [finalTime, setFinalTime] = useState(initialState.finalTime);
  const [userResultsSubjects, setUserResultsSubjects] = useState(initialState.userResultsSubjects);


  const selectQuizTopic = (topic) => {
      setQuizTopic(topic); 
  };

  useEffect(() => {


    console.log('quizTopic: provider me ye hia bhai', quizTopic);
    console.log('questions: provider me ye aye', questions);
  }, [quizTopic]);

  const quizDetails = {
    totalQuestions: questions.length,
    totalScore: totalMarks,
    totalTime: timer,
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
    score,
    setScore,
    totalMarks,
    setTotalMarks,
    initialTime,
    finalTime,
    setFinalTime,

  };

  return <QuizContext.Provider value={quizContextValue}>
    {children}
  </QuizContext.Provider>;
};

export default QuizProvider;
