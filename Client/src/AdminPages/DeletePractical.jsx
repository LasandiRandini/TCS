import  { useState, useEffect } from 'react';
import axios from 'axios';



const DeletePractical = () => {
  const [practicals, setPracticals] = useState([]);

  useEffect(() => {
    fetchPracticals();
  }, []);

  const fetchPracticals = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/practicals/displayPractical');
      setPracticals(response.data);
    } catch (error) {
      console.error('Error fetching practicals:', error);
    }
  };

  const handleDelete = async (practical_id) => {
    try {
      if (window.confirm("Are you sure you want to delete this practical session?")) {
        await axios.delete(`http://localhost:8800/api/practicals/deletePractical/${practical_id}`);
        setPracticals(practicals.filter(practical => practical.practical_id !== practical_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen bg-primary justify-center items-center">
      <div className=" bg-white rounded shadow-lg p-6">
     
        
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Year</th>
              <th className="py-2">Date</th>
              <th className="py-2">Duration</th>
              <th className="py-2">Institute</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {practicals.map(practical => (
              <tr key={practical.practical_id} className="border-b">
                <td className="py-2 px-4">{practical.title}</td>
                <td className="py-2 px-4">{practical.year}</td>
                <td className="py-2 px-4">{practical.date}</td> 
                <td className="py-2 px-4">{practical.duration}</td>
                <td className="py-2 px-4">{practical.institute}</td>
                <td className="py-2 px-4">{practical.description}</td>
                <td className="py-2 px-4">
                  
                  <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(practical.practical_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeletePractical;
