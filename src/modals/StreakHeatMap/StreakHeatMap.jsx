import React, { useState } from 'react';
import styles from './StreakHeatMap.module.css';

const StreakHeatMapCalendar = ({ streakData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const generateCalendarDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...Array(firstDay).fill(null), ...days];
  };

  const getColorIntensity = (count) => {
    if (count === 0) return 'rgba(243, 244, 246, 1)'; // lightest purple for no questions solved
    if (count <= 2) return 'rgba(202, 157, 216, 0.45)'; // light purple
    if (count <= 5) return 'rgba(202, 157, 216, 1)'; // medium purple
    // if (count <= 8) return 'rgba(174, 55, 211, 1)'; // dark purple
    return 'rgba(174, 55, 211, 1)'; // darkest purple for many questions solved
  };

  const handleMonthChange = (delta) => {
    
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
  };

  const handleYearChange = (delta) => {
    setCurrentDate(new Date(currentDate.getFullYear() + delta, currentDate.getMonth(), 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = generateCalendarDays(currentDate);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => handleMonthChange(-1)}>&lt;</button>
        <span>{currentDate.toLocaleDateString('default', { month: 'long' })}</span>
        <button onClick={() => handleMonthChange(1)}>&gt;</button>
        <button onClick={() => handleYearChange(-1)}>&laquo;</button>
        <span>{currentDate.toLocaleDateString('default', {year: 'numeric' })}</span>
        <button onClick={() => handleYearChange(1)}>&raquo;</button>
      </div>
      <div className={styles.calendar}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className={styles.dayName}>{day}</div>
        ))}
        {days.map((day, index) => {
          const entry = day ? streakData.find(e => new Date(e.date).getDate() === day && new Date(e.date).getMonth() === month && new Date(e.date).getFullYear() === year) : null;
          return (
            <div
              key={index}
              className={styles.cell}
              style={{ backgroundColor: entry ? getColorIntensity(entry.streak) : '#F5F5F5' }}
              title={entry ? entry.date : ''}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default StreakHeatMapCalendar;
