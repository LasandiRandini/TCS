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

export const addVideo = async (req, res) => {
  const { video_name, video_link,  vunit_id,start_date, end_date } = req.body;

  try {
    // Assuming your video table name is 'videos'
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
