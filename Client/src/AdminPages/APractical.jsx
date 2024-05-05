import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';

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
      navigate('/AVideo'); 
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <>
    <div className='flex'>
      <Dashboard />  

      <div className="mx-auto w-full px-4 py-8  rounded-lg shadow-md">
   
      <div className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4">
        <h1 className="text-2xl mb-4 text-center">Add Practical</h1>
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">Year:</label>
            <input
              type="text"
              id="year"
              name="year"
              value={inputs.year}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Year"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={inputs.duration}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Duration"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="institute" className="block text-gray-700 text-sm font-bold mb-2">Institute:</label>
            <input
              type="text"
              id="institute"
              name="institute"
              value={inputs.institute}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Institute"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Description"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Practical
            </button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </form>
      </div>
    </div>
    </div>
    
    </>
 
  );
};

export default APractical;
