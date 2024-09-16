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

// const HomeIcon = styled.span`
//   cursor: pointer;
//   font-size: 1.5em;
//   margin-right: 20px;
// `;

export const TopicPage = ({ toggleTheme, theme }) => {
  const { courseName, topicName } = useParams(); // Get course and topic name from URL params
  const navigate = useNavigate();

  // Define content for each topic (to be replaced with dynamic or converted content later)
  const topicContent = {
    java: {
      'basic-syntax': '<p>Java Basic Syntax Content</p>',
      'data-types-and-variables': '<p>Java Data Types and Variables Content</p>',
      'Operators':  '<p>Java Operators Content</p>',
      'Conditionals':  '<p>Java Conditionals Content</p>',
      'Loops':   '<p>Java Loops Content</p>',
      'Functions':   '<p>Java Functions Content</p>',
      'Exception Handling':    '<p>Java Exception Handling Content</p>',
      'OOP, Interfaces, Classes': '<p>Java OOP Content'
    },
    python: {
      'basic-concepts': '<p>Python Basic Concepts Content</p>',
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
        </TopicContent>
      </TopicPageContainer>
    </>
  );
};
