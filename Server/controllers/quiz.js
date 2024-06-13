
import PDFDocument from 'pdfkit';
import fs from 'fs';
import { db } from '../db.js';

// Create Quiz API
export const createQuiz = async (req, res) => {
  const { q_title, q_unit,quiz_type, q_year, start_date, end_date, duration } = req.body;

  try {
    const [result] = await db.promise().query(
      'INSERT INTO quiz (q_title, q_unit,quiz_type, q_year, start_date, end_date, duration) VALUES (?,?, ?, ?, ?, ?, ?)',
      [q_title, q_unit,quiz_type, q_year, start_date, end_date, duration]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ q_id: result.insertId, ...req.body });
    } else {
      res.status(500).json({ error: 'Failed to create quiz' });
    }
  } catch (error) {
    console.error('Error while creating quiz:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const addQuestion = async (req, res) => {
    const { q_id, questions } = req.body;

    try {
        const questionQueries = questions.map(question => (
            db.promise().query(
                'INSERT INTO question (q_id, q_text, answers, correct_answer) VALUES (?, ?, ?, ?)',
                [q_id, question.question, JSON.stringify(question.answers), question.correctAnswer]
            )
        ));
        await Promise.all(questionQueries);
        res.status(201).json({ message: 'Questions added successfully' });
    } catch (error) {
        console.error('Error adding questions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



// export const getAllQuizzes = (req, res) => {
//     try {
//         const query = `
//             SELECT q_id, quiz_type, q_year, q_unit, q_title, start_date, end_date, duration
//             FROM quiz
//             WHERE end_date >= NOW()
//         `;
//         db.query(query, (err, results) => {
//             if (err) {
//                 console.error('Error fetching quizzes:', err);
//                 res.status(500).json({ message: 'Internal server error' });
//             } else {
//                 res.status(200).json(results);
//             }
//         });
//     } catch (error) {
//         console.error('Error in getAllQuizzes:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const getAllQuizzes = (req, res) => {
    try {
        const query = `
            SELECT q_id, quiz_type, q_year, q_unit, q_title, start_date, end_date, duration
            FROM quiz
            WHERE (end_date >= NOW() AND quiz_type = 'common') OR quiz_type = 'weekly'
        `;
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching quizzes:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                res.status(200).json(results);
            }
        });
    } catch (error) {
        console.error('Error in getAllQuizzes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};




// export const submitResponse = async (req, res) => {
//     const { quiz_id, responses } = req.body;
//     const userId = 5; // Hardcoded user ID

//     try {
//         let totalMarks = 0;

//         const responsePromises = responses.map(async (response) => {
//             const [questionRow] = await db.promise().query('SELECT correct_answer FROM question WHERE que_id = ?', [response.que_id]);
//             if (questionRow.length === 0) {
//                 throw new Error('Question not found');
//             }

//             const isCorrect = questionRow[0].correct_answer === parseInt(response.answer);
//             if (isCorrect) {
//                 totalMarks += 1;
//             }

//             await db.promise().query(
//                 'INSERT INTO quiz_responses (mark, quiz_id, que_id, id) VALUES (?, ?, ?, ?)',
//                 [isCorrect ? 1 : 0, quiz_id, response.que_id, userId]
//             );
//         });

//         await Promise.all(responsePromises);

//         res.status(201).json({ message: 'Responses submitted successfully', totalMarks });
//     } catch (error) {
//         console.error('Error submitting responses:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };




export const getQuiz = async (req, res) => {
    const { q_id } = req.params;
    const { user_id } = req.query;

    try {
       
        const checkQuery = 'SELECT COUNT(*) as count FROM quiz_responses WHERE quiz_id = ? AND id = ?';
        const [checkResults] = await db.promise().query(checkQuery, [q_id, user_id]);
        if (checkResults[0].count > 0) {
            return res.status(403).json({ message: 'You hav already taken this quiz' });
        }

       
        const quizQuery = 'SELECT duration FROM quiz WHERE q_id = ?';
        const [quizResults] = await db.promise().query(quizQuery, [q_id]);
        if (quizResults.length === 0) {
            return res.status(404).json({ message: 'Quiz not found' });
        }
        const duration = quizResults[0].duration;


        const questionQuery = 'SELECT que_id, q_id, q_text, answers, correct_answer FROM question WHERE q_id = ?';
        const [questionResults] = await db.promise().query(questionQuery, [q_id]);
        if (questionResults.length === 0) {
            return res.status(404).json({ message: 'No questions found for this quiz' });
        }

        
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const questions = shuffleArray(questionResults.map(q => ({
            que_id: q.que_id,
            q_id: q.q_id,
            q_text: q.q_text,
            answers: q.answers,
            correct_answer: q.correct_answer
        })));

        res.status(200).json({ questions, duration });
    } catch (error) {
        console.error('Error in getQuiz:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const submitResponse = async (req, res) => {
    const { quiz_id, responses, user_id } = req.body;

    try {
        let totalMarks = 0;

        const responsePromises = responses.map(async (response) => {
            const [questionRow] = await db.promise().query('SELECT correct_answer FROM question WHERE que_id = ?', [response.que_id]);
            if (questionRow.length === 0) {
                throw new Error('Question not found');
            }

            const isCorrect = questionRow[0].correct_answer === parseInt(response.answer);
            if (isCorrect) {
                totalMarks += 1;
            }

            await db.promise().query(
                'INSERT INTO quiz_responses (mark, quiz_id, que_id, id) VALUES (?, ?, ?, ?)',
                [isCorrect ? 1 : 0, quiz_id, response.que_id, user_id]
            );
        });

        await Promise.all(responsePromises);

        res.status(201).json({ message: 'Responses submitted successfully', totalMarks });
    } catch (error) {
        console.error('Error submitting responses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



// export const getQuizResults = (req, res) => {
//     try {
//         const quizId = req.params.quizId;
//         const query = `
//             SELECT users.id AS studentID, quiz_responses.mark AS mark, question.q_text AS question
//             FROM quiz_responses
//             INNER JOIN users ON quiz_responses.id = users.id
//             INNER JOIN question ON quiz_responses.que_id = question.que_id
//             WHERE quiz_responses.quiz_id = ?
//         `;
//         db.query(query, [quizId], (err, results) => {
//             if (err) {
//                 console.error('Error fetching quiz results:', err);
//                 res.status(500).json({ message: 'Internal server error' });
//             } else {
//                 const quizResults = results.map(result => ({
//                     studentName: result.studentID,
//                     mark: result.mark,
//                     question: result.question
//                 }));
//                 res.status(200).json(quizResults);
//             }
//         });
//     } catch (error) {
//         console.error('Error in getQuizResults:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// export const getQuizResults = (req, res) => {
//     try {
//         const quizId = req.params.quizId;
//         const query = `
//             SELECT users.id AS studentID, question.que_id AS questionID, quiz_responses.mark AS mark
//             FROM quiz_responses
//             INNER JOIN users ON quiz_responses.id = users.id
//             INNER JOIN question ON quiz_responses.que_id = question.que_id
//             WHERE quiz_responses.quiz_id = ?
//         `;
//         db.query(query, [quizId], (err, results) => {
//             if (err) {
//                 console.error('Error fetching quiz results:', err);
//                 res.status(500).json({ message: 'Internal server error' });
//             } else {
//                 const studentResults = {};

//                 results.forEach(result => {
//                     if (!studentResults[result.studentID]) {
//                         studentResults[result.studentID] = {
//                             studentID: result.studentID,
//                             totalMarks: 0,
//                             questions: []
//                         };
//                     }

//                     studentResults[result.studentID].totalMarks += result.mark;
//                     studentResults[result.studentID].questions.push(result.questionID);
//                 });

//                 const quizResults = Object.values(studentResults).map(studentResult => ({
//                     studentID: studentResult.studentID,
//                     totalMarks: studentResult.totalMarks,
//                     questions: studentResult.questions.map((_, index) => index + 1) // Map questions to 1, 2, 3, ...
//                 }));

//                 res.status(200).json(quizResults);
//             }
//         });
//     } catch (error) {
//         console.error('Error in getQuizResults:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// export const getQuizResults = async (req, res) => {
//     const { quizId } = req.params;

//     try {
//         // Fetch all the responses for the given quiz ID
//         const [responses] = await db.promise().query(
//             `SELECT qr.id as user_id, u.first_name, u.last_name, qr.que_id, qr.mark
//              FROM quiz_responses qr
//              JOIN users u ON qr.id = u.id
//              WHERE qr.quiz_id = ?`,
//             [quizId]
//         );

//         // Process responses to calculate total marks and organize by user
//         const results = {};
//         responses.forEach((response) => {
//             const { user_id, first_name, last_name, que_id, mark } = response;
//             if (!results[user_id]) {
//                 results[user_id] = {
//                     id: user_id,
//                     name: `${first_name} ${last_name}`,
//                     marks: {},
//                     total: 0,
//                 };
//             }
//             results[user_id].marks[que_id] = mark;
//             results[user_id].total += mark;
//         });

//         // Convert results object to array
//         const resultsArray = Object.values(results);

//         // Sort results by total marks to calculate ranks
//         resultsArray.sort((a, b) => b.total - a.total);
//         resultsArray.forEach((result, index) => {
//             result.rank = index + 1;
//         });

//         res.status(200).json(resultsArray);
//     } catch (error) {
//         console.error('Error fetching quiz results:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const getQuizResults = async (req, res) => {
    const { quizId } = req.params;

    try {
      
        const [responses] = await db.promise().query(
            `SELECT qr.id as user_id, u.first_name, u.last_name, qr.que_id, qr.mark
             FROM quiz_responses qr
             JOIN users u ON qr.id = u.id
             WHERE qr.quiz_id = ?`,
            [quizId]
        );

      
        const results = {};
        responses.forEach((response) => {
            const { user_id, first_name, last_name, que_id, mark } = response;
            if (!results[user_id]) {
                results[user_id] = {
                    id: user_id,
                    name: `${first_name} ${last_name}`,
                    marks: {},
                    total: 0,
                };
            }
            results[user_id].marks[que_id] = mark;
            results[user_id].total += mark;
        });

        // Convert results object to array
        const resultsArray = Object.values(results);

        // Sort results by total marks to calculate ranks
        resultsArray.sort((a, b) => b.total - a.total);
        resultsArray.forEach((result, index) => {
            result.rank = index + 1;
        });

        res.status(200).json(resultsArray);
    } catch (error) {
        console.error('Error fetching quiz results:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getQuizzes = (req, res) => {
    try {
        const query = `
            SELECT q_id, q_unit, q_year, quiz_type
            FROM quiz
        `;
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching quizzes:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                const quizzes = results.map(quiz => ({
                    id: quiz.q_id,
                    unit: quiz.q_unit,
                    year: quiz.q_year,
                    quiz_type: quiz.quiz_type
                }));
                res.status(200).json(quizzes);
            }
        });
    } catch (error) {
        console.error('Error in getQuizzes:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// export const getQuizResult = (req, res) => {
//     try {
//         const query = `
//             SELECT 
//                 WEEK(q.start_date) as week_number,
//                 AVG(user_total_marks) as average_marks
//             FROM (
//                 SELECT 
//                     q.start_date,
//                     qr.id,
//                     q.q_id,
//                     SUM(qr.mark) as user_total_marks
//                 FROM 
//                     quiz q
//                 JOIN 
//                     quiz_responses qr ON q.q_id = qr.quiz_id
//                 WHERE 
//                     q.quiz_type = 'weekly'
//                 GROUP BY 
//                     qr.id, q.q_id
//             ) as user_quiz_totals
//             GROUP BY 
//                 WEEK(start_date)
//             ORDER BY 
//                 WEEK(start_date);
//         `;
//         db.query(query, (err, results) => {
//             if (err) {
//                 console.error('Error fetching quiz results:', err);
//                 res.status(500).json({ message: 'Internal server error' });
//             } else {
//                 const quizResults = results.map(result => ({
//                     week_number: result.week_number,
//                     average_marks: result.average_marks
//                 }));
//                 res.status(200).json(quizResults);
//             }
//         });
//     } catch (error) {
//         console.error('Error in getQuizResults:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// export const getQuizResult = (req, res) => {
//     try {
//         const query = `
//             SELECT 
//                 WEEK(DATE(user_quiz_totals.start_date)) as week_number,
//                 AVG(user_quiz_totals.user_total_marks) as average_marks
//             FROM (
//                 SELECT 
//                     DATE(q.start_date) as start_date,
//                     SUM(qr.mark) as user_total_marks
//                 FROM 
//                     quiz q
//                 JOIN 
//                     quiz_responses qr ON q.q_id = qr.quiz_id
//                 WHERE 
//                     q.quiz_type = 'weekly'
//                 GROUP BY 
//                     qr.id, q.q_id, DATE(q.start_date)
//             ) as user_quiz_totals
//             GROUP BY 
//                 WEEK(DATE(user_quiz_totals.start_date))
//             ORDER BY 
//                 WEEK(DATE(user_quiz_totals.start_date));
//         `;
//         db.query(query, (err, results) => {
//             if (err) {
//                 console.error('Error fetching quiz results:', err);
//                 res.status(500).json({ message: 'Internal server error' });
//             } else {
//                 const quizResults = results.map(result => ({
//                     week_number: result.week_number,
//                     average_marks: result.average_marks
//                 }));
//                 res.status(200).json(quizResults);
//             }
//         });
//     } catch (error) {
//         console.error('Error in getQuizResults:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

export const getQuizResult = (req, res) => {
    try {
        const query = `
            SELECT 
                DATE(user_quiz_totals.start_date) as quiz_date,
                user_quiz_totals.q_unit,
                WEEK(DATE(user_quiz_totals.start_date)) as week_number,
                AVG(user_quiz_totals.user_total_marks) as average_marks
            FROM (
                SELECT 
                    q.start_date,
                    q.q_unit,
                    SUM(qr.mark) as user_total_marks
                FROM 
                    quiz q
                JOIN 
                    quiz_responses qr ON q.q_id = qr.quiz_id
                WHERE 
                    q.quiz_type = 'weekly'
                GROUP BY 
                    q.start_date, q.q_unit, qr.id  -- Adding qr.user_id to the GROUP BY
            ) as user_quiz_totals
            GROUP BY 
                quiz_date, q_unit
            ORDER BY 
                quiz_date;
        `;
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching quiz results:', err);
                res.status(500).json({ message: 'Internal server error' });
            } else {
                const quizResults = results.map(result => ({
                    quiz_date: result.quiz_date,
                    quiz_unit: result.q_unit,
                    week_number: result.week_number,
                    average_marks: result.average_marks
                }));
                res.status(200).json(quizResults);
            }
        });
    } catch (error) {
        console.error('Error in getQuizResults:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getUserQuizSummaries = async (req, res) => {
    try {
        // Query to fetch user quiz results
        const [responses] = await db.promise().query(
            `SELECT qr.id as user_id, u.first_name, u.last_name, qr.quiz_id, qr.mark
             FROM quiz_responses qr
             JOIN users u ON qr.id = u.id`
        );

        // Aggregate results by user
        const userResults = {};
        responses.forEach((response) => {
            const { user_id, first_name, last_name, quiz_id, mark } = response;
            if (!userResults[user_id]) {
                userResults[user_id] = {
                    id: user_id,
                    name: `${first_name} ${last_name}`,
                    total: 0,
                };
            }
            userResults[user_id].total += mark;
        });

        // Convert user results object to array
        const resultsArray = Object.values(userResults);

        // Sort results by total marks to calculate ranks
        resultsArray.sort((a, b) => b.total - a.total);
        resultsArray.forEach((result, index) => {
            result.rank = index + 1;
        });

        res.status(200).json(resultsArray);
    } catch (error) {
        console.error('Error fetching user quiz summaries:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};








// export const getQuizResultsPDF = (req, res) => {
//     const quizId = req.params.quizId;
  
//     const query = `
//       SELECT u.first_name, u.last_name, u.institute, SUM(qr.mark) as total_marks
//       FROM quiz_responses qr
//       JOIN users u ON qr.id = u.id
//       WHERE qr.quiz_id = ?
//       GROUP BY u.id, u.first_name, u.last_name, u.institute
//       ORDER BY total_marks DESC
//     `;
  
//     db.query(query, [quizId], (err, results) => {
//       if (err) {
//         console.error('Error fetching quiz results:', err);
//         res.status(500).json({ error: 'An error occurred while fetching quiz results' });
//       } else {
//         // Calculate rank based on total marks
//         results.forEach((result, index) => {
//           result.rank = index + 1; // Rank starts from 1
//         });
  
//         const doc = new PDFDocument();
//         const filePath = `./quiz_results_${quizId}.pdf`;
  
//         // Create a write stream
//         const writeStream = fs.createWriteStream(filePath);
  
//         // Pipe the PDF into the write stream
//         doc.pipe(writeStream);
  
//         // Add content to the PDF
//         doc.fontSize(12).text(`Quiz Results for Quiz ID: ${quizId}`, { align: 'center' });
//         doc.moveDown();
  
//         doc.fontSize(10).text('Rank', { continued: true });
//         doc.text('Name', { continued: true });
//         doc.text('Institute', { continued: true, align: 'center' });
//         doc.text('Total Marks', { align: 'right' });
//         doc.moveDown();
  
//         results.forEach(result => {
//           doc.text(result.rank.toString(), { continued: true });
//           const fullName = `${result.first_name} ${result.last_name}`;
//           doc.text(fullName, { continued: true });
//           doc.text(result.institute, { continued: true, align: 'center' });
//           doc.text(result.total_marks.toString(), { align: 'right' });
//           doc.moveDown();
//         });
  
//         // Finalize the PDF and end the stream
//         doc.end();
  
//         // When the PDF is finished writing, send it as a response
//         writeStream.on('finish', () => {
//           res.download(filePath, `quiz_results_${quizId}.pdf`, (err) => {
//             if (err) {
//               console.error('Error downloading the file:', err);
//               res.status(500).json({ error: 'An error occurred while downloading the PDF' });
//             } else {
//               console.log('PDF generated and downloaded successfully.');
//             }
//           });
//         });
//       }
//     });
//   };
// export const getQuizResultsPDF = (req, res) => {
//     const quizId = req.params.quizId;

//     const query = `
//       SELECT u.first_name, u.last_name, u.institute, SUM(qr.mark) as total_marks
//       FROM quiz_responses qr
//       JOIN users u ON qr.id = u.id
//       WHERE qr.quiz_id = ?
//       GROUP BY u.id, u.first_name, u.last_name, u.institute
//       ORDER BY total_marks DESC
//     `;

//     db.query(query, [quizId], (err, results) => {
//         if (err) {
//             console.error('Error fetching quiz results:', err);
//             res.status(500).json({ error: 'An error occurred while fetching quiz results' });
//         } else {
//             // Calculate rank based on total marks
//             results.forEach((result, index) => {
//                 result.rank = index + 1; // Rank starts from 1
//             });

//             const doc = new PDFDocument();
//             const filePath = `./quiz_results_${quizId}.pdf`;

//             // Create a write stream
//             const writeStream = fs.createWriteStream(filePath);

//             // Pipe the PDF into the write stream
//             doc.pipe(writeStream);

//             // Add content to the PDF
//             doc.fontSize(20).text(`Quiz Results for Quiz ID: ${quizId}`, { align: 'center', margin: 20 });

//             // Add table headers
//             doc.font('Helvetica-Bold');
//             const tableHeaders = ['Rank', 'Name', 'Institute', 'Total Marks'];
//             const rowHeight = 30;
//             const colWidths = [50, 200, 200, 100];
//             const startX = 50;
//             let startY = doc.y + 50;

//             doc.table({
//                 headers: tableHeaders,
//                 rows: results.map((result) => {
//                     return [
//                         result.rank.toString(), // Rank
//                         `${result.first_name} ${result.last_name}`, // Name
//                         result.institute, // Institute
//                         result.total_marks.toString(), // Total Marks
//                     ];
//                 }),
//                 startY: startY,
//                 startX: startX,
//                 columnWidths: colWidths,
//                 bodyStyles: { valign: 'top' },
//                 headerStyles: { fillColor: '#3498db', textColor: '#ffffff', align: 'center' },
//                 alternateRowStyles: { fillColor: '#f2f2f2' },
//                 margin: { top: 30, bottom: 30 },
//             });

//             // Finalize the PDF and end the stream
//             doc.end();

//             // When the PDF is finished writing, send it as a response
//             writeStream.on('finish', () => {
//                 res.download(filePath, `quiz_results_${quizId}.pdf`, (err) => {
//                     if (err) {
//                         console.error('Error downloading the file:', err);
//                         res.status(500).json({ error: 'An error occurred while downloading the PDF' });
//                     } else {
//                         console.log('PDF generated and downloaded successfully.');
//                     }
//                 });
//             });
//         }
//     });
// };
export const getQuizResultsPDF = (req, res) => {
    const quizId = req.params.quizId;

    const query = `
      SELECT u.first_name, u.last_name, u.institute, SUM(qr.mark) as total_marks
      FROM quiz_responses qr
      JOIN users u ON qr.id = u.id
      WHERE qr.quiz_id = ?
      GROUP BY u.id, u.first_name, u.last_name, u.institute
      ORDER BY total_marks DESC
    `;

    db.query(query, [quizId], (err, results) => {
        if (err) {
            console.error('Error fetching quiz results:', err);
            res.status(500).json({ error: 'An error occurred while fetching quiz results' });
        } else {
            // Calculate rank based on total marks
            results.forEach((result, index) => {
                result.rank = index + 1; // Rank starts from 1
            });

            const doc = new PDFDocument();
            const filePath = `./quiz_results_${quizId}.pdf`;

            // Create a write stream
            const writeStream = fs.createWriteStream(filePath);

            // Pipe the PDF into the write stream
            doc.pipe(writeStream);

            // Add content to the PDF
            doc.fontSize(12).text(`Quiz Results for Quiz ID: ${quizId} `, { align: 'center' });
            doc.moveDown();

            // Add table headers and rows
            doc.font('Helvetica-Bold');
            const tableHeaders = ['Rank', 'Name', 'Institute', 'Total Marks'];
            const columnWidth = 150; // Adjust based on your requirement
            const startY = 100; // Adjust based on where you want to start drawing the table
            let currentY = startY;

            tableHeaders.forEach((header, index) => {
                doc.text(header, index * columnWidth + 3, currentY, { width: columnWidth, align: 'center' });
            });

            currentY += 20; // Adjust spacing between header and rows

            doc.font('Helvetica');
            results.forEach((result, rowIndex) => {
                const rowData = [
                    result.rank.toString(),
                    `${result.first_name} ${result.last_name}`,
                    result.institute,
                    result.total_marks.toString()
                ];

                rowData.forEach((data, colIndex) => {
                    doc.text(data, colIndex * columnWidth + 3, currentY + (rowIndex + 1) * 20, { width: columnWidth, align: 'center' });
                });
            });

            // Finalize the PDF and end the stream
            doc.end();

            // When the PDF is finished writing, send it as a response
            writeStream.on('finish', () => {
                res.download(filePath, `quiz_results_${quizId}.pdf`, (err) => {
                    if (err) {
                        console.error('Error downloading the file:', err);
                        res.status(500).json({ error: 'An error occurred while downloading the PDF' });
                    } else {
                        console.log('PDF generated and downloaded successfully.');
                    }
                });
            });
        }
    });
};
