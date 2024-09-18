const express = require('express');
const router = express.Router();
const { getQuestionsByTopic, getQuestionById } = require('../controllers/quizController');
//const { body } = require('express-validator');

// GET /api/topics/:topicId/questions - Get all questions for a topic
router.get('/topics/:topic/questions', getQuestionsByTopic);

// GET /api/questions/:id - Get a specific question by ID
router.get('/questions/:id', getQuestionById);
// routes/quizRoutes.js


module.exports = router;
