import React from 'react';
import styles from './ResultDashboard.module.css';

const Dashboard = () => {
  const cardsData = [
    { cardColor: '#D3ADF7', squareColor: '#B46FE1', progress: 60 }, // Purple Card
    { cardColor: '#91D5FF', squareColor: '#61B1F8', progress: 50 }, // Blue Card
    { cardColor: '#FFE58F', squareColor: '#FFC54D', progress: 70 }, // Yellow Card
    { cardColor: '#85E295', squareColor: '#47C65D', progress: 40 }, // Green Card
  ];

  const user = {
    courses: ['DSA', 'APTITUDE', 'QUANT', 'REASONING']
  };
  
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.container}>
          <div className={styles.rightContainer}>
            <div className={styles.searchContainer}>
              <input type="text" className={styles.searchInput} placeholder='Search' />
              <button className={styles.filterButton}>
                <img src="src/assets/FilterIcon.svg" alt="Filter Button" />
                Filters
              </button>
            </div>
            <div className={styles.sheets}>
              {cardsData.map((card, index) => (
                <div key={index} className={styles.card} style={{ backgroundColor: card.cardColor }}>
                  <div className={styles.cardContent}>
                    <div className={styles.square} style={{ backgroundColor: card.squareColor }}></div>
                    <div className={styles.progress}>
                      <div className={styles.title}>{user.courses[index]} SHEET PROGRESS</div>
                      <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar} style={{ width: `${card.progress}%`,
                            backgroundColor: card.squareColor}} ></div>
                      </div>
                    </div>
                  </div>
                    <div className={styles.arrowContainer}>
                      <div className={styles.arrow} style={{ backgroundColor: card.squareColor }}>&gt;</div>
                    </div>
                </div>
              ))}
              {/* Add New Sheet Button */}
              <div className={styles.addCard}>
                <div className={styles.addIcon}>+</div>
              </div>
            </div>
          </div>
          <div className={styles.leftContainer}>
            <div className={styles.calendar}>
              <div className={styles.calendarSection}>
                <div className={styles.spiral}>
                  <img src="src\assets\spiral.svg" alt="Spiral" />
                </div>
                {/* <h4 className={styles.progHeading}>
                  My Progress
                </h4> */}
                <div className={styles.calendarPart}>
                </div>
                {/* <div className={styles.calendarBottom}>
                  <p>5 days</p>
                  <img src="src\assets\fire.svg" alt="Fire emoji" />
                </div> */}
              </div>
            </div>
            <div className={styles.accuracySection}>
              <div className={styles.accuracyTitle}>
                Accuracy
              </div>
              <div className={styles.accuracyContent}>
                {/* Content for Accuracy (e.g., a graph or text can go here) */}
              </div>
            </div>
            <div className={styles.sheetsSection}>
              <div className={styles.batchCard} style={{ backgroundColor: '#E7D9FF' }}>
                <div className={styles.ribbon}>
                  <img src="src\assets\Batch.svg" alt="Batch" />
                </div>                
                <div className={styles.wellDone}>
                  <img src="src\assets\WellDone.svg" alt="Well Done" />
                </div>
                <div className={styles.sheetTitle}>
                  DSA SHEET
                </div>
                <div className={styles.progress}>
                  <div className={styles.progressContainer}>
                   <div className={styles.Bar} style={{ backgroundColor: '#B46FE1', width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className={styles.batchCard} style={{ backgroundColor: '#FFE4AC' }}>
                <div className={styles.ribbon}>
                  <img src="src\assets\Batch.svg" alt="Batch" />
                </div>
                <div className={styles.wellDone}>
                  <img src="src\assets\WellDone.svg" alt="Well Done" />
                </div>
                <div className={styles.sheetTitle}>
                  DSA SHEET
                </div>
                <div className={styles.progress}>
                  <div className={styles.progressContainer}>
                    <div className={styles.Bar} style={{ backgroundColor: '#FFC54D', width: '100%' }}></div>
                  </div>
                </div>
              </div>

              {/* Add more cards here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
