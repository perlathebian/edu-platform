import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import eduMainImage from '../assets/edu-main-image.png'; 

const MainPageContainer = styled.div`
  background-image: url(${eduMainImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainPage = ({ toggleTheme, theme }) => { // Accept theme prop
  const courses = [
    { name: 'Java', path: '/courses/java' },
    { name: 'Python', path: '/courses/python' },
    { name: 'Data Structures', path: '/courses/data-structures' },
  ];
  
  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} menuItems={courses}/> {/* Pass theme prop to Navbar */}
      <MainPageContainer>
      </MainPageContainer>
    </>
  );
};
