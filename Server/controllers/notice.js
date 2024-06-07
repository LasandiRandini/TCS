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
    const sql = 'SELECT name, n_description, image FROM notice';

    db.query(sql, (err, result) => {
      if (err) {
        return res.json("Error");
      } else if (result.length === 0) {
        return res.status(404).json({ error: 'Notice not found' });
      } else {
        return res.status(200).json(result);
      }
    });
  } catch (error) {
    console.error('Error while fetching notice:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const showNotices = async (req, res) => {
  try {
    
    const query = 'SELECT n_id, year, name, n_description, image FROM notice';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching notices data:', err);
        res.status(500).json({ error: 'An error occurred while fetching notices data' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
   
    console.error('Error in getPackags:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};


export const deleteNotice = async (req, res) => {
  try {
    const sql = 'DELETE FROM notice WHERE n_id=?';
    const n_id = req.params.n_id;

    db.query(sql, [n_id], (err, data) => {
      if (err) {
        console.error('Error deleting notice:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (data.affectedRows === 0) {
        return res.status(404).json({ error: 'Notice not found' });
      }

      return res.status(200).json({ message: 'Notice deleted successfully' });
    });
  } catch (error) {
    console.error('Error deleting notice:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
