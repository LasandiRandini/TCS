

// import "../App.css";
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import teacher from "../assets/teacher.png";
// import magazine from "../assets/Mag.jpg";
// // import PG1 from '../assets/PG1.jpg';
// // import PG2 from '../assets/PG2.jpg';
// // import PG3 from '../assets/PG3.jpg';
// import PG21 from '../assets/PG21.jpg';
// import PG22 from '../assets/PG22.jpg';
// import PG23 from '../assets/PG23.jpg';
// import PG31 from '../assets/PG31.jpg';
// import PG32 from '../assets/PG32.jpg';
// import PG33 from '../assets/PG33.jpg';
// import PG41 from '../assets/PG41.jpg';
// import PG42 from '../assets/PG42.jpg';
// import PG43 from '../assets/PG43.jpg';
// import CLASS from '../assets/class.png';
// import HeroNav from "../Components/HeroNav";
// import Footer from "../Components/Footer";

// const images = [PG21, PG22, PG23, PG31, PG32, PG33, PG41, PG42, PG43];

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 3) % images.length);
//     }, 2000); // Change image every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <HeroNav />
//       <div
//         className="background-image bg-gray-300"
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
//         <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
//                  About Us
//                 </h2>
//           <div className="relative w-full h-70 overflow-hidden">
//             <div
//               className="flex transition-transform duration-1000 ease-in-out"
//               style={{ transform: `translateX(-${currentImageIndex * 100 / 3}%)` }}
//             >
//               {images.map((image, index) => (
//                 <div key={index} className="flex-shrink-0 w-1/3 h-64">
//                   <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
//                 </div>
//               ))}
//             </div>
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
import { FaBook, FaFlask, FaCogs } from 'react-icons/fa';  // Import icons

const images = [PG21, PG22, PG23, PG31, PG32, PG33, PG41, PG42, PG43];

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

        {/* New Content Section */}
        <div className="container mx-auto my-24 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
              <FaBook className="w-16 h-16 mb-4 text-yellow-600" />
              <h3 className="text-2xl font-semibold text-black mb-2">Learn</h3>
              <p className="text-lg text-black">
              ක්‍රමානුකූලව කොටස් අඩු නැතිව සම්පූර්ණ තියරි ඒකක ආවරණය

              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
              <FaFlask className="w-16 h-16 mb-4 text-yellow-600" />
              <h3 className="text-2xl font-semibold text-black mb-2">Explore</h3>
              <p className="text-lg text-black">
              පංතිකාමරය තුලදීම ඉලෙක්ට්‍රික, මැකැනිකල් හා පරිගණක විද්‍යාත්මක පරීක්ෂණ පුහුණුව 

              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-yellow-100 rounded-lg shadow-lg">
              <FaCogs className="w-16 h-16 mb-4 text-yellow-600" />
              <h3 className="text-2xl font-semibold text-black mb-2">Achieve</h3>
              <p className="text-lg text-black">
              විභගයෙන් පසු ප්‍රායෝගික පරීක්ෂණ සදහා පුහුනු කිරීමේ විශේෂ වැඩසටහන්

              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="container mx-auto my-24 px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-relaxed hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
            About Us
          </h2>
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
