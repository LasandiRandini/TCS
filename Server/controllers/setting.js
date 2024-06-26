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

export const getAlYears = async (req, res) => {
    try {
        const query = 'SELECT al_year FROM al_years';
        const [results] = await db.promise().query(query);
        res.status(200).json(results);
    } catch (error) {
        console.error('Error in getAlYears:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const updateAlYear = async (req, res) => {
    const { old_al_year } = req.params;
    const { new_al_year } = req.body;

    if (!new_al_year) {
        return res.status(400).json({ message: 'New AL Year is required' });
    }

    try {
        const query = 'UPDATE al_years SET al_year = ? WHERE al_year = ?';
        await db.promise().query(query, [new_al_year, old_al_year]);
        res.status(200).json({ message: 'AL Year updated successfully' });
    } catch (error) {
        console.error('Error in updateAlYear:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const deleteAlYear = async (req, res) => {
    const { al_year } = req.params;

    try {
        const query = 'DELETE FROM al_years WHERE al_year = ?';
        await db.promise().query(query, [al_year]);
        res.status(200).json({ message: 'AL Year deleted successfully' });
    } catch (error) {
        console.error('Error in deleteAlYear:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const addInstitute = async (req, res) => {
    const { institute } = req.body;

    if (!institute) {
        return res.status(400).json({ message: 'Institute is required' });
    }

    try {
        const query = 'INSERT INTO institutes (institute) VALUES (?)';
        await db.promise().query(query, [institute]);
        res.status(201).json({ message: 'Institute added successfully' });
    } catch (error) {
        console.error('Error in addInstitute:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const getInstitutes = async (req, res) => {
    try {
        const query = 'SELECT institute FROM institutes';
        const [results] = await db.promise().query(query);
        res.status(200).json(results);
    } catch (error) {
        console.error('Error in getInstitutes:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const updateInstitute = async (req, res) => {
    const { old_institute } = req.params;
    const { new_institute } = req.body;

    if (!new_institute) {
        return res.status(400).json({ message: 'New Institute is required' });
    }

    try {
        const query = 'UPDATE institutes SET institute = ? WHERE institute = ?';
        await db.promise().query(query, [new_institute, old_institute]);
        res.status(200).json({ message: 'Institute updated successfully' });
    } catch (error) {
        console.error('Error in updateInstitute:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const deleteInstitute = async (req, res) => {
    const { institute } = req.params;

    try {
        const query = 'DELETE FROM institutes WHERE institute = ?';
        await db.promise().query(query, [institute]);
        res.status(200).json({ message: 'Institute deleted successfully' });
    } catch (error) {
        console.error('Error in deleteInstitute:', error);
        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};