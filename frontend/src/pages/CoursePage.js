import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import javalogo from '../assets/javalogo.png';
import pylogo from '../assets/pylogo.png';
import s1 from '../assets/s1.png';

const CoursePageContainer = styled.div`
  padding: 80px 20px; /* Adjust for fixed navbar */
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const CourseContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

// New styled component for the heading
const CourseHeading = styled.h1`
  text-align: center; /* Center the heading text */
  margin: 20px 0;
`;

const ContentImage = styled.img`
  width: 10%;
  height: auto;
  display: block;
  margin: 20px auto;
`;

const PythonImage = styled.img`
  width: 10%;
  height: auto;
  display: block;
  margin: 20px auto;
`;


const CodeContainer = styled.div`
  margin: 20px auto;
  width: 90%;
  font-family: 'Fira Code', 'Consolas', monospace;
  background: #2a2a2a;
  color: #f8f8f2;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-x: auto;
  font-size: 16px;
`;

const PythonCodeContainer = styled(CodeContainer)` /* Reusing existing styled component for code styling */
  margin: 20px auto;
`;

const EditRunButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #50fa7b;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.8em;
  cursor: pointer;
`;

const Keyword = styled.span`
  color: #ff79c6;
`;

const String = styled.span`
  color: #f1fa8c;
`;

const Comment = styled.span`
  color: #6272a4;
`;

const dataStructuresContent = (
    <>
      <CourseHeading>Introduction to Data Structures</CourseHeading>
      <p>
        Data structures are fundamental components of computer science and programming that are used to organize and store data in a way that allows for efficient retrieval, manipulation, and management. They serve as the building blocks for designing and implementing algorithms and are crucial in solving various computational problems. Here's an introduction to data structures, including what they are and why they are important!
      </p>
  
      <h3>What are Data Structures?</h3>
      <p>
        Data structures are specialized formats or arrangements used to store and organize data in a computer's memory or storage. They define how data is stored, accessed, and manipulated. Think of them as containers that hold data elements, and the choice of data structure depends on the specific needs and requirements of a particular task or problem.
      </p>
  
      <h3>Why are Data Structures Important?</h3>
      <p>Data structures are essential for several reasons:</p>
      <ul>
        <li><strong>Efficiency:</strong> Choosing the right data structure can significantly impact the efficiency of operations performed on the data. Well-designed data structures can optimize memory usage and reduce the time it takes to perform common tasks like searching, sorting, and inserting or deleting elements.</li>
        <li><strong>Abstraction:</strong> Data structures provide a level of abstraction that simplifies programming. They allow developers to work with data at a higher level of understanding, making it easier to manage complex data sets and algorithms.</li>
        <li><strong>Problem Solving:</strong> Many computational problems involve organizing and manipulating data. Data structures provide a systematic way to represent and work with data, making it easier to design and implement algorithms to solve these problems.</li>
        <li><strong>Reusability:</strong> Once you've implemented a data structure, you can reuse it in various parts of your code or in different projects, reducing duplication of effort and improving code maintainability.</li>
        <li><strong>Scalability:</strong> Well-chosen data structures can handle data of varying sizes efficiently. This is crucial when working with large datasets or applications that need to scale.</li>
      </ul>
  
      <h3>Common Types of Data Structures</h3>
      <p>There are numerous data structures, each designed for specific use cases. Some common data structures include:</p>
      <ul>
        <li><strong>Arrays:</strong> Ordered collections of elements with a fixed size.</li>
        <li><strong>Linked Lists:</strong> A sequence of nodes, where each node contains data and a reference to the next node.</li>
        <li><strong>Stacks:</strong> A linear data structure that follows the Last-In-First-Out (LIFO) principle.</li>
        <li><strong>Queues:</strong> A linear data structure that follows the First-In-First-Out (FIFO) principle.</li>
        <li><strong>Trees:</strong> Hierarchical structures with nodes connected by edges, commonly used in hierarchical data representations and searching algorithms.</li>
        <li><strong>Graphs:</strong> A collection of nodes connected by edges, used for modeling complex relationships between data points.</li>
        <li><strong>Heaps:</strong> A specialized tree-based data structure that satisfies the heap property, which ensures that the parent node has a specific relationship with its child nodes. Heaps are commonly used in priority queues and sorting algorithms like heapsort.</li>
        <li><strong>Hash Tables:</strong> Data structures that use a hash function to map keys to values, allowing for efficient key-value pair storage and retrieval. They are also known as hash maps or dictionaries and are widely used in various applications like caching, indexing, and data storage.</li>
      </ul>
  
      <h3>Choosing the Right Data Structure</h3>
      <p>
        Selecting the appropriate data structure depends on the specific problem you're trying to solve. Factors to consider include the type of data, the operations you need to perform, memory constraints, and time complexity requirements.
      </p>
    </>
  );

const pythonContent = (
    <>
      <PythonImage src={pylogo} alt="Python Programming" />
      <h2>Introduction to Python</h2>
      <p>
        Python is a high-level, general-purpose programming language created by Guido van Rossum and first released in 1991. It was designed with readability and simplicity in mind, making it an ideal language for beginners while remaining powerful enough for professionals. Python has a diverse user base and is widely used in various domains, including web development, data science, artificial intelligence, and more.
      </p>
      <p>Code:</p>
      <PythonCodeContainer>
        <EditRunButton>Edit & Run</EditRunButton>
        <pre>
          <code>
            <Comment># Python code is clean and readable</Comment> <br />
            <Keyword>print</Keyword>(<String>"Hello, World!"</String>) <br />
            <Comment># The classic first program in Python</Comment>
          </code>
        </pre>
      </PythonCodeContainer>
      <p>Links:</p>
      <ul>
        <li>
          <a href="https://www.python.org/">Python Official Website</a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/History_of_Python">History of Python on Wikipedia</a>
        </li>
      </ul>
      <h3>Setting Up Python Environment:</h3>
      <p>
        Before diving into Python programming, it's essential to set up a development environment. The official Python website provides downloadable installers for Windows, macOS, and Linux. You can choose between the latest stable version or specific releases based on your requirements.
      </p>
      <p>
        <a href="https://www.python.org/downloads/">Download Python</a>
      </p>
      <p>IDE Recommendations:</p>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
        </li>
        <li>
          <a href="https://www.jetbrains.com/pycharm/download/?section=windows">PyCharm</a>
        </li>
      </ul>
      <p>
        Setting up a virtual environment is also recommended for managing project dependencies:
      </p>
      <img src={s1} alt="Setting up a virtual environment" style={{ display: 'block', margin: '20px auto', maxWidth: '100%' }} />
    </>
  );


  const javaContent = (
    <>
      <ContentImage src={javalogo} alt="Java Programming" />
      <h2>Introduction to Java</h2>
      <p>
        Java is a high-level, object-oriented programming language that was designed with a few key principles in mind: platform independence, simplicity, and security.
      </p>
      <h3>Key Concepts:</h3>
      <ul>
        <li><strong>Platform Independence:</strong> Java programs can run on any device that has the Java Virtual Machine (JVM), making it a "write once, run anywhere" language. <a href="https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html" target="_blank">Learn more</a></li>
        <li><strong>Object-Oriented:</strong> Java follows the object-oriented programming (OOP) paradigm, emphasizing the use of classes and objects for modular and efficient code.</li>
        <li><strong>Syntax and Structure:</strong> Java syntax is similar to other C-based languages, making it accessible to developers familiar with languages like C++ or C#.</li>
        <li><strong>Memory Management:</strong> Java handles memory management automatically through its garbage collection mechanism, reducing the risk of memory leaks.</li>
        <li><strong>Security:</strong> Java incorporates built-in security features, such as the sandbox model, to protect against malicious activities.</li>
      </ul>
      <h3>Basic Components:</h3>
      <ul>
        <li><strong>Classes and Objects:</strong> Java is designed around the concept of classes and objects, allowing developers to structure code in a modular and reusable manner.</li>
        <li><strong>Variables and Data Types:</strong> Java supports various data types, including primitive types (int, float, char) and reference types (objects).</li>
        <li><strong>Control Flow:</strong> Java provides constructs for decision-making (if, else statements), looping (for, while loops), and branching.</li>
        <li><strong>Methods:</strong> Functions in Java are called methods and are defined within classes. They allow for code organization and reuse.</li>
      </ul>
      <h3>Getting Started:</h3>
      <p>To start programming in Java, you need to:</p>
      <ol>
        <li><a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank">Install</a> the Java Development Kit (JDK), which includes the Java compiler and other tools needed for development.</li>
        <li>Set up an IDE like <a href="https://www.eclipse.org/downloads/" target="_blank">Eclipse</a>, <a href="https://www.jetbrains.com/idea/download/?section=windows">IntelliJ</a>, or <a href="https://code.visualstudio.com/Download">Visual Studio Code</a> for a more efficient coding experience.</li>
        <li>Write your first "Hello, World!" program to ensure that your development environment is set up correctly.</li>
        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>public</Keyword> <Keyword>class</Keyword> MyFirstJavaProgram {'{'}<br />
              <Comment>   { /* This is my first java program. This will print 'Hello World' as the output */ }</Comment><br />
              <Keyword>    public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}<br />
              System.out.println(<String>"Hello World"</String>); <Comment> // prints Hello World </Comment><br />
              {'}'}<br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>
      </ol>
      <p>Java is widely used in various domains, including web development (Java EE), mobile application development (Android), and enterprise systems.</p>
    </>
  );

export const CoursePage = ({ toggleTheme, theme }) => {
  const { courseName } = useParams(); // Get the course name from URL params

  const topicsByCourse = {
    java: [
      'Basic Syntax',
      'Data Types and Variables',
      'Operators',
      'Conditionals',
      'Loops',
      'Functions',
      'Exception Handling',
      'OOP, Interfaces, Classes',
    ],
    python: [
      'Basic Concepts',
      'Control Flow',
      'Functions',
      'Data Structures',
      'String Manipulation',
      'File Handling',
      'Error Handling',
      'OOP',
    ],
    'data-structures': [
      'Arrays',
      'Linked Lists',
      'Stacks',
      'Queues',
      'Trees',
      'Graphs',
      'Heaps',
      'Hash Tables',
    ],
  };

  const topics = topicsByCourse[courseName.toLowerCase()] || [];
  const menuItems = topics.map((topic) => ({ name: topic, path: `/courses/${courseName}/topics/${topic.toLowerCase().replace(/\s+/g, '-')}` }));


  // Sample course descriptions
  const courseDescriptions = {
    java: 'Learn Java programming from basics to advanced topics.',
    python: 'Comprehensive Python programming course.',
    'data-structures': 'Understand fundamental data structures.'
  };

  

  const content = courseName.toLowerCase() === 'java' ? (
    javaContent
  ) : courseName.toLowerCase() === 'python' ? (
    pythonContent
  ) : courseName.toLowerCase() === 'data-structures' ? (
    dataStructuresContent
  ) :(
    <p>{courseDescriptions[courseName.toLowerCase()] || 'Course description not available.'}</p>
  );

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} menuItems={menuItems}/>
      <CoursePageContainer>
        <CourseHeading>{courseName.charAt(0).toUpperCase() + courseName.slice(1)} Course</CourseHeading>
        <CourseContent>
          {content}
        </CourseContent>
      </CoursePageContainer>
    </>
  );
};
