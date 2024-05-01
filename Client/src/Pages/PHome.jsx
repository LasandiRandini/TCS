

import teacher from "../assets/teacher.png";
import magazine from "../assets/Mag.jpg";
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <>
    

      {/* Banner content */}
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auti mt-20">
        <div className="gradienBg rounded-x1 rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            <div className="md:w-3/5">
              <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                Welcome to Enginnering Technology Academy
              </h2>
              <p className="text-[#EBEBEB] text-2xl mb-8">
                Join Mr. Buwanekabahu Muthukumarana engineering technology
                tuition classes for expert guidance in electrical, mechanical,
                and computer science topics. Our interactive sessions foster
                hands-on learning and critical thinking, preparing students for
                success in engineering technology
              </p>

              <div>
              <Link to="/PSignup">
  <button
    className="py-3 px-8 bg-red-600 font-semibold text-white rounded hover:bg-red-400 transition-all duration-300"
  >
    Register Here
  </button>
</Link>
              </div>
            </div>
            <div>
              <img src={teacher} alt="" className="lg:h-[500px]" />
            </div>
          </div>
        </div>
      </div>


      {/* Time Table */}
      <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 
        ">
          
           {/*Time Table lists */}
          <div className="w-full ">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                    2023 A/L Time Table
                  </h3>
                  <p className="text-2xl font-semibold text-primary px-3 text-center pt-3">
                    fgth fggr vdrfgrf
                  </p>
                </div>
              </div>
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                    2024 A/L Time Table
                  </h3>
                  <p className="text-2xl font-semibold text-primary px-3 text-center pt-3">
                    fgth fggr vdrfgrf
                  </p>
                </div>
              </div>
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                    2025 A/L Time Table
                  </h3>
                  <p className="text-2xl font-semibold text-primary px-3 text-center pt-3">
                    fgth fggr vdrfgrf
                  </p>
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
text-primary mb-5 leading-normal text-white"
            >
              We have been improving our product <span>for many years.</span>
            </h2>
            <p className=" text-white text-lg mb-7">
              {" "}
              A good example of a paragraph contains a topic conclusion. There
              are many different kinds of animals that live in China.
            </p>
            <button
              className="py-3 px-8 bg-red-600 font-semibold text-white rounded 
                                hover:bg-red-400 transition-all duration-300"
            >
              View Magazine
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
