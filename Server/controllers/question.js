import { db } from '../db.js';

export const displayQuizzes = async (req, res) => {
  try {
    const query = 'SELECT q_id, q_unit, q_year, q_title, start_date, end_date, duration FROM quiz';
    const [results] = await db.promise().query(query);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching quiz data:', err);
    res.status(500).json({ error: 'An error occurred while fetching quiz data' });
  }
};

export const deleteQuiz = async (req, res) => {
  try {
    const sql = 'DELETE FROM quiz WHERE q_id = ?';
    const q_id = req.params.q_id;
    const [result] = await db.promise().query(sql, [q_id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (err) {
    console.error('Error deleting quiz:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateQuiz = async (req, res) => {
  const { q_year, q_unit, q_title, start_date, end_date, duration } = req.body;
  const q_id = req.params.q_id;

  try {
    const sql = 'UPDATE quiz SET q_year = ?, q_unit = ?, q_title = ?, start_date = ?, end_date = ?, duration = ? WHERE q_id = ?';
    const values = [q_year, q_unit, q_title, start_date, end_date, duration, q_id];
    const [result] = await db.promise().query(sql, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Quiz not found' });
    }

    res.status(200).json({ message: 'Quiz updated successfully' });
  } catch (err) {
    console.error('Error updating quiz:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
