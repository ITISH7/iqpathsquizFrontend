import React from 'react';
import styles from './LeaderBoardHeroSection.module.css';

const LeaderBoardHeroSection = () => {
  return (
    <div className={styles.container}>
      <button className={styles.filterButton}>Filters</button>
      <div className={styles.title}>DSA Challenge Leaderboard</div>
    </div>
  );
};

export default LeaderBoardHeroSection;