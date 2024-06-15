// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import PRACTICAL from '../assets/Practical.png';

// const Practical = () => {
//   const [practicals, setPracticals] = useState([]);
//   const [timeSlots, setTimeSlots] = useState({});
//   const [selectedSlot, setSelectedSlot] = useState({});
//   const [error, setError] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   useEffect(() => {
//     const fetchPracticals = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/practicals/getpractical');
//         console.log(response.data);

//         setPracticals(response.data.filter(practical => practical.year == user.al_year));
//       } catch (err) {
//         setError(err.response ? err.response.data.error : 'Network Error');
//         console.error('Error fetching practicals:', err.message);
//       }
//     };

//     fetchPracticals();
//   }, [user.al_year]);

//   const fetchTimeSlots = async (practical_id) => {
//     if (!practical_id) {
//       console.error('Practical ID is undefined');
//       return;
//     }

//     try {
//       const response = await axios.get(`http://localhost:8800/api/practicals/getTimeSlots/${practical_id}`);
//       console.log('Fetched time slots:', response.data); 
//       if (Array.isArray(response.data)) {
//         setTimeSlots(prev => ({ ...prev, [practical_id]: response.data }));
//       } else {
//         setError('Invalid response format');
//         console.error('Expected an array but got:', response.data);
//       }
//     } catch (err) {
//       setError(err.response ? err.response.data.error : 'Network Error');
//       console.error('Error fetching time slots:', err.message);
//       Swal.fire( err.response ? err.response.data.error : 'Network Error', 'error');
//     }
//   };

//   const handleVote = async (practical_id, slot_id) => {
//     try {
//       await axios.post('http://localhost:8800/api/practicals/vote', { student_id: user.id, slot_id });
//       setError(null);
//       fetchTimeSlots(practical_id);
//       Swal.fire('Success', 'ඔබගේ timeslots තෝරා හැනීම සාර්ථකයි!', 'success');
//     } catch (err) {
//       setError(err.response ? err.response.data.error : 'Network Error');
//       console.error('Error voting for time slot:', err.message);
//       Swal.fire( err.response ? err.response.data.error : 'Network Error');
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex justify-center items-center "
//       style={{ backgroundImage: `url(${PRACTICAL})` }}
//     >
//     <div className="container my-20 px-2 md:px-12 p-4 min-h-screen">
//       <div className="container mx-auto p-6">
//         <h1 className="text-1xl text-white font-bold mb-4">Practicals සදහා time slots තෝරා ගැනිමට අදාල practical එක තෝරා ගෙන, අදාල time slot එක තෝරා ගන්න.</h1>
//         {error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//             {practicals.map((practical, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                 <h2 className="text-2xl font-bold mb-2">{practical.title}</h2>
//                 <p className="text-gray-800"><strong>Year(වර්ෂය): </strong> {practical.year}</p>
//                 <p className="text-gray-800"><strong>Date(දිනය): </strong> {practical.date}</p>
//                 <p className="text-gray-800"><strong>Duration(කාල සීමාව): </strong> {practical.duration}</p>
//                 <p className="text-gray-800"><strong>Institute(ආයතනය): </strong> {practical.institute}</p>
//                 <p className="text-gray-800 mb-2 mt-1"><strong></strong> {practical.description}</p>
//                 <button
//                   className="bg-blue-600 text-white py-2 px-4 rounded mt-2"
//                   onClick={() => {
//                     console.log('Fetching time slots for practical_id:', practical.practical_id);
//                     fetchTimeSlots(practical.practical_id);
//                   }}
//                 >
//                   Time-slots මෙතනින් වෙන් කර ගන්න.
//                 </button>

//                 {timeSlots[practical.practical_id] && Array.isArray(timeSlots[practical.practical_id]) && (
//                   <div className="mt-4">
//                     <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
//                     <ul>
//                       {timeSlots[practical.practical_id].map(slot => (
//                         <li key={slot.slot_id} className="flex items-center justify-between">
//                           <span>{slot.time_slots} - {slot.votes_count}/{slot.max_limit} votes</span>
//                           <input
//                             type="radio"
//                             name={`timeSlots-${practical.practical_id}`}
//                             value={slot.slot_id}
//                             onChange={() => setSelectedSlot(prev => ({ ...prev, [practical.practical_id]: slot.slot_id }))}
//                           />
//                         </li>
//                       ))}
//                     </ul>
//                     <button
//                       className="mt-4 bg-green-700 text-white py-2 px-4 rounded"
//                       onClick={() => handleVote(practical.practical_id, selectedSlot[practical.practical_id])}
//                       disabled={!selectedSlot[practical.practical_id]}
//                     >
//                       Vote
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Practical;


