import { useState } from "react";
import Dashboard from "../Components/Dashboard";
import axios from "axios";

function ANotice() {
  const [inputs, setInputs] = useState({
    name: '',
    year: '',
    n_description: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/notices/addNotice', inputs);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedImage = event.target.files[0];
     
      setInputs({ ...inputs, image: uploadedImage });
    }
  };
  

  return (
    <>
      <div className="flex">
        <Dashboard />
        <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4  px-5">Notice Details</h1>
          <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Notice Display Title:
              </label>
              <input
                type="text"
                id="name"
                value={inputs.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="year" className="text-sm font-medium mb-1">
                Student Year:
              </label>
              <textarea
                id="year"
                value={inputs.year}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={1}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="n_description" className="text-sm font-medium mb-1">
               Notice Description:
              </label>
              <textarea
                id="n_description"
                value={inputs.n_description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={2}
                required
              />
            </div>

            <div className="flex flex-col mt-6 mb-4">
  <label className="text-sm font-medium mb-1">Image upload:</label>
  <div className="mt-2">
    <input
      type="file"
      id="imageUpload"
      onChange={handleImageUpload}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
</div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-4 mt-6 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Create Notice
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default ANotice;
