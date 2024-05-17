
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


export const addStudent = async (req, res) => {
  const { nic_no } = req.body;

  try {
    if (!nic_no) {
      return res.status(400).json({ message: 'NIC number is required' });
    }

    const status = "physical";

   
   

    
    await db.promise().query('INSERT INTO status (nic_no, status) VALUES (?, ?)', [nic_no, status]);

    res.status(200).json({ message: 'Registration successful', status });
  } catch (error) {
    console.error('Error while registering student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




export const addNics = async (req, res) => {
  const { nic_no } = req.body;

  try {
    if (!nic_no) {
      return res.status(400).json({ message: 'NIC number is required' });
    }

 
    await db.promise().query('INSERT INTO checking (nic_no) VALUES (?)', [nic_no]);

    res.status(200).json({ message: 'NIC added successfully' });
  } catch (error) {
    console.error('Error while adding NIC:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

