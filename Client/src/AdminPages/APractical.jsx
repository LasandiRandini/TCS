import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Adminheader from '../Components/Adminheader';

const APractical = () => {
  const [inputs, setInputs] = useState({
    year: '',
    title: '',
    date: '',
    duration: '',
    institute: '',
    description: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/practicals/practical', inputs);
      navigate('/AddTimeslots'); 
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
    <Adminheader pageName="Add a Practical" />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Add Practical</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium mb-1">Year:</label>
            <input
              type="text"
              id="year"
              name="year"
              value={inputs.year}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Year"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-medium mb-1">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Title"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-medium mb-1">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="duration" className="text-sm font-medium mb-1">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={inputs.duration}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Duration"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="institute" className="text-sm font-medium mb-1">Institute:</label>
            <input
              type="text"
              id="institute"
              name="institute"
              value={inputs.institute}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Institute"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-medium mb-1">Description:</label>
            <textarea
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Description"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Practical
          </button>
          {error && <p className="text-red-500 text-xs italic mt-4 text-center">{error}</p>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default APractical;
