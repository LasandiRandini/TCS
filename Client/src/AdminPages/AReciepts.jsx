


import { useState, useEffect } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Adminheader from "../Components/Adminheader";

const AReceipts = () => {
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/o_videos/showReceipt");
      setReceipts(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.error : "Network Error");
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

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

      fetchReceipts(); 
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

  const handleRejectVideo = async (receipt_id) => {
    if (!receipt_id) {
      console.error('Receipt ID is undefined');
      return;
    }

    try {
      await axios.put(`http://localhost:8800/api/o_videos/rejectReceipt/${receipt_id}`);
      swal({
        text: "Receipt rejected!",
        icon: "error",
        button: "OK",
      });

      fetchReceipts(); 
    } catch (err) {
      swal({
        title: "Error!",
        text: "Failed to reject receipt",
        icon: "error",
        button: "Okay",
      });
      console.error('Error rejecting receipt:', err.message);
    }
  };

  const handleReapproveReceipt = async (receipt_id) => {
    if (!receipt_id) {
      console.error('Receipt ID is undefined');
      return;
    }

    try {
      await axios.put(`http://localhost:8800/api/o_videos/approveReceipt/${receipt_id}`);
      swal({
        text: "Receipt re-approved!",
        icon: "success",
        button: "OK",
      });

      fetchReceipts(); 
    } catch (err) {
      swal({
        title: "Error!",
        text: "Failed to re-approve receipt",
        icon: "error",
        button: "Okay",
      });
      console.error('Error re-approving receipt:', err.message);
    }
  };

  const filteredReceipts = receipts.filter((receipt) =>
    receipt.permission !== 'ok' &&
    (
      receipt.unit_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      receipt.v_year.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Check Receipts" />
      <div className="container mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="Search by Unit Name, First Name, Last Name, or NIC"
          className="border border-gray-400 rounded-md mb-4 px-3 py-2 mt-4 w-1/4"
          value={searchQuery}
          onChange={handleSearch}
        />
        {error && <p className="text-red-500 text-center py-4">Error: {error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredReceipts.map((receipt, index) => (
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
                  ) : receipt.permission === 'not ok' ? (
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleReapproveReceipt(receipt.reciept_id)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
                      >
                        Re-approve the Receipt
                      </button>
                      <p className="px-4 py-2 bg-red-500 text-white rounded">Receipt Rejected</p>
                    </div>
                  ) : (
                    <div className="mt-4 flex space-x-2">
                      <button
                        onClick={() => handleAccessVideo(receipt.reciept_id)}
                        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
                      >
                        Accept the Receipt
                      </button>
                      <button
                        onClick={() => handleRejectVideo(receipt.reciept_id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
                      >
                        Reject the Receipt
                      </button>
                    </div>
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
