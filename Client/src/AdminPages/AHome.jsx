


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa';
// import Adminheader from '../Components/Adminheader';

// function AHome() {
//   const [studentCounts, setStudentCounts] = useState({ online: 0, physical: 0 });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStudentCounts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8800/api/ahomes/getStudentCounts');
//         setStudentCounts(response.data);
//         setError(null);
//       } catch (err) {
//         if (err.response && err.response.data && err.response.data.error) {
//           setError(err.response.data.error);
//         } else {
//           setError('Something went wrong. Please try again later.');
//         }
//       }
//     };

//     fetchStudentCounts();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Adminheader pageName="Dashboard" />
//       <div className="container mx-auto py-6 px-4">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-6">
//             <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//               <div className="flex items-center">
//                 <FaUserFriends className="text-5xl text-blue-500 mr-4" />
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-700">Online Students</h3>
//                   <p className="text-3xl text-gray-900">{studentCounts.online}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-6">
//             <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
//               <div className="flex items-center">
//                 <FaChalkboardTeacher className="text-5xl text-blue-500 mr-4" />
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-700">Physical Students</h3>
//                   <p className="text-3xl text-gray-900">{studentCounts.physical}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {error && (
//           <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//             <p className="text-sm text-center">{error}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AHome;

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserFriends, FaChalkboardTeacher, FaReceipt } from 'react-icons/fa';
import Adminheader from '../Components/Adminheader';

function AHome() {
  const [studentCounts, setStudentCounts] = useState({ online: 0, physical: 0 });
  const [receiptPayments, setReceiptPayments] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentCounts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/ahomes/getStudentCounts');
        setStudentCounts(response.data);
        setError(null);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError('Something went wrong. Please try again later.');
        }
      }
    };

    const fetchReceiptPayments = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/ahomes/receiptPayments');
        setReceiptPayments(response.data.receiptPayments);
        setError(null);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError('Something went wrong. Please try again later.');
        }
      }
    };

    fetchStudentCounts();
    fetchReceiptPayments();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Adminheader pageName="Dashboard" />
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaUserFriends className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Online Students</h3>
                  <p className="text-3xl text-gray-900">{studentCounts.online}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaChalkboardTeacher className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Physical Students</h3>
                  <p className="text-3xl text-gray-900">{studentCounts.physical}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="flex items-center">
                <FaReceipt className="text-5xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-gray-700">Accepted Receipt Payments</h3>
                  <p className="text-3xl text-gray-900">{receiptPayments}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="text-sm text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AHome;
