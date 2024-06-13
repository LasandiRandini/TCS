import { db } from "../db.js";

export const getStudentCounts = (req, res) => {
  const query = `
    SELECT 
      (SELECT COUNT(*) FROM status WHERE status = 'online') AS online,
      (SELECT COUNT(*) FROM status WHERE status = 'physical') AS physical
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching student counts:', err);
      res.status(500).json({ error: 'An error occurred while fetching student counts' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

// export const getReceiptPaymentCount = (req, res) => {
//     const query = `
//       SELECT COUNT(*) AS receiptPayments
//       FROM reciept
//       WHERE permission = 'ok' 
//     `;
  
//     db.query(query, (err, results) => {
//       if (err) {
//         console.error('Error fetching receipt payment count:', err);
//         res.status(500).json({ error: 'An error occurred while fetching receipt payment count' });
//       } else {
//         res.status(200).json(results[0]);
//       }
//     });
//   };
export const getReceiptPaymentCount = (req, res) => {
  const query = `
    SELECT COUNT(*) AS receiptPayments, SUM(v.price) AS totalIncome
    FROM reciept r
    JOIN videounit v ON r.r_unit_id = v.unit_id
    WHERE r.permission = 'ok'
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching receipt payment count:', err);
      res.status(500).json({ error: 'An error occurred while fetching receipt payment count' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

  export const getInstituteStudentCounts = (req, res) => {
    const query = `
      SELECT institute, COUNT(*) AS student_count
      FROM users
      WHERE institute IS NOT NULL
      GROUP BY institute
    `;
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching institute student counts:', err);
        res.status(500).json({ error: 'An error occurred while fetching institute student counts' });
      } else {
        res.status(200).json(results);
      }
    });
  };
  