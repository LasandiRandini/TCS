import  { useState } from 'react';

const APractical = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');
 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const handleInstituteChange = (event) => {
    setSelectedInstitute(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h1 className="text-2xl font-bold mb-4">Add Practical</h1>
      <div className="mb-8">
        {/* Calendar Component */}
        {/* Implement your calendar component here */}
      </div>
      <div className="mb-8">
        {/* Practical Details */}
        <h2 className="text-xl font-semibold mb-2">Practical Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => handleDateChange(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time:</label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="duration" className="block text-gray-700 font-semibold mb-2">Duration:</label>
            <input
              type="text"
              id="duration"
              value={selectedDuration}
              onChange={handleDurationChange}
              placeholder="e.g., 2 hours"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="institute" className="block text-gray-700 font-semibold mb-2">Institute:</label>
            <input
              type="text"
              id="institute"
              value={selectedInstitute}
              onChange={handleInstituteChange}
              placeholder="Enter institute name"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Practical Details
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default APractical;
