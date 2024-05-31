// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import Adminheader from "../Components/Adminheader";

// // const Admin = () => {
// //   const [receipts, setReceipts] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchReceipts = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:8800/api/o_videos/showReceipt"
// //         );
// //         setReceipts(response.data);
// //       } catch (err) {
// //         setError(err.response ? err.response.data.error : "Network Error");
// //       }
// //     };

// //     fetchReceipts();
// //   }, []);

// //   const handleAccessVideo = (receipt) => {
// //     console.log("Accessing video for receipt:", receipt);
// //   };

// //   return (
// //     <div className="bg-gray-200 min-h-screen">
// //       <Adminheader pageName="Check Reciepts" />
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {receipts.map((receipt, index) => (
// //             <div
// //               key={index}
// //               className="bg-white rounded-lg shadow-md overflow-hidden"
// //             >
// //               {error ? (
// //                 <p className="text-red-500 text-center py-4">Error: {error}</p>
// //               ) : (
// //                 <div>
// //                   <img
// //                     src={receipt.reciepts}
// //                     alt={`Receipt ${index}`}
// //                     className="w-full h-auto"
// //                   />

// //                   <div className="p-4">
// //                     <p className="text-xl font-semibold">{receipt.unit_name}</p>
// //                     <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
// //                     <button
// //                       onClick={() => handleAccessVideo(receipt)}
// //                       className="mt-4 px-4 py-2  bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
// //                     >
// //                       Accept the Reciept
// //                     </button>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Admin;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Adminheader from "../Components/Adminheader";

// const Admin = () => {
//   const [receipts, setReceipts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReceipts = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8800/api/o_videos/showReceipt"
//         );
//         setReceipts(response.data);
//       } catch (err) {
//         setError(err.response ? err.response.data.error : "Network Error");
//       }
//     };

//     fetchReceipts();
//   }, []);

//   const handleAccessVideo = (receipt) => {
//     console.log("Accessing video for receipt:", receipt);
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Check Receipts" />
//       <div className="container mx-auto px-4 py-8">
//         {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {receipts.map((receipt, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <div>
//                 {receipt.reciepts.endsWith(".pdf") ? (
//                   <a
//                     href={receipt.reciepts}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full h-auto block"
//                   >
//                     <div className="flex items-center justify-center h-48 bg-gray-100">
//                       <p className="text-gray-500">View PDF</p>
//                     </div>
//                   </a>
//                 ) : (
//                   <img
//                     src={receipt.reciepts}
//                     alt={`Receipt ${index}`}
//                     className="w-full h-auto"
//                   />
//                 )}
//                 <div className="p-4">
//                   <p className="text-xl font-semibold">{receipt.unit_name}</p>
//                   <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
//                   <button
//                     onClick={() => handleAccessVideo(receipt)}
//                     className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
//                   >
//                     Accept the Receipt
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;

import { useState, useEffect } from "react";
import axios from "axios";
import Adminheader from "../Components/Adminheader";

const Admin = () => {
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8800/api/o_videos/showReceipt"
        );
        setReceipts(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : "Network Error");
      }
    };

    fetchReceipts();
  }, []);

  const handleAccessVideo = (receipt) => {
    console.log("Accessing video for receipt:", receipt);
  };

  return (
    <div className="bg-gray-200 min-h-screen ">
      <Adminheader pageName="Check Receipts" />
      <div className="container mx-auto px-4 py-8">
        {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {receipts.map((receipt, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div>
                {receipt.reciepts.endsWith(".pdf") ? (
                  <a
                    href={receipt.reciepts}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-auto block"
                  >
                    <div className="flex items-center justify-center h-48 bg-gray-100">
                      <p className="text-gray-500">View PDF</p>
                    </div>
                  </a>
                ) : (
                  <img
                    src={receipt.reciepts}
                    alt={`Receipt ${index}`}
                    className="w-full h-auto"
                  />
                )}
                <div className="p-4">
                  <p className="text-xl font-semibold">{receipt.unit_name}</p>
                  <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
                  <p className="text-gray-500 mt-2">NIC: {receipt.snic_no}</p>
                  <p className="text-gray-500 mt-2">
                    Name: {receipt.first_name} {receipt.last_name}
                  </p>
                  <button
                    onClick={() => handleAccessVideo(receipt)}
                    className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
                  >
                    Accept the Receipt
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
