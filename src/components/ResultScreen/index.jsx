import React from 'react';
import { useQuiz } from '../../context/QuizContext';
import Button from '../ui/Button';
import CodeSnippet from '../ui/CodeSnippet';
import QuizImage from '../ui/QuizImage';
import ResultOverview from './ResultOverview/index';
// import { Refresh } from '../../config/icons';
import { refreshPage } from '../../utils/helpers';
// import { ScreenTypes } from '../../types/types';
import styles from './ResultScreen.module.css'; // Importing CSS module

const ResultScreen = () => {
  const { result } = useQuiz(); // Get necessary data from context
  console.log('result jo result page me aya', result);

  // Function to handle retry action
  const onClickRetry = () => {
    refreshPage();
  };

  const redirectHome = () => {
    window.location.href = '/';
  };

  // Function to render answers
  const renderAnswers = (choices, selectedAnswer, correctAnswers) => {
    return choices.map((ans, i) => {
      const label = String.fromCharCode(65 + i);
      const isCorrect = correctAnswers.includes(ans); // Check if the answer is correct
      const isSelected = selectedAnswer.includes(ans); // Check if the answer was selected by the user

      const correct = isSelected && isCorrect; // Selected and correct
      const wrong = isSelected && !isCorrect; // Selected but wrong

      return (
        <li
          key={ans}
          className={`${styles.answer} ${isCorrect ? styles.correctWithTick : ''} ${wrong ? styles.clickedWrong : ''}`}
        >
          <span>{label}.</span> {ans}

          {/* Display tick if the answer is correct */}
          {isCorrect && <div className={styles.tick}>✔</div>}

          {/* Display cross if the selected answer was wrong */}
          {wrong && <div className={styles.cross}>✗</div>}
        </li>
      );
    });
  };

  // Function to render correct answers
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

  // Ensure each question is unique in the result
  const uniqueResults = result.reduce((acc, item) => {
    if (!acc.some((el) => el.questionContent === item.questionContent)) {
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
            ({ questionContent, options, code, image, correctAnswers, selectedAnswer, score, isMatch }, index) => (
              <div className={styles.questionContainer} key={`${index}-${questionContent}`}>
                <div className={styles.resizableBox}>
                  <div className={styles.flex}>
                    <h6 className={styles.questionNumber}>{`${index + 1}. `}</h6>
                    <span className={styles.questionStyle}>{questionContent}</span>
                  </div>
                  <div>
                    {code && <CodeSnippet code={code} language="javascript" />}
                    {image && <QuizImage image={image} />}
                    <ul>{renderAnswers(options, selectedAnswer, correctAnswers)}</ul>
                    {/* Always show correct answers after user answers */}
                    {renderCorrectAnswers(correctAnswers, options)}
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
            icon={<img src="/assets/icons/refresh.svg" alt="Refresh Icon" style={{ width: '24px', height: '24px' }} />}
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
