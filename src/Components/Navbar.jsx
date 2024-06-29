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
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

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
      <nav className="pt-6 h-full flex items-center drop-shadow-lg justify-between  max-w-screen-xl  mx-auto relative"
        data-aos="fade-down"
        data-aos-anchor-placement="bottom-center"
        data-aos-duration="1500"
      >

        <div>
          <Link to="/">
            <img className="xl:w-[300px] w-[300px] md:w-[250px] hover:opacity-70 " src={fes} alt="logo" />
          </Link>
        </div>

        <div>
          <ul className="flex flex-row justify-between items-center gap-2 lg:gap-6 md:gap-4 sm:gap-4 xl:gap-6">

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
              <button className="ml-16 text-md px-4 py-2 rounded-2xl  bg-card-foreground bg-gray-600 hover:bg-blue-500 tracking-wider text-white"

              >
                <HashLink slot to='/#contact'>CONTACT NOW</HashLink>

              </button>
            </Link>

            <div className="flex justify-center items-center gap-2 ">
              <a href="https://www.facebook.com/FestiVidaE" className='hover:opacity-60'>
                <FaFacebook size={32} color='#0096FF' />
              </a>
              <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp" className='hover:opacity-60'>
                <RiInstagramFill size={34} color='#CD1D5F' />
              </a>
              <a href="" className='hover:opacity-60'>
                < RiWhatsappFill size={36} color='#00CC56' />
              </a>

            </div>


          </ul>
        </div>

        {/* <ThemeToggle /> */}
      </nav>

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
                        <Link to="/about" onClick={() => setOpenDrawer(false)}>
                          ABOUT
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
                          className={"text-xl px-3 py-1 rounded-xl bg-card-foreground bg-gray-600 text-white hover:bg-blue-500"}
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

    </>
  );
}
