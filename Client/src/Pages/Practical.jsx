import { useState, useEffect } from 'react';
import axios from 'axios';

const Practical = () => {
  const [practicals, setPracticals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPracticals = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/practicals/getpractical');
        setPracticals(response.data);
      } catch (err) {
        setError(err.response.data.error);
      }
    };

    fetchPracticals();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Practical Details</h1>
        {error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicals.map((practical) => (
              <div key={practical.practical_id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-2">{practical.title}</h2>
                <p className="text-gray-700"><strong>Year:</strong> {practical.year}</p>
                <p className="text-gray-700"><strong>Date:</strong> {practical.date}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {practical.duration}</p>
                <p className="text-gray-700"><strong>Institute:</strong> {practical.institute}</p>
                <p className="text-gray-700 mb-4"><strong>Description:</strong> {practical.description}</p>
               
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Practical;
