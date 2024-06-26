import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdSignup = () => {
  const [inputs, setInputs] = useState({
    admin_first_name: "",
    admin_last_name: "",
    admin_nic: "",
    admin_no: "",
    admin_username: "",
    admin_password: ""
  });

  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:8800/api/Aauth/aregister", inputs);
      navigate("/AdLogin");
    } catch (err) {
      setError(err.response.data);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-gray-700">
      <div className="flex shadow-lg rounded-lg overflow-hidden w-full max-w-3xl bg-white">
        <div className="w-full p-12">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Registration</h1>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_first_name">
                First Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="admin_first_name"
                type="text"
                placeholder="First Name"
                name="admin_first_name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_last_name">
                Last Name
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="admin_last_name"
                type="text"
                placeholder="Last Name"
                name="admin_last_name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_nic">
                NIC No
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="admin_nic"
                type="text"
                placeholder="NIC No"
                name="admin_nic"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_no">
                Contact No
              </label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="admin_no"
                type="text"
                placeholder="Contact No"
                name="admin_no"
                onChange={handleChange}
              />
            </div>
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
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'Register'}
              </button>
              {err && <p className="text-red-500 text-xs italic">{err}</p>}
            </div>
          </form>
        </div>
       
      </div>
    </div>
  );
}

export default AdSignup;
