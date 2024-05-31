

import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Adminheader from "../Components/Adminheader";

function AVideo() {
  const [inputs, setInputs] = useState({
    v_year: '',
    unit_name: '',
    unit_description: '',
    price: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/videos/addUnit', inputs);
      setInputs({
        v_year: '',
        unit_name: '',
        unit_description: '',
        price: '',
      });
      setError(null);
      swal({
        
        text: "You have successfully added a new unit!",
        icon: "success",
        button: "Ok",
      });
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Add new Video Unit" />
      <div className="flex justify-center items-center mt-5 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Add New Unit</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="v_year" className="text-sm text-gray-600 font-medium mb-1">Year:</label>
              <input
                type="text"
                id="v_year"
                name="v_year"
                value={inputs.v_year}
                onChange={handleChange}
                placeholder="2025"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="unit_name" className="text-sm text-gray-600 font-medium mb-1">Unit Name:</label>
              <input
                type="text"
                id="unit_name"
                name="unit_name"
                value={inputs.unit_name}
                onChange={handleChange}
                placeholder="Electronics"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="unit_description" className="text-sm text-gray-600 font-medium mb-1">Description:</label>
              <textarea
                id="unit_description"
                value={inputs.unit_description}
                name="unit_description"
                onChange={handleChange}
                placeholder="Description of the unit"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm font-medium text-gray-600 mb-1">Price:</label>
              <input
                type="text"
                id="price"
                value={inputs.price}
                name="price"
                onChange={handleChange}
                placeholder="Price of the unit"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Unit
            </button>
            {error && <p className="text-red-500 text-xs italic mt-4 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AVideo;
