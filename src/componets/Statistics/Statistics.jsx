import React from 'react';
import styles from './statistics.module.css';

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statsHeader}>
        <h1 className={styles.heading}>Hello, Shriyansh</h1>
        <img src="src\assets\StatsHeader.svg" alt="Stats Header" />
      </div>
      <div className={styles.cards}>
        {/* Example card with image */}
        <img src="src/assets/Courses.svg" alt="Courses" />
        {/* Add more cards as needed */}
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
        <div className={styles.leaderboardButton}>
            <img src="src\assets\LeaderBoardIcon.svg" alt="Leader Board Icon" />
            <button>Leaderboard</button>
        </div>
        <div  className={styles.shareButton}>
            <img src="src\assets\ShareProgIcon.svg" alt="Share Progress Icon" />
            <button>Share Progress</button>
        </div>
        <button className={styles.updateButton}>Update Socials</button>
      </div>
    </div>
  );
};

export default Statistics;
