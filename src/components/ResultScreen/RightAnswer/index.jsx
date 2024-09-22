import React from 'react';
import styles from './RightAnswer.module.css'; // Import the CSS module

const RightAnswer = ({ correctAnswers, choices }) => {
  return (
    <p className={styles.rightAnswerContainer}>
      {`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `}
      {correctAnswers.map((item, index) => {
        const label = String.fromCharCode(65 + choices.indexOf(item));

        return (
          <span key={index} className={styles.highlightedText}>
            {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
          </span>
        );
      })}
    </p>
  );
};

export default RightAnswer;

