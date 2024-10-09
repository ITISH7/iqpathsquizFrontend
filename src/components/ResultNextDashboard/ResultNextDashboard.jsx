import React, { useState, useContext, useEffect, useRef } from "react";
import styles from "./ResultNextDashboard.module.css";
import { Service } from "../../axios/config";
import { AuthContext } from "../../context/AuthContext";
import { use } from "echarts";
import { useLocation } from 'react-router-dom';

const cardsData = [
  {
    squareColor: "#FF9800",
    status: "DONE",
    statusClass: "done",
    statusColor: "#C2F8CB",
    date: "8TH SEPT, SUNDAY 2024",
  }, // Orange Card
  {
    squareColor: "#8F3ED8",
    status: "In Progress",
    statusClass: "inProgress",
    statusColor: "#fdd174",
    date: "9TH SEPT, MONDAY 2024",
  }, // Purple Card
  {
    squareColor: "#307C34",
    status: "In Progress",
    statusClass: "inProgress",
    statusColor: "#fdd174",
    date: "10TH SEPT, TUESDAY 2024",
  }, // Green Card
  {
    squareColor: "#E36375",
    status: "DONE",
    statusClass: "done",
    statusColor: "#C2F8CB",
    date: "11TH SEPT, WEDNESDAY 2024",
  }, // Red Card
];

const ResultNextDashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [testDetails, setTestDetails] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [sortByDate, setSortByDate] = useState("");
  const [sortByType, setSortByType] = useState("");
  const [sortByDifficulty, setSortByDifficulty] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterDirection, setFilterDirection] = useState("");
  const [filterPosition, setFilterPosition] = useState({}); // To store position dynamically
  const filterRef = useRef(null);
  const filterOptionRef = useRef(null);
  const location = useLocation();
  const subject = location.state?.subject;

  const service = new Service();
  const { userId } = useContext(AuthContext);

  const getSingleTestResults = async (id, subjectName) => {
    try {
      const response = await service.GetSubjectResult(id, subjectName);
      console.log("response: in resutl preview ", response);

      const sortedData = response.data.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      console.log("sortedData:", sortedData);
      setTestDetails(sortedData);
      setQuestions(sortedData[0].questions);
      console.log("questions:", questions);
      return response.data;
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getSingleTestResults(userId, "Aptitude");
    console.log("userId:", userId);
  }, []);

  const openModal = (card) => {
    document.body.style.overflow = "hidden";
    setSelectedCard(card);
    setQuestions(card.questions || []);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setSelectedCard(null);
    setQuestions([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Array of months and suffixes for the day
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ];
    const day = date.getDate();
    const daySuffix = (day) => {
      if (day > 3 && day < 21) return "TH";
      switch (day % 10) {
        case 1:
          return "ST";
        case 2:
          return "ND";
        case 3:
          return "RD";
        default:
          return "TH";
      }
    };

    const dayWithSuffix = `${day}${daySuffix(day)}`;
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = date
      .toLocaleString("en-US", { weekday: "long" })
      .toUpperCase();

    return `${dayWithSuffix} ${month}, ${weekday} ${year}`;
  };

  useEffect(() => {
    const sortedData = [...testDetails];

    if (sortByDate === "asc") {
      sortedData.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    else if (sortByDate === "desc") {
      sortedData.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortByType) {
      sortedData.sort((a,b) => (a.type > b.type ? 1 : -1));
    }

    if (sortByDifficulty) {
      sortedData.sort((a, b) => {
        const difficultyOrder = { easy: 1, medium: 2, hard: 3};
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      });
    }

    setTestDetails(sortedData);
  }, [sortByDate, sortByType, sortByDifficulty]);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
    setActiveFilter("");
  };

  const handleFilterClick = (filter, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX + rect.width 
    };
    setFilterPosition(position);

    if (activeFilter === filter) {
      setActiveFilter("");
    }
    else {
      setActiveFilter(filter);
    }
  };

  const handleOptionSelect = (filterName, direction) => {
    setSelectedFilter(filterName); // Update selected filter name
    setFilterDirection(direction); // Set sorting direction
    setActiveFilter(""); // Close filter options
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ( 
        filterRef.current && !filterRef.current.contains(event.target) && filterOptionRef.current && !filterOptionRef.current.contains(event.target)
      ) {
        setActiveFilter("");
      }
    };

    if (isFilterOpen || activeFilter) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFilterOpen, activeFilter]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={`${styles.headerButton} ${styles.all}`}>
            All
          </button>
          <button className={`${styles.headerButton} ${styles.progress}`}>
            In Progress
          </button>
          <button className={`${styles.headerButton} ${styles.complete}`}>
            Completed
          </button>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search"
            />
            <button className={styles.filterButton} onClick={toggleFilter}>
            {selectedFilter && filterDirection ? `${selectedFilter} ${filterDirection}` : "Filters"} 
              <span className={`${styles.arrowIcon} ${isFilterOpen ? styles.rotate : ""}`}>
                <img
                  src={isFilterOpen ? "src/assets/angle-up-white.svg" : "src/assets/angle-down-white.svg"}
                  alt="Arrow Icon"
                />
              </span>
            </button>
          {isFilterOpen && (
            <div className={styles.filterDropdown} ref={filterRef}>
              <div
                className={styles.filterOption}
                onClick={(event) => handleFilterClick("date", event)}
                >
                  Sort by Date
                  <img src="src\assets\angle-right.svg" alt="right arrow" />
                </div>

                <div
                  className={styles.filterOption}
                  onClick={(event) => handleFilterClick("type", event)}
                >
                  Sort by Type 
                  <img src="src\assets\angle-right.svg" alt="right arrow" />
                </div>

                <div
                  className={styles.filterOption}
                  onClick={(event) => handleFilterClick("difficulty", event)}
                >
                  Sort by Difficulty 
                  <img src="src\assets\angle-right.svg" alt="right arrow" />
                </div>
            </div>
          )}
          </div>
          {activeFilter === "date" && (
            <div className={`${styles.filterOptionsRight} ${styles.positionRight}`}
            style={{ top: `${filterPosition.top}px`, left: `${filterPosition.left}px` }}
            ref={filterOptionRef}>
              <div onClick={() => setSortByDate("asc")}>
                Ascending 
              </div>
              <div onClick={() => setSortByDate("desc")}>
                Descending 
              </div>
            </div>
          )}

          {activeFilter === "type" && (
            <div className={`${styles.filterOptionsRight} ${styles.positionRight}`}
            style={{ top: `${filterPosition.top}px`, left: `${filterPosition.left}px` }}
            ref={filterOptionRef}>
              <div onClick={() => setSortByDate("type1")}>
                Complete Test  
              </div>
              <div onClick={() => setSortByDate("type 2")}>
                Topic-wise Test  
              </div>
            </div>
          )}

          {activeFilter === "difficulty" && (
            <div className={`${styles.filterOptionsRight} ${styles.positionRight}`}
            style={{ top: `${filterPosition.top}px`, left: `${filterPosition.left}px` }}
            ref={filterOptionRef}>
              <div onClick={() => setSortByDate("easy")}>
                Easy  
              </div>
              <div onClick={() => setSortByDate("medium")}>
                Medium  
              </div>
              <div onClick={() => setSortByDifficulty("hard")}>
                Hard 
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        {testDetails.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <div
                  className={styles.cardIcon}
                  style={{ backgroundColor: card.squareColor }}
                >
                  DS
                </div>
                <h2
                  style={{ whiteSpace: "nowrap" }}
                >{`${card.subjectName} Sheet`}</h2>
              </div>
              <div
                className={`${styles.cardStatus}`}
                style={{ backgroundColor: card.statusColor }}
              >
                <span>Done</span>
              </div>
            </div>
            <p className={styles.cardDate}>{formatDate(card.createdAt)}</p>

            <hr />
            <div className={styles.cardBody}>
              <div className={styles.cardItem}>
                <span>Time Taken</span>
                <span>:</span>
                <span>6 Questions</span>
              </div>
              <div className={styles.cardItem}>
                <span>Total Marks</span>
                <span>:</span>
                <span>{card.totalMarks} Marks</span>
              </div>
              <div className={styles.cardItem}>
                <span>Correct Answer</span>
                <span>:</span>
                <span>3 Questions</span>
              </div>
              <div className={styles.cardItem}>
                <span>Score</span>
                <span>:</span>
                <span>{card.totalScore} Marks</span>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <button
                className={`${styles.cardButton} ${styles.preview}`}
                onClick={() => openModal(card)}
              >
                Preview
              </button>
              <button className={`${styles.cardButton} ${styles.download}`}>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.man}>
        <img src="src\assets\man.svg" alt="Man in thought" />
      </div> */}

      {selectedCard && (
        
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <div className={styles.modalHeader}>
              <div
                className={styles.modalIcon}
                style={{ backgroundColor: selectedCard.squareColor }}
              >
                DS
              </div>
              <div className={styles.modalPara}>
                <h2>DSA SHEET</h2>
                <p className={styles.modalDate}>{formatDate(selectedCard.createdAt)}</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              {questions.map((question, index) => (
                <div className={styles.modalQuestion} key={index}>
                  <div className={styles.questionTop}>
                    <span className={styles.questionNumber}>
                      Question {index + 1}.
                    </span>
                    <span className={styles.difficulty}>
                      {question.difficulty}
                    </span>
                  </div>
                  <p>{question.questionContent}</p>
                  <ul className={styles.optionList}>
                    {question.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={
                          question.correctAnswers.includes(option)
                            ? styles.correctAnswer
                            : question.selectedAnswer.includes(option) &&
                              !question.correctAnswers.includes(option)
                            ? styles.wrongAnswer
                            : ""
                        }
                      >
                        {option}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.explanation}>
                    <strong>Explanation: </strong> {question.explanation || "No explanation provided."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultNextDashboard;
