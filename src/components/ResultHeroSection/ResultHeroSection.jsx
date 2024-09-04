import React from 'react';
import styles from './ResultHeroSection.module.css';

const ResultHeroSection = () => {
  return (
    <>
        <div className={styles.dashboardContainer}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <h1>Welcome back, Antara</h1>
                    <p>You've learned 80% of your progress this week!</p>
                    <p>Keep it up and improve your progress!</p>
                </div>
                <div className={styles.headerImage}>
                  <img src="src\assets\ResultHero.svg" alt="Result Hero" />
                </div>
            </header>
        </div>
    </>
  );
};

export default ResultHeroSection;