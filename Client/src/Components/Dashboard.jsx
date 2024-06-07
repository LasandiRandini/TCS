// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";

// const Dashboard = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const location = useLocation();

//   const toggleMenu = (menu) => {
//     if (activeMenu === menu) {
//       setActiveMenu(null);
//     } else {
//       setActiveMenu(menu);
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <div className="bg-white  w-full md:w-60 min-h-screen fixed shadow-md p-4 ">
//       <div className="text-blue mb-4 text-text-primary font-inter font-bold  h-16 flex justify-between text-2xl p-3">Admin Panel</div>
//       <ul className="space-y-2">
//         <li>
//           <Link
//             to="/home"
//             className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-900 duration-200 ${
//               isActive("/home") ? "bg-white" : ""
//             }`}
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 text-gray-900 flex justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("video")}
//           >
//             Video {activeMenu === "video" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "video" && (
//             <ul className="ml-4 space-y-2 mt-2">
             
              
//               <li>
//                 <Link
//                   to="/EditVideo"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/EditVideo") ? "bg-white" : ""
//                   }`}
//                 >
//                   Update Video Unit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/EditVideoList"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/EditVideoList") ? "bg-white" : ""
//                   }`}
//                 >
//                   Update Videos
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/ViewVideo"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/ViewVideo") ? "bg-white" : ""
//                   }`}
//                 >
//                   View Videos
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("payableVideo")}
//           >
//             Payable Video {activeMenu === "payableVideo" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "payableVideo" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/AReciepts"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/AReciepts") ? "bg-white" : ""
//                   }`}
//                 >
//                   Check Receipts
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Premission"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/Premission") ? "bg-white" : ""
//                   }`}
//                 >
//                   Give Permissions
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("notice")}
//           >
//             Notices Handle {activeMenu === "notice" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "notice" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/ANotice"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/ANotice") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add Notice
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/EditNotice"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/EditNotice") ? "bg-white" : ""
//                   }`}
//                 >
//                   Edit Notice
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("practicalHandle")}
//           >
//             Practical Handle {activeMenu === "practicalHandle" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "practicalHandle" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/APractical"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/APractical") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add Practical
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/DeletePractical"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/DeletePractical") ? "bg-white" : ""
//                   }`}
//                 >
//                   Delete Practical
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/AddTimeslots"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/AddTimeslots") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add Timeslots
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/GetCount"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/GetCount") ? "bg-white" : ""
//                   }`}
//                 >
//                   Count of Students
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("studentHandle")}
//           >
//             Student Handle {activeMenu === "studentHandle" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "studentHandle" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/AddStudent"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/AddStudent") ? "bg-white" : ""
//                   }`}
//                 >
//                   Register Student
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/AddNIcs"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/AddNIcs") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add NICs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/DeleteStudent"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/DeleteStudent") ? "bg-white" : ""
//                   }`}
//                 >
//                   Delete a Student
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <Link
//             to="/Settings"
//             className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-900 duration-200 ${
//               isActive("/Settings") ? "bg-white" : ""
//             }`}
//           >
//             Settings
//           </Link>
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex  text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("quiz")}
//           >
//             Quizzes Handle {activeMenu === "quiz" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "quiz" && (
//             <ul className="ml-4 space-y-2 mt-2">
              
//               <li>
//                 <Link
//                   to="/UpdateQuiz"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/UpdateQuiz") ? "bg-white" : ""
//                   }`}
//                 >
//                   Update Quiz
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;






// import { useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faVideo,
//   faDollarSign,
//   faBell,
//   faUserGraduate,
//   faQuestionCircle,
//   faSignOutAlt
// } from "@fortawesome/free-solid-svg-icons";

// const Dashboard = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const location = useLocation();

