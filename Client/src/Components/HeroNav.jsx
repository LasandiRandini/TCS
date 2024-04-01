
import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';


const HeroNav = () => {
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 shadow-3xl bg-white'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center'>
                <div className="flex cursor-pointer items-center gap-2">
                   
                    <img src={Logo} alt="Logo" className="h-12 w-auto" />
                    <span className='font-bold text-3xl text-lightblue ml-2'>ET LABS</span>
                   
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>
                {/* link items */}
                <ul className={`md:flex md:items-center  md:pb-0 pb-10 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-12  transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                <Link to="/SLogin">
  <button className='btn bg-red-600 text-white md:ml-10 font-semibold px-8 py-2 rounded duration-500 md:static'>
    Login
  </button>
</Link>
                </ul>
            </div>
        </div>
    );
};

export default HeroNav;

