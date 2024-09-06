import  { useEffect, useState } from 'react';
import styles from './QuestionTopicDropDown.module.css';
import modalStyles from './NoteModal.module.css';
import ArrowUp from '../../assets/ArrowUp.svg';
import ArrowDown from '../../assets/ArrowDown.svg';
import Revision from '../../assets/Revision.svg';
import RevisionShine from '../../assets/RevisionShine.svg';
import utilityStyle from '../../utils/utils.module.css';
import { Link } from 'react-router-dom';
import NoteModal from './NoteModal';  // Import the NoteModal component
import axios from 'axios';
import { useQuiz } from '../../context/QuizContext';



function QuestionTopicDropDown({ name, title = 'Python' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen1, setIsFilterOpen1] = useState(false);
  const [filter1, setFilter1] = useState('All');
  const [isFilterOpen2, setIsFilterOpen2] = useState(false);
  const [imageStates, setImageStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [question, setQuestion] = useState([]);
  const [solved, setSolved] = useState(0);

  const {selectQuizTopic} = useQuiz();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsFilterOpen1(false);
      setIsFilterOpen2(false);
    }
  };

  const toggleFilterDropdown1 = (event) => {
    event.stopPropagation(); 
    if (isOpen) { 
      setIsFilterOpen1(!isFilterOpen1);
      setIsFilterOpen2(false); 
    }
  };

  const handleFilterDifficult = (difficulty) => {
    setFilter1(difficulty);
    setIsFilterOpen1(false);
  };

  const toggleFilterDropdown2 = (event) => {
    event.stopPropagation();
    if (isOpen) { 
      setIsFilterOpen2(!isFilterOpen2);
      setIsFilterOpen1(false); 
    }
  };

  const handleFilterSelect = (topic) => {
    console.log(`Selected: ${topic}`);
    setIsFilterOpen1(false); 
    setIsFilterOpen2(false);
  };

  const handleRevisionToggle = (index) => {
    setImageStates((prev) => ({
      ...prev,
      [index]: prev[index] === "RevisionShine" ? "Revision" : "RevisionShine",
    }));
  };

  const openModal = (event) => {
    event.preventDefault();  // Prevent default behavior
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const isSolved = (e) => { 
    if (e.target.checked) {
      setSolved(solved + 1);
    } else {
      setSolved(solved - 1);
    }
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


  useEffect(() => {
    getdata();
  }, []);

  async function getdata(){
    try {
      const response = await axios.get('/user/sampleQuestions');
      setQuestion(response.data.data);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

// console.log(question);


  return (
    <div className={`${styles.tableContainer} ${isOpen ? styles.tableContainerOpen : ''}`}>
      <div
        className={`${styles.header} ${utilityStyle.container} ${isOpen ? styles.headerOpen : ''}`}
        onClick={toggleDropdown}
      >
        <h2>{`${name}`}</h2>
        <div className={`${styles.progress} ${isOpen ? styles.progressOpen : ''}`}>
          <Link to="/quiz" >
            <button 
              className={styles.playButton}
              onClick={() => selectQuizTopic(title)}
              >Test
            </button>
          </Link>
          <div className={styles.filterButtonWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={styles.filterButton} onClick={toggleFilterDropdown1}>
              Filter
            </button>
            {isFilterOpen1 && (
              <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Topic 1')}>Topic 1</div>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Topic 2')}>Topic 2</div>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Topic 3')}>Topic 3</div>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Topic 4')}>Topic 4</div>
              </div>
            )}
          </div>
          <div className={styles.filterButtonWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={styles.filterButton} onClick={toggleFilterDropdown2}>
              Filter
            </button>
            {isFilterOpen2 && (
              <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Easy')}>Easy</div>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Medium')}>Medium</div>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('Hard')}>Hard</div>
                <div className={styles.dropdownItem} onClick={() => handleFilterSelect('All')}>All</div>
              </div>
            )}
          </div>
          <span>{solved}/{question.length}</span>
          <button className={styles.toggleButton}>
            <img src={isOpen ? ArrowUp : ArrowDown} alt="Toggle Arrow" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`${styles.content}`}>
          <table className={styles.table}>
            <colgroup>
              <col className={styles.colStatus} />
              <col className={styles.colProblem} />
              <col className={styles.colArticle} />
              <col className={styles.colYouTube} />
              <col className={styles.colPractice} />
              <col className={styles.colNote} />
              <col className={styles.colDifficulty} />
              <col className={styles.colRevision} />
            </colgroup>

            <thead>
              <tr>
                <th>Status</th>
                <th>Problem</th>
                <th className={styles.remove}>Article</th>
                <th className={styles.remove}>YouTube</th>
                <th className={styles.remove}>Practice</th>
                <th className={styles.remove}>Note</th>
                <th>Difficulty</th>
                <th className={styles.remove}>Revision</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problems, index) => (
                <tr key={index}>
                  <td className={`${styles.icons}`}><input type="checkbox" onChange={isSolved} /></td>
                  <td className={`${styles.problemColumn}`}>{problems.name}</td>
                  <td className={styles.remove}><img src="src/assets/Artical.svg" alt="Article" className={styles.icons} /></td>
                  <td className={styles.remove}><img src="src/assets/YouTube.svg" alt="YouTube" className={styles.icons} /></td>
                  <td className={styles.remove}><img src="src/assets/Leetcode.svg" alt="Practice" className={styles.icons} /></td>
                  <td className={`${styles.icons} ${styles.remove}`}><button className={styles.noteButton} onClick={openModal}>+</button></td>
                  <td className={styles.difficulty}>{renderDifficultyBadge(problems.difficulty)}</td>
                  {/* <td className={`${styles.icons} ${styles.remove}`}><button className={styles.noteButton}>+</button></td> */}
                  {/* <td className={styles.difficulty}>{renderDifficultyBadge(question.difficulty)}</td> */}
                  <td className={`${styles.icons} ${styles.remove}`}><button className={styles.noteButton}>+</button></td>
                  <td className={styles.difficulty}>{renderDifficultyBadge(question.difficulty)}</td>
                  <td className={styles.remove}>
                    <img src={imageStates[index] === 'RevisionShine' ? RevisionShine : Revision} alt="Revision Toggle" onClick={() => handleRevisionToggle(index)} className={styles.icons} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isModalOpen && <NoteModal onClose={closeModal} />}
    </div>
  );
}

export default QuestionTopicDropDown;
