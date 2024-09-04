import React, { useContext, useEffect, useState } from 'react';
import styles from './statistics.module.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import DoughnutChart from '../../modals/doughnutGraph/doughnut';
// import BarGraph from '../../modals/barGraph/barGraph'
import {data, categories} from '../../modals/barGraph/dataBar.js'
import UtilityStyles from '../../utils/utils.module.css';
import WeaklyGraph from '../../modals/weeklyGraph/weeklyGraph.jsx';
import dummyData from '../../modals/doughnutGraph/dummyData.js';
import { formatDate } from '../../utils/date.js';
import BarGraph from '../../modals/barGraph/BarGraph';

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

  let today = new Date();

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

        <div className={`${styles.content} ${UtilityStyles.container}`}>
          <div className={styles.quoteAndProgress}>
            <div className={styles.quoteSection}>
              <div className={styles.thoughtBackground}>
                <p className={styles.thoughtPara}>{formatDate(today)}</p>
                <div className={styles.thoughtContainer}>
                  <img src="src/assets/ThoughtPi.svg" alt="Thought Picture" className={styles.thoughtPicture} />
                  <img src="src/assets/ThoughtSc.png" alt="Thought Statement" className={styles.thoughtStatement} />
                </div>
              </div>
            </div>
            <div className={styles.progressTracking}>
              <div className={styles.progBar}>
                <h1 className={styles.progHeading}>Progress Tracking</h1>
                <div className={styles.barGraph}>
                  <p>Weekly Progress</p>
                  { <BarGraph data={data} categories={categories} /> }
                </div>
              </div>
              <div className={styles.progPie}>
               <WeaklyGraph  value={8.3} maxValue={10} />
              </div>
            </div>
          </div>

          <div className={styles.questionsSolved}>
            <h1 className={styles.questionsSolvedHeading}>Questions Solved</h1>
            <div className={styles.ribbon}>
              <img src="src/assets/PieDesign.svg" alt="Pie Graph Design"/>
            </div>
            <div className={styles.graphBox}>
    
              <div className={styles.pieCharts}>
                <div className={`${styles.pieChart} ${styles.scrollContainer}`}>
                  <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={styles.pieChart}>
                  <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={styles.pieChart}>
                <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
              </div>
            </div>
          </div>


        
        </div>

        <div className={styles.footer}>
          
          <div className={styles.footerButtons}>
            <Link to="/leaderboard">
              <div>
                <button className={styles.leaderboardButton}>
                <img src="src\assets\fire.gif" alt="Leader Board Icon" />
                <p>Leaderboard</p>
                </button>
              </div>
            </Link>
            <div className={styles.shareButton}>
              <div className={styles.shareIcon}>
                <img src="src/assets/ShareProgIcon.svg" alt="Share Progress Icon"  className={styles.shareIconImg}/>
              </div>
              <button className={styles.shareButtonText}>Share Progress</button>
            </div>
            <button className={styles.updateButton}>Update Socials</button>
          </div>
         
          
        </div>

        <div className={styles.statsFooter}>
            <img src="src\assets\StatsFooter.svg" alt="Stats Footer Design" />
        </div>


      </div>
    ) : null
  );
};

export default Statistics;
