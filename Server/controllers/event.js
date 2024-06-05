// // import { db } from '../db.js';

// // export const getAllEvents = async (req, res) => {
// //   const userAcademicYear = req.query.academicYear; 

// //   try {
// //     const practicalsQuery = 'SELECT practical_id, title, date FROM practical WHERE year = ?';
// //     const [practicalsResults] = await db.promise().query(practicalsQuery, [userAcademicYear]);

// //     const quizzesQuery = 'SELECT q_id, q_unit, q_title, DATE(end_date) as end_date FROM quiz WHERE q_year = ?';
// //     const [quizzesResults] = await db.promise().query(quizzesQuery, [userAcademicYear]);

// //     const events = [
// //       ...practicalsResults.map(practical => ({
// //         title: practical.title,
// //         start: practical.date,
// //         type: 'practical',
// //         id: practical.practical_id,
// //         clickable: true 
// //       })),
// //       ...quizzesResults.map(quiz => ({
// //         title: `${quiz.q_unit} - ${quiz.q_title}`,
// //         start: quiz.end_date,
// //         type: 'quiz',
// //         id: quiz.q_id,
// //         clickable: true 
// //       }))
// //     ];

// //     res.status(200).json(events);
// //   } catch (error) {
// //     console.error('Error in getAllEvents:', error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // };

// import { db } from '../db.js';

// export const getAllEvents = async (req, res) => {
//   const userAcademicYear = req.query.academicYear; 

//   try {
//     const practicalsQuery = 'SELECT practical_id, title, date FROM practical WHERE year = ?';
//     const [practicalsResults] = await db.promise().query(practicalsQuery, [userAcademicYear]);

//     const quizzesQuery = 'SELECT q_id, q_unit, q_title, DATE(end_date) as end_date FROM quiz WHERE q_year = ?';
//     const [quizzesResults] = await db.promise().query(quizzesQuery, [userAcademicYear]);

//     const events = [
//       ...practicalsResults.map(practical => ({
//         title: practical.title,
//         start: practical.date,
//         type: 'practical',
//         id: practical.practical_id,
//         clickable: true 
//       })),
//       ...quizzesResults.map(quiz => ({
//         title: `${quiz.q_unit} - ${quiz.q_title}`,
//         start: quiz.end_date,
//         type: 'quiz',
//         id: quiz.q_id,
//         clickable: true 
//       }))
//     ];

//     res.status(200).json(events);
//   } catch (error) {
//     console.error('Error in getAllEvents:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

import { db } from '../db.js';

export const getAllEvents = async (req, res) => {
  const userAcademicYear = req.query.academicYear; 

  try {
    const practicalsQuery = 'SELECT practical_id, title, date FROM practical WHERE year = ?';
    const [practicalsResults] = await db.promise().query(practicalsQuery, [userAcademicYear]);

    const quizzesQuery = 'SELECT q_id, q_unit, q_title, DATE(start_date) as start_date, DATE(end_date) as end_date, quiz_type FROM quiz WHERE q_year = ?';
    const [quizzesResults] = await db.promise().query(quizzesQuery, [userAcademicYear]);

    const events = [
      ...practicalsResults.map(practical => ({
        title: practical.title,
        start: practical.date,
        type: 'practical',
        id: practical.practical_id,
        clickable: true 
      })),
      ...quizzesResults.map(quiz => ({
        title: `${quiz.q_unit} - ${quiz.q_title}`,
        start: quiz.quiz_type === 'weekly' ? quiz.start_date : quiz.end_date,
        type: 'quiz',
        id: quiz.q_id,
        clickable: true 
      }))
    ];

    res.status(200).json(events);
  } catch (error) {
    console.error('Error in getAllEvents:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};