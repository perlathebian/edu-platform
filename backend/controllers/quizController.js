const db = require('../config/db');
//const { validationResult } = require('express-validator');

// Get all questions for a specific topic
const getQuestionsByTopic = async (req, res) => {
  const { topic } = req.params;
  try {
    const [questions] = await db.query('SELECT * FROM questions WHERE topic = ?', [topic]);
    // For each question, fetch its answers
    const questionsWithAnswers = await Promise.all(
      questions.map(async (question) => {
        const [answers] = await db.query('SELECT * FROM answers WHERE question_id = ?', [question.id]);
        return {
          ...question,
          answers: answers
        };
      })
    );
    res.json(questionsWithAnswers);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

// Get a single question by ID with its answers
const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const [questions] = await db.query('SELECT * FROM questions WHERE id = ?', [id]);
    if (questions.length === 0) {
      return res.status(404).json({ message: 'Question not found' });
    }
    const question = questions[0];
    const [answers] = await db.query('SELECT * FROM answers WHERE question_id = ?', [id]);
    res.json({
      ...question,
      answers: answers
    });
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ message: 'Error fetching question', error });
  }
};



module.exports = {
  getQuestionsByTopic,
  getQuestionById
};
