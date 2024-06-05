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


export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username=?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length == 0) return res.status(404).json("User not found!");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = Jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res.cookie("access_token", token, {
      httpOnly: true,
    });

    
    const nicQuery = "SELECT snic_no FROM users WHERE username = ?";
    db.query(nicQuery, [req.body.username], (nicErr, nicData) => {
      if (nicErr) return res.json(nicErr);
      if (nicData.length == 0) return res.status(404).json("NIC not found!");

      const nic_no = nicData[0].snic_no;

   
      const statusQuery = "SELECT status FROM status WHERE nic_no = ?";
      db.query(statusQuery, [nic_no], (statusErr, statusData) => {
        if (statusErr) return res.json(statusErr);
        if (statusData.length == 0) return res.status(404).json("Status not found!");

        
        res.status(200).json({ ...other, status: statusData[0].status });
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


export const displayUsers = async (req, res) => {
  try {
    const query = 'SELECT id,first_name,last_name,distric, snic_no,email,contact_no,al_year,institute,parent_contact_no,parent_email FROM users';
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
export const logout = (req, res) => {};




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
