import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const SubmitButton = styled.button`
  background-color: #ff5c5c;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff4c4c;
  }
`;

const DeleteQuestionPage = () => {
  const [topic, setTopic] = useState('');
  const [questionText, setQuestionText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
        alert('You need to log in as a teacher.');
        return;
      }

      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log('Decoded Token:', decodedToken); // Ensure the token has the teacher role
      }

    console.log('Deleting question:', { topic, question_text: questionText }); 

    const response = await fetch('http://localhost:5000/api/delete-question', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ topic, question_text: questionText }),
    });

    if (response.ok) {
      alert('Question deleted successfully!');
      navigate('/teacher');
    } else {
        const result = await response.json();
        alert(`Error deleting question: ${result.message}`);
    }
  };

  return (
    <Container>
      <Title>Delete a Quiz Question</Title>
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
            placeholder="Enter the quiz question text"
            required
          />
        </Label>
        <SubmitButton type="submit">Delete Question</SubmitButton>
      </Form>
    </Container>
  );
};

export default DeleteQuestionPage;
