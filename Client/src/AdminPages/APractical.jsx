import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
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

  const [years, setYears] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [practical_id, setPracticalId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/auth/getAlYears');
        setYears(response.data);
      } catch (err) {
        console.error('Error fetching years:', err);
        setError('Failed to fetch years. Please try again later.');
      }
    };

    const fetchInstitutes = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/settings/institutes');
        setInstitutes(response.data);
      } catch (error) {
        console.error('Failed to fetch institutes:', error);
      }
    };

    fetchYears();
    fetchInstitutes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/practicals/practical', inputs);
    
      setPracticalId(response.data.practicalId);
      navigate(`/AddTimeslots/${response.data.practicalId}`);
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
              <select
                id="year"
                name="year"
                value={inputs.year}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year.id} value={year.al_year}>
                    {year.al_year}
                  </option>
                ))}
              </select>
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
                placeholder="1 hour / 45 minutes"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="institute" className="text-sm font-medium mb-1">Institute:</label>
              <select
                id="institute"
                name="institute"
                value={inputs.institute}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select the Institute</option>
                {institutes.map((institute) => (
                  <option key={institute.id} value={institute.institute}>
                    {institute.institute}
                  </option>
                ))}
              </select>
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
              className="w-full py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Practical
            </button>
            {practical_id && (
              <Link to={`/AddTimeslots/${practical_id}`} className="bg-yellow-500 text-white font-bold py-1 px-2 rounded ml-2">
                Go to Timeslots
              </Link>
            )}
            {error && <p className="text-red-500 text-xs italic mt-4 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default APractical;
