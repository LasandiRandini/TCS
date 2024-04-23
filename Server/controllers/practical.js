
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
    // Fetch all practical details from the database
    const practicals = await practical.find({}, { _id: 0, __v: 0 });
  
    // Send the practical details as a response
    res.status(200).json(practicals);
  } catch (error) {
    console.error('Error fetching practicals:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};