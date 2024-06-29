import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import fes from "../assets/festivida.png";


// import {
//   //   FaDribbbleSquare,
//   FaFacebookSquare,
//   //   FaGithubSquare,
//   FaInstagram,
//   //   FaTwitterSquare,
// } from 'react-icons/fa';

const Footer = () => {
  return (



    <div className="mx-auto  xl:px-0 lg:px-0 sm:px-0 px-0 dark:bg-[#F7FDFF] shadow-2xl  shadow-[#000000] py-10">
      <div className="flex flex-col items-center justify-center">

        <div className=''>
          <Link to="/">
            <img className="w-[290px]" src={fes} alt="logo" />
          </Link>
        </div>

        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          {/* <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-600">About</p> */}
          <HashLink slot to='/#contact'>
            <p className="hover:text-gray-500 text-2xl cursor-pointer leading-4 text-gray-600">Contact us</p>
          </HashLink>
          <p className="hover:text-gray-500 text-2xl cursor-pointer leading-4 text-gray-600">Terms of Service</p>
          <p className="hover:text-gray-500 text-2xl cursor-pointer leading-4 text-gray-600">Privacy Policy</p>
        </div>
        <div className="flex items-center gap-x-8 mt-6">
          <div className="cursor-pointer">
            <a href="https://www.facebook.com/FestiVidaE" className='hover:opacity-60'>
              <FaFacebook size={33} color='#0096FF' />
            </a>
          </div>

          <div className="cursor-pointer">
            <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
              <RiInstagramFill size={35} color='#CD1D5F' />
            </a>
          </div>
          <div className="cursor-pointer">

            <IoLogoWhatsapp size={35} color='#00CC56' />
          </div>
        </div>
        <div className="flex items-center mt-6 mb-7">
          <p className="text-2xl leading-4 text-gray-600">
            2024 <span className="font-semibold">Festivida</span>
          </p>
          <div className="border-l border-gray-600 pl-2 ml-2">
            <p className="text-2xl leading-4 text-gray-600">Inc. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;