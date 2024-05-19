import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-gray-800 text-white w-full md:w-60 min-h-screen p-4">
      <div className="text-xl font-bold mb-4">Admin Panel</div>
      <ul className="space-y-2">
        <li>
          <Link to="/admin" className={`hover:bg-gray-700 px-4 py-2 font-bold block rounded transition duration-200 ${isActive('/admin') ? 'bg-gray-700' : ''}`}>Admin</Link>
        </li>
        <li>
          <Link to="/home" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/home') ? 'bg-gray-700' : ''}`}>Home</Link>
        </li>
        <li>
          <button
            className="hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 flex justify-between items-center w-full text-left"
            onClick={() => toggleMenu('video')}
          >
            Video {activeMenu === 'video' ? '▾' : '▸'}
          </button>
          {activeMenu === 'video' && (
            <ul className="ml-4 space-y-2 mt-2">
              <li>
                <Link to="/AVideo" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/AVideo') ? 'bg-gray-700' : ''}`}>Add a Unit</Link>
              </li>
              <li>
                <Link to="/AVideo2" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/AVideo2') ? 'bg-gray-700' : ''}`}>Add a Video</Link>
              </li>
              <li>
                <Link to="/EditVideo" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/EditVideo') ? 'bg-gray-700' : ''}`}>Update Video</Link>
              </li>
              <li>
                <Link to="/ViewVideo" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/ViewVideo') ? 'bg-gray-700' : ''}`}>View Videos</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            className="hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 flex justify-between items-center w-full text-left"
            onClick={() => toggleMenu('payableVideo')}
          >
            Payable Video {activeMenu === 'payableVideo' ? '▾' : '▸'}
          </button>
          {activeMenu === 'payableVideo' && (
            <ul className="ml-4 space-y-2 mt-2">
              <li>
                <Link to="/AReciepts" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/AReciepts') ? 'bg-gray-700' : ''}`}>Check Receipts</Link>
              </li>
              <li>
                <Link to="/Premission" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/Premission') ? 'bg-gray-700' : ''}`}>Give Permissions</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/ANotice" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/ANotice') ? 'bg-gray-700' : ''}`}>Notices</Link>
        </li>
        <li>
          <button
            className="hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 flex justify-between items-center w-full text-left"
            onClick={() => toggleMenu('practicalHandle')}
          >
            Practical Handle {activeMenu === 'practicalHandle' ? '▾' : '▸'}
          </button>
          {activeMenu === 'practicalHandle' && (
            <ul className="ml-4 space-y-2 mt-2">
              <li>
                <Link to="/APractical" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/APractical') ? 'bg-gray-700' : ''}`}>Add Practical</Link>
              </li>
              <li>
                <Link to="/DeletePractical" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/DeletePractical') ? 'bg-gray-700' : ''}`}>Delete Practical</Link>
              </li>
              <li>
                <Link to="/AddTimeslots" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/AddTimeslots') ? 'bg-gray-700' : ''}`}>Add Timeslots</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            className="hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 flex justify-between items-center w-full text-left"
            onClick={() => toggleMenu('studentHandle')}
          >
            Student Handle {activeMenu === 'studentHandle' ? '▾' : '▸'}
          </button>
          {activeMenu === 'studentHandle' && (
            <ul className="ml-4 space-y-2 mt-2">
              <li>
                <Link to="/AddStudent" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/AddStudent') ? 'bg-gray-700' : ''}`}>Register Student</Link>
              </li>
              <li>
                <Link to="/AddNIcs" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/AddNIcs') ? 'bg-gray-700' : ''}`}>Add NICs</Link>
              </li>
              <li>
                <Link to="/DeleteStudent" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/DeleteStudent') ? 'bg-gray-700' : ''}`}>Delete a Student</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Settings" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/Settings') ? 'bg-gray-700' : ''}`}>Settings</Link>
        </li>
        <li>
          <Link to="/Quizzes" className={`hover:bg-gray-700 px-4 py-2 block rounded transition duration-200 ${isActive('/Quizzes') ? 'bg-gray-700' : ''}`}>Quizzes</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
