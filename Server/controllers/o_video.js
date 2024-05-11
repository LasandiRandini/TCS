export const addReciept = async (req, res) => {
    
    const reciept = req.file ? req.file.filename : null;
  
    try {
      const [result] = await db.promise().query('INSERT INTO reciept (reciept) VALUES (?)', [reciept]);
  
      if (result.affectedRows === 1) {
        res.status(201).json({ message: 'Reciept uploaded successfully' });
      } else {
        res.status(500).json({ error: 'Failed to upload ' });
      }
    } catch (error) {
      console.error('Error while uploading reciept:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  export const showReciept = async (req, res) => {}