// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
// import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 38,
  totalScore: 152,
  totalTime: 2400,
  questions: [
    {
      question: 'What is JSX in React?',
      choices: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
        'A state management library for React applications',
        'A build tool for bundling React applications',
        'A testing framework for React components',
      ],
      type: 'MCQs',
      correctAnswers: [
        'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
      ],
      score: 4,
    },
    {
      question: 'React components must always return a single JSX element.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 4,
    },
    {
      question: 'What is the purpose of React components?',
      choices: [
        'To handle HTTP requests and fetch data from APIs',
        'To manage the state of a React application',
        'To define the structure and appearance of the user interface',
        'To handle user interactions and events',
      ],
      type: 'MCQs',
      correctAnswers: ['To define the structure and appearance of the user interface'],
      score: 4,
    },
    {
      question:
        'Which of the following are valid React lifecycle methods? (Select all that apply)',
      choices: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
      ],
      type: 'MAQs',
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 4,
    },
    {
      question: 'What will be the output of the following React code?',
      code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;`,
      choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 4,
    },
    {
      question:
        'In React, props are used to pass data from parent components to child components.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 4,
    },
    {
      question: 'What is the output of the following code snippet?',
      // image: CodeSnippet1,
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 4,
    },
    {
      question:
        'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
      choices: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the switch statement',
        'Using the && operator',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the && operator',
      ],
      score: 4,
    },
    {
      question: 'In React, what is the purpose of keys in lists?',
      choices: [
        'To provide a unique identifier for each item in the list',
        'To control the order of items in the list',
        'To enable sorting and filtering of the list',
        'To handle user interactions within the list',
      ],
      type: 'MCQs',
      correctAnswers: ['To provide a unique identifier for each item in the list'],
      score: 4,
    },
    {
      question: 'What will be the result of the following React code?',
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
      choices: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
        'The button will not respond to the click event',
        'An error will occur due to the incorrect usage of onClick',
        'The button will display but nothing will happen when clicked',
      ],
      type: 'MCQs',
      correctAnswers: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
      ],
      score: 4,
    },
    // {
    //   question: 'React uses a virtual DOM to optimize rendering performance.',
    //   choices: ['True', 'False'],
    //   type: 'boolean',
    //   correctAnswers: ['True'],
    //   score: 4,
    // },
    //   {
    //       question: "What will be the output of the following React code?",
    //       code: "import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n\nconst App = () => {\n  return <Counter />;\n};\n\nexport default App;",
    //       choices: ["Count: 0", "Count: 1", "Count: undefined", "An error will occur"],
    //       type: "MCQs",
    //       correctAnswers: ["Count: 0"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, props are used to pass data from parent components to child components.",
    //       choices: ["True", "False"],
    //       type: "boolean",
    //       correctAnswers: ["True"],
    //       score: 4
    //   },
    //   {
    //       question: "What is the purpose of the useState hook in React?",
    //       choices: ["To manage state in functional components", "To handle side effects", "To create a new component", "To manage lifecycle methods"],
    //       type: "MCQs",
    //       correctAnswers: ["To manage state in functional components"],
    //       score: 4
    //   },
    //   {
    //       question: "Which of the following is the correct way to handle an event in React?",
    //       code: "<button onClick={this.handleClick}>Click me</button>",
    //       choices: ["<button onclick={this.handleClick}>Click me</button>", "<button onClick={this.handleClick}>Click me</button>", "<button onClick={handleClick}>Click me</button>", "<button onClick={handleClick()}>Click me</button>"],
    //       type: "MCQs",
    //       correctAnswers: ["<button onClick={this.handleClick}>Click me</button>"],
    //       score: 4
    //   },
    //   {
    //       question: "Which hook is used to manage side effects in functional components?",
    //       choices: ["useState", "useEffect", "useContext", "useReducer"],
    //       type: "MCQs",
    //       correctAnswers: ["useEffect"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, componentDidMount is a lifecycle method.",
    //       choices: ["True", "False"],
    //       type: "boolean",
    //       correctAnswers: ["True"],
    //       score: 4
    //   },
    //   {
    //       question: "What will be the output of the following React code?",
    //       code: "import React from 'react';\n\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  componentDidMount() {\n    this.setState({ count: this.state.count + 1 });\n  }\n\n  render() {\n    return <div>{this.state.count}</div>;\n  }\n}\n\nexport default MyComponent;",
    //       choices: ["0", "1", "undefined", "An error will occur"],
    //       type: "MCQs",
    //       correctAnswers: ["1"],
    //       score: 4
    //   },
    //   {
    //       question: "What is JSX in React?",
    //       choices: ["A JavaScript extension syntax", "A type of HTML", "A type of CSS", "A type of XML"],
    //       type: "MCQs",
    //       correctAnswers: ["A JavaScript extension syntax"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, which method is used to update the state of a component?",
    //       choices: ["setState", "updateState", "changeState", "modifyState"],
    //       type: "MCQs",
    //       correctAnswers: ["setState"],
    //       score: 4
    //   },
    //   {
    //       question: "What is the purpose of the useEffect hook in React?",
    //       choices: ["To manage side effects in functional components", "To manage state in functional components", "To create a new component", "To handle user input"],
    //       type: "MCQs",
    //       correctAnswers: ["To manage side effects in functional components"],
    //       score: 4
    //   },
    //   {
    //       question: "Which of the following is used to render a React component into the DOM?",
    //       choices: ["ReactDOM.render()", "React.render()", "ReactDOM.create()", "React.create()"],
    //       type: "MCQs",
    //       correctAnswers: ["ReactDOM.render()"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, what does the 'key' prop do?",
    //       choices: ["Helps identify which items have changed, are added, or are removed", "Sets a unique ID for each element", "Is used to bind event handlers", "Specifies the type of element"],
    //       type: "MCQs",
    //       correctAnswers: ["Helps identify which items have changed, are added, or are removed"],
    //       score: 4
    //   },
    //   {
    //       question: "What is the virtual DOM in React?",
    //       choices: ["A lightweight copy of the actual DOM", "A JavaScript library", "A type of database", "A CSS framework"],
    //       type: "MCQs",
    //       correctAnswers: ["A lightweight copy of the actual DOM"],
    //       score: 4
    //   },
    //   {
    //       question: "React components can be written as functions or classes.",
    //       choices: ["True", "False"],
    //       type: "boolean",
    //       correctAnswers: ["True"],
    //       score: 4
    //   },
    //   {
    //       question: "What is the purpose of the constructor in a React class component?",
    //       choices: ["To initialize local state", "To bind event handlers", "To call the super method", "All of the above"],
    //       type: "MCQs",
    //       correctAnswers: ["All of the above"],
    //       score: 4
    //   },
    //   {
    //       question: "What will be the output of the following React code?",
    //       code: "import React, { useState, useEffect } from 'react';\n\nconst Timer = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(count + 1);\n    }, 1000);\n    return () => clearInterval(interval);\n  }, [count]);\n\n  return <div>{count}</div>;\n};\n\nexport default Timer;",
    //       choices: ["0", "1", "A continuously increasing count", "An error will occur"],
    //       type: "MCQs",
    //       correctAnswers: ["A continuously increasing count"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, refs are used to directly access DOM elements.",
    //       choices: ["True", "False"],
    //       type: "boolean",
    //       correctAnswers: ["True"],
    //       score: 4
    //   },
    //   {
    //       question: "Which hook is used to perform side effects in functional components?",
    //       choices: ["useState", "useEffect", "useContext", "useReducer"],
    //       type: "MCQs",
    //       correctAnswers: ["useEffect"],
    //       score: 4
    //   },
    //   {
    //       question: "What will be the output of the following React code?",
    //       code: "import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;",
    //       choices: ["Count: 0", "Count: 1", "Count: undefined", "An error will occur"],
    //       type: "MCQs",
    //       correctAnswers: ["Count: 0"],
    //       score: 4
    //   },
    //   {
    //       question: "What does the setState function do in a React class component?",
    //       choices: ["Updates the component's state", "Renders the component", "Handles events", "Mounts the component"],
    //       type: "MCQs",
    //       correctAnswers: ["Updates the component's state"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, what is the purpose of the render method in a class component?",
    //       choices: ["To define the UI of the component", "To handle events", "To update the state", "To bind methods"],
    //       type: "MCQs",
    //       correctAnswers: ["To define the UI of the component"],
    //       score: 4
    //   },
    //   {
    //       question: "What is the main advantage of using keys in lists in React?",
    //       choices: ["To help identify which items have changed, are added, or are removed", "To bind event handlers", "To improve the performance of the app", "To set unique IDs for each element"],
    //       type: "MCQs",
    //       correctAnswers: ["To help identify which items have changed, are added, or are removed"],
    //       score: 4
    //   },
    //   {
    //       question: "What will be the output of the following React code?",
    //       code: "import React from 'react';\n\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  render() {\n    return <div>{this.state.count}</div>;\n  }\n}\n\nexport default MyComponent;",
    //       choices: ["0", "1", "undefined", "An error will occur"],
    //       type: "MCQs",
    //       correctAnswers: ["0"],
    //       score: 4
    //   },
    //   {
    //       question: "What is the main purpose of React?",
    //       choices: ["To build user interfaces", "To manage databases", "To handle server-side logic", "To style web pages"],
    //       type: "MCQs",
    //       correctAnswers: ["To build user interfaces"],
    //       score: 4
    //   },
    //   {
    //       question: "In React, what is the purpose of componentWillUnmount?",
    //       choices: ["To perform cleanup before the component is removed from the DOM", "To update the state", "To render the component", "To handle events"],
    //       type: "MCQs",
    //       correctAnswers: ["To perform cleanup before the component is removed from the DOM"],
    //       score: 4
    //   },
    //   {
    //       question: "What will be the output of the following React code?",
    //       code: "import React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;",
    //       choices: ["Count: 0", "Count: 1", "Count: 2", "An error will occur"],
    //       type: "MCQs",
    //       correctAnswers: ["Count: 1"],
    //       score: 4
    //   }
  
  
  ],
}

