// questionController.js
import { db } from '../db.js';

export const addQuestion = async (req, res) => {
  const { quizId, question, answers, correctAnswer } = req.body;

  try {
    const [result] = await db.promise().query(
      'INSERT INTO questions (quiz_id, question_text, answers, correct_answer) VALUES (?, ?, ?, ?)',
      [quizId, question, JSON.stringify(answers), correctAnswer]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Question added successfully' });
    } else {
      res.status(500).json({ error: 'Failed to add question' });
    }
  } catch (error) {
    console.error('Error while adding question:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getQuestions = async (req, res) => {
  const { quizId } = req.params;

  try {
    const query = 'SELECT question_id, question_text, answers, correct_answer FROM questions WHERE quiz_id = ?';
    db.query(query, [quizId], (err, results) => {
      if (err) {
        console.error('Error fetching questions:', err);
        res.status(500).json({ error: 'An error occurred while fetching questions' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error('Error in getQuestions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
