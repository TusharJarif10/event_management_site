
import entertainment from "../assets/entertainment.jpg";
import concert from "../assets/Concert.jpg";
import videography from "../assets/videograpy.jpg";
import corporate from "../assets/Corporate.jpg";
import postevent from "../assets/postevent.jpg";
import trade from "../assets/trade.jpg";
import marketing from "../assets/Marketing.jpg";
import social from "../assets/social.jpg";


import Contact from '../Components/contact';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { countries } from './Data';
import Location from '../Components/Location';
import AOS from "aos";
import { useEffect } from "react";
import ScrolltoTop from "../Components/ScrolltoTop";
import Partners from "../Components/Partners";

// import { useNavigate } from 'react-router-dom';


const Hero = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <div
        className="relative flex lg:flex-row flex-col items-center lg:justify-between lg:px-0 px-4 pt-24
         max-w-screen-xl lg:mx-auto justify-center mt-10 lg:mt-20 md:pt-20 lg:pt-24 xl:pt-24" >

        <div className="h-2/3 flex flex-wrap flex-col lg:h-full gap-6 lg:w-2/6
        text-wrap lg:mt-10 ">

          <h2 className="uppercase" data-aos="fade-up" >
            <span className="pr-3 text-blue-900">
              Memorable
            </span>

            <span className="text-blue-500">
              Events
            </span>
          </h2>



          <p className="text-xl text-justify" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            Festivida is a premier event management company located in Dhaka, Bangladesh,
            dedicated to creating unforgettable experiences through meticulously planned
            and flawlessly executed events all through bangladesh. With a passion for
            innovation and a commitment to excellence, Festivida has established itself
            as a trusted name in the event management industry.
          </p>

          <div className={"w-full flex gap-4 mt-3"}>

            <button className=" text-lg md:mb-10 
               px-4 py-2 rounded-md  bg-card-foreground font-semibold
                bg-gradient-to-b from-[#252966] to-[#009dff]  hover:opacity-70 text-white shadow-md shadow-black"
            >
              <HashLink smooth to='/#contact'>GET STARTED</HashLink>

            </button>
          </div>
        </div>


        <div className={"h-1/2 lg:h-full lg:w-4/6 mr-6 relative cursor-pointer"}
        // data-aos="fade-left"
        // data-aos-offset="300"
        // data-aos-easing="ease-in-sine"
        // data-aos-duration="1000"
        >
          <Carousel images={countries} />
        </div>

      </div>



      <div className="max-w-screen-xl mx-auto my-10" >
        <Partners />
      </div>


      <div className=" flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:pt-20 xl:pt-20 pt-10 max-w-screen-xl mb-10 md:mx-auto mx-4 ">
        <div className=" w-full py-5 ">
          <h2 className=" px-2 mx-2 flex items-center justify-center">
            <span className="px-3 text-blue-800">
              WE'VE GOT
            </span>

            <span className="text-blue-500">
              YOUR BACK
            </span>

          </h2>
          <p className=" text-center pt-5  flex-wrap text-wrap px-2 text-xl max-w-screen-xl mx-auto" data-aos="fade-top"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine">
            We are a full service national event planning and design studio
            based in Dhaka, Bangladesh.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto container px-4 xl:px-0 md:mb-[10rem]">
        <div className="flex flex-col">

          <div className=" grid lg:grid-cols-2 gap-x-1 gap-y-1 items-center">

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={corporate} alt="meeting" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-amber-50 text-center font-semibold'>
                  Corporate Events
                </h2>


                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#mob_corporate'>LEARN MORE</HashLink>
                </button>

                <button className=" hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#corporate'>LEARN MORE</HashLink>
                </button>



              </div>

            </div>


            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={entertainment} alt="concert" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-semibold '>
                  Entertainment Event
                </h2>
                <Link to={"/service"}>

                  <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                    <HashLink slot to='/service/#mob_entertainment'>LEARN MORE</HashLink>
                  </button>

                  <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                    <HashLink slot to='/service/#entertainment'>LEARN MORE</HashLink>
                  </button>

                </Link>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={social} alt="wedding" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-semibold '>
                  Social Event

                </h2>

                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm ">
                  <HashLink slot to='/service/#mob_social'>LEARN MORE</HashLink>
                </button>

                <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm ">
                  <HashLink slot to='/service/#social'>LEARN MORE</HashLink>
                </button>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={marketing} alt="videography" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-semibold'>
                  Marketing &
                  <br />
                  Promotion
                </h2>
                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#mob_marketing'>LEARN MORE</HashLink>
                </button>
                <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#marketing'>LEARN MORE</HashLink>
                </button>

              </div>
            </div>

          

            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={trade} alt="trade" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-semibold'>
                  Trade Fair
                </h2>

                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#mob_trade'>LEARN MORE</HashLink>
                </button>

                <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#trade'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>


            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={videography} alt="birthday" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-semibold'>
                  Photo &  <br />
                  Videography
                </h2>
                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#mob_photovideo'>LEARN MORE</HashLink>
                </button>
                <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#photovideo'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={concert} alt="business" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-semibold '>
                  Concert
                </h2>
                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#mob_concert'>LEARN MORE
                  </HashLink>
                </button>

                <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#concert'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 object-cover h-[350px] w-[650px]" src={postevent} alt="award" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-semibold'>
                  Post-Event Analysis
                </h2>
                <button className="md:hidden bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm ">
                  <HashLink slot to='/service/#mob_postevent'>LEARN MORE</HashLink>
                </button>
                <button className="hidden md:inline-block bg-gradient-to-b from-slate-300 to-blue-300 text-blue-800 text-md hover:bg-gradient-to-b font-semibold
                hover:from-blue-500 hover:to-amber-200 hover:text-gray-700  px-2 py-1 rounded-sm ">
                  <HashLink slot to='/service/#postevent'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>



      <div className="mt-16 pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6  mb-10 md:mx-auto mx-4 
      lg:px-20 xl:px-20  max-w-screen-xl  ">
        <h2 >
          <span className="text-blue-800 pr-2">
            GET IN
          </span>
          <span className="text-blue-500">
            TOUCH
          </span>

        </h2>
        <p className="text-xl text-wrap flex-wrap px-2 mx-2 max-w-screen-xl text-center md:mb-5 ">
          At Festivida, we try to turn your visions into reality. Tell us a bit about yourself,
          <br />
          and you can directly contact us at +880 1304177789.
        </p>

      </div>



      <div className=" flex flex-wrap justify-center items-center" data-aos="flip-left" data-aos-duration="1000" id="contact" >
        <Contact />
      </div>


      <div className="max-w-screen-xl mx-auto" data-aos="fade-left" data-aos-duration="1000">
        <Location />
      </div>



      <div className="max-w-screen-xl mx-auto my-10">
        <ScrolltoTop />
      </div>


    </>

  );
};

export default Hero;