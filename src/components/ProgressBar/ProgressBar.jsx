import  { useContext, useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';
import utilityStyle from '../../utils/utils.module.css';
import { AuthContext } from '../../context/AuthContext';
import { Service } from "../../axios/config";



function ProgressBar() {
  // const { progress } = useContext(AuthContext);
  const service = new Service();
  const { userId } = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalAtempt, setTotalAtempt] = useState(0);
  // console.log("userId", userId);
  

  const getProgress = async (userId) => {
    try {
      const response = await service.GetProgress(userId);
      const data = (response.data.data);
      // console.log("ProgressBar :: getProgress :: data", data);
      setTotalAtempt(data.totalAtempt);
      setTotalQuestions(data.totalGivenQue);

        if (data.totalGivenQue > 0) {
        const progress = Math.floor((data.totalAtempt / data.totalGivenQue) * 100);
        setProgress(progress);
      } else {
        setProgress(0); // Set progress to 0 if there are no questions
      }
    } catch (error) {
      console.log("ProgressBar :: getProgress :: error", error);
    }
  };

  useEffect(() => {
    getProgress(userId);
  }
  , [progress]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper} ${utilityStyle.container}`}>
        <div className={styles.progressContainer}>
          <div className={styles.progressText}>
            <p>Your Progress: {totalAtempt}/{totalQuestions}</p>
            <p>{progress}% Completed</p>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressBarProgress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* <div className={styles.buttonContainer}>
          <div className={styles.icon}>
            <img src="src/assets/Button.svg" alt="Button Icon" />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Show Revision</button>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default ProgressBar;