//   const toggleMenu = (menu) => {
//     if (activeMenu === menu) {
//       setActiveMenu(null);
//     } else {
//       setActiveMenu(menu);
//     }
//   };

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <div className="bg-white w-full md:w-60 min-h-screen fixed shadow-md p-4">
//       <div className="text-blue mb-4 text-text-primary font-inter font-bold h-16 flex justify-between items-center text-2xl p-3">
//         Admin Panel
//       </div>
//       <ul className="space-y-2 flex-1">
//         <li>
//           <Link
//             to="/home"
//             className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-900 duration-200 ${
//               isActive("/home") ? "bg-white" : ""
//             }`}
//           >
//             <FontAwesomeIcon icon={faHome} />
//             <span className="ml-2">Home</span>
//           </Link>
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 text-gray-900 flex justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("video")}
//           >
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faVideo} />
//               <span className="ml-2">Video</span>
//             </div>
//             {activeMenu === "video" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "video" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/EditVideo"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/EditVideo") ? "bg-white" : ""
//                   }`}
//                 >
//                   Update Video Unit
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/EditVideoList"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/EditVideoList") ? "bg-white" : ""
//                   }`}
//                 >
//                   Update Videos
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("payableVideo")}
//           >
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faDollarSign} />
//               <span className="ml-2">Payable Video</span>
//             </div>
//             {activeMenu === "payableVideo" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "payableVideo" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/AReciepts"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/AReciepts") ? "bg-white" : ""
//                   }`}
//                 >
//                   Check Receipts
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("notice")}
//           >
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faBell} />
//               <span className="ml-2">Notices Handle</span>
//             </div>
//             {activeMenu === "notice" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "notice" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/ANotice"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/ANotice") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add Notice
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/EditNotice"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/EditNotice") ? "bg-white" : ""
//                   }`}
//                 >
//                   Edit Notice
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <button
//             className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
//             onClick={() => toggleMenu("practicalHandle")}
//           >
//             <div className="flex items-center">
//               <FontAwesomeIcon icon={faUserGraduate} />
//               <span className="ml-2">Practical Handle</span>
//             </div>
//             {activeMenu === "practicalHandle" ? "▾" : "▸"}
//           </button>
//           {activeMenu === "practicalHandle" && (
//             <ul className="ml-4 space-y-2 mt-2">
//               <li>
//                 <Link
//                   to="/APractical"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/APractical") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add Practical
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/DeletePractical"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/DeletePractical") ? "bg-white" : ""
//                   }`}
//                 >
//                   Delete Practical
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/AddTimeslots"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/AddTimeslots") ? "bg-white" : ""
//                   }`}
//                 >
//                   Add Timeslots
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/GetCount"
//                   className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
//                     isActive("/GetCount") ? "bg-white" : ""
//                   }`}
//                 >
//                   Count of Students
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//         <li>
//           <Link
//             to="/Help"
//             className={`hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 items-center ${
//               isActive("/Help") ? "bg-white" : ""
//             }`}
//           >
//             <FontAwesomeIcon icon={faQuestionCircle} />
//             <span className="ml-2">Help</span>
//           </Link>
//         </li>
//       </ul>
//       <div className="absolute bottom-0 w-full">
//         <Link
//           to="/logout"
//           className="hover:bg-red-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 items-center"
//         >
//           <FontAwesomeIcon icon={faSignOutAlt} />
//           <span className="ml-2">Logout</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaHome, FaVideo, FaReceipt, FaBell, FaFlask, FaUser, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-white w-full md:w-60 min-h-screen fixed shadow-md p-4 flex flex-col justify-between">
      <div>
        <div className="text-blue mb-4 text-text-primary font-inter font-bold h-16 flex justify-between text-2xl p-3">
          Admin Panel
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              to="/home"
              className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-900 duration-200 ${
                isActive("/home") ? "bg-white" : ""
              }`}
            >
              <FaHome className="inline-block mr-2" /> Home
            </Link>
          </li>
          <li>
            <button
              className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 text-gray-900 flex justify-between items-center w-full text-left"
              onClick={() => toggleMenu("video")}
            >
              <FaVideo className="inline-block mr-2" /> Video {activeMenu === "video" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {activeMenu === "video" && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/EditVideo"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/EditVideo") ? "bg-white" : ""
                    }`}
                  >
                    Update Video Unit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EditVideoList"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/EditVideoList") ? "bg-white" : ""
                    }`}
                  >
                    Update Videos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ViewVideo"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/ViewVideo") ? "bg-white" : ""
                    }`}
                  >
                    View Videos
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
              onClick={() => toggleMenu("payableVideo")}
            >
              <FaReceipt className="inline-block mr-2" /> Payable Video {activeMenu === "payableVideo" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {activeMenu === "payableVideo" && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/AReciepts"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/AReciepts") ? "bg-white" : ""
                    }`}
                  >
                    Check Receipts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Premission"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/Premission") ? "bg-white" : ""
                    }`}
                  >
                    Give Permissions
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
              onClick={() => toggleMenu("notice")}
            >
              <FaBell className="inline-block mr-2" /> Notices Handle {activeMenu === "notice" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {activeMenu === "notice" && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/ANotice"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/ANotice") ? "bg-white" : ""
                    }`}
                  >
                    Add Notice
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EditNotice"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/EditNotice") ? "bg-white" : ""
                    }`}
                  >
                    Edit Notice
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="hover:bg-blue-200 px-4 py-2  rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
              onClick={() => toggleMenu("practicalHandle")}
            >
              <FaFlask className="inline-block mr-2" /> Practical Handle {activeMenu === "practicalHandle" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {activeMenu === "practicalHandle" && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/APractical"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/APractical") ? "bg-white" : ""
                    }`}
                  >
                    Add Practical
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DeletePractical"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/DeletePractical") ? "bg-white" : ""
                    }`}
                  >
                    Update Practical
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AddTimeslots"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/AddTimeslots") ? "bg-white" : ""
                    }`}
                  >
                    Add Timeslots
                  </Link>
                </li>
                <li>
                  <Link
                    to="/GetCount"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/GetCount") ? "bg-white" : ""
                    }`}
                  >
                    Count of Students
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
              onClick={() => toggleMenu("studentHandle")}
            >
              <FaUser className="inline-block mr-2" /> Student Handle {activeMenu === "studentHandle" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {activeMenu === "studentHandle" && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/AddStudent"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/AddStudent") ? "bg-white" : ""
                    }`}
                  >
                    Register Student
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AddNIcs"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/AddNIcs") ? "bg-white" : ""
                    }`}
                  >
                    Add NICs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DeleteStudent"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/DeleteStudent") ? "bg-white" : ""
                    }`}
                  >
                    Delete a Student
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 flex text-gray-900 justify-between items-center w-full text-left"
              onClick={() => toggleMenu("quiz")}
            >
              <FaQuestionCircle className="inline-block mr-2" /> Quizzes Handle {activeMenu === "quiz" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {activeMenu === "quiz" && (
              <ul className="ml-4 space-y-2 mt-2">
                <li>
                  <Link
                    to="/UpdateQuiz"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/UpdateQuiz") ? "bg-white" : ""
                    }`}
                  >
                    Update Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/QuizList"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-400 text-sm duration-200 ${
                      isActive("/QuizList") ? "bg-white" : ""
                    }`}
                  >
                     Quiz Result
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <Link
          to="/logout"
          className="hover:bg-blue-200 px-4 py-2 block rounded transition duration-200 text-gray-900"
        >
          <FaSignOutAlt className="inline-block mr-2" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
