import { db } from '../db.js';


export const addUnit = async (req, res) => {
  const { v_year, unit_name, unit_description, price } = req.body;

  try {
    const [result] = await db.promise().query('INSERT INTO videounit (v_year, unit_name, unit_description, price) VALUES (?, ?, ?, ?)', [v_year, unit_name, unit_description, price]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Unit created successfully' });
    } else {
      res.status(500).json({ error: 'Failed to create uni' });
    }
  } catch (error) {
    console.error('Error while creating unit:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUnit = async (req, res) => {
  try {
    
    const query = 'SELECT unit_id, v_year, unit_name, unit_description, price FROM videounit';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching units data:', err);
        res.status(500).json({ error: 'An error occurred while fetching units data' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
   
    console.error('Error in getUnits:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

export const updateUnit = async (req, res) => {
  const { v_year, unit_name, unit_description, price } = req.body;
  const unit_id = req.params.unit_id;

  try {
    const sql = 'UPDATE videounit SET v_year=?, unit_name=?, unit_description=?, price=? WHERE unit_id=?';
    const values = [v_year, unit_name, unit_description, price, unit_id];
    await db.promise().query(sql, values);

    res.json({ message: 'Unit updated successfully' });
  } catch (error) {
    console.error('Error updating unit:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteUnit = async (req, res) => {
  try {
    const sql = 'DELETE FROM videounit WHERE unit_id=?';
    const unit_id = req.params.unit_id;

    db.query(sql, [unit_id], (err, data) => {
      if (err) {
        console.error('Error deleting video unit:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (data.affectedRows === 0) {
        return res.status(404).json({ error: 'Video unit not found' });
      }

      return res.status(200).json({ message: 'Video unit deleted successfully' });
    });
  } catch (error) {
    console.error('Error deleting video unit:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

   


export const addVideo = async (req, res) => {
  const { video_name, video_link,  vunit_id,start_date, end_date } = req.body;
  
  try {
   
    const query = 'INSERT INTO video ( video_name, video_link,vunit_id, start_date, end_date) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.query(query, [ video_name, video_link,vunit_id, start_date, end_date]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Video added successfully' });
    } else {
      res.status(500).json({ error: 'Failed to add video' });
    }
  } catch (error) {
    console.error('Error adding video:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const displayUnits = async (req, res) => {
  try {
    const query = 'SELECT unit_id,unit_name,v_year, unit_description, price FROM videounit';
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


export const autoCompletePartId = async (req, res) => {
  const { input } = req.query;

  try {
    const q = "SELECT unit_id, unit_name,  FROM videounit WHERE unit_id LIKE ?";
    const searchQuery = `%${input}%`;

    const results = await new Promise((resolve, reject) => {
      db.query(q, [searchQuery], (err, result) => {
        if (err) {
          reject(err);
        } else {
          const suggestions = result.map(row => ({ unit_id: row.unit_id, name: row.unit_name }));
          resolve(suggestions);
        }
      });
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    res.status(500).json({ error: 'An error occurred while fetching suggestions' });
  }
};


export const getaStock = async (req, res) => {
  const { unit_id } = req.params;
  try {
    const q = "SELECT * FROM videounit WHERE unit_id = ?";

    db.query(q, [unit_id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the stock' });
      } else {
        if (result.length === 0) {
          res.status(404).json({ error: 'Stock not found' });
        } else {
          res.status(200).json(result[0]);
        }
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};


export const updateStock = async (req, res) => {
  const { unit_id, price, v_year, unit_description } = req.body;

  try {
    const sql = "UPDATE videounit SET price = ?, unit_description = ?, v_year = ? WHERE unit_id = ?";
    const values = [price, unit_description, v_year, unit_id];

    db.query(sql, values, (error, results) => {
      if (error) {
        console.error('Error updating video:', error);
        res.status(500).json({ error: 'Failed to update video' });
      } else {
        res.status(200).json({ message: 'Video updated successfully' });
      }
    });
  } catch (error) {
    console.error('Error updating video:', error);
    res.status(500).json({ error: 'Failed to update video' });
  }
};
