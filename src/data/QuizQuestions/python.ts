// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const python: Topic = {
  topic: 'Python',
  level: 'Advanced',
  totalQuestions:45 ,
  totalScore: 180,
  totalTime: 2700,
  questions: [
      {
        question: "Explain the Global Interpreter Lock (GIL) in Python and how it affects multithreading. What strategies can be used to work around the limitations imposed by the GIL?",
        choices: ["The GIL allows multiple threads to execute simultaneously in a single process.", "The GIL prevents multiple native threads from executing Python bytecodes at once.", "The GIL ensures only one thread executes Python code at a time per interpreter process.", "The GIL makes Python threads execute in a round-robin fashion."],
        type: "MCQs",
        correctAnswers: ["The GIL prevents multiple native threads from executing Python bytecodes at once.", "The GIL ensures only one thread executes Python code at a time per interpreter process."],
        score: 4
    },
    {
        question: "Describe the difference between deep copy and shallow copy in Python. In what scenarios would you use one over the other?",
        choices: ["Deep copy creates a new object and recursively adds the copies of nested objects present in the original elements.", "Shallow copy creates a new object but inserts references into it to the objects found in the original.", "Deep copy only copies the outermost structure, whereas shallow copy copies everything.", "Shallow copy and deep copy perform the same operations."],
        type: "MCQs",
        correctAnswers: ["Deep copy creates a new object and recursively adds the copies of nested objects present in the original elements.", "Shallow copy creates a new object but inserts references into it to the objects found in the original."],
        score: 4
    },
    {
        question: "What are metaclasses in Python, and how can they be used to create dynamic classes?",
        choices: ["Metaclasses are classes of classes that define how a class behaves.", "Metaclasses are a type of object in Python.", "Metaclasses are used to create instances of classes.", "Metaclasses are used to define functions."],
        type: "MCQs",
        correctAnswers: ["Metaclasses are classes of classes that define how a class behaves."],
        score: 4
    },
    {
        question: "Explain the purpose and benefits of using the 'with' statement and context managers in Python.",
        choices: ["The 'with' statement is used for exception handling.", "The 'with' statement simplifies the management of common resources like file streams.", "The 'with' statement is used for creating loops.", "The 'with' statement is used for defining functions."],
        type: "MCQs",
        correctAnswers: ["The 'with' statement simplifies the management of common resources like file streams."],
        score: 4
    },
    {
        question: "Discuss the concept of decorators in Python. Provide examples of their usage.",
        choices: ["Decorators are a way to modify the behavior of a function or method without changing its code.", "Decorators are a type of class in Python.", "Decorators are used to debug code.", "Decorators are only used for optimizing performance."],
        type: "MCQs",
        correctAnswers: ["Decorators are a way to modify the behavior of a function or method without changing its code."],
        score: 4
    },
    {
        question: "What are Python's 'magic methods'? Explain their role with examples.",
        choices: ["Magic methods are special methods with double underscores at the beginning and end of their names, like __init__, __str__, and __len__.", "Magic methods are used for GUI programming in Python.", "Magic methods are a type of decorator.", "Magic methods are used to import modules dynamically."],
        type: "MCQs",
        correctAnswers: ["Magic methods are special methods with double underscores at the beginning and end of their names, like __init__, __str__, and __len__."],
        score: 4
    },
    {
        question: "Describe the difference between @staticmethod and @classmethod in Python. Provide examples of when each would be used.",
        choices: ["@staticmethod does not receive any reference to the object or class, while @classmethod receives a reference to the class.", "@staticmethod receives a reference to the class, while @classmethod does not receive any reference to the object or class.", "@staticmethod and @classmethod are the same.", "@staticmethod is used for instance methods, and @classmethod is used for class methods."],
        type: "MCQs",
        correctAnswers: ["@staticmethod does not receive any reference to the object or class, while @classmethod receives a reference to the class."],
        score: 4
    },
    {
        question: "What is the purpose of Python's functools module? Provide examples of its use cases.",
        choices: ["functools provides higher-order functions that act on or return other functions.", "functools is used for file handling.", "functools is used for network programming.", "functools is used for GUI programming."],
        type: "MCQs",
        correctAnswers: ["functools provides higher-order functions that act on or return other functions."],
        score: 4
    },
    {
        question: "Explain the concept of list comprehensions and generator expressions in Python. What are their advantages?",
        choices: ["List comprehensions provide a concise way to create lists, while generator expressions are used to create generators.", "List comprehensions are used to iterate over lists, and generator expressions are used to iterate over dictionaries.", "Both list comprehensions and generator expressions are used for error handling.", "List comprehensions and generator expressions serve the same purpose and are used interchangeably."],
        type: "MCQs",
        correctAnswers: ["List comprehensions provide a concise way to create lists, while generator expressions are used to create generators."],
        score: 4
    },
    {
        question: "What is the purpose of the __init__.py file in a Python package? How does it influence the package structure?",
        choices: ["It initializes the package and can be used to set up package-level variables.", "It defines the main function of the package.", "It is used to import modules from other packages.", "It is used to compile the package."],
        type: "MCQs",
        correctAnswers: ["It initializes the package and can be used to set up package-level variables."],
        score: 4
    },
    {
        question: "Discuss the advantages and disadvantages of using Python's dynamic typing system.",
        choices: ["Dynamic typing allows for more flexible and concise code, but it can lead to runtime errors if types are not handled properly.", "Dynamic typing makes code execution faster.", "Dynamic typing allows for static type checking.", "Dynamic typing has no disadvantages."],
        type: "MCQs",
        correctAnswers: ["Dynamic typing allows for more flexible and concise code, but it can lead to runtime errors if types are not handled properly."],
        score: 4
    },
    {
        question: "What are Python's built-in data structures? Describe the differences between them.",
        choices: ["Lists, tuples, dictionaries, sets", "Arrays, linked lists, binary trees", "Stacks, queues, heaps", "Graphs, hash maps, bit arrays"],
        type: "MCQs",
        correctAnswers: ["Lists, tuples, dictionaries, sets"],
        score: 4
    },
    {
        question: "How does Python's garbage collection work? Explain the role of reference counting and the generational garbage collector.",
        choices: ["Python uses reference counting and generational garbage collection to manage memory.", "Python only uses reference counting to manage memory.", "Python's garbage collection works similarly to Java's.", "Python does not have garbage collection; it relies on the operating system."],
        type: "MCQs",
        correctAnswers: ["Python uses reference counting and generational garbage collection to manage memory."],
        score: 4
    },
    {
        question: "What are the differences between Python 2 and Python 3? Highlight key changes and their impacts.",
        choices: ["Print is a statement in Python 2, but a function in Python 3.", "Integer division yields an integer in Python 2, but a float in Python 3.", "Unicode is the default string type in Python 3.", "Python 2 supports the 'with' statement natively."],
        type: "MCQs",
        correctAnswers: ["Print is a statement in Python 2, but a function in Python 3.", "Integer division yields an integer in Python 2, but a float in Python 3.", "Unicode is the default string type in Python 3."],
        score: 4
    },
    {
        question: "Explain the concept of 'duck typing' in Python and how it affects code design.",
        choices: ["Duck typing means the type of an object is determined by its behavior (methods and properties) rather than its class inheritance.", "Duck typing is a form of explicit type checking.", "Duck typing refers to converting data types.", "Duck typing is used to handle type errors."],
        type: "MCQs",
        correctAnswers: ["Duck typing means the type of an object is determined by its behavior (methods and properties) rather than its class inheritance."],
        score: 4
    },
    {
        question: "What is the purpose of the nonlocal keyword in Python? Provide an example of its usage.",
        choices: ["It is used to declare a global variable inside a function.", "It is used to declare that a variable inside a nested function refers to a variable defined in the enclosing function.", "It is used to declare a variable that can be modified in other modules.", "It is used to create a variable that can be accessed from any scope."],
        type: "MCQs",
        correctAnswers: ["It is used to declare that a variable inside a nested function refers to a variable defined in the enclosing function."],
        score: 4
    },
    {
        question: "Describe the Singleton design pattern. How can it be implemented in Python?",
        choices: ["The Singleton pattern ensures a class has only one instance and provides a global point of access to it.", "The Singleton pattern is used to create multiple instances of a class.", "The Singleton pattern is not applicable in Python.", "The Singleton pattern is used for threading."],
        type: "MCQs",
        correctAnswers: ["The Singleton pattern ensures a class has only one instance and provides a global point of access to it."],
        score: 4
    },
    {
        question: "What are generators in Python? How do they differ from regular functions?",
        choices: ["Generators allow you to declare a function that behaves like an iterator.", "Generators are a type of data structure.", "Generators are used for GUI programming.", "Generators are used to handle exceptions."],
        type: "MCQs",
        correctAnswers: ["Generators allow you to declare a function that behaves like an iterator."],
        score: 4
    },
    {
        question: "Explain how exception handling works in Python. What are the key elements involved?",
        choices: ["Exception handling in Python is done using try, except, else, and finally blocks.", "Exception handling is done using if-else statements.", "Exception handling requires external libraries.", "Exception handling is done using switch-case statements."],
        type: "MCQs",
        correctAnswers: ["Exception handling in Python is done using try, except, else, and finally blocks."],
        score: 4
    },
    {
        question: "What is a context manager in Python? How does it help in resource management?",
        choices: ["A context manager is a construct that allows for the allocation and release of resources.", "A context manager is used to create classes.", "A context manager is a type of decorator.", "A context manager is used to handle exceptions."],
        type: "MCQs",
        correctAnswers: ["A context manager is a construct that allows for the allocation and release of resources."],
        score: 4
    },
    {
        question: "What are the main differences between lists and tuples in Python?",
        choices: ["Lists are mutable, whereas tuples are immutable.", "Lists are faster than tuples.", "Tuples can hold more data than lists.", "Tuples are mutable, whereas lists are immutable."],
        type: "MCQs",
        correctAnswers: ["Lists are mutable, whereas tuples are immutable."],
        score: 4
    },
    {
        question: "How does Python handle memory management? Explain the roles of reference counting and garbage collection.",
        choices: ["Python uses reference counting to keep track of objects, and garbage collection to reclaim unused memory.", "Python does not have memory management.", "Python relies solely on the operating system for memory management.", "Python uses manual memory management techniques."],
        type: "MCQs",
        correctAnswers: ["Python uses reference counting to keep track of objects, and garbage collection to reclaim unused memory."],
        score: 4
    },
    {
        question: "What is the purpose of the __slots__ declaration in Python classes?",
        choices: ["__slots__ is used to declare a static method.", "__slots__ is used to declare a class method.", "__slots__ is used to restrict the creation of instance attributes.", "__slots__ is used to define the class constructor."],
        type: "MCQs",
        correctAnswers: ["__slots__ is used to restrict the creation of instance attributes."],
        score: 4
    },
    {
        question: "Explain the concept of memoization and how it can be implemented in Python.",
        choices: ["Memoization is an optimization technique that stores the results of expensive function calls.", "Memoization is used for sorting algorithms.", "Memoization is a debugging technique.", "Memoization is used for exception handling."],
        type: "MCQs",
        correctAnswers: ["Memoization is an optimization technique that stores the results of expensive function calls."],
        score: 4
    },
    
      {
          question: "Explain the Global Interpreter Lock (GIL) in Python and how it affects multithreading. What strategies can be used to work around the limitations imposed by the GIL?",
          choices: ["The GIL allows multiple threads to execute simultaneously in a single process.", "The GIL prevents multiple native threads from executing Python bytecodes at once.", "The GIL ensures only one thread executes Python code at a time per interpreter process.", "The GIL makes Python threads execute in a round-robin fashion."],
          type: "MCQs",
          correctAnswers: ["The GIL prevents multiple native threads from executing Python bytecodes at once.", "The GIL ensures only one thread executes Python code at a time per interpreter process."],
          score: 4
      },
      {
          question: "Describe the difference between deep copy and shallow copy in Python. In what scenarios would you use one over the other?",
          choices: ["Deep copy creates a new object and recursively adds the copies of nested objects present in the original elements.", "Shallow copy creates a new object but inserts references into it to the objects found in the original.", "Deep copy only copies the outermost structure, whereas shallow copy copies everything.", "Shallow copy and deep copy perform the same operations."],
          type: "MCQs",
          correctAnswers: ["Deep copy creates a new object and recursively adds the copies of nested objects present in the original elements.", "Shallow copy creates a new object but inserts references into it to the objects found in the original."],
          score: 4
      },
      {
          question: "What are metaclasses in Python, and how can they be used to create dynamic classes?",
          choices: ["Metaclasses are classes of classes that define how a class behaves.", "Metaclasses are a type of object in Python.", "Metaclasses are used to create instances of classes.", "Metaclasses are used to define functions."],
          type: "MCQs",
          correctAnswers: ["Metaclasses are classes of classes that define how a class behaves."],
          score: 4
      },
      {
          question: "Explain the purpose and benefits of using the 'with' statement and context managers in Python.",
          choices: ["The 'with' statement is used for exception handling.", "The 'with' statement simplifies the management of common resources like file streams.", "The 'with' statement is used for creating loops.", "The 'with' statement is used for defining functions."],
          type: "MCQs",
          correctAnswers: ["The 'with' statement simplifies the management of common resources like file streams."],
          score: 4
      },
      {
          question: "Discuss the concept of decorators in Python. Provide examples of their usage.",
          choices: ["Decorators are a way to modify the behavior of a function or method without changing its code.", "Decorators are a type of class in Python.", "Decorators are used to debug code.", "Decorators are only used for optimizing performance."],
          type: "MCQs",
          correctAnswers: ["Decorators are a way to modify the behavior of a function or method without changing its code."],
          score: 4
      },
      {
          question: "What are Python's 'magic methods'? Explain their role with examples.",
          choices: ["Magic methods are special methods with double underscores at the beginning and end of their names, like __init__, __str__, and __len__.", "Magic methods are used for GUI programming in Python.", "Magic methods are a type of decorator.", "Magic methods are used to import modules dynamically."],
          type: "MCQs",
          correctAnswers: ["Magic methods are special methods with double underscores at the beginning and end of their names, like __init__, __str__, and __len__."],
          score: 4
      },
      {
          question: "Describe the difference between @staticmethod and @classmethod in Python. Provide examples of when each would be used.",
          choices: ["@staticmethod does not receive any reference to the object or class, while @classmethod receives a reference to the class.", "@staticmethod receives a reference to the class, while @classmethod does not receive any reference to the object or class.", "@staticmethod and @classmethod are the same.", "@staticmethod is used for instance methods, and @classmethod is used for class methods."],
          type: "MCQs",
          correctAnswers: ["@staticmethod does not receive any reference to the object or class, while @classmethod receives a reference to the class."],
          score: 4
      },
      {
          question: "What is the purpose of Python's functools module? Provide examples of its use cases.",
          choices: ["functools provides higher-order functions that act on or return other functions.", "functools is used for file handling.", "functools is used for network programming.", "functools is used for GUI programming."],
          type: "MCQs",
          correctAnswers: ["functools provides higher-order functions that act on or return other functions."],
          score: 4
      },
      {
          question: "Explain the concept of list comprehensions and generator expressions in Python. What are their advantages?",
          choices: ["List comprehensions provide a concise way to create lists, while generator expressions are used to create generators.", "List comprehensions are used to iterate over lists, and generator expressions are used to iterate over dictionaries.", "Both list comprehensions and generator expressions are used for error handling.", "List comprehensions and generator expressions serve the same purpose and are used interchangeably."],
          type: "MCQs",
          correctAnswers: ["List comprehensions provide a concise way to create lists, while generator expressions are used to create generators."],
          score: 4
      },
      {
          question: "What is the purpose of the __init__.py file in a Python package? How does it influence the package structure?",
          choices: ["It initializes the package and can be used to set up package-level variables.", "It defines the main function of the package.", "It is used to import modules from other packages.", "It is used to compile the package."],
          type: "MCQs",
          correctAnswers: ["It initializes the package and can be used to set up package-level variables."],
          score: 4
      },
      {
          question: "Discuss the advantages and disadvantages of using Python's dynamic typing system.",
          choices: ["Dynamic typing allows for more flexible and concise code, but it can lead to runtime errors if types are not handled properly.", "Dynamic typing makes code execution faster.", "Dynamic typing allows for static type checking.", "Dynamic typing has no disadvantages."],
          type: "MCQs",
          correctAnswers: ["Dynamic typing allows for more flexible and concise code, but it can lead to runtime errors if types are not handled properly."],
          score: 4
      },
      {
          question: "What are Python's built-in data structures? Describe the differences between them.",
          choices: ["Lists, tuples, dictionaries, sets", "Arrays, linked lists, binary trees", "Stacks, queues, heaps", "Graphs, hash maps, bit arrays"],
          type: "MCQs",
          correctAnswers: ["Lists, tuples, dictionaries, sets"],
          score: 4
      },
      {
          question: "How does Python's garbage collection work? Explain the role of reference counting and the generational garbage collector.",
          choices: ["Python uses reference counting and generational garbage collection to manage memory.", "Python only uses reference counting to manage memory.", "Python's garbage collection works similarly to Java's.", "Python does not have garbage collection; it relies on the operating system."],
          type: "MCQs",
          correctAnswers: ["Python uses reference counting and generational garbage collection to manage memory."],
          score: 4
      },
      {
          question: "What are the differences between Python 2 and Python 3? Highlight key changes and their impacts.",
          choices: ["Print is a statement in Python 2, but a function in Python 3.", "Integer division yields an integer in Python 2, but a float in Python 3.", "Unicode is the default string type in Python 3.", "Python 2 supports the 'with' statement natively."],
          type: "MCQs",
          correctAnswers: ["Print is a statement in Python 2, but a function in Python 3.", "Integer division yields an integer in Python 2, but a float in Python 3.", "Unicode is the default string type in Python 3."],
          score: 4
      },
      {
          question: "Explain the concept of 'duck typing' in Python and how it affects code design.",
          choices: ["Duck typing means the type of an object is determined by its behavior (methods and properties) rather than its class inheritance.", "Duck typing is a form of explicit type checking.", "Duck typing refers to converting data types.", "Duck typing is used to handle type errors."],
          type: "MCQs",
          correctAnswers: ["Duck typing means the type of an object is determined by its behavior (methods and properties) rather than its class inheritance."],
          score: 4
      },
      {
          question: "What is the purpose of the nonlocal keyword in Python? Provide an example of its usage.",
          choices: ["It is used to declare a global variable inside a function.", "It is used to declare that a variable inside a nested function refers to a variable defined in the enclosing function.", "It is used to declare a variable that can be modified in other modules.", "It is used to create a variable that can be accessed from any scope."],
          type: "MCQs",
          correctAnswers: ["It is used to declare that a variable inside a nested function refers to a variable defined in the enclosing function."],
          score: 4
      },
      {
          question: "Describe the Singleton design pattern. How can it be implemented in Python?",
          choices: ["The Singleton pattern ensures a class has only one instance and provides a global point of access to it.", "The Singleton pattern is used to create multiple instances of a class.", "The Singleton pattern is not applicable in Python.", "The Singleton pattern is used for threading."],
          type: "MCQs",
          correctAnswers: ["The Singleton pattern ensures a class has only one instance and provides a global point of access to it."],
          score: 4
      },
      {
          question: "What are generators in Python? How do they differ from regular functions?",
          choices: ["Generators allow you to declare a function that behaves like an iterator.", "Generators are a type of data structure.", "Generators are used for GUI programming.", "Generators are used to handle exceptions."],
          type: "MCQs",
          correctAnswers: ["Generators allow you to declare a function that behaves like an iterator."],
          score: 4
      },
      {
          question: "Explain how exception handling works in Python. What are the key elements involved?",
          choices: ["Exception handling in Python is done using try, except, else, and finally blocks.", "Exception handling is done using if-else statements.", "Exception handling requires external libraries.", "Exception handling is done using switch-case statements."],
          type: "MCQs",
          correctAnswers: ["Exception handling in Python is done using try, except, else, and finally blocks."],
          score: 4
      },
      {
          question: "What is a context manager in Python? How does it help in resource management?",
          choices: ["A context manager is a construct that allows for the allocation and release of resources.", "A context manager is used to create classes.", "A context manager is a type of decorator.", "A context manager is used to handle exceptions."],
          type: "MCQs",
          correctAnswers: ["A context manager is a construct that allows for the allocation and release of resources."],
          score: 4
      },
      {
          question: "What are the main differences between lists and tuples in Python?",
          choices: ["Lists are mutable, whereas tuples are immutable.", "Lists are faster than tuples.", "Tuples can hold more data than lists.", "Tuples are mutable, whereas lists are immutable."],
          type: "MCQs",
          correctAnswers: ["Lists are mutable, whereas tuples are immutable."],
          score: 4
      }
]

}
