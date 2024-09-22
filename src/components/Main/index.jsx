import React, { useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types/types';

import QuestionScreen from '../QuestionScreen/index';
import QuizDetailsScreen from '../QuizDetailsScreen/index';
// import QuizTopicsScreen from '../QuizTopicsScreen';
import ResultScreen from '../ResultScreen/index';
// import SplashScreen from '../SplashScreen/SplashScreen';

import styles from './Main.module.css'; 

function Main({subjectName}) {
  // console.log('subjectName:', subjectName)
  const { currentScreen, setCurrentScreen } = useQuiz();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timeout to avoid memory leaks
  }, [setCurrentScreen]);

  const screenComponents = {
    // [ScreenTypes.SplashScreen]: <SplashScreen />,
    // [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen subjectName = {subjectName} />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <QuizDetailsScreen subjectName = {subjectName} />;

  return <div className={styles.mainContainer}>{ComponentToRender}</div>;
}

export default Main;
