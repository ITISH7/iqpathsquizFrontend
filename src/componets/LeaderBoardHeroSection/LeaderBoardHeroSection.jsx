import React from 'react';
import styles from './LeaderBoardHeroSection.module.css';

const LeaderBoardHeroSection = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\LeaderBoardHeroSection.svg" />
      <button className={styles.filterButton}>Filters</button>
      <div className={styles.title}></div> 
    </div>
  );
};

export default LeaderBoardHeroSection;
