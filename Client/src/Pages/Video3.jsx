// import { useState, useEffect } from "react";
// import axios from "axios";
// import Swal from "sweetalert";

// const Video3 = () => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get("http://localhost:8800/api/videos/displayUnits");
//         setVideos(response.data.filter((video) => video.v_year === user.al_year));
//       } catch (err) {
//         setError("Failed to fetch videos");
//       }
//     };

//     fetchVideos();
//   }, [user.al_year]);

//   const handleOpenPlaylist = () => {
//     Swal({
//       title: "Enroll to the video Playlist",
//       text: "ඔබ ලියාපදිංචි වූ පසු, ඔබට unit video-playlist නැරඹීම සදහා  මාස 3ක ප්‍රවේශයක් ඇත. ඔබට enroll වීමට අවශ්‍යද?",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         Swal("You have been enrolled!", {
//           icon: "success",
//         });
//       } else {
//         Swal("You haven't enrolled.");
//       }
//     });
//   };

//   return (
//     <div className=" bg-gray-200">
//     <div className="container my-20 px-2">
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
//         {error ? (
//           <p className="text-red-500">Error: {error}</p>
//         ) : (
//           videos.map((video, index) => (
//             <div
//               key={index}
//               className=" ml-20 mr-20 bg-white text-white rounded-lg p-10 shadow-md hover:shadow-lg transition duration-300 relative border border-gray-600"
//             >
//               <h3 className="text-xl text-black font-semibold mb-2">{video.unit_name}</h3>
//               <p className="text-black mb-4">{video.unit_description}</p>

//               <div className="absolute top-0 right-0 mt-4 mr-4">
//                 <button
//                   onClick={handleOpenPlaylist}
//                   className="bg-red-500 text-white px-6 mr-5 py-2 mt-4 rounded hover:bg-red-700 transition duration-300"
//                 >
//                   පන්තියට ඉල්ලුම් කරන්න
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Video3;


import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";  
import { useNavigate } from "react-router-dom";

const Video3 = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    if (!user) {
      setError("User not logged in");
      return;
    }

    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/videos/displayUnits");
        setVideos(response.data.filter((video) => video.v_year === user.al_year));
      } catch (err) {
        setError("Failed to fetch videos");
      }
    };

    fetchVideos();
  }, [user]);

  const handleOpenPlaylist = (unitId) => {
    Swal.fire({
      title: "Enroll to the video Playlist",
      text: "ඔබ ලියාපදිංචි වූ පසු, ඔබට unit video-playlist නැරඹීම සදහා  මාස 3ක ප්‍රවේශයක් ඇත. ඔබට enroll වීමට අවශ්‍යද?",
      showCancelButton: true,
      confirmButtonText: 'Yes, enroll me!',
      cancelButtonText: 'No, cancel',
      icon: 'warning',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put("http://localhost:8800/api/o_videos/enrollInUnit", {
            userId: user.id,
            unitId: unitId,
            enrollmentStatus: 'enrolled',
            startDate: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
          });
          Swal.fire("Enrolled!", "You have been enrolled!", "success");
          navigate(`/VideoGallery/${unitId}`);
        } catch (err) {
          Swal.fire("Error", "Failed to enroll. Please try again later.", "error");
        }
      } else {
        Swal.fire("Cancelled", "You haven't enrolled.", "info");
      }
    });
  };

  return (
    <div className="bg-gray-200">
      <div className="container my-20 px-2">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            videos.map((video, index) => (
              <div
                key={index}
                className="ml-20 mr-20 bg-white text-white rounded-lg p-10 shadow-md hover:shadow-lg transition duration-300 relative border border-gray-600"
              >
                <h3 className="text-xl text-black font-semibold mb-2">{video.unit_name}</h3>
                <p className="text-black mb-4">{video.unit_description}</p>

                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <button
                    onClick={() => handleOpenPlaylist(video.unit_id)}
                    className="bg-red-500 text-white px-6 mr-5 py-2 mt-4 rounded hover:bg-red-700 transition duration-300"
                  >
                    පන්තියට ඉල්ලුම් කරන්න
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Video3;