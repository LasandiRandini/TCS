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
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1   md:gap-12 gap-8">
      {receipts.map((receipt, index) => (
        <div
          key={index}
          
        >
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div>              
              <p>{receipt.v_year}</p>
              <p>{receipt.unit_name}</p>
              <img src={`http://localhost:8800/public/${receipt.reciepts}`} className="w-full h-auto pt-6 lg:h-[400px]" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
