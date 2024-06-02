import { db } from "../db.js";






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




// showReceipt Controller
// export const showReceipt = async (req, res) => {
//   try {
//     const sql = `
//       SELECT 
//         reciept.reciept_id, 
//         reciept.reciepts, 
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
//         const receiptsWithFirebaseURLs = result.map((receipt) => ({
//           ...receipt,
//           reciepts: `https://firebasestorage.googleapis.com/v0/b/videos-b64b2.appspot.com/o/uploads/${receipt.reciepts}?alt=media`,
//         }));
//         return res.json(receiptsWithFirebaseURLs);
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

    db.query(sql, (err, result) => {
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



// approveReceipt Controller
export const approveReceipt = async (req, res) => {
  const { receipt_id } = req.params;
  try {
    const sql = "UPDATE reciept SET permission = 'ok' WHERE reciept_id = ?";
    db.query(sql, [receipt_id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Error approving receipt" });
      } else {
        return res.status(200).json("Receipt approved");
      }
    });
  } catch (error) {
    console.error("Error while approving receipt:", error);
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
export const enrollInUnit = async (req, res) => {
  const { userId, unitId, enrollmentStatus, startDate } = req.body;

  try {
    const [result] = await db
      .promise()
      .query(
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




export const getVideosByUnitId = async (req, res) => {
  const { unit_id } = req.params;
  try {
    const query = `
      SELECT vu.unit_name, v.video_id, v.video_name, v.video_link
      FROM video v
      JOIN videounit vu ON v.vunit_id = vu.unit_id
      WHERE vu.unit_id = ?
    `;
    db.query(query, [unit_id], (err, results) => {
      if (err) {
        return res.status(500).json({ error: "Error fetching videos" });
      } else {
        return res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error("Error while fetching videos:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

