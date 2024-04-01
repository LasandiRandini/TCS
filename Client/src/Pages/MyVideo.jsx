import Footer from "../Components/Footer";
import PNav from "../Components/PNav";


const MyVideo = () => {
    return (
        <>
        <PNav />
        <div>
            {/* Notices Cards */}
            <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="w-full ">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
              <div
                className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 item-center flex
                justify-center item-center hover:-translate-y-4 transition-all duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center text-red-900">
                    Notice 1
                  </h3>
                  <p className="text-2xl font-semibold text-primary px-3 text-center">
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
                    Notice 1
                  </h3>
                  <p className="text-2xl font-semibold text-primary px-3 text-center">
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
                    Notice 1
                  </h3>
                  <p className="text-2xl font-semibold text-primary px-3 text-center">
                    fgth fggr vdrfgrf
                  </p>
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

export default MyVideo;