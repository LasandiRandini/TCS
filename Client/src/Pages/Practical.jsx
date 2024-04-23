// components/Practical.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import PNav from '../Components/PNav'; 

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
    <>
    <PNav /> {/* Assuming PNav is your navigation component */}
    <div>
      <h1 className="text-2xl font-bold mb-4">Practical Details</h1>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div>
          {practicals.map((practical) => (
            <div key={practical._id} className="mb-4"> {/* Using _id as the key */}
              <h2 className="text-lg font-semibold">{practical.title}</h2>
              <p><strong>Year:</strong> {practical.year}</p>
              <p><strong>Date:</strong> {practical.date}</p>
              <p><strong>Duration:</strong> {practical.duration}</p>
              <p><strong>Institute:</strong> {practical.institute}</p>
              <p><strong>Description:</strong> {practical.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Practical;
