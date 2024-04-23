/*const Footer = () => {
  return (
    <div className="bg-[#344955] md:px-20 p-1 max-w-screen-1x1 mx-auto text-white">
      <div className="my-5 flex flex-col md:flex-row ">
        <div className=" md:w-3/5 space-y-8">
          <a
            href="/"
            className="text-6x1 font-semibold flex items-center  p-4px space-x-3 text-primary"
          >
            <span className=" text-white">ET LABS</span>
          </a>
          <p className="md:w-1/2">
            {" "}
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className=" bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>
        
        <div>
            <div  className="  flex flex-col p-4 md:flex-row flex wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-2">
            <h4 className="text-xl">Overview</h4>
            <ul className=" space-y-2">
              <a href="/" className="block hover: text-gray-300">
                About Us
              </a>
              <a href="/" className="block hover: text-gray-300">
                Notices
              </a>
              <a href="/" className="block hover: text-gray-300">
                Magazine
              </a>
              <a href="/" className="block hover: text-gray-300">
                How does it works?
              </a>
            </ul>
          </div>

          <div className="space-y-4 mt-2">
            <h4 className="text-xl">Contacts</h4>
            <ul className=" space-y-3">
              <p className=" hover: text-gray-300"> (012) 1234-567-890</p>
              <p className=" hover: text-gray-300">Features</p>
              <p className=" hover: text-gray-300">About</p>
              <p className=" hover: text-gray-300">Pricing</p>
            </ul>
          </div>
        </div>
        <div>
            <div className="flex text-3 flex-col p-3 sm:flex-row gap-4 items-center justify-between ">
            <p>@ET LABS 2024 ... ,All rights reserved.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer; */


import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import {FiTwitter,FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineYoutube,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="download w-full  py-16 rounded-xl">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="textxl md:text-3xl font-bold">
            Download The ETLABS App
          </h1>
          <div className="flex space-x-5">
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <FaGooglePlay size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">Google Play</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
              <IoLogoAppleAppstore size={"1.5rem"} />
              <div>
                <p className="text-xs">Get ON</p>
                <h1 className="text-sm">App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full py-10 bg-neutral-800 text-white">
        <div className="w-11/12 md:w-1/3 m-auto flex flex-col items-center text-center space-y-5">
          <h1 className="text-2xl font-bold">ETLABS</h1>
          <ul className="flex items-cener space-x-5 text-sm">
            <li>Features</li>
            <li>Trending</li>
            <li>About</li>
          </ul>
          <div className="icons flex items-center space-x-4">
                <FiTwitter size={"1.5rem"}/>
                <AiOutlineInstagram size={"2rem"}/>
                <AiOutlineYoutube size={"2rem"}/>
                <FiFacebook size={"2rem"}/>
                <AiFillGithub size={"1.5rem"}/>
          </div>
          <p className="text-sm text-gray-400 ">Join Mr. Buwanekabahu Muthukumarana engineering technology tuition classes for expert guidance in electrical, mechanical, and computer science topics. Our interactive sessions foster hands-on learning and critical thinking, preparing students for success in engineering technology

Register Here</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

