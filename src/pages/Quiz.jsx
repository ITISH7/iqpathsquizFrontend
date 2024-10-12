import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from '../components/Main/index';
import ToggleTheme from '../components/ui/ToggleTheme/index.jsx'; // Ensure correct path
import QuizProvider from '../context/QuizProvider.jsx'; // Ensure correct path
import { GlobalStyles } from '../styles/Global'; // Ensure correct path
import { themes } from '../styles/Theme'; // Ensure correct path
import { useParams } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext.js';
function Quiz() {
  // const {values} = useParams()
  // console.log('values:', values)

  // const {selectQuizTopic, setQuizTopic} = useQuiz()
  useEffect(() => {
    window.scrollTo(0, 80)
    // setQuizTopic(values); 

  }, [])



  // Get the current theme from localStorage (default to 'light' if not set)
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Apply theme changes and save the selection in localStorage
  const toggleTheme = (event) => {
    const checked = event.target.checked;
    const newTheme = checked ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Ensure the current theme is set on initial render using useEffect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Use the appropriate theme based on currentTheme state
  const theme = currentTheme === 'light' ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        {/* <ToggleTheme
          onChange={toggleTheme}
          currentTheme={currentTheme}
          checked={currentTheme === 'dark'} 
          id="toggleTheme"
          value="theme"
        /> */}
        <Main />
    </ThemeProvider>
  );
}

export default Quiz;
