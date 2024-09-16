import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes/Theme';
import { MainPage } from './pages/MainPage';
import { CoursePage } from './pages/CoursePage';
import { TopicPage } from './pages/TopicPage';
import GlobalStyle from './themes/GlobalStyle';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/courses/:courseName" element={<CoursePage toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/courses/:courseName/topics/:topicName" element={<TopicPage toggleTheme={toggleTheme} theme={theme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
