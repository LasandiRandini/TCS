

// import { useState, useEffect } from 'react';
// import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import Logo from "../assets/logo.png";

// const PNav = () => {
//     const [user, setUser] = useState(null);
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//         if (storedUser && storedUser.first_name && storedUser.last_name) {
//             setUser(storedUser);
//         }

//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('jwtkey');
//         localStorage.removeItem('user');
//         window.location.href = "/SLogin"; 
//     };

//     let Links = [
//         { name: "Home", link: "/PHome" },
//         { name: "Video Lessons", link: "/Video3" },
//         { name: "My Lessons", link: "/MyVideo" },
//         { name: "Practical", link: "/Practical" },
//         { name: "Quiz", link: "/Quiz" },
//         { name: "Instruction", link: "/Instruction" },
//     ];
//     let [open, setOpen] = useState(false);

//     return (
//         <>
//         <div className={`fixed  shadow-md rounded-full  bg-gray-100 bg-opacity-50 mt-2 w-full z-10 `}>
            
//                 <div className='md:px-10  md:flex  max-w-screen-xl mx-auto flex justify-between items-center  '>
//                     <div className="flex items-center cursor-pointer">
//                         <img src={Logo} alt="Logo" className="h-12 w-auto mb-2" />
//                         <span className='font-bold text-2xl text-gray-800  mb-2 ml-3'>ET LABS</span>
//                     </div>

//                     <div className='flex items-center'>
//                         <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
//                             {open ? <XMarkIcon className='w-7 h-7' /> : <Bars3BottomRightIcon className='w-7 h-7' />}
//                         </div>
//                         <ul className={`md:flex md:items-center absolute   md:static md:rounded-full w-full md:w-auto left-0 md:left-auto md:pt-0 pt-4 ease-in ${open ? 'top-16' : 'top-[-400px]'}`}>
//                             {Links.map((link, index) => (
//                                 <li key={index} className='md:ml-12 text-1xl font-medium my-2 md:my-0'>
//                                     <a href={link.link} className='text-gray-800 hover:text-blue-600'>{link.name}</a>
//                                 </li>
//                             ))}
//                             {user && (
//                                 <>
//                                     <li className='md:ml-8 text-1xl font-medium my-2 md:my-0 text-blue-600 flex items-center cursor-pointer' onClick={() => window.location.href = "/PProfile"}>
//                                         <span className='text-gray-800 hover:text-gray-600 transition duration-300'>{`${user.first_name} ${user.last_name}`}</span>
//                                         <UserCircleIcon className="ml-2 w-8 h-8 text-gray-800 hover:text-gray-600 transition duration-300" />
//                                     </li>
//                                     <li className='md:ml-8 text-1xl font-medium my-2 md:my-0'>
//                                         <button 
//                                             onClick={handleLogout}
//                                             className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 rounded px-2 py-1'
//                                         >
//                                             Logout
//                                         </button>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className={`transition-filter duration-300 ${isScrolled ? 'blur-sm' : ''}`}>
//                 {/* Rest of your page content */}
//             </div>
//         </>
//     );
// };

// export default PNav;

// import { useState, useEffect } from 'react';
// import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import Logo from "../assets/logo.png";
// import { useLocation } from 'react-router-dom';

// const PNav = () => {
//     const location = useLocation();
//     const [user, setUser] = useState(null);
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//         if (storedUser && storedUser.first_name && storedUser.last_name) {
//             setUser(storedUser);
//         }

//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('jwtkey');
//         localStorage.removeItem('user');
//         window.location.href = "/SLogin"; 
//     };

//     let Links = [
//         { name: "Home", link: "/PHome" },
//         { name: "Video Lessons", link: "/Video3" },
//         { name: "My Lessons", link: "/MyVideo" },
//         { name: "Practical", link: "/Practical" },
//         { name: "Quiz", link: "/Quiz" },
//         { name: "Instruction", link: "/Instruction" },
//     ];
//     let [open, setOpen] = useState(false);

//     return (
//         <>
//         <div className={`fixed  shadow-md rounded-full  bg-gray-100 bg-opacity-50 mt-2 w-full z-10 `}>
            
//                 <div className='md:px-10  md:flex  max-w-screen-xl mx-auto flex justify-between items-center  '>
//                     <div className="flex items-center cursor-pointer">
//                         <img src={Logo} alt="Logo" className="h-12 w-auto mb-2" />
//                         <span className='font-bold text-2xl text-gray-800  mb-2 ml-3'>ET LABS</span>
//                     </div>

//                     <div className='flex items-center'>
//                         <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
//                             {open ? <XMarkIcon className='w-7 h-7' /> : <Bars3BottomRightIcon className='w-7 h-7' />}
//                         </div>
//                         <ul className={`md:flex md:items-center absolute   md:static md:rounded-full w-full md:w-auto left-0 md:left-auto md:pt-0 pt-4 ease-in ${open ? 'top-16' : 'top-[-400px]'}`}>
//                             {Links.map((link, index) => (
//                                 <li key={index} className='md:ml-12 text-1xl font-medium my-2 md:my-0'>
//                                     <a href={link.link} className={`text-gray-800 hover:text-blue-600 ${location.pathname === link.link ? 'text-white' : ''}`}>{link.name}</a>
//                                 </li>
//                             ))}
//                             {user && (
//                                 <>
//                                     <li className='md:ml-8 text-1xl font-medium my-2 md:my-0 text-blue-600 flex items-center cursor-pointer' onClick={() => window.location.href = "/PProfile"}>
//                                         <span className={`text-gray-800 hover:text-gray-600 transition duration-300 ${location.pathname === '/PProfile' ? 'text-white' : ''}`}>{`${user.first_name} ${user.last_name}`}</span>
//                                         <UserCircleIcon className={`ml-2 w-8 h-8 text-gray-800 hover:text-gray-600 transition duration-300 ${location.pathname === '/PProfile' ? 'text-white' : ''}`} />
//                                     </li>
//                                     <li className='md:ml-8 text-1xl font-medium my-2 md:my-0'>
//                                         <button 
//                                             onClick={handleLogout}
//                                             className='border border-red-700 text-red-700 hover:bg-red-600 hover:text-white transition duration-300 rounded px-2 py-1'
//                                         >
//                                             Logout
//                                         </button>
//                                     </li>
//                                 </>
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className={`transition-filter duration-300 ${isScrolled ? 'blur-sm' : ''}`}>
//                 {/* Rest of your page content */}
//             </div>
//         </>
//     );
// };

// export default PNav;

import { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Logo from "../assets/logo.png";
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PNav = () => {
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    let [open, setOpen] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
        if (storedUser && storedUser.first_name && storedUser.last_name) {
            setUser(storedUser);
        }

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out of the system!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('jwtkey');
                localStorage.removeItem('user');
                window.location.href = "/SLogin";
            }
        });
    };

    let Links = [
        { name: "Home", link: "/PHome" },
        { name: "Video Lessons", link: "/Video3" },
        { name: "My Lessons", link: "/MyVideo" },
        { name: "Practical", link: "/Practical" },
        { name: "Quiz", link: "/Quiz" },
        
    ];

    return (
        <>
            <div className={`fixed shadow-md rounded-full bg-gray-300 bg-opacity-50 mt-2 w-full z-10`}>
                <div className='md:px-10 md:flex max-w-screen-xl mx-auto flex justify-between items-center'>
                    <div className="flex items-center cursor-pointer">
                        <img src={Logo} alt="Logo" className="h-12 w-auto mb-2" />
                        <span className='font-bold text-2xl text-gray-800 mb-2 ml-3'>ET LABS</span>
                    </div>

                    <div className='flex items-center'>
                        <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                            {open ? <XMarkIcon className='w-7 h-7' /> : <Bars3BottomRightIcon className='w-7 h-7' />}
                        </div>
                        <ul className={`md:flex md:items-center absolute md:static md:rounded-full w-full md:w-auto left-0 md:left-auto md:pt-0 pt-4 ease-in ${open ? 'top-16' : 'top-[-400px]'}`}>
                            {Links.map((link, index) => (
                                <li key={index} className='md:ml-12 text-1xl font-medium my-2 md:my-0'>
                                    <a href={link.link} className={`text-gray-800 hover:text-red-200 ${location.pathname === link.link ? 'text-white' : ''}`}>{link.name}</a>
                                </li>
                            ))}
                            {user && (
                                <>
                                    <li className='md:ml-8 text-1xl font-medium my-2 md:my-0 text-blue-600 flex items-center cursor-pointer' onClick={() => window.location.href = "/PProfile"}>
                                        <span className={`text-gray-800 hover:text-gray-600 transition duration-300 ${location.pathname === '/PProfile' ? 'text-white' : ''}`}>{`${user.first_name} ${user.last_name}`}</span>
                                        <UserCircleIcon className={`ml-2 w-8 h-8 text-gray-800 hover:text-gray-600 transition duration-300 ${location.pathname === '/PProfile' ? 'text-white' : ''}`} />
                                    </li>
                                    <li className='md:ml-8 text-1xl font-medium my-2 md:my-0'>
                                        <button 
                                            onClick={handleLogout}
                                            className='border border-red-200 text-black hover:bg-black hover:text-white transition duration-300 rounded px-2 py-1'
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`transition-filter duration-300 ${isScrolled ? 'blur-sm' : ''}`}>
                
            </div>
        </>
    );
};

export default PNav;
