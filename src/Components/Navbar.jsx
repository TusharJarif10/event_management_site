// import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState } from "react";
import fes from "../assets/festivida.png";
import { NavLink, useLocation } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { BsBackspace } from "react-icons/bs";
import { useMediaQuery } from '../hooks/use-media-query';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AOS from "aos";
import { useEffect } from "react";

export default function Navbar() {

  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  // const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  // const [showMenu, setShowMenu] = useState(false);

  const isDesktop = useMediaQuery("only screen and (min-width: 768px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  return isDesktop ? (

    <>
      <nav className="pt-10 h-full flex items-center justify-between  max-w-screen-2xl mx-auto  relative"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-center"
        data-aos-duration="1500"
      >

        <div className=''

        >
          <Link to="/">
            <img className="w-[390px]" src={fes} alt="logo" />
          </Link>
        </div>

        <div>
          <ul className="pr-20 flex flex-row justify-between items-center gap-2 lg:gap-6 md:gap-4 sm:gap-4 xl:gap-6"

          >

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
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'inactive-link'
                }
              >
                ABOUT
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

            <Link to="/contact">
              <button className="ml-16 text-lg px-4 py-2 rounded-2xl  bg-card-foreground bg-gray-600 hover:bg-blue-500 font-bold tracking-wider text-white"

              >
                <HashLink slot to='/#contact'>CONTACT NOW</HashLink>

              </button>
            </Link>

            <div className="flex justify-center items-center gap-2">

              <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
                  <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                </svg>
              </a>


              <a href="https://www.facebook.com/FestiVidaE">
                <FaFacebook size={34} color='#0096FF' />
              </a>
              {/* 
              <a href="">

                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45">
                  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                </svg>

              </a> */}

              {/* <HashLink slot to='/#insta'> <PiInstagramLogoDuotone size={30} color='#535ce6' /> </HashLink> */}

            </div>
          </ul>
        </div>

        {/* <ThemeToggle /> */}

      </nav>
      {/* <div className="">
        <div>
        
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
                        <HashLink slot to='/#contact'>CONTACT NOW</HashLink>

                      </button>
                    </Link>

                  </div>

                </li>
              </ul>

              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-4">


                <div className="hidden lg:flex items-center space-x-4 xl:space-x-4">

                  <a href="https://www.facebook.com/FestiVidaE">
                    <PiFacebookLogoDuotone size={32} color='#535ce6' />
                  </a>
                  <HashLink slot to='/#insta'> <PiInstagramLogoDuotone size={30} color='#535ce6' /> </HashLink>
                  <PiWhatsappLogoDuotone size={32} color='green' />
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
        </div>
      </div > */}
    </>

  ) : (
    <>
      <div className="flex flex-row items-center justify-between px-2 py-4">
        <div>
          <Link to="/">
            <img className="w-[220px]" src={fes} alt="logo" />
          </Link>
        </div>

        <div>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText>

                    <Link to="/">
                      <img className="w-[170px]" src={fes} alt="logo" />
                    </Link>

                    <ul className="flex flex-col space-y-6 py-8 pl-2">
                      <li>
                        <Link to="/" onClick={() => setOpenDrawer(false)}>
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link to="/service" onClick={() => setOpenDrawer(false)}>
                          SERVICES
                        </Link>
                      </li>
                      <li>
                        <Link to="/portfolio" onClick={() => setOpenDrawer(false)}>
                          PORTFOLIO
                        </Link>
                      </li>
                      <li>
                        <button onClick={() => setOpenDrawer(false)}
                          className={"text-md px-2 py-1 rounded-md bg-card-foreground tracking-tighter bg-blue-500 text-white"}
                        >
                          <HashLink slot to='/#contact'>CONTACT</HashLink>
                        </button>
                      </li>
                    </ul>

                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Drawer>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
            <MenuIcon />
          </IconButton>
        </div>


      </div>


      {/* <div className="">
        <div>
        
          <div className="px-6 py-5">
            <div className="container mx-auto flex items-center justify-between">
              <h1 className="md:w-2/12 cursor-pointer text-gray-800 dark:text-black" aria-label="the Crib.">
                <Link to="/">
                  <img className="w-[180px]" src={fes} alt="logo" />
                </Link>
              </h1>
            </div>
          </div>


          <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"}  z-10 inset-0 md:hidden bg-gradient-to-b from-[#ffffff] to-[#c9eaf3] flex-col h-auto w-auto`}>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">

              <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">

                <BsBackspace color='gray' size={28} />

              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a href="javascript:void(0)" className="text-[#535ce6] flex items-center justify-between hover:font-bold text-md hover:text-xl ">
                    <Link to="/" onClick={() => setShowMenu(false)}>
                      HOME
                    </Link>
                    <div>
                      <svg className="fill-stroke text-gray-700" width={16} height={16} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-[#535ce6] flex items-center justify-between hover:font-bold text-md hover:text-xl  ">

                    <Link to="/service" onClick={() => setShowMenu(false)}>
                      SERVICES
                    </Link>

                    <div>
                      <svg className="fill-stroke text-gray-700" width={16} height={16} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-[#535ce6] flex items-center justify-between hover:font-bold text-md hover:text-xl ">
                    <Link to="/portfolio" onClick={() => setShowMenu(false)}>
                      PORTFOLIO
                    </Link>

                    <div>
                      <svg className="fill-stroke text-gray-700" width={16} height={16} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <button
                    className={"text-md px-2 py-1 rounded-md bg-card-foreground tracking-tighter bg-blue-500 text-white"}
                  >
                    <HashLink smooth to='/#contact'>CONTACT</HashLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div > */}
    </>

  );

}
