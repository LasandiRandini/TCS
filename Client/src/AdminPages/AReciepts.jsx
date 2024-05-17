import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/o_videos/showReceipt');
        setReceipts(response.data);
      } catch (err) {
        setError(err.response.data.error);
      }
    };

    fetchReceipts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {receipts.map((receipt, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {error ? (
              <p className="text-red-500 text-center py-4">Error: {error}</p>
            ) : (
              <div>
                <img src={`http://localhost:8800/public/${receipt.reciepts}`} alt={`Receipt ${index}`} className="w-full h-auto" />
                <div className="p-4">
                  <p className="text-xl font-semibold">{receipt.unit_name}</p>
                  <p className="text-gray-500 mt-2">Year: {receipt.v_year}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
