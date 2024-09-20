import React from 'react';
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const OptionButton = styled.button`
  background-color: #50fa7b;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #45e169;
  }
`;

const TeacherPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Teacher's Dashboard</Title>
      <ButtonContainer>
        <OptionButton onClick={() => navigate('/add-question')}>Add Question</OptionButton>
        <OptionButton onClick={() => navigate('/delete-question')}>Delete Question</OptionButton>
      </ButtonContainer>
    </Container>
  );
};

export default TeacherPage;
