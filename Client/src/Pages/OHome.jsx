
// import teacher from "../assets/teacher.png";
// import magazine from "../assets/Mag.jpg";
// import {Link} from 'react-router-dom';
// import CLASS from '../assets/class.png';

// const OHome = () => {
//   const [notices, setNotices] = useState([]);
//   const [eventsError, setEventsError] = useState(null);
//   const [noticesError, setNoticesError] = useState(null);
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   const fetchNotices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/Notices/getNotice');
//       setNotices(response.data);
//     } catch (err) {
//       setNoticesError(err.response ? err.response.data.message : 'Network Error');
//     }
//   };

//   Promise.all([fetchEvents(), fetchNotices()]).finally(() => setLoading(false));
// }, [user.al_year]);
 
//   return (
//     <>
//     <div className="md:px-12 p-4 mt-20 min-h-screen">
//     <div
//         className="background-image"
//         style={{ backgroundImage: `url(${CLASS})` }}
//       ></div>
    

//       {/* Banner content */}
//       <div className="md:px-10 p-4 max-w-screen-2xl mx-auti ">
//         <div className="gradienBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9">
//           <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
//             <div className="md:w-3/5">
//               <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer leading-relaxed">
//                 Welcome to Enginnering Technology LABS
//               </h2>
//               <p className="text-[#EBEBEB] text-2xl mb-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
//                 Join Mr. Buwanekabahu Muthukumarana engineering technology
//                 tuition classes for expert guidance in electrical, mechanical,
//                 and computer science topics. Our interactive sessions foster
//                 hands-on learning and critical thinking, preparing students for
//                 success in engineering technology
//               </p>

//               <div>
//               <Link to="/PSignup">
//   <button
//     className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
//   >
//     Register Here
//   </button>
// </Link>
//               </div>
//             </div>
//             <div>
//               <img src={teacher} alt="" className="lg:h-[500px] hover:-translate-y-4 transition-all duration-300 cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
//         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
//           {noticesError ? (
//             <p className="text-red-500">Error: {noticesError}</p>
//           ) : (
//             notices.map((notice, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
//                 <div className="overflow-hidden">
//                   <p className="md:text-2xl text-xl text-center font-bold mb-6">{notice.name}</p>
//                   <p className="text-lg mb-6">{notice.n_description}</p>
//                   <img src={`http://localhost:8800/public/image/${notice.image}`} alt={notice.image} className="w-full h-auto object-cover" />
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       </div>

//       {/* Magazine */}

//       <div
//         className="md:px-14 p-4 max-w-s 
// my-24 px-4 max-w-screen-2xl mx-auto"
//       >
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="md:w-1/3">
//             <img src={magazine} alt="" className="lg:h-[400px]" />
//           </div>

//           <div className="md:w-4/5">
//             <h2
//               className="md: text-5xl text-3xl font-bold
// text-primary mb-5 leading-normal"
//             >
//               We have been improving our product <span>for many years.</span>
//             </h2>
//             <p className=" text-black text-lg mb-7">
//               {" "}
//               A good example of a paragraph contains a topic conclusion. There
//               are many different kinds of animals that live in China.
//             </p>
//             <button
//               className="py-3 px-8 bg-red-600 font-semibold text-white rounded 
//                                 hover:bg-red-400 transition-all duration-300"
//             >
//               View Magazine
//             </button>
//           </div>
//         </div>
//       </div>
      
    
//     </>
//   );
// };

// export default OHome;

// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import teacher from '../assets/teacher.png';
// import magazine from '../assets/Mag.jpg';
// import CLASS from '../assets/class.png';

// const OHome = () => {
//   const [notices, setNotices] = useState([]);
//   const [eventsError, setEventsError] = useState(null);
//   const [noticesError, setNoticesError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   const fetchNotices = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/Notices/getNotice');
//       setNotices(response.data);
//     } catch (err) {
//       setNoticesError(err.response ? err.response.data.message : 'Network Error');
//     }
//   };


// if (loading) {
//   return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
// }


//   const fetchEvents = async () => {
//     // Implement the fetchEvents function
//     try {
//       // Fetch events logic
//     } catch (err) {
//       setEventsError(err.response ? err.response.data.message : 'Network Error');
//     }
//   };

//   useEffect(() => {
//     Promise.all([fetchEvents(), fetchNotices()]).finally(() => setLoading(false));
//   }, [user.al_year]);

//   return (
//     <>
//       <div className="md:px-12 p-4 mt-20 min-h-screen">
//         <div className="background-image" style={{ backgroundImage: `url(${CLASS})` }}></div>

