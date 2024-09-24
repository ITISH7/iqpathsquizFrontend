import { createContext, useContext } from 'react';

export const initialState = {
  currentScreen: 'SplashScreen', 
  setCurrentScreen: () => {},
  quizTopic: 'React',
  selectQuizTopic: () => {},
  questions: [],
  setQuestions: () => {},
  result: [],
  setResult: () => {},
  score: 0,
  setScore: () => {},
  timer: 0,
  setTimer: () => {},
  endTime: 0,
  setEndTime: () => {},
  initialTime: Date.now(),
  finalTime: Date.now(),
  setFinalTime: () => {},
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: 'React',
  },
  totalMarks: 0,

  

  setTotalMarks: () => {},
};

export const QuizContext = createContext(initialState);

export function useQuiz() {
  return useContext(QuizContext);
}
