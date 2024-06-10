import { db } from "../db.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const register = (req, res) => {
  
  const checkExistingUserQuery =
    "SELECT * FROM users WHERE snic_no=? OR email=?  OR contact_no=? OR parent_contact_no=? OR parent_email=? OR  username=?";

  db.query(
    checkExistingUserQuery,
    [
      req.body.snic_no,
      req.body.email,
      req.body.contact_no,
      
      req.body.parent_contact_no,
      req.body.parent_email,
      req.body.username,
    ],
    (err, userData) => {
      if (err) {
        console.error("Error checking existing user:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (userData.length) {
        return res.status(409).json({ error: "User already exists!" });
      }

      
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

    
      const insertUserQuery =
        "INSERT INTO users(`first_name`,`last_name`,`distric`, `snic_no`,`email`,`contact_no`,`al_year`,`institute`,`parent_contact_no`,`parent_email`,`username`,`password`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
      const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.distric,
        req.body.snic_no,
        req.body.email,
        req.body.contact_no,
        req.body.al_year,
        req.body.institute,
        req.body.parent_contact_no,
        req.body.parent_email,
        req.body.username,
        hash,
      ];

      db.query(insertUserQuery, values, (err, data) => {
        if (err) {
          console.error("Error inserting new user:", err);
          return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(200).json({ message: "User created successfully!" });
      });
    }
  );
};


// export const login = (req, res) => {
//   const q = "SELECT * FROM users WHERE username=?";

//   db.query(q, [req.body.username], (err, data) => {
//     if (err) return res.json(err);
//     if (data.length == 0) return res.status(404).json("User not found!");

//     const isPasswordCorrect = bcrypt.compareSync(
//       req.body.password,
//       data[0].password
//     );
//     if (!isPasswordCorrect)
//       return res.status(400).json("Wrong username or password!");

//     const token = Jwt.sign({ id: data[0].id }, "jwtkey");
//     const { password, ...other } = data[0];

//     res.cookie("access_token", token, {
//       httpOnly: true,
//     });

    
//     const nicQuery = "SELECT snic_no FROM users WHERE username = ?";
//     db.query(nicQuery, [req.body.username], (nicErr, nicData) => {
//       if (nicErr) return res.json(nicErr);
//       if (nicData.length == 0) return res.status(404).json("NIC not found!");

//       const nic_no = nicData[0].snic_no;

   
//       const statusQuery = "SELECT status FROM status WHERE nic_no = ?";
//       db.query(statusQuery, [nic_no], (statusErr, statusData) => {
//         if (statusErr) return res.json(statusErr);
//         if (statusData.length == 0) return res.status(404).json("Status not found!");

        
//         res.status(200).json({ ...other, status: statusData[0].status });
//       });
// });
// });
// };


export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username=?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const user = data[0];
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!");
    if (user.activeness !== 'active') return res.status(403).json("Account is inactive!");

    const token = Jwt.sign({ id: user.id }, "jwtkey");
    const { password, ...other } = user;

    res.cookie("access_token", token, { httpOnly: true });

    const nicQuery = "SELECT snic_no FROM users WHERE username = ?";
    db.query(nicQuery, [req.body.username], (nicErr, nicData) => {
      if (nicErr) return res.json(nicErr);
      if (nicData.length === 0) return res.status(404).json("NIC not found!");

      const nic_no = nicData[0].snic_no;
      const statusQuery = "SELECT status FROM status WHERE nic_no = ?";
      db.query(statusQuery, [nic_no], (statusErr, statusData) => {
        if (statusErr) return res.json(statusErr);
        if (statusData.length === 0) return res.status(404).json("Status not found!");

        res.status(200).json({ ...other, status: statusData[0].status, active: true });
      });
    });
  });
};

export const profile = (req, res) => {
  const token = req.cookies.access_token || req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, 'jwtkey', (err, decoded) => {
    if (err) return res.status(401).json({ error: "Unauthorized" });

    const q = "SELECT * FROM users WHERE id = ?";
    db.query(q, [decoded.id], (err, data) => {
      if (err) return res.status(500).json({ error: "Database error" });
      if (data.length === 0) return res.status(404).json({ error: "User profile not found" });

      const userProfile = {
        first_name: data[0].first_name,
        last_name: data[0].last_name,
        snic_no: data[0].snic_no,
        district: data[0].district,
        email: data[0].email,
        contact_no: data[0].contact_no,
        al_year: data[0].al_year,
        institute: data[0].institute,
        parent_contact_no: data[0].parent_contact_no,
        parent_email: data[0].parent_email,
      };

      res.json(userProfile);
    });
  });
};



// export const deleteStudent = async (req, res) => {
//   try {
//     const sql = 'DELETE FROM users WHERE id=?';
//     const id = req.params.id;

//     db.query(sql, [id], (err, data) => {
//       if (err) {
//         console.error('Error deleting user:', err);
//         return res.status(500).json({ error: 'Internal server error' });
//       }

