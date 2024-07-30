

import { useState, useEffect } from 'react';
import axios from 'axios';
import Adminheader from '../Components/Adminheader';  

const ReceiptTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [yearFilter, setYearFilter] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/o_videos/getReceiptData');
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all data
      } catch (err) {
        console.error('Error fetching receipt data:', err);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter data based on search query
    const filtered = data.filter(item => {
      return (
        item.name.toLowerCase().includes(query) ||
        item.unit_name.toLowerCase().includes(query)
      );
    });

    setFilteredData(filtered);
  };

  const handleYearFilterChange = (event) => {
    const year = event.target.value;
    setYearFilter(year);

    // Apply filters to the data
    filterData(year);
  };

  const filterData = (year) => {
    let filtered = data;

    // Apply year filter
    if (year !== 'All') {
      filtered = filtered.filter(item => item.al_year.toString() === year);
    }

    // Apply search query filter
    filtered = filtered.filter(item => {
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.unit_name.toLowerCase().includes(query)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Receipt Data" />
      <div className="flex items-center justify-between p-4 bg-white ml-3 rounded shadow-lg w-full max-w-7xl mt-5">
        <input
          type="text"
          placeholder="Search by First Name or Unit Name"
          className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 w-1/4"
          value={searchQuery}
          onChange={handleSearch}
        />
       
        <select
          value={yearFilter}
          onChange={handleYearFilterChange}
          className="border border-gray-400 bg-white bg-opacity-40 rounded-md px-3 py-2 "
        >
          <option value="All">All Years</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
      <div className="container mx-auto p-4">
      
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <table className="min-w-full bg-white rounded-md shadow-md overflow-hidden">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">AL Year</th>
                
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Unit Name</th>
                <th className="px-4 py-2">Permission</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.al_year}</td>
                 
                  <td className="px-4 py-2">{item.price}</td>
                  <td className="px-4 py-2">{item.unit_name}</td>
                  <td className="px-4 py-2">{item.permission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ReceiptTable;
