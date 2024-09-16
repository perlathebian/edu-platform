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


// Example: Create a new question (if implementing POST)
// const createQuestion = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { topic, question_text } = req.body;
//   try {
//     const [result] = await db.query('INSERT INTO questions (topic, question_text) VALUES (?, ?)', [topic, question_text]);
//     res.status(201).json({ id: result.insertId, topic_id, question_text });
//   } catch (error) {
//     console.error('Error creating question:', error);
//     res.status(500).json({ message: 'Error creating question', error });
//   }
// };


module.exports = {
  getQuestionsByTopic,
  getQuestionById
};
