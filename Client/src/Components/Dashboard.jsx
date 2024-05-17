import { useState } from 'react';

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Close the menu if it's already open
    } else {
      setActiveMenu(menu); // Open the selected menu
    }
  };

  return (
    <div className="bg-gray-800 text-white w-60 min-h-screen p-4  ">
      <div className="text-xl font-bold mb-4">Admin Panel</div>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 font-bold block rounded">Admin</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded" onClick={() => toggleMenu('video')}>
            Video {activeMenu === 'video' ? '▾' : '▸'}
          </a>
          {activeMenu === 'video' && (
            <ul className="ml-4">
              <li className="mb-2">
                <a href="/AVideo" className="hover:bg-gray-700 px-4 py-2 block rounded">Add a Unit</a>
              </li>
              <li className="mb-2">
                <a href="/AVideo2" className="hover:bg-gray-700 px-4 py-2 block rounded">Add a Video</a>
              </li>
              <li className="mb-2">
                <a href="/EditVideo" className="hover:bg-gray-700 px-4 py-2 block rounded">Update Video</a>
              </li>
              <li className="mb-2">
                <a href="/ViewVideo" className="hover:bg-gray-700 px-4 py-2 block rounded">View Videos</a>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded" onClick={() => toggleMenu('payableVideo')}>
            Payable Video {activeMenu === 'payableVideo' ? '▾' : '▸'}
          </a>
          {activeMenu === 'payableVideo' && (
            <ul className="ml-4">
              <li className="mb-2">
                <a href="/AReciepts" className="hover:bg-gray-700 px-4 py-2 block rounded">Check Receipts</a>
              </li>
              <li className="mb-2">
                <a href="/Premission" className="hover:bg-gray-700 px-4 py-2 block rounded">Give Permissions</a>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <a href="/ANotice" className="hover:bg-gray-700 px-4 py-2 block rounded">Notices</a>
        </li>
        <li className="mb-2">
          <a href="/APractical" className="hover:bg-gray-700 px-4 py-2 block rounded">Practical</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded" onClick={() => toggleMenu('studentHandle')}>
            Student Handle {activeMenu === 'studentHandle' ? '▾' : '▸'}
          </a>
          {activeMenu === 'studentHandle' && (
            <ul className="ml-4">
              <li className="mb-2">
                <a href="/AddStudent" className="hover:bg-gray-700 px-4 py-2 block rounded">Add a Student</a>
              </li>
              <li className="mb-2">
                <a href="/ChangeSS" className="hover:bg-gray-700 px-4 py-2 block rounded">Change Status</a>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Settings</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Quizzes</a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
