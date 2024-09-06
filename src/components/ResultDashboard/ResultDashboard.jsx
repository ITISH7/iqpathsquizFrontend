import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styles from './ResultDashboard.module.css';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [streak, setStreak] = useState(5);

  // Sample data for the calendar (replace with your actual data)
  const progressData = {
    '2024-09-01': 1,
    '2024-09-02': 2,
    '2024-09-03': 3,
    '2024-09-04': 4,
    '2024-09-05': 5,
    '2024-09-06': 3,
    '2024-09-07': 4,
    // Add more dates and their respective progress levels (1 to 5)
  };

  const getTileClass = ({ date }) => {
    const dateString = date.toISOString().split('T')[0];
    const level = progressData[dateString] || 0;

    if (level === 5) return styles.progressLevel5;
    if (level === 4) return styles.progressLevel4;
    if (level === 3) return styles.progressLevel3;
    if (level === 2) return styles.progressLevel2;
    if (level === 1) return styles.progressLevel1;
    return styles.progressLevel0;
  };
  
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
            <div className={styles.calendarSection}>
              <div className={styles.spiral}>
                <img src="src\assets\spiral.svg" alt="Spiral" />
              </div>
              <h3 className={styles.calendarTitle}>My Progress</h3>
              <Calendar
                onChange={setDate}
                value={date}
                tileClassName={getTileClass}
                className={styles.customCalendar}
                showNeighboringMonth={false}
                next2Label="»"
                prev2Label="«"
                nextLabel="›"
                prevLabel="‹"
              />
              <div className={styles.streak}>
                {streak} days <span role="img" aria-label="fire">🔥</span>
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
