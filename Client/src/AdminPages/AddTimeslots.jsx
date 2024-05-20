import { useState } from 'react';
import axios from 'axios';

const AddTimeslots = () => {
  const [practicalId, setPracticalId] = useState('');
  const [timeSlots, setTimeSlots] = useState(['']);
  const [maxLimit, setMaxLimit] = useState('');

  const handleTimeSlotChange = (index, event) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index] = event.target.value;
    setTimeSlots(newTimeSlots);
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, '']);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/practicals/addTimeSlots', {
        practical_id: practicalId,
        time_slots: timeSlots,
        max_limit: maxLimit
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
    <div className="container mx-auto px-4 py-8">
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
  );
};

export default AddTimeslots;
