// import { useEffect, useState } from "react";
// import Adminheader from "../Components/Adminheader";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../firebase";
// import axios from "axios";
// import swal from 'sweetalert';

// const UploadVideo = () => {
//   const [video, setVideo] = useState(null);
//   const [videoperc, setVideoperc] = useState(0);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [videoUnit, setVideoUnit] = useState("");
//   const [vunitId, setVunitId] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   useEffect(() => {
//     if (video) {
//       uploadVideo(video);
//     }
//   }, [video]);

//   const uploadVideo = (file) => {
//     const storage = getStorage(app);
//     const folder = "videos/";
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, folder + fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setVideoperc(Math.round(progress));
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//             break;
//         }
//       },
//       (error) => {
//         console.error("Error during upload:", error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((videoUrl) => {
//           console.log("Download URL:", videoUrl);
//           setVideoUrl(videoUrl);
//         });
//       }
//     );
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
  
//     if (!videoUrl) {
//       console.error("Video URL not available. Please wait until the upload is complete.");
//       return;
//     }
  
//     const payload = {
//       video_link: videoUrl,
//       video_name: videoUnit,
//       vunit_id: vunitId,
//       start_date: startDate,
//       end_date: endDate,
//     };
    
//     console.log("Payload to be sent:", payload);
  
//     try {
//       const response = await axios.post("http://localhost:8800/api/videos/uploadVideo", payload);
//       console.log("Response from server:", response);
//       swal({
//         title: "Good job!",
//         text: "Video uploaded successfully!",
//         icon: "success",
//         button: "Ok",
//       });
//     } catch (error) {
//       console.error("Error uploading video:", error.response ? error.response.data : error.message);
//       alert("Failed to upload video. Please check the console for more details.");
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen">
//       <Adminheader pageName="Add a Notice" />
//       <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//         <header className="text-center mb-6">
//           <h1 className="text-3xl font-bold mb-2">Video Upload</h1>
//           <p className="text-gray-600">Select a video file to upload</p>
//           <label htmlFor="video" className="block mt-4 text-sm text-gray-500">Video:</label>
//           {videoperc > 0 && <p>Uploading: {videoperc}%</p>}
//         </header>
//         <div className="flex flex-col items-center">
//           <input
//             type="file"
//             accept="video/*"
//             id="video"
//             onChange={(e) => setVideo(e.target.files[0])}
//             className="block w-full text-sm text-gray-500
//                        file:mr-4 file:py-2 file:px-4
//                        file:rounded-full file:border-0
//                        file:text-sm file:font-semibold
//                        file:bg-indigo-50 file:text-indigo-700
//                        hover:file:bg-indigo-100 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Video Name"
//             value={videoUnit}
//             onChange={(e) => setVideoUnit(e.target.value)}
//             className="mb-4 p-2 border rounded w-full"
//           />
//           <input
//             type="text"
//             placeholder="Vunit ID"
//             value={vunitId}
//             onChange={(e) => setVunitId(e.target.value)}
//             className="mb-4 p-2 border rounded w-full"
//           />
//           <input
//             type="date"
//             placeholder="Start Date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="mb-4 p-2 border rounded w-full"
//           />
//           <input
//             type="date"
//             placeholder="End Date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="mb-4 p-2 border rounded w-full"
//           />
//           <button
//             onClick={handleUpload}
//             className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md
//                        hover:bg-indigo-700 transition duration-300"
//           >
//             Upload Video
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadVideo;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Adminheader from "../Components/Adminheader";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import swal from 'sweetalert';

const UploadVideo = () => {
  const { unit_id } = useParams(); // Extract unit_id from URL params
  const [video, setVideo] = useState(null);
  const [videoperc, setVideoperc] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoUnit, setVideoUnit] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (video) {
      uploadVideo(video);
    }
  }, [video]);

  const uploadVideo = (file) => {
    const storage = getStorage(app);
    const folder = "videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setVideoperc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.error("Error during upload:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((videoUrl) => {
          console.log("Download URL:", videoUrl);
          setVideoUrl(videoUrl);
        });
      }
    );
  };

  const handleUpload = async (e) => {
    e.preventDefault();
  
    if (!videoUrl) {
      console.error("Video URL not available. Please wait until the upload is complete.");
      return;
    }
  
    const payload = {
      video_link: videoUrl,
      video_name: videoUnit,
      vunit_id: unit_id, // Use the unit_id from URL params
      start_date: startDate,
      end_date: endDate,
    };
    
    console.log("Payload to be sent:", payload);
  
    try {
      const response = await axios.post("http://localhost:8800/api/videos/uploadVideo", payload);
      console.log("Response from server:", response);
      swal({
        title: "Good job!",
        text: "Video uploaded successfully!",
        icon: "success",
        button: "Ok",
      });
    } catch (error) {
      console.error("Error uploading video:", error.response ? error.response.data : error.message);
      alert("Failed to upload video. Please check the console for more details.");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Adminheader pageName="Add a Notice" />
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Video Upload</h1>
          <p className="text-gray-600">Select a video file to upload</p>
          <label htmlFor="video" className="block mt-4 text-sm text-gray-500">Video:</label>
          {videoperc > 0 && <p>Uploading: {videoperc}%</p>}
        </header>
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="video/*"
            id="video"
            onChange={(e) => setVideo(e.target.files[0])}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-indigo-50 file:text-indigo-700
                       hover:file:bg-indigo-100 mb-4"
          />
          <input
            type="text"
            placeholder="Video Name"
            value={videoUnit}
            onChange={(e) => setVideoUnit(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mb-4 p-2 border rounded w-full"
          />
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md
                       hover:bg-indigo-700 transition duration-300"
          >
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
