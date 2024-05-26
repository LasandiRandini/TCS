



export const displayQuizzes = async (req, res) => {
  try {
    const query = 'SELECT unit_id,unit_name,v_year, unit_description, price FROM videounit';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching practical data:', err);
        res.status(500).json({ error: 'An error occurred while fetching practical data' });
      } else {
        console.log(results);
        res.status(200).json(results);
      }
    });
  } catch (err) {
    console.error('Error in getpractical:', err);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};


export const deleteQuiz = async (req, res) => {
  try {
    const sql = 'DELETE FROM videounit WHERE unit_id=?';
    const unit_id = req.params.unit_id;

    db.query(sql, [unit_id], (err, data) => {
      if (err) {
        console.error('Error deleting video unit:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (data.affectedRows === 0) {
        return res.status(404).json({ error: 'Video unit not found' });
      }

      return res.status(200).json({ message: 'Video unit deleted successfully' });
    });
  } catch (error) {
    console.error('Error deleting video unit:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }

};
export const updateQuiz = async (req, res) => {
  const { v_year, unit_name, unit_description, price } = req.body;
  const unit_id = req.params.unit_id;

  try {
    const sql = 'UPDATE videounit SET v_year=?, unit_name=?, unit_description=?, price=? WHERE unit_id=?';
    const values = [v_year, unit_name, unit_description, price, unit_id];
    await db.promise().query(sql, values);

    res.json({ message: 'Unit updated successfully' });
  } catch (error) {
    console.error('Error updating unit:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};