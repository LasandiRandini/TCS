import { useState } from "react";

import axios from "axios";
import { Link,useNavigate } from "react-router-dom";


const OSignup = () => {
  const [inputs, setInputs] = useState({
  first_name: "",
  last_name: "",
  snic_no: "",
  email: "",
  al_year: "",
  username: "",
  password: ""
  });

const [err,SetError]= useState(null);

const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/SLogin")
     
    } catch (err) {
    SetError(err.response.data)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700 p-6">
      <div className="w-full max-w-lg bg-black bg-opacity-40 shadow-md rounded-lg shadow-lg p-8 ">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">Register</h1>
        <form className="mb-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="first_name">
              First Name
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="First Name"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">
              Last Name
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Last Name"
              name="last_name"
              onChange={handleChange}
            />
          </div>
          
         <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="snic_no">
           NIC Number
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="snic_no"
              type="snic_no"
              placeholder="snic_no"
              name="snic_no"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="al_year">
              AL Year
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="al_year"
              type="text"
              placeholder="AL Year"
              name="al_year"
              onChange={handleChange}
            />
          </div>
         <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>
            {err && <p className="text-red-500 text-xs italic">{err}</p>}
          </div>
        </form>
        <span className="block text-center">
          Do you have an account? <Link to="/SLogin" className="text-green-500 hover:text-green-700">Login</Link>
        </span>
      </div>
    </div>
  );
  
}
export default OSignup;
