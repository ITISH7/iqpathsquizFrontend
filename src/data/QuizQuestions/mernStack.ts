import { Topic } from '.'

export const MernStack: Topic = {
  topic: 'Mern Stack',
  level: 'Advance',
  totalQuestions: 40,
  totalScore: 160,
  totalTime: 2400,
  questions: [
    {
        question: "Which of the following is a NoSQL database?",
        choices: [
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "SQLite"
        ],
        type: "MCQs",
        correctAnswers: ["MongoDB"],
        score: 4
    },
    {
        question: "Which command is used to install a package using npm?",
        choices: [
            "npm install",
            "npm add",
            "npm get",
            "npm include"
        ],
        type: "MCQs",
        correctAnswers: ["npm install"],
        score: 4
    },
    {
        question: "In React, which method is used to update the state of a component?",
        choices: [
            "setState",
            "updateState",
            "changeState",
            "modifyState"
        ],
        type: "MCQs",
        correctAnswers: ["setState"],
        score: 4
    },
    {
        question: "Which of the following is a middleware function in Express.js?",
        choices: [
            "app.get()",
            "app.use()",
            "app.post()",
            "app.listen()"
        ],
        type: "MCQs",
        correctAnswers: ["app.use()"],
        score: 4
    },
    {
        question: "What does JSX stand for in React?",
        choices: [
            "JavaScript XML",
            "JavaScript Xtreme",
            "JavaScript Syntax",
            "JavaScript Extension"
        ],
        type: "MCQs",
        correctAnswers: ["JavaScript XML"],
        score: 4
    },
    {
        question: "Which of the following is used to define a schema in Mongoose?",
        choices: [
            "Mongoose.Schema",
            "Mongoose.Model",
            "Mongoose.Document",
            "Mongoose.Instance"
        ],
        type: "MCQs",
        correctAnswers: ["Mongoose.Schema"],
        score: 4
    },
    {
        question: "Which lifecycle method is invoked immediately after a React component is mounted?",
        choices: [
            "componentDidMount",
            "componentWillMount",
            "componentDidUpdate",
            "componentWillUnmount"
        ],
        type: "MCQs",
        correctAnswers: ["componentDidMount"],
        score: 4
    },
    {
        question: "Which of the following commands starts a Node.js application?",
        choices: [
            "node start",
            "npm start",
            "node app.js",
            "npm app.js"
        ],
        type: "MCQs",
        correctAnswers: ["node app.js"],
        score: 4
    },
    {
        question: "In MongoDB, which of the following is used to create a new collection?",
        choices: [
            "db.createCollection()",
            "db.newCollection()",
            "db.addCollection()",
            "db.makeCollection()"
        ],
        type: "MCQs",
        correctAnswers: ["db.createCollection()"],
        score: 4
    },
    {
        question: "What is the purpose of the 'useEffect' hook in React?",
        choices: [
            "To manage side effects in functional components",
            "To manage state in functional components",
            "To create new components",
            "To handle user input"
        ],
        type: "MCQs",
        correctAnswers: ["To manage side effects in functional components"],
        score: 4
    },
    {
        question: "Which command is used to create a new React application?",
        choices: [
            "npx create-react-app",
            "npm create-react-app",
            "react-create-app",
            "npm init react-app"
        ],
        type: "MCQs",
        correctAnswers: ["npx create-react-app"],
        score: 4
    },
    {
        question: "In Express.js, how do you define a route to handle GET requests?",
        choices: [
            "app.get('/route', callback)",
            "app.post('/route', callback)",
            "app.route('/route', callback)",
            "app.use('/route', callback)"
        ],
        type: "MCQs",
        correctAnswers: ["app.get('/route', callback)"],
        score: 4
    },
    {
        question: "Which of the following methods is used to connect to a MongoDB database using Mongoose?",
        choices: [
            "mongoose.connect()",
            "mongoose.link()",
            "mongoose.attach()",
            "mongoose.join()"
        ],
        type: "MCQs",
        correctAnswers: ["mongoose.connect()"],
        score: 4
    },
    {
        question: "What is the virtual DOM in React?",
        choices: [
            "A lightweight copy of the real DOM",
            "A feature to handle CSS",
            "A way to manage HTTP requests",
            "A method to store data locally"
        ],
        type: "MCQs",
        correctAnswers: ["A lightweight copy of the real DOM"],
        score: 4
    },
    {
        question: "Which of the following is used to handle errors in Express.js?",
        choices: [
            "app.error()",
            "app.catch()",
            "app.use() with an error-handling middleware",
            "app.onError()"
        ],
        type: "MCQs",
        correctAnswers: ["app.use() with an error-handling middleware"],
        score: 4
    },
    {
        question: "In React, which hook is used to access the previous state or props?",
        choices: [
            "usePrevious",
            "useEffect",
            "useState",
            "useRef"
        ],
        type: "MCQs",
        correctAnswers: ["useRef"],
        score: 4
    },
    {
        question: "Which of the following methods is used to update documents in MongoDB?",
        choices: [
            "db.collection.updateOne()",
            "db.collection.changeOne()",
            "db.collection.modifyOne()",
            "db.collection.alterOne()"
        ],
        type: "MCQs",
        correctAnswers: ["db.collection.updateOne()"],
        score: 4
    },
    {
        question: "Which tool is used to transpile modern JavaScript (ES6+) down to ES5?",
        choices: [
            "Webpack",
            "Babel",
            "Parcel",
            "Rollup"
        ],
        type: "MCQs",
        correctAnswers: ["Babel"],
        score: 4
    },
    {
        question: "In Node.js, which module is used to create a web server?",
        choices: [
            "http",
            "url",
            "fs",
            "path"
        ],
        type: "MCQs",
        correctAnswers: ["http"],
        score: 4
    },
    {
        question: "Which method is used to render a React component into the DOM?",
        choices: [
            "ReactDOM.render()",
            "React.render()",
            "ReactDOM.create()",
            "React.create()"
        ],
        type: "MCQs",
        correctAnswers: ["ReactDOM.render()"],
        score: 4
    },
    {
        question: "Which of the following is a state management library for React?",
        choices: [
            "Redux",
            "Express",
            "Mongoose",
            "Axios"
        ],
        type: "MCQs",
        correctAnswers: ["Redux"],
        score: 4
    },
    {
        question: "What does the 'package.json' file contain?",
        choices: [
            "Metadata about the project and its dependencies",
            "Configuration for the database connection",
            "List of available routes in the application",
            "Styles and themes for the application"
        ],
        type: "MCQs",
        correctAnswers: ["Metadata about the project and its dependencies"],
        score: 4
    },
    {
        question: "Which of the following commands is used to initialize a new Node.js project?",
        choices: [
            "npm init",
            "npm start",
            "npm install",
            "npm create"
        ],
        type: "MCQs",
        correctAnswers: ["npm init"],
        score: 4
    },
    {
        question: "What is the primary purpose of using hooks in React?",
        choices: [
            "To manage side effects and state in functional components",
            "To handle HTTP requests",
            "To manage CSS styles",
            "To create new components"
        ],
        type: "MCQs",
        correctAnswers: ["To manage side effects and state in functional components"],
        score: 4
    },
    {
        question: "Which method is used to delete a document in MongoDB?",
        choices: [
            "db.collection.deleteOne()",
            "db.collection.removeOne()",
            "db.collection.eraseOne()",
            "db.collection.clearOne()"
        ],
        type: "MCQs",
        correctAnswers: ["db.collection.deleteOne()"],
        score: 4
    },
    {
        question: "What does CORS stand for in the context of web development?",
        choices: [
            "Cross-Origin Resource Sharing",
            "Cross-Object Resource Sharing",
            "Cross-Origin Request Scripting",
            "Cross-Object Request Scripting"
        ],
        type: "MCQs",
        correctAnswers: ["Cross-Origin Resource Sharing"],
        score: 4
    },
    {
        question: "In React, which hook is used to add state to functional components?",
        choices: [
            "useState",
            "useEffect",
            "useContext",
            "useReducer"
        ],
        type: "MCQs",
        correctAnswers: ["useState"],
        score: 4
    },
    {
        question: "Which of the following is used to define a route in Express.js?",
        choices: [
            "Router",
            "Path",
            "Route",
            "Endpoint"
        ],
        type: "MCQs",
        correctAnswers: ["Router"],
        score: 4
    },
    {
        question: "What is the purpose of the 'express.json()' middleware in Express.js?",
        choices: [
            "To parse incoming JSON requests",
            "To serve static files",
            "To handle URL encoding",
            "To manage session data"
        ],
        type: "MCQs",
        correctAnswers: ["To parse incoming JSON requests"],
        score: 4
    },
    {
        question: "Which of the following is a popular library for making HTTP requests in JavaScript?",
        choices: [
            "Axios",
            "Lodash",
            "Express",
            "Mongoose"
        ],
        type: "MCQs",
        correctAnswers: ["Axios"],
        score: 4
    },
    {
        question: "In React, which hook is used to manage context?",
        choices: [
            "useContext",
            "useReducer",
            "useMemo",
            "useCallback"
        ],
        type: "MCQs",
        correctAnswers: ["useContext"],
        score: 4
    },
    {
        question: "What is the purpose of the 'express.static()' middleware in Express.js?",
        choices: [
            "To serve static files",
            "To parse incoming JSON requests",
            "To handle URL encoding",
            "To manage session data"
        ],
        type: "MCQs",
        correctAnswers: ["To serve static files"],
        score: 4
    },
    {
        question: "Which of the following methods is used to insert a document into a MongoDB collection?",
        choices: [
            "db.collection.insertOne()",
            "db.collection.addOne()",
            "db.collection.putOne()",
            "db.collection.saveOne()"
        ],
        type: "MCQs",
        correctAnswers: ["db.collection.insertOne()"],
        score: 4
    },
    {
        question: "In React, what is the purpose of the 'key' attribute in a list?",
        choices: [
            "To help React identify which items have changed",
            "To add styles to the list items",
            "To handle user input",
            "To manage state in the list items"
        ],
        type: "MCQs",
        correctAnswers: ["To help React identify which items have changed"],
        score: 4
    },
    {
        question: "Which of the following is a Node.js framework for building APIs?",
        choices: [
            "Express.js",
            "React.js",
            "Angular.js",
            "Vue.js"
        ],
        type: "MCQs",
        correctAnswers: ["Express.js"],
        score: 4
    },
    {
        question: "What does the 'path' module in Node.js provide?",
        choices: [
            "Utilities for working with file and directory paths",
            "Functions to handle HTTP requests",
            "Methods to interact with the database",
            "Tools for working with streams"
        ],
        type: "MCQs",
        correctAnswers: ["Utilities for working with file and directory paths"],
        score: 4
    },
    {
        question: "In React, which hook is used to manage side effects?",
        choices: [
            "useEffect",
            "useState",
            "useContext",
            "useReducer"
        ],
        type: "MCQs",
        correctAnswers: ["useEffect"],
        score: 4
    },
    {
        question: "Which of the following commands is used to run a Node.js application?",
        choices: [
            "node app.js",
            "npm start",
            "node start",
            "npm app.js"
        ],
        type: "MCQs",
        correctAnswers: ["node app.js"],
        score: 4
    },
    {
        question: "What is the primary use of the 'connect' function in Mongoose?",
        choices: [
            "To connect to a MongoDB database",
            "To define a schema",
            "To create a model",
            "To update a document"
        ],
        type: "MCQs",
        correctAnswers: ["To connect to a MongoDB database"],
        score: 4
    },
    {
        question: "In Express.js, how do you handle errors globally?",
        choices: [
            "By defining an error-handling middleware",
            "By using try-catch blocks in each route",
            "By creating a separate error file",
            "By using the 'error' event"
        ],
        type: "MCQs",
        correctAnswers: ["By defining an error-handling middleware"],
        score: 4
    }
]

}