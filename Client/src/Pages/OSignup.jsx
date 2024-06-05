// import { useState } from "react";

// import axios from "axios";
// import { Link,useNavigate } from "react-router-dom";


// const OSignup = () => {
//   const [inputs, setInputs] = useState({
//   first_name: "",
//   last_name: "",
//   snic_no: "",
//   email: "",
//   al_year: "",
//   username: "",
//   password: ""
//   });

// const [err,SetError]= useState(null);

// const navigate = useNavigate()

//   const handleChange = (e) => {
//     setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   };

//   console.log(inputs);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8800/api/auth/register", inputs);
//       navigate("/SLogin")
     
//     } catch (err) {
//     SetError(err.response.data)
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-700 p-6">
//       <div className="w-full max-w-lg bg-black bg-opacity-40 shadow-md rounded-lg shadow-lg p-8 ">
//         <h1 className="text-3xl font-semibold text-center mb-6 text-white">Register</h1>
//         <form className="mb-4">
//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="first_name">
//               First Name
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="first_name"
//               type="text"
//               placeholder="First Name"
//               name="first_name"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">
//               Last Name
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="last_name"
//               type="text"
//               placeholder="Last Name"
//               name="last_name"
//               onChange={handleChange}
//             />
//           </div>
          
//          <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="snic_no">
//            NIC Number
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="snic_no"
//               type="snic_no"
//               placeholder="snic_no"
//               name="snic_no"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="al_year">
//               AL Year
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="al_year"
//               type="text"
//               placeholder="AL Year"
//               name="al_year"
//               onChange={handleChange}
//             />
//           </div>
//          <div className="mb-4">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="username"
//               type="text"
//               placeholder="Username"
//               name="username"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//               onClick={handleSubmit}
//             >
//               Register
//             </button>
//             {err && <p className="text-red-500 text-xs italic">{err}</p>}
//           </div>
//         </form>
//         <span className="block text-center">
//           Do you have an account? <Link to="/SLogin" className="text-green-500 hover:text-green-700">Login</Link>
//         </span>
//       </div>
//     </div>
//   );
  
// }
// export default OSignup;

import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import CLASS from "../assets/class.png";

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

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const nic = queryParams.get("nic_no");
    if (nic) {
      setInputs((prev) => ({ ...prev, snic_no: nic }));
    }
  }, [location.search]);
  const validate = () => {
    let tempErrors = {};
    if (!inputs.first_name) tempErrors.first_name = "First Name is required.";
    if (!inputs.last_name) tempErrors.last_name = "Last Name is required.";
    if (!inputs.snic_no) tempErrors.snic_no = "NIC Number is required.";
    if (!inputs.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      tempErrors.email = "Email address is invalid.";
    }
    if (!inputs.al_year) tempErrors.al_year = "AL Year is required.";
    if (!inputs.username) tempErrors.username = "Username is required.";
    if (!inputs.password) tempErrors.password = "Password is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios.post("http://localhost:8800/api/auth/register", inputs);
        Swal.fire("Success", "You have registered successfully!", "success");
        navigate("/SLogin");
      } catch (err) {
        Swal.fire("Error", err.response.data, "error");
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${CLASS})` }}
    >
      <div className="bg-black bg-opacity-30 py-10 mt-5 w-4/6 pl-5 pr-5 mb-5">
        <div className="max-w-10xl mx-auto p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-center text-gray-100">
              Student Registration Form
            </h2>
            <p className="mt-4 text-center text-red-300 text-xs">
              * Please insert the correct details.
            </p>

            <h3 className="text-lg font-semibold text-gray-200">
              Personal Information | පුද්ගලික තොරතුරු
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  First Name | මුල් නම<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={inputs.first_name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.first_name && (
                  <p className="text-red-200 text-sm">{errors.first_name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Last Name | අවසාන නම<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={inputs.last_name}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.last_name && (
                  <p className="text-red-200 text-sm">{errors.last_name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  NIC Number | ජාතික හැදුනුම්<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="snic_no"
                  value={inputs.snic_no}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                
                {errors.snic_no && (
                  <p className="text-red-200 text-sm">{errors.snic_no}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email | විද්‍යුත් තැපැල්<span className="text-red-500"> *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && (
                  <p className="text-red-200 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  AL Year | AL වර්ෂය<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="al_year"
                  value={inputs.al_year}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.al_year && (
                  <p className="text-red-200 text-sm">{errors.al_year}</p>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-200">
              Login Details | ලොගින් තොරතුරු
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Username<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.username && (
                  <p className="text-red-200 text-sm">{errors.username}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Password<span className="text-red-500"> *</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    className="mt-1 p-2 pr-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="text-gray-400"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-200 text-sm">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-6 bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>

            {errors.general && <p className="mt-4 text-center text-red-200">{errors.general}</p>}
          </form>
          <span className="block text-center text-white mt-4">
          ඔබ දැනටමත් ලියාපදිංචි වි අවසන්ද?  
 <Link to="/Check" className="text-white underline">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OSignup;
