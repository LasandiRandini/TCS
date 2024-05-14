import { db } from "../db.js";

export const addReceipt = async (req, res) => {
  const reciepts = req.file ? req.file.filename : null;
  const r_unit_id = req.body.r_unit_id;

  try {
    const [result] = await db
      .promise()
      .query("INSERT INTO reciept (reciepts, r_unit_id) VALUES (?, ?)", [
        reciepts,
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

export const showReceipt = async (req, res) => {
  try {
    const sql = `
      SELECT reciept.reciepts, videounit.unit_name, videounit.v_year 
      FROM reciept
      JOIN videounit ON reciept.r_unit_id = videounit.unit_id
    `;

    db.query(sql, (err, result) => {
      if (err) {
        return res.json("Error");
      } else {
        return res.json(result);
      }
    });
  } catch (error) {
    console.error("Error while fetching receipts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
