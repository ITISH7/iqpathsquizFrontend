import React, { useEffect, useState } from 'react';
import styles from './QuestionPopUp.module.css';

const QuestionPopUp = ({ isVisible, questionData, uniqueId, onClose, handleCheckboxReview, handleCheckboxSave }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null); 
  const [solvedProblem, setSolvedProblems] = useState
  ({});

  useEffect(() => {
    const storedSolvedProblems = JSON.parse(localStorage.getItem('solvedProblems')) || {};
  }, []);

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

  useEffect(() => {
    if (questionData && questionData.correctAnswers) {
      const correctIndex = questionData.options.findIndex(opt =>
        opt.split(') ')[1]?.trim()?.toLowerCase() === questionData.correctAnswers[0]?.replace("Answer: ", "")?.trim().toLowerCase()
      );
      setCorrectAnswerIndex(correctIndex);
    }
  }, [questionData]);

  // Function to handle option click
  const handleOptionClick = (optionIndex) => {
    if (!questionData.correctAnswers) {
      console.error('Correct answer is undefined');
      return;
    }

    // Determine if the selected option is correct or not
    const isCorrect = optionIndex === correctAnswerIndex;

    setSelectedOptions((prev) => ({
      ...prev,
      [optionIndex]: isCorrect ? 'correct' : 'incorrect',
    }));

    setShowCorrectAnswer(true); // Show correct answer section after selection
  };

  // Function to save question to localStorage based on type (saved/reviewed)
  const saveQuestionToLocalStorage = (type) => {
    const storedData = JSON.parse(localStorage.getItem(type)) || [];
    const questionExists = storedData.some(item => item.id === uniqueId);

    // const questionToSave = {
    //   id: uniqueId,
    //   questionData,
    //   checkboxState,
    //   savedAt: new Date().toISOString(),
    // };

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
    saveQuestionToLocalStorage('savedQuestions', 'Saved'); // Save question as "saved"
    console.log("questionData", questionData);
    handleCheckboxSave(uniqueId, questionData.difficulty, questionData.subjectName); // Pass uniqueId to handleCheckboxSave
    onClose(); // Close the popup
  };

  const handleReviewAndClose = () => {
    saveQuestionToLocalStorage('reviewedQuestions', 'Reviewed'); // Save question as "reviewed"
    handleCheckboxReview(uniqueId, questionData.difficulty, questionData.subjectName); // Pass uniqueId to handleCheckboxReview
    onClose(); // Close the popup
  };

  useEffect(() => {
    if (Object.keys(solvedProblem).length > 0) {
      localStorage.setItem('solvedProblems', JSON.stringify(solvedProblem));
    }
  }, [solvedProblem]);

  if (!isVisible) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent} id={`popup-${uniqueId}`}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.reviewbut} ${styles.popupClose}`}
            onClick={handleReviewAndClose}
          >
            Review
          </button>
          <button
            className={`${styles.savebut} ${styles.popupClose}`}
            onClick={handleSaveAndClose}
          >
            Save & Close
          </button>
        </div>
        <h2 className={styles.popupHeading}>
          {questionData.title || questionData.name || "No Title Available"}
        </h2>
        <div className={styles.popFilters}>
          <p>
            <strong>Topic:</strong>{" "}
            {questionData.topicName || "No Topic Available"}
          </p>
          <p>
            <strong>Difficulty:</strong>{" "}
            {questionData.difficulty || "No Difficulty Provided"}
          </p>
        </div>
        <p className={styles.popupQuestion}>
          <strong>Question:</strong>{" "}
          {questionData.questionContent || "No Question Text Available"}
        </p>
        <div className={styles.popupOptions}>
          {questionData.options.map((option, optionIndex) => (
            <div
              key={optionIndex}
              className={`${styles.option} ${
                selectedOptions[optionIndex] === 'correct'
                  ? styles.correctAnswer
                  : selectedOptions[optionIndex] === 'incorrect'
                  ? styles.wrongAnswer
                  : ''
              } ${showCorrectAnswer && optionIndex === correctAnswerIndex ? styles.correctAnswer : ''}`}
              onClick={() => handleOptionClick(optionIndex)}
            >
              <span>{option}</span>
            </div>
          ))}
        </div>

        {showCorrectAnswer && (
          <>
            <hr className={styles.divider} />
            <div className={styles.correctAnswerSection}>
              <p>
                <strong>Correct Answer(s):</strong>{" "}
                {questionData.correctAnswers[0]?.replace("Answer: ", "") ||
                  "No correct answer available"}
              </p>
              <p>
                <strong>Explanation:</strong>{" "}
                {questionData.explanation || "No explanation available"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionPopUp;
