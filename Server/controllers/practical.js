

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
    const query = 'SELECT practical_id,year, title, date, duration, institute, description FROM practical';
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




export const displayPractical = async (req, res) => {
  try {
    const query = 'SELECT practical_id,year, title, date, duration, institute, description FROM practical';
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



export const deletePractical = async (req, res) => {
  try {
    const sql = 'DELETE FROM practical WHERE practical_id=?';
    const practical_id = req.params.practical_id;

    db.query(sql, [practical_id], (err, data) => {
      if (err) {
        console.error('Error deleting practical:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (data.affectedRows === 0) {
        return res.status(404).json({ error: 'Practical not found' });
      }

      return res.status(200).json({ message: 'Practical deleted successfully' });
    });
  } catch (error) {
    console.error('Error deleting practical:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


export const getTimeSlots = async (req, res) => {
  const { practical_id } = req.params;

  if (!practical_id) {
    return res.status(400).json({ error: 'Practical ID is required' });
  }

  try {
    const sql = 'SELECT * FROM practicaltimeslots WHERE practical_id = ?';
    const [results] = await db.query(sql, [practical_id]); // Added await here

    if (results.length === 0) {
      return res.status(404).json({ error: 'No time slots found for the given practical ID' });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching time slots:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



export const voteForTimeSlot = async (req, res) => {
  const { student_id, slot_id } = req.body;

  if (!student_id || !slot_id) {
    return res.status(400).json({ error: 'Student ID and Slot ID are required' });
  }

  try {
    const timeSlotSql = 'SELECT votes_count, max_limit FROM practicaltimeslots WHERE slot_id = ?';
    const [timeSlotResult] =  db.query(timeSlotSql, [slot_id]);

    if (timeSlotResult.length === 0) {
      return res.status(404).json({ error: 'Time slot not found' });
    }

    const { votes_count, max_limit } = timeSlotResult[0];

    if (votes_count >= max_limit) {
      return res.status(400).json({ error: 'This time slot is full' });
    }

    const voteSql = 'INSERT INTO practicalvotes (student_id, slot_id) VALUES (?, ?)';
     db.query(voteSql, [student_id, slot_id]);

    const updateVoteCountSql = 'UPDATE practicaltimeslots SET votes_count = votes_count + 1 WHERE slot_id = ?';
     db.query(updateVoteCountSql, [slot_id]);

    res.status(200).json({ message: 'Vote recorded successfully' });
  } catch (err) {
    console.error('Error voting for time slot:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
