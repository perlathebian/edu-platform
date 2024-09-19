import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes/Theme';
import { MainPage } from './pages/MainPage';
import { CoursePage } from './pages/CoursePage';
import { TopicPage } from './pages/TopicPage';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import QuizPage from './pages/QuizPage';
import AddQuestionPage from './pages/AddQuestionPage';
import GlobalStyle from './themes/GlobalStyle';
import ProtectedRoute from './components/ProtectedRoute';
import TeacherProtectedRoute from './components/TeacherProtectedRoute';

function App() {
  const [theme, setTheme] = useState('light');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const handleLogin = (newToken) => {
    setToken(newToken); // Update token after login
    localStorage.setItem('token', newToken);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage toggleTheme={toggleTheme} theme={theme} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route 
            path="/courses/:courseName" 
            element={
              <ProtectedRoute>
                <CoursePage toggleTheme={toggleTheme} theme={theme} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/courses/:courseName/topics/:topicName" 
            element={
              <ProtectedRoute>
                <TopicPage toggleTheme={toggleTheme} theme={theme} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/courses/:courseName/topics/:topicName/quiz" 
            element={
              <ProtectedRoute>
                <QuizPage toggleTheme={toggleTheme} theme={theme} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/add-question" 
            element={
              <ProtectedRoute allowedRoles={['teacher']}>  {/* This ensures only teachers can access */}
                <AddQuestionPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
