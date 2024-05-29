import { useState, useEffect } from "react";
import axios from "axios";
import Adminheader from "../Components/Adminheader";

function AVideo() {
  const [units, setUnits] = useState([]);
  const [inputs, setInputs] = useState({
    video_name: "",
    video_link: "",
    vunit_id: "",
    start_date: "",
    end_date: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/videos/getUnit");
        setUnits(response.data);
      } catch (err) {
        setError(err.response.data.error);
      }
    };

    fetchUnits();
  }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/videos/addVideo", inputs);
      setInputs({
        video_name: "",
        video_link: "",
        vunit_id: "",
        start_date: "",
        end_date: "",
      });
      setError(null);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
   
    <Adminheader pageName="Add videos " />
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Units Data Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Unit ID</th>
                <th className="px-4 py-2">Year</th>
                <th className="px-4 py-2">Unit Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {units.map((unit, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{unit.unit_id}</td>
                  <td className="border px-4 py-2">{unit.v_year}</td>
                  <td className="border px-4 py-2">{unit.unit_name}</td>
                  <td className="border px-4 py-2">{unit.unit_description}</td>
                  <td className="border px-4 py-2">{unit.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Add New Video</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="video_name" className="text-sm font-medium mb-1">Video Name:</label>
              <input
                type="text"
                id="video_name"
                name="video_name"
                value={inputs.video_name}
                onChange={handleChange}
                placeholder="Electronics Part 1"
                className="input-style"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="video_link" className="text-sm font-medium mb-1">Video Link:</label>
              <textarea
                id="video_link"
                value={inputs.video_link}
                name="video_link"
                placeholder="Video link of the video"
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="vunit_id" className="text-sm font-medium mb-1">Unit ID:</label>
              <input
                type="text"
                id="vunit_id"
                name="vunit_id"
                value={inputs.vunit_id}
                onChange={handleChange}
                placeholder="Get the relevant unit ID from the table"
                className="input-style"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="start_date" className="text-sm font-medium mb-1">Start Date:</label>
              <input
                type="date"
                id="start_date"
                value={inputs.start_date}
                name="start_date"
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="end_date" className="text-sm font-medium mb-1">End Date:</label>
              <input
                type="date"
                id="end_date"
                value={inputs.end_date}
                name="end_date"
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary"
          >
            Add Video
          </button>
          {error && <p className="text-red-500 text-xs italic mt-4 text-center">{error}</p>}
        </form>
      </div>
    </div>
    </div>
  );
}

export default AVideo;
