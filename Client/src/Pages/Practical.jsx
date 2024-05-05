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
    
    <div className="flex">
      
      <div>
        <div className='w-full'>
        <h1 className="text-2xl font-bold mb-4 mt-20 px-5">Practical Details</h1>
        {error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div>
            {practicals.map((practical) => (
              <div key={practical.practical_id} className="mb-4">
                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-8 mb-4">
                  <p><strong>Title:</strong> {practical.title}</p>
                  <p><strong>Year:</strong> {practical.year}</p>
                  <p><strong>Date:</strong> {practical.date}</p>
                  <p><strong>Duration:</strong> {practical.duration}</p>
                  <p><strong>Institute:</strong> {practical.institute}</p>
                  <p><strong>Description:</strong> {practical.description}</p>
                </div>
              </div>
              
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Practical;
