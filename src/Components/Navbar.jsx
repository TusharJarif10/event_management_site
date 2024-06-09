// import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState } from "react";
import fes from "../assets/festivida.png";
import { ButtonBase } from "@mui/material";
import { NavLink, useLocation } from 'react-router-dom';
import { RiInstagramFill } from "react-icons/ri";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HashLink } from "react-router-hash-link";



export default function Navbar() {

  const location = useLocation();

  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="">
      <div>
        {/* For md screen size */}

        {/* For md screen size */}
        {/* For large screens */}
        <div className="px-6 py-5">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-black" aria-label="the Crib.">
              <Link to="/">
                <img className="w-[180px]" src={fes} alt="logo" />
              </Link>
            </h1>
            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
              <li>

                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  HOME
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  SERVICES
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'inactive-link'
                  }
                >
                  PORTFOLIO
                </NavLink>
              </li>


              <li>
                <div className="pl-20">
                  <Link to="/contact">
                  <button className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full" >
                  <HashLink smooth to='/#contact'>CONTACT NOW</HashLink>
                    
                  </button>
                  </Link>
                  
                </div>

              </li>
            </ul>



            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-6">


              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">

                <FaFacebook size={30} color='#2179A9'/>
                <RiInstagramFill size={32} color='#2179A9'/>
                <IoLogoWhatsapp size={32} color='#034A9F'/>
              

              </div>
              <div className="flex lg:hidden">
                <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-black dark:text-black dark:hover:text-black hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                  <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black dark:text-black dark:hover:text-black md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                  <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* For small screen */}
        <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute dark:bg-[#F7FDFF] z-10 inset-0 md:hidden bg-yellow-300 flex-col h-screen w-full`}>
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">

            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
              <svg className="fill-stroke text-gray-800 dark:text-[#596196]" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="mt-6 p-4">
            <ul className="flex flex-col space-y-6">
              <li>
                <a href="javascript:void(0)" className="dark:text-[#596196] flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                  Home
                  <div>
                    <svg className="fill-stroke text-black dark:text-[#596196]" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="dark:text-[#596196] flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                  Service
                  <div>
                    <svg className="fill-stroke text-black dark:text-[#596196]" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="dark:text-[#596196] flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                  Lookbook
                  <div>
                    <svg className="fill-stroke text-black dark:text-[#596196]" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="dark:text-[#596196] flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                  Contact
                  <div>
                    <svg className="fill-stroke text-black dark:text-[#596196]" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >



  );
}
