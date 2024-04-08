// Check.js
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const Check = () => {
  const [nicNumber, setNicNumber] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNicNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/api/checkings/checking', { nic_no: nicNumber });
      const { status } = response.data;
      if (status === 'physical') {
        navigate("/PSignup");
      } else if(status === 'online'){
        navigate("/OSignup");
      }
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="auth flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 ">Are you a Physical class student? ,then</h2>
        <h2 className="text-2xl mb-4 ">Enter your NIC number</h2>

        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nic_number">
              NIC Number
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nic_number"
              type="text"
              placeholder="NIC Number"
              value={nicNumber}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Check;
