import React from 'react';
import { useQuiz } from '../../../context/QuizContext';
import { convertSeconds } from '../../../utils/helpers';
import { Result } from '../../../types/types';

import styles from './ResultOverview.module.css'; // Import the CSS module

const ResultOverview = ({ result }) => {
  const { quizDetails, endTime } = useQuiz();

  const totalQuestionAttempted = result.length;

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed';

  return (
    <div className={styles.resultOverview}>
      <p>
        You attempted questions: <span className={styles.highlightedText}> {totalQuestionAttempted} </span> /{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Score secured: <span className={styles.highlightedText}> {obtainedScore} </span> /{' '}
        {quizDetails.totalScore}
      </p>
      <p>
        Time Spent: <span className={styles.highlightedText}> {convertSeconds(endTime)} </span>
      </p>
      <p>
        Status: <span className={styles.highlightedText}> {calculateStatus} </span>
      </p>
    </div>
  );
};

export default ResultOverview;