import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import PRACTICAL from '../assets/Practical.png';

const Practical = () => {
  const [practicals, setPracticals] = useState([]);
  const [timeSlots, setTimeSlots] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    const fetchPracticals = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/practicals/getpractical');
        console.log(response.data);

      
       setPracticals(response.data.filter(practical => 
        practical.year == user.al_year && practical.institute == user.institute));
      } catch (err) {
        setError(err.response ? err.response.data.error : 'Network Error');
        console.error('Error fetching practicals:', err.message);
      }
    };

    fetchPracticals();
  }, [user.al_year,user.institute]);

  const fetchTimeSlots = async (practical_id) => {
    if (!practical_id) {
      console.error('Practical ID is undefined');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8800/api/practicals/getTimeSlots/${practical_id}`);
      console.log('Fetched time slots:', response.data); 
      if (Array.isArray(response.data)) {
        setTimeSlots(prev => ({ ...prev, [practical_id]: response.data }));
      } else {
        setError('Invalid response format');
        console.error('Expected an array but got:', response.data);
      }
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Network Error');
      console.error('Error fetching time slots:', err.message);
      Swal.fire( err.response ? err.response.data.error : 'Network Error', 'error');
    }
  };

  const handleVote = async (practical_id, slot_id) => {
    try {
      await axios.post('http://localhost:8800/api/practicals/vote', { student_id: user.id, slot_id });
      setError(null);
      fetchTimeSlots(practical_id);
      Swal.fire('Success', 'ඔබගේ timeslots තෝරා හැනීම සාර්ථකයි!', 'success');
    } catch (err) {
      setError(err.response ? err.response.data.error : 'Network Error');
      console.error('Error voting for time slot:', err.message);
      Swal.fire( err.response ? err.response.data.error : 'Network Error');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${PRACTICAL})` }}
    >
      <div className="container my-20 px-2 md:px-12 p-4 min-h-screen">
        <div className="container mx-auto p-6">
          <h1 className="text-1xl text-white font-bold mb-4">Practicals සදහා time slots තෝරා ගැනිමට අදාල practical එක තෝරා ගෙන, අදාල time slot එක තෝරා ගන්න.</h1>
          {error ? (
            <p className="text-red-500 text-center">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {practicals.map((practical, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold mb-2">{practical.title}</h2>
                  <p className="text-gray-800"><strong>Year(වර්ෂය): </strong> {practical.year}</p>
                  <p className="text-gray-800"><strong>Date(දිනය): </strong> {formatDate(practical.date)}</p>
                  <p className="text-gray-800"><strong>Duration(කාල සීමාව): </strong> {practical.duration}</p>
                  <p className="text-gray-800"><strong>Institute(ආයතනය): </strong> {practical.institute}</p>
                  <p className="text-gray-800 mb-2 mt-1"><strong></strong> {practical.description}</p>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded mt-2"
                    onClick={() => {
                      console.log('Fetching time slots for practical_id:', practical.practical_id);
                      fetchTimeSlots(practical.practical_id);
                    }}
                  >
                    Time-slots මෙතනින් වෙන් කර ගන්න.
                  </button>

                  {timeSlots[practical.practical_id] && Array.isArray(timeSlots[practical.practical_id]) && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
                      <ul>
                        {timeSlots[practical.practical_id].map(slot => (
                          <li key={slot.slot_id} className="flex items-center justify-between">
                            <span>{slot.time_slots} - {slot.votes_count}/{slot.max_limit} votes</span>
                            <input
                              type="radio"
                              name={`timeSlots-${practical.practical_id}`}
                              value={slot.slot_id}
                              onChange={() => setSelectedSlot(prev => ({ ...prev, [practical.practical_id]: slot.slot_id }))}
                            />
                          </li>
                        ))}
                      </ul>
                      <button
                        className="mt-4 bg-green-700 text-white py-2 px-4 rounded"
                        onClick={() => handleVote(practical.practical_id, selectedSlot[practical.practical_id])}
                        disabled={!selectedSlot[practical.practical_id]}
                      >
                        Vote
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practical;
