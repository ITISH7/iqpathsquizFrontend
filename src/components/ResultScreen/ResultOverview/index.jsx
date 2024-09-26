import React, {useEffect, useContext} from 'react';
import { useQuiz } from '../../../context/QuizContext';
import { convertSeconds } from '../../../utils/helpers';
import styles from './ResultOverview.module.css'; // Import the CSS module
import { AuthContext } from '../../../context/AuthContext';
import { Service } from '../../../axios/config';

const service = new Service();

const saveTest = async (userId, quizTopic, result, totalScore, score) => {
  console.log('userId:', userId);
  console.log('quizTopic:', quizTopic);
  console.log('result:', result);
  console.log('totalScore:', totalScore);
  console.log('score:', score);
  
  // Prepare the payload according to the API structure
  const payload = {
    id: userId, // Assuming this is the ID to send
    subjectName: quizTopic, // Assuming quizTopic corresponds to subjectName
    questions: result, // Assuming result is the list of questions
    totalMarks: totalScore, // Assuming totalScore represents totalMarks
    totalScore: score // score represents the final score
  };

  try {
    const response = await service.SubmitTest(payload);
    console.log('response:', response);
    return response;
  } catch (error) {
    console.error('Error while submitting test:', error);
  }
};


const ResultOverview = ({ result }) => {
  const { quizDetails,quizTopic, score, endTime, setScore } = useQuiz();
  const { totalScore } = quizDetails;
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      saveTest(userId, quizTopic, result, totalScore, score);
    }, 1000);
  }, []);

  const totalQuestionAttempted = result.length;

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0);

  setScore(obtainedScore);

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
