import Footer from "../Components/Footer";
import PNav from "../Components/PNav";


const Video = () => {
    return (
        <>
        <PNav />
        <div>
            
                  <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                  <div className="w-full ">
                  <div className="grid  sm:grid-cols-1 grid-cols-1 item-start md:gap-12 gap-8">
                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8  flex
                     hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2027 A/L
                      </h3>
                     
                   
                    </div>
                    </div>

                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 flex
                      hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2026 A/L
                      </h3>
                     
                     
                    </div>
                    </div>
                     
                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 item-center flex
                     item-center hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2025 A/L
                      </h3>
                     
                      
                    </div>
                    </div>
                     
                    <div
                    className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 item-center flex
                     item-center hover:-translate-y-4 transition-all duration-300"
                    >
                    <div>
                      <h3 className="text-2xl font-bold text-center text-red-900">
                      2024 A/L
                      </h3>
                     
                     
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