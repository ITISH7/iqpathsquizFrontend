import React, {useEffect, useState, useCallback } from 'react';
import styles from './QuestionTopicDropDown.module.css';
import modalStyles from './NoteModal.module.css';
import ArrowUp from '../../assets/ArrowUp.svg';
import ArrowDown from '../../assets/ArrowDown.svg';
import Revision from '../../assets/Revision.svg';
import RevisionShine from '../../assets/RevisionShine.svg';
import utilityStyle from '../../utils/utils.module.css';
import { Link, useNavigate } from 'react-router-dom';
import NoteModal from './NoteModal';  
import axios from 'axios';
import { useQuiz } from '../../context/QuizContext';
import QuestionPopUp from '../../modals/QuestionPopUp/QuestionPopUp';
import NoteIcon from '../../assets/NoteIcon.svg';
import NoteFilledIcon from '../../assets/NoteFilledIcon.svg'
import { Service } from '../../axios/config';
import { use } from 'echarts';

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
  const [problems, setProblem] = useState([]);
  const [currentSubjectName, setCurrentSubjectName] = useState('Aptitude');
  const [values, setValues] = useState()
  const [topics, setTopics] = useState([]);
  const [ratings, setRatings] = useState({});

  const navigate = useNavigate();


  const { selectQuizTopic, setQuestions,questions, quizTopic, setTimer, setResult, setTotalMarks, setInitialTime } = useQuiz();

  const service = new Service();


  const getquizQuestion = async () => {
    try {
      const response = await service.GenerateTestQuestions({subjectName});
      console.log('response:', response)  
        
        if (response.status === 200) {
          const { questions, totalMarks, totalTime} = response.data.data
          console.log('question jo method me hai', questions)
          
          selectQuizTopic(subjectName)
          setQuestions(questions)
          setTotalMarks(totalMarks)
          setTimer(totalTime*60 );
          setInitialTime(totalTime*60)
          setResult([])  // Reset the result
          
          console.log('Quiz data fetched:', response.data)
          console.log('Questions are:', questions  )
          console.log('quiz topic:', quizTopic)
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error)
      }
  }

  const getSampleQuestion = async (subjectName) => {
    try {
      const response = await service.GenerateSampleQuestions(subjectName);
      // setQuestions(response.data.data);
      // setProblem(response.data.data);
      const questions = response.data.data;
      const updatedQuestions = questions.slice(0, 10)
      setProblem(updatedQuestions); 
      console.log('response:', response.data)
    } catch (error) {
      console.error(error);
    }
  }


  const getTopics = async (subjectName) => {
    try {
      const response = await service.GetTopics(subjectName);  // Assuming `GetTopics` is your API call
      const fetchedTopics = response.data.data;    // Adjust this to match your API structure
      console.log('fetched topics:', fetchedTopics);
      const updatedTopics = [{ topicName: 'All' }, ...fetchedTopics];;  // Add 'All' as the first topic
      setTopics(updatedTopics);  // Set the topics in state
    } catch (error) {
      console.error('Error fetching topics:', error);
    }
  };



  const getFilteredProblems = () => {
    return problems.filter(problem => {
      const difficultyMatch = difficultyFilter === "All" || problem.difficulty === difficultyFilter;
      const topicMatch = topicFilter === "All" || problem.topicName === topicFilter;
      return difficultyMatch && topicMatch;
    });
  };

  const filteredProblems = getFilteredProblems();

  const toggleSetDropdown = (event) => {
    // event.stopPropagation();
    setIsSetDropdownOpen(!isSetDropdownOpen);
  };

  const handleSetSelection = (setName) => {
    setSelectedSet(setName);
    setIsSetDropdownOpen(false);
  }

  const handleQuizStart = () => {
    console.log(`Starting quiz with ${selectedSet}`); 
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
    console.log('topic:', topicFilter)

  };

  const toggleTopicDropdown = (event) => {
    event.stopPropagation();
    setIsTopicDropdownOpen(!isTopicDropdownOpen);
  };


  
  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    setIsTopicDropdownOpen(false);
    // setTopicFilter(topic);
    const newFilterProblems = problems.filter((problem) => topic === 'All' || problem.topic === topic
    );
    setFilterProblems(newFilterProblems);
  };
  
  const handleRevisionToggle = (_id) => {
    setImageStates((prev) => {
      // Toggle the state of the specific problem's id
      const updatedState = {
        ...prev, 
        [_id]: prev[_id] === "RevisionShine" ? "Revision" : "RevisionShine"
      };
  
      // Save the updated state to localStorage for persistence
      localStorage.setItem('imageStates', JSON.stringify(updatedState));
  
      // Return the updated state for React to manage
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
    const savedCheckboxColors = JSON.parse(localStorage.getItem('checkboxColors')) || {};
    setSolvedProblems(savedSolvedProblems);
    // setCheckboxColors(savedCheckboxColors);
  }, []);

  const getSolvedCount = () => {
    return filteredProblems.filter((problem) => solvedProblems[problem._id]).length;
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

  const handleQuestionClick = (problem) => {
    const uniqueId = `${problem._id}`;
    setCurrentQuestion({ ...problem, uniqueId});
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
      const savedNotes = localStorage.getItem('userNotes');
      
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
      // getdata();
      console.log('Loaded notes from localStorage:', notes);
    }, []);
          

    const updatedSolvedProblems = (problemId, isCorrect) => {
      if (isCorrect) {
        setSolvedProblems((prevSolved) => ({
          ...prevSolved,
          [problemId]: true,
        }));
        localStorage.setItem('solvedProblems', JSON.stringify({
          ...solvedProblems,
          [problemId]: true, 
        }));
      }
    };

    const isChecked = JSON.parse(localStorage.getItem(`solvedProblem-${problems.id}`)) || false;
      
            
  return (
    <div
      className={`${styles.tableContainer} ${
        isOpen ? styles.tableContainerOpen : ""
      }`}
    >
      <div
        className={`${styles.header} ${utilityStyle.container} ${
          isOpen ? styles.headerOpen : ""
        }`}
        onClick={() => {
          toggleDropdown();
          getSampleQuestion(subjectName);
          getTopics(subjectName);
        }}
      >
        <h2>{`${subjectName}`}</h2>
        <div
          className={`${styles.progress} ${isOpen ? styles.progressOpen : ""}`}
        >
          {/* <div className={styles.filterButtonWrapper} onClick={(e) => e.stopPropagation()}>
            <button className={`${styles.filterButton} ${styles.buttonEffect}`} onClick={toggleFilterDropdown1}>
            
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
                  
          </div> */}

          <div
            className={styles.filterButtonWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${styles.filterButton} ${styles.buttonEffect}`}
              onClick={toggleFilterDropdown1}
            >
              {topicFilter === "All" ? (
                <>
                  <img src="src/assets/FilterIcon.svg" alt="Filter" />
                  Topic
                </>
              ) : (
                <>{topicFilter}</>
              )}
            </button>

            {isFilterOpen1 && (
              <div
                className={styles.dropdownMenu}
                onClick={(e) => e.stopPropagation()}
              >
                {topics.length > 0 ? (
                  topics.map((topic, index) => (
                    <div
                      key={index}
                      className={styles.dropdownItem}
                      onClick={() => handleTopicFilter(topic.topicName)} // Assuming `subjectName` is the topic name
                    >
                      {topic.topicName}
                    </div>
                  ))
                ) : (
                  <div className={styles.dropdownItem}>Loading...</div> // Fallback while loading
                )}
              </div>
            )}
          </div>

          <div
            className={styles.filterButtonWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${styles.filterButton} ${styles.filter2} ${styles.buttonEffect}`}
              onClick={toggleFilterDropdown2}
            >
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
              <div
                className={styles.dropdownMenu}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleDifficultyFilter("All")}
                >
                  All
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleDifficultyFilter("Easy")}
                >
                  Easy
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleDifficultyFilter("Medium")}
                >
                  Medium
                </div>
                <div
                  className={styles.dropdownItem}
                  onClick={() => handleDifficultyFilter("Hard")}
                >
                  Hard
                </div>
              </div>
            )}
          </div>
          <div className={`${styles.questionsSolved}`}>
            {getSolvedCount()}/{filteredProblems.length}
          </div>
          <button className={`${styles.toggleButton} `}>
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
              {filteredProblems.map((problem, index) => (
                <tr
                  key={`${problem.id}-${index}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <td className={`${styles.icons}`}>
                    <input
                      type="checkbox"
                      checked={solvedProblems[problem._id] || false}
                      onChange={() => handleCheckboxChange(problem._id)}
                      className={`${styles.customCheckbox} ${
                        solvedProblems[problem._id] ? styles.checked : ""
                      }`}
                    />
                  </td>
                  <td onClick={() => handleQuestionClick(problem, index)}>
                    {problem.questionContent}
                  </td>
                  <td className={styles.remove}>
                    <img
                      src="src/assets/Artical.svg"
                      alt="Article"
                      className={styles.icons}
                    />
                  </td>
                  <td className={styles.remove}>
                    <img
                      src="src/assets/YouTube.svg"
                      alt="YouTube"
                      className={styles.icons}
                    />
                  </td>
                  <td className={styles.remove}>
                    <img
                      src="src/assets/Leetcode.svg"
                      alt="Practice"
                      className={styles.icons}
                    />
                  </td>
                  <td className={`${styles.icons} ${styles.remove}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(problem._id);
                      }}
                      className={styles.noteButton}
                    >
                      <img src={getNoteIcon(problem._id)} alt="Note Icon" />
                    </button>
                  </td>
                  <td className={styles.difficulty}>
                    {renderDifficultyBadge(problem.difficulty)}
                  </td>
                  <td className={styles.remove}>
                    <img
                      src={ imageStates[problem._id] === "RevisionShine" ? RevisionShine : Revision }
                      alt="Revision Toggle"
                      onClick={() => 
                      {
                        console.log("problem._id:", problem._id);
                        handleRevisionToggle(problem._id);
                      }}
                      className={styles.icons}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.wrapper}>
            <div className={styles.dropdownWrapper}>
              <button
                className={`${styles.playButton} ${styles.buttonEffect}`}
                onClick={() => {
                  toggleSetDropdown();
                  // fetchQuizData('Apptitude');
                  getquizQuestion();
                  // setValues()
                  // navigate(`/quiz/${subjectName}`)
                  console.log("quiz topic:", quizTopic);
                }}
              >
                Complete Test
              </button>
              {isSetDropdownOpen && (
                <div className={styles.setDropdownMenu}>
                  <Link to={`/quiz`}>
                    <div
                      className={styles.setDropdownItem}
                      // onClick={handleQuizStart}
                    >
                      Set 1
                    </div>
                  </Link>
                  <Link to="/quiz">
                    <div
                      className={styles.setDropdownItem}
                      onClick={() => handleSetSelection("Set 2")}
                    >
                      Set 2
                    </div>
                  </Link>
                  <Link to="/quiz">
                    <div
                      className={styles.setDropdownItem}
                      onClick={() => handleSetSelection("Set 3")}
                    >
                      Set 3
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className={styles.dropdownWrapper}>
              <button
                className={`${styles.playButton} ${styles.buttonEffect}`}
                onClick={toggleTopicDropdown}
              >
                Topic-Wise Test
              </button>
              {isTopicDropdownOpen && (
                <div className={styles.setDropdownMenu}>
                  <div
                    className={styles.setDropdownItem}
                    onClick={() => handleTopicSelection("All")}
                  >
                    All Topics
                  </div>
                  <div
                    className={styles.setDropdownItem}
                    onClick={() => handleTopicSelection("Array")}
                  >
                    Array
                  </div>
                  <div
                    className={styles.setDropdownItem}
                    onClick={() => handleTopicSelection("String")}
                  >
                    String
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && currentQuestion && (
        <QuestionPopUp
          isVisible={isPopupVisible}
          questionData={currentQuestion}
          uniqueId={currentQuestion.uniqueId}
          onClose={closePopup}
        />
      )}

      {isModalOpen && (
        <NoteModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSave={(note) => saveNote(selectedProblem.id, note)}
          initialNote={notes[selectedProblem.id] || ""}
        />
      )}
    </div>
  );
}

export default QuestionTopicDropDown;
