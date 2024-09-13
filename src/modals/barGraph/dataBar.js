// const data = [
//     { value: 6, itemStyle: { color: '#4A90E2' } },  // Blue
//     { value: 8, itemStyle: { color: '#FF6F61' } },  // Red
//     { value: 12, itemStyle: { color: '#7ED321' } }, // Green
//     { value: 3, itemStyle: { color: '#F8E71C' } },  // Yellow
//     { value: 10, itemStyle: { color: '#F5A623' } }, // Orange
//     { value: 7, itemStyle: { color: '#9013FE' } },  // Purple
//     { value: 10, itemStyle: { color: '#FF6F61' } }, // Red
//     { value: 6, itemStyle: { color: '#4A90E2' } },  // Blue
//     { value: 8, itemStyle: { color: '#FF6F61' } },  // Red
//     { value: 12, itemStyle: { color: '#7ED321' } }, // Green
//     { value: 3, itemStyle: { color: '#F8E71C' } },  // Yellow
//     { value: 10, itemStyle: { color: '#F5A623' } }, // Orange
//     { value: 7, itemStyle: { color: '#9013FE' } },  // Purple
//     { value: 10, itemStyle: { color: '#FF6F61' } }, // Red
//   ];
  
const data = [
  {
      day: "Day 1",
      totalQuestions: 9,
      color: '#4A90E2',  // Blue
      subjects: [
          {
              subject: "Aptitude",
              totalQuestions: 6,
              topics: [
                  { name: "Boat and Stream", questions: 2 },
                  { name: "Probability", questions: 2 },
                  { name: "Ratio", questions: 2 }
              ]
          },
          {
              subject: "Math",
              totalQuestions: 3,
              topics: [
                  { name: "Algebra", questions: 1 },
                  { name: "Trigonometry", questions: 1 },
                  { name: "Geometry", questions: 1 }
              ]
          }
      ]
  },
  {
      day: "Day 2",
      totalQuestions: 15,
      color: '#FF6F61',  // Red
      subjects: [
          {
              subject: "Reasoning",
              totalQuestions: 12,
              topics: [
                  { name: "Logical Reasoning", questions: 5 },
                  { name: "Puzzles", questions: 4 },
                  { name: "Data Sufficiency", questions: 3 }
              ]
          },
          {
              subject: "General Knowledge",
              totalQuestions: 3,
              topics: [
                  { name: "Current Affairs", questions: 2 },
                  { name: "History", questions: 1 }
              ]
          }
      ]
  },
  {
      day: "Day 3",
      totalQuestions: 17,
      color: '#7ED321',  // Green
      subjects: [
          {
              subject: "English",
              totalQuestions: 10,
              topics: [
                  { name: "Grammar", questions: 4 },
                  { name: "Vocabulary", questions: 3 },
                  { name: "Comprehension", questions: 3 }
              ]
          },
          {
              subject: "Programming",
              totalQuestions: 7,
              topics: [
                  { name: "Data Structures", questions: 3 },
                  { name: "Algorithms", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 4",
      totalQuestions: 16,
      color: '#F8E71C',  // Yellow
      subjects: [
          {
              subject: "Aptitude",
              totalQuestions: 6,
              topics: [
                  { name: "Time and Work", questions: 2 },
                  { name: "Profit and Loss", questions: 2 },
                  { name: "Simple Interest", questions: 2 }
              ]
          },
          {
              subject: "Math",
              totalQuestions: 10,
              topics: [
                  { name: "Quadratic Equations", questions: 4 },
                  { name: "Matrices", questions: 3 },
                  { name: "Set Theory", questions: 3 }
              ]
          }
      ]
  },
  {
      day: "Day 5",
      totalQuestions: 18,
      color: '#F5A623',  // Orange
      subjects: [
          {
              subject: "Reasoning",
              totalQuestions: 10,
              topics: [
                  { name: "Seating Arrangement", questions: 4 },
                  { name: "Syllogisms", questions: 3 },
                  { name: "Blood Relations", questions: 3 }
              ]
          },
          {
              subject: "General Knowledge",
              totalQuestions: 8,
              topics: [
                  { name: "Geography", questions: 4 },
                  { name: "Science", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 6",
      totalQuestions: 14,
      color: '#9013FE',  // Purple
      subjects: [
          {
              subject: "English",
              totalQuestions: 6,
              topics: [
                  { name: "Sentence Correction", questions: 3 },
                  { name: "Idioms and Phrases", questions: 3 }
              ]
          },
          {
              subject: "Programming",
              totalQuestions: 8,
              topics: [
                  { name: "OOP Concepts", questions: 4 },
                  { name: "Recursion", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 7",
      totalQuestions: 15,
      color: '#50E3C2',  // Teal
      subjects: [
          {
              subject: "Aptitude",
              totalQuestions: 7,
              topics: [
                  { name: "Average", questions: 3 },
                  { name: "Time and Distance", questions: 2 },
                  { name: "LCM and HCF", questions: 2 }
              ]
          },
          {
              subject: "Math",
              totalQuestions: 8,
              topics: [
                  { name: "Number Systems", questions: 4 },
                  { name: "Calculus", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 8",
      totalQuestions: 16,
      color: '#B8E986',  // Light Green
      subjects: [
          {
              subject: "Reasoning",
              totalQuestions: 9,
              topics: [
                  { name: "Analogy", questions: 3 },
                  { name: "Directions", questions: 3 },
                  { name: "Coding-Decoding", questions: 3 }
              ]
          },
          {
              subject: "General Knowledge",
              totalQuestions: 7,
              topics: [
                  { name: "Economics", questions: 4 },
                  { name: "Polity", questions: 3 }
              ]
          }
      ]
  },
  {
      day: "Day 9",
      totalQuestions: 15,
      color: '#4A4A4A',  // Dark Gray
      subjects: [
          {
              subject: "English",
              totalQuestions: 7,
              topics: [
                  { name: "Reading Comprehension", questions: 4 },
                  { name: "Synonyms and Antonyms", questions: 3 }
              ]
          },
          {
              subject: "Programming",
              totalQuestions: 8,
              topics: [
                  { name: "Sorting Algorithms", questions: 4 },
                  { name: "Linked Lists", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 10",
      totalQuestions: 18,
      color: '#D0021B',  // Dark Red
      subjects: [
          {
              subject: "Aptitude",
              totalQuestions: 8,
              topics: [
                  { name: "Percentage", questions: 4 },
                  { name: "Partnership", questions: 4 }
              ]
          },
          {
              subject: "Math",
              totalQuestions: 10,
              topics: [
                  { name: "Statistics", questions: 5 },
                  { name: "Probability", questions: 5 }
              ]
          }
      ]
  },
  {
      day: "Day 11",
      totalQuestions: 14,
      color: '#BD10E0',  // Pink
      subjects: [
          {
              subject: "Reasoning",
              totalQuestions: 6,
              topics: [
                  { name: "Decision Making", questions: 3 },
                  { name: "Input-Output", questions: 3 }
              ]
          },
          {
              subject: "General Knowledge",
              totalQuestions: 8,
              topics: [
                  { name: "History", questions: 4 },
                  { name: "Environment", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 12",
      totalQuestions: 15,
      color: '#F5A623',  // Light Orange
      subjects: [
          {
              subject: "English",
              totalQuestions: 7,
              topics: [
                  { name: "Active and Passive Voice", questions: 4 },
                  { name: "Error Detection", questions: 3 }
              ]
          },
          {
              subject: "Programming",
              totalQuestions: 8,
              topics: [
                  { name: "Tree Traversal", questions: 4 },
                  { name: "Graph Algorithms", questions: 4 }
              ]
          }
      ]
  },
  {
      day: "Day 13",
      totalQuestions: 14,
      color: '#50E3C2',  // Teal
      subjects: [
          {
              subject: "Aptitude",
              totalQuestions: 6,
              topics: [
                  { name: "Mensuration", questions: 3 },
                  { name: "Surds and Indices", questions: 3 }
              ]
          },
          {
              subject: "Math",
              totalQuestions: 8,
              topics: [
                  { name: "Coordinate Geometry", questions: 4 },
                  { name: "Logarithms", questions: 4 }
              ]
          }
      ]
  },
  {
    day: "Day 9",
    totalQuestions: 15,
    color: '#4A4A4A',  // Dark Gray
    subjects: [
        {
            subject: "English",
            totalQuestions: 7,
            topics: [
                { name: "Reading Comprehension", questions: 4 },
                { name: "Synonyms and Antonyms", questions: 3 }
            ]
        },
        {
            subject: "Programming",
            totalQuestions: 8,
            topics: [
                { name: "Sorting Algorithms", questions: 4 },
                { name: "Linked Lists", questions: 4 }
            ]
        }
      ]
    }
];

  



const categories = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'S','M', 'T', 'W', 'Th', 'F', 'Sa', 'S'];

export  { data, categories };

