import React, { useEffect, useContext,useState } from 'react';
import { useQuiz } from '../../../context/QuizContext';
import { convertSeconds } from '../../../utils/helpers';
import styles from './ResultOverview.module.css'; // Import the CSS module
import { AuthContext } from '../../../context/AuthContext';
import { Service } from '../../../axios/config';

const service = new Service();

const saveTest = async (userId, quizTopic, result, totalScore, score) => {
  // console.log('userId:', userId);
  // console.log('quizTopic:', quizTopic);
  // console.log('result:', result);
  // console.log('totalScore:', totalScore);
  // console.log('score:', score);

  const payload = {
    id: userId,
    subjectName: quizTopic,
    questions: result,
    totalMarks: totalScore,
    totalScore: score,
  };

  try {
    const response = await service.SubmitTest(payload);
    testSavedPopup();
    console.log('response:', response);
    return response;
  } catch (error) {
    testFailedPopup();
    console.error('Error while submitting test:', error);
  }
};

//------------------------------------------------------------Test Popups------------------------------------------------------------
//test saved successfully popup
const testSavedPopup = () => {
  toast.success('Test Saved Successfully', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

//test failed to save popup
const testFailedPopup = () => {
  toast.error('Failed to Save Test', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};


const ResultOverview = ({ result }) => {
  const { quizDetails, quizTopic, score, setScore, endTime } = useQuiz();
  const { totalScore } = quizDetails;
  const { userId } = useContext(AuthContext);
  const [hasSubmitted, setHasSubmitted] = useState(false); 

  const totalQuestionAttempted = result.length;

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);

  useEffect(() => {
    // Set the obtained score and save the test even if the score is 0
    setScore(obtainedScore);
  }, [obtainedScore, setScore]);

  useEffect(() => {
    if (!hasSubmitted && userId && quizTopic && totalScore >= 0) {
      // Save test only if it hasn't been submitted yet
      setHasSubmitted(true); // Mark as submitted
      setTimeout(() => {
        saveTest(userId, quizTopic, result, totalScore, obtainedScore);
      }, 1000);
    }
  });

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
