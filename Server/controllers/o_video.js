import { db } from "../db.js";

// export const addReceipt = async (req, res) => {
//   const reciepts = req.file ? req.file.filename : null;
//   const r_unit_id = req.body.r_unit_id;

//   try {
//     const [result] = await db
//       .promise()
//       .query("INSERT INTO reciept (reciepts, r_unit_id) VALUES (?, ?)", [
//         reciepts,
//         r_unit_id,
//       ]);

//     if (result.affectedRows === 1) {
//       res.status(201).json({ message: "Receipt uploaded successfully" });
//     } else {
//       res.status(500).json({ error: "Failed to upload receipt" });
//     }
//   } catch (error) {
//     console.error("Error while uploading receipt:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };




export const addReceipt = async (req, res) => {
  const { fileUrl, r_unit_id } = req.body;

  try {
    const [result] = await db
      .promise()
      .query("INSERT INTO reciept (reciepts, r_unit_id) VALUES (?, ?)", [
        fileUrl,
        r_unit_id,
      ]);

    if (result.affectedRows === 1) {
      res.status(201).json({ message: "Receipt uploaded successfully" });
    } else {
      res.status(500).json({ error: "Failed to upload receipt" });
    }
  } catch (error) {
    console.error("Error while uploading receipt:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const showReceipt = async (req, res) => {
//   try {
//     const sql = `
//       SELECT reciept.reciepts, videounit.unit_name, videounit.v_year 
//       FROM reciept
//       JOIN videounit ON reciept.r_unit_id = videounit.unit_id
//     `;

//     db.query(sql, (err, result) => {
//       if (err) {
//         return res.json("Error");
//       } else {
//         return res.json(result);
//       }
//     });
//   } catch (error) {
//     console.error("Error while fetching receipts:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const showReceipt = async (req, res) => {
  try {
    const sql = `
      SELECT reciept.reciepts, videounit.unit_name, videounit.v_year 
      FROM reciept
      JOIN videounit ON reciept.r_unit_id = videounit.unit_id
    `;

    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching receipts" });
      } else {
        // Assuming reciepts column stores Firebase Storage URLs
        const receiptsWithFirebaseURLs = result.map((receipt) => ({
          ...receipt,
          reciepts: `https://storage.googleapis.com/videos-b64b2.appspot.com/uploads/${receipt.reciepts}`,
          
        }));
        return res.json(receiptsWithFirebaseURLs);
      }
    });
  } catch (error) {
    console.error("Error while fetching receipts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const approveReceipt = async (req, res) => {
  const { nic_no, unit_id } = req.body;

  try {
  
    const userIdQuery = `SELECT user_id FROM users WHERE nic_no = ?`;
    db.query(userIdQuery, [nic_no], (err, userIdResult) => {
      if (err) {
        console.error('Error while fetching user ID:', err);
        return res.status(500).send('Internal server error');
      }
      const userId = userIdResult[0]?.user_id;

      if (!userId) {
        return res.status(404).send('User not found');
      }

   
      const approveReceiptQuery = `
        UPDATE receipts 
        SET is_approved = 1 
        WHERE user_id = ? AND unit_id = ?
      `;
      db.query(approveReceiptQuery, [userId, unit_id], (err, result) => {
        if (err) {
          console.error('Error while approving receipt:', err);
          return res.status(500).send('Internal server error');
        }
        res.send('Receipt approved successfully');
      });
    });
  } catch (err) {
    console.error('Error while approving receipt:', err);
    res.status(500).send('Internal server error');
  }
};