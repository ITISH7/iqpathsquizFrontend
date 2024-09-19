import React from 'react';
import { useQuiz } from '../../context/QuizContext';
import Button from '../ui/Button';
import CodeSnippet from '../ui/CodeSnippet';
import QuizImage from '../ui/QuizImage/index';
import ResultOverview from './ResultOverview';
// import { Refresh } from '../../config/icons';
import { refreshPage } from '../../utils/helpers'
// import { ScreenTypes } from '../../types/types'; 
import styles from './ResultScreen.module.css'; // Importing CSS module

const ResultScreen = () => {
  const { result } = useQuiz(); // Get necessary functions from context

  // Function to handle retry action without reloading
  const onClickRetry = () => {
    refreshPage();
  };

  const redirectHome = () => {
    window.location.href = '/'
  }

  // Function to render answers
  const renderAnswers = (choices, selectedAnswer, correctAnswers) => {
    return choices.map((ans, i) => {
      const label = String.fromCharCode(65 + i);
      const isCorrect = correctAnswers.includes(ans);  // Check if the answer is correct
      const isSelected = selectedAnswer.includes(ans); // Check if the answer was selected by the user

      // Display a correct answer with a tick, whether or not it was selected
      const correct = isSelected && isCorrect; // Selected and correct
      const wrong = isSelected && !isCorrect;  // Selected but wrong

      return (
        <li
          key={ans}
          className={`${styles.answer} ${isCorrect ? styles.correctWithTick : ''} ${wrong ? styles.clickedWrong : ''}`}
        >
          <span>{label}.</span> {ans}

          {/* Display a tick if the answer is correct, whether selected or not */}
          {isCorrect && <div className={styles.tick}>✔</div>}

          {/* Display a cross if the selected answer was wrong */}
          {wrong && <div className={styles.cross}>✗</div>}
        </li>
      );
    });
  };

  // Function to render correct answers (always show after user answers)
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

  // Make sure each question is unique in the result
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
                    {/* Always show the correct answers after user answers */}
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
            // icon={<img src="src\assets\icons\refresh.svg" alt="Check Icon" style={{ width: '24px', height: '24px' }} />}
            iconPosition="left"
            bold
          />
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