//         {/* Banner content */}
//         <div className="md:px-10 p-4 max-w-screen-2xl mx-auto">
//           <div className="gradienBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
//             <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
//               <div className="md:w-3/5">
//                 <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer leading-relaxed">
//                   Welcome to Engineering Technology LABS
//                 </h2>
//                 <p className="text-[#EBEBEB] text-2xl mb-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
//                   Join Mr. Buwanekabahu Muthukumaranas engineering technology
//                   tuition classes for expert guidance in electrical, mechanical,
//                   and computer science topics. Our interactive sessions foster
//                   hands-on learning and critical thinking, preparing students for
//                   success in engineering technology.
//                 </p>
//                 <div>
//                   <Link to="/PSignup">
//                     <button className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300">
//                       Register Here
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div>
//                 <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-4 transition-all duration-300 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
//           <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
//             {noticesError ? (
//               <p className="text-red-500">Error: {noticesError}</p>
//             ) : (
//               notices.map((notice, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
//                   <div className="overflow-hidden">
//                     <p className="md:text-2xl text-xl text-center font-bold mb-6">{notice.name}</p>
//                     <p className="text-lg mb-6">{notice.n_description}</p>
//                     <img src={`http://localhost:8800/public/image/${notice.image}`} alt={notice.image} className="w-full h-auto object-cover" />
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Magazine */}
//       <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           <div className="md:w-1/3">
//             <img src={magazine} alt="Magazine" className="lg:h-[400px]" />
//           </div>
//           <div className="md:w-4/5">
//             <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 text-white leading-normal">
//               We have been improving our product <span>for many years.</span>
//             </h2>
//             <p className="text-black text-lg text-red-200 mb-7">
//               A good example of a paragraph contains a topic conclusion. There
//               are many different kinds of animals that live in China.
//             </p>
//             <button className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300">
//               View Magazine
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OHome;

import { useState, useEffect } from 'react';
import axios from 'axios';

import teacher from '../assets/teacher.png';

import ONLINE from '../assets/online.png';
import magazine1 from "../assets/magazine1.jpg";
import magazine2 from "../assets/magazine2.jpg";

const OHome = () => {
  const [notices, setNotices] = useState([]);
  const [ setEventsError] = useState(null);
  const [noticesError, setNoticesError] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/Notices/getNotice');
      setNotices(response.data);
    } catch (err) {
      setNoticesError(err.response ? err.response.data.message : 'Network Error');
    }
  };

  const fetchEvents = async () => {
    try {
      // Fetch events logic
    } catch (err) {
      setEventsError(err.response ? err.response.data.message : 'Network Error');
    }
  };

  useEffect(() => {
    if (user && user.al_year) {
      Promise.all([fetchEvents(), fetchNotices()]).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <>
      <div className="md:px-12 p-4 mt-2  min-h-screen">
        <div className="background-image" style={{ backgroundImage: `url(${ONLINE})` }}></div>

        {/* Banner content */}
        <div className="md:px-10 p-4 max-w-screen-2xl mt-20 mx-auto">
          <div className="gradienBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
              <div className="md:w-3/5">
                <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer leading-relaxed">
                  Welcome to Engineering Technology LABS
                </h2>
                <p className="text-[#EBEBEB] text-2xl mb-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                  Join Mr. Buwanekabahu Muthukumarans engineering technology
                  tuition classes for expert guidance in electrical, mechanical,
                  and computer science topics. Our interactive sessions foster
                  hands-on learning and critical thinking, preparing students for
                  success in engineering technology.
                </p>
                
                
              </div>
              <div>
                <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-4 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
            {noticesError ? (
              <p className="text-red-500">Error: {noticesError}</p>
            ) : (
              notices.map((notice, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <p className="md:text-2xl text-xl text-center font-bold mb-6">{notice.name}</p>
                    <p className="text-lg mb-6">{notice.n_description}</p>
                    <img src={`http://localhost:8800/public/image/${notice.image}`} alt={notice.image} className="w-full h-auto object-cover" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="md:w-2/3">
      <img src={magazine1} alt="Magazine" className="lg:h-[400px] object-cover rounded-lg shadow-md" />
    </div>
    <div className="md:w-4/5">
      <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal text-blue-200">
        Engineering Technology<span className="text-red-300"> MCQ BOOK</span>
      </h2>
      <p className="text-white text-2xl mb-7">
        විභාගයට අනුමාන MCQ ප්‍රශ්න 500 ක් ඇතුලත් ප්‍රශ්නෝත්තර සංග්‍රහය. විවරණ ET LABS අපගේ Youtube චැනලය හරහා නැරඹීමට හැක.
      </p>
      <p className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-500 transition-all duration-300">
        නිවසට ගෙන්වා ගැනිමට හා වැඩි විස්තර සදහා සම්බන්ධ වන්න.
        071 299 8333/076 277 2448 (whatsapp)
      </p>
    </div>
  </div>
</div>

      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="md:w-4/5">
            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal text-blue-200">
             Engineering Technology <span className="text-red-300"> Management</span>
            </h2>
            <p className="text-white text-lg mb-7">
            මෙම පොත මගින් managment සම්පූර්ණ විෂය මාලාව ආවරණය කර ඇත.

            </p>
            <p className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-500 transition-all duration-300">
        නිවසට ගෙන්වා ගැනිමට හා වැඩි විස්තර සදහා සම්බන්ධ වන්න.
        071 299 8333/076 277 2448 (whatsapp)
      </p>
          </div>
          <div className="md:w-1/3">
            <img src={magazine2} alt="Magazine" className="lg:h-[400px] object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OHome;
