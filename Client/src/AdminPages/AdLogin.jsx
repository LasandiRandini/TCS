// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdLogin = () => {
//   const [inputs, setInputs] = useState({
//     admin_username: "",
//     admin_password: "",
//   });
//   const [err, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

  
//   const handleChange = (e) => {
//     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8800/api/Aauth/alogin", inputs);
//       navigate("/AVideo");
//       localStorage.setItem('admin', JSON.stringify(response.data));
//     } catch (err) {
//       setError(err.response.data);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-gray-700">
//       <div className="flex shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
//         <div className="w-1/2 hidden md:block">
//           <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGFkbWlufGVufDB8fHx8MTY4NTY2MzQ3NA&ixlib=rb-1.2.1&q=80&w=1080" alt="Admin Login" className="w-full h-full object-cover"/>
//         </div>
//         <div className="w-full md:w-1/2 bg-white p-8">
//           <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
//           <form className="mb-4" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_username">
//                 Username
//               </label>
//               <input
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="admin_username"
//                 type="text"
//                 placeholder="Username"
//                 name="admin_username"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin_password">
//                 Password
//               </label>
//               <input
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="admin_password"
//                 type="password"
//                 placeholder="Password"
//                 name="admin_password"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? 'Logging in...' : 'Login'}
//               </button>
//               {err && <p className="text-red-500 text-xs italic">{err}</p>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdLogin;




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
      navigate("/EditVideo");
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
