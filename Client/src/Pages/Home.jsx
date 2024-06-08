// import { Link } from 'react-router-dom';
// import teacher from "../assets/teacher.png";
// import magazine from "../assets/Mag.jpg";
// import HN1 from '../assets/Home_Notices1.jpg';
// import HN2 from '../assets/Home_Notices2.jpg';
// import HN3 from '../assets/Home_Notices3.jpg';
// import HeroNav from "../Components/HeroNav";
// import Footer from "../Components/Footer";

// const Home = () => {
//   return (
//     <>
//       <HeroNav />
//       <div className=" min-h-screen ">
//         <div className="container mx-auto mt-20 px-4 md:px-12">
//           <div className="gradienBg from-purple-500 to-indigo-500 rounded-xl rounded-br-[80px] p-8 md:p-12 shadow-lg">
//             <div className="flex flex-col md:flex-row-reverse items-center gap-10">
//               <div className="md:w-3/5">
//                 <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Welcome to Engineering Technology LABS
//                 </h2>
//                 <p className="text-[#EBEBEB] text-lg md:text-2xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Join Mr. Buwanekabahu Muthukumaranas engineering technology tuition classes for expert guidance in electrical, mechanical, and computer science topics. Our interactive sessions foster hands-on learning and critical thinking, preparing students for success in engineering technology.
//                 </p>
//                 <Link to="/Check">
//                   <button className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300">
//                     Register Here
//                   </button>
//                 </Link>
//               </div>
//               <div>
//                 <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Notices Section */}
//         <div className="my-24 container mx-auto px-4 md:px-12">
//           <h3 className="text-3xl font-bold text-center mb-10">Latest Notices</h3>
//           <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
//             {[{
//               title: "Practical Camp 2023 A/L",
//               date: "March 04 at Sipara Galle.",
//               img: HN2
//             }, {
//               title: "ET 2023 A/L PRACTICAL",
//               date: "March 14 at Victoria College.",
//               img: HN1
//             }, {
//               title: "PRACTICAL Coming Soon",
//               date: "2023 A/L Practical.",
//               img: HN3
//             }].map((notice, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                 <h3 className="text-2xl font-bold text-red-900 text-center mb-4">{notice.title}</h3>
//                 <p className="text-lg font-bold text-primary text-center mb-6">{notice.date}</p>
//                 <img src={notice.img} alt="Notice" className="w-full h-auto lg:h-[300px] object-cover rounded-lg" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Magazine Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="md:w-1/3">
//               <img src={magazine} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
//                 We have been improving our product <span className="text-indigo-600">for many years.</span>
//               </h2>
//               <p className="text-black text-lg mb-7">
//                 A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
//               </p>
//               <a
//                 href="https://eandt.theiet.org/"
//                 className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Magazine
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

// import "../App.css";
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import teacher from "../assets/teacher.png";
// import magazine from "../assets/Mag.jpg";
// import HN1 from '../assets/Home_Notices1.jpg';
// import HN2 from '../assets/Home_Notices2.jpg';
// import HN3 from '../assets/Home_Notices3.jpg';
// import CLASS from '../assets/class.png';
// import HeroNav from "../Components/HeroNav";
// import Footer from "../Components/Footer";


// const Home = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 50) {
//         document.body.classList.add('scrolled');
//       } else {
//         document.body.classList.remove('scrolled');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <HeroNav />
//       <div
//         className="background-image"
//         style={{ backgroundImage: `url(${CLASS})` }}
//       ></div>
//       <div className="content min-h-screen">
//         <div className="container mx-auto mt-20 px-4 md:px-12">
//           <div className="  p-8 md:p-12 ">
//             <div className="flex flex-col md:flex-row-reverse items-center gap-10">
//               <div className="md:w-3/5">
//                 <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Welcome to Engineering Technology LABS
//                 </h2>
//                 <p className="text-white text-lg md:text-2xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Join Mr. Buwanekabahu Muthukumarans engineering technology tuition classes for expert guidance in electrical, mechanical, and computer science topics. Our interactive sessions foster hands-on learning and critical thinking, preparing students for success in engineering technology.
//                 </p>
//                 <Link to="/Check">
//                   <button className="py-3 px-8 bg-red-800 font-semibold text-white rounded-full hover:bg-red-500 transition-all duration-300">
//                     Register Here
//                   </button>
//                 </Link>
//               </div>
//               <div>
//                 <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Notices Section */}
//         <div className="my-24 container mx-auto px-4 md:px-12">
//           <h3 className="text-3xl font-bold text-center mb-10">Latest Notices</h3>
//           <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
//             {[{
//               title: "Practical Camp 2023 A/L",
//               date: "March 04 at Sipara Galle.",
//               img: HN2
//             }, {
//               title: "ET 2023 A/L PRACTICAL",
//               date: "March 14 at Victoria College.",
//               img: HN1
//             }, {
//               title: "PRACTICAL Coming Soon",
//               date: "2023 A/L Practical.",
//               img: HN3
//             }].map((notice, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                 <h3 className="text-2xl font-bold text-red-900 text-center mb-4">{notice.title}</h3>
//                 <p className="text-lg font-bold text-primary text-center mb-6">{notice.date}</p>
//                 <img src={notice.img} alt="Notice" className="w-full h-auto lg:h-[300px] object-cover rounded-lg" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Magazine Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="md:w-1/3">
//               <img src={magazine} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
//                 We have been improving our product <span className="text-indigo-600">for many years.</span>
//               </h2>
//               <p className="text-black text-lg mb-7">
//                 A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
//               </p>
//               <a
//                 href="https://eandt.theiet.org/"
//                 className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Magazine
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

// import "../App.css";
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import teacher from "../assets/teacher.png";
// import magazine from "../assets/Mag.jpg";
// import HN1 from '../assets/Home_Notices1.jpg';
// import HN2 from '../assets/Home_Notices2.jpg';
// import HN3 from '../assets/Home_Notices3.jpg';
// import CLASS from '../assets/class.png';
// import HeroNav from "../Components/HeroNav";
// import Footer from "../Components/Footer";
 

// const images = [HN1,HN2,HN3,HN1,HN2,HN3,HN2];

// const Home = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 50) {
//         document.body.classList.add('scrolled');
//       } else {
//         document.body.classList.remove('scrolled');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <HeroNav />
//       <div
//         className="background-image"
//         style={{ backgroundImage: `url(${CLASS})` }}
//       ></div>
//       <div className="content min-h-screen">
//         <div className="container mx-auto mt-20 px-4 md:px-12">
//           <div className="p-8 md:p-12">
//             <div className="flex flex-col md:flex-row-reverse items-center gap-10">
//               <div className="md:w-3/5">
//                 <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Welcome to Engineering Technology LABS
//                 </h2>
//                 <p className="text-white text-lg md:text-2xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
//                   Join Mr. Buwanekabahu Muthukumarans engineering technology tuition classes for expert guidance in electrical, mechanical, and computer science topics. Our interactive sessions foster hands-on learning and critical thinking, preparing students for success in engineering technology.
//                 </p>
//                 <Link to="/Check">
//                   <button className="py-3 px-8 bg-red-800 font-semibold text-white rounded-full hover:bg-red-500 transition-all duration-300">
//                     Register Here
//                   </button>
//                 </Link>
//               </div>
//               <div>
//                 <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Photo Gallery Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <div className="overflow-x-scroll flex space-x-4 py-4">
//             {images.map((image, index) => (
//               <div key={index} className="flex-shrink-0 w-64 h-64">
//                 <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

        
//         {/* Magazine Section */}
//         <div className="container mx-auto my-24 px-4 md:px-12">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="md:w-1/3">
//               <img src={magazine} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
//                 We have been improving our product <span className="text-indigo-600">for many years.</span>
//               </h2>
//               <p className="text-black text-lg mb-7">
//                 A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
//               </p>
//               <a
//                 href="https://eandt.theiet.org/"
//                 className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Magazine
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

import "../App.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import teacher from "../assets/teacher.png";
import magazine from "../assets/Mag.jpg";
import PG1 from '../assets/PG1.jpg';
import PG2 from '../assets/PG2.jpg';
import PG3 from '../assets/PG3.jpg';
import PG21 from '../assets/PG21.jpg';
import PG22 from '../assets/PG22.jpg';
import PG23 from '../assets/PG23.jpg';
import PG31 from '../assets/PG31.jpg';
import PG32 from '../assets/PG32.jpg';
import PG33 from '../assets/PG33.jpg';
import PG41 from '../assets/PG41.jpg';
import PG42 from '../assets/PG42.jpg';
import PG43 from '../assets/PG43.jpg';
import CLASS from '../assets/class.png';
import HeroNav from "../Components/HeroNav";
import Footer from "../Components/Footer";

const images = [PG1, PG2, PG3, PG21, PG22, PG23, PG31, PG32, PG33, PG41, PG42, PG43];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HeroNav />
      <div
        className="background-image bg-gray-300"
        style={{ backgroundImage: `url(${CLASS})` }}
      ></div>
      <div className="content min-h-screen">
        <div className="container mx-auto mt-20 px-4 md:px-12">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row-reverse items-center gap-10">
              <div className="md:w-3/5">
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  Welcome to Engineering Technology LABS
                </h2>
                <p className="text-white text-lg md:text-2xl mb-8 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  Join Mr. Buwanekabahu Muthukumarans engineering technology tuition classes for expert guidance in electrical, mechanical, and computer science topics. Our interactive sessions foster hands-on learning and critical thinking, preparing students for success in engineering technology.
                </p>
                <Link to="/Check">
                  <button className="py-3 px-8 bg-red-800 font-semibold text-white rounded-full hover:bg-red-500 transition-all duration-300">
                    Register Here
                  </button>
                </Link>
              </div>
              <div>
                <img src={teacher} alt="Teacher" className="lg:h-[500px] hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="container mx-auto my-24 px-4 md:px-12">
          <div className="relative w-full h-70 overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100 / 3}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 h-64">
                  <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Magazine Section */}
        <div className="container mx-auto my-24 px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img src={magazine} alt="Magazine" className="lg:h-[400px] rounded-lg shadow-lg" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-5 leading-normal">
                We have been improving our product <span className="text-indigo-600">for many years.</span>
              </h2>
              <p className="text-black text-lg mb-7">
                A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.
              </p>
              <a
                href="https://eandt.theiet.org/"
                className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Magazine
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
