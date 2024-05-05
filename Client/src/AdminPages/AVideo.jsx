import { useState } from "react";
import Dashboard from "../Components/Dashboard";
import axios from "axios";

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
      
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  

  return (
    <>
      <div className="flex">
        <Dashboard />

        <div className="container mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-medium text-center pb-6">
              Add New Unit 
            </h1>

        <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col mb-4">
            <label htmlFor="v_year" className="text-sm font-medium mb-1">
              Year:
            </label>
            <input
              type="text"
              id="v_year"
              name="v_year"
              value={inputs.v_year}
              onChange={handleChange}
              placeholder="2025"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        
            

            <div className="flex flex-col mb-4">
              <label htmlFor="unit_name" className="text-sm font-medium mb-1">
                Unit Name:
              </label>
              <input
                type="text"
                id="unit_name"
                name="unit_name"
                value={inputs.unit_name}
                onChange={handleChange}
                placeholder="Electronics"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="unit_description" className="text-sm font-medium mb-1">
                Description:
              </label>
              <textarea
                id="unit_description"
                value={inputs.unit_description}
                name="unit_description"
                placeholder="Description of the unit"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="price" className="text-sm font-medium mb-1">
                Price:
              </label>
              <textarea
                id="price"
                value={inputs.price}
                name="price"
                placeholder="price of the unit"
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
              Add Unit
            </button>
          </div>
{error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </div>
      
    
    </>
  );
}

export default AVideo;
