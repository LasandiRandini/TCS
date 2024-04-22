import  { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

const AdLogin = () => {
  const [inputs, setInputs] = useState({
    admin_username: "",
    admin_password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/Aauth/alogin", inputs);
      navigate("/AVideo");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <form className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_username">
              Username
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="admin_username"
              type="text"
              placeholder="Username"
              name="admin_username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_password">
              Password
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="admin_password"
              type="password"
              placeholder="Password"
              name="admin_password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Login
            </button>
            {err && <p className="text-red-500 text-xs italic">{err}</p>}
          </div>
        </form>
        
      </div>
    </div>
  );
  
};

export default AdLogin;

