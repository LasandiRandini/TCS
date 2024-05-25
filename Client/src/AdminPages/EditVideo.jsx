import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/videos/displayUnits');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDelete = async (unit_id) => {
    try {
      if (window.confirm("Are you sure you want to delete this video?")) {
        await axios.delete(`http://localhost:8800/api/videos/deleteUnit/${unit_id}`);
        setVideos(videos.filter(video => video.unit_id !== unit_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen bg-primary justify-center items-center">
      <div className="w-1/2 bg-white rounded shadow-lg p-6">
        <Link to="/AVideo" className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add Video</Link>
        
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2">Unit Name</th>
              <th className="py-2">Year</th>
              <th className="py-2">Unit Description</th>
              <th className="py-2">Unit Price</th>
              <th className='py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {videos.map(video => (
              <tr key={video.unit_id} className="border-b">
                <td className="py-2 px-4">{video.unit_name}</td>
                <td className="py-2 px-4">{video.v_year}</td> 
                <td className="py-2 px-4">{video.unit_description}</td>
                <td className="py-2 px-4">{video.price}</td>
                <td className="py-2 px-4">
                  <Link to={`/UpdateUnit/${video.unit_id}`} className="bg-yellow-500 text-white font-bold py-1 px-2 rounded">Edit</Link>
                  <button className="bg-yellow-500 text-white btn btn-danger mt-2 font-bold py-1 px-2 rounded" onClick={() => handleDelete(video.unit_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditVideo;

