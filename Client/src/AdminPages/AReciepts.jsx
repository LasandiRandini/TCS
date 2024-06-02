


// import { useState, useEffect } from "react";
// import axios from "axios";
// import swal from 'sweetalert';
// import Adminheader from "../Components/Adminheader";

// const AReciepts = () => {
//   const [receipts, setReceipts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReceipts = async () => {
//       try {
//         const response = await axios.get("http://localhost:8800/api/o_videos/showReceipt");
//         setReceipts(response.data);
//       } catch (err) {
//         setError(err.response ? err.response.data.error : "Network Error");
//       }
//     };

//     fetchReceipts();
//   }, []);

//   const handleAccessVideo = async (receipt_id) => {
//     if (!receipt_id) {
//       console.error('Receipt ID is undefined');
//       return;
//     }

//     try {
//       await axios.put(`http://localhost:8800/api/o_videos/approveReceipt/${receipt_id}`);
//       swal({
        
//         text: "Receipt approved!",
//         icon: "success",
//         button: "OK",
//       });
//       setReceipts(receipts.map(receipt => 
//         receipt.reciept_id === receipt_id ? { ...receipt, permission: 'ok' } : receipt
//       ));
//     } catch (err) {
//       swal({
//         title: "Error!",
//         text: "Failed to approve receipt",
//         icon: "error",
//         button: "Okay",
//       });
//       console.error('Error approving receipt:', err.message);
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Check Receipts" />
//       <div className="container mx-auto px-4 py-8">
//         {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {receipts.map((receipt, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div>
//                 {receipt.reciepts.endsWith(".pdf") ? (
//                   <a href={receipt.reciepts} target="_blank" rel="noopener noreferrer" className="w-full h-auto block">
//                     <div className="flex items-center justify-center h-48 bg-gray-100">
//                       <p className="text-gray-500">View PDF</p>
//                     </div>
//                   </a>
//                 ) : (
//                   <img src={receipt.reciepts} alt={`Receipt ${index}`} className="w-full h-auto" />
//                 )}
//                 <div className="p-4">
//                   <p className="text-xl font-semibold">{receipt.unit_name}</p>
//                   <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
//                   <p className="text-gray-500 mt-2">NIC: {receipt.snic_no}</p>
//                   <p className="text-gray-500 mt-2">Name: {receipt.first_name} {receipt.last_name}</p>
//                   {receipt.permission === 'ok' ? (
//                     <p className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Receipt Accepted</p>
//                   ) : (
//                     <button
//                       onClick={() => handleAccessVideo(receipt.reciept_id)}
//                       className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
//                     >
//                       Accept the Receipt
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AReciepts;


import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Adminheader from "../Components/Adminheader";

const AReceipts = () => {
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/o_videos/showReceipt");
        setReceipts(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : "Network Error");
      }
    };

    fetchReceipts();
  }, []);

  const handleAccessVideo = async (receipt_id) => {
    if (!receipt_id) {
      console.error('Receipt ID is undefined');
      return;
    }

    try {
      await axios.put(`http://localhost:8800/api/o_videos/approveReceipt/${receipt_id}`);
      swal({
        text: "Receipt approved!",
        icon: "success",
        button: "OK",
      });

      // Fetch the updated receipts to get the latest permission status
      const response = await axios.get("http://localhost:8800/api/o_videos/showReceipt");
      setReceipts(response.data);
    } catch (err) {
      swal({
        title: "Error!",
        text: "Failed to approve receipt",
        icon: "error",
        button: "Okay",
      });
      console.error('Error approving receipt:', err.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Check Receipts" />
      <div className="container mx-auto px-4 py-8">
        {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {receipts.map((receipt, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div>
                {receipt.reciepts.endsWith(".pdf") ? (
                  <a href={receipt.reciepts} target="_blank" rel="noopener noreferrer" className="w-full h-auto block">
                    <div className="flex items-center justify-center h-48 bg-gray-100">
                      <p className="text-gray-500">View PDF</p>
                    </div>
                  </a>
                ) : (
                  <embed src={receipt.reciepts} type="application/pdf" width="100%" height="500px" />
                  
                )}
                <div className="p-4">
                  <p className="text-xl font-semibold">{receipt.unit_name}</p>
                  <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
                  <p className="text-gray-500 mt-2">NIC: {receipt.snic_no}</p>
                  <p className="text-gray-500 mt-2">Name: {receipt.first_name} {receipt.last_name}</p>
                  {receipt.permission === 'ok' ? (
                    <p className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Receipt Accepted</p>
                  ) : (
                    <button
                      onClick={() => handleAccessVideo(receipt.reciept_id)}
                      className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
                    >
                      Accept the Receipt
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AReceipts;
