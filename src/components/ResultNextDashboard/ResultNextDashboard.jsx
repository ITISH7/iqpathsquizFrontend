import React, { useState, useContext, useEffect } from "react";
import styles from "./ResultNextDashboard.module.css";
import { Service } from "../../axios/config";
import { AuthContext } from "../../context/AuthContext";
import { use } from "echarts";

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

  const service = new Service();
  const { userId } = useContext(AuthContext);

  const getSingleTestResults = async (id, subjectName) => {
    try {
      const response = await service.GetSubjectResult(id, subjectName);
      console.log("response:", response);

      const sortedData = response.data.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setTestDetails(sortedData);
      setQuestions(sortedData[0].questions);
      return response.data;
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getSingleTestResults(userId, "Aptitude");
  }, []);

  const openModal = (card) => {
    document.body.style.overflow = "hidden";
    setSelectedCard(card);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setSelectedCard(null);
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
            <button className={styles.filterButton}>
              <img src="src/assets/FilterIcon.svg" alt="Filter Button" />
              Filters
            </button>
          </div>
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

      <div className={styles.man}>
        <img src="src\assets\man.svg" alt="Man in thought" />
      </div>

      {selectedCard && (
        // <div className={styles.modalOverlay} onClick={closeModal}>
        //   <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        //     <div className={styles.modalHeader}>
        //       <div className={styles.modalIcon} style={{ backgroundColor: selectedCard.squareColor }}>DS</div>
        //       <div className={styles.modalPara}>
        //         <h2>DSA SHEET</h2>
        //         <p className={styles.modalDate}>{selectedCard.date}</p>
        //       </div>
        //     </div>
        //     <div className={styles.modalBody}>
        //       <div className={styles.modalQuestion}>
        //         <div className={styles.questionTop}>
        //           <span className={styles.questionNumber}>Question 1.</span>
        //           <span className={styles.difficulty}>Medium</span>
        //         </div>
        //         <p>Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?</p>
        //         <ul className={styles.optionList}>
        //           <li>Insertion Sort</li>
        //           <li className={styles.wrongAnswer}>Quick Sort</li>
        //           <li>Heap Sort</li>
        //           <li className={styles.correctAnswer}>Merge Sort</li>
        //         </ul>
        //       </div>

        //       <div className={styles.modalQuestion}>
        //         <div className={styles.questionTop}>
        //           <span className={styles.questionNumber}>Question 2.</span>
        //           <span className={styles.difficulty}>Easy</span>
        //         </div>
        //         <p>Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?</p>
        //         <ul className={styles.optionList}>
        //           <li className={styles.correctAnswer}>Merge Sort</li>
        //           <li>Insertion Sort</li>
        //           <li className={styles.wrongAnswer}>Quick Sort</li>
        //           <li>Heap Sort</li>
        //         </ul>
        //       </div>

        //       <div className={styles.modalQuestion}>
        //         <div className={styles.questionTop}>
        //           <span className={styles.questionNumber}>Question 3.</span>
        //           <span className={styles.difficulty}>Easy</span>
        //         </div>
        //         <p>Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?</p>
        //         <ul className={styles.optionList}>
        //           <li className={styles.correctAnswer}>Merge Sort</li>
        //           <li>Insertion Sort</li>
        //           <li>Quick Sort</li>
        //           <li>Heap Sort</li>
        //         </ul>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
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
