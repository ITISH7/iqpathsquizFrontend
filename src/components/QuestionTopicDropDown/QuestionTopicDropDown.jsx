import {useEffect, useState, useCallback } from 'react';
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
import Popup from '../../modals/QuestionPopUp/QuestionPopUp';



const problems = [
  { id: 1, name: "Rotate Matrix",    options: ['Library', 'Framework', 'Language'], question: 'Given a square matrix, turn it by 90 degrees in an anti-clockwise direction without using any extra space', topic: "Array", difficulty: "Easy" },
  { id: 2, name: "Merge Overlapping intervals",  options: ['Library', 'Framework', 'Language'],  question: 'Given a square matrix, turn it by 90 degrees in an anti-clockwise direction without using any extra space',  topic: "String", difficulty: "Easy" },
  { id: 3, name: "Merge two sorted arrays without extra space",  options: ['Library', 'Framework', 'Language'],  question: 'We are given two sorted arrays. We need to merge these two arrays such that the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array', topic: "Array", difficulty: "Medium" },
  { id: 4, name: "Find the duplicate in an array of N+1 integers",  options: ['Library', 'Framework', 'Language'],  question: 'Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.',  topic: "Array", difficulty: "Medium" },
  { id: 5, name: "Repeat and Missing Number",  topic: "String",   options: ['Library', 'Framework', 'Language'], question: 'Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.', difficulty: "Hard" },
  { id: 6, name: "Inversion of Array (Pre-req: Merge Sort)",   options: ['Library', 'Framework', 'Language'], question: 'Given an integer array arr[] of size n, the task is to find the count inversions of the given array. Two array elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.', topic: "Array", difficulty: "Hard" },
];



function QuestionTopicDropDown({ name, title = 'Python' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen1, setIsFilterOpen1] = useState(false);
  const [isFilterOpen2, setIsFilterOpen2] = useState(false);
  const [imageStates, setImageStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [notes, setNotes] = useState({});
  const [question, setQuestion] = useState([]);
  const [solved, setSolved] = useState(0);
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [topicFilter, setTopicFilter] = useState("All"); // State for topic filter
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  


  const {selectQuizTopic} = useQuiz();
  

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []); // Memoized to avoid re-rendering issues

  
  const handleDifficultyFilter = (difficulty) => {
    setDifficultyFilter(difficulty);
    setIsFilterOpen2(false);
  };
  
  const handleTopicFilter = (topic) => {
    setTopicFilter(topic);
    setIsFilterOpen1(false);
  };

  const filteredProblems = problems.filter(problem => {
    const difficultyMatch = difficultyFilter === "All" || problem.difficulty === difficultyFilter;
    const topicMatch = topicFilter === "All" || problem.topic === topicFilter;
    return difficultyMatch && topicMatch;
  });
  
  
  const toggleFilterDropdown1 = (event) => {
    event.stopPropagation(); 
    if (isOpen) { 
      setIsFilterOpen1(!isFilterOpen1);
      setIsFilterOpen2(false); 
    }
  };

  const toggleFilterDropdown2 = (event) => {
    event.stopPropagation();
    if (isOpen) { 
      setIsFilterOpen2(!isFilterOpen2);
      setIsFilterOpen1(false); 
    }
  };

  const handleRevisionToggle = (index) => {
    setImageStates((prev) => ({
      ...prev,
      [index]: prev[index] === "RevisionShine" ? "Revision" : "RevisionShine",
    }));
  };

  const openModal = (problemName) => {
    setSelectedProblem(problemName);
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

  const saveNote = (problemName, noteContent) => {
    const updatedNotes = { ...notes };

    if (noteContent.trim() === "") {
      delete updatedNotes[problemName];
    }
    else {
      updatedNotes[problemName] = noteContent;
    }

    setNotes(updatedNotes);
    localStorage.setItem("userNotes", JSON.stringify(updatedNotes));
  };

  // const problems = [
  //   { name: "Rotate Matrix", difficulty: "Easy" },
  //   { name: "Merge Overlapping Subintervals", difficulty: "Easy" },
  //   { name: "Merge two sorted arrays without extra space", difficulty: "Medium" },
  //   { name: "Find the duplicate in an array of N+1 integers", difficulty: "Medium" },
  //   { name: "Repeat and Missing Number", difficulty: "Hard" },
  //   { name: "Inversion of Array (Pre-req: Merge Sort)", difficulty: "Hard" },
  // ];
  const handleQuestionClick = (question) => {
    setCurrentQuestion(question);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setCurrentQuestion(null);
  };


  const renderDifficultyBadge = (diffi) => {
    let badgeClass = "";
    switch (diffi) {
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
    return <div className={badgeClass}>{diffi}</div>;
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("userNotes")) || {};
    setNotes(savedNotes);
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

console.log(question);


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
              Topic
            </button>
            {isFilterOpen1 && (
              <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dropdownItem} onClick={() => handleTopicFilter('All')}>Random</div>
                <div className={styles.dropdownItem} onClick={() => handleTopicFilter('Array')}>Array</div>
                <div className={styles.dropdownItem} onClick={() => handleTopicFilter('String')}>String</div>
              </div>
            )}
          </div>
          <div className={styles.filterButtonWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={styles.filterButton} onClick={toggleFilterDropdown2}>
              Difficulty
            </button>
            {isFilterOpen2 && (
              <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('All')}>Random</div>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('Easy')}>Easy</div>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('Medium')}>Medium</div>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('Hard')}>Hard</div>
              </div>
            )}
          </div>
          <span>{solved}/{filteredProblems.length}</span>
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
              {filteredProblems.map((problem) => (
                <tr key={problem.id}>
                  <td className={`${styles.icons}`}><input type="checkbox"onChange={isSolved} /></td>
                  <td className={`${styles.problemColumn}`} key={problem.id} onClick={() => handleQuestionClick(problem)}>{problem.name}</td>
                  <td className={styles.remove}><img src="src/assets/Artical.svg" alt="Article" className={styles.icons} /></td>
                  <td className={styles.remove}><img src="src/assets/YouTube.svg" alt="YouTube" className={styles.icons} /></td>
                  <td className={styles.remove}><img src="src/assets/Leetcode.svg" alt="Practice" className={styles.icons} /></td>
                  <td className={`${styles.icons} ${styles.remove}`}>
                    <button 
                      onClick={() => openModal(problem.name)} className={styles.noteButton}>
                      +
                    </button>
                    {/* <p>{notes[problem.questionContent] || ""}</p> */}
                  </td>
                  <td className={styles.difficulty}>{renderDifficultyBadge(problem.difficulty)}</td>
                  <td className={styles.remove}>
                    <img src={imageStates[problem.id] === 'RevisionShine' ? RevisionShine : Revision} alt="Revision Toggle" onClick={() => handleRevisionToggle(problem.id)} className={styles.icons} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Popup isVisible={isPopupVisible} questionData={currentQuestion} onClose={handleClosePopup} />
        </div>
        
      )}
      {isModalOpen && (
        <NoteModal 
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSave={(note) => saveNote(selectedProblem, note)}
          initialNote={notes[selectedProblem] || ""}  
        />
      )}
      
      {isModalOpen && <NoteModal isOpen={isModalOpen} closeModal={closeModal} />}
    </div>
  );
}

export default QuestionTopicDropDown;
