import  { useState } from 'react';
import Dashboard from '../Components/Dashboard'

const APractical = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
 
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');
 

  const handleYearChange = (date) => {
    setSelectedYear(date);
  };

  const handleTitleChange = (date) => {
    setSelectedTitle(date);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
    <>
    <div className='flex'>
    <Dashboard />  

    <div className="mx-auto  w-full px-4 py-8 bg-white rounded-lg shadow-md">
         
    <h1 className="text-2xl font-bold mb-4">Add Practical</h1>
{/* Practical Details */}
<h2 className="text-xl font-semibold mb-2">Practical Details</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-8">
    <div className="mb-4">
            <label htmlFor="year" className="block text-gray-700 font-semibold mb-2">Year:</label>
            <input
              type="text"
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              placeholder="e.g.,2025"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title:</label>
            <input
              type="text"
              id="title"
              value={selectedTitle}
              onChange={handleTitleChange}
              placeholder="Oscilloscopee"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>

      <div className="mb-8">
        {/* Calendar Component */}
        {/* Implement your calendar component here */}
      </div>
    
        
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
            <select id="selectYear" value={selectedInstitute} onChange={handleInstituteChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option value="SIPARA-Galle">Sipara</option>
          <option value="APIRO-Mathara">Apiro</option>
          <option value="VICTORY-Ambilipitiya">Victory</option>
          <option value="MAHARGA-Tangalle">Maharga</option>
        </select>
           
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Practical Details
            </button>
          </div>
          </div>
        </form>
      </div>
</div>
    </>
  );
};

export default APractical;
