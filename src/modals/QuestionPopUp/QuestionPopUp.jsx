import React, { useEffect, useState } from 'react';
import styles from './QuestionPopUp.module.css';

const QuestionPopUp = ({ isVisible, questionData, uniqueId, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

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

  const handleOptionClick = (option, index) => {
    const isCorrect = index === 0;

    setSelectedOptions((prev) => ({
      ...prev,
      [index]: isCorrect ? 'correct' : 'incorrect',
    }));

    setShowCorrectAnswer(true);
  };

  // Function to save the question in localStorage
  const saveQuestionToLocalStorage = (type) => {
    const storedData = JSON.parse(localStorage.getItem(type)) || [];
    const questionExists = storedData.some(item => item.id === uniqueId);

    if (!questionExists) {
      const questionToSave = {
        id: uniqueId,
        questionData,
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem(type, JSON.stringify([...storedData, questionToSave]));
    }
  };

  const handleSaveAndClose = () => {
    saveQuestionToLocalStorage('savedQuestions'); // Save question as "saved"
    onClose(); // Close the popup
  };

  const handleReviewAndClose = () => {
    saveQuestionToLocalStorage('reviewedQuestions'); // Save question as "reviewed"
    onClose(); // Close the popup
  };

  if (!isVisible) return null;

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent} id={`popup-${uniqueId}`}>
        <div className={styles.buttonContainer}>
          <button className={`${styles.reviewbut} ${styles.popupClose}`} onClick={handleReviewAndClose}>
            Review
          </button>
          <button className={`${styles.savebut} ${styles.popupClose}`} onClick={handleSaveAndClose}>
            Save & Close
          </button>
        </div>
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

        {showCorrectAnswer && (
          <>
            <hr className={styles.divider} />
            <div className={styles.correctAnswerSection}>
              <p><strong>Correct Answer(s):</strong> A</p>
              <p><strong>Explanation:</strong> {questionData.explanation || 'No explanation available'}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPopUp;
