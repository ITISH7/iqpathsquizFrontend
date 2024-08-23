import React from "react";
import styles from "./LeaderboardList.module.css";

const LeaderboardList = () => {
  const data = [
    { rank: 9319, username: "antara", institute: "Medcaps University", questionsSolved: 0, questionsPerDay: 0.0, joinDate: "Tue Aug 13 2024", profiles: ["profile1", "profile2"] },
    { rank: 1, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 3, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 4, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 5, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 6, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 7, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 8, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 9, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 10, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 11, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 12, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 13, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "ALFA_ROCKER", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "prakrishna79", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    // Add all other rows here...
  ];

  return (
    <>
      <div className={styles.pagination}>
        <button className={styles.pageButton}>
          <img src="src\assets\ArrowLeft.svg" alt="" className={styles.icon}/>
          Dashboard
        </button>
        <button className={styles.pageButton}>
          Next Page
          <img src="src\assets\ArrowRight.svg" alt="" className={styles.icon} />
          </button>
      </div>

      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.header}>
            <span>Rank</span>
            <span>Username</span>
            <span>Institute</span>
            <span>Questions Solved</span>
            <span>Questions/Day</span>
            <span>Join Date</span>
            <span>Profiles</span>
          </div>
          <div className={styles.body}>
            {data.map((user, index) => (
              <div
                className={`${styles.row} ${
                  index === 0 ? styles.highlightedRow : ""
                }`}
                key={index}
              >
                <span className={styles.rank}>{user.rank}</span>
                <span className={styles.username}>{user.username}</span>
                <span className={styles.institute}>{user.institute}</span>
                <span className={styles.questionsSolved}>
                  {user.questionsSolved}
                </span>
                <span className={styles.questionsPerDay}>
                  {user.questionsPerDay.toFixed(2)}
                </span>
                <span className={styles.joinDate}>{user.joinDate}</span>
                <span className={styles.profiles}>
                  {user.profiles.map((profile, i) => (
                    <span key={i} className={styles.profileIcon}></span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.pagination}>
        <button className={styles.pageButton}>{"<<"}</button>
        <button className={styles.pageButton}>{"<"}</button>
        <span>Page 1 of 467</span>
        <button className={styles.pageButton}>{">"}</button>
        <button className={styles.pageButton}>{">>"}</button>
      </div>
    </>
  );
};


export default LeaderboardList;
