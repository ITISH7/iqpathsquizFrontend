import React, { useEffect, useState } from 'react';
import styles from './QuestionPopUp.module.css';

const QuestionPopUp = ({ isVisible, questionData, uniqueId,onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // To track when to display correct answer

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  // useEffect(() => {
  //   selectedOptions(null);
  //   setShowCorrectAnswer(false);
  // }, [questionData]);

  // const correctAnswerIndex = questionData.correctAnswerIndex;

  const handleOptionClick = (option, index) => {
    const isCorrect = index === 0;
    // const isCorrect = questionData.correctAnswers.includes(option);

    setSelectedOptions((prev) => ({
      ...prev,
      [index]: isCorrect ? 'correct' : 'incorrect'
    }));

    setShowCorrectAnswer(true); // Show the correct answer and explanation once any option is clicked
  };

  if (!isVisible) return null;

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent} id={`popup-${uniqueId}`}>
        <button className={styles.popupClose} onClick={onClose}>Close</button>
        <h2 className={styles.popupHeading}>{questionData.name}</h2>
        <div className={styles.popFilters}>
          <p><strong>Topic:</strong> {questionData.topic}</p>
          <p><strong>Difficulty:</strong> {questionData.difficulty}</p>
        </div>
        <p className={styles.popupQuestion}><strong>Question:</strong> {questionData.question}</p>
        <div className={styles.popupOptions}>
          {questionData.options.map((option, index) => (
            <div
              key={index}
              className={`${styles.option} ${
                selectedOptions[index] === 'correct'
                  ? styles.correct
                  : selectedOptions[index] === 'incorrect'
                  ? styles.incorrect
                  : ''
              }`}
              onClick={() => handleOptionClick(option, index)}
            >
              <span><strong>{optionLetters[index]}:</strong> {option}</span>
            </div>
          ))}
        </div>

        {/* Render the line and correct answer if any option is clicked */}
        {showCorrectAnswer && (
          <>
            <hr className={styles.divider} /> {/* Line after the options */}
            <div className={styles.correctAnswerSection}>
              <p><strong>Correct Answer(s):</strong>
              {/* {optionLetters[correctAnswerIndex]}: {questionData.options[correctAnswerIndex]} */}
              A
              </p>
              <p><strong>Explanation:</strong> {questionData.explanation || 'No explanation available'}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPopUp;
