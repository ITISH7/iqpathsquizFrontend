import React, { useState,useEffect } from 'react';
// import { AppLogo, StartIcon } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { convertSeconds } from '../../utils/helpers';
import Button from '../ui/Button/index';
import styles from './QuizDetailsScreen.module.css';
import { ScreenTypes } from '../../types/types';
import {Service} from '../../axios/config';

const QuizDetailsScreen = ({subjectName}) => {
  // console.log('subjectName:', subjectName)

  const { selectQuizTopic, setQuestions,questions, quizTopic, setTimer, setResult, setCurrentScreen, quizDetails } = useQuiz();

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails;
  // console.log("selectedQuizTopic kya set hua quiz page me vo ye hai ", quizTopic);


  const [getData, setData] = useState([]);
  // const [quizTopic, setQuizTopic] = useState('');
  // const [questions, setQuestions] = useState([]);
  // const [timer, setTimer] = useState(0);
  // const [result, setResult] = useState([]);


  // useEffect(() => {
  //   getquizQuestion(subjectName);
  //   console.log('subjectName:', subjectName)
  // }, []);

  // const service = new Service();


//   const getquizQuestion = async (subjectName) => {
//     const response = await service.GenerateTestQuestions({subjectName});
//     // console.log('response:', response)
//     setData(response.data.data);
//     console.log('data:', response.data.data)
//     setQuestions(response.data.data);
//     // // selectQuizTopic(subjectName)
//     // console.log('quiz topic: in dropdown', quizTopic)
//     // console.log('quiz topic hona chaiye tha:', subjectName)

    
//   // try {
//   //   const response = await service.GenerateTestQuestions({subjectName});
//   //   console.log('response:', response)  
      
//   //     if (response.status === 200) {
//   //       const { data, totalTime, totalScore } = response.data
        
//   //       selectQuizTopic(subjectName)
//   //       setQuestions(data)
//   //       setTimer(totalTime || 1600);
//   //       setResult([])  // Reset the result
//   //       console.log('Quiz data fetched:', response.data)
//   //       console.log('Questions are:', questions  )
//   //       console.log('quiz topic:', quizTopic)
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching quiz data:', error)
//   //   }
// }

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen);
  };

  return (
    <div className={styles.pageCenter}>
      <div className={styles.centerCardContainer}>
        <h2 className={styles.appTitle}>IQPATHS QUIZ</h2>
        <div className={styles.detailTextContainer}>
          <p className={styles.detailText}>
            Selected Quiz Topic: <span className={styles.highlightedText}>{quizTopic}</span>
          </p>
          <p className={styles.detailText}>
            Total questions to attempt: <span className={styles.highlightedText}>{totalQuestions}</span>
          </p>
          <p className={styles.detailText}>
            Score in total: <span className={styles.highlightedText}>{10}</span>
          </p>
          <p className={styles.detailText}>
            Total time: <span className={styles.highlightedText}>{convertSeconds(10)}</span>
          </p>
          <p className={styles.detailText}>
            Hey Buddy, These are just Mock interview questions prepared for your benefit, so
            <span className={styles.highlightedText}> don't try to cheat </span>. No one is going to judge you by this test, and
            <span className={styles.highlightedText}> we are not going to use your test scores for any kind of exams </span>.
            Just try to do as many questions as you can on your own. At the end, you will get the correct answers for all the questions.
          </p>
          <div className={styles.detailText}>
            <span className={styles.highlightedText}>Please consider a few things while taking the test:</span>
            <ul>
              <li>1. Don’t reload the page, as it will redirect to the home screen again.</li>
              <li>2. Ample time is provided to solve the questions. You cannot go back to correct any answers, so take your time and solve accordingly.</li>
            </ul>
            All the best for your placements!
          </div>
        </div>
        <Button
          text="Start"
          icon={<img src="src\assets\icons\start.svg" alt="start Icon" style={{ width: '24px', height: '24px' }} />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
          className={styles.startButton}
        >
        </Button>
      </div>
    </div>
  );
};

export default QuizDetailsScreen;
