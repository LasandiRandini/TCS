import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import CLASS from '../assets/class.png';

const Video3 = () => {
  const [videos, setVideos] = useState([]);
  const [enrollmentStatus, setEnrollmentStatus] = useState({});
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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
        const videoData = response.data.filter((video) => video.v_year === user.al_year);

        const statusPromises = videoData.map((video) =>
          axios.post("http://localhost:8800/api/o_videos/checkEnrollment", {
            userId: user.id,
            unitId: video.unit_id,
          }).then((res) => ({
            unitId: video.unit_id,
            enrolled: res.data.enrolled,
          }))
        );

        const statuses = await Promise.all(statusPromises);

        const statusMap = {};
        statuses.forEach((status) => {
          statusMap[status.unitId] = status.enrolled;
        });

        const sortedVideos = videoData.sort((a, b) => {
          return statusMap[a.unit_id] - statusMap[b.unit_id];
        });

        setVideos(sortedVideos);
        setEnrollmentStatus(statusMap);
      } catch (err) {
        setError("Failed to fetch videos");
      }
    };

    fetchVideos();
  }, [user]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredVideos = videos.filter((video) =>
    video.unit_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenPlaylist = async (unitId) => {
    try {
      const checkEnrollmentResponse = await axios.post("http://localhost:8800/api/o_videos/checkEnrollment", {
        userId: user.id,
        unitId: unitId,
      });

      if (checkEnrollmentResponse.data.enrolled) {
        Swal.fire({
          title: "Already Enrolled",
          text: "You are already enrolled in this unit. Redirecting to the playlist.",
          icon: "info",
          confirmButtonText: "Go to Playlist",
        }).then(() => {
          navigate(`/VideoGallery/${unitId}`);
        });
      } else {
        Swal.fire({
          title: "වීඩියෝ මාලාව සදහා enroll වෙන්න.",
          text: "ඔබ පාඩම් මාලාව සදහා enroll වු පසු වීඩියෝ මාලාව නැරඹීමට ඔබට මාස 3 ක කාලයක් ඇත",
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
                startDate: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
              });
              Swal.fire("Enrolled!", "You have been enrolled!", "success");
              setEnrollmentStatus((prevStatus) => ({ ...prevStatus, [unitId]: true }));
              navigate(`/VideoGallery/${unitId}`);
            } catch (err) {
              Swal.fire("Error", "Failed to enroll. Please try again later.", "error");
            }
          }
        });
      }
    } catch (err) {
      Swal.fire("Error", "Failed to check enrollment status. Please try again later.", "error");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${CLASS})` }}
    >
      <div className="container my-20 px-2 md:px-12 p-4 text-white min-h-screen">
        <input
          type="text"
          placeholder="Search by Unit Name"
          className="border border-gray-400 bg-black  bg-opacity-40 rounded-md mb-4 px-3 py-2 mt-4 w-1/4"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
          {error ? (
            <p className="text-red-200">Error: {error}</p>
          ) : (
            filteredVideos.map((video, index) => (
              <div
                key={index}
                className="ml-20 mr-20 bg-black bg-opacity-40 text-white   font-semibold rounded-lg p-10 shadow-md hover:shadow-lg transition duration-300 relative border border-gray-600"
              >
                <h3 className="text-xl text-white font-2xl font-semibold mb-2">{video.unit_name}</h3>
                <p className="text-white font-2xl mb-4">{video.unit_description}</p>

                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <button
                    onClick={() => handleOpenPlaylist(video.unit_id)}
                    className={`bg-red-500  font-semibold text-white px-6 mr-5 py-2 mt-4 rounded hover:bg-red-700 transition duration-300 ${
                      enrollmentStatus[video.unit_id] ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={enrollmentStatus[video.unit_id]}
                  >
          වීඩියෝ මාලාව සදහා enroll වෙන්න
                     
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
