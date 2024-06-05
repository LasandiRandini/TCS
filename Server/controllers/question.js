import { db } from '../db.js';

export const displayQuizzes = async (req, res) => {
  try {
    const query = 'SELECT q_id, q_unit, q_year, q_title,quiz_type, start_date, end_date, duration FROM quiz';
    const [results] = await db.promise().query(query);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching quiz data:', err);
    res.status(500).json({ error: 'An error occurred while fetching quiz data' });
  }
};


// export const getQuiz = async (req, res) => {
//   const { q_id } = req.params;
//   try {
//     const query = 'SELECT q_id, q_unit, q_year, q_title, quiz_type, start_date, duration FROM quiz WHERE q_id = ?';
//     const [results] = await db.promise().query(query, [q_id]);
//     if (results.length > 0) {
//       const currentDate = formatISO(new Date()); // or new Date().toISOString()
//       res.status(200).json({ ...results[0], currentDate });
//     } else {
//       res.status(404).json({ error: 'Quiz not found' });
//     }
//   } catch (err) {
//     console.error('Error fetching quiz data:', err);
//     res.status(500).json({ error: 'An error occurred while fetching quiz data' });
//   }
// };

export const getQuiz = async (req, res) => {
  const { q_id } = req.params;
  try {
    const query = 'SELECT q_id, q_unit, q_year, q_title, quiz_type, start_date, end_date, duration FROM quiz WHERE q_id = ?';
    const [results] = await db.promise().query(query, [q_id]);
    if (results.length > 0) {
      const currentDate = new Date().toISOString();
      res.status(200).json({ ...results[0], currentDate });
    } else {
      res.status(404).json({ error: 'Quiz not found' });
    }
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

// export const updateQuiz = async (req, res) => {
//   const { q_year, q_unit, q_title, quiz_type, start_date, duration } = req.body;
//   const q_id = req.params.q_id;

//   try {
//     const sql = 'UPDATE quiz SET q_year = ?, q_unit = ?,quiz_type=?, q_title = ?, start_date = ?,  duration = ? WHERE q_id = ?';
//     const values = [q_year, q_unit, q_title, quiz_type,start_date, duration, q_id];
//     const [result] = await db.promise().query(sql, values);

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ error: 'Quiz not found' });
//     }

//     res.status(200).json({ message: 'Quiz updated successfully' });
//   } catch (err) {
//     console.error('Error updating quiz:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const updateQuiz = async (req, res) => {
  const { q_id } = req.params;
  const { q_year, q_unit, quiz_type, q_title, start_date, end_date, duration } = req.body;

  const formatDateForMySQL = (date) => {
    if (!date) return null; // Return null if date is undefined or null
    const dt = new Date(date);
    const yyyy = dt.getFullYear();
    const mm = String(dt.getMonth() + 1).padStart(2, '0');
    const dd = String(dt.getDate()).padStart(2, '0');
    const hh = String(dt.getHours()).padStart(2, '0');
    const mi = String(dt.getMinutes()).padStart(2, '0');
    const ss = String(dt.getSeconds()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
  };

  const formattedStartDate = formatDateForMySQL(start_date);
  const formattedEndDate = formatDateForMySQL(end_date);

  try {
    const query = `
      UPDATE quiz 
      SET q_year = ?, q_unit = ?, quiz_type = ?, q_title = ?, start_date = ?, end_date = ?, duration = ? 
      WHERE q_id = ?
    `;
    await db.promise().query(query, [
      q_year, 
      q_unit, 
      quiz_type, 
      q_title, 
      formattedStartDate, 
      formattedEndDate, 
      duration, 
      q_id
    ]);
    res.status(200).json({ message: 'Quiz updated successfully' });
  } catch (err) {
    console.error('Error updating quiz:', err);
    res.status(500).json({ error: 'An error occurred while updating quiz' });
  }
};
