

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Adminheader from "../Components/Adminheader";

const AddTimeslots = () => {
  const { practicalId } = useParams(); // Ensure this captures the practicalId correctly
  const [timeSlots, setTimeSlots] = useState(['']);
  const [maxLimit, setMaxLimit] = useState('');

  useEffect(() => {
    console.log('Practical ID from params:', practicalId); // Debugging log
  }, [practicalId]);

  const handleTimeSlotChange = (index, event) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index] = event.target.value;
    setTimeSlots(newTimeSlots);
  };

  const addTimeSlot = () => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to add another time slot?",
      icon: "info",
      buttons: ["Cancel", "Yes, add it"],
      dangerMode: false,
    })
    .then((willAdd) => {
      if (willAdd) {
        setTimeSlots([...timeSlots, '']);
        swal("Time slot added!", {
          icon: "success",
        });
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/practicals/addTimeSlots', {
        practical_id: practicalId,
        time_slots: timeSlots,
        max_limit: maxLimit,
      });
      swal('Success', 'Time slots added successfully!', 'success');
      setTimeSlots(['']);
      setMaxLimit('');
    } catch (error) {
      console.error('Error adding time slots:', error);
      swal('Error', 'Failed to add time slots', 'error');
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Add Practical Time-Slots" />
      <div className="flex flex-col items-center justify-center bg-primary">
        <div className="w-700 bg-white rounded shadow-lg p-10 mt-6">
          <h2 className="text-2xl font-bold mb-6">Add Time Slots</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Practical ID</label>
              <input
                type="text"
                value={practicalId} // Ensure practicalId is correctly displayed here
                readOnly
                className="w-full px-3 py-2 border rounded"
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
