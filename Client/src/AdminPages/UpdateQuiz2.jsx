import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

function UpdateUnit() {
  const [inputs, setInputs] = useState({
    q_year: "",
    q_unit: "",
    q_title: "",
    start_date: "",
    end_date: "",
    duration: "",
  });
  const { q_id } = useParams();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/questions/updateQuiz/${q_id}`, inputs);
      setSuccess("Quiz updated successfully");
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setSuccess(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Quiz</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="q_year" className="text-gray-700 font-medium mb-2">Year</label>
            <input
              type="text"
              id="q_year"
              name="q_year"
              value={inputs.q_year}
              onChange={handleChange}
              placeholder="2025"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="q_unit" className="text-gray-700 font-medium mb-2">Unit Name</label>
            <input
              type="text"
              id="q_unit"
              name="q_unit"
              value={inputs.q_unit}
              onChange={handleChange}
              placeholder="Electronics"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="q_title" className="text-gray-700 font-medium mb-2">Quiz Title</label>
            <textarea
              id="q_title"
              value={inputs.q_title}
              name="q_title"
              placeholder="Quiz Title"
              onChange={handleChange}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Start Date</label>
            <Datetime
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(date) => setInputs({ ...inputs, start_date: date.toISOString() })}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Due Date and Time</label>
            <Datetime
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(date) => setInputs({ ...inputs, end_date: date.toISOString() })}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="duration" className="text-gray-700 font-medium mb-2">Quiz Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              value={inputs.duration}
              name="duration"
              onChange={handleChange}
              placeholder="Duration"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Update
          </button>
        </form>
        {error && <p className="text-red-500 text-center text-sm mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center text-sm mt-4">{success}</p>}
      </div>
    </div>
  );
}

export default UpdateUnit;
