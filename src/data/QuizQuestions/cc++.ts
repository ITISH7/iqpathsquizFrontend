import { Topic } from '.'

export const CCpp :Topic = {
  topic: 'C/C++',
  level: 'Advance',
  totalQuestions: 25,
  totalScore: 100,
  totalTime: 1500,
  questions: [
    {
        question: "What is the output of the following C code?",
        code: "#include <stdio.h>\nint main() {\n  int x = 10;\n  printf(\"%d\", x);\n  return 0;\n}",
        choices: ["10", "0", "Undefined", "An error will occur"],
        type: "MCQs",
        correctAnswers: ["10"],
        score: 4
    },
    {
        question: "In C++, the 'new' keyword is used to dynamically allocate memory.",
        choices: ["True", "False"],
        type: "boolean",
        correctAnswers: ["True"],
        score: 4
    },
    
    {
        question: "What will be the output of the following C++ code?",
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  int a = 5;\n  int &ref = a;\n  ref++;\n  cout << a;\n  return 0;\n}",
        choices: ["5", "6", "Undefined", "An error will occur"],
        type: "MCQs",
        correctAnswers: ["6"],
        score: 4
    },
    {
        question: "Which of the following is not a valid storage class in C?",
        choices: ["auto", "register", "static", "constant"],
        type: "MCQs",
        correctAnswers: ["constant"],
        score: 4
    },
    {
        question: "What will be the output of the following C code?",
        code: "#include <stdio.h>\nint main() {\n  char str[] = \"Hello, World!\";\n  printf(\"%s\", str);\n  return 0;\n}",
        choices: ["Hello, World!", "Hello", "World!", "An error will occur"],
        type: "MCQs",
        correctAnswers: ["Hello, World!"],
        score: 4
    },
    {
        question: "Which of the following is used to define a constant in C?",
        choices: ["#define", "const", "static", "enum"],
        type: "MCQs",
        correctAnswers: ["#define"],
        score: 4
    },
    {
        question: "What is the size of an int data type in C?",
        choices: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
        type: "MCQs",
        correctAnswers: ["Depends on the system"],
        score: 4
    },
    {
        question: "Which of the following is the correct way to create an object of a class in C++?",
        choices: ["ClassName object;", "ClassName *object;", "new ClassName;", "ClassName() object;"],
        type: "MCQs",
        correctAnswers: ["ClassName object;"],
        score: 4
    },
    {
        question: "What will be the output of the following C++ code?",
        code: "#include <iostream>\nusing namespace std;\nclass MyClass {\npublic:\n  MyClass() { cout << \"Constructor called\"; }\n  ~MyClass() { cout << \"Destructor called\"; }\n};\nint main() {\n  MyClass obj;\n  return 0;\n}",
        choices: ["Constructor called", "Destructor called", "Constructor calledDestructor called", "No output"],
        type: "MCQs",
        correctAnswers: ["Constructor calledDestructor called"],
        score: 4
    },
    {
        question: "In C++, inheritance allows one class to acquire the properties of another class.",
        choices: ["True", "False"],
        type: "boolean",
        correctAnswers: ["True"],
        score: 4
    },
    {
        question: "Which of the following operators cannot be overloaded in C++?",
        choices: ["+", "-", "=", "?: (conditional operator)"],
        type: "MCQs",
        correctAnswers: ["?: (conditional operator)"],
        score: 4
    },
    {
        question: "What will be the output of the following C code?",
        code: "#include <stdio.h>\nint main() {\n  int arr[] = {1, 2, 3, 4, 5};\n  printf(\"%d\", arr[2]);\n  return 0;\n}",
        choices: ["1", "2", "3", "4"],
        type: "MCQs",
        correctAnswers: ["3"],
        score: 4
    },
    {
        question: "In C++, which keyword is used to inherit a class?",
        choices: ["inherits", "extends", "derives", "public"],
        type: "MCQs",
        correctAnswers: ["public"],
        score: 4
    },
    {
        question: "In C, what is the output of the following code?",
        code: "#include <stdio.h>\nint main() {\n  int a = 5, b = 10;\n  int *p = &a;\n  *p = b;\n  printf(\"%d\", a);\n  return 0;\n}",
        choices: ["5", "10", "0", "Undefined"],
        type: "MCQs",
        correctAnswers: ["10"],
        score: 4
    },
    {
        question: "Which of the following is not a valid preprocessor directive in C?",
        choices: ["#include", "#define", "#undef", "#typedef"],
        type: "MCQs",
        correctAnswers: ["#typedef"],
        score: 4
    },
    {
        question: "What will be the output of the following C++ code?",
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i < 5; i++) {\n    if (i == 3) continue;\n    cout << i << \" \";\n  }\n  return 0;\n}",
        choices: ["0 1 2 4", "0 1 2 3 4", "0 1 2 3", "An error will occur"],
        type: "MCQs",
        correctAnswers: ["0 1 2 4"],
        score: 4
    },
    {
        question: "In C++, virtual functions enable polymorphism.",
        choices: ["True", "False"],
        type: "boolean",
        correctAnswers: ["True"],
        score: 4
    },
    {
        question: "What is the purpose of the 'friend' keyword in C++?",
        choices: ["To access private members of a class", "To declare a global function", "To create a new class", "To initialize an object"],
        type: "MCQs",
        correctAnswers: ["To access private members of a class"],
        score: 4
    },
    {
        question: "What will be the output of the following C code?",
        code: "#include <stdio.h>\n#define SQUARE(x) (x * x)\nint main() {\n  int a = 3;\n  printf(\"%d\", SQUARE(a+1));\n  return 0;\n}",
        choices: ["16", "12", "10", "14"],
        type: "MCQs",
        correctAnswers: ["16"],
        score: 4
    },
    {
        question: "In C++, templates are used to create generic functions and classes.",
        choices: ["True", "False"],
        type: "boolean",
        correctAnswers: ["True"],
        score: 4
    },
    {
        question: "Which of the following is a valid function declaration in C?",
        choices: ["int func();", "void func[];", "func(int);", "void[] func();"],
        type: "MCQs",
        correctAnswers: ["int func();"],
        score: 4
    },
    {
        question: "What will be the output of the following C++ code?",
        code: "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  cout << ++x << \" \" << x++ << \" \" << x;\n  return 0;\n}",
        choices: ["11 11 12", "11 10 11", "10 11 11", "10 10 11"],
        type: "MCQs",
        correctAnswers: ["11 11 12"],
        score: 4
    },
    {
        question: "In C, which keyword is used to define an enumeration?",
        choices: ["enum", "enumeration", "enumset", "en"],
        type: "MCQs",
        correctAnswers: ["enum"],
        score: 4
    },
    {
        question: "What will be the output of the following C code?",
        code: "#include <stdio.h>\nint main() {\n  int x = 5;\n  printf(\"%d\", x >> 1);\n  return 0;\n}",
        choices: ["2", "5", "10", "0"],
        type: "MCQs",
        correctAnswers: ["2"],
        score: 4
    }
]

}