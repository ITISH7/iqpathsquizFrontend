import React, {useEffect, useState, useCallback } from 'react';
import styles from './QuestionTopicDropDown.module.css';
import modalStyles from './NoteModal.module.css';
import ArrowUp from '../../assets/ArrowUp.svg';
import ArrowDown from '../../assets/ArrowDown.svg';
import Revision from '../../assets/Revision.svg';
import RevisionShine from '../../assets/RevisionShine.svg';
import utilityStyle from '../../utils/utils.module.css';
import { Link } from 'react-router-dom';
import NoteModal from './NoteModal';  
import axios from 'axios';
import { useQuiz } from '../../context/QuizContext';
import QuestionPopUp from '../../modals/QuestionPopUp/QuestionPopUp';
import NoteIcon from '../../assets/NoteIcon.svg';
import NoteFilledIcon from '../../assets/NoteFilledIcon.svg'
import { Service } from '../../axios/config';




const problems = [
  { id: 1, name: "Stock Buy and Sell",    options: ['Library', 'Framework', 'Language'], question: 'Given a square matrix, turn it by 90 degrees in an anti-clockwise direction without using any extra space', topic: "Array", difficulty: "Easy" },
  { id: 2, name: "Merge Overlapping intervals",  options: ['Library', 'Framework', 'Language'],  question: 'Given a square matrix, turn it by 90 degrees in an anti-clockwise direction without using any extra space',  topic: "String", difficulty: "Easy" },
  { id: 3, name: "Merge two sorted arrays without extra space",  options: ['Library', 'Framework', 'Language'],  question: 'We are given two sorted arrays. We need to merge these two arrays such that the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array', topic: "Array", difficulty: "Medium" },
  { id: 4, name: "Find the duplicate in an array of N+1 integers",  options: ['Library', 'Framework', 'Language'],  question: 'Given an array of n elements that contains elements from 0 to n-1, with any of these numbers appearing any number of times. Find these repeating numbers in O(n) and use only constant memory space.',  topic: "Array", difficulty: "Medium" },
  { id: 5, name: "Repeat and Missing Number",  topic: "String",   options: ['Library', 'Framework', 'Language'], question: 'Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.', difficulty: "Hard" },
  { id: 6, name: "Inversion of Array (Pre-req: Merge Sort)",   options: ['Library', 'Framework', 'Language'], question: 'Given an integer array arr[] of size n, the task is to find the count inversions of the given array. Two array elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.', topic: "Array", difficulty: "Hard" },
];


