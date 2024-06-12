// src/AdminPages/UpdatePracticalModal.jsx
import  { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import PropTypes from 'prop-types';



const UpdatePracticalModal = ({ practical, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    date: '',
    duration: '',
    institute: '',
    description: '',
  });

  UpdatePracticalModal.propTypes = {
    practical: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };
  useEffect(() => {
    if (practical) {
      setFormData(practical);
    }
  }, [practical]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8800/api/practicals/updatePractical/${practical.practical_id}`, formData);
      onUpdate(response.data);
      swal('Success', 'Practical updated successfully', 'success');
      onClose();
    } catch (error) {
      console.error('Error updating practical:', error);
      swal('Error', 'Failed to update practical', 'error');
    }
  };

  if (!practical) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center  items-center">
      <div className="bg-white p-4 rounded w-1/3 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Update Practical</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Year</label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Institute</label>
            <input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePracticalModal;
