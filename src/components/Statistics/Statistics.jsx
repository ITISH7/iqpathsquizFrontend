import {
  useContext,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import styles from "./statistics.module.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import DoughnutChart from "../../modals/doughnutGraph/doughnut";
import UtilityStyles from "../../utils/utils.module.css";
import dummyData from "../../modals/doughnutGraph/dummyData.js";
import { formatDate } from "../../utils/date.js";
import BarGraph from "../../modals/barGraph/BarGraph";
import { data, categories } from "../../modals/barGraph/dataBar.js";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Service } from "../../axios/config";

const Statistics = () => {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState("weekly");
  const [direction, setDirection] = useState("right");
  const [thought, setThought] = useState("");

  const {userId} = useContext(AuthContext);

  const service = new Service();

  const getAllCourseProgressGraphData = async (userId) => {
    try {
      const response = await service.CourseProgressGraph(userId);
      console.log("response", response);
    } catch (error) {
      console.error("Error while fetching course progress graph data:", error);
    }
  };

  //fetch the thought of the day
  useEffect(() => {
    fetchThought();
    getAllCourseProgressGraphData(userId);
    // console.log("thought", thought);
  }, []);

  const fetchThought = async () => {
    try {
      const response = await service.GenerateThought();
      // console.log("response thougth", response);
      setThought(response.data.data[0].thought);
    } catch (error) {
      console.error("Error while fetching thought of the day:", error);
    }
  };


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
    window.addEventListener("resize", updateScrollbarHeight);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateScrollbarHeight);
  }, [isLoggedIn]);

  useEffect(() => {
    // Wait for the items to render before proceeding
    const itemsContainer = itemsContainerRef.current;

    if (!itemsContainer) return;

    const thumbsContainer = itemsContainer.parentElement.querySelector(
      `.${styles.thumbs}`
    );

    if (!thumbsContainer) return;

    const items = itemsContainer.querySelectorAll(`.${styles.item}`);

    if (!items.length) return; // Ensure items exist

    // Clear previous thumbs (in case of re-renders)
    thumbsContainer.innerHTML = "";

    // Create thumbs dynamically for each item
    items.forEach((item) => {
      const wrapper = document.createElement("div");
      const label = document.createElement("div");
      const thumb = document.createElement("div");

      wrapper.classList.add(styles.wrapper);
      label.classList.add(styles.label);
      thumb.classList.add(styles.thumb);

      label.innerHTML = item.getAttribute("data-label");

      wrapper.appendChild(label);
      wrapper.appendChild(thumb);

      thumbsContainer.appendChild(wrapper);
    });

    // Ensure the container has a minimum height
    itemsContainer.style.minHeight = "100px"; // Adjust this value if necessary

    // Sync scrollbar with item container
    const handleScroll = () => {
      const scrollTop = itemsContainer.scrollTop;
      const scrollHeight =
        itemsContainer.scrollHeight - itemsContainer.clientHeight;
      const thumbs = document.querySelectorAll(`.${styles.thumb}`);

      thumbs.forEach((thumb, index) => {
        const item = items[index];
        const itemTop = item.offsetTop - scrollTop;
        const thumbTop = (itemTop / scrollHeight) * itemsContainer.clientHeight;

        thumb.style.transform = `translateY(${thumbTop}px)`;
      });
    };

    // Add scroll event listener
    itemsContainer.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      itemsContainer.removeEventListener("scroll", handleScroll);
    };
  }, [
    itemsContainerRef,
    styles.item,
    styles.customScrollbar,
    styles.wrapper,
    styles.label,
    styles.thumb,
    isLoggedIn,
  ]); // Add dependencies

  let today = new Date();

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setDirection(tab === "weekly" ? "left" : "right");
      setActiveTab(tab);
    }
  };

  

  return isLoggedIn ? (
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
                <div  className={styles.thoughtPicture}>
                  <img
                    src="src/assets/ThoughtPi.svg"
                    alt="Thought Picture"
                   
                  />
                </div>
                <div className={styles.thoughtBorder}>
                  <img
                    src="src/assets/thoughtBorder.png"
                    alt="Thought border"
                  />
                  <div className={styles.thoughtStatement}>
                    {/* Raju is kaju, Shyam is pyaaz but you are my favourite laajawab student. Keep it up!  */}
                    {thought}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.progressTrackingContainer}>
            <h1 className={styles.progHeading}>Progress Tracking</h1>
            <div className={styles.progTabs}>
              <div
                className={`${styles.progTab} ${
                  activeTab === "weekly"
                    ? styles.progTabActive
                    : styles.progTabInactive
                }`}
                onClick={() => handleTabClick("weekly")}
              >
                Weekly
              </div>
              <div
                className={`${styles.progTab} ${
                  activeTab === "course"
                    ? styles.progTabActive
                    : styles.progTabInactive
                }`}
                onClick={() => handleTabClick("course")}
              >
                Course
              </div>
            </div>
            <div className={styles.progContentContainer}>
              <TransitionGroup className={styles.progTransitionGroup}>
                {activeTab === "weekly" && (
                  <CSSTransition
                    key="weekly"
                    timeout={300}
                    classNames={{
                      enter:
                        direction === "left"
                          ? styles.progSlideEnterLeft
                          : styles.progSlideEnterRight,
                      enterActive: styles.progSlideEnterActive,
                      exit: styles.progSlideExit,
                      exitActive:
                        direction === "left"
                          ? styles.progSlideExitActiveLeft
                          : styles.progSlideExitActiveRight,
                    }}
                  >
                    <div className={styles.progSlide}>
                      <h2 className={styles.progSubheading}>Weekly Progress</h2>
                      {/* <img
                        src="https://placehold.co/300x200"
                        alt="Weekly progress chart"
                      /> */}
                      {<BarGraph data={data} categories={categories} />}
                    </div>
                  </CSSTransition>
                )}
                {activeTab === "course" && (
                  <CSSTransition
                    key="course"
                    timeout={300}
                    classNames={{
                      enter:
                        direction === "left"
                          ? styles.progSlideEnterLeft
                          : styles.progSlideEnterRight,
                      enterActive: styles.progSlideEnterActive,
                      exit: styles.progSlideExit,
                      exitActive:
                        direction === "left"
                          ? styles.progSlideExitActiveLeft
                          : styles.progSlideExitActiveRight,
                    }}
                  >
                    <div className={styles.progSlide}>
                      <h2 className={styles.progSubheading}>Course Progress</h2>
                      {/* <img
                        src="https://placehold.co/300x200"
                        alt="Course progress chart"
                      /> */}
                      {<BarGraph data={data} categories={categories} />}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>
          </div>
        </div>

        <div className={styles.questionsSolved}>
          <h1 className={styles.questionsSolvedHeading}>Questions Solved</h1>
          <div className={styles.ribbon}>
            <img src="src/assets/PieDesign.svg" alt="Pie Graph Design" />
          </div>

          <div
            className={`${styles.graphBox} ${styles.scrollContainer} ${styles.custom}`}
          >
            <div
              className={styles.customScrollbar}
              style={{ height: `${scrollbarHeight}px` }}
            >
              <div className={styles.thumbs}></div>
            </div>

            <div
              className={`${styles.pieCharts} ${styles.items}`}
              ref={itemsContainerRef}
            >
              <div
                className={`${styles.pieChart} ${styles.item} `}
                data-label="Today"
              >
                <DoughnutChart data={dummyData} centerLabel="17/20" />
              </div>
              <div
                className={`${styles.pieChart} ${styles.item} `}
                data-label="Course 1"
              >
                <DoughnutChart data={dummyData} centerLabel="17/20" />
              </div>
              <div
                className={`${styles.pieChart} ${styles.item} `}
                data-label="Course 2"
              >
                <DoughnutChart data={dummyData} centerLabel="17/20" />
              </div>
              <div
                className={`${styles.pieChart} ${styles.item} `}
                data-label="Today"
              >
                <DoughnutChart data={dummyData} centerLabel="17/20" />
              </div>
              <div
                className={`${styles.pieChart} ${styles.item} `}
                data-label="Course 1"
              >
                <DoughnutChart data={dummyData} centerLabel="17/20" />
              </div>
              <div
                className={`${styles.pieChart} ${styles.item} `}
                data-label="Course 2"
              >
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
              <img
                src="src/assets/ShareProgIcon.svg"
                alt="Share Progress Icon"
                className={styles.shareIconImg}
              />
            </div>
            <button className={styles.shareButtonText}>Share Progress</button>
          </div>
          <Link to="/result">
          <button className={`${styles.updateButton} ${styles.resultButton}`}>Show Result</button>
          </Link>
        </div>
      </div>

      <div className={styles.statsFooter}>
        <img src="src\assets\StatsFooter.svg" alt="Stats Footer Design" />
      </div>
    </div>
  ) : null;
};

export default Statistics;
