import { db } from '../db.js';

// // Delete Video
// export const deleteVideo = async (req, res) => {
//   const { video_id } = req.params;

//   try {
//     const [result] = await db.promise().query('DELETE FROM video WHERE video_id = ?', [video_id]);

//     if (result.affectedRows === 1) {
//       res.status(200).json({ message: 'Video deleted successfully' });
//     } else {
//       res.status(404).json({ message: 'Video not found' });
//     }
//   } catch (error) {
//     console.error('Failed to delete video:', error);
//     res.status(500).json({ message: 'Failed to delete video', error });
//   }
// };

// // Update Video
// export const updateVideo = async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//     const [result] = await db.promise().query('UPDATE videos SET ? WHERE id = ?', [updatedData, id]);

//     if (result.affectedRows === 1) {
//       res.status(200).json({ message: 'Video updated successfully' });
//     } else {
//       res.status(404).json({ message: 'Video not found' });
//     }
//   } catch (error) {
//     console.error('Failed to update video:', error);
//     res.status(500).json({ message: 'Failed to update video', error });
//   }
// };


// Get all video units
export const getAllVideoUnits = async (req, res) => {
  try {
    const query = 'SELECT * FROM videounit';
    const [results] = await db.promise().query(query);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching video units:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get videos by unit ID
export const getVideosByUnitId = async (req, res) => {
  const { unitId } = req.params;
  try {
    const query = 'SELECT * FROM video WHERE vunit_id = ?';
    const [results] = await db.promise().query(query, [unitId]);
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
// Delete a video
export const deleteVideo = async (req, res) => {
    try {
      const videoId = req.params.video_id;
      const query = 'DELETE FROM video WHERE video_id = ?';
      await db.promise().query(query, [videoId]);
      res.status(200).json({ message: 'Video deleted successfully' });
    } catch (error) {
      console.error('Error deleting video:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  // Update a video
  export const updateVideo = async (req, res) => {
    try {
      const videoId = req.params.video_id;
      const { video_name, video_link, start_date, end_date } = req.body;
      const query = `
        UPDATE video 
        SET video_name = ?, video_link = ?, start_date = ?, end_date = ? 
        WHERE video_id = ?
      `;
      await db.promise().query(query, [video_name, video_link, start_date, end_date, videoId]);
      res.status(200).json({ message: 'Video updated successfully' });
    } catch (error) {
      console.error('Error updating video:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };