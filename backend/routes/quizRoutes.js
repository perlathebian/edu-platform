// backend/routes/quizRoutes.js

const express = require('express');
const router = express.Router();
const { addQuestion, getQuestionsByTopic, getQuestionById, submitQuizAnswers } = require('../controllers/quizController');
const requireTeacherRole = require('../middleware/roleMiddleware');

// GET /api/topics/:topicId/questions - Get all questions for a topic
router.get('/topics/:topic/questions', getQuestionsByTopic);

// GET /api/questions/:id - Get a specific question by ID
router.get('/questions/:id', getQuestionById);
// routes/quizRoutes.js

// POST /api/quiz/submit - Submit quiz answers
router.post('/quiz/submit', submitQuizAnswers);

// New route for adding questions (Teacher Only)
router.post('/add-question', requireTeacherRole, addQuestion);

module.exports = router;
