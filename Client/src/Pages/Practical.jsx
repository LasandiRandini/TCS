import { useState, useEffect } from 'react';
import axios from 'axios';

const Practical = () => {
  const [practicals, setPracticals] = useState([]);
  const [timeSlots, setTimeSlots] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});
  const [error, setError] = useState(null);

  
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user);

  useEffect(() => {
    const fetchPracticals = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/practicals/getpractical');
        console.log(response.data)

        setPracticals((response.data).filter(practical => practical.year == user.al_year));
      } catch (err) {
        setError(err.response ? err.response.data.error : 'Network Error');
        console.error('Error fetching practicals:', err.message);
      }
    };

    fetchPracticals();
  });

  const fetchTimeSlots = async (practical_id) => {
    if (!practical_id) {
      console.error('Practical ID is undefined');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8800/api/practicals/getTimeSlots/${practical_id}`);
      console.log('Fetched time slots:', response.data); 
      if (Array.isArray(response.data)) {
        setTimeSlots((prev) => ({ ...prev, [practical_id]: response.data }));
      } else {
        setError('Invalid response format');
        console.error('Expected an array but got:', response.data);
      }
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Network Error');
      console.error('Error fetching time slots:', err.message);
    }
  };

  const handleVote = async (practical_id, slot_id) => {
    try {
      await axios.post('http://localhost:8800/api/practicals/vote', { student_id:user.id, slot_id });
      setError(null);
      fetchTimeSlots(practical_id);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Network Error');
      console.error('Error voting for time slot:', err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Practical Details</h1>
        {error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {practicals.map((practical, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-2">{practical.title}</h2>
                <p className="text-gray-700"><strong>Year:</strong> {practical.year}</p>
                <p className="text-gray-700"><strong>Date:</strong> {practical.date}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {practical.duration}</p>
                <p className="text-gray-700"><strong>Institute:</strong> {practical.institute}</p>
                <p className="text-gray-700 mb-4"><strong>Description:</strong> {practical.description}</p>
               
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                  onClick={() => {
                    console.log('Fetching time slots for practical_id:', practical.practical_id);
                    fetchTimeSlots(practical.practical_id);
                  }}
                >
                  View Time Slots
                </button>

                {timeSlots[practical.practical_id] && Array.isArray(timeSlots[practical.practical_id]) && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
                    <ul>
                      {timeSlots[practical.practical_id].map(slot => (
                        <li key={slot.slot_id} className="flex items-center justify-between">
                          <span>{slot.time_slots} - {slot.votes_count}/{slot.max_limit} votes</span>
                          <input
                            type="radio"
                            name={`timeSlots-${practical.practical_id}`}
                            value={slot.slot_id}
                            onChange={() => setSelectedSlot((prev) => ({ ...prev, [practical.practical_id]: slot.slot_id }))}
                          />
                        </li>
                      ))}
                    </ul>

                    <button
                      className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
                      onClick={() => handleVote(practical.practical_id, selectedSlot[practical.practical_id])}
                      disabled={!selectedSlot[practical.practical_id]}
                    >
                      Vote
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Practical;
