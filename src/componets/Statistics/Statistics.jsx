import React, { useContext, useEffect, useState } from 'react';
import styles from './statistics.module.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import DoughnutChart from '../../modals/doughnutGraph/doughnut';
import BarGraph from '../../modals/barGraph/barGraph'
import {data, categories} from '../../modals/barGraph/dataBar.js'

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
              {/* <p>14th Aug, 2024</p> */}
              <img src="src\assets\Thought.png" alt="" />
            </div>
            <div className={styles.progressTracking}>
              <div className={styles.progBar}>
                <h1 className={styles.progHeading}>Progress Tracking</h1>
                <div className={styles.barGraph}>
                  <p>Weekly Progress</p>
                  <BarGraph data={data} categories={categories} />
                </div>
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
            <div className={styles.graphBox}>
              {/* <div className={styles.courseName}>
                  <p >Today</p>
                  <p>Course 1</p>
                  <p>Course 2</p>
              </div> */}
              <div className={styles.pieCharts}>
                <div className={styles.pieChart}>
                  <DoughnutChart />
                </div>
                <div className={styles.pieChart}>
                  <DoughnutChart />
                </div>
                <div className={styles.pieChart}>
                <DoughnutChart />
                </div>
              </div>
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
                <img src="src\assets\fire.gif" alt="Leader Board Icon" />
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