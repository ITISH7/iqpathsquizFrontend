import  { useContext } from 'react';
import styles from './ProgressBar.module.css';
import utilityStyle from '../../utils/utils.module.css';
import { AuthContext } from '../../context/AuthContext';

function ProgressBar() {
  const { progress } = useContext(AuthContext);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper} ${utilityStyle.container}`}>
        <div className={styles.progressContainer}>
          <div className={styles.progressText}>
            <p>Your Progress: {progress}/191</p>
            <p>{progress}% Completed</p>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressBarProgress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProgressBar;
