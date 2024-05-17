
import teacher from "../assets/teacher.png";
import magazine from "../assets/Mag.jpg";
import {Link} from 'react-router-dom';
import HN1 from '../assets/Home_Notices1.jpg';
import HN2 from '../assets/Home_Notices2.jpg';
import HN3 from '../assets/Home_Notices3.jpg';
import HeroNav from "../Components/HeroNav";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
    <HeroNav/>
    <div className="page-background">
     
     
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auti mt-20  ">
        <div className="gradienBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <div className="md:w-3/5" >
              <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                Welcome to Engineering Technology Academy
              </h2>
              <p className="text-[#EBEBEB] text-2xl mb-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                Join Mr. Buwanekabahu Muthukumarana engineering technology
                tuition classes for expert guidance in electrical, mechanical,
                and computer science topics. Our interactive sessions foster
                hands-on learning and critical thinking, preparing students for
                success in engineering technology
              </p>

              <div>
              <Link to="/Check">
  <button
    className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
  >
    Register Here
  </button>
</Link>
              </div>
            </div>
            <div>
              <img src={teacher} alt="" className="float-left lg:h-[500px]  hover:-translate-y-4 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Notices  */}
      <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          
          {/* Notices Cards */}
          <div className="w-full">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-120 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                    Practical Camp 2023 A/L
                  </h3>
                  <p className="text-1xl font-bold text-primary px-3 text-center pt-6">
                  March 04 at Sipara Galle.
                  </p>
                  <img src={HN2} alt="Image" className="w-full h-auto pt-6 lg:h-[400px]" />
                </div>
              </div>
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-120 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer "
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                    ET 2023 A/L PRACTICAL
                  </h3>
                  <p className="text-1xl font-bold text-primary px- text-center pt-6 ">
                  March 14 at Victoria College.
                  </p>
                  <img src={HN1} alt="Image" className="w-full h-auto pt-6 lg:h-[400px]" />
                </div>
              </div>
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-120 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                      PRACTICAL Coming Soon
                  </h3>
                  <p className="text-1xl font-bold text-primary px-2 text-center pt-6">
                    2023 A/L Practical.
                  </p>
                  <img src={HN3} alt="Image" className="w-full h-auto pt-6 lg:h-[400px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magazine */}

      <div
        className="md:px-14 p-4 max-w-s 
my-24 px-4 max-w-screen-2xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={magazine} alt="" className="lg:h-[400px]" />
          </div>

          <div className="md:w-4/5">
            <h2
              className="md: text-5xl text-3xl font-bold
text-primary mb-5 leading-normal text-black"
            >
              We have been improving our product <span>for many years.</span>
            </h2>
            <p className=" text-black text-lg mb-7">
              {" "}
              A good example of a paragraph contains a topic conclusion. There
              are many different kinds of animals that live in China.
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
      <Footer/>
    </>
  );
};

export default Home;
