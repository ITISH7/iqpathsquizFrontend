import React, { useEffect, useState, useCallback, useContext } from "react";
import styles from "./QuestionTopicDropDown.module.css";
import ArrowUp from "../../assets/ArrowUp.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import Revision from "../../assets/Revision.svg";
import RevisionShine from "../../assets/RevisionShine.svg";
import utilityStyle from "../../utils/utils.module.css";
import { Link, useNavigate } from "react-router-dom";
import NoteModal from "./NoteModal";
import { useQuiz } from "../../context/QuizContext";
import QuestionPopUp from "../../modals/QuestionPopUp/QuestionPopUp";
import LoginPopup from "../../modals/LoginPopUp/LoginPopUp";
import { AuthContext } from "../../context/AuthContext";
import NoteIcon from "../../assets/NoteIcon.svg";
import NoteFilledIcon from "../../assets/NoteFilledIcon.svg";
import { Service } from "../../axios/config";
import Pagination from '@mui/material/Pagination';



function QuestionTopicDropDown({ subjectName, title = "Python" }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen1, setIsFilterOpen1] = useState(false);
  const [isFilterOpen2, setIsFilterOpen2] = useState(false);
  const [isSetDropdownOpen, setIsSetDropdownOpen] = useState(false);
  const [isTopicDropOpen, setIsTopicDropOpen] = useState(false);
  const [isDiffDropOpen, setIsDiffDropOpen] = useState(false);
  const [selectedSet, setSelectedSet] = useState("Set 1");
  const [imageStates, setImageStates] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState({});
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [topicFilter, setTopicFilter] = useState("All");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [problems, setProblem] = useState([]);
  const [topics, setTopics] = useState([]);
  const [ratings, setRatings] = useState({});
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentCheckboxImage, setCurrentCheckboxImage] = useState("NotChecked");
  const [page, setPage] = useState(1);
  const [showQuestionPopUp, setShowQuestionPopUp] = useState(false);
  const [notesBackend, setNotesBackend] = useState({});
  const [dropdownOpenNotesTrigger, setDropdownOpenNotesTrigger] = useState(false);


  const toggleDropdonwOpenNotesTrigger = () => {
      setTimeout(() => {
        setDropdownOpenNotesTrigger((prevState) => !prevState);
      }, 500);
  };


  const navigate = useNavigate();

  const {
    selectQuizTopic,
    setQuestions,
    questions,
    quizTopic,
    setTimer,
    setResult,
    setTotalMarks,
    setInitialTime,
    initialTime,
  } = useQuiz();


  const service = new Service();

  const getquizQuestion = async () => {
    try {
      const response = await service.GenerateTestQuestions({ subjectName });
      // console.log('response:', response)

      if (response.status === 200) {
        const { questions, totalMarks, totalTime } = response.data.data;
        // console.log('question jo method me hai', questions)

        selectQuizTopic(subjectName);
        setQuestions(questions);
        setTotalMarks(totalMarks);
        setTimer(totalTime * 60);
        setInitialTime(totalTime * 60);
        // console.log('initial time:', totalTime*60)
        // console.log('initial time:', initialTime)

        setResult([]); // Reset the result

        console.log('Quiz data fetched:', response.data)
        // console.log('Questions are:', questions  )
        // console.log('quiz topic:', quizTopic)
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  const getSampleQuestion = async (subjectName) => {
    try {
      const response = await service.GenerateSampleQuestions(subjectName);
      // setQuestions(response.data.data);
      // setProblem(response.data.data);
      const questions = response.data.data;
      const updatedQuestions = questions;
      setProblem(updatedQuestions);
      // console.log('response:', response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const getTopics = async (subjectName) => {
    try {
      const response = await service.GetTopics(subjectName); // Assuming `GetTopics` is your API call
      const fetchedTopics = response.data.data; // Adjust this to match your API structure
      // console.log('fetched topics:', fetchedTopics);
      const updatedTopics = [{ topicName: "All" }, ...fetchedTopics]; // Add 'All' as the first topic
      setTopics(updatedTopics); // Set the topics in state
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  const getFilteredProblems = () => {
    return problems.filter((problem) => {
      const difficultyMatch =
        difficultyFilter === "All" || problem.difficulty === difficultyFilter;
      const topicMatch =
        topicFilter === "All" || problem.topicName === topicFilter;
      return difficultyMatch && topicMatch;
    });
  };

  const filteredProblems = getFilteredProblems();

  const toggleSetDropdown = (event) => {
    // event.stopPropagation();
    // setIsSetDropdownOpen(!isSetDropdownOpen);
    setIsSetDropdownOpen((prevState) => !prevState);
  };

  const toggleTopicDrop = () => {
    // event.stopPropagation();
    // setIsSetDropdownOpen(!isSetDropdownOpen);
    setIsTopicDropOpen((prevState) => !prevState);
  };

  const toggleDiffDropOpen = () => {
    setIsDiffDropOpen((prevState) => !prevState);
  };

  const handleSetSelection = (setName) => {
    setSelectedSet(setName);
    setIsSetDropdownOpen(false);
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
      if (
        !event.target.closest(`.${styles.dropdownWrapper}`) &&
        !event.target.closest(`.${styles.header}`)
      ) {
        setIsSetDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
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
    console.log("topic:", topicFilter);
  };

  const toggleTopicDropdown = (event) => {
    event.stopPropagation();
    setIsTopicDropdownOpen(!isTopicDropdownOpen);
  };

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
    setIsTopicDropdownOpen(false);
    // setTopicFilter(topic);
    const newFilterProblems = problems.filter(
      (problem) => topic === "All" || problem.topic === topic
    );
    setFilterProblems(newFilterProblems);
  };

  const handleRevisionToggle = (_id) => {
    setImageStates((prev) => {
      // Toggle the state of the specific problem's id
      const updatedState = {
        ...prev,
        [_id]: prev[_id] === "RevisionShine" ? "Revision" : "RevisionShine",
      };

      // Save the updated state to localStorage for persistence
      localStorage.setItem("imageStates", JSON.stringify(updatedState));

      // Return the updated state for React to manage
      return updatedState;
    });
  };

  useEffect(() => {
    const savedImageStates =
      JSON.parse(localStorage.getItem("imageStates")) || {};
    setImageStates(savedImageStates);
  }, []);


  const getSolvedCount = () => {
    return filteredProblems.filter((problem) => solvedProblems[problem._id])
      .length;
  };

  const openModal = (problemId) => {
    if (!isLoggedIn) {
      setShowPopUp(true);
    } else {
      setSelectedProblem(problemId);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  //get notes from backend
  const getNoteIcon = (problemId) => {
    return notesBackend[problemId] ? NoteFilledIcon : NoteIcon;
  };

  const saveNotesToBackend = async (userId, questionId, notes) => {
    try {
      const response = await service.SaveNotes({ userId, questionId, notes });
      console.log("Notes saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving notes:", error);
    }
  };

  const getSavedNoteFromBackend = async (userId, problemId ) => {
    try {
      const response = await service.GetNotes({ userId, questionId: problemId });
      // console.log("Notes fetched successfully:", response.data);
      const fetchedNote = response.data.data[0]?.notes || "";

      setNotesBackend((prevNotes) => ({
        ...prevNotes,
        [problemId ]: fetchedNote,
      }));

      // console.log(`Note fetched for this problem ${problemId }:`, fetchedNote);
    } catch (error) {
      console.error(`Error fetching note for problem ${problemId }:`, error);
    }
  };

  
  useEffect(() => {
    const problemsOnPage = filteredProblems.slice(page * 10 - 10, page * 10);
  
    const problemsToFetch = problemsOnPage.filter(
      (problem) => !(problem._id in notesBackend)
    );

    problemsToFetch.forEach((problem) => {

      getSavedNoteFromBackend(userId, problem._id);
      
    });
  }, [page, dropdownOpenNotesTrigger]);

  const saveNote = (problemId, noteContent) => {
    const trimmedNote = noteContent.trim();

    setNotesBackend((prevNotes) => ({
      ...prevNotes,
      [problemId]: trimmedNote,
    }));

    saveNotesToBackend(userId, problemId, trimmedNote);
  };

  const handleQuestionClick = (problem) => {
    if (!isLoggedIn) {
      handleLoginClick();
    } else {
      const uniqueId = `${problem._id}`;
      setCurrentQuestion({ ...problem, uniqueId });
      setIsPopupVisible(true);
      setShowQuestionPopUp(true);
      setShowPopUp(true);
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setCurrentQuestion(null);
    setShowPopUp(false);
    setShowQuestionPopUp(false);
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


  const handleLoginClick = () => {
    setShowPopUp(true);
  };

  //sample question status of save and review

  const setSampleQuestionStatus = async ( userId, questionId, subjectName, difficulty,  status ) => {
    try {
      const response = await service.SampleQuestionSaveAndReview({ userId, questionId, subjectName, difficulty, status });
      console.log("Status saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving status:", error);
    }
  };


  const getSampleQuestionStatus = async (userId, status) => {
    try {
      const response = await service.getSampleQuestionSaveAndReview({ userId, status });
      console.log("Status fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching status:", error);
    }
  };
  
  useEffect(() => {
    const savedSolvedProblems =
      JSON.parse(localStorage.getItem("solvedProblems")) || {};
    setSolvedProblems(savedSolvedProblems);
  }, []);
  
  const handleCheckboxChange = (problemId, newState = null) => {
    setSolvedProblems((prevSolved) => {
      const currentState = prevSolved[problemId];

      const updatedState = newState || currentState;

      const updatedSolvedProblems = {
        ...prevSolved,
        [problemId]: updatedState,
      };

      localStorage.setItem(
        "solvedProblems",
        JSON.stringify(updatedSolvedProblems)
      );

      return updatedSolvedProblems;
    });
  };

  
  const handleCheckboxSave = (problemId, difficulty, subjectName) => {
    // setCurrentCheckboxImage('Saved');
    handleCheckboxChange(problemId, "Saved");
    setSampleQuestionStatus(userId , problemId, subjectName, difficulty, "Save");
    
  };
  
  const handleCheckboxReview = (problemId, difficulty, subjectName) => {
    // setCurrentCheckboxImage('Review');
    handleCheckboxChange(problemId, "Reviewed");
    setSampleQuestionStatus(userId , problemId, subjectName, difficulty, "Review");
  };

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
          toggleDropdonwOpenNotesTrigger();
          getSampleQuestion(subjectName);
          getTopics(subjectName);
        }}
      >
        <h2>{`${subjectName}`}</h2>
        <div
          className={`${styles.progress} ${isOpen ? styles.progressOpen : ""}`}
        >
          

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
                  Topic
                  <img className={styles.downArrow} src={isFilterOpen1 ?"src/assets/angle-up.svg" : "src/assets/angle-down.svg"} alt="Filter" />
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
                  Difficulty
                  <img className={styles.downArrow} src={isFilterOpen2 ?"src/assets/angle-up.svg" : "src/assets/angle-down.svg"} alt="Filter" />
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
                <th className={styles.remove}>Important</th>
              </tr>
            </thead>
            <tbody>
              {filteredProblems
                .slice(page * 10 - 10, page * 10)
                .map((problem, index) => (
                  // console.log('problem:', problem),
                  <tr
                    key={`${problem.id}-${index}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <td className={`${styles.icons} ${styles.checkbox}`}>
                      <img
                        src={
                          solvedProblems[problem._id] === "NotChecked" ||
                          !solvedProblems[problem._id]
                            ? "src/assets/NoCheckbox.svg"
                            : solvedProblems[problem._id] === "Saved"
                            ? "src/assets/savecheck.svg"
                            : "src/assets/reviewcheck.svg"
                        }
                        alt="Checkbox"
                        
                      />
                    </td>

                  <td onClick={() => handleQuestionClick(problem, index)}>
                    {problem.questionContent}
                    <button> 
                      {showQuestionPopUp && (
                        <QuestionPopUp
                          question={problem}
                          onClose={closePopup}
                        />
                      )}
                    </button>
                    <LoginPopup
                      message="Please login first"
                      show={showPopUp}
                      duration={5000}
                      onClose={closePopup}
                    />
                  </td>
                  <td className={styles.soon}>
                    {/* <img
                      src="src/assets/Artical.svg"
                      alt="Article"
                      className={styles.icons}
                    /> */}
                      soon...
                    </td>
                    <td className={styles.remove}>
                      {/* <img
                      src="src/assets/YouTube.svg"
                      alt="YouTube"
                      className={styles.icons}
                    /> */}
                      soon...
                    </td>
                    <td className={styles.remove}>
                      {/* <img
                      src="src/assets/Leetcode.svg"
                      alt="Practice"
                      className={styles.icons}
                    /> */}
                      soon...
                    </td>
                    <td
                      className={`${styles.icons} ${styles.remove}`}
                      key={problem._id}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isLoggedIn) {
                            handleLoginClick();
                          } else {
                            openModal(problem._id);
                            
                          }
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
                        src={
                          imageStates[problem._id] === "RevisionShine"
                            ? RevisionShine
                            : Revision
                        }
                        alt="Revision Toggle"
                        onClick={() => {
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

          {filteredProblems.length > 0 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className={styles.doubleArrow}
                >
                  <img className={styles.rightArrow} src="src\assets\double-left.svg" alt="right arrow" />
                  First 
              </button>
              <button
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 1}
              >
                <img className={styles.rightArrow} src="src\assets\angle-left.svg" alt="right arrow" />
                Prev
              </button>
              <p>
                Page {page} of {Math.ceil(filteredProblems.length / 10)}
              </p>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                disabled={page * 10 >= filteredProblems.length}
              >
                Next
                <img className={styles.rightArrow} src="src\assets\angle-right.svg" alt="right arrow" />
              </button>
              <button 
                onClick={() => setPage(Math.ceil(filteredProblems.length / 10))}
                disabled={page === Math.ceil(filteredProblems.length / 10)}
                className={styles.doubleArrow}
              >
                Last
                <img className={styles.rightArrow} src="src\assets\double-right.svg" alt="right arrow" />
              </button>
            </div>
            // <Pagination count={10} variant="outlined" shape="rounded" />
            // <Pagination
            //   count={Math.ceil(filteredProblems.length / 10)} // Total number of pages
            //   page={page} // Current page
            //   onChange={(event, value) => setPage(value)} // Update page on change
            //   variant="outlined"
            //   shape="rounded"
            //   showFirstButton
            //   showLastButton
            // />
            
          )}

          {filteredProblems.length > 0 && (
            <div className={styles.wrapper}>
              <div className={styles.dropdownWrapper}>
                <button
                  className={`${styles.playButton} ${styles.buttonEffect} ${styles.lower1}`}
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowPopUp(true);
                    } else {
                      toggleSetDropdown();
                      getquizQuestion();
                      console.log("quiz topic:", quizTopic);
                    }
                  }}
                  >
                  Complete Test 
                  <img className={styles.downArrow} src={isSetDropdownOpen ?"src/assets/angle-up.svg" : "src/assets/angle-down.svg"} alt="Filter" />
                </button>
                {isSetDropdownOpen && (
                  <div className={styles.setDropdownMenu}>
                    <Link to={`/quiz`}>
                      <div
                        className={`${styles.setDropdownItem} ${styles.testSets}`}
                        // onClick={handleQuizStart}
                      >
                        Set 1
                      </div>
                    </Link>
                    <Link to="/quiz">
                      <div
                        className={`${styles.setDropdownItem} ${styles.testSets}`}
                        onClick={() => handleSetSelection("Set 2")}
                      >
                        Set 2
                      </div>
                    </Link>
                    <Link to="/quiz">
                      <div
                        className={`${styles.setDropdownItem} ${styles.testSets}`}
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
                  className={`${styles.playButton} ${styles.buttonEffect} ${styles.lower2}`}
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowPopUp(true);
                    } else {
                      toggleTopicDrop();
                    }
                  }}
                >
                  Topic-Wise Test
                  <img className={styles.downArrow} src={isTopicDropOpen ?"src/assets/angle-up.svg" : "src/assets/angle-down.svg"} alt="Filter" />
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

              <div className={styles.dropdownWrapper}>
                <button
                  className={`${styles.playButton} ${styles.buttonEffect} ${styles.lower3}`}
                  onClick={() => {
                    if (!isLoggedIn) {
                      setShowPopUp(true);
                    } else {
                      toggleDiffDropOpen();
                    }
                  }}
                >
                  Difficulty-Wise Test
                  <img className={styles.downArrow} src={isDiffDropOpen ?"src/assets/angle-up.svg" : "src/assets/angle-down.svg"} alt="Filter" />
                </button>
                {isTopicDropdownOpen && (
                  <div className={styles.setDropdownMenu}>
                    <div
                      className={styles.setDropdownItem}
                      onClick={() => handleTopicSelection("Easy")}
                    >
                      Easy
                    </div>
                    <div
                      className={styles.setDropdownItem}
                      onClick={() => handleTopicSelection("Medium")}
                    >
                      Medium
                    </div>
                    <div
                      className={styles.setDropdownItem}
                      onClick={() => handleTopicSelection("Hard")}
                    >
                      Hard
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {isPopupVisible && currentQuestion && (
        <QuestionPopUp
          isVisible={isPopupVisible}
          questionData={currentQuestion}
          uniqueId={currentQuestion._id}
          onClose={closePopup}
          handleCheckboxReview={handleCheckboxReview}
          handleCheckboxSave={handleCheckboxSave}
        />
      )}

      {isModalOpen && (
        <NoteModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          // onSave={(note) => saveNote(selectedProblem.id, note)}
          onSave={saveNote}
          initialNote={notesBackend[selectedProblem] || ""}
          problemId={selectedProblem}
        />
      )}
    </div>
  );
}

export default QuestionTopicDropDown;