const quizData = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 240,
  questions: [
    {
      question:
        'Which of the following are JavaScript data types? (Select all that apply)',
      choices: ['String', 'Number', 'Function', 'Array'],
      type: 'MAQs',
      correctAnswers: ['String', 'Number', 'Array'],
      score: 10,
    },
    {
      question: 'The "this" keyword in JavaScript refers to the current function.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['False'],
      score: 5,
    },
    {
      question: 'Which operator is used for strict equality comparison in JavaScript?',
      choices: ['==', '===', '=', '!='],
      type: 'MCQs',
      correctAnswers: ['==='],
      score: 10,
    },
    {
      question:
        'Which of the following methods is used to add an element to the end of an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['push()'],
      score: 10,
    },
    {
      question: 'What is the value of x after executing the following code snippet?',
      code: `let x = 5;
              x += 2;
              x *= 3;`,
      choices: ['21', '25', '33', '35'],
      type: 'MCQs',
      correctAnswers: ['25'],
      score: 10,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(typeof null);`,
      choices: ['Object', 'Null', 'Undefined', 'NullObject'],
      type: 'MCQs',
      correctAnswers: ['Object'],
      score: 10,
    },
    {
      question: 'Which of the following is NOT a valid JavaScript variable name?',
      choices: ['myVariable', '_variable', '123variable', '$variable'],
      type: 'MCQs',
      correctAnswers: ['123variable'],
      score: 10,
    },
    {
      question:
        'Which of the following methods is used to remove the last element from an array in JavaScript?',
      choices: ['push()', 'pop()', 'shift()', 'unshift()'],
      type: 'MCQs',
      correctAnswers: ['pop()'],
      score: 10,
    },
    {
      question: 'JavaScript is a case-sensitive language.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following code snippet?',
      code: `console.log(2 + '2');`,
      choices: ['4', '22', '24', "'22'"],
      type: 'MCQs',
      correctAnswers: ['22'],
      score: 10,
    }
  ],
}


function QuestionTopicDropDown({ subjectName, title = 'Python' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen1, setIsFilterOpen1] = useState(false);
  const [isFilterOpen2, setIsFilterOpen2] = useState(false);
  const [isSetDropdownOpen, setIsSetDropdownOpen] = useState(false);
  const [selectedSet, setSelectedSet] = useState('Set 1');
  const [imageStates, setImageStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [notes, setNotes] = useState({});
  const [solvedProblems, setSolvedProblems] = useState({});
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [topicFilter, setTopicFilter] = useState("All");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('All');


  const { selectQuizTopic, setQuestions, setTimer, setResult } = useQuiz();

  const service = new Service();


  const getquizQuestion = async () => {
    try {
      const response = await service.GenerateTestQuestions({subjectName});
        if (response.status === 200) {
          const { data, totalTime, totalScore } = response.data
          
          selectQuizTopic(subjectName)
          setQuestions(data)
          setTimer(1200)
          setResult([])  // Reset the result
          console.log('Quiz data fetched:', response.data)
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error)
      }
  }




  const getFilteredProblems = () => {
    return problems.filter(problem => {
      const difficultyMatch = difficultyFilter === "All" || problem.difficulty === difficultyFilter;
      const topicMatch = topicFilter === "All" || problem.topic === topicFilter;
      return difficultyMatch && topicMatch;
    });
  };

  const filteredProblems = getFilteredProblems();

  const toggleSetDropdown = (event) => {
    event.stopPropagation();
    setIsSetDropdownOpen(!isSetDropdownOpen);
  };

  const handleSetSelection = (setName) => {
    setSelectedSet(setName);
    setIsSetDropdownOpen(false);
  }

  const handleQuizStart = () => {
    console.log(`Starting quiz with ${selectedSet}`); 
    selectQuizTopic(quizData.topic)
    setQuestions(quizData.questions)
    setTimer(quizData.totalTime)
    setResult([]);
  };

  const toggleDropdown = useCallback(() => {
    setIsOpen((prevState) => {
      const newState = !prevState;
  
      if (!newState) {
        setIsFilterOpen1(false);
        setIsFilterOpen2(false);
        setIsSetDropdownOpen(false);
      }

      return newState;

    });
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(`.${styles.dropdownWrapper}`) && !event.target.closest(`.${styles.header}`))
      {
        setIsSetDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return() => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [styles.dropdownWrapper, styles.header]);
  
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
  
  const handleDifficultyFilter = (difficulty) => {
    setDifficultyFilter(difficulty);
    setIsFilterOpen2(false);
  };
  
  const handleTopicFilter = (topic) => {
    setTopicFilter(topic);
    setIsFilterOpen1(false);
  };

  const toggleTopicDropdown = (event) => {
    event.stopPropagation();
    setIsTopicDropdownOpen(!isTopicDropdownOpen);
  };

  const handleTopicDropdown = (event) => {
    
  }
  
  const handleRevisionToggle = (index) => {
    setImageStates((prev) => {
      const updatedState = {
        ...prev, 
        [index]: prev[index] === "RevisionShine" ? "Revision" : "RevisionShine"
      };

      setTimeout(() => {
        localStorage.setItem('imageStates', JSON.stringify(updatedState));
      }, 0);

      return updatedState;
    });
  };

  useEffect(() => {
    const savedImageStates = JSON.parse(localStorage.getItem('imageStates')) || {};
    setImageStates(savedImageStates);
  }, [])

  const handleCheckboxChange = (problemId) => {
    setSolvedProblems((prevSolved) => {
      const updatedSolved = {
        ...prevSolved,
        [problemId] : !prevSolved[problemId],
      };
      localStorage.setItem('solvedProblems', JSON.stringify(updatedSolved));
      return updatedSolved;
    });
  };

  useEffect(() => {
    const savedSolvedProblems = JSON.parse(localStorage.getItem('solvedProblems')) || {};
    setSolvedProblems(savedSolvedProblems);
  }, []);

  const getSolvedCount = () => {
    return filteredProblems.filter((problem) => solvedProblems[problem.id]).length;
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

  const getNoteIcon = (problemId) => {
    return notes[problemId] ? NoteFilledIcon : NoteIcon;
  }
  
  const saveNote = (problemId, noteContent) => {
    const updatedNotes = { ...notes };
    
    if (noteContent.trim() === '') {
      delete updatedNotes[problemId];
    }
    else {
      updatedNotes[problemId] = noteContent;
    }
    
    setNotes(updatedNotes);
    localStorage.setItem('userNotes', JSON.stringify(updatedNotes));
  };
  
  // const problems = [
  //   { name: "Rotate Matrix", difficulty: "Easy" },
  //   { name: "Merge Overlapping Subintervals", difficulty: "Easy" },
  //   { name: "Merge two sorted arrays without extra space", difficulty: "Medium" },
  //   { name: "Find the duplicate in an array of N+1 integers", difficulty: "Medium" },
  //   { name: "Repeat and Missing Number", difficulty: "Hard" },
  //   { name: "Inversion of Array (Pre-req: Merge Sort)", difficulty: "Hard" },
  // ];

  const handleQuestionClick = (problem) => {
    setCurrentQuestion(problem);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
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
      const savedNotes = JSON.parse(localStorage.getItem('userNotes')) || {};
      setNotes(savedNotes);
      // getdata();
    }, []);
            
    // async function getdata(){
    //   try {
    //     const response = await axios.get('/user/sampleQuestions');
    //     setProblem(response.data.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
            
    // const fetchQuizData = async (topic) => {
    //   try {
    //     const response = await axios.post('/user/quiz', { topic })
  
    //     if (response.status === 200) {
    //       const { questions, totalTime, totalScore } = response.data
    //       selectQuizTopic(topic)
    //       setQuestions(questions)
    //       setTimer(totalTime)
    //       setResult([])  // Reset the result
    //       console.log('Quiz data fetched:', response.data)
    //     }
    //   } catch (error) {
    //     console.error('Error fetching quiz data:', error)
    //   }
    // }
            
  return (
    <div className={`${styles.tableContainer} ${isOpen ? styles.tableContainerOpen : ''}`}>
      <div
        className={`${styles.header} ${utilityStyle.container} ${isOpen ? styles.headerOpen : ''}`}
        onClick={toggleDropdown}
      >
        <h2>{`${subjectName}`}</h2>
        <div className={`${styles.progress} ${isOpen ? styles.progressOpen : ''}`}>
          <div className={styles.filterButtonWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.filterButton} ${styles.buttonEffect}`} onClick={toggleFilterDropdown1}>
              {/* <img src="src\assets\FilterIcon.svg" alt="Filter" /> */}
              {/* Topic */}
              {topicFilter === "All" ? (
                <>
                  <img src="src\assets\FilterIcon.svg" alt="Filter" />
                  Topic
                </>
              ) : (
                // If a specific topic is selected, just show the topic name 
                <>{topicFilter}</>
              )}
            </button>
            {isFilterOpen1 && (
              <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dropdownItem} onClick={() => handleTopicFilter('All')}>All</div>
                <div className={styles.dropdownItem} onClick={() => handleTopicFilter('Array')}>Array</div>
                <div className={styles.dropdownItem} onClick={() => handleTopicFilter('String')}>String</div>
              </div>
            )}
          </div>
          <div className={styles.filterButtonWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.filterButton} ${styles.filter2} ${styles.buttonEffect}`} onClick={toggleFilterDropdown2}>
              {difficultyFilter === "All" ? (
                <>
                  <img src="src\assets\FilterIcon.svg" alt="Filter" />
                  Difficulty
                </>
              ) : (
                <>{difficultyFilter}</>
              )}
              {/* <img src="src\assets\FilterIcon.svg" alt="Filter" /> */}
              {/* Difficulty */}
            </button>
            {isFilterOpen2 && (
              <div className={styles.dropdownMenu} onClick={(e) => e.stopPropagation()}>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('All')}>All</div>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('Easy')}>Easy</div>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('Medium')}>Medium</div>
                <div className={styles.dropdownItem} onClick={() => handleDifficultyFilter ('Hard')}>Hard</div>
              </div>
            )}
          </div>
          <span>{getSolvedCount()}/{filteredProblems.length}</span>
          <button className={`${styles.toggleButton} `}>
            <img  src={isOpen ? ArrowUp : ArrowDown} alt="Toggle Arrow" />
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
                <tr key={problem.id} onClick={(e) => e.stopPropagation()}>
                  <td className={`${styles.icons}`}>
                    <input type="checkbox" 
                    checked={solvedProblems[problem.id] || false}
                    onChange={() => handleCheckboxChange(problem.id)}
                    className={styles.checkbox}
                    />
                  </td>
                  <td onClick={() => handleQuestionClick(problem)}>{problem.name}</td>
                  <td className={styles.remove}><img src="src/assets/Artical.svg" alt="Article" className={styles.icons} /></td>
                  <td className={styles.remove}><img src="src/assets/YouTube.svg" alt="YouTube" className={styles.icons} /></td>
                  <td className={styles.remove}><img src="src/assets/Leetcode.svg" alt="Practice" className={styles.icons} /></td>
                  <td className={`${styles.icons} ${styles.remove}`}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(problem);
                      }}
                      className={styles.noteButton}>
                      <img src={getNoteIcon(problem.id)} alt="Note Icon" />
                    </button>
                  </td>
                  <td className={styles.difficulty}>{renderDifficultyBadge(problem.difficulty)}</td>
                  <td className={styles.remove}>
                    <img src={imageStates[problem.id] === 'RevisionShine' ? RevisionShine : Revision} alt="Revision Toggle" onClick={() => handleRevisionToggle(problem.id)} className={styles.icons} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.dropdownWrapper}>
            <button className={`${styles.playButton} ${styles.buttonEffect}`} onClick={toggleSetDropdown}>
              Complete Test 
            </button>
            {isSetDropdownOpen && (
              <div className={styles.setDropdownMenu}>
                <Link to="/quiz">
                <div
                className={styles.setDropdownItem}
                onClick={getquizQuestion}>
                  Set 1
                </div>
                </Link>
                <Link to="/quiz">
                <div
                className={styles.setDropdownItem}
                onClick={() => handleSetSelection('Set 2')}>
                  Set 2
                </div>
                </Link>
                <Link to="/quiz">
                <div
                className={styles.setDropdownItem}
                onClick={() => handleSetSelection('Set 3')}>
                  Set 3
                </div>
                </Link>
              </div>
            )}
          </div>

          {/* <button
          className={`${styles.playbutton} ${styles.buttonEffect}`}
          onClick={handleQuizStart}>
            Start quiz with {selectedSet}
          </button> */}

          {/* <button 
              className={`${styles.playButton} ${styles.buttonEffect} ${styles.topic}`}
              onClick={handleQuizStart}
              > Topic-Wise Test
            </button> */}

        </div>
      )}

      {isPopupVisible && currentQuestion && (
        <QuestionPopUp 
          isVisible={isPopupVisible}
          questionData={currentQuestion}
          onClose={closePopup}
        />
      )}

      {isModalOpen && (
        <NoteModal 
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSave={(note) => saveNote(selectedProblem.id, note)}
          initialNote={notes[selectedProblem.id] || ''}  
        />
      )}
    </div>
  );
}

export default QuestionTopicDropDown;
