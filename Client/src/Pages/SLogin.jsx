// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const SLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "username") setUsername(value);
//     if (name === "password") setPassword(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8800/api/auth/login", { username, password });
//       const { status, token } = response.data;
//       console.log(response.data);
//       localStorage.setItem('jwtkey', token);
//       localStorage.setItem('user', JSON.stringify(response.data));

//       if (status === 'physical') {
//         navigate("/PHome");
//       } else if(status === 'online'){
//         navigate("/OHome");
//       }
//     } catch (err) {
//       setError(err.response.data); 
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-gray-700 ">
//       <div className="flex shadow-lg rounded-lg overflow-hidden w-full max-w-4xl bg-white">
//         <div className="w-1/2 hidden md:block">
//           <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjUyNzMxNjEx&ixlib=rb-1.2.1&q=80&w=1080" alt="Login" className="w-full h-full object-cover"/>
//         </div>
//         <div className="w-full md:w-1/2 bg-black bg-opacity-60 px-8 py-10">
//           <h1 className="text-2xl mb-4 text-center  font-bold  text-white">Login</h1>
//           <form className="mb-4" onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">Username</label>
//               <input
//                 required
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="Username"
//                 value={username}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password</label>
//               <input
//                 required
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//               >
//                 {loading ? 'Logging in...' : 'Login'}
//               </button>
//               {error && <p key="error-message" className="text-red-500 text-xs italic">{error}</p>}
//             </div>
//           </form>
//           <span className="block text-center text-white">
//             Don’t have an account? <Link to="/Check" className="text-blue-400">Register</Link>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SLogin;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";


// const SLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "username") setUsername(value);
//     if (name === "password") setPassword(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8800/api/auth/login", { username, password });
//       const { status, token } = response.data;
//       localStorage.setItem('jwtkey', token);
//       localStorage.setItem('user', JSON.stringify(response.data));

//       if (status === 'physical') {
//         navigate("/PHome");
//       } else if(status === 'online'){
//         navigate("/OHome");
//       }
//     } catch (err) {
//       setError(err.response.data); 
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">Student Login</h2>
//         <h1 className="text-1xl text-center text-white mb-6">ඔබ දැනටමත් ලියාපදිංචි වී ඇත්නම් 
// පරිශීලක නාමය හා මුරපදය පහත යොමු කරන්න</h1>
//         <form onSubmit={handleSubmit}>
        
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-400 mb-2">Username</label>
//             <input
//               required
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Username"
//               value={username}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
//             <input
//               required
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//             {error && <p key="error-message" className="text-red-500 text-xs italic">{error}</p>}
//           </div>
//         </form>
//         <div className="mt-4 text-center">
//           <span className="text-gray-400">Don’t have an account? <Link to="/check" className="text-blue-400 hover:underline">Register</Link></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SLogin;


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../App.css"; 
// import CLASS from '../assets/class.png'; 

// const SLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "username") setUsername(value);
//     if (name === "password") setPassword(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8800/api/auth/login", { username, password });
//       const { status, token } = response.data;
//       localStorage.setItem('jwtkey', token);
//       localStorage.setItem('user', JSON.stringify(response.data));

//       if (status === 'physical') {
//         navigate("/PHome");
//       } else if(status === 'online'){
//         navigate("/OHome");
//       }
//     } catch (err) {
//       setError(err.response.data); 
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-900 flex items-center justify-center">
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${CLASS})` }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
//       </div>
//       <div className="relative z-10 bg-gray-800 p-8 opacity-70 rounded-3xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-white mb-6">Student Login</h2>
//         <h1 className="text-1xl text-center text-white mb-6">ඔබ දැනටමත් ලියාපදිංචි වී ඇත්නම් පරිශීලක නාමය හා මුරපදය පහත යොමු කරන්න</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-200 mb-2">Username</label>
//             <input
//               required
//               type="text"
//               id="username"
//               name="username"
//               placeholder="Username"
//               value={username}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-200 mb-2">Password</label>
//             <input
//               required
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//             {error && <p key="error-message" className="text-red-500 text-xs italic">{error}</p>}
//           </div>
//         </form>
//         <div className="mt-4 text-center">
//           <span className="text-gray-200">ඔබට ගිණුමක් නොමැති නම් ලියාපදිංචි වෙන්න.
//  <Link to="/Check" className="text-blue-400 hover:underline">Register</Link></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SLogin;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css"; 
import CLASS from '../assets/class.png'; 

const SLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:8800/api/auth/login", { username, password });
      const { status, token } = response.data;
      if (response.data.active === false) {
        setError("Account is inactive. Please contact support.");
        setLoading(false);
        return;
      }
      localStorage.setItem('jwtkey', token);
      localStorage.setItem('user', JSON.stringify(response.data));

      if (status === 'physical') {
        navigate("/PHome");
      } else if(status === 'online'){
        navigate("/OHome");
      }
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
        <h2 className="text-3xl font-bold text-center text-white mb-6">Student Login</h2>
        <h1 className="text-1xl text-center text-white mb-6">ඔබ දැනටමත් ලියාපදිංචි වී ඇත්නම් පරිශීලක නාමය හා මුරපදය පහත යොමු කරන්න</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-200 mb-2">Username</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-200 mb-2">Password</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
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
            {error && <p key="error-message" className="text-red-500 text-xs italic">{error}</p>}
          </div>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-200">ඔබට ගිණුමක් නොමැති නම් ලියාපදිංචි වෙන්න.
 <Link to="/Check" className="text-blue-400 hover:underline">Register</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SLogin;
