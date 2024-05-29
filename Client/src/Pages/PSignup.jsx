import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PSignup = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    district: "",
    email: "",
    snic_no: "",
    contact_no: "",
    al_year: "",
    institute: "",
    parent_contact_no: "",
    parent_email: "",
    username: "",
    password: ""
  });

  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/SLogin");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6 bg-gray-700">
      <div className="w-full max-w-lg bg-black bg-opacity-40 shadow-md rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-sm text-white font-medium mb-1">First Name</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="first_name"
              type="text"
              placeholder="First Name"
              name="first_name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-sm text-white font-medium mb-1">Last Name</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="last_name"
              type="text"
              placeholder="Last Name"
              name="last_name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="district" className="text-sm text-white font-medium mb-1">District</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="district"
              type="text"
              placeholder="District"
              name="district"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-white font-medium mb-1">Email</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="snic_no" className="text-sm text-white font-medium mb-1">NIC Number</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="snic_no"
              type="text"
              placeholder="NIC Number"
              name="snic_no"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact_no" className="text-sm text-white font-medium mb-1">Contact No</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="contact_no"
              type="text"
              placeholder="Contact No"
              name="contact_no"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="al_year" className="text-sm text-white font-medium mb-1">AL Year</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="al_year"
              type="text"
              placeholder="AL Year"
              name="al_year"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="institute" className="text-sm text-white font-medium mb-1">Institute</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="institute"
              type="text"
              placeholder="Institute"
              name="institute"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="parent_contact_no" className="text-sm text-white font-medium mb-1">Parent Contact No</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="parent_contact_no"
              type="text"
              placeholder="Parent Contact No"
              name="parent_contact_no"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="parent_email" className="text-sm text-white font-medium mb-1">Parent Email</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="parent_email"
              type="email"
              placeholder="Parent Email"
              name="parent_email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-white font-medium mb-1">Username</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="text-sm text-white font-medium mb-1">Password</label>
            <input
              required
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          {err && <p className="text-red-500 text-xs italic text-center mb-4">{err}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Do you have an account? <Link to="/SLogin" className="text-green-500 hover:text-green-700">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default PSignup;
