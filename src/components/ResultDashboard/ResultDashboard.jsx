import React, { useContext, useState, useEffect } from "react";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styles from "./ResultDashboard.module.css";
import StreakHeatMap from "../../modals/StreakHeatMap/StreakHeatMap";
import { Link } from "react-router-dom";
import NightingaleChart from "../../modals/NightingaleChart/NightingaleChart";
import AddMore from "../../modals/AddMore/AddMore";
import { Service } from "../../axios/config";
import { AuthContext } from "../../context/AuthContext";
import { purple } from "@mui/material/colors";
import data from "../../modals/NightingaleChart/data";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [streak, setStreak] = useState(5);
  const [results, setResults] = useState([]);
  const [isAddMoreOpen, setIsAddMoreOpen] = useState(false);
  const [clickedCardPosition, setClickedCardPosition] = useState(null);
  const [AccuracyData, setAccuracyData] = useState([]);

  const service = new Service();
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    getResults(userId);
  }, [userId]);

  //get data for the accuracy pie chart
  const getAccuracyData = async () => {
    try {
      const response = await service.AccuracyPieChart({ userId });

      // Process the response to match the required format
      const processedData = response.data.data
        .filter((item) => item.totalMarksEarned > 0)
        .map((item) => {
          return {
            value: (item.totalMarksEarned / item.totalMarksAlloted) * 100, // or any custom calculation like percentage
            name: item.subjectName,
          };
        });

      setAccuracyData(processedData);
      // console.log('Processed Data:', processedData);

      return processedData;
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getAccuracyData();
    // console.log("Accuracy Data:", AccuracyData);
  }, [userId]);

  const handleCardClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    setClickedCardPosition({ top: rect.top, left: rect.left + rect.width / 2 });
    setIsAddMoreOpen(true);

    setTimeout(() => {
      setIsAddMoreOpen(false);
    }, 10000);
  };

  // const closeAddMore = () => {
  //   setIsAddMoreOpen(false);
  // };

  const getResults = async (id) => {
    // console.log("result page ki id:", id);
    try {
      const response = await service.GetAllSubjectResult(id);
      setResults(response.data.data);
      // console.log("response:", response);
      return response.data;
    } catch (error) {
      console.log("error:", error);
    }
  };

  const cardsColors = [
    { cardColor: "#91D5FF", squareColor: "#61B1F8" }, // Blue Card
    { cardColor: "#D3ADF7", squareColor: "#B46FE1" }, // Purple Card
    { cardColor: "#FFE58F", squareColor: "#FFC54D" }, // Yellow Card
    { cardColor: "#85E295", squareColor: "#47C65D" }, // Green Card
  ];

  const streakData = [
    { date: "2024-10-01", streak: 3 },
    { date: "2024-10-02", streak: 8 },
    { date: "2024-10-03", streak: 2 },
    { date: "2024-10-04", streak: 9 },
    { date: "2024-10-05", streak: 0 },
    { date: "2024-10-06", streak: 4 },
    { date: "2024-10-07", streak: 5 },
    { date: "2024-10-08", streak: 0 },
    { date: "2024-10-10", streak: 1 },
    { date: "2024-10-10", streak: 7 },
    { date: "2024-10-11", streak: 2 },
    { date: "2024-10-12", streak: 0 },
    { date: "2024-10-13", streak: 2 },
    { date: "2024-10-14", streak: 3 },
    { date: "2024-10-15", streak: 6 },
    { date: "2024-10-16", streak: 4 },
    { date: "2024-10-17", streak: 5 },
    { date: "2024-10-18", streak: 1 },
    { date: "2024-10-19", streak: 8 },
    { date: "2024-10-20", streak: 2 },
    { date: "2024-10-21", streak: 7 },
    { date: "2024-10-22", streak: 0 },
    { date: "2024-10-23", streak: 0 },
    { date: "2024-10-24", streak: 0 },
    { date: "2024-10-25", streak: 6 },
    { date: "2024-10-26", streak: 2 },
    { date: "2024-10-27", streak: 0 },
    { date: "2024-10-28", streak: 3 },
    { date: "2024-10-29", streak: 7 },
    { date: "2024-10-30", streak: 2 },
    { date: "2024-10-01", streak: 6 },
  ];

  const getTileClass = ({ date }) => {
    const dateString = date.toISOString().split("T")[0];
    const level = progressData[dateString] || 0;

    if (level === 5) return styles.progressLevel5;
    if (level === 4) return styles.progressLevel4;
    if (level === 3) return styles.progressLevel3;
    if (level === 2) return styles.progressLevel2;
    if (level === 1) return styles.progressLevel1;
    return styles.progressLevel0;
  };

  const user = {
    courses: ["DSA", "APTITUDE", "QUANT", "REASONING"],
  };

  return (
    <>
      <div className={styles.outer}>
        <div className={styles.container}>
          <div className={styles.rightContainer}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search"
              />
              <button className={styles.filterButton}>
                <img src="src/assets/FilterIcon.svg" alt="Filter Button" />
                Filters
              </button>
            </div>
            <div className={styles.sheets}>
              {/* Check if results is not empty before mapping */}
              {results.length > 0 ? (
                results.map((card, index) => (
                  <div key={index} className={styles.card} style={{
                    backgroundColor:
                      cardsColors[index % cardsColors.length].cardColor,
                  }}>
                    <div className={styles.cardContent}>
                      <div
                        className={styles.square}
                        style={{
                          backgroundColor:
                            cardsColors[index % cardsColors.length].squareColor,
                        }}
                      ></div>
                      <div className={styles.progress}>
                        <div className={styles.title}>
                          {card} SHEET PROGRESS
                        </div>
                        <div className={styles.progressBarContainer}>
                          <div
                            className={styles.progressBar}
                            style={{
                              width: 150,
                              backgroundColor:
                                cardsColors[index % cardsColors.length].squareColor,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={{
                        pathname: "/result-next",
                        state: { card },
                      }}
                    >
                      <div className={styles.arrowContainer}>
                        <div
                          className={styles.arrow}
                          style={{ backgroundColor: card.squareColor }}
                        >
                          &gt;
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No results available.</p> // Fallback if no results are fetched
              )}
              {/* Add New Sheet Button */}
              <div className={styles.addCard} onClick={handleCardClick}>
                <div className={styles.addIcon}>+</div>
                {isAddMoreOpen && (
                  <AddMore
                    position={clickedCardPosition}
                    onClose={() => setIsAddMoreOpen(false)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.leftContainer}>
            <div className={styles.calendarSection}>
              <div className={styles.spiral}>
                <img src="src\assets\spiral.svg" alt="Spiral" />
              </div>
              <h3 className={styles.calendarTitle}>My Progress</h3>
              <StreakHeatMap streakData={streakData} />
              <div className={styles.streak}>
                {streak} days{" "}
                <span role="img" aria-label="fire">
                  🔥
                </span>
              </div>
            </div>
            <div className={styles.accuracySection}>
              <div className={styles.accuracyTitle}>Accuracy</div>
              <div className={styles.accuracyContent}>
                {AccuracyData.length === 0 ? (
                  <div>Loading...</div>
                ) : (
                  <NightingaleChart data={AccuracyData} />
                )}
              </div>
            </div>
            <div className={styles.sheetsSection}>
              <div
                className={styles.batchCard}
                style={{ backgroundColor: "#E7D9FF" }}
              >
                <div className={styles.ribbon}>
                  <img src="src\assets\Batch.svg" alt="Batch" />
                </div>
                <div className={styles.wellDone}>
                  <img src="src\assets\WellDone.svg" alt="Well Done" />
                </div>
                <div className={styles.sheetTitle}>DSA SHEET</div>
                <div className={styles.progress}>
                  <div className={styles.progressContainer}>
                    <div
                      className={styles.Bar}
                      style={{ backgroundColor: "#B46FE1", width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className={styles.batchCard}
                style={{ backgroundColor: "#FFE4AC" }}
              >
                <div className={styles.ribbon}>
                  <img src="src\assets\Batch.svg" alt="Batch" />
                </div>
                <div className={styles.wellDone}>
                  <img src="src\assets\WellDone.svg" alt="Well Done" />
                </div>
                <div className={styles.sheetTitle}>DSA SHEET</div>
                <div className={styles.progress}>
                  <div className={styles.progressContainer}>
                    <div
                      className={styles.Bar}
                      style={{ backgroundColor: "#FFC54D", width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Add more cards here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
