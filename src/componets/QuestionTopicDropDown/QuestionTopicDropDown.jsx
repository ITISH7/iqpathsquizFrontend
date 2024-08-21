import React, { useState } from 'react';
import styles from './QuestionTopicDropDown.module.css';
import ArrowUp from '../../assets/ArrowUp.svg';
import ArrowDown from '../../assets/ArrowDown.svg';

function QuestionTopicDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const problems = [
    { name: "Set Matrix Zeros", difficulty: "Hard" },
    { name: "Pascal's Triangle", difficulty: "Hard" },
    { name: "Next Permutation", difficulty: "Medium" },
    { name: "Kadane's Algorithm", difficulty: "Easy" },
    { name: "Sort an array of 0's, 1's and 2's", difficulty: "Medium" },
    { name: "Stock Buy and Sell", difficulty: "Easy" },
  ];

  const renderDifficultyBadge = (difficulty) => {
    let badgeClass = "";
    switch (difficulty) {
      case "Hard":
        badgeClass = styles.hardBadge;
        break;
      case "Medium":
        badgeClass = styles.mediumBadge;
        break;
      case "Easy":
        badgeClass = styles.easyBadge;
        break;
      default:
        badgeClass = "";
    }
    return <span className={badgeClass}>{difficulty}</span>;
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.header} >
        <h2 >Day 3: Arrays Part-III</h2>
        <div className={styles.progress}>
          <span>0/6</span>
          <button className={styles.toggleButton} onClick={toggleDropdown}>
            <img src={isOpen ? ArrowUp : ArrowDown } alt="Toggle Arrow" />
          </button>
        </div>
      </div>
      {isOpen && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Problem</th>
              <th>Article</th>
              <th>YouTube</th>
              <th>Practice</th>
              <th>Note</th>
              <th>Difficulty</th>
              <th>Revision</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>
                <td className={styles.icons} ><input type="checkbox" /></td>
                <td className={styles.problemName}>{problem.name}</td>
                <td><img src="src\assets\Artical.svg" alt="Article" className={styles.icons} /></td>
                <td><img src="src\assets\YouTube.svg" alt="YouTube" className={styles.icons} /></td>
                <td><img src="src\assets\Leetcode.svg" alt="Practice" className={styles.icons} /></td>
                <td className={styles.icons} ><button className={`${styles.noteButton} `} >+</button></td>
                <td className={styles.icons}>{renderDifficultyBadge(problem.difficulty)}</td>
                <td><img src="src\assets\Revision.svg" alt="Revision" className={styles.icons} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default QuestionTopicDropDown;
