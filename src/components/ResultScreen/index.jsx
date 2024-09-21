import React, { useEffect, useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import Button from '../ui/Button';
import CodeSnippet from '../ui/CodeSnippet';
import QuizImage from '../ui/QuizImage/index';
import ResultOverview from './ResultOverview';
import { refreshPage } from '../../utils/helpers';
import styles from './ResultScreen.module.css';

const ResultScreen = () => {
  const { result } = useQuiz();
  const [isFullScreen, setIsFullScreen] = useState(false);

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

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
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

  // Re-enter fullscreen whenever the component mounts
  useEffect(() => {
    enterFullScreen();
  }, []);

  // Function to handle retry action without reloading
  const onClickRetry = () => {
    refreshPage();
  };

  const redirectHome = () => {
    window.location.href = '/';
  };

  const renderAnswers = (choices, selectedAnswer, correctAnswers) => {
    return choices.map((ans, i) => {
      const label = String.fromCharCode(65 + i);
      const isCorrect = correctAnswers.includes(ans);
      const isSelected = selectedAnswer.includes(ans);
      const correct = isSelected && isCorrect;
      const wrong = isSelected && !isCorrect;

      return (
        <li
          key={ans}
          className={`${styles.answer} ${isCorrect ? styles.correctWithTick : ''} ${wrong ? styles.clickedWrong : ''}`}
        >
          <span>{label}.</span> {ans}
          {isCorrect && <div className={styles.tick}>✔</div>}
          {wrong && <div className={styles.cross}>✗</div>}
        </li>
      );
    });
  };

  const renderCorrectAnswers = (correctAnswers, choices) => {
    return (
      <div className={styles.correctAnswersContainer}>
        <p className={styles.correctAnswersTitle}>Correct Answer:</p>
        <ul className={styles.correctAnswerList}>
          {correctAnswers.map((correctAnswer) => {
            const answerIndex = choices.indexOf(correctAnswer);
            const label = String.fromCharCode(65 + answerIndex);
            return (
              <li key={correctAnswer} className={styles.correctAnswerItem}>
                <span>{label}.</span> {correctAnswer}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const uniqueResults = result.reduce((acc, item) => {
    if (!acc.some(el => el.question === item.question)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.resultScreenContainer}>
        <div className={styles.innerContainer}>
          <ResultOverview result={result} />
          {uniqueResults.map(
            (
              {
                question,
                choices,
                code,
                image,
                correctAnswers,
                selectedAnswer,
                score,
                isMatch,
              },
              index
            ) => (
              <div className={styles.questionContainer} key={`${index}-${question}`}>
                <div className={styles.resizableBox}>
                  <div className={styles.flex}>
                    <h6 className={styles.questionNumber}>{`${index + 1}. `}</h6>
                    <span className={styles.questionStyle}>{question}</span>
                  </div>
                  <div>
                    {code && <CodeSnippet code={code} language="javascript" />}
                    {image && <QuizImage image={image} />}
                    <ul>
                      {renderAnswers(choices, selectedAnswer, correctAnswers)}
                    </ul>
                    {renderCorrectAnswers(correctAnswers, choices)}
                  </div>
                </div>
                <span className={`${styles.score} ${isMatch ? styles.right : styles.wrong}`}>
                  {`Score ${isMatch ? score : 0}`}
                </span>
              </div>
            )
          )}
        </div>
        <div className={styles.ButtonContainer}>
          <Button
            text="RETRY"
            onClick={onClickRetry}
            icon={<img src="src/assets/icons/refresh.svg" alt="Refresh Icon" style={{ width: '24px', height: '24px' }} />}
            iconPosition="left"
            bold
          />
          <Button
            text="DONE"
            onClick={redirectHome}
            iconPosition="left"
            bold
          />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
