import React, { useState } from 'react';
import styles from './QuestionTopicDropDown.module.css';
import ArrowUp from '../../assets/ArrowUp.svg';
import ArrowDown from '../../assets/ArrowDown.svg';
import Revision from '../../assets/Revision.svg';
import RevisionShine from '../../assets/RevisionShine.svg';
import utilityStyle from '../../utils/utils.module.css';

function QuestionTopicDropDown({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageStates, setImageStates] = useState({});
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRevisionToggle = (index) => {
    setImageStates((prev) => ({
      ...prev,
      [index]: prev[index] === "RevisionShine" ? "Revision" : "RevisionShine",
    }));
  };

  const problems = [
    { name: "Rotate Matrix", difficulty: "Easy" },
    { name: "Merge Overlapping Subintervals", difficulty: "Easy" },
    { name: "Merge two sorted arrays without extra space", difficulty: "Medium" },
    { name: "Find the duplicate in an array of N+1 integers", difficulty: "Medium" },
    { name: "Repeat and Missing Number", difficulty: "Hard" },
    { name: "Inversion of Array (Pre-req: Merge Sort)", difficulty: "Hard" },
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
    <div className={`${styles.tableContainer} ${isOpen ? styles.tableContainerOpen : ''}`}>
      <div className={`${styles.header} ${utilityStyle.container} ${isOpen ? styles.headerOpen : ''}`} onClick={toggleDropdown}>
        <h2>{`${name}`}</h2>
        <div className={`${styles.progress} ${isOpen ? styles.progressOpen : ''}`}>
          <button className={styles.playButton}>Play</button>
          <button className={styles.filterButton}>Filter</button>
          <button className={styles.filterButton}>Filter</button>
          <span>0/6</span>
          <button className={styles.toggleButton}>
            <img src={isOpen ? ArrowUp : ArrowDown} alt="Toggle Arrow" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={styles.content}>
          <table className={styles.table}>
            <colgroup>
              <col style={{ width: '8%' }} />
              <col style={{ width: '37%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '8%' }} />
              <col style={{ width: '12.5%' }} />
              <col style={{ width: '8%' }} />
            </colgroup>
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
                  <td className={styles.icons}><input type="checkbox" /></td>
                  <td className={styles.problemColumn}>{problem.name}</td>
                  <td><img src="src\assets\Artical.svg" alt="Article" className={styles.icons} /></td>
                  <td><img src="src\assets\YouTube.svg" alt="YouTube" className={styles.icons} /></td>
                  <td><img src="src\assets\Leetcode.svg" alt="Practice" className={styles.icons} /></td>
                  <td className={styles.icons}><button className={styles.noteButton}>+</button></td>
                  <td className={styles.difficulty}>{renderDifficultyBadge(problem.difficulty)}</td>
                  <td>
                    <img src={imageStates[index] === 'RevisionShine' ? RevisionShine : Revision} alt="Revision Toggle" onClick={() => handleRevisionToggle(index)} className={styles.icons} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default QuestionTopicDropDown;
