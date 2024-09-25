import React, { useState } from 'react';
import styles from './ResultNextDashboard.module.css';

const cardsData = [
  { squareColor: '#FF9800', status: 'DONE', statusClass: 'done', statusColor: '#C2F8CB', date: '8TH SEPT, SUNDAY 2024' }, // Orange Card
  { squareColor: '#8F3ED8', status: 'In Progress', statusClass: 'inProgress', statusColor: '#fdd174', date: '9TH SEPT, MONDAY 2024' }, // Purple Card
  { squareColor: '#307C34', status: 'In Progress', statusClass: 'inProgress', statusColor: '#fdd174', date: '10TH SEPT, TUESDAY 2024' }, // Green Card
  { squareColor: '#E36375', status: 'DONE', statusClass: 'done', statusColor: '#C2F8CB', date: '11TH SEPT, WEDNESDAY 2024' }, // Red Card
];

const ResultNextDashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    document.body.style.overflow = 'hidden';
    setSelectedCard(card);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setSelectedCard(null);
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={`${styles.headerButton} ${styles.all}`}>All</button>
          <button className={`${styles.headerButton} ${styles.progress}`}>In Progress</button>
          <button className={`${styles.headerButton} ${styles.complete}`}>Completed</button>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} placeholder="Search" />
            <button className={styles.filterButton}>
              <img src="src/assets/FilterIcon.svg" alt="Filter Button" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {results.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <div className={styles.cardIcon} style={{ backgroundColor: card.squareColor }}>DS</div>
                <h2>DSA SHEET</h2>
              </div>
              <div className={`${styles.cardStatus} ${styles[card.statusClass]}`} style={{ backgroundColor: card.statusColor }}>
                <span>{card.status}</span>
              </div>
            </div>
            <p className={styles.cardDate}>{card.date}</p>

            <hr />
            <div className={styles.cardBody}>
              {['ARRAY', 'ARRAY', 'ARRAY', 'ARRAY'].map((item, itemIndex) => (
                <div className={styles.cardItem} key={itemIndex}>
                  <span>{item}</span>
                  <span>:</span>
                  <span>6 Questions</span>
                </div>
              ))}
            </div>
            <div className={styles.cardFooter}>
              <button className={`${styles.cardButton} ${styles.preview}`} onClick={() => openModal(card)}>Preview</button>
              <button className={`${styles.cardButton} ${styles.download}`}>Download</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.man}>
        <img src="src\assets\man.svg" alt="Man in thought" />
      </div>

      {selectedCard && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon} style={{ backgroundColor: selectedCard.squareColor }}>DS</div>
              <div className={styles.modalPara}>
                <h2>DSA SHEET</h2>
                <p className={styles.modalDate}>{selectedCard.date}</p>
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalQuestion}>
                <div className={styles.questionTop}>
                  <span className={styles.questionNumber}>Question 1.</span>
                  <span className={styles.difficulty}>Medium</span>
                </div>
                <p>Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?</p>
                <ul className={styles.optionList}>
                  <li>Insertion Sort</li>
                  <li className={styles.wrongAnswer}>Quick Sort</li>
                  <li>Heap Sort</li>
                  <li className={styles.correctAnswer}>Merge Sort</li>
                </ul>
              </div>

              <div className={styles.modalQuestion}>
                <div className={styles.questionTop}>
                  <span className={styles.questionNumber}>Question 2.</span>
                  <span className={styles.difficulty}>Easy</span>
                </div>
                <p>Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?</p>
                <ul className={styles.optionList}>
                  <li className={styles.correctAnswer}>Merge Sort</li>
                  <li>Insertion Sort</li>
                  <li className={styles.wrongAnswer}>Quick Sort</li>
                  <li>Heap Sort</li>
                </ul>
              </div>

              <div className={styles.modalQuestion}>
                <div className={styles.questionTop}>
                  <span className={styles.questionNumber}>Question 3.</span>
                  <span className={styles.difficulty}>Easy</span>
                </div>
                <p>Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?</p>
                <ul className={styles.optionList}>
                  <li className={styles.correctAnswer}>Merge Sort</li>
                  <li>Insertion Sort</li>
                  <li>Quick Sort</li>
                  <li>Heap Sort</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultNextDashboard;
