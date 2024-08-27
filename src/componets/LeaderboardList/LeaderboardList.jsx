import React from "react";
import styles from "./LeaderboardList.module.css";
import { Link } from "react-router-dom";

const LeaderboardList = () => {
  const data = [
    // { rank: 9319, username: "antara", institute: "Medcaps University", questionsSolved: 0, questionsPerDay: 0.0, joinDate: "Tue Aug 13 2024", profiles: ["profile1", "profile2"] },
    { rank: 1, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile1.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 2, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 3, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile3.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 4, username: "prakrishna79", profilePhoto: "src\assets\profile4.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 5, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile1.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 6, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 7, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile3.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 8, username: "prakrishna79", profilePhoto: "src\assets\profile4.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 9, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile1.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 10, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 11, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile3.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 12, username: "prakrishna79", profilePhoto: "src\assets\profile4.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 13, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile1.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 14, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 15, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile3.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 16, username: "prakrishna79", profilePhoto: "src\assets\profile4.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 17, username: "ALFA_ROCKER", profilePhoto: "src\assets\profile1.png", institute: "Pimpri Chinchwad Education Trust", questionsSolved: 285, questionsPerDay: 9.50, joinDate: "Mon Jul 15 2024", profiles: ["profile1", "profile2"] },
    { rank: 18, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 19, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    { rank: 20, username: "prakrishna79", profilePhoto: "src\assets\profile2.png", institute: "CMR Institute of Technology", questionsSolved: 284, questionsPerDay: 9.48, joinDate: "Sun Jul 14 2024", profiles: ["profile1", "profile2"] },
    // Add all other rows here...
  ];

  return (
    <>
      <div className={styles.pagination}>

        <Link to="/">
          <button className={styles.pageButton}>
            <img src="src\assets\ArrowLeft.svg" alt="" className={styles.icon}/>
            <p className={styles.pagePara}> Dashboard </p>
          </button>
        </Link>
  
        <button className={styles.pageButton}>
          <p className={styles.pagePara}> Next Page </p>
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
                className={`${styles.row} 
                            ${ index%2 === 1 ? styles.highlightedRow : ""} 
                            ${ user.rank === 1 ? styles.rankone : ""} 
                            ${ user.rank === 2 ? styles.ranktwo : ""} 
                            ${ user.rank === 3 ? styles.rankthree : ""} 
                          `}
                key={index}
              >
                <span className={styles.rank}>
                  {user.rank}
                  {
                    user.rank === 1 ? <img src="src\assets\gold.svg" alt="gold" className={styles.tophy} /> : ""
                  }
                  {
                    user.rank === 2 ? <img src="src\assets\silver.svg" alt="silver" className={styles.tophy} /> : ""
                  }
                  {
                    user.rank === 3 ? <img src="src\assets\bronze.svg" alt="bronze" className={styles.tophy} /> : ""
                  }
                  </span>
                <span className={styles.username}>
                  <img className={styles.ProfilePhoto} src="src\assets\profile3.png" alt="pp" />
                  {user.username}
                  </span>
                <span className={styles.institute}>{user.institute}</span>
                <span className={styles.questionsSolved}>
                  {user.questionsSolved}
                </span>
                <span className={styles.questionsPerDay}>
                  {user.questionsPerDay.toFixed(2)}
                </span>
                <span className={styles.joinDate}>{user.joinDate}</span>
                <span className={styles.profiles}>
                  <span className={styles.GithubprofileIcon}></span>
                  <span className={styles.Leetcodeprofile}></span>
                  
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.paging}>
        <span>Page 1 of 467</span>
        <button className={styles.pageButton}><img src="src\assets\beforPrevious.svg" alt="" /></button>
        <button className={styles.pageButton}><img src="src\assets\previous.svg" alt="" /></button>
        <button className={styles.pageButton}><img src="src\assets\next.svg" alt="" /></button>
        <button className={styles.pageButton}><img src="src\assets\afterNext.svg" alt="" /></button>

        
      </div>
    </>
  );
};


export default LeaderboardList;
