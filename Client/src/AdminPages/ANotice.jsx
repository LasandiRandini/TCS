import { useState } from "react";
import axios from "axios";
import Adminheader from "../Components/Adminheader";

function ANotice() {
  const [inputs, setInputs] = useState({
    name: "",
    year: "",
    n_description: "",
    file: null,
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setInputs({ ...inputs, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("year", inputs.year);
      formData.append("n_description", inputs.n_description);
      formData.append("file", inputs.file);

      await axios.post(
        "http://localhost:8800/api/Notices/addNotice",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setInputs({
        name: "",
        year: "",
        n_description: "",
        file: null,
      });
      setError(null);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div>
    <Adminheader pageName="Add a Notice" />
    <div className="flex justify-center items-center  bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Notice</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium mb-1">
              Notice Display Title:
            </label>
            <input
              type="text"
              id="name"
              value={inputs.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              placeholder="Notice Topic"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium mb-1">
              Student Year:
            </label>
            <input
              type="text"
              id="year"
              value={inputs.year}
              onChange={handleChange}
              name="year"
              placeholder="Year"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="n_description" className="text-sm font-medium mb-1">
              Notice Description:
            </label>
            <textarea
              id="n_description"
              value={inputs.n_description}
              name="n_description"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Notice Description"
              rows={4}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Image upload:</label>
            <input
              type="file"
              id="imageUpload"
              onChange={handleFile}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Create Notice
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
      </div>
    </div>
    </div>
  );
}

export default ANotice;
