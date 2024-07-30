
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";  
import CLASS from '../assets/class.png'; 

const AdLogin = () => {
  const [inputs, setInputs] = useState({
    admin_username: "",
    admin_password: "",
  });
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8800/api/Aauth/alogin", inputs);
      navigate("/AHome");
      localStorage.setItem('admin', JSON.stringify(response.data));
    } catch (err) {
      setError(err.response.data);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${CLASS})` }} 
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      </div>
      <div className="relative z-10 bg-gray-800 p-8 opacity-70 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="admin_username" className="block text-gray-200 mb-2">Username</label>
            <input
              required
              type="text"
              id="admin_username"
              name="admin_username"
              placeholder="Username"
              value={inputs.admin_username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="admin_password" className="block text-gray-200 mb-2">Password</label>
            <input
              required
              type="password"
              id="admin_password"
              name="admin_password"
              placeholder="Password"
              value={inputs.admin_password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            {err && <p key="error-message" className="text-red-500 text-xs italic">{err}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdLogin;
