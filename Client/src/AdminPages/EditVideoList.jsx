

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';

// const ShowVideoUnits = () => {
//   const [videoUnits, setVideoUnits] = useState([]);
//   const [videos, setVideos] = useState({});
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedUnit, setSelectedUnit] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
//   const [isUnitUpdateModalOpen, setIsUnitUpdateModalOpen] = useState(false);
//   const [unitInputs, setUnitInputs] = useState({});
//   const [selectedUnitId, setSelectedUnitId] = useState(null);

//   useEffect(() => {
//     fetchVideoUnits();
//   }, []);

//   const fetchVideoUnits = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/updatevideos/getAllVideoUnits');
//       setVideoUnits(response.data);
//     } catch (error) {
//       console.error('Error fetching video units:', error);
//     }
//   };

//   const fetchVideos = async (unitId) => {
//     try {
//       const response = await axios.get(`http://localhost:8800/api/updatevideos/getVideosByUnitId/${unitId}`);
//       setVideos((prevVideos) => ({ ...prevVideos, [unitId]: response.data }));
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const handleToggle = (unitId) => {
//     if (selectedUnit === unitId) {
//       setSelectedUnit(null); 
//     } else {
//       if (!videos[unitId]) {
//         fetchVideos(unitId);
//       }
//       setSelectedUnit(unitId); 
//     }
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleDeleteVideo = async (videoId) => {
//     try {
//       await axios.delete(`http://localhost:8800/api/updatevideos/deleteVideo/${videoId}`);
//       if (selectedUnit) {
//         fetchVideos(selectedUnit);
//       }
//     } catch (error) {
//       console.error('Error deleting video:', error);
//     }
//   };

//   const handleUpdateVideo = (video) => {
//     setSelectedVideo(video);
//     setIsUpdateModalOpen(true);
//   };

//   const handleViewVideo = (video) => {
//     alert(`Viewing video: ${video.video_name}`);
//   };

//   const handleUpdateModalClose = () => {
//     setIsUpdateModalOpen(false);
//     setSelectedVideo(null);
//   };

//   const handleUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.put(`http://localhost:8800/api/updatevideos/updateVideo/${selectedVideo.video_id}`, selectedVideo);
//       if (selectedUnit) {
//         fetchVideos(selectedUnit);
//       }
//       handleUpdateModalClose();
//     } catch (error) {
//       console.error('Error updating video:', error);
//     }
//   };

//   const handleDeleteUnit = async (unitId) => {
//     try {
//       swal({
//         title: "Are you sure?",
//         text: "Once deleted, you will not be able to recover this unit!",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       }).then(async (willDelete) => {
//         if (willDelete) {
//           await axios.delete(`http://localhost:8800/api/videos/deleteUnit/${unitId}`);
//           setVideoUnits(videoUnits.filter((unit) => unit.unit_id !== unitId));
//           swal("Unit has been deleted!", {
//             icon: "success",
//           });
//         } else {
//           swal("Unit is safe!");
//         }
//       });
//     } catch (error) {
//       console.error('Error deleting unit:', error);
//     }
//   };

//   const handleUpdateUnit = (unit) => {
//     setSelectedUnitId(unit.unit_id);
//     setUnitInputs(unit);
//     setIsUnitUpdateModalOpen(true);
//   };

//   const handleUnitUpdateModalClose = () => {
//     setIsUnitUpdateModalOpen(false);
//     setSelectedUnitId(null);
//   };

//   const handleUnitUpdateSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.put(`http://localhost:8800/api/videos/updateUnit/${selectedUnitId}`, unitInputs);
//       fetchVideoUnits();
//       handleUnitUpdateModalClose();
//       swal({
//         text: "Unit updated successfully!",
//         icon: "success",
//         button: "Ok",
//       });
//     } catch (error) {
//       console.error('Error updating unit:', error);
//     }
//   };

//   const filteredVideoUnits = videoUnits.filter((unit) =>
//     unit.unit_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     unit.v_year.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl mb-4">Video Units</h2>
//       <input
//         type="text"
//         placeholder="Search by Unit Name and Year"
//         className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-1/4"
//         onChange={handleSearch}
//       />
//       <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow">
//         <thead>
//           <tr className="bg-gray-400 text-white font-bold tracking-wider">
//             <th className="p-4 border border-gray-200"></th>
//             <th className="p-4 border border-gray-200">Unit ID</th>
//             <th className="p-4 border border-gray-200">Year</th>
//             <th className="p-4 border border-gray-200">Unit Name</th>
//             <th className="p-4 border border-gray-200">Description</th>
//             <th className="p-4 border border-gray-200">Price</th>
//             <th className="p-4 border border-gray-200">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredVideoUnits.map((unit) => (
//             <React.Fragment key={unit.unit_id}>
//               <tr className="hover:bg-gray-100">
//                 <td className="p-4 text-left border border-gray-200">
//                   <button onClick={() => handleToggle(unit.unit_id)}>
//                     {selectedUnit === unit.unit_id ? "▾" : "▸"}
//                   </button>
//                 </td>
//                 <td className="p-4 text-left border border-gray-200">{unit.unit_id}</td>
//                 <td className="p-4 text-left border border-gray-200">{unit.v_year}</td>
//                 <td className="p-4 text-left border border-gray-200">{unit.unit_name}</td>
//                 <td className="p-4 text-left border border-gray-200">{unit.unit_description}</td>
//                 <td className="p-4 text-right border border-gray-200">{unit.price}</td>
//                 <td className="p-4 text-left border border-gray-200">
//                   <button
//                     onClick={() => handleUpdateUnit(unit)}
//                     className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300 mr-2 mb-2"
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => handleDeleteUnit(unit.unit_id)}
//                     className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//               {selectedUnit === unit.unit_id && videos[unit.unit_id] && (
//                 <tr>
//                   <td colSpan="7" className="p-4">
//                     <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
//                       <h3 className="text-lg font-semibold mb-4">Videos for Unit {unit.unit_id}</h3>
//                       <table className="min-w-full divide-y divide-gray-200 mb-4">
//                         <thead>
//                           <tr className="bg-gray-300 text-gray-700">
//                             <th className="p-2 border border-gray-200">Video ID</th>
//                             <th className="p-2 border border-gray-200">Name</th>
//                             <th className="p-2 border border-gray-200">Link</th>
//                             <th className="p-2 border border-gray-200">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {videos[unit.unit_id].map((video) => (
//                             <tr key={video.video_id} className="hover:bg-gray-200">
//                               <td className="p-2 text-left border border-gray-200">{video.video_id}</td>
//                               <td className="p-2 text-left border border-gray-200">{video.video_name}</td>
//                               <td className="p-2 text-left border border-gray-200">{video.video_link}</td>
//                               <td className="p-2 text-left border border-gray-200">
//                                 <button
//                                   onClick={() => handleViewVideo(video)}
//                                   className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300 mr-2 mb-2"
//                                 >
//                                   View
//                                 </button>
//                                 <button
//                                   onClick={() => handleUpdateVideo(video)}
//                                   className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300 mr-2 mb-2"
//                                 >
//                                   Update
//                                 </button>
//                                 <button
//                                   onClick={() => handleDeleteVideo(video.video_id)}
//                                   className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300"
//                                 >
//                                   Delete
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
      
//       {/* Update Video Modal */}
//       {isUpdateModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Update Video</h3>
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
//                 <input
//                   type="text"
//                   value={selectedVideo.video_name}
//                   onChange={(e) => setSelectedVideo({ ...selectedVideo, video_name: e.target.value })}
//                   className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Link:</label>
//                 <input
//                   type="text"
//                   value={selectedVideo.video_link}
//                   onChange={(e) => setSelectedVideo({ ...selectedVideo, video_link: e.target.value })}
//                   className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleUpdateModalClose}
//                   className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
      
//       {/* Update Unit Modal */}
//       {isUnitUpdateModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Update Unit</h3>
//             <form onSubmit={handleUnitUpdateSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Unit Name:</label>
//                 <input
//                   type="text"
//                   value={unitInputs.unit_name}
//                   onChange={(e) => setUnitInputs({ ...unitInputs, unit_name: e.target.value })}
//                   className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
//                 <textarea
//                   value={unitInputs.unit_description}
//                   onChange={(e) => setUnitInputs({ ...unitInputs, unit_description: e.target.value })}
//                   className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                 ></textarea>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
//                 <input
//                   type="number"
//                   value={unitInputs.price}
//                   onChange={(e) => setUnitInputs({ ...unitInputs, price: e.target.value })}
//                   className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={handleUnitUpdateModalClose}
//                   className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
//                 >
//                   Update
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowVideoUnits;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Modal from 'react-modal';
import Adminheader from "../Components/Adminheader";

const ShowVideoUnits = () => {
  const [videoUnits, setVideoUnits] = useState([]);
  const [videos, setVideos] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isUnitUpdateModalOpen, setIsUnitUpdateModalOpen] = useState(false);
  const [isVideoViewModalOpen, setIsVideoViewModalOpen] = useState(false);
  const [unitInputs, setUnitInputs] = useState({});
  const [selectedUnitId, setSelectedUnitId] = useState(null);

  useEffect(() => {
    fetchVideoUnits();
  }, []);

  const fetchVideoUnits = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/updatevideos/getAllVideoUnits');
      setVideoUnits(response.data);
    } catch (error) {
      console.error('Error fetching video units:', error);
    }
  };

  const fetchVideos = async (unitId) => {
    try {
      const response = await axios.get(`http://localhost:8800/api/updatevideos/getVideosByUnitId/${unitId}`);
      setVideos((prevVideos) => ({ ...prevVideos, [unitId]: response.data }));
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleToggle = (unitId) => {
    if (selectedUnit === unitId) {
      setSelectedUnit(null); 
    } else {
      if (!videos[unitId]) {
        fetchVideos(unitId);
      }
      setSelectedUnit(unitId); 
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteVideo = async (videoId) => {
    try {
      await axios.delete(`http://localhost:8800/api/updatevideos/deleteVideo/${videoId}`);
      if (selectedUnit) {
        fetchVideos(selectedUnit);
      }
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const handleUpdateVideo = (video) => {
    setSelectedVideo(video);
    setIsUpdateModalOpen(true);
  };

  const handleViewVideo = (video) => {
    setSelectedVideo(video);
    setIsVideoViewModalOpen(true);
  };

  const handleUpdateModalClose = () => {
    setIsUpdateModalOpen(false);
    setSelectedVideo(null);
  };

  const handleVideoViewModalClose = () => {
    setIsVideoViewModalOpen(false);
    setSelectedVideo(null);
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/updatevideos/updateVideo/${selectedVideo.video_id}`, selectedVideo);
      if (selectedUnit) {
        fetchVideos(selectedUnit);
      }
      handleUpdateModalClose();
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const handleDeleteUnit = async (unitId) => {
    try {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this unit!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await axios.delete(`http://localhost:8800/api/videos/deleteUnit/${unitId}`);
          setVideoUnits(videoUnits.filter((unit) => unit.unit_id !== unitId));
          swal("Unit has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Unit is safe!");
        }
      });
    } catch (error) {
      console.error('Error deleting unit:', error);
    }
  };

  const handleUpdateUnit = (unit) => {
    setSelectedUnitId(unit.unit_id);
    setUnitInputs(unit);
    setIsUnitUpdateModalOpen(true);
  };

  const handleUnitUpdateModalClose = () => {
    setIsUnitUpdateModalOpen(false);
    setSelectedUnitId(null);
  };

  const handleUnitUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8800/api/videos/updateUnit/${selectedUnitId}`, unitInputs);
      fetchVideoUnits();
      handleUnitUpdateModalClose();
      swal({
        text: "Unit updated successfully!",
        icon: "success",
        button: "Ok",
      });
    } catch (error) {
      console.error('Error updating unit:', error);
    }
  };

  const filteredVideoUnits = videoUnits.filter((unit) =>
    unit.unit_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    unit.v_year.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" bg-gray-200 mx-auto ">
        <Adminheader pageName="Update Video Units" />
    
      <input
        type="text"
        placeholder="Search by Unit Name and Year"
        className="border border-gray-300 rounded-md px-3 ml-4 mt-4 py-2 mb-4 w-1/4"
        onChange={handleSearch}
      />
      <table className="min-w-full divide-y divide-gray-200  rounded-lg shadow">
        <thead>
          <tr className="bg-gray-400 text-white font-bold tracking-wider">
            <th className="p-4 border border-gray-200"></th>
            <th className="p-4 border border-gray-200">Unit ID</th>
            <th className="p-4 border border-gray-200">Year</th>
            <th className="p-4 border border-gray-200">Unit Name</th>
            <th className="p-4 border border-gray-200">Description</th>
            <th className="p-4 border border-gray-200">Price</th>
            <th className="p-4 border border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVideoUnits.map((unit) => (
            <React.Fragment key={unit.unit_id}>
              <tr className="hover:bg-gray-100">
                <td className="p-4 text-left border border-gray-200">
                  <button onClick={() => handleToggle(unit.unit_id)}>
                    {selectedUnit === unit.unit_id ? "▾" : "▸"}
                  </button>
                </td>
                <td className="p-4 text-left border border-gray-200">{unit.unit_id}</td>
                <td className="p-4 text-left border border-gray-200">{unit.v_year}</td>
                <td className="p-4 text-left border border-gray-200">{unit.unit_name}</td>
                <td className="p-4 text-left border border-gray-200">{unit.unit_description}</td>
                <td className="p-4 text-right border border-gray-200">{unit.price}</td>
                <td className="p-4 text-left border border-gray-200">
                  <button
                    onClick={() => handleUpdateUnit(unit)}
                    className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300 mr-2 mb-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteUnit(unit.unit_id)}
                    className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              {selectedUnit === unit.unit_id && videos[unit.unit_id] && (
                <tr>
                  <td colSpan="7" className="p-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                      <h3 className="text-lg font-semibold mb-4">Videos for Unit {unit.unit_id}</h3>
                      <table className="min-w-full divide-y divide-gray-200 mb-4">
                        <thead>
                          <tr className="bg-gray-300 text-gray-700">
                            <th className="p-2 border border-gray-200">Video ID</th>
                            <th className="p-2 border border-gray-200">Name</th>
                            <th className="p-2 border border-gray-200">Link</th>
                            <th className="p-2 border border-gray-200">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {videos[unit.unit_id].map((video) => (
                            <tr key={video.video_id} className="hover:bg-gray-200">
                              <td className="p-2 text-left border border-gray-200">{video.video_id}</td>
                              <td className="p-2 text-left border border-gray-200">{video.video_name}</td>
                              <td className="p-2 text-left border border-gray-200">
                                <a
                                  href={video.video_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:underline"
                                >
                                  {video.video_link}
                                </a>
                              </td>
                              <td className="flex p-2 text-left border border-gray-200">
                                <button
                                  onClick={() => handleUpdateVideo(video)}
                                  className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300 mr-2 mb-2"
                                >
                                  Update
                                </button>
                                <button
                                  onClick={() => handleViewVideo(video)}
                                  className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300 mr-2 mb-2"
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => handleDeleteVideo(video.video_id)}
                                  className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-700 transition duration-300"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Modal for updating video */}
      {isUpdateModalOpen && (
        <Modal
          isOpen={isUpdateModalOpen}
          onRequestClose={handleUpdateModalClose}
          contentLabel="Update Video"
          ariaHideApp={false}
        >
          <h2 className="text-xl font-bold mb-4">Update Video</h2>
          {selectedVideo && (
            <form onSubmit={handleUpdateSubmit}>
              <label className="block mb-2">
                Video Name:
                <input
                  type="text"
                  value={selectedVideo.video_name}
                  onChange={(e) => setSelectedVideo({ ...selectedVideo, video_name: e.target.value })}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                />
              </label>
              <label className="block mb-2">
                Video Link:
                <input
                  type="text"
                  value={selectedVideo.video_link}
                  onChange={(e) => setSelectedVideo({ ...selectedVideo, video_link: e.target.value })}
                  className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                />
              </label>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleUpdateModalClose}
                  className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Update
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}

      {/* Modal for updating unit */}
      {isUnitUpdateModalOpen && (
        <Modal
          isOpen={isUnitUpdateModalOpen}
          onRequestClose={handleUnitUpdateModalClose}
          contentLabel="Update Unit"
          ariaHideApp={false}
        >
          <h2 className="text-xl font-bold mb-4">Update Unit</h2>
          <form onSubmit={handleUnitUpdateSubmit}>
            <label className="block mb-2">
              Unit Name:
              <input
                type="text"
                value={unitInputs.unit_name}
                onChange={(e) => setUnitInputs({ ...unitInputs, unit_name: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Description:
              <input
                type="text"
                value={unitInputs.unit_description}
                onChange={(e) => setUnitInputs({ ...unitInputs, unit_description: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              />
            </label>
            <label className="block mb-2">
              Price:
              <input
                type="number"
                value={unitInputs.price}
                onChange={(e) => setUnitInputs({ ...unitInputs, price: e.target.value })}
                className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
              />
            </label>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleUnitUpdateModalClose}
                className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
              >
                Update
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Modal for viewing video */}
      {isVideoViewModalOpen && (
        <Modal
          isOpen={isVideoViewModalOpen}
          onRequestClose={handleVideoViewModalClose}
          contentLabel="View Video"
          ariaHideApp={false}
        >
          <h2 className="text-xl font-bold mb-4">View Video</h2>
          {selectedVideo && (
            <div>
              <video width="100%" controls>
                <source src={selectedVideo.video_link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleVideoViewModalClose}
                  className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ShowVideoUnits;
