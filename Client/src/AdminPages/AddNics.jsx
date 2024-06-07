// import { useState } from "react";
// import axios from "axios";
// import Adminheader from "../Components/Adminheader";

// const AddNics = () => {
//   const [nic_no, setNic] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setNic(value);
//   };

//   const addNics = async () => {
//     try {
//       await axios.post("http://localhost:8800/api/checkings/addNics", { nic_no });
//       setSuccess(`Added ${nic_no} as a physical class student`);
//       setError(null); 
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//       setSuccess(null); 
//     }
//   };

//   const handleNIC = async () => {
//     await addNics();
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Add NICs" />
  
//     <div className="max-w-md mx-auto mt-40 p-6  rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Adding Physical Class Student NICs
//       </h2>
//       <form>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">NIC Number:</label>
//           <input
//             id="nic_no"
//             type="text"
//             name="nic_no"
//             value={nic_no}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//             required
//           />
//         </div>
//         {error && (
//           <p className="text-red-500 text-xs italic">{error}</p>
//         )}
//         {success && (
//           <p className="text-green-500 text-xs italic">{success}</p>
//         )}
//         <div className="text-center">
//           <button
//             type="button"
//             onClick={handleNIC}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
//           >
//            Add NIC
//           </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default AddNics;

import { useState } from "react";
import axios from "axios";
import Adminheader from "../Components/Adminheader";
import Swal from "sweetalert2";

const AddNics = () => {
  const [nic_no, setNic] = useState("");
  const [setError] = useState(null);
  const [ setSuccess] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setNic(value);
  };

  const addNics = async () => {
    try {
      await axios.post("http://localhost:8800/api/checkings/addNics", { nic_no });
      setSuccess(`Added ${nic_no} as a physical class student`);
      setError(null);
      Swal.fire("Success", `Added ${nic_no} as a physical class student`, "success");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "An error occurred";
      setError(errorMsg);
      setSuccess(null);
      Swal.fire("Error", errorMsg, "error");
    }
  };

  const handleNIC = async () => {
    await addNics();
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Add NICs" />
      <div className="max-w-md mx-auto mt-40 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Adding Physical Class Student NICs
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">NIC Number:</label>
            <input
              id="nic_no"
              type="text"
              name="nic_no"
              value={nic_no}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleNIC}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Add NIC
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNics;
