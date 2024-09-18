import React from 'react';
import styles from './ResultNextHeroSection.module.css';

const ResultNextHeroSection = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>DSA SHEEET PROGRESS</h2>
                <p className={styles.description}>
                    You've learned 80% of your progress this week! Keep it up and improve your progress!
                </p>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src="src\assets\Progress.svg" 
                    alt="Progress Image"
                    className={styles.illustration}
                />
            </div>
        </div>
    </>
  );
};

export default ResultNextHeroSection;