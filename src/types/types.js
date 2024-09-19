// Define ScreenTypes as a plain object with keys and values
export const ScreenTypes = {
    SplashScreen: 0,
    QuizTopicsScreen: 1,
    QuizDetailsScreen: 2,
    QuestionScreen: 3,
    ResultScreen: 4,
  };
  
  // Define the Result type as a plain object
  export const Result = {
    selectedAnswer: [],  // Array of selected answers
    isMatch: false,      // Boolean to check if the answer is correct
  };
  
  // Define the QuizContextTypes object
  export const QuizContextTypes = {
    currentScreen: ScreenTypes.SplashScreen,
    setCurrentScreen: () => {}, // Function to set the current screen
    quizTopic: '',              // String for the quiz topic
    selectQuizTopic: (type) => {}, // Function to select a quiz topic
    questions: [],             // Array of questions
    setQuestions: () => {},    // Function to set questions
    result: [],                // Array of results
    setResult: () => {},       // Function to set results
    timer: 0,                  // Timer value
    setTimer: () => {},        // Function to set the timer
    endTime: 0,                // End time value
    setEndTime: () => {},      // Function to set end time
    quizDetails: {
      totalQuestions: 0,       // Total number of questions
      totalScore: 0,           // Total score
      totalTime: 0,            // Total time
      selectedQuizTopic: '',   // Selected quiz topic
    },
  };
  