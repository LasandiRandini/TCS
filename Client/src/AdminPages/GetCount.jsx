// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Adminheader from "../Components/Adminheader";

// const GetCount = () => {
//   const [slots, setSlots] = useState([]);

//   useEffect(() => {
//     fetchSlots();
//   }, []);

//   const fetchSlots = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/practicals/getCount');
//       setSlots(response.data);
//     } catch (error) {
//       console.error('Error fetching practical time slots:', error);
//     }
//   };

//   return (
//     <div>
//     <Adminheader pageName="Get Student Count for Practicals" />
//     <div className="flex mt-6 bg-primary justify-center items-center">
//       <div className="bg-white rounded shadow-lg p-6">
//         <table className="w-full">
//           <thead>
//             <tr>
//               <th className="py-5 px-4">Practical Name</th>
//               <th className="py-5 px-4">Year</th>
//               <th className="py-5 px-4">Time Slots</th>
//               <th className="py-5 px-4">Votes Count</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {slots.map(slot => (
//               <tr key={slot.slot_id} className="border-b">
//                 <td className="py-2 px-4">{slot.title}</td>
//                 <td className="py-2 px-4">{slot.year}</td>
//                 <td className="py-2 px-4">{slot.time_slots}</td>
//                 <td className="py-2 px-4">{slot.votes_count}</td>
               
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default GetCount;

import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminheader from "../Components/Adminheader";

const GetCount = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/practicals/getCount');
      setSlots(response.data);
    } catch (error) {
      console.error('Error fetching practical time slots:', error);
    }
  };

  return (
    <div>
      <Adminheader pageName="Get Student Count for Practicals" />
      <div className="flex mt-6 bg-primary justify-center items-center">
        <div className="bg-white rounded shadow-lg p-10 w-full max-w-6xl mx-auto">
          <table className="w-full text-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-4 px-6">Practical Name</th>
                <th className="py-4 px-6">Year</th>
                <th className="py-4 px-6">Time Slots</th>
                <th className="py-4 px-6">Votes Count</th>
              </tr>
            </thead>
            <tbody>
              {slots.map(slot => (
                <tr key={slot.slot_id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-6">{slot.title}</td>
                  <td className="py-4 px-6">{slot.year}</td>
                  <td className="py-4 px-6">{slot.time_slots}</td>
                  <td className="py-4 px-6">{slot.votes_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetCount;
