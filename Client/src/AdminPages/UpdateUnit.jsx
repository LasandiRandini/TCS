// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Adminheader from "../Components/Adminheader";

// function UpdateUnit() {
//   const [inputs, setInputs] = useState({
//     v_year: "",
//     unit_name: "",
//     unit_description: "",
//     price: "",
//   });
//   const { unit_id } = useParams();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch unit data here and populate the form fields
//     const fetchUnitData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8800/api/videos/getUnit/${unit_id}`);
//         const unitData = response.data;
//         setInputs({
//           v_year: unitData.v_year,
//           unit_name: unitData.unit_name,
//           unit_description: unitData.unit_description,
//           price: unitData.price,
//         });
//       } catch (error) {
//         setError("Failed to fetch unit data.");
//       }
//     };

//     fetchUnitData();
//   }, [unit_id]);

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8800/api/videos/updateUnit/${unit_id}`, inputs);
//       // Optionally, redirect the user after successful update
//     } catch (err) {
//       setError(err.response.data.error);
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Update Quiz" />
//       <div className="flex justify-center items-center mt-5 h-full">
//         <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
//           <h1 className="text-xl font-medium mb-6 text-center">Update Unit</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col w-1/2">
//               <label htmlFor="v_year" className="text-sm font-medium mb-1">
//                 Year:
//               </label>
//               <input
//                 type="text"
//                 id="v_year"
//                 name="v_year"
//                 value={inputs.v_year}
//                 onChange={handleChange}
//                 placeholder="2025"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="unit_name" className="text-sm font-medium mb-1">
//                 Unit Name:
//               </label>
//               <input
//                 type="text"
//                 id="unit_name"
//                 name="unit_name"
//                 value={inputs.unit_name}
//                 onChange={handleChange}
//                 placeholder="Electronics"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="unit_description" className="text-sm font-medium mb-1">
//                 Description:
//               </label>
//               <textarea
//                 id="unit_description"
//                 value={inputs.unit_description}
//                 name="unit_description"
//                 placeholder="Description of the unit"
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 rows={4}
//                 required
//               />
//             </div>

//             <div className="flex flex-col w-1/2">
//               <label htmlFor="price" className="text-sm font-medium mb-1">
//                 Price:
//               </label>
//               <input
//                 id="price"
//                 type="text"
//                 value={inputs.price}
//                 name="price"
//                 onChange={handleChange}
//                 placeholder="Price of the unit"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//             >
//               Update
//             </button>
//           </form>
//           {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpdateUnit;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Adminheader from "../Components/Adminheader";
import swal from "sweetalert";

function UpdateUnit() {
  const [inputs, setInputs] = useState({
    v_year: "",
    unit_name: "",
    unit_description: "",
    price: "",
  });
  const { unit_id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch unit data here and populate the form fields
    const fetchUnitData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/videos/getUnit/${unit_id}`);
        const unitData = response.data;
        setInputs({
          v_year: unitData.v_year,
          unit_name: unitData.unit_name,
          unit_description: unitData.unit_description,
          price: unitData.price,
        });
      } catch (error) {
        setError("Failed to fetch unit data.");
      }
    };

    fetchUnitData();
  }, [unit_id]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/videos/updateUnit/${unit_id}`, inputs);
      swal({
       
        text: "Unit updated successfully!",
        icon: "success",
        button: "Ok",
      });
      
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Update Unit" />
      <div className="flex justify-center items-center mt-5 h-full">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl font-medium mb-6 text-center">Update Unit</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="v_year" className="text-sm font-medium mb-1">
                Year:
              </label>
              <input
                type="text"
                id="v_year"
                name="v_year"
                value={inputs.v_year}
                onChange={handleChange}
                placeholder="2025"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="unit_name" className="text-sm font-medium mb-1">
                Unit Name:
              </label>
              <input
                type="text"
                id="unit_name"
                name="unit_name"
                value={inputs.unit_name}
                onChange={handleChange}
                placeholder="Electronics"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="unit_description" className="text-sm font-medium mb-1">
                Description:
              </label>
              <textarea
                id="unit_description"
                value={inputs.unit_description}
                name="unit_description"
                placeholder="Description of the unit"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <div className="flex flex-col w-1/2">
              <label htmlFor="price" className="text-sm font-medium mb-1">
                Price:
              </label>
              <input
                id="price"
                type="text"
                value={inputs.price}
                name="price"
                onChange={handleChange}
                placeholder="Price of the unit"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Update
            </button>
          </form>
          {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default UpdateUnit;
