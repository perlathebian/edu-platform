// src/pages/QuizPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuizContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Question = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.h4`
  margin-bottom: 10px;
`;

const AnswerOption = styled.div`
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #5cb85c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #4cae4c;
  }
`;

const QuizPage = () => {
  const { topicName, courseName } = useParams();
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const topicMapping = {
    'basic-syntax': 'bs',
    'data-types-and-variables': 'dt',
    'operators': 'Operators',
    'conditionals': 'Conditionals',
    'loops': 'Loops',
    'functions': 'Functions',
    'exceptions': 'Exceptions',
    'oop': 'OOP',
    'basic-concepts': 'PBC',
    'control-flow': 'PCF',
    'Functions': 'PF',
    'Data Structures': 'PDS',
    'String Manipulation': 'PSM',
    'File Handling': 'PFH',
    'Error Handling': 'PEH',
    'OOP': 'OOPP'
  };
  
  const mappedTopicName = topicMapping[topicName] || topicName;



  useEffect(() => {
    // Fetch the questions for the selected topic
    const fetchQuestions = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/topics/${mappedTopicName}/questions`);
            const data = await response.json();
            setQuestions(data);
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
    };

    fetchQuestions();
  }, [mappedTopicName]);

  const handleAnswerChange = (questionId, answerId) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const userId = JSON.parse(atob(token.split('.')[1])).userId; // Decode the userId from JWT

    // Prepare the answers for submission
    const answers = Object.entries(userAnswers).map(([questionId, selectedAnswerId]) => ({
      questionId,
      selectedAnswerId,
    }));

    // Submit quiz answers to the backend
    const response = await fetch('http://localhost:5000/api/quiz/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, answers }),
    });

    const result = await response.json();

    if (response.ok) {
      alert(`Quiz submitted successfully! You got ${result.correctAnswers} out of ${questions.length} correct.`);
      navigate(`/courses/${courseName}/topics/${topicName}`); // Redirect to the course page or some other page
    } else {
      alert('Error submitting quiz');
    }
  };

  return (
    <QuizContainer>
      <h2>Quiz: {topicName.replace(/-/g, ' ').toUpperCase()}</h2>
      <form>
        {questions.map((question) => (
          <Question key={question.id}>
            <QuestionText>{question.question_text}</QuestionText>
            {question.answers.map((answer) => (
              <AnswerOption key={answer.id}>
                <label>
                    <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={answer.id}
                        onChange={() => handleAnswerChange(question.id, answer.id)}
                    />
                    {answer.answer_text}
                </label>
              </AnswerOption>  
            ))}
          </Question>
        ))}
      </form>
      <SubmitButton type="button" onClick={handleSubmit}>
        Submit Quiz
      </SubmitButton>
    </QuizContainer>
  );

};

export default QuizPage;
