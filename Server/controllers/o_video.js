import { db } from "../db.js";

import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kh.lasandirandini@gmail.com',
    pass: 'pere cbhd hokw ssbi'
  }
});

const sendEmail = (email, unitName) => {
  const mailOptions = {
    from: 'kh.lasandirandini@gmail.com',
    to: email,
    subject: 'Enrollment Confirmation',
    text: `You have successfully enrolled for the videos in ${unitName}. You can log in to the system and watch the related videos. Good luck!`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// export const addReceipt = async (req, res) => {
//   const { fileUrl, r_unit_id } = req.body;

//   try {
//     const [result] = await db
//       .promise()
//       .query("INSERT INTO reciept (reciepts, r_unit_id) VALUES (?, ?)", [
//         fileUrl,
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
    const { fileUrl, r_unit_id, u_id } = req.body;

    try {
      const [result] = await db
        .promise()
        .query("INSERT INTO reciept (reciepts, r_unit_id, u_id) VALUES (?, ?, ?)", [
          fileUrl,
          r_unit_id,
          u_id,
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
//       SELECT 
//         reciept.reciept_id, 
//         reciept.reciepts, 
//         reciept.permission,
//         videounit.unit_name, 
//         videounit.v_year,
//         users.snic_no,
//         users.first_name,
//         users.last_name
//       FROM reciept
//       JOIN videounit ON reciept.r_unit_id = videounit.unit_id
//       JOIN users ON reciept.u_id = users.id
//     `;

//     db.query(sql, (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error fetching receipts" });
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
  const { year } = req.query;

  let sql = `
    SELECT 
      reciept.reciept_id, 
      reciept.reciepts, 
      reciept.permission,
      videounit.unit_name, 
      videounit.v_year,
      users.snic_no,
      users.first_name,
      users.last_name
    FROM reciept
    JOIN videounit ON reciept.r_unit_id = videounit.unit_id
    JOIN users ON reciept.u_id = users.id
  `;

  if (year) {
    sql += ` WHERE videounit.v_year = ?`;
  }

  try {
    db.query(sql, year ? [year] : [], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching receipts" });
      } else {
        return res.json(result);
      }
    });
  } catch (error) {
    console.error("Error while fetching receipts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// // approveReceipt Controller
// export const approveReceipt = async (req, res) => {
//   const { receipt_id } = req.params;
//   try {
//     const sql = "UPDATE reciept SET permission = 'ok' WHERE reciept_id = ?";
//     db.query(sql, [receipt_id], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error approving receipt" });
//       } else {
//         return res.status(200).json("Receipt approved");
//       }
//     });
//   } catch (error) {
//     console.error("Error while approving receipt:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const approveReceipt = async (req, res) => {
  const { receipt_id } = req.params;

  try {
    const sqlUpdate = "UPDATE reciept SET permission = 'ok' WHERE reciept_id = ?";
    db.query(sqlUpdate, [receipt_id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error approving receipt" });
      } else {
        const sqlSelect = `
          SELECT users.email, videounit.unit_name 
          FROM reciept 
          JOIN users ON reciept.u_id = users.id 
          JOIN videounit ON reciept.r_unit_id = videounit.unit_id 
          WHERE reciept.reciept_id = ?
        `;

        db.query(sqlSelect, [receipt_id], (err, results) => {
          if (err) {
            console.error('Failed to fetch user email:', err);
            return res.status(500).json({ error: "Database error" });
          }

          if (results.length > 0) {
            const { email, unit_name } = results[0];
            sendEmail(email, unit_name);
            return res.status(200).json("Receipt approved and email sent");
          } else {
            return res.status(404).json({ error: "No matching record found" });
          }
        });
      }
    });
  } catch (error) {
    console.error("Error while approving receipt:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// export const rejectReceipt = async (req, res) => {
//   const { receipt_id } = req.params;
//   try {
//     const sql = "UPDATE reciept SET permission = 'not ok' WHERE reciept_id = ?";
//     db.query(sql, [receipt_id], (err, result) => {
//       if (err) {
//         return res.status(500).json({ error: "Error rejecting receipt" });
//       } else {
//         return res.status(200).json("Receipt rejected");
//       }
//     });
//   } catch (error) {
//     console.error("Error while rejecting receipt:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


export const rejectReceipt = async (req, res) => {
  const { receipt_id } = req.params;
  try {
    const sqlUpdate = "UPDATE reciept SET permission = 'not ok' WHERE reciept_id = ?";
    db.query(sqlUpdate, [receipt_id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error rejecting receipt" });
      } else {
        const sqlSelect = `
          SELECT users.email, units.unit_name 
          FROM reciept 
          JOIN users ON reciept.u_id = users.id 
          JOIN units ON reciept.unit_id = units.id 
          WHERE reciept.reciept_id = ?
        `;

        db.query(sqlSelect, [receipt_id], (err, results) => {
          if (err) {
            console.error('Failed to fetch user email:', err);
            return res.status(500).json({ error: "Database error" });
          }

          if (results.length > 0) {
            const { email, unit_name } = results[0];
            sendEmail(email, unit_name, false);
            return res.status(200).json("Receipt rejected and email sent");
          } else {
            return res.status(404).json({ error: "No matching record found" });
          }
        });
      }
    });
  } catch (error) {
    console.error("Error while rejecting receipt:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getApprovedUnits = async (req, res) => {
  const { userId } = req.params;
  try {
    const sql = "SELECT v.* FROM videounit v JOIN receipt r ON v.unit_id = r.r_unit_id WHERE r.u_id = ? AND r.permission = 'ok'";
    db.query(sql, [userId], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching approved units" });
      } else {
        return res.status(200).json(rows);
      }
    });
  } catch (error) {
    console.error("Error while fetching approved units:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// export const enrollInUnit = async (req, res) => {
//   const { userId, unitId, enrollmentStatus, startDate } = req.body;

//   try {
//     const [result] = await db
//       .promise()
//       .query(
//         "INSERT INTO video_user (vuser_id, unit_id, enrollment, start_date) VALUES (?, ?, ?, ?)",
//         [userId, unitId, enrollmentStatus, startDate]
//       );

//     if (result.affectedRows === 1) {
//       res.status(201).json({ message: "Enrollment successful" });
//     } else {
//       res.status(500).json({ error: "Failed to enroll in unit" });
//     }
//   } catch (error) {
//     console.error("Error while enrolling in unit:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };



// Enroll in unit
export const enrollInUnit = async (req, res) => {
  const { userId, unitId, enrollmentStatus, startDate } = req.body;

  try {
    const [existingRows] = await db.promise().query(
      "SELECT COUNT(*) AS count FROM video_user WHERE vuser_id = ? AND unit_id = ? AND enrollment = 'enrolled'",
      [userId, unitId]
    );

    if (existingRows[0].count > 0) {
      res.status(200).json({ message: "Already enrolled" });
      return;
    }

    const [result] = await db.promise().query(
      "INSERT INTO video_user (vuser_id, unit_id, enrollment, start_date) VALUES (?, ?, ?, ?)",
      [userId, unitId, enrollmentStatus, startDate]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ message: "Enrollment successful" });
    } else {
      res.status(500).json({ error: "Failed to enroll in unit" });
    }
  } catch (error) {
    console.error("Error while enrolling in unit:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



export const checkReceiptStatus = async (req, res) => {
  const { userId, unitId } = req.body;

  try {
    const [rows] = await db.promise().query(
      "SELECT permission FROM reciept WHERE u_id = ? AND r_unit_id = ?",
      [userId, unitId]
    );

    if (rows.length > 0 && rows[0].permission === 'ok') {
      res.status(200).json({ allowed: true });
    } else {
      res.status(200).json({ allowed: false });
    }
  } catch (error) {
    console.error("Error while checking receipt status:", error);
    res.status(500).json({ message: 'Failed to check receipt status' });
  }
};



// export const checkEnrollment = async (req, res) => {
//   const { userId, unitId } = req.body;

//   try {
//     const [rows] = await db.promise().query(
//       "SELECT COUNT(*) AS count FROM video_user WHERE vuser_id = ? AND unit_id = ? AND enrollment = 'enrolled'",
//       [userId, unitId]
//     );

    
//  if (rows[0].count > 0) {
//       res.status(200).json({ enrolled: true });
//     } else {
//       res.status(200).json({ enrolled: false });
//     }
//   } catch (error) {
//     console.error("Error while checking enrollment:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

export const checkEnrollment = async (req, res) => {
  const { userId, unitId } = req.body;

  try {
    const [rows] = await db.promise().query(
      "SELECT COUNT(*) AS count FROM video_user WHERE vuser_id = ? AND unit_id = ? AND enrollment = 'enrolled'",
      [userId, unitId]
    );

    if (rows[0].count > 0) {
      res.status(200).json({ enrolled: true });
    } else {
      res.status(200).json({ enrolled: false });
    }
  } catch (error) {
    console.error("Error while checking enrollment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getVideosByUnitId = async (req, res) => {
  const { unitId } = req.params; 
  try {
    
    const query = `
      SELECT vu.unit_name, v.video_id, v.video_name, v.video_link
      FROM video v
      JOIN videounit vu ON v.vunit_id = vu.unit_id
      WHERE vu.unit_id = ?
    `;
    db.query(query, [unitId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching videos" });
      } else {
        return res.status(200).json(results); // Return the results as JSON
      }
    });
  } catch (error) {
    console.error("Error while fetching videos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

