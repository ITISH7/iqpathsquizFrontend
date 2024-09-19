import React, { useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types/types';

import QuestionScreen from '../QuestionScreen/index';
import QuizDetailsScreen from '../QuizDetailsScreen/index';
// import QuizTopicsScreen from '../QuizTopicsScreen';
import ResultScreen from '../ResultScreen/index';
// import SplashScreen from '../SplashScreen/SplashScreen';

import styles from './Main.module.css'; 

function Main() {
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
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <QuizDetailsScreen />;

  return <div className={styles.mainContainer}>{ComponentToRender}</div>;
}

export default Main;
