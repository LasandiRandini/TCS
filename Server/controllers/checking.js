// controllers/checking.js
import { db } from '../db.js';

export const checking = async (req, res) => {
  const { nic_no } = req.body;

  try {
    const [rows] = await db.promise().query('SELECT * FROM checking WHERE nic_no = ?', [nic_no]);

    if (rows.length === 0) {
      
      await db.promise().query('INSERT INTO status (nic_no, status) VALUES (?, ?)', [nic_no, 'online']);
      res.status(200).json({ status: 'online' });
    } else {
      const status = rows[0].status;
      const newStatus = (status === 'physical') ? 'online' : 'physical';

    
      await db.promise().query('INSERT INTO status (nic_no, status) VALUES (?, ?)', [nic_no, newStatus]);

      res.status(200).json({ status: newStatus });
    }
  } catch (error) {
    console.error('Error while checking student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
