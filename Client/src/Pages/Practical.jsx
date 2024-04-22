import  { useState } from 'react';
import PNav from "../Components/PNav";
import PropTypes from 'prop-types';
import Footer from "../Components/Footer";

const Practical = ({ selectedDate, selectedTime, selectedDuration, selectedInstitute }) => {

  const [preferredTimeslot, setPreferredTimeslot] = useState('');

  const handleTimeslotSelection = (event) => {
    setPreferredTimeslot(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (

    <>
      <PNav />
      <div className="my-24 md:px-20 mx-20 px-4 max-w-screen-2xl item-center mx-auto">
   
      <h1 className="text-2xl font-bold mb-4">Practical Details</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2"><span className="font-semibold">Date:</span> {selectedDate}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Time:</span> {selectedTime}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Duration:</span> {selectedDuration}</p>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Institute:</span> {selectedInstitute}</p>
      </div>
    </div>

    <div>
        {/* Quiz Section for Timeslot Selection */}
        <h2 className="text-xl font-semibold mb-2">Select Preferred Timeslot</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="timeslot" className="block text-gray-700 font-semibold mb-2">Preferred Timeslot:</label>
            <select
              id="timeslot"
              value={preferredTimeslot}
              onChange={handleTimeslotSelection}
              className="w-full border rounded px-4 py-2"
              required
            >
              <option value="">Select timeslot</option>
              {/* Add options for timeslots */}
            </select>
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Preferred Timeslot
            </button>
          </div>
        </form>
      </div>
    <Footer />
    </>
   
  );
 
};

Practical.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  selectedTime: PropTypes.string.isRequired,
  selectedDuration: PropTypes.string.isRequired,
  selectedInstitute: PropTypes.string.isRequired,
};


export default Practical;
