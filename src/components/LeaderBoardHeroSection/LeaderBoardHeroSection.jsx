import React from 'react';
import styles from './LeaderBoardHeroSection.module.css';

const LeaderBoardHeroSection = () => {
  return (
    <div className={styles.container}>
      <div  className={styles.filterButton}>
        <img src="src\assets\FilterIcon.svg" alt="filter" />
        <button>Filters</button>
      </div>
      <div className={styles.title}> Where you Stand?</div> 
      <img src="src\assets\flyingplane.png" alt="" className={styles.image} />
      <img src="src\assets\moutainClimbing.svg" alt="" className={styles.imageCorner} />
    </div>
  );
};

export default LeaderBoardHeroSection;
