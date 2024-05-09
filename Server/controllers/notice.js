import { db } from '../db.js';

export const addNotice = async (req, res) => {
  const { name, year, n_description } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const [result] = await db.promise().query('INSERT INTO notice (name, year, n_description, image) VALUES (?, ?, ?, ?)', [name, year, n_description, image]);

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
