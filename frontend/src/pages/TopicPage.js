import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';

const TopicPageContainer = styled.div`
  padding: 80px 20px; /* Adjust for fixed navbar */
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const TopicContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const CodeContainer = styled.div`
  margin: 20px auto;
  width: 100%;
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

const Comment = styled.span`
  color: #6272a4; /* Grey color for comments */
`;

const Keyword = styled.span`
  color: #ff79c6; /* Pink color for keywords */
`;

const String = styled.span`
  color: #f1fa8c; /* Yellow color for strings */
`;

const QuizSection = styled.div`
  margin-top: 50px;
  padding: 20px;
  background: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const QuizHeader = styled.h2`
  color: #333;
  text-align: center;
`;

const QuizButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #4cae4c;
  }
`;

export const TopicPage = ({ toggleTheme, theme }) => {
  const { courseName, topicName } = useParams(); // Get course and topic name from URL params
  const navigate = useNavigate();

  // Define content for each topic (to be replaced with dynamic or converted content later)
  const topicContent = {
    java: {
      'basic-syntax': (
        <>
          <h2>Basic Syntax and Data Types in Java</h2>
          <p>
            Java has a straightforward syntax and supports various data types to handle different kinds of information. Let's explore the basic syntax and data types:
          </p>

          <h3>Basic Syntax:</h3>
          <ul>
            <li>
              <strong>Hello, World! Program:</strong>
              <CodeContainer>
                <EditRunButton>Edit & Run</EditRunButton>
                <pre>
                  <code>
                    <Keyword>public</Keyword> <Keyword>class</Keyword> HelloWorld {'{'}
                    <br />
                    <Keyword>   public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
                    <br />
                    <code>      System.out.println(<String>"Hello, World!"</String>);</code>
                    <br />
                    {'  }'}
                    <br />
                    {'}'}
                  </code>
                </pre>
              </CodeContainer>
            </li>
            <li>
              <strong>Comments:</strong> Use <code>//</code> for single-line comments and <code>/* */</code> for multi-line comments.
            </li>
            <li>
              <strong>Declaring Variables:</strong>
              <CodeContainer>
                <EditRunButton>Edit & Run</EditRunButton>
                <pre>
                  <code>
                    <Keyword>int</Keyword> age; <Comment>// Declaration </Comment>
                    <br />
                    age = 25; <Comment>// Assignment </Comment>
                    <br />
                    <Comment>// Shortened version (Declaration and Initialization) </Comment>
                    <br />
                    <Keyword>int</Keyword> height = 180;
                  </code>
                </pre>
              </CodeContainer>
            </li>
          </ul>

          <h3>Data Types:</h3>
          <p>Java supports two main categories of data types: primitive and reference.</p>

          <h4>Primitive Data Types:</h4>
          <ul>
            <li>
              <strong>Integer Types:</strong> <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>
            </li>
            <li>
              <strong>Floating-Point Types:</strong> <code>float</code>, <code>double</code>
            </li>
            <li>
              <strong>Character Type:</strong> <code>char</code>
            </li>
            <li>
              <strong>Boolean Type:</strong> <code>boolean</code>
            </li>
          </ul>

          <h4>Reference Data Types:</h4>
          <ul>
            <li>
              <strong>Objects:</strong> Instances of classes
            </li>
            <li>
              <strong>Arrays:</strong> Collections of elements of the same type
              <CodeContainer>
                <EditRunButton>Edit & Run</EditRunButton>
                <pre>
                  <code>
                    <Comment>// Array of integers </Comment>
                    <br />
                    <Keyword>int</Keyword>[] numbers = {'{'}1, 2, 3, 4, 5{'}'};
                  </code>
                </pre>
              </CodeContainer>
            </li>
          </ul>

          <h3>Operators:</h3>
          <ul>
            <li>
              <strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>
            </li>
            <li>
              <strong>Comparison Operators:</strong> <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>
            </li>
            <li>
              <strong>Logical Operators:</strong> <code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT)
            </li>
          </ul>

          <h3>Control Flow:</h3>
          <ul>
            <li>
              <strong>Conditional Statements:</strong> <code>if</code>, <code>else if</code>, <code>else</code>
            </li>
            <li>
              <strong>Looping Statements:</strong> <code>for</code>, <code>while</code>, <code>do-while</code>
            </li>
          </ul>

          <p>
            These are foundational concepts in Java programming, and understanding them is crucial as you delve into more advanced topics.
          </p>
          <QuizSection>
            <QuizHeader>Quiz</QuizHeader>
            <QuizButton onClick={() => navigate(`/quizzes/java/basic-syntax`)}>Attempt Quiz</QuizButton>
          </QuizSection>
        </>
      ),
      'data-types-and-variables': (
      <>
        <h2>Data Types and Variables</h2>
        <h3>Java Variables</h3>
        <p>
          Variables are named storage locations that hold data, and they can be declared using a specific data type. A variable declaration in Java typically looks like:
        </p>
        <pre>
          <code>
            <Keyword>dataType</Keyword> variableName;
          </code>
        </pre>
        <p>In Java, there are different types of variables, for example:</p>
        <ul>
          <li>String - stores text, such as “Hello”. String values should be wrapped inside double quotes</li>
          <li>int - stores integers (whole numbers), without decimals, such as 63 or -128.</li>
          <li>float - stores floating point numbers, with decimals, such as -54.33 or 54.33</li>
          <li>char - stores single characters, such as ‘b’ or ‘B’. Char values are surrounded by single quotes</li>
          <li>boolean - stores values with two states: true or false</li>
        </ul>

        <h3>Declaring a Variable</h3>
        <p>
          To create a variable, you must specify the type and assign it a value using the following syntax:
        </p>
        <pre>
          <code>
            <Keyword>dataType</Keyword> variableName = value;
          </code>
        </pre>
        <p>Example:</p>
        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>String</Keyword> name = <String>"Joe"</String>; <Comment>//creating a variable of type String and assigning it the value "Joe"</Comment>
              <br />
              <Keyword>int</Keyword> number = 17; <Comment>//creating a variable of type int and assigning it the value 17</Comment>
            </code>
          </pre>
        </CodeContainer>
        <p>You can also re-assign a value to an existing variable, it will overwrite the previous value:</p>
        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>int</Keyword> number = 17; <br />
              number = 89; <Comment>//new value is now 89</Comment>
              <br />
              <Comment>/*If you don't want others or yourself to overwrite an existing value</Comment>
              <br />
              <Comment> you can use the final keyword; this will declare the value as "final" or</Comment>
              <br />
              <Comment>"constant", which means immutable(unchangeable) and read-only*/</Comment>
              <br />
              <Keyword>final</Keyword> <Keyword>int</Keyword> numberFinal = 17; <br />
              numberFinal = 89; <Comment>// this will generate an error: cannot assign a value to a final variable</Comment>
            </code>
          </pre>
        </CodeContainer>
        <p>
          You can try for yourself displaying variables using the <b>println()</b> method, and concatenating different variables (using the plus sign +). Note: concatenating or adding different variable types might generate errors depending on the types used. (example: you cannot add an integer to a text).
        </p>

        <h3>Naming Variables:</h3>
        <p>
          Variable names are called identifiers. They should always start with lower-case letters and can contain letters, digits, underscores, and dollar signs. Names are case-sensitive (<b>myNum</b> is different from <b>mynum</b>). Reserved words like Java keywords (such as <b>int</b> or <b>boolean</b>) cannot be used as identifiers/names.
        </p>

        <h3>Data Types</h3>
        <p>Data types are divided into two groups:</p>
        <ul>
          <li>Primitive data types - include byte, short, int, long, float, double, boolean, and char.
            <ul><li>A primitive data type specifies the size and type of variable values, and it has no additional methods.</li></ul>
          </li>
          <li>Non-primitive data types - such as String, Arrays, and Classes (more on these later)
            <ul><li>Non-primitive data types are called <b>reference types</b> because they refer to objects.</li></ul>
          </li>
        </ul>

        <p>The main difference between <b>primitive</b> and <b>non-primitive</b> data types are:</p>
        <ul>
          <li>Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and are not defined by Java (except for <b>String</b>).</li>
          <li>Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.</li>
          <li>A primitive type has always a value, while non-primitive types can be <b>null</b>.</li>
          <li>A primitive type starts with a lowercase letter, while non-primitive types start with an uppercase letter.</li>
        </ul>

        <h3>Type Casting</h3>
        <p>Type casting refers to the process of converting a variable from one data type to another, allowing the variable to be used in expressions or operations that require a different type. In Java, there are two types of casting:</p>
        <ul>
          <li>Widening casting (automatic) - converts a smaller type to a larger type size:
            <code>byte → short → char → int → long → float → double</code>
          </li>
          <li>Narrowing casting (manual) - converts a larger type to a smaller type size:
            <code>double → float → long → int → char → short → byte</code>
          </li>
        </ul>

        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Comment>//example of widening casting</Comment>
              <br />
              <Keyword>int</Keyword> myInt = 9;
              <br />
              <Keyword>double</Keyword> myDouble = myInt; <Comment>//automatic casting: int to double</Comment>
              <br />
              System.out.println(myInt); <Comment>//output: 9</Comment>
              <br />
              System.out.println(myDouble); <Comment>//output: 9.0</Comment>
              <br />
              <Comment>//example of narrowing casting</Comment>
              <br />
              <Keyword>double</Keyword> myDoubleNarrow = 5.14d;
              <br />
              <Keyword>int</Keyword> myIntNarrow = (<Keyword>int</Keyword>) myDoubleNarrow; <Comment>//manual casting: double to int</Comment>
              <br />
              System.out.println(myDoubleNarrow); <Comment>//output: 5.14</Comment>
              <br />
              System.out.println(myIntNarrow); <Comment>//output: 5</Comment>
            </code>
          </pre>
        </CodeContainer>

        {/* Quiz Section */}
        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/data-types-and-variables`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
      'operators': (
      <>
        <h2>Operators</h2>
        <p>Java divides operators into groups:</p>
        <ul>
          <li>
            <strong>Arithmetic</strong>
            <br />
            Arithmetic operators include addition (<code>+</code>), subtraction (<code>-</code>), multiplication (<code>*</code>), division (<code>/</code>), modulus (<code>%</code>), increment (<code>++</code>), decrement (<code>--</code>)
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>//examples</Comment>
                  <br />
                  x + y; <Comment>//adds together two values</Comment>
                  <br />
                  x - y; <Comment>//subtracts one value from another</Comment>
                  <br />
                  x * y; <Comment>//multiplies two values</Comment>
                  <br />
                  x / y; <Comment>//divides one value by another</Comment>
                  <br />
                  x % y; <Comment>//returns the division remainder</Comment>
                  <br />
                  ++x; <Comment>//increases the value of x by 1</Comment>
                  <br />
                  --x; <Comment>//decreases the value of x by 1</Comment>
                </code>
              </pre>
            </CodeContainer>
          </li>

          <li>
            <strong>Assignment</strong>
            <br />
            Assignment operators are used to assign values to variables. These include assignment (<code>=</code>), addition assignment (<code>+=</code>), subtraction assignment (<code>-=</code>), multiplication assignment (<code>*=</code>), division assignment (<code>/=</code>), modulus assignment (<code>%=</code>), logical addition assignment (<code>&=</code>), logical or assignment (<code>|=</code>), etc.
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>//examples</Comment>
                  <br />
                  x = 5; <Comment>//assigns value 5 to x</Comment>
                  <br />
                  x += 5; <Comment>//adds 5 to the value of x</Comment>
                  <br />
                  x -= 5; <Comment>//subtracts 5 from the value of x</Comment>
                  <br />
                  x *= 5; <Comment>//multiplies 5 by the value of x</Comment>
                  <br />
                  x /= 5; <Comment>//divides x by 5</Comment>
                  <br />
                  x %= 5; <Comment>//returns remainder of the division of x by 5</Comment>
                  <br />
                  x &= 5; <Comment>//returns value of x & 5</Comment>
                  <br />
                  x |= 5; <Comment>//returns value of x | 5</Comment>
                  <br />
                  x ^= 5; <Comment>//returns value x ^ 5</Comment>
                </code>
              </pre>
            </CodeContainer>
          </li>

          <li>
            <strong>Comparison</strong>
            <br />
            Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions. The return value of a comparison is either <b>true</b> or <b>false</b>. These include equal to (<code>==</code>), not equal to (<code>!=</code>), greater than (<code>&gt;</code>), less than (<code>&lt;</code>), greater than or equal (<code>&gt;=</code>), less than or equal (<code>&lt;=</code>).
          </li>

          <li>
            <strong>Logical</strong>
            <br />
            Logical operators determine the logic between variables or values. They also test for true or false values. They include logical and (<code>&&</code>), logical or (<code>||</code>), logical not (<code>!</code>)
          </li>
        </ul>

        {/* Quiz Section */}
        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/operators`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
      'conditionals': (
      <>
        <h2>Java Conditions and If Statements</h2>
        <p>Java has four condition statements that are used to perform different decisions after testing for different actions.</p>
        <ul>
          <li>
            <strong>If statement:</strong> if a specified condition is true, it specifies a block of code to be executed
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>if</Keyword>(condition) {'{'}
                <br />
                &nbsp;&nbsp;{/* statements to be executed if condition applies */}
                <br />
                {'}'}
              </code>
            </pre>
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>//example</Comment>
                  <br />
                  <Keyword>int</Keyword> x = 8;
                  <br />
                  <Keyword>int</Keyword> y = 19;
                  <br />
                  <Keyword>if</Keyword>(x &lt; y) {'{'}
                  <br />
                  &nbsp;&nbsp;System.out.println(<String>"x is less than y"</String>);
                  <br />
                  {'}'}
                </code>
              </pre>
            </CodeContainer>
          </li>

          <li>
            <strong>Else statement:</strong> if the condition is false, else is used to specify the block of code to be executed in that case
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>if</Keyword> (condition) {'{'}
                <br />
                &nbsp;&nbsp;{/* statement to be executed if condition is true */}
                <br />
                {'}'} <Keyword>else</Keyword> {'{'}
                <br />
                &nbsp;&nbsp;{/* statement to be executed if condition is false */}
                <br />
                {'}'}
              </code>
            </pre>
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>//example</Comment>
                  <br />
                  <Keyword>int</Keyword> x = 8;
                  <br />
                  <Keyword>int</Keyword> y = 19;
                  <br />
                  <Keyword>if</Keyword>(x &lt; y) {'{'}
                  <br />
                  &nbsp;&nbsp;System.out.println(<String>"x is less than y"</String>);
                  <br />
                  {'}'} <Keyword>else</Keyword> {'{'}
                  <br />
                  &nbsp;&nbsp;System.out.println(<String>"x is greater than y"</String>);
                  <br />
                  {'}'}
                </code>
              </pre>
            </CodeContainer>
          </li>

          <li>
            <strong>Else If statement:</strong> this is used to test a new condition if the first condition is false
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>if</Keyword>(condition 1) {'{'}
                <br />
                &nbsp;&nbsp;{/* statement to be executed if condition 1 is true */}
                <br />
                {'}'} <Keyword>else if</Keyword>(condition 2) {'{'}
                <br />
                &nbsp;&nbsp;{/* statement to be executed if condition 1 is false */}
                <br />
                {'}'} <Keyword>else</Keyword> {'{'}
                <br />
                &nbsp;&nbsp;{/* statement to be executed if both conditions are false */}
                <br />
                {'}'}
              </code>
            </pre>
          </li>

          <li>
            <strong>Switch statement:</strong> used to select one of many code blocks to be executed based on the value of an expression. It provides a cleaner way to write multiple <b>if-else</b> conditions for the same variable.
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>switch</Keyword>(expression) {'{'}
                <br />
                &nbsp;&nbsp;<Keyword>case</Keyword> ...:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{/* statement */}
                <br />
                &nbsp;&nbsp;<Keyword>break</Keyword>;
                <br />
                &nbsp;&nbsp;<Keyword>case</Keyword> ...:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{/* statement */}
                <br />
                &nbsp;&nbsp;<Keyword>break</Keyword>;
                <br />
                &nbsp;&nbsp;{/* ... */}
                <br />
                &nbsp;&nbsp;<Keyword>default</Keyword>:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{/* statement */}
                <br />
                {'}'}
              </code>
            </pre>
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>//example</Comment>
                  <br />
                  <Keyword>switch</Keyword> (dayOfWeek) {'{'}
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 1:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Monday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 2:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Tuesday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 3:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Wednesday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 4:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Thursday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 5:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Friday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 6:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Saturday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>case</Keyword> 7:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"It's Sunday"</String>);
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>break</Keyword>;
                  <br />
                  &nbsp;&nbsp;<Keyword>default</Keyword>:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Invalid day of the week"</String>);
                  <br />
                  {'}'}
                </code>
              </pre>
            </CodeContainer>
            <p>
              The <b>break</b> statements are important to exit the <b>switch</b> statement after a match is found. The <b>default</b> case is optional and is executed if none of the other cases match.
            </p>
          </li>
        </ul>

        {/* Quiz Section */}
        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/conditionals`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
      'loops': (
      <>
        <h2>Loops</h2>
        <p>
          Loops are control flow structures in programming that allow a certain block of code to be executed repeatedly based on a specified condition. They help automate repetitive tasks and streamline the execution of code. There are different types of loops, including:
        </p>
        <ul>
          <li>
            <strong>For loop:</strong> executes a block of code a specific number of times.
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Keyword>for</Keyword> (<Keyword>int</Keyword> i = 0; i &lt; 5; i++) {'{'}
                  <br />
                  &nbsp;&nbsp;<Comment>// Code to be repeated</Comment>
                  <br />
                  {'}'}
                </code>
              </pre>
            </CodeContainer>
          </li>

          <li>
            <strong>For-Each loop:</strong> used exclusively to loop through elements in an array:
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>for</Keyword> (type variableName : arrayName) {'{'}
                <br />
                &nbsp;&nbsp;{/* code block to be executed */}
                <br />
                {'}'}
              </code>
            </pre>
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>//example</Comment>
                  <br />
                  <Keyword>String[]</Keyword> cars = {'{'}<String>"Volvo", "BMW", "Ford", "Mazda"</String>{'}'};
                  <br />
                  <Keyword>for</Keyword> (<Keyword>String</Keyword> i : cars) {'{'}
                  <br />
                  &nbsp;&nbsp;System.out.println(i);
                  <br />
                  {'}'}
                </code>
              </pre>
            </CodeContainer>
          </li>

          <li>
            <strong>While loop:</strong> repeats a block of code as long as a given condition is true.
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>while</Keyword> (condition) {'{'}
                <br />
                &nbsp;&nbsp;{/* Code to be repeated */}
                <br />
                {'}'}
              </code>
            </pre>
          </li>

          <li>
            <strong>Do-While loop:</strong> similar to the <b>while</b> loop, but the condition is checked after the code block is executed, ensuring that the block is executed at least once.
            <pre>
              <code>
                <Comment>//syntax</Comment>
                <br />
                <Keyword>do</Keyword> {'{'}
                <br />
                &nbsp;&nbsp;{/* Code to be repeated */}
                <br />
                {'}'} <Keyword>while</Keyword> (condition);
              </code>
            </pre>
          </li>

          <li>
            It is also possible to place a loop inside another loop. This is called a <strong>nested loop</strong>. The "inner loop" will be executed one time for each iteration of the "outer loop":
            <CodeContainer>
              <EditRunButton>Edit & Run</EditRunButton>
              <pre>
                <code>
                  <Comment>// Outer loop</Comment>
                  <br />
                  <Keyword>for</Keyword> (<Keyword>int</Keyword> i = 1; i &lt;= 2; i++) {'{'}
                  <br />
                  &nbsp;&nbsp;System.out.println(<String>"Outer: " + i</String>); <Comment>// Executes 2 times</Comment>
                  <br />
                  <Comment>// Inner loop</Comment>
                  <br />
                  &nbsp;&nbsp;<Keyword>for</Keyword> (<Keyword>int</Keyword> j = 1; j &lt;= 3; j++) {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Inner: " + j</String>); <Comment>// Executes 6 times (2 * 3)</Comment>
                  <br />
                  &nbsp;&nbsp;{'}'}
                  <br />
                  {'}'}
                </code>
              </pre>
            </CodeContainer>
          </li>
        </ul>

        {/* Quiz Section */}
        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/loops`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
      'functions': (
      <>
        <h2>Functions and Methods</h2>
        <p>
          A method is a block of code which only runs when it's called. Data, known as parameters, can be passed into a method. Methods are used to perform certain actions, and they are also known as functions. They are used to reuse code by defining the code once, and using it many times.
        </p>

        <h3>Creating a Method</h3>
        <p>
          A method must be declared within a class. It is defined with the name of the method, followed by parentheses <b>()</b>. Java provides some pre-defined methods, such as <b>System.out.println()</b>, but you can also create your own methods to perform certain actions:
        </p>
        <pre>
          <code>
            <Comment>//syntax of creating a method inside Main</Comment>
            <br />
            <Keyword>public</Keyword> <Keyword>class</Keyword> Main {'{'}
            <br />
            &nbsp;&nbsp;<Keyword>static</Keyword> <Keyword>void</Keyword> myMethod() {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<Comment>//code to be executed</Comment>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </code>
        </pre>

        <ul>
          <li><b>myMethod()</b> is the name of the method</li>
          <li><b>static</b> means that the method belongs to the Main class and not an object of the Main class (more on how to access methods through objects in the OOP section).</li>
          <li>To call a method in Java, write the method's name followed by two parentheses <b>()</b> and a semicolon <b>;</b></li>
        </ul>

        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>public</Keyword> <Keyword>class</Keyword> Example {'{'}
              <br />
              &nbsp;&nbsp;<Comment>// Method definition</Comment>
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> sayHello() {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Hello, World!"</String>);
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<Comment>// Calling the method</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;sayHello();
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>

        <h3>Method Overloading</h3>
        <p>This involves having multiple methods with the same name but with different parameters:</p>
        <pre>
          <code>
            <Keyword>int</Keyword> myMethod(<Keyword>int</Keyword> x)
            <br />
            <Keyword>float</Keyword> myMethod(<Keyword>float</Keyword> x)
            <br />
            <Keyword>double</Keyword> myMethod(<Keyword>double</Keyword> x, <Keyword>double</Keyword> y)
          </code>
        </pre>

        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>static</Keyword> <Keyword>int</Keyword> plusMethodInt(<Keyword>int</Keyword> x, <Keyword>int</Keyword> y) {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>return</Keyword> x + y;
              <br />
              {'}'}
              <br />
              <br />
              <Keyword>static</Keyword> <Keyword>double</Keyword> plusMethodDouble(<Keyword>double</Keyword> x, <Keyword>double</Keyword> y) {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>return</Keyword> x + y;
              <br />
              {'}'}
              <br />
              <br />
              <Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>int</Keyword> myNum1 = plusMethodInt(8, 5);
              <br />
              &nbsp;&nbsp;<Keyword>double</Keyword> myNum2 = plusMethodDouble(4.3, 6.26);
              <br />
              &nbsp;&nbsp;System.out.println(<String>"int: "</String> + myNum1);
              <br />
              &nbsp;&nbsp;System.out.println(<String>"double: "</String> + myNum2);
              <br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>

        {/* Quiz Section */}
        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/functions`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
      'exceptions': (
      <>
        <h2>Exceptions</h2>
        <p>
          Exceptions are events that occur during the execution of a program that disrupts the normal flow of instructions. Different errors can occur: coding errors made by the programmer, errors due to wrong input, or other unforeseeable things.
        </p>
        <p>
          When an error occurs, Java will normally stop and generate an error message. The technical term for this is: Java will <em>throw</em> an <b>exception</b> (throw an error). Exception handling in Java is done using <b>try</b>, <b>catch</b>, and <b>finally</b> blocks.
        </p>
        <ul>
          <li><b>try</b> block: It contains the code that might throw an exception.</li>
          <li><b>catch</b> block: It contains the code that is executed if an exception occurs in the corresponding try block. Multiple catch blocks can be used to handle different types of exceptions.</li>
          <li><b>finally</b> block: It contains the code that is always executed, regardless of whether an exception occurs or not. It's typically used for cleanup tasks.</li>
        </ul>

        <p>Here's the syntax:</p>
        <pre>
          <code>
            <Keyword>try</Keyword> {'{'}
            <br />
            &nbsp;&nbsp;{/* Code that might throw an exception */}
            <br />
            {'}'} <Keyword>catch</Keyword> (<Keyword>ExceptionType1</Keyword> e1) {'{'}
            <br />
            &nbsp;&nbsp;{/* Code to handle ExceptionType1 */}
            <br />
            {'}'} <Keyword>catch</Keyword> (<Keyword>ExceptionType2</Keyword> e2) {'{'}
            <br />
            &nbsp;&nbsp;{/* Code to handle ExceptionType2 */}
            <br />
            {'}'} <Keyword>finally</Keyword> {'{'}
            <br />
            &nbsp;&nbsp;{/* Code that always executes */}
            <br />
            {'}'}
          </code>
        </pre>

        <p>Example:</p>
        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>public</Keyword> <Keyword>class</Keyword> ExceptionExample {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>try</Keyword> {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>// Code that might throw an exception</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Keyword>int</Keyword> result = divide(10, 0);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Result: "</String> + result);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'}'} <Keyword>catch</Keyword> (<Keyword>ArithmeticException</Keyword> e) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>// Code to handle ArithmeticException</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Error: Cannot divide by zero."</String>);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'}'} <Keyword>finally</Keyword> {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Comment>// Code that always executes</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Finally block executed."</String>);
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              <br />
              &nbsp;&nbsp;<Comment>// A method that may throw an exception</Comment>
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>int</Keyword> divide(<Keyword>int</Keyword> a, <Keyword>int</Keyword> b) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>return</Keyword> a / b;
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>

        <p>
          In this example, the <b>divide</b> method attempts to perform a division operation that may result in an <b>ArithmeticException</b>. The <b>try</b> block is used to enclose this code, and the <b>catch</b> block handles the specific exception type. The <b>finally</b> block always executes, whether an exception occurs or not.
        </p>

        {/* Quiz Section */}
        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/exceptions`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
      'oop': (
      <>
        <h2>OOP Concepts</h2>
        <p>
          <b>Object-Oriented Programming</b> (OOP) is a programming paradigm that organizes software design around the concept of "objects," which represent real-world entities and encapsulate data and behavior. Key principles of OOP include encapsulation, inheritance, and polymorphism.
        </p>
        <p>
          <b>Encapsulation:</b> Involves bundling data (<b>attributes</b>) and <b>methods</b> (functions) that operate on the data into a single unit (<b>object</b>).
        </p>
        <p>
          <b>Inheritance:</b> Allows objects to inherit properties and behaviors from other objects, promoting code reuse.
        </p>
        <p>
          <b>Polymorphism:</b> Allows objects of different types to be treated as objects of a common type, providing flexibility and extensibility in code design.
        </p>
        <p>OOP promotes modularity, reusability, and a more intuitive way of modeling complex systems.</p>

        <h3>Classes and Objects</h3>
        <p>
          <b>Classes</b> and <b>objects</b> are two main aspects of object-oriented programming. For example, class <i>Fruit</i> could have objects like <i>Apple, Banana, Mango</i>. Another example, class <i>Car</i> could have objects like <i>Volvo, Audi, and Toyota</i>. So, a class is a <em>template</em> for objects, and an object is an <em>instance</em> of a class.
        </p>
        <p>
          Everything in Java is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has <b>attributes</b>, such as weight and color, and <b>methods</b>, such as drive and brake. A class is like an object constructor, or a "blueprint" for creating objects.
        </p>

        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Comment>// Creating a class called Car with member variables</Comment>
              <Comment>// color, speed, model and method drive()</Comment>
              <Keyword>public</Keyword> <Keyword>class</Keyword> Car {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>String</Keyword> color;
              <br />
              &nbsp;&nbsp;<Keyword>double</Keyword> speed;
              <br />
              &nbsp;&nbsp;<Keyword>String</Keyword> model;
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>void</Keyword> drive() {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"The car is driving"</String>);
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'}
              <br />
              <br />
              <Comment>/* Creating an object from the class; specify the class name,</Comment>
              <Comment> followed by the name of the object, and use the keyword "new" */</Comment>
              <br />
              <Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
              <br />
              &nbsp;&nbsp;Car car1 = <Keyword>new</Keyword> Car();
              <br />
              &nbsp;&nbsp;car1.color = "red";
              <br />
              &nbsp;&nbsp;car1.speed = 100;
              <br />
              &nbsp;&nbsp;car1.model = "ABCDE";
              <br />
              &nbsp;&nbsp;System.out.println(car1.color);
              <br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>

        <h3>Constructors</h3>
        <p>
          A <b>constructor</b> is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes:
        </p>

        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Comment>// Create a Car class</Comment>
              <Keyword>public</Keyword> <Keyword>class</Keyword> Car {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>int</Keyword> x; <Comment>// Create a class attribute</Comment>
              <br />
              &nbsp;&nbsp;<Comment>// Create a class constructor for the Car class</Comment>
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> Car() {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;x = 5; <Comment>// Set the initial value for the class attribute x</Comment>
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Car car = <Keyword>new</Keyword> Car(); <Comment>// Create an object of class Car</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(car.x); <Comment>// Print the value of x</Comment>
              <br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>

        <h3>Inheritance</h3>
        <p>
          This involves inheriting attributes and methods from one class to another, thus having a <b>subclass (child)</b> inheriting from a <b>superclass (parent)</b>. To inherit from a class, use the keyword <b>extends</b>.
        </p>
        <p>
          In the example below, the <i>Car</i> class (subclass) inherits the attributes and methods from the <i>Vehicle</i> class (superclass):
        </p>

        <CodeContainer>
          <EditRunButton>Edit & Run</EditRunButton>
          <pre>
            <code>
              <Keyword>class</Keyword> Vehicle {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>protected</Keyword> <Keyword>String</Keyword> brand = <String>"Ford"</String>; <Comment>// Vehicle attribute</Comment>
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>void</Keyword> honk() {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<String>"Tuut, tuut!"</String>);
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              {'}'}
              <br />
              <br />
              <Keyword>class</Keyword> Car <Keyword>extends</Keyword> Vehicle {'{'}
              <br />
              &nbsp;&nbsp;<Keyword>private</Keyword> <Keyword>String</Keyword> modelName = <String>"Mustang"</String>; <Comment>// Car attribute</Comment>
              <br />
              &nbsp;&nbsp;<Keyword>public</Keyword> <Keyword>static</Keyword> <Keyword>void</Keyword> main(String[] args) {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Car myCar = <Keyword>new</Keyword> Car(); <Comment>// Create a myCar object</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;myCar.honk(); <Comment>// Call the honk() method (from the Vehicle class) on the myCar object</Comment>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myCar.brand + <String>" "</String> + myCar.modelName);
              <br />
              {'}'}
            </code>
          </pre>
        </CodeContainer>

        <QuizSection>
          <QuizHeader>Quiz</QuizHeader>
          <QuizButton onClick={() => navigate(`/quizzes/java/oop`)}>Attempt Quiz</QuizButton>
        </QuizSection>
      </>
    ),
    },
    python: {
      'basic-concepts': (
        <>
            <h2>Basic Concepts</h2>
            <h3>Variables and Data Types:</h3>
            <p>
                In Python, variables are used to store and manage data. Variables can be assigned values of different data types, 
                including integers, floats, strings, booleans, and more. Python is dynamically typed, meaning you don't need to 
                declare the data type explicitly.
            </p>
            <CodeContainer>
                <EditRunButton>Edit & Run</EditRunButton>
                <pre>
                    <code>
                        <Comment># Variables and Data Types</Comment>
                        name = <String>"John" </String> <Comment># String</Comment>
                        age = <String>25</String> <Comment># Integer</Comment>
                        height = <String>5.9 </String><Comment># Float</Comment>
                        is_student =<String>True </String> <Comment># Boolean</Comment>
                        <Comment> # Printing the values</Comment>     
                        <Keyword>print</Keyword>(<String>"Name:"</String>, name)
                        <Keyword>print</Keyword>(<String>"Age:"</String>, age)
                        <Keyword>print</Keyword>(<String>"Height:"</String>, height)
                        <Keyword>print</Keyword>(<String>"Is Student:"</String>, is_student)
                    </code>
                </pre>       
            </CodeContainer>
            <p>
                Think of a variable as a container that stores information. It's like a box with a label on it. You can put 
                different things in different boxes.
                <b>Example:</b> name = "John" - Here, name is a variable, and it holds the value "John".
                Every piece of information in Python has a type. The type defines what kind of information it is.
                <ul>
                    <li>String (str): Used for text. "John" is a string.</li>
                    <li>Integer (int): Used for whole numbers. 25 is an integer.</li>
                    <li>Float (float): Used for decimal numbers. 5.9 is a float.</li>
                    <li>Boolean (bool): Used for True or False values. True is a boolean.</li>
                </ul>
            </p>
            <h3>Basic Input and Output:</h3>
            <p>
                Input and output operations are fundamental. You can use the input() function to take user input and the 
                print() function to display output. The input() function returns a string, so you may need to convert it to the 
                desired data type.
            </p> 
            <CodeContainer>
                <EditRunButton>Edit & Run</EditRunButton>
                <pre>
                    <code>
                        <Comment># Basic Input and Output</Comment>  
                        user_name = <Keyword>input</Keyword>(<String>"Enter your name: "</String>)
                        user_age = <Keyword>int</Keyword>(<Keyword>input</Keyword>(<String>"Enter your age: "</String>))<Comment># Convert input to integer</Comment>
                        <Comment># Displaying output</Comment>   
                        <Keyword>print</Keyword>(<String>"Hello, "</String> + user_name + <String>"!"</String>)
                        <Keyword>print</Keyword>(<String>"In 5 years, you will be"</String>, user_age + 5, <String>"years old."</String>)
                    </code>
                </pre>
            </CodeContainer>
            <p> 
                Input (<em>input()</em>): It's like asking the user a question and getting an answer. The <em>input()</em> 
                function lets the user type something in.
                <b>Example:</b> <pre><code>user_name = input("Enter your name: ")</code></pre> - This asks the user to enter 
                their name and stores it in the user_name variable.
                Output (<em>print()</em>): It's like showing something to the user. The <em>print()</em> function displays 
                information on the screen.
                <b>Example:</b> <pre><code>print("Hello, " + user_name + "!")</code></pre> - This prints a greeting with the 
                user's name.
            </p>
            <QuizSection>
                <QuizHeader>Quiz</QuizHeader>
                <QuizButton onClick={() => navigate(`/quizzes/python/basic-concepts`)}>Attempt Quiz</QuizButton>
            </QuizSection>
        </>  
      ),
      'control-flow': '<p>Python Control Flow Content</p>',
      'Functions': '<p>Python Functions Content</p>',
      'Data Structures': '<p>Python DS Content</p>',
      'String Manipulation': '<p>Python String Manipulation Content</p>',
      'File Handling': '<p>Python File Handling Content</p>',
      'Error Handling': '<p>Python Error Handling Content</p>',
      'OOP': '<p>Python OOP Content</p>'
    },
    'data-structures': {
      arrays: '<p>Data Structures: Arrays Content</p>',
      'linked-lists': '<p>Data Structures: Linked Lists Content</p>',
      'Stacks': '<p>Data Structures: Stacks Content</p>',
      'Queues': '<p>Data Structures: Queues Content</p>',
      'Trees': '<p>Data Structures: Trees Content</p>',
      'Graphs': '<p>Data Structures: Graphs Content</p>',
      'Heaps': '<p>Data Structures: Heaps Content</p>',
      'Hash Tables': '<p>Data Structures: Hash Tables Content</p>'
    },
  };

  // Get content for the specific course and topic
  const content = (topicContent[courseName] && topicContent[courseName][topicName]) || 'Content not available.';

  const menuItems = Object.keys(topicContent[courseName] || {}).map((topic) => ({
    name: topic.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    path: `/courses/${courseName}/topics/${topic}`,
  }));

  const handleHomeClick = () => {
    navigate(`/courses/${courseName}`); // Navigate back to the main course page
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} menuItems={menuItems} showHomeIcon={true} onHomeClick={handleHomeClick} />
       
      <TopicPageContainer>
        <TopicContent>
          <h1>{topicName.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}</h1>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          {content}
        </TopicContent>
      </TopicPageContainer>
    </>
  );
};
