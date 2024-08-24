import React from 'react';
import styles from './statistics.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Statistics = () => {

  const [animate, setAnimate] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
      if (isLoggedIn) {
      setAnimate(true);
      }
      else{
          setAnimate(false);
      }
  }, [isLoggedIn]);


  return (
    (isLoggedIn) ? 
    <div className={styles.statisticsContainer}>
      <div className={styles.statsHeader}>
        <h1 className={styles.heading}>Hello, Shriyansh</h1>
        <img src="src\assets\StatsHeader.svg" alt="Stats Header" />
      </div>
      <div className={styles.cards}>
        
        <img src="src/assets/Courses.svg" alt="Courses" />
       
      </div>

      <div className={styles.content}>
        <div>
            <div className={styles.quoteSection}>
                <img src="src/assets/Thought.svg" alt="Thought" />
            </div>
            <div className={styles.progressTracking}>
                <img src="src/assets/WeeklyStats.svg" alt="Weekly Stats" />
            </div>
        </div>
        <div className={styles.questionsSolved}>
            <img src="src/assets/ProblemSolved.svg" alt="Questions Solved" />
        </div>      
      </div>

      <div className={styles.footer}>
        <Link to="/leaderboard">
          <div className={styles.leaderboardButton}>
              <img src="src\assets\LeaderBoardIcon.svg" alt="Leader Board Icon" />
              <button>Leaderboard</button>
          </div>
        </Link>
        <div  className={styles.shareButton}>
            <img src="src\assets\ShareProgIcon.svg" alt="Share Progress Icon" />
            <button>Share Progress</button>
        </div>
        <button className={styles.updateButton}>Update Socials</button>
      </div>
    </div>
    : null
  );
};

export default Statistics;
