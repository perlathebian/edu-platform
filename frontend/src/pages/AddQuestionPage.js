// src/pages/AddQuestionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 1.2em;
  color: ${({ theme }) => theme.textColor};
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
`;

const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

const AddAnswerButton = styled.button`
  background-color: #50fa7b;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #45e169;
  }
`;

const SubmitButton = styled.button`
  background-color: #5cb85c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4cae4c;
  }
`;

const AddQuestionPage = () => {
  const [topic, setTopic] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [answers, setAnswers] = useState([{ text: '', isCorrect: false }]);
  const navigate = useNavigate();
  
  const handleAddAnswer = () => {
    setAnswers([...answers, { text: '', isCorrect: false }]);
  };

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].text = value;
    setAnswers(updatedAnswers);
  };

  const handleIsCorrectChange = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect;
    setAnswers(updatedAnswers);
  };

  // Handle form submission to send the question to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');// JWT token for teacher authentication

    const response = await fetch('http://localhost:5000/api/quiz/add-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ topic, question_text: questionText, answers }),
    });

    if (response.ok) {
      alert('Question added successfully!');
      navigate('/courses');
    } else {
      alert('Error adding question');
    }
  };

  return (
    <Container>
      <Title>Add a Quiz Question</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Topic:
          <Input 
            type="text" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
            placeholder="Enter topic (as in DB)"
            required
          />
        </Label>
        <Label>
          Question Text:
          <Input 
            type="text" 
            value={questionText} 
            onChange={(e) => setQuestionText(e.target.value)} 
            placeholder="Enter the quiz question"
            required
          />
        </Label>

        <h3>Answers:</h3>
        {answers.map((answer, index) => (
          <AnswerContainer key={index}>
            <Input
              type="text"
              value={answer.text}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Answer ${index + 1}`}
              required
            />
            <Checkbox
              type="checkbox"
              checked={answer.isCorrect}
              onChange={() => handleIsCorrectChange(index)}
            />
            <span>Correct</span>
          </AnswerContainer>
        ))}
        <AddAnswerButton type="button" onClick={handleAddAnswer}>Add Another Answer</AddAnswerButton>
        <SubmitButton type="submit">Submit Question</SubmitButton>
      </Form>
    </Container>
  );
};

export default AddQuestionPage;
