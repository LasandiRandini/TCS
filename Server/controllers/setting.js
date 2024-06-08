import { db } from '../db.js';

export const addAlYear = async (req, res) => {
    const { al_year } = req.body;

    if (!al_year) {
        return res.status(400).json({ message: 'AL Year is required' });
    }

    try {
        const query = 'INSERT INTO al_years (al_year) VALUES (?)';
        await db.promise().query(query, [al_year]);
        res.status(201).json({ message: 'AL Year added successfully' });
    } catch (error) {
        console.error('Error in addAlYear:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};
