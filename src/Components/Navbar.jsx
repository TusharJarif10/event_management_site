// import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
//import { Link } from 'react-router-dom';
import { useState } from "react";
import fes from "../assets/festivida.png";
import { Button } from "@mui/material";

export default function Navbar() {

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
              <img className="w-[180px]" src={fes} alt="logo" />
            </h1>
            <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
              <li>
                <a href="javascript:void(0)" className=" text-xl  hover:underline">
                  HOME
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" text-xl hover:underline">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className=" text-xl  hover:underline">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <div className="pl-20">
                <Button variant="contained">
                  CONTACT NOW
                </Button>
                </div>
              
              </li>
            </ul>



            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">





              <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                <button aria-label="view favourites" className="dark:text-[#596196]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="facebook"><path fill="#263238" d="M15.5 30h-11C3.122 30 2 28.879 2 27.5v-18C2 9.224 2.224 9 2.5 9S3 9.224 3 9.5v18C3 28.327 3.673 29 4.5 29h11c.276 0 .5.224.5.5S15.776 30 15.5 30zM27.5 30h-6c-.276 0-.5-.224-.5-.5v-10c0-.276.224-.5.5-.5h3.059l.375-3H21.5c-.276 0-.5-.224-.5-.5v-4c0-.827.673-1.5 1.5-1.5H25V7h-3.5C19.57 7 18 8.57 18 10.5v5c0 .276-.224.5-.5.5H14v3h3.5c.276 0 .5.224.5.5v10c0 .276-.224.5-.5.5S17 29.776 17 29.5V20h-3.5c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5H17v-4.5C17 8.019 19.019 6 21.5 6h4C25.776 6 26 6.224 26 6.5v4c0 .276-.224.5-.5.5h-3c-.276 0-.5.225-.5.5V15h3.5c.144 0 .28.062.375.169.095.107.139.251.121.394l-.5 4C25.465 19.813 25.252 20 25 20h-3v9h5.5c.827 0 1.5-.673 1.5-1.5v-23C29 3.673 28.327 3 27.5 3h-23C3.673 3 3 3.673 3 4.5v1C3 5.776 2.776 6 2.5 6S2 5.776 2 5.5v-1C2 3.121 3.122 2 4.5 2h23C28.878 2 30 3.121 30 4.5v23C30 28.879 28.878 30 27.5 30z"></path><g><path fill="#263238" d="M3,7.5C3,7.775,2.775,8,2.5,8l0,0C2.225,8,2,7.775,2,7.5l0,0C2,7.225,2.225,7,2.5,7l0,0
								C2.775,7,3,7.225,3,7.5L3,7.5z"></path></g></svg>
                </button>
                <button aria-label="go to cart" className="dark:text-[#596196] ">

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="whatsapp"><path fill="#263238" d="M16.004,31c-2.868,0-5.646-0.811-8.05-2.347l-5.348,1.709c-0.179,0.057-0.376,0.009-0.509-0.125
		c-0.132-0.134-0.178-0.332-0.117-0.51l1.725-5.146C1.935,22.061,1,19.1,1,16c0-4.076,1.612-7.891,4.539-10.742
		C5.736,5.066,6.053,5.07,6.246,5.267c0.192,0.198,0.188,0.515-0.01,0.707C3.505,8.636,2,12.196,2,16
		c0,2.974,0.922,5.811,2.665,8.204c0.095,0.131,0.121,0.3,0.069,0.454l-1.492,4.452l4.633-1.481
		c0.144-0.047,0.302-0.024,0.429,0.059C10.589,29.2,13.252,30,16.004,30C23.722,30,30,23.72,30,16c0-7.719-6.278-14-13.996-14
		c-0.001,0-0.002,0-0.003,0c-2.167,0-4.238,0.481-6.164,1.429C9.589,3.55,9.29,3.449,9.168,3.202S9.147,2.654,9.396,2.532
		C11.46,1.516,13.682,1,15.996,1C24.272,1,31,7.729,31,16S24.272,31,16.004,31z"></path><path fill="#263238" d="M20.602,24.493L20.602,24.493c-1.011,0-2.422-0.39-4.439-1.226c-2.633-1.09-5.243-3.374-7.35-6.429
			l-0.075-0.107c-0.696-0.951-1.823-2.773-1.823-4.675c0-2.229,1.115-3.36,1.592-3.843c0.449-0.461,1.12-0.706,1.874-0.706
			c0.19,0,0.36,0.009,0.515,0.018c0.635,0.025,1.003,0.185,1.353,1.022l0.363,0.88c0.384,0.931,0.857,2.08,0.931,2.235
			c0.082,0.169,0.331,0.688,0.054,1.228c-0.148,0.316-0.293,0.483-0.492,0.713c-0.14,0.161-0.233,0.261-0.328,0.361
			c-0.11,0.118-0.222,0.234-0.334,0.375c-0.193,0.226-0.193,0.226-0.128,0.339c0.37,0.625,1.157,1.825,2.253,2.8
			c1.422,1.265,2.571,1.73,3.123,1.954l0.137,0.056c0.145,0.06,0.328,0.103,0.465-0.042c0.248-0.267,0.562-0.706,0.894-1.171
			l0.199-0.279c0.349-0.493,0.779-0.597,1.078-0.597c0.175,0,0.357,0.035,0.543,0.105c0.465,0.162,2.912,1.381,2.937,1.393
			l0.235,0.115c0.35,0.168,0.626,0.301,0.784,0.579c0.229,0.398,0.139,1.442-0.209,2.427c-0.417,1.179-1.967,2.1-3.213,2.368
			C21.293,24.438,20.998,24.493,20.602,24.493z M10.38,8.507c-0.472,0-0.902,0.142-1.124,0.369c-0.461,0.468-1.342,1.361-1.342,3.18
			c0,1.181,0.585,2.658,1.605,4.051l0.116,0.165c1.998,2.898,4.452,5.055,6.909,6.072c1.893,0.785,3.182,1.15,4.057,1.15l0,0
			c0.3,0,0.523-0.042,0.727-0.085c0.973-0.21,2.198-0.929,2.479-1.724c0.304-0.857,0.298-1.516,0.262-1.647
			c-0.002,0.031-0.182-0.054-0.327-0.124l-0.249-0.122c-0.701-0.351-2.513-1.236-2.83-1.347c-0.084-0.032-0.148-0.045-0.202-0.045
			c-0.045,0-0.138,0-0.264,0.178l-0.2,0.28c-0.351,0.492-0.682,0.956-0.976,1.272c-0.377,0.403-1.024,0.515-1.581,0.283
			l-0.127-0.052c-0.557-0.225-1.862-0.753-3.413-2.133c-1.196-1.066-2.049-2.363-2.451-3.042c-0.423-0.729,0.006-1.231,0.212-1.472
			c0.131-0.163,0.259-0.298,0.387-0.434c0.084-0.089,0.168-0.178,0.254-0.278c0.225-0.259,0.299-0.345,0.396-0.552
			c0.029-0.057,0.045-0.138-0.059-0.354c-0.076-0.16-0.562-1.334-0.953-2.286l-0.362-0.877c-0.165-0.396-0.165-0.396-0.479-0.408
			C10.701,8.515,10.549,8.507,10.38,8.507z"></path><circle cx="7.5" cy="4" r=".5" fill="#263238"></circle></svg>

                </button>
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
    </div>



  );
}
