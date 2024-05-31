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



// export const uploadVideo = async (req, res) => {
//   const { video_link, video_name, vunit_id, start_date, end_date } = req.body;

//   if (!video_link || !video_name || !vunit_id || !start_date || !end_date) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const queryText = 'INSERT INTO video (video_link, video_name, vunit_id, start_date, end_date) VALUES (?, ?, ?, ?, ?)';
//     const values = [video_link, video_name, vunit_id, start_date, end_date];
    
//     db.query(queryText, values, (err, result) => {
//       if (err) {
//         console.error('Error uploading video:', err);
//         res.status(500).json({ message: 'Server error' });
//       } else {
//         res.status(201).json({ id: result.insertId, ...req.body });
//       }
//     });
//   } catch (error) {
//     console.error('Error in uploadVideo:', error);
//     res.status(500).json({ error: 'An unexpected error occurred' });
//   }
// };


export const uploadVideo = async (req, res) => {
  const { video_link, video_name, vunit_id, start_date, end_date } = req.body;

  try {
    const [result] = await db.promise().query('INSERT INTO video (video_link, video_name, vunit_id, start_date, end_date) VALUES (?, ?, ?, ?, ?)',  [video_link, video_name, vunit_id, start_date, end_date]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: 'Video uploaded successfully' });
    } else {
      res.status(500).json({ error: 'Failed to upload video' });
    }
  } catch (error) {
    console.error('Error while uploading:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const getUnitById = async (req, res) => {
  const { unit_id } = req.params;

  try {
    const [unitData] = await db.promise().query('SELECT * FROM videounit WHERE unit_id = ?', [unit_id]);

    if (unitData.length === 0) {
      return res.status(404).json({ error: 'Unit not found' });
    }

    res.status(200).json(unitData[0]);
  } catch (error) {
    console.error('Error fetching unit data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


