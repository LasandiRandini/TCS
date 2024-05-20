import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/notices/showNotices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDelete = async (n_id) => {
    try {
      if (window.confirm("Are you sure you want to delete this video?")) {
        await axios.delete(`http://localhost:8800/api/notices/deleteNotice/${n_id}`);
        setNotices(notices.filter(notice => notice.n_id !== n_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen bg-primary justify-center items-center">
      <div className="w-1/2 bg-white rounded shadow-lg p-6">
        <Link to="/ANotice" className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add Notice</Link>
        
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Displayed Name</th>
              <th className="py-2">Year</th>
              <th className="py-2">Description</th>
              <th className="py-2">Image</th>
            
            </tr>
          </thead>
          <tbody>
            {notices.map(notice => (
              <tr key={notice.n_id} className="border-b">
                <td className="py-2 px-4">{notice.name}</td>
                <td className="py-2 px-4">{notice.year}</td> 
                <td className="py-2 px-4">{notice.n_description}</td>
                <td className="py-2 px-4">{notice.image}</td>
                <td className="py-2 px-4">
                 
                  <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(notice.n_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditNotice;
