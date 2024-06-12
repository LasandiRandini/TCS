

import { db } from '../db.js';



export const practical = async (req, res) => {
  const { year, title, date, duration, institute, description } = req.body;

  try {
    const [result] = await db.promise().query(
      'INSERT INTO practical (year, title, date, duration, institute, description) VALUES (?, ?, ?, ?, ?, ?)',
      [year, title, date, duration, institute, description]
    );

    if (result.affectedRows === 1) {
      const practicalId = result.insertId;  // Get the ID of the newly inserted practical
      res.status(201).json({ message: 'Practical created successfully', practicalId });
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

export const addTimeSlots = async (req, res) => {
  const { practical_id, time_slots, max_limit } = req.body;

  if (!practical_id || !time_slots || !max_limit) {
    return res.status(400).json({ error: 'Practical ID, time slots, and max limit are required' });
  }

  const timeSlotsArray = time_slots.map(slot => [slot, practical_id, 0, max_limit]);

  try {
    const query = 'INSERT INTO practicaltimeslots (time_slots, practical_id, votes_count, max_limit) VALUES ?';

    db.query(query, [timeSlotsArray], (err, result) => {
      if (err) {
        console.error('Error inserting time slots:', err);
        return res.status(500).json({ error: 'An error occurred while inserting time slots' });
      }

      return res.status(200).json({ message: 'Time slots added successfully' });
    });
  } catch (error) {
    console.error('Error in addTimeSlots:', error);
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
    db.query(sql, [practical_id], (err, results) => {
      if (err) {
        console.error('Error fetching time slots:', err);
        return res.status(500).json({ error: 'An error occurred while fetching time slots' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'No time slots found for the given practical ID' });
      }

      return res.status(200).json(results);
    });
  } catch (error) {
    console.error('Error in getTimeSlots:', error);
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
};




export const voteForTimeSlot = (req, res) => {
  const { student_id, slot_id } = req.body;

  if (!student_id || !slot_id) {
    return res.status(400).json({ error: 'Student ID and Slot ID are required' });
  }

  const timeSlotSql = 'SELECT votes_count, max_limit FROM practicaltimeslots WHERE slot_id = ?';

  db.query(timeSlotSql, [slot_id], (err, timeSlotResult) => {
    if (err) {
      console.error('Error fetching time slot data:', err);
      return res.status(500).json({ error: 'An error occurred while fetching time slot data' });
    }

    if (timeSlotResult.length === 0) {
      return res.status(404).json({ error: 'Time slot not found' });
    }

    const { votes_count, max_limit } = timeSlotResult[0];

    if (votes_count >= max_limit) {
      
    return res.status(400).json({ error: 'ඔබ මීට පෙර මෙම practical session එක සදහා time slot වෙන් කර ගෙන ඇත' });
    }

    const voteSql = 'INSERT INTO practicalvotes (student_id, slot_id) VALUES (?, ?)';
    
    db.query(voteSql, [student_id, slot_id], (err) => {
      if (err) {
        console.error('Error recording vote:', err);
        return res.status(500).json({ error: 'An error occurred while recording vote' });
      }

      const updateVoteCountSql = 'UPDATE practicaltimeslots SET votes_count = votes_count + 1 WHERE slot_id = ?';
      
      db.query(updateVoteCountSql, [slot_id], (err) => {
        if (err) {
          console.error('Error updating vote count:', err);
          return res.status(500).json({ error: 'An error occurred while updating vote count' });
        }

        res.status(200).json({ message: 'Vote recorded successfully' });
      });
    });
  });
};


export const getCount = async (req, res) => {
  try {
    const query = `
      SELECT 
        pts.slot_id, 
        pts.practical_id, 
        pts.time_slots, 
        pts.votes_count, 
     
        p.title , 
        p.year
      FROM 
        practicaltimeslots pts
      JOIN 
        practical p ON pts.practical_id = p.practical_id
    `;

    db.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching practical time slots:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(200).json(result);
    });
  } catch (error) {
    console.error('Error in getPracticalTimeSlots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updatePractical = async (req, res) => {
  const { practical_id } = req.params;
  const { title, year, date, duration, institute, description } = req.body;

  try {
    const sql = `
      UPDATE practical
      SET title=?, year=?, date=?, duration=?, institute=?, description=?
      WHERE practical_id=?
    `;
    const params = [title, year, date, duration, institute, description, practical_id];

    db.query(sql, params, (err, result) => {
      if (err) {
        console.error('Error updating practical:', err);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Practical not found' });
      }

      return res.status(200).json({ message: 'Practical updated successfully' });
    });
  } catch (error) {
    console.error('Error updating practical:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};