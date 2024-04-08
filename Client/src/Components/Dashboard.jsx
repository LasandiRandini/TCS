// Navbar.js
import  { useState } from 'react';


const Dashboard = () => {
  const [videoMenuOpen, setVideoMenuOpen] = useState(false);

  const toggleVideoMenu = () => {
    setVideoMenuOpen(!videoMenuOpen);
  };

 
  


  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-xl font-bold mb-4">Dashboard</div>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Home</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded" onClick={toggleVideoMenu}>
            Video
          </a>
          {videoMenuOpen && (
            <ul className="ml-4">
              <li className="mb-2">
                <a href="/AVideo" className="hover:bg-gray-700 px-4 py-2 block rounded">Add Video</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Delete Video</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">View Videos</a>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Notices</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Practical</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Settings</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Student Handle</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:bg-gray-700 px-4 py-2 block rounded">Quizzes</a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