//       if (data.affectedRows === 0) {
//         return res.status(404).json({ error: 'User not found' });
//       }

//       return res.status(200).json({ message: 'User deleted successfully' });
//     });
//   } catch (error) {
//     console.error('Error deleting User:', error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const deleteStudent = async (req, res) => {
  try {
    const sqlDeleteUser = 'DELETE FROM users WHERE id=?';
    const sqlDeleteStatus = 'DELETE FROM status WHERE nic_no=?';
    const id = req.params.id;

    
    const user = await db.promise().query('SELECT snic_no FROM users WHERE id=?', [id]);
    
    if (user[0].length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const nic_no = user[0][0].snic_no;

   
    await db.promise().beginTransaction();

   
    const deleteUserResult = await db.promise().query(sqlDeleteUser, [id]);

    if (deleteUserResult[0].affectedRows === 0) {
      await db.promise().rollback();
      return res.status(404).json({ error: 'User not found' });
    }

  
    await db.promise().query(sqlDeleteStatus, [nic_no]);

   
    await db.promise().commit();

    return res.status(200).json({ message: 'User and corresponding status deleted successfully' });
  } catch (error) {
    console.error('Error deleting user and status:', error);
    await db.promise().rollback();
    return res.status(500).json({ error: 'Internal server error' });
  }
};


// export const displayUsers = async (req, res) => {
//   try {
//     const query = 'SELECT id,first_name,last_name,distric, snic_no,email,contact_no,al_year,institute,parent_contact_no,parent_email FROM users';
//     db.query(query, (err, results) => {
//       if (err) {
//         console.error('Error fetching practical data:', err);
//         res.status(500).json({ error: 'An error occurred while fetching practical data' });
//       } else {
//         console.log(results);
//         res.status(200).json(results);
//       }
//     });
//   } catch (err) {
//     console.error('Error in getpractical:', err);
//     res.status(500).json({ error: 'An unexpected error occurred' });
//   }
// };





export const getStatusByNic = async (req, res) => {
  const { snic_no } = req.params;

  try {
    const query = 'SELECT status FROM status WHERE nic_no = ?';
    db.query(query, [snic_no], (err, results) => {
      if (err) {
        console.error('Error fetching user status:', err);
        res.status(500).json({ error: 'An error occurred while fetching user status' });
      } else if (results.length > 0) {
        res.status(200).json({ status: results[0].status });
      } else {
        res.status(404).json({ error: 'Status not found for the provided NIC number' });
      }
    });
  } catch (error) {
    console.error('Error in getStatusByNic:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

export const getAlYears = (req, res) => {
  const query = 'SELECT al_year FROM al_years';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error' });
    }
    res.status(200).json(results);
  });
};

export const getAllStudents = (req, res) => {
  const query = `
    SELECT users.first_name, users.last_name, users.contact_no, users.institute, users.snic_no AS nic_no, status.status
    FROM users
    JOIN status ON users.snic_no = status.nic_no
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Error fetching students' });
      return;
    }
    res.status(200).json(results);
  });
};

// Update student status
export const updateStudentStatus = (req, res) => {
  const { nic_no } = req.params;
  
  // Get current status
  const getStatusQuery = 'SELECT status FROM status WHERE nic_no = ?';
  db.query(getStatusQuery, [nic_no], (err, results) => {
    if (err) {
      console.error('Error fetching current status:', err);
      res.status(500).json({ error: 'Error fetching current status' });
      return;
    }
    
    if (results.length === 0) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }
    
    const currentStatus = results[0].status;
    const newStatus = currentStatus === 'online' ? 'physical' : 'online';
    
    const updateStatusQuery = 'UPDATE status SET status = ? WHERE nic_no = ?';
    db.query(updateStatusQuery, [newStatus, nic_no], (err) => {
      if (err) {
        console.error('Error updating student status:', err);
        res.status(500).json({ error: 'Error updating student status' });
        return;
      }
      res.status(200).json({ message: 'Student status updated successfully' });
    });
  });
};
export const displayUsers = async (req, res) => {
  try {
    const query = `
      SELECT 
        users.id, 
        users.first_name, 
        users.last_name, 
        users.distric, 
        users.snic_no, 
        users.email, 
        users.contact_no, 
        users.al_year, 
        users.institute, 
        users.parent_contact_no, 
        users.parent_email, 
        users.activeness,
        status.status, 
        status.nic_no 
      FROM users
      JOIN status ON users.snic_no = status.nic_no
    `;
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'An error occurred while fetching user data' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (err) {
    console.error('Error in displayUsers:', err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

// Controller to update activeness
export const updateActiveness = (req, res) => {
  const { id } = req.params;
  const { activeness } = req.body;
  const query = 'UPDATE users SET activeness = ? WHERE id = ?';
  db.query(query, [activeness, id], (err) => {
    if (err) {
      console.error('Error updating activeness:', err);
      res.status(500).send('Error updating activeness');
    } else {
      res.send('Activeness updated successfully');
    }
  });
};