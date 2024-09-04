import { Topic } from '.'

export const ComputerFundamentals: Topic = {
  topic: 'Computer Fundamentals',
  level: 'Advance',
  totalQuestions: 40,
  totalScore: 160,
  totalTime: 2400,
  questions: [ 
        {
            question: "Which of the following is a characteristic of a multi-threaded process?",
            choices: [
                "Multiple program counters",
                "Single memory space",
                "Single process ID",
                "All of the above"
            ],
            type: "MCQs",
            correctAnswers: ["All of the above"],
            score: 4
        },
        {
            question: "In which of the following page replacement algorithms does Belady's anomaly occur?",
            choices: [
                "FIFO",
                "LRU",
                "Optimal",
                "Clock"
            ],
            type: "MCQs",
            correctAnswers: ["FIFO"],
            score: 4
        },
        {
            question: "Which scheduling algorithm is non-preemptive?",
            choices: [
                "Round Robin",
                "Shortest Job Next",
                "Priority Scheduling",
                "Multilevel Queue Scheduling"
            ],
            type: "MCQs",
            correctAnswers: ["Shortest Job Next"],
            score: 4
        },
        {
            question: "Which protocol provides a virtual terminal service?",
            choices: [
                "HTTP",
                "SMTP",
                "Telnet",
                "FTP"
            ],
            type: "MCQs",
            correctAnswers: ["Telnet"],
            score: 4
        },
        {
            question: "Which of the following is used to uniquely identify a row in a table?",
            choices: [
                "Foreign key",
                "Primary key",
                "Unique key",
                "Index"
            ],
            type: "MCQs",
            correctAnswers: ["Primary key"],
            score: 4
        },
        {
            question: "In database management systems, which normal form is based on the concept of transitive dependency?",
            choices: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],
            type: "MCQs",
            correctAnswers: ["3NF"],
            score: 4
        },
        {
            question: "Which of the following layers of the OSI model is responsible for ensuring error-free delivery of data?",
            choices: [
                "Physical layer",
                "Data Link layer",
                "Network layer",
                "Transport layer"
            ],
            type: "MCQs",
            correctAnswers: ["Transport layer"],
            score: 4
        },
        {
            question: "Which type of database index stores the complete values of indexed columns?",
            choices: [
                "Clustered index",
                "Non-clustered index",
                "Full-text index",
                "Unique index"
            ],
            type: "MCQs",
            correctAnswers: ["Full-text index"],
            score: 4
        },
        {
            question: "Which of the following algorithms is used for deadlock prevention?",
            choices: [
                "Banker's algorithm",
                "Peterson's algorithm",
                "Lamport's algorithm",
                "Dijkstra's algorithm"
            ],
            type: "MCQs",
            correctAnswers: ["Banker's algorithm"],
            score: 4
        },
        {
            question: "What is the primary function of the ARP (Address Resolution Protocol)?",
            choices: [
                "Map an IP address to a MAC address",
                "Map a MAC address to an IP address",
                "Map an IP address to a domain name",
                "Map a domain name to an IP address"
            ],
            type: "MCQs",
            correctAnswers: ["Map an IP address to a MAC address"],
            score: 4
        },
        {
            question: "Which of the following is not a type of fragmentation in operating systems?",
            choices: [
                "External fragmentation",
                "Internal fragmentation",
                "Logical fragmentation",
                "Data fragmentation"
            ],
            type: "MCQs",
            correctAnswers: ["Logical fragmentation"],
            score: 4
        },
        {
            question: "Which normal form is considered stricter than BCNF?",
            choices: [
                "1NF",
                "2NF",
                "3NF",
                "4NF"
            ],
            type: "MCQs",
            correctAnswers: ["4NF"],
            score: 4
        },
        {
            question: "Which type of join returns all rows from the left table and the matched rows from the right table?",
            choices: [
                "Inner join",
                "Left join",
                "Right join",
                "Full join"
            ],
            type: "MCQs",
            correctAnswers: ["Left join"],
            score: 4
        },
        {
            question: "What is the main purpose of the domain name system (DNS)?",
            choices: [
                "Translate IP addresses to MAC addresses",
                "Translate IP addresses to domain names",
                "Translate domain names to IP addresses",
                "Translate domain names to MAC addresses"
            ],
            type: "MCQs",
            correctAnswers: ["Translate domain names to IP addresses"],
            score: 4
        },
        {
            question: "Which of the following is a DML (Data Manipulation Language) command?",
            choices: [
                "CREATE",
                "ALTER",
                "INSERT",
                "DROP"
            ],
            type: "MCQs",
            correctAnswers: ["INSERT"],
            score: 4
        },
        {
            question: "Which scheduling algorithm uses a dynamic priority system to avoid starvation?",
            choices: [
                "Round Robin",
                "Multilevel Queue Scheduling",
                "Shortest Job First",
                "Aging"
            ],
            type: "MCQs",
            correctAnswers: ["Aging"],
            score: 4
        },
        {
            question: "Which of the following protocols is used for secure communication over a computer network?",
            choices: [
                "HTTP",
                "SMTP",
                "FTP",
                "HTTPS"
            ],
            type: "MCQs",
            correctAnswers: ["HTTPS"],
            score: 4
        },
        {
            question: "What is the purpose of the ACID properties in a database?",
            choices: [
                "To ensure accurate data entry",
                "To maintain data integrity",
                "To enable data backup",
                "To improve query performance"
            ],
            type: "MCQs",
            correctAnswers: ["To maintain data integrity"],
            score: 4
        },
        {
            question: "Which of the following is used to uniquely identify a process in an operating system?",
            choices: [
                "Process ID",
                "Thread ID",
                "Process Control Block",
                "Process Table"
            ],
            type: "MCQs",
            correctAnswers: ["Process ID"],
            score: 4
        },
        {
            question: "Which protocol is used for network layer addressing?",
            choices: [
                "IP",
                "TCP",
                "UDP",
                "HTTP"
            ],
            type: "MCQs",
            correctAnswers: ["IP"],
            score: 4
        },
        {
            question: "Which type of database model is organized as a tree structure?",
            choices: [
                "Hierarchical model",
                "Network model",
                "Relational model",
                "Object-oriented model"
            ],
            type: "MCQs",
            correctAnswers: ["Hierarchical model"],
            score: 4
        },
        {
            question: "Which of the following is used to protect a computer network from unauthorized access?",
            choices: [
                "Firewall",
                "Switch",
                "Router",
                "Hub"
            ],
            type: "MCQs",
            correctAnswers: ["Firewall"],
            score: 4
        },
        {
            question: "Which of the following is a layer in the OSI model?",
            choices: [
                "Session layer",
                "Application layer",
                "Presentation layer",
                "All of the above"
            ],
            type: "MCQs",
            correctAnswers: ["All of the above"],
            score: 4
        },
        {
            question: "Which of the following SQL clauses is used to filter records?",
            choices: [
                "GROUP BY",
                "ORDER BY",
                "WHERE",
                "HAVING"
            ],
            type: "MCQs",
            correctAnswers: ["WHERE"],
            score: 4
        },
        {
            question: "In an operating system, what is a semaphore used for?",
            choices: [
                "Memory allocation",
                "Process synchronization",
                "I/O operation",
                "CPU scheduling"
            ],
            type: "MCQs",
            correctAnswers: ["Process synchronization"],
            score: 4
        },
        {
            question: "Which of the following is not a type of network topology?",
            choices: [
                "Star",
                "Bus",
                "Ring",
                "Tree"
            ],
            type: "MCQs",
            correctAnswers: ["Tree"],
            score: 4
        },
        {
            question: "Which of the following is used to handle deadlocks in an operating system?",
            choices: [
                "Detection and recovery",
                "Avoidance",
                "Prevention",
                "All of the above"
            ],
            type: "MCQs",
            correctAnswers: ["All of the above"],
            score: 4
        },
        {
            question: "Which protocol is used to retrieve email from a mail server?",
            choices: [
                "SMTP",
                "POP3",
                "IMAP",
                "HTTP"
            ],
            type: "MCQs",
            correctAnswers: ["POP3"],
            score: 4
        },
        {
            question: "Which of the following commands is used to create a table in SQL?",
            choices: [
                "INSERT",
                "UPDATE",
                "CREATE",
                "DELETE"
            ],
            type: "MCQs",
            correctAnswers: ["CREATE"],
            score: 4
        },
        {
            question: "What does RAID stand for in the context of data storage?",
            choices: [
                "Random Array of Independent Disks",
                "Redundant Array of Independent Disks",
                "Redundant Array of Inexpensive Disks",
                "Random Access of Inexpensive Data"
            ],
            type: "MCQs",
            correctAnswers: ["Redundant Array of Independent Disks"],
            score: 4
        },
        {
            question: "Which of the following algorithms is used for shortest path finding in a graph?",
            choices: [
                "Dijkstra's algorithm",
                "Kruskal's algorithm",
                "Prim's algorithm",
                "Floyd-Warshall algorithm"
            ],
            type: "MCQs",
            correctAnswers: ["Dijkstra's algorithm"],
            score: 4
        },
        {
            question: "Which type of SQL join returns rows when there is at least one match in the tables?",
            choices: [
                "Inner join",
                "Left join",
                "Right join",
                "Full join"
            ],
            type: "MCQs",
            correctAnswers: ["Inner join"],
            score: 4
        },
        {
            question: "Which of the following is a cryptographic protocol designed to provide secure communication over a computer network?",
            choices: [
                "SSL",
                "HTTP",
                "FTP",
                "SMTP"
            ],
            type: "MCQs",
            correctAnswers: ["SSL"],
            score: 4
        },
    
        {
            question: "Which type of database is designed to handle vast amounts of data spread across many different storage systems?",
            choices: [
                "Distributed database",
                "Centralized database",
                "Relational database",
                "Hierarchical database"
            ],
            type: "MCQs",
            correctAnswers: ["Distributed database"],
            score: 4
        },
        {
            question: "In operating systems, what does the term 'thrashing' refer to?",
            choices: [
                "Excessive paging",
                "Deadlock",
                "Starvation",
                "Buffer overflow"
            ],
            type: "MCQs",
            correctAnswers: ["Excessive paging"],
            score: 4
        },
        {
            question: "What is the main function of a router in a network?",
            choices: [
                "To connect different networks",
                "To repeat the signal",
                "To filter network traffic",
                "To connect multiple devices"
            ],
            type: "MCQs",
            correctAnswers: ["To connect different networks"],
            score: 4
        },
        {
            question: "In SQL, which clause is used to filter records based on a specified condition?",
            choices: [
                "SELECT",
                "WHERE",
                "GROUP BY",
                "ORDER BY"
            ],
            type: "MCQs",
            correctAnswers: ["WHERE"],
            score: 4
        },
        {
            question: "Which of the following is a connection-oriented protocol?",
            choices: [
                "TCP",
                "UDP",
                "IP",
                "ICMP"
            ],
            type: "MCQs",
            correctAnswers: ["TCP"],
            score: 4
        },
        {
            question: "Which of the following is not a property of a transaction in a DBMS?",
            choices: [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Redundancy"
            ],
            type: "MCQs",
            correctAnswers: ["Redundancy"],
            score: 4
        },
        {
            question: "Which protocol is primarily used for email transmission?",
            choices: [
                "FTP",
                "HTTP",
                "SMTP",
                "SNMP"
            ],
            type: "MCQs",
            correctAnswers: ["SMTP"],
            score: 4
        }
    
  ],
}
