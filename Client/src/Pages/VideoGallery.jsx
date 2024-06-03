

// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VideoGallery = () => {
//   const { unitId } = useParams(); // Extract unitId from URL parameters
//   const [videos, setVideos] = useState([]);
//   const [unitName, setUnitName] = useState('');

//   useEffect(() => {
//     // Fetch videos by unitId
//     axios.get(`http://localhost:8800/api/o_videos/getVideosByUnitId/${unitId}`)
//       .then(response => {
//         if (response.data.length > 0) {
//           setUnitName(response.data[0].unit_name); 
//           setVideos(response.data); 
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, [unitId]); 

//   return (
//     <div className="container my-20 px-2 md:px-12 p-4  min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">{unitName}</h1>
//       <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
//         {videos.map(video => (
//           <div key={video.video_id} className="video-item flex flex-col items-center">
//             <video className="w-full h-auto" controls>
//               <source src={video.video_link} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className="mt-2 text-center">{video.video_name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;


// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const VideoGallery = () => {
//   const { unitId } = useParams();
//   const [videos, setVideos] = useState([]);
//   const [unitName, setUnitName] = useState('');
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8800/api/o_videos/getVideosByUnitId/${unitId}`)
//       .then(response => {
//         if (response.data.length > 0) {
//           setUnitName(response.data[0].unit_name);
//           setVideos(response.data);
//           setSelectedVideo(response.data[0]);
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, [unitId]);

//   return (
//     <div className="container my-20 px-2 md:px-12 p-4  min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">{unitName}</h1>
//       <div className="flex flex-col lg:flex-row">
//         {/* Video Player */}
//         <div className="flex-1 lg:mr-6 mb-6 lg:mb-0">
//           {selectedVideo && (
//             <div className="video-player">
//               <video className="w-full h-auto" controls>
//                 <source src={selectedVideo.video_link} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="mt-2 text-center text-xl">{selectedVideo.video_name}</div>
//             </div>
//           )}
//         </div>

//         {/* Video Playlist */}
//         <div className="w-full lg:w-1/3">
//           <div className="playlist bg-gray-100 p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Videos in this course: {videos.length}</h2>
//             <ul className="space-y-2">
//               {videos.map(video => (
//                 <li
//                   key={video.video_id}
//                   onClick={() => setSelectedVideo(video)}
//                   className={`p-2 cursor-pointer rounded-md ${selectedVideo && selectedVideo.video_id === video.video_id ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-100'}`}
//                 >
//                   {video.video_name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const VideoGallery = () => {
  const { unitId } = useParams();
  const [videos, setVideos] = useState([]);
  const [unitName, setUnitName] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8800/api/o_videos/getVideosByUnitId/${unitId}`)
      .then(response => {
        if (response.data.length > 0) {
          setUnitName(response.data[0].unit_name);
          setVideos(response.data);
          setSelectedVideo(response.data[0]);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [unitId]);

  return (
    <div className="container my-20 px-2 md:px-12 p-4  min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{unitName}</h1>
      <div className="flex flex-col lg:flex-row">
        {/* Video Player */}
        <div className="flex-1 lg:mr-6 mb-6 lg:mb-0">
          {selectedVideo && (
            <div className="video-player">
              <video className="w-full h-auto" controls controlsList="nodownload">
                <source src={selectedVideo.video_link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-2 text-center text-xl">{selectedVideo.video_name}</div>
            </div>
          )}
        </div>

        {/* Video Playlist */}
        <div className="w-full lg:w-1/3">
          <div className="playlist bg-gray-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Videos in this course: {videos.length}</h2>
            <ul className="space-y-2">
              {videos.map(video => (
                <li
                  key={video.video_id}
                  onClick={() => setSelectedVideo(video)}
                  className={`p-2 cursor-pointer rounded-md ${selectedVideo && selectedVideo.video_id === video.video_id ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-100'}`}
                >
                  {video.video_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
