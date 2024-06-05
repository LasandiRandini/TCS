

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

export const getQuiz = async (req, res) => {
    const { q_id } = req.params;
    const { user_id } = req.query; // Get user ID from query parameters

    try {
        // Check if the user has already taken the quiz
        const checkQuery = 'SELECT COUNT(*) as count FROM quiz_responses WHERE quiz_id = ? AND id = ?';
        const [checkResults] = await db.promise().query(checkQuery, [q_id, user_id]);
        if (checkResults[0].count > 0) {
            return res.status(403).json({ message: 'You have already taken this quiz' });
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

        const questions = questionResults.map(q => ({
            que_id: q.que_id,
            q_id: q.q_id,
            q_text: q.q_text,
            answers: q.answers,
            correct_answer: q.correct_answer
        }));

        res.status(200).json({ questions, duration });
    } catch (error) {
        console.error('Error in getQuiz:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
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

