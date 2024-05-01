

import { db } from '../db.js';

export const practical = async (req, res) => {
  const { year, title, date, duration, institute, description } = req.body;

  try {
    const [result] = await db.promise().query('INSERT INTO practical (year, title, date, duration, institute, description) VALUES (?, ?, ?, ?, ?, ?)', [year, title, date, duration, institute, description]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Practical created successfully' });
    } else {
      res.status(500).json({ error: 'Failed to create practical' });
    }
  } catch (error) {
    console.error('Error while creating practical:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getpractical = async (req, res) => {
  try {
    const query = 'SELECT year, title, date, duration, institute, description FROM practical';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching practical data:', err);
        res.status(500).json({ error: 'An error occurred while fetching practical data' });
      } else {
        console.log(results);
        res.status(200).json(results);
      }
    });
  } catch (err) {
    console.error('Error in getpractical:', err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};
