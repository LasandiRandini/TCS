
import  { useState } from 'react';


const Quiz = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormButtonClick = () => {
    setShowForm(true);
  };

  return (
    <>
      
      <div>
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between  items-start gap-10">
            <div className="w-full ">

            <h1 className="text-2xl font-bold text-black-900">Week Quiz</h1>
              <div className="grid  sm:grid-cols-3 grid-cols-1 item-start md:gap-12 gap-8">

               
                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold text-red-900">
                      Electrical
                    </h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  {!showForm ? (
                    <a
                     
                      onClick={handleFormButtonClick}
                      className="absolute bottom-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                      Go to the Quiz
                    </a>
                  ) : (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://forms.office.com/Pages/ResponsePage.aspx?id=si0jqnh6FESlKTPbkSTLp6YnxlwbS3JIj7lLgmg9tKxUMEFFWU9PVUdCTUcyMlhZOERYRVBHNjUwWC4u&embed=true"
                      frameBorder="0"
                      style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
                      allowFullScreen
                      webkitAllowFullScreen
                      mozAllowFullScreen
                      
                      title="Embedded Form"
                    />
                  )}
                </div>

                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold text-red-900">
                      Auti Mobile
                    </h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to the Quiz
                  </a>
                </div>

                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8  flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold  text-red-900">T D S</h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to the Quiz
                  </a>
                </div>
                </div>

                <h1 className="text-2xl font-bold md:px-14 text-black-900">Unit Quizzes</h1>
                <div className="grid  sm:grid-cols-3 grid-cols-1 item-start md:gap-12 gap-8">
                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold  text-red-900">
                      Surveying
                    </h3>

                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to the Quiz
                  </a>
                </div>

                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold text-red-900">
                      Management
                    </h3>

                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to the Quiz
                  </a>
                </div>

                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold  text-red-900">
                      Production
                    </h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to the Quiz
                  </a>
                </div>

                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 item-center flex
justify-center item-center flex hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold  text-red-900">
                      Drawing
                    </h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to the Quiz
                  </a>
                </div>
              
              
                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 item-center flex
justify-center item-center flex hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold text-red-900">
                      Liquid Transmission
                    </h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to Video Playlist
                  </a>
                </div>

                <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] text-center h-90 shadow-3xl p-8 flex item-center flex
justify-center item-center hover:-translate-y-4 transition-all duration-300 relative">
                  <div>
                    <h3 className="text-2xl font-bold  text-red-900">
                      Electronic
                    </h3>
                    <p className="text-lg text-gray-500">
                      Description: Your lesson description goes here...
                    </p>
                  </div>
                  <a
                    href="/video-playlist"
                    className="absolute bottom-4 bg-blue-500 item-center text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                  >
                    Go to Video Playlist
                  </a>
                </div>
              
              
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Quiz;
