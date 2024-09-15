import { useContext, useEffect, useState, useRef, useLayoutEffect } from 'react';
import styles from './statistics.module.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import DoughnutChart from '../../modals/doughnutGraph/doughnut';
import UtilityStyles from '../../utils/utils.module.css';
import dummyData from '../../modals/doughnutGraph/dummyData.js';
import { formatDate } from '../../utils/date.js';
import BarGraph from '../../modals/barGraph/BarGraph';
import {data, categories} from '../../modals/barGraph/dataBar.js'

const Statistics = () => {
  const [animate, setAnimate] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const itemsContainerRef = useRef(null);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);

  useEffect(() => {
    if (isLoggedIn) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    // Function to update the scrollbar height based on items' height
    const updateScrollbarHeight = () => {
      if (itemsContainerRef.current) {
        const itemsHeight = itemsContainerRef.current.scrollHeight;
        setScrollbarHeight(itemsHeight);
      }
    };

    // Update on load
    updateScrollbarHeight();

    // Update when window is resized
    window.addEventListener('resize', updateScrollbarHeight);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', updateScrollbarHeight);
  }, []);
 
useLayoutEffect(() => {
    // Wait for the items to render before proceeding
    const itemsContainer = itemsContainerRef.current;

    if (!itemsContainer) return;

    const thumbsContainer = itemsContainer.parentElement.querySelector(`.${styles.thumbs}`);
    
    if (!thumbsContainer) return;

    const items = itemsContainer.querySelectorAll(`.${styles.item}`);
    
    if (!items.length) return; // Ensure items exist

    // Clear previous thumbs (in case of re-renders)
    thumbsContainer.innerHTML = '';

    // Create thumbs dynamically for each item
    items.forEach((item) => {
        const wrapper = document.createElement('div');
        const label = document.createElement('div');
        const thumb = document.createElement('div');

        wrapper.classList.add(styles.wrapper);
        label.classList.add(styles.label);
        thumb.classList.add(styles.thumb);

        label.innerHTML = item.getAttribute('data-label');

        wrapper.appendChild(label);
        wrapper.appendChild(thumb);

        thumbsContainer.appendChild(wrapper);
    });

    // Ensure the container has a minimum height
    itemsContainer.style.minHeight = '100px'; // Adjust this value if necessary

    // Sync scrollbar with item container
    const handleScroll = () => {
        const scrollTop = itemsContainer.scrollTop;
        const scrollHeight = itemsContainer.scrollHeight - itemsContainer.clientHeight;
        const thumbs = document.querySelectorAll(`.${styles.thumb}`);

        thumbs.forEach((thumb, index) => {
            const item = items[index];
            const itemTop = item.offsetTop - scrollTop;
            const thumbTop = (itemTop / scrollHeight) * itemsContainer.clientHeight;

            thumb.style.transform = `translateY(${thumbTop}px)`;
        });
    };

    // Add scroll event listener
    itemsContainer.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
        itemsContainer.removeEventListener('scroll', handleScroll);
    };
}, [itemsContainerRef, isLoggedIn]); // Add dependencies



  let today = new Date();

  return (
    isLoggedIn ? (
      <div className={styles.statisticsContainer}>
        <div className={styles.statsHeader}>
          <h1 className={styles.heading}>Hello, Shriyansh</h1>
          <img src="src/assets/StatsHeader.svg" alt="Stats Header" />
        </div>
        <div className={styles.courses}>
          <div className={`${styles.card} ${styles.cardPurple}`}>
            <div className={styles.comingSoon}>Coming Soon...</div>
          </div>
          <div className={`${styles.card} ${styles.cardYellow}`}>
            <div className={styles.comingSoon}>Coming Soon...</div>
          </div>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.comingSoon}>Coming Soon...</div>
          </div>
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <div className={styles.comingSoon}>Coming Soon...</div>
          </div>
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
              {/* <div className={styles.progPie}>
               <WeaklyGraph  value={8.3} maxValue={10} />
              </div> */}
            </div>
          </div>

          <div className={styles.questionsSolved}>
            <h1 className={styles.questionsSolvedHeading}>Questions Solved</h1>
            <div className={styles.ribbon}>
              <img src="src/assets/PieDesign.svg" alt="Pie Graph Design"/>
            </div>


            <div className={`${styles.graphBox} ${styles.scrollContainer}`}>

              <div className={styles.customScrollbar} style={{ height: `${scrollbarHeight}px` }}>
                  <div className={styles.thumbs}></div>
              </div>
    
              <div className={`${styles.pieCharts} ${styles.items}`} ref={itemsContainerRef}>
                <div className={`${styles.pieChart} ${styles.item} `} data-label="Today">
                  <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={`${styles.pieChart} ${styles.item} `} data-label="Course 1">
                  <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={`${styles.pieChart} ${styles.item} `} data-label="Course 2">
                <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={`${styles.pieChart} ${styles.item} `} data-label="Today">
                  <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={`${styles.pieChart} ${styles.item} `} data-label="Course 1">
                  <DoughnutChart data={dummyData} centerLabel="17/20" />
                </div>
                <div className={`${styles.pieChart} ${styles.item} `} data-label="Course 2">
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
