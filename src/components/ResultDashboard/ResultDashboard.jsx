import React, { useContext,useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import styles from './ResultDashboard.module.css';
import StreakHeatMap from '../../modals/StreakHeatMap/StreakHeatMap';
import { Link } from 'react-router-dom';
import NightingaleChart from '../../modals/NightingaleChart/NightingaleChart';
import { Service } from '../../axios/config';
import { AuthContext } from '../../context/AuthContext';


// console.log('getSingleTestResults:', getSingleTestResults);


const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [streak, setStreak] = useState(5);
  const [results, setResults] = useState([]);
  
  const service = new Service();
  const {userId } = useContext(AuthContext);

  

  const getResults = async (id) => {
    try {
      const response = await service.GetAllSubjectResult(id);
      setResults(response.data.data);
      console.log('response:', response);
      return response.data;
    } catch (error) {
      console.log('error:', error);
    }
  };
  


  const streakData = [
    { "date": "2024-09-01", "streak": 3 },
    { "date": "2024-09-02", "streak": 8 },
    { "date": "2024-09-03", "streak": 2 },
    { "date": "2024-09-04", "streak": 9 },
    { "date": "2024-09-05", "streak": 0 },
    { "date": "2024-09-06", "streak": 4 },
    { "date": "2024-09-07", "streak": 5 },
    { "date": "2024-09-08", "streak": 0 },
    { "date": "2024-09-09", "streak": 1 },
    { "date": "2024-09-10", "streak": 7 },
    { "date": "2024-09-11", "streak": 2 },
    { "date": "2024-09-12", "streak": 0 },
    { "date": "2024-09-13", "streak": 2 },
    { "date": "2024-09-14", "streak": 3 },
    { "date": "2024-09-15", "streak": 6 },
    { "date": "2024-09-16", "streak": 4 },
    { "date": "2024-09-17", "streak": 5 },
    { "date": "2024-09-18", "streak": 1 },
    { "date": "2024-09-19", "streak": 8 },
    { "date": "2024-09-20", "streak": 2 },
    { "date": "2024-09-21", "streak": 7 },
    { "date": "2024-09-22", "streak": 0 },
    { "date": "2024-09-23", "streak": 0 },
    { "date": "2024-09-24", "streak": 0 },
    { "date": "2024-09-25", "streak": 6 },
    { "date": "2024-09-26", "streak": 2 },
    { "date": "2024-09-27", "streak": 0 },
    { "date": "2024-09-28", "streak": 3 },
    { "date": "2024-09-29", "streak": 7 },
    { "date": "2024-09-30", "streak": 2 },
    { "date": "2024-10-01", "streak": 6 }
  ]
  
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
                    <Link to="/result-next" onClick={()=> {getSingleTestResults(userId, 'Aptitude')}}>
                      <div className={styles.arrowContainer}>
                        <div className={styles.arrow} style={{ backgroundColor: card.squareColor }}>&gt;</div>
                      </div>
                    </Link>
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
              {/* <Calendar
                onChange={setDate}
                value={date}
                tileClassName={getTileClass}
                className={styles.customCalendar}
                showNeighboringMonth={false}
                next2Label="»"
                prev2Label="«"
                nextLabel="›"
                prevLabel="‹"
              /> */}
              <StreakHeatMap streakData={streakData} />
              <div className={styles.streak}>
                {streak} days <span role="img" aria-label="fire">🔥</span>
              </div>
            </div>
            <div className={styles.accuracySection}>
              <div className={styles.accuracyTitle}>
                Accuracy
              </div>
              <div className={styles.accuracyContent}>
                <NightingaleChart />
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
