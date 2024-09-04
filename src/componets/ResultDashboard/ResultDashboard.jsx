import React from 'react';
import styles from './ResultDashboard.module.css';

const Dashboard = () => {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.container}>
          <div className={styles.rightContainer}>
            <div className={styles.searchContainer}>
              <input type="text" className={styles.searchInput} placeholder='Search'/>
              <button className={styles.filterButton}>
                <img src="src\assets\FilterIcon.svg" alt="Filter Button" />
                Filters
              </button>
            </div>
          </div>
          <div className={styles.leftContainer}>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
