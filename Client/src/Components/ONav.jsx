

// import { useState, useEffect } from "react";
// import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import Logo from "../assets/logo.png";

// const ONav = () => {
//   const [user, setUser] = useState(null);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//     if (storedUser && storedUser.first_name && storedUser.last_name) {
//       setUser(storedUser);
//     }
//   }, []);

//   const Links = [
//     { name: "Home", link: "/OHome" },
//     { name: "Video Lessons", link: "/Video2" },
//     { name: "My Lessons", link: "/OMyVideo" },
//     { name: "Instruction", link: "/OInstruction" },
  
//   ];

//   return (
//     <div className="fixed top-4 left-4 right-4 bg-white shadow-md rounded-full z-10">
//       <div className="max-w-screen-xl mx-auto flex justify-between rounded-full items-center pb-3 p-1">
//         <div className="flex cursor-pointer items-center rounded-full gap-2">
//           <img src={Logo} alt="Logo" className="h-12 w-auto" />
//           <span className="font-bold text-3xl text-lightblue ml-3 ">
//             ET LABS
//           </span>
//         </div>

//         <div
//           onClick={() => setOpen(!open)}
//           className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
//         >
//           {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//         </div>

//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 mt-4 transition-all duration-400 ease-in ${
//             open ? "top-12" : "top-[-490px]"
//           }`}
//         >
//           {Links.map((link, index) => (
//             <li
//               key={index}
//               className="md:ml-10 md:my-0 my-7 pr-8 font-semibold"
//             >
//               <a
//                 href={link.link}
//                 className="text-gray-800 hover:text-red-400 duration-500"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//           {user && (
//             <li
//               className="md:ml-8 text-lg font-medium my-2 md:my-0 text-blue-600 flex items-center cursor-pointer"
//               onClick={() => window.location.href = "/OProfile"}
//             >
//               <span className="text-gray-800 hover:text-gray-600 transition duration-300">
//                 {`${user.first_name} ${user.last_name}`}
//               </span>
//               <UserCircleIcon className="ml-2 w-8 h-8 text-gray-800 hover:text-gray-600 transition duration-300" />
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ONav;

import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const ONav = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser && storedUser.first_name && storedUser.last_name) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtkey');
    localStorage.removeItem('user');
    window.location.href = "/SLogin";
  };

  const Links = [
    { name: "Home", link: "/OHome" },
    { name: "Video Lessons", link: "/Video2" },
    { name: "My Lessons", link: "/OMyVideo" },
    { name: "Instruction", link: "/OInstruction" },
  ];

  return (
    <div className="fixed ml-2 mr-5 shadow-md rounded-full bg-gray-100 bg-opacity-50 mt-2 w-full z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between rounded-full items-center">
        <div className="flex cursor-pointer items-center rounded-full gap-2">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
          <span className="font-bold text-3xl text-lightblue ml-3">
            ET LABS
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-400 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className={`md:ml-10 md:my-0 my-7 pr-8 font-semibold ${location.pathname === link.link ? 'text-white' : ''}`}
            >
              <a
                href={link.link}
                className={`text-gray-800 hover:text-red-400 duration-500 ${location.pathname === link.link ? 'text-white' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          {user && (
            <li
              className="md:ml-8 text-1xl font-medium my-2 md:my-0 text-blue-600 flex items-center cursor-pointer"
              onClick={() => window.location.href = "/OProfile"}
            >
              <span className="text-gray-800 hover:text-gray-600 transition duration-300">
                {`${user.first_name} ${user.last_name}`}
              </span>
              <UserCircleIcon className="ml-2 w-8 h-8 text-gray-800 hover:text-gray-600 transition duration-300" />
            </li>
          )}
          <li className='md:ml-8 text-1xl font-medium my-2 md:my-0'>
            <button 
              onClick={handleLogout}
              className='border border-red-400 text-red-400 hover:bg-red-600 hover:text-white transition duration-300 rounded px-2 py-1'
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ONav;
