import { db } from '../db.js';

// Create Quiz API
export const createQuiz = async (req, res) => {
  const { q_title, q_unit, q_year, start_date, end_date, duration } = req.body;

  try {
    const [result] = await db.promise().query(
      'INSERT INTO quiz (q_title, q_unit, q_year, start_date, end_date, duration) VALUES (?, ?, ?, ?, ?, ?)',
      [q_title, q_unit, q_year, start_date, end_date, duration]
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


export const  getQuiz= async (req, res) => {
    const { quizId } = req.params;

    try {
       
        const [quizRows] = await db.promise().query('SELECT * FROM quiz WHERE q_id = ?', [quizId]);
        if (quizRows.length === 0) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        const quiz = quizRows[0];

      
        const [questionRows] = await db.promise().query('SELECT * FROM question WHERE q_id = ?', [quizId]);

        const questions = questionRows.map(q => ({
            id: q.que_id,
            question: q.q_text,
            answers: [q.a1, q.a2, q.a3, q.a4, q.a5],
            correctAnswer: q.correct_answer
        }));

        const quizDetails = {
            title: quiz.q_title,
            unitName: quiz.q_unit,
            dueDate: quiz.end_date,
            questions: questions
        };

        res.json(quizDetails);
    } catch (error) {
        console.error('Error fetching quiz details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const submitResponse = async (req, res) => {
    const { quiz_id, responses } = req.body;
    const userId = req.user.id; 

    try {
        let totalMarks = 0;

        const responsePromises = responses.map(async (response) => {
            const [questionRow] = await db.promise().query('SELECT correct_answer FROM question WHERE que_id = ?', [response.questionId]);
            if (questionRow.length === 0) {
                throw new Error('Question not found');
            }

            const isCorrect = questionRow[0].correct_answer === parseInt(response.answer);
            if (isCorrect) {
                totalMarks += 1;
            }

            await db.promise().query(
                'INSERT INTO quiz_responses (mark, quiz_id, que_id, id) VALUES (?, ?, ?, ?)',
                [isCorrect ? 1 : 0, quiz_id, response.questionId, userId]
            );
        });

        await Promise.all(responsePromises);

        res.status(201).json({ message: 'Responses submitted successfully', totalMarks });
    } catch (error) {
        console.error('Error submitting responses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
