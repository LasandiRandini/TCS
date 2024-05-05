import { useState, useEffect } from "react";
import Dashboard from "../Components/Dashboard";
import axios from "axios";

function AVideo() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/videos/getUnit"
        );
        setUnits(response.data);
      } catch (err) {
        setError(err.response.data.error);
      }
    };

    fetchUnits();
  }, []);

  const [inputs, setInputs] = useState({
    video_name: "",
    video_link: "",
    vunit_id: "",
    start_date: "",
    end_date: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/videos/addVideo", inputs);
    } catch (err) {
      setError(err.response.data.error);
    }
  };
  return (
    <>
      <div className="flex">
        <Dashboard />

        <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
          <h2>Units Data Table</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit_ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Unit Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {units.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.unit_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.v_year}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.unit_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.unit_description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h1 className="text-xl font-medium text-center mt-7 pb-6">
            Add New Video
          </h1>

          <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow-md">
            <div className="flex flex-col mb-4">
              <label htmlFor="video_name" className="text-sm font-medium mb-1">
                Video Name:
              </label>
              <input
                type="text"
                id="video_name"
                name="video_name"
                value={inputs.video_name}
                onChange={handleChange}
                placeholder="Electronics Part 1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="video_link" className="text-sm font-medium mb-1">
                Video Link:
              </label>
              <textarea
                id="video_link"
                value={inputs.video_link}
                name="video_link"
                placeholder="Video link of the video"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="vunit_id" className="text-sm font-medium mb-1">
                Unit_ID:
              </label>
              <input
                type="text"
                id="vunit_id"
                name="vunit_id"
                value={inputs.vunit_id}
                onChange={handleChange}
                placeholder="Get the relevent unit id by above table."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="start_date" className="text-sm font-medium mb-1">
                Start Date:
              </label>
              <input
                type="date"
                id="start_date"
                value={inputs.start_date}
                name="start_date"
                placeholder="Start date of the video"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="end_date" className="text-sm font-medium mb-1">
                End Date:
              </label>
              <input
                type="date"
                id="end_date"
                value={inputs.end_date}
                name="end_date"
                placeholder="End date of the video"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Add Video
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default AVideo;
