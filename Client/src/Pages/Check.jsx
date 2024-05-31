// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Check = () => {
//   const [nicNumber, setNicNumber] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setNicNumber(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8800/api/checkings/checking', { nic_no: nicNumber });
//       const { status } = response.data;
//       if (status === 'physical') {
//         navigate("/PSignup");
//       } else if(status === 'online'){
//         navigate("/OSignup");
//       }
//     } catch (err) {
//       setError(err.response.data.error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold mb-6 text-center">Student Status Check</h2>
//         <p className="text-lg mb-6 text-center">Are you a Physical class student? Enter your NIC number to check.</p>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nic_number">
//               NIC Number
//             </label>
//             <input
//               required
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="nic_number"
//               type="text"
//               placeholder="Enter NIC Number"
//               value={nicNumber}
//               onChange={handleChange}
//             />
//           </div>
//           {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//           <div className="flex justify-center">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Check;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
        navigate(`/PSignup?nic_no=${nicNumber}`);
      } else if(status === 'online'){
        navigate(`/OSignup?nic_no=${nicNumber}`);
      }
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Status Check</h2>
        <p className="text-lg mb-6 text-center">Are you a Physical class student? Enter your NIC number to check.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nic_number">
              NIC Number
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nic_number"
              type="text"
              placeholder="Enter NIC Number"
              value={nicNumber}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Check;
