import { db } from '../db.js';

export const addNotice = async (req, res) => {
  const { year, name, n_description } = req.body;

  try {
    const [result] = await db.promise().query('INSERT INTO notice (year, name, n_description) VALUES (?, ?, ?)', [year, name, n_description]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Notice created successfully' });
    } else {
      res.status(500).json({ error: 'Failed to create notice' });
    }
  } catch (error) {
    console.error('Error while creating notice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};