// src/pages/AddQuestionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Add a Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Topic:
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required/>
        </label>
        <br />
        <label>
          Question Text:
          <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} required/>
        </label>
        <br />
        <h3>Answers:</h3>
        {answers.map((answer, index) => (
          <div key={index}>
            <input
              type="text"
              value={answer.text}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Answer ${index + 1}`}
              required
            />
            <label>
              <input
                type="checkbox"
                checked={answer.isCorrect}
                onChange={() => handleIsCorrectChange(index)}
              />
              Correct
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddAnswer}>Add Another Answer</button>
        <br />
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default AddQuestionPage;
