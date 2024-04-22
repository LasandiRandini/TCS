import PNav from "../Components/PNav";
import { Link } from "react-router-dom";
import V27 from "../assets/V2027.png";
import V26 from "../assets/V2026.png";
import V25 from "../assets/V2025.png";
import V24 from "../assets/V2024.png";
import Footer from "../Components/Footer";

const Video = () => {
    return (
        <>
        <PNav />
        <div>
            
                  <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                  <div className="w-full ">
                  <div className="grid  sm:grid-cols-4 grid-cols-1 item-start md:gap-12 gap-8">
                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2027 A/L
                      </h3>
                      <img src={V27} alt="Image" className="w-full h-auto pt-6" />
                      <Link
                    to="/Video2"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 inline-block text-center w-full"
                  >
                    View Lessons
                  </Link>
                    </div>
                    </div>

                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 item-center flex
                    justify-center item-center hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2026 A/L
                      </h3>
                      <img src={V26} alt="Image" className="w-full h-auto pt-6" />
                      <Link
                    to="/PHome"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mt-3 inline-block text-center w-full"
                  >
                    View Lessons
                  </Link>
                    </div>
                    </div>
                     
                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 item-center flex
                    justify-center item-center hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2025 A/L
                      </h3>
                      <img src={V25} alt="Image" className="w-full h-auto pt-6" />
                      <Link
                    to="/PHome"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mt-3 inline-block text-center w-full"
                  >
                    View Lessons
                  </Link>
                    </div>
                    </div>
                     
                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 item-center flex
                    justify-center item-center hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2024 A/L
                      </h3>
                      <img src={V24} alt="Image" className="w-full h-auto pt-6" />
                      <Link
                    to="/PHome"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mt-3 inline-block text-center w-full"
                  >
                    View Lessons
                  </Link>
                    </div>
                    </div>
                     
                   
                 
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
                <Footer />
               
                </>
    );
};

export default Video;