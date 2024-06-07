

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
              to="/AHome"
              className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-900 duration-200 ${
                isActive("/AHome") ? "bg-white" : ""
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
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/EditVideo") ? "bg-white" : ""
                    }`}
                  >
                    Update Video Unit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EditVideoList"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/EditVideoList") ? "bg-white" : ""
                    }`}
                  >
                    Update Videos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ViewVideo"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
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
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/AReciepts") ? "bg-white" : ""
                    }`}
                  >
                    Check Receipts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Premission"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
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
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/ANotice") ? "bg-white" : ""
                    }`}
                  >
                    Add Notice
                  </Link>
                </li>
                <li>
                  <Link
                    to="/EditNotice"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
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
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/APractical") ? "bg-white" : ""
                    }`}
                  >
                    Add Practical
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DeletePractical"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/DeletePractical") ? "bg-white" : ""
                    }`}
                  >
                    Update Practical
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AddTimeslots"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/AddTimeslots") ? "bg-white" : ""
                    }`}
                  >
                    Add Timeslots
                  </Link>
                </li>
                <li>
                  <Link
                    to="/GetCount"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
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
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/AddStudent") ? "bg-white" : ""
                    }`}
                  >
                    Register Student
                  </Link>
                </li>
                <li>
                  <Link
                    to="/AddNIcs"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/AddNIcs") ? "bg-white" : ""
                    }`}
                  >
                    Add NICs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/DeleteStudent"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
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
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/UpdateQuiz") ? "bg-white" : ""
                    }`}
                  >
                    Update Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/QuizList"
                    className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-500 text-sm duration-200 ${
                      isActive("/QuizList") ? "bg-white" : ""
                    }`}
                  >
                     Quiz Result
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/home"
              className={`hover:bg-blue-200 px-4 py-2 block rounded transition text-gray-900 duration-200 ${
                isActive("/home") ? "bg-white" : ""
              }`}
            >
              <FaHome className="inline-block mr-2" /> Settings
            </Link>
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
