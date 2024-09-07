import React, { useEffect } from 'react';
import styles from './QuestionPopUp.module.css';

const QuestionPopUp = ({ isVisible, questionData, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      // Disable background scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable background scroll
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount or visibility change
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.popupClose} onClick={onClose}>Close</button>
        <h2 className={styles.popupHeading}>{questionData.name}</h2>
        <p className={styles.popupQuestion}><strong>Question:</strong> {questionData.question}</p>
        <p className={styles.popupOptions}><strong>Options:</strong> {questionData.options.join(', ')}</p>
        <p className={styles.popupExplain}><strong>Explanation:</strong> {"No explanation yet"}</p>
        <div className={styles.popFilters}>
          <p><strong>Topic:</strong> {questionData.topic}</p>
          <p><strong>Difficulty:</strong> {questionData.difficulty}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionPopUp;
