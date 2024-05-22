import { useState, useEffect } from "react";
import axios from "axios";

const VideoPermission = () => {
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);
  const [nicNo, setNicNo] = useState('');
  const [unitId, setUnitId] = useState('');

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/o_videos/showReceipt');
        setReceipts(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : 'Network Error');
      }
    };

    fetchReceipts();
  }, []);

  const handleApprove = async () => {
    try {
      await axios.post('http://localhost:8800/api/o_videos/approveReceipt', {
        nic_no: nicNo,
        unit_id: unitId,
      });
      setError(null);
      alert('Receipt approved successfully');
    } catch (err) {
      setError(err.response ? err.response.data : 'Failed to approve receipt');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {receipts.map((receipt, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {error ? (
              <p className="text-red-500 text-center py-4">Error: {error}</p>
            ) : (
              <div>
                <img src={`http://localhost:8800/public/reciepts/${receipt.reciepts}`} alt={`Receipt ${index}`} className="w-full h-auto" />
                <div className="p-4">
                  <p className="text-xl font-semibold">{receipt.unit_name}</p>
                  <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Approve Receipt</h3>
        <div className="mb-4">
          <label className="block mb-2">NIC No:</label>
          <input
            type="text"
            value={nicNo}
            onChange={(e) => setNicNo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Unit ID:</label>
          <input
            type="text"
            value={unitId}
            onChange={(e) => setUnitId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={handleApprove}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Approve Receipt
        </button>
      </div>
    </div>
  );
};

export default VideoPermission;
