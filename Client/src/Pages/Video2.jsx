


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Modal } from "flowbite-react";
// import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from "../firebase";
// import Swal from "sweetalert2";

// const Video3 = () => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null);
//   const [inputs, setInputs] = useState({ file: null, video_id: null });
//   const [uploadPerc, setUploadPerc] = useState(0);
//   const [openModal, setOpenModal] = useState(false);
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get("http://localhost:8800/api/videos/displayUnits");
//         console.log(response.data);
//         setVideos(response.data.filter((video) => video.v_year === user.al_year));
//       } catch (err) {
//         setError("Failed to fetch videos");
//       }
//     };

//     fetchVideos();
//   }, [user.al_year]);

//   const handleFile = (e) => {
//     setInputs({ ...inputs, file: e.target.files[0] });
//   };

//   const uploadFileToFirebase = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, `uploads/${fileName}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadPerc(Math.round(progress));
//         },
//         (error) => {
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   const handleUpload = async (videoId) => {
//     try {
//       if (!inputs.file) {
//         setError("No file selected");
//         return;
//       }

//       const fileUrl = await uploadFileToFirebase(inputs.file);

//       const formData = {
//         r_unit_id: videoId,
//         u_id: user.id, 
//         fileUrl,
//       };

//       await axios.post("http://localhost:8800/api/o_videos/addReceipt", formData);

//       setInputs({ file: null });
//       setError(null);
//       setUploadPerc(0);
//       setOpenModal(true);

      
//     } catch (err) {
//       setError("Failed to upload receipt");
//     }
//   };

//   const handleOpenPlaylist = async (unitId) => {
//     try {
   
//       const checkReceiptResponse = await axios.post("http://localhost:8800/api/o_videos/checkReceiptStatus", {
//         userId: user.id,
//         unitId: unitId,
//       });

//       if (checkReceiptResponse.data.allowed) {
//         const checkEnrollmentResponse = await axios.post("http://localhost:8800/api/o_videos/checkEnrollment", {
//           userId: user.id,
//           unitId: unitId,
//         });

//         if (checkEnrollmentResponse.data.enrolled) {
//           Swal.fire({
//             title: "Already Enrolled",
//             text: "ඔබ දැනටමත් මෙයට enroll වී ඇත. වීඩියෝ මාලාව මෙතනින් නරඹන්න.",
//             icon: "info",
//             confirmButtonText: "Go to Playlist"
//           }).then(() => {
//             navigate(`/VideoGallery/${unitId}`);
//           });
//         } else {
//           Swal.fire({
//             title: "Enroll to the video Playlist",
//             text: "ඔබ ලියාපදිංචි වූ පසු, ඔබට unit video-playlist නැරඹීම සදහා  මාස 3ක ප්‍රවේශයක් ඇත. ඔබට enroll වීමට අවශ්‍යද?",
//             showCancelButton: true,
//             confirmButtonText: 'Yes, enroll me!',
//             cancelButtonText: 'No, cancel',
//             icon: 'warning',
//           }).then(async (result) => {
//             if (result.isConfirmed) {
//               try {
//                 await axios.put("http://localhost:8800/api/o_videos/enrollInUnit", {
//                   userId: user.id,
//                   unitId: unitId,
//                   enrollmentStatus: 'enrolled',
//                   startDate: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
//                 });
//                 Swal.fire("Enrolled!", "You have been enrolled!", "success");
//                 navigate(`/VideoGallery/${unitId}`);
//               } catch (err) {
//                 Swal.fire("Error", "Failed to enroll. Please try again later.", "error");
//               }
//             }
//           });
//         }
//       } else {
//         Swal.fire("Error", "Permission not granted for this unit. Please check your payment receipt.", "error");
//       }
//     } catch (err) {
//       Swal.fire("Error", "Failed to check receipt status. Please try again later.", "error");
//     }
//   };

//   return (
//     <div className="container mx-auto my-24 px-4 z-10">
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
//         {error ? (
//           <p className="text-red-500">Error: {error}</p>
//         ) : (
//           videos.map((video, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 relative"
//             >
//               <h3 className="text-xl font-semibold mb-2">{video.unit_name}</h3>
//               <p className="text-gray-600 mb-4">{video.unit_description}</p>
//               <p className="text-lg font-bold text-black-500">{video.price} LKR</p>
//               <input
//                 type="file"
//                 id={`file-${index}`}
//                 accept="image/*,.pdf"
//                 onChange={handleFile}
//                 className="hidden"
//               />
//               <label
//                 htmlFor={`file-${index}`}
//                 className="w-1/2 block px-4 py-2 bg-gray-400 text-white rounded-md cursor-pointer hover:bg-blue-400 transition duration-300"
//               >
//                 Upload Receipt
//               </label>
//               <button
//                 onClick={() => handleUpload(video.unit_id)}
//                 className="flex mt-2 px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-700 transition duration-300"
//               >
//                 Submit Receipt
//               </button>
//               {uploadPerc > 0 && (
//                 <div className="w-full bg-gray-200 rounded-full mt-2">
//                   <div
//                     className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
//                     style={{ width: `${uploadPerc}%` }}
//                   >
//                     {uploadPerc}%
//                   </div>
//                 </div>
//               )}
//               <div className="absolute top-0 right-0 mt-10 mr-4">
//               <Button
//                 onClick={() => handleOpenPlaylist(video.unit_id)}
//                 className="bg-red-500 text-white px-6 mr-5 py-2 mt-4 rounded hover:bg-red-700 transition duration-300"
//               >
//                 Enroll Now
//               </Button>
//               </div>
//               <Modal show={openModal} onClose={() => setOpenModal(false)} size="md">
//                 <Modal.Header>
//                   <HiOutlineExclamationCircle className="h-6 w-6 text-red-600 mr-2" />
//                   Receipt Uploaded Successfully
//                 </Modal.Header>
//                 <Modal.Body>
//                   <p>
//                     You have successfully uploaded your receipt. We will review it shortly.
//                     Please check your email for updates.
//                   </p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                   <Button onClick={() => setOpenModal(false)}>Close</Button>
//                 </Modal.Footer>
//               </Modal>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Video3;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "flowbite-react";

// import { useNavigate } from "react-router-dom";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import app from "../firebase";
// import Swal from "sweetalert2";

// const Video3 = () => {
//   const [videos, setVideos] = useState([]);
//   const [error, setError] = useState(null);
//   const [inputs, setInputs] = useState({ file: null, video_id: null });
//   const [uploadPerc, setUploadPerc] = useState(0);
  

//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get("http://localhost:8800/api/videos/displayUnits");
//         console.log(response.data);
//         setVideos(response.data.filter((video) => video.v_year === user.al_year));
//       } catch (err) {
//         setError("Failed to fetch videos");
//       }
//     };

//     fetchVideos();
//   }, [user.al_year]);

//   const handleFile = (e) => {
//     setInputs({ ...inputs, file: e.target.files[0] });
//   };

//   const uploadFileToFirebase = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, `uploads/${fileName}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     return new Promise((resolve, reject) => {
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           setUploadPerc(Math.round(progress));
//         },
//         (error) => {
//           reject(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             resolve(downloadURL);
//           });
//         }
//       );
//     });
//   };

//   const handleUpload = async (videoId) => {
//     try {
//       if (!inputs.file) {
//         setError("No file selected");
//         return;
//       }

//       const fileUrl = await uploadFileToFirebase(inputs.file);

//       const formData = {
//         r_unit_id: videoId,
//         u_id: user.id, 
//         fileUrl,
//       };

//       await axios.post("http://localhost:8800/api/o_videos/addReceipt", formData);

//       setInputs({ file: null });
//       setError(null);
//       setUploadPerc(0);
     

//       // Display success message using swal
//       Swal.fire("ස්තුතියි!", "ඔබගේ සහභාගීත්වයට ස්තුතියි. පාඩම් මාලාව නැරඹීමට අවසරය ලබා දීම පිළිබඳව අපි ඔබට ඊමේල් පණිවිඩයක් මඟින් දැනුම් දෙන්නෙමු.", "success");
//     } catch (err) {
//       setError("Failed to upload receipt");
//     }
//   };

//   const handleOpenPlaylist = async (unitId) => {
//     try {
   
//       const checkReceiptResponse = await axios.post("http://localhost:8800/api/o_videos/checkReceiptStatus", {
//         userId: user.id,
//         unitId: unitId,
//       });

//       if (checkReceiptResponse.data.allowed) {
//         const checkEnrollmentResponse = await axios.post("http://localhost:8800/api/o_videos/checkEnrollment", {
//           userId: user.id,
//           unitId: unitId,
//         });

//         if (checkEnrollmentResponse.data.enrolled) {
//           Swal.fire({
//             title: "Already Enrolled",
//             text: "ඔබ දැනටමත් මෙයට enroll වී ඇත. වීඩියෝ මාලාව මෙතනින් නරඹන්න.",
//             icon: "info",
//             confirmButtonText: "Go to Playlist"
//           }).then(() => {
//             navigate(`/VideoGallery/${unitId}`);
//           });
//         } else {
//           Swal.fire({
//             title: "Enroll to the video Playlist",
//             text: "ඔබ ලියාපදිංචි වූ පසු, ඔබට unit video-playlist නැරඹීම සදහා  මාස 3ක ප්‍රවේශයක් ඇත. ඔබට enroll වීමට අවශ්‍යද?",
//             showCancelButton: true,
//             confirmButtonText: 'Yes, enroll me!',
//             cancelButtonText: 'No, cancel',
//             icon: 'warning',
//           }).then(async (result) => {
//             if (result.isConfirmed) {
//               try {
//                 await axios.put("http://localhost:8800/api/o_videos/enrollInUnit", {
//                   userId: user.id,
//                   unitId: unitId,
//                   enrollmentStatus: 'enrolled',
//                   startDate: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
//                 });
//                 Swal.fire("Enrolled!", "You have been enrolled!", "success");
//                 navigate(`/VideoGallery/${unitId}`);
//               } catch (err) {
//                 Swal.fire("Error", "Failed to enroll. Please try again later.", "error");
//               }
//             }
//           });
//         }
//       } else {
//         Swal.fire("Error", "Permission not granted for this unit. Please check your payment receipt.", "error");
//       }
//     } catch (err) {
//       Swal.fire("Error", "Failed to check receipt status. Please try again later.", "error");
//     }
//   };

//   return (
//     <div className="container mx-auto my-24 px-4">
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
//         {error ? (
//           <p className="text-red-500">Error: {error}</p>
//         ) : (
//           videos.map((video, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 relative"
//             >
//               <h3 className="text-xl font-semibold mb-2">{video.unit_name}</h3>
//               <p className="text-gray-600 mb-4">{video.unit_description}</p>
//               <p className="text-lg font-bold text-black-500">{video.price} LKR</p>
//               <input
//                 type="file"
//                 id={`file-${index}`}
//                 accept="image/*,.pdf"
//                 onChange={handleFile}
//                 className="hidden"
//               />
//               <label
//   htmlFor={`file-${index}`}
//   className="w-1/2 block px-4 py-2 bg-gray-400 text-white rounded-md cursor-pointer hover:bg-blue-400 transition duration-300"
// >
//   {inputs.file ? inputs.file.name : "Upload Receipt"}
// </label>

//               <button
//                 onClick={() => handleUpload(video.unit_id)}
//                 className="flex mt-2 px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-700 transition duration-300"
//               >
//                 Submit Receipt
//               </button>
//               {uploadPerc > 0 && (
//                 <div className="w-full bg-gray-200 rounded-full mt-2">
//                   <div
//                     className="bg-white-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
//                     style={{ width: `${uploadPerc}%` }}
//                   >
//                     {uploadPerc}%
//                   </div>
//                 </div>
//               )}
//               <div className="absolute top-0 right-0 mt-10 mr-4">
//                 <Button
//                   onClick={() => handleOpenPlaylist(video.unit_id)}
//                   className="bg-red-500 text-white px-6 mr-5 py-2 mt-4 rounded hover:bg-red-700 transition duration-300"
//                 >
//                   Enroll Now
//                 </Button>
//               </div>
             
                 
                
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Video3;







import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "flowbite-react";

import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import Swal from "sweetalert2";

const Video3 = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({});
  const [uploadPercentages, setUploadPercentages] = useState({});

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

 
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/videos/displayUnits");
        console.log(response.data);
        setVideos(response.data.filter((video) => video.v_year === user.al_year));
      } catch (err) {
        setError("Failed to fetch videos");
        // Display error message using swal
        Swal.fire("Error", "Failed to fetch videos. Please try again later.", "error");
      }
    };
  
    fetchVideos();
  }, [user.al_year]);
  const handleFile = (e, index) => {
    const file = e.target.files[0];
    setInputs({ ...inputs, [index]: file });
  };

  const uploadFileToFirebase = (file, index) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `uploads/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadPercentages({ ...uploadPercentages, [index]: Math.round(progress) });
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  


  const handleUpload = async (videoId, index) => {
    try {
      const file = inputs[index];
      if (!file) {
  
        // Display error message using swal
        Swal.fire("Error", "No file selected. Please choose a file to upload.", "error");
        return;
      }
  
      const fileUrl = await uploadFileToFirebase(file, index);
  
      const formData = {
        r_unit_id: videoId,
        u_id: user.id,
        fileUrl,
      };
  
      await axios.post("http://localhost:8800/api/o_videos/addReceipt", formData);
  
      setInputs({ ...inputs, [index]: null });
      setError(null);
      setUploadPercentages({ ...uploadPercentages, [index]: 0 });
  
      // Display success message using swal
      Swal.fire(
        "ස්තුතියි!",
        "ඔබගේ සහභාගීත්වයට ස්තුතියි. පාඩම් මාලාව නැරඹීමට අවසරය ලබා දීම පිළිබඳව අපි ඔබට ඊමේල් පණිවිඩයක් මඟින් දැනුම් දෙන්නෙමු.",
        "success"
      );
    } catch (err) {
      
      // Display error message using swal
      Swal.fire("Error", "Failed to upload receipt. Please try again later.", "error");
    }
  };
  const handleOpenPlaylist = async (unitId) => {
    try {
      const checkReceiptResponse = await axios.post("http://localhost:8800/api/o_videos/checkReceiptStatus", {
        userId: user.id,
        unitId: unitId,
      });

      if (checkReceiptResponse.data.allowed) {
        const checkEnrollmentResponse = await axios.post("http://localhost:8800/api/o_videos/checkEnrollment", {
          userId: user.id,
          unitId: unitId,
        });

        if (checkEnrollmentResponse.data.enrolled) {
          Swal.fire({
            title: "Already Enrolled",
            text: "ඔබ දැනටමත් මෙයට enroll වී ඇත. වීඩියෝ මාලාව මෙතනින් නරඹන්න.",
            icon: "info",
            confirmButtonText: "Go to Playlist"
          }).then(() => {
            navigate(`/VideoGallery/${unitId}`);
          });
        } else {
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
            }
          });
        }
      } else {
        Swal.fire("Error", "Permission not granted for this unit. Please check your payment receipt.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Failed to check receipt status. Please try again later.", "error");
    }
  };

  return (
    <div className="container mx-auto my-24 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        {error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          videos.map((video, index) => (
            <div
              key={index}
              className="ml-20 mr-20 bg-white text-white rounded-lg p-5 shadow-md hover:shadow-lg transition duration-300 relative border border-gray-600"
              >
              <h3  className="text-xl text-black font-semibold mb-2">{video.unit_name}</h3>
              <p className="text-gray-600 mb-4">{video.unit_description}</p>
              <p className="text-lg font-bold text-black-500">{video.price} LKR</p>
              <input
                type="file"
                id={`file-${index}`}
                accept="image/*,.pdf"
                onChange={(e) => handleFile(e, index)}
                className="hidden"
              />
              <label
                htmlFor={`file-${index}`}
                className="w-1/4 block px-4 py-2 bg-gray-400 text-white rounded-md cursor-pointer hover:bg-blue-400 transition duration-300"
              >
                {inputs[index] ? inputs[index].name : "Upload Receipt"}
              </label>
              <button
                onClick={() => handleUpload(video.unit_id, index)}
                className="flex mt-2 px-4 py-2 bg-red-800 text-white rounded-md cursor-pointer hover:bg-green-700 transition duration-300"
              >
                Submit Receipt
              </button>
              {uploadPercentages[index] > 0 && (
                <div className="w-full bg-gray-100 rounded-full mt-2">
                  <div
                    className=" text-xl bg-gray-100 font-medium text-blue-800 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${uploadPercentages[index]}%` }}
                  >
                    {uploadPercentages[index]}%
                  </div>
                </div>
              )}
         

<div className="absolute top-0 right-0 mt-10 mr-4">
  <Button
    onClick={() => handleOpenPlaylist(video.unit_id)}
    className="bg-red-500 text-white px-6 mr-5  mt-12 rounded hover:bg-red-700 transition duration-300"
  >
    {video.enrollmentStatus === "enrolled" ? "වීඩියෝ මාලාව නරඹන්න" : "පන්තියට ඉල්ලුම් කරන්න"}
  </Button>
</div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Video3;
