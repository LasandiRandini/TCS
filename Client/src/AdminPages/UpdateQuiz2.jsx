


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
// import Adminheader from "../Components/Adminheader";

// function UpdateUnit() {
//   const [inputs, setInputs] = useState({
//     q_year: "",
//     q_unit: "",
//     q_title: "",
//     quiz_type: "",
//     start_date: "",
//     end_date: "",
//     duration: "",
//   });
//   const { q_id } = useParams();
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   useEffect(() => {
//     const fetchUnitData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8800/api/questions/getQuiz/${q_id}`);
//         const unitData = response.data;
//         setInputs({
//           q_year: unitData.q_year,
//           q_unit: unitData.q_unit,
//           q_title: unitData.q_title,
//           quiz_type: unitData.quiz_type,
//           start_date: unitData.start_date || unitData.currentDate,
     
//           duration: unitData.duration,
//         });
//       } catch (error) {
//         setError("Failed to fetch unit data.");
//       }
//     };

//     fetchUnitData();
//   }, [q_id]);

//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8800/api/questions/updateQuiz/${q_id}`, inputs);
//       setSuccess("Quiz updated successfully");
//       setError(null);
//     } catch (err) {
//       setError(err.response?.data?.error || "An error occurred");
//       setSuccess(null);
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Update Quiz" />
//       <div className="flex justify-center items-center mt-5 min-h-screen ">
//         <div className="w-full max-w-xl bg-white p-5 rounded-lg shadow-lg">
//           <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Quiz</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex flex-col">
//               <label htmlFor="q_year" className="text-gray-700 font-medium mb-2">Year</label>
//               <input
//                 type="text"
//                 id="q_year"
//                 name="q_year"
//                 value={inputs.q_year}
//                 onChange={handleChange}
//                 placeholder="2025"
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="q_unit" className="text-gray-700 font-medium mb-2">Unit Name</label>
//               <input
//                 type="text"
//                 id="q_unit"
//                 name="q_unit"
//                 value={inputs.q_unit}
//                 onChange={handleChange}
//                 placeholder="Electronics"
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="q_title" className="text-gray-700 font-medium mb-2">Quiz Title</label>
//               <textarea
//                 id="q_title"
//                 value={inputs.q_title}
//                 name="q_title"
//                 placeholder="Quiz Title"
//                 onChange={handleChange}
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows={4}
//                 required
//               />
//             </div>

//             <div className="flex flex-col">
//               <label className="text-gray-700 font-medium mb-2">Quiz Type</label>
//               <div className="flex items-center space-x-4">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="quiz_type"
//                     value="weekly"
//                     checked={inputs.quiz_type === "weekly"}
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Weekly
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="quiz_type"
//                     value="common"
//                     checked={inputs.quiz_type === "common"}
//                     onChange={handleChange}
//                     className="mr-2"
//                   />
//                   Common
//                 </label>
//               </div>
//             </div>

//             <Datetime
//   value={inputs.start_date}
//   className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   onChange={(date) => setInputs({ ...inputs, start_date: new Date(date).toISOString() })}
// />


            

//             <div className="flex flex-col">
//               <label htmlFor="duration" className="text-gray-700 font-medium mb-2">Quiz Duration (minutes)</label>
//               <input
//                 type="number"
//                 id="duration"
//                 value={inputs.duration}
//                 name="duration"
//                 onChange={handleChange}
//                 placeholder="Duration"
//                 className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//             >
//               Update
//             </button>
//           </form>
//           {error && <p className="text-red-500 text-center text-sm mt-4">{error}</p>}
//           {success && <p className="text-green-500 text-center text-sm mt-4">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpdateUnit;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Adminheader from "../Components/Adminheader";
import Swal from "sweetalert2"; // Import sweetalert2

function UpdateUnit() {
  const [inputs, setInputs] = useState({
    q_year: "",
    q_unit: "",
    q_title: "",
    quiz_type: "",
    start_date: "",
    end_date: "",
    duration: "",
  });
  const { q_id } = useParams();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchUnitData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/questions/getQuiz/${q_id}`);
        const unitData = response.data;
        setInputs({
          q_year: unitData.q_year,
          q_unit: unitData.q_unit,
          q_title: unitData.q_title,
          quiz_type: unitData.quiz_type,
          start_date: unitData.start_date || unitData.currentDate,
          end_date: unitData.end_date,
          duration: unitData.duration,
        });
      } catch (error) {
        setError("Failed to fetch unit data.");
      }
    };

    fetchUnitData();
  }, [q_id]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/questions/updateQuiz/${q_id}`, inputs);
   
      setError(null);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Quiz updated successfully!',
      });
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
      setSuccess(null);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Update Quiz" />
      <div className="flex justify-center items-center mt-5 min-h-screen ">
        <div className="w-full max-w-xl bg-white p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Update Quiz</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="q_year" className="text-gray-700 font-medium mb-2">Year</label>
              <input
                type="text"
                id="q_year"
                name="q_year"
                value={inputs.q_year}
                onChange={handleChange}
                placeholder="2025"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="q_unit" className="text-gray-700 font-medium mb-2">Unit Name</label>
              <input
                type="text"
                id="q_unit"
                name="q_unit"
                value={inputs.q_unit}
                onChange={handleChange}
                placeholder="Electronics"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="q_title" className="text-gray-700 font-medium mb-2">Quiz Title</label>
              <textarea
                id="q_title"
                value={inputs.q_title}
                name="q_title"
                placeholder="Quiz Title"
                onChange={handleChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Quiz Type</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="quiz_type"
                    value="weekly"
                    checked={inputs.quiz_type === "weekly"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Weekly
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="quiz_type"
                    value="common"
                    checked={inputs.quiz_type === "common"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Common
                </label>
              </div>
            </div>

            <Datetime
              value={inputs.start_date}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(date) => setInputs({ ...inputs, start_date: new Date(date).toISOString() })}
            />

            <div className="flex flex-col">
              <label htmlFor="duration" className="text-gray-700 font-medium mb-2">Quiz Duration (minutes)</label>
              <input
                type="number"
                id="duration"
                value={inputs.duration}
                name="duration"
                onChange={handleChange}
                placeholder="Duration"
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Update
            </button>
          </form>
          {error && <p className="text-red-500 text-center text-sm mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center text-sm mt-4">{success}</p>}
        </div>
      </div>
    </div>
  );
}

export default UpdateUnit;
