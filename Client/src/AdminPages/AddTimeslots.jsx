import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminheader from "../Components/Adminheader";

const AddTimeslots = () => {
  const [practicalId, setPracticalId] = useState('');
  const [timeSlots, setTimeSlots] = useState(['']);
  const [maxLimit, setMaxLimit] = useState('');
  const [practicals, setPracticals] = useState([]);

  useEffect(() => {
    fetchPracticals();
  }, []);

  const handleTimeSlotChange = (index, event) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index] = event.target.value;
    setTimeSlots(newTimeSlots);
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, '']);
  };

  const fetchPracticals = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/practicals/displayPractical');
      setPracticals(response.data);
    } catch (error) {
      console.error('Error fetching practicals:', error);
    }
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/practicals/addTimeSlots', {
        practical_id: practicalId,
        time_slots: timeSlots,
        max_limit: maxLimit,
      });
      alert('Time slots added successfully!');
      setPracticalId('');
      setTimeSlots(['']);
      setMaxLimit('');
    } catch (error) {
      console.error('Error adding time slots:', error);
      alert('Error adding time slots');
    }
  };

  return (
    <div>
    <Adminheader pageName="Add Practical Time-Slots" />
    <div className="flex flex-col items-center justify-center  bg-primary">
     

      <div className="bg-white rounded shadow-lg p-6 mt-5">
        <table className="w-full">
          <thead>
            <tr>
            <th className="py-2">Practical ID</th>
              <th className="py-2">Title</th>
              <th className="py-2">Year</th>
              <th className="py-2">Date</th>
              <th className="py-2">Duration</th>
              <th className="py-2">Institute</th>
              <th className="py-2">Description</th>
          
            </tr>
          </thead>
          <tbody>
            {practicals.map(practical => (
              <tr key={practical.practical_id} className="border-b">
                  <td className="py-2 px-4">{practical.practical_id}</td>
                <td className="py-2 px-4">{practical.title}</td>
                <td className="py-2 px-4">{practical.year}</td>
                <td className="py-2 px-4">{practical.date}</td>
                <td className="py-2 px-4">{practical.duration}</td>
                <td className="py-2 px-4">{practical.institute}</td>
                <td className="py-2 px-4">{practical.description}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-700 bg-white rounded shadow-lg p-10 mt-6 ">
        <h2 className="text-2xl font-bold mb-6">Add Time Slots</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Practical ID</label>
            <input
              type="text"
              value={practicalId}
              onChange={(e) => setPracticalId(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          {timeSlots.map((timeSlot, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700">Time Slot {index + 1}</label>
              <input
                type="text"
                value={timeSlot}
                onChange={(e) => handleTimeSlotChange(index, e)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          ))}
          <button type="button" onClick={addTimeSlot} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
            Add Another Time Slot
          </button>
          <div className="mb-4">
            <label className="block text-gray-700">Max Limit</label>
            <input
              type="number"
              value={maxLimit}
              onChange={(e) => setMaxLimit(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default AddTimeslots;
