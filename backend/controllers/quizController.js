

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

const submitQuizAnswers = async (req, res) => {
  const { userId, answers } = req.body; // answers contain questionId and selectedAnswerId

  try {
    let correctAnswersCount = 0;

    // Loop through each submitted answer and check correctness
    for (let answer of answers) {
      const { questionId, selectedAnswerId } = answer;

      // Fetch the correct answer from the database
      const [correctAnswer] = await db.query('SELECT * FROM answers WHERE question_id = ? AND is_correct = 1', [questionId]);

      // Check if the user's selected answer matches the correct one
      if (correctAnswer && correctAnswer.length > 0 && correctAnswer[0].id === selectedAnswerId) {
        correctAnswersCount++; // Increment score if the answer is correct
      }

      // Optionally, you can save the user's attempt to the `user_quiz_attempts` table
      await db.query(
        'INSERT INTO user_quiz_attempts (user_id, question_id, selected_answer_id) VALUES (?, ?, ?)',
        [userId, questionId, selectedAnswerId]
      );
    }

    // Send the total correct answers back to the frontend
    res.json({ correctAnswers: correctAnswersCount });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ message: 'Error submitting quiz', error });
  }
};

const addQuestion = async (req, res) => {
  console.log('Add Question request received:', req.body); // Log the request body
  console.log('Headers:', req.headers); // Log the headers
  const { topic, question_text, answers } = req.body;

  try {
    const [result] = await db.query('INSERT INTO questions (topic, question_text) VALUES (?, ?)', [topic, question_text]);
    const questionId = result.insertId;

    for (let answer of answers) {
      await db.query('INSERT INTO answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)', 
        [questionId, answer.answer_text, answer.is_correct]);
    }

    res.json({ message: 'Question added successfully!' });
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(500).json({ message: 'Error adding question', error });
  }
};

const deleteQuestion = async (req, res) => {
  const { topic, question_text } = req.body;
  console.log('Authorization header:', req.headers.authorization); 
  console.log('Delete request received:', { topic, question_text }); 

  try {
    // Get the question ID
    const [question] = await db.query('SELECT id FROM questions WHERE topic = ? AND question_text = ?', [topic, question_text]);

    if (question.length === 0) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const questionId = question[0].id;

    // Delete the answers related to the question
    await db.query('DELETE FROM answers WHERE question_id = ?', [questionId]);

    // Delete the question itself
    await db.query('DELETE FROM questions WHERE id = ?', [questionId]);

    res.json({ message: 'Question and related answers deleted successfully!' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ message: 'Error deleting question', error });
  }
};



module.exports = {
  getQuestionsByTopic,
  getQuestionById,
  submitQuizAnswers,
  addQuestion,
  deleteQuestion,
};
