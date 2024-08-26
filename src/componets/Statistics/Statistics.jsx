import React, { useContext, useEffect, useState } from 'react';
import styles from './statistics.module.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Statistics = () => {
  const [animate, setAnimate] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isLoggedIn]);

  return (
    isLoggedIn ? (
      <div className={styles.statisticsContainer}>
        <div className={styles.statsHeader}>
          <h1 className={styles.heading}>Hello, Shriyansh</h1>
          <img src="src/assets/StatsHeader.svg" alt="Stats Header" />
        </div>
        <div className={styles.courses}>
          <div className={`${styles.card} ${styles.cardPurple}`}></div>
          <div className={`${styles.card} ${styles.cardYellow}`}></div>
          <div className={`${styles.card} ${styles.cardBlue}`}></div>
          <div className={`${styles.card} ${styles.cardGreen}`}></div>
        </div>
        <div className={styles.cards}>
          {/* <img src="src/assets/Courses.svg" alt="Courses" /> */}
        </div>

        <div className={styles.content}>
          <div className={styles.quoteAndProgress}>
            <div className={styles.quoteSection}>
              <p>14th Aug, 2024</p>
              {/* <img src="src/assets/Thought.svg" alt="Thought" /> */}
            </div>
            <div className={styles.progressTracking}>
              <h1 className={styles.progHeading}>Progress Tracking</h1>
              <div className={styles.progBar}>
                <p>Weekly Progress</p>
                <img src="src/assets/ProgBar.png" alt="Progress Bar Chart" />
              </div>
              <div className={styles.progPie}>
                <img src="src/assets/ProgPie.png" alt="Progress Pie Chart" />
              </div>
            </div>
          </div>
          <div className={styles.questionsSolved}>
            <h1 className={styles.questionsSolvedHeading}>Questions Solved</h1>
            <div className={styles.ribbon}>
              <img src="src/assets/PieDesign.svg" alt="Pie Graph Design"/>
            </div>
            <div className={styles.pieCharts}>
              <div className={styles.pieChart}>
                <img src="src/assets/Pie1.png" alt="Pie Chart 1" />
                <p>Today</p>
              </div>
              <div className={styles.pieChart}>
                <img src="src/assets/Pie2.png" alt="Pie Chart 2" />
                <p>Course 1</p>
              </div>
              <div className={styles.pieChart}>
                <img src="src/assets/Pie3.png" alt="Pie Chart 3" />
                <p>Course 2</p>
              </div>
              {/* <div className={styles.legend}>
                <div>
                  <span className={styles.easy}></span> Easy
                </div>
                <div>
                  <span className={styles.medium}></span> Medium
                </div>
                <div>
                  <span className={styles.hard}></span> Hard
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.statsFooter}>
            <img src="src\assets\StatsFooter.svg" alt="Stats Footer Design" />
          </div>
          <div className={styles.footerButtons}>
            <Link to="/leaderboard">
              <div className={styles.leaderboardButton}>
                <img src="src/assets/LeaderBoardIcon.svg" alt="Leader Board Icon" />
                <button>Leaderboard</button>
              </div>
            </Link>
            <div className={styles.shareButton}>
              <img src="src/assets/ShareProgIcon.svg" alt="Share Progress Icon" />
              <button>Share Progress</button>
            </div>
            <button className={styles.updateButton}>Update Socials</button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Statistics;
