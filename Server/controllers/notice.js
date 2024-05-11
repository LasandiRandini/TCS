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

export const getNotice = async (req, res) => {
  try {
    const notice = await db.promise().query('SELECT name, n_description, image FROM notice ');

    if (notice[0].length === 0) {
      return res.status(404).json({ error: 'Notice not found' });
    }

    res.status(200).json(notice[0][0]);
  } catch (error) {
    console.error('Error while fetching notice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
