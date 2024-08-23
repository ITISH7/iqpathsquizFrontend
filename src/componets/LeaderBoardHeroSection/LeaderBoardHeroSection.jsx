import React from 'react';
import styles from './LeaderBoardHeroSection.module.css';

const LeaderBoardHeroSection = () => {
  return (
    <div className={styles.container}>
      {/* <img src="src\assets\HeroSectionBg.png" /> */}
      <button className={styles.filterButton}>Filters</button>
      <div className={styles.title}> Where you Stand?</div> 
      <img src="src\assets\flyingplane.png" alt="" className={styles.image} />
      <img src="src\assets\moutainClimbing.svg" alt="" className={styles.imageCorner} />
    </div>
  );
};

export default LeaderBoardHeroSection;
