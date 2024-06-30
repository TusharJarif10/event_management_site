
import corporate from "../assets/corporate.jpg";
import wedding from "../assets/wedding.jpg";
import concert from "../assets/concert.jpg";
import videography from "../assets/videograpy.jpg";
import cellular from "../assets/cellular.jpg";
import award from "../assets/award.jpg";
import trade from "../assets/trade-fair.jpg";
import birthday from "../assets/birthday.jpg";
import meeting from "../assets/meeting.jpg";
import Contact from '../Components/contact';
import { Button } from '@mui/material';
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { countries } from './Data';
import Location from '../Components/Location';
import AOS from "aos";
import { useEffect } from "react";

// import { useNavigate } from 'react-router-dom';


const Hero = () => {
  // const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <div
        className="relative flex lg:flex-row flex-col items-center lg:justify-between lg:px-0 px-4 
         max-w-screen-xl lg:mx-auto justify-center mt-10 lg:mt-20" >
    
        <div className="h-2/3 flex flex-wrap flex-col lg:h-full gap-6 lg:w-2/6
        text-wrap lg:mt-10">
   
          <h2 className="uppercase" data-aos="fade-up" >Unforgotable Events</h2>
         
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
    
            <button

              className={"text-lg px-6 py-2 rounded-2xl  bg-card-foreground bg-gray-600 hover:bg-blue-500 tracking-wider text-white"}
              data-aos="zoom-in"
            >
              <HashLink smooth to='/#homecontact'>GET STARTED</HashLink>

            </button>
          </div>
        </div>

   
        <div className={"h-1/2 lg:h-full lg:w-4/6 mr-6 relative cursor-pointer"}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <Carousel images={countries} />
        </div>

      </div>






      <div className=" flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
        <h2 className=" px-2 mx-2 flex items-center justify-center">
          WE'VE GOT YOUR BACK
        </h2>
        <p className=" text-justify flex-wrap text-wrap px-2 text-xl max-w-screen-xl mx-auto" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          We are a full service international event planning and design studio
          based in Miami, Florida. Global clients seek our services to plan,
          design, and produce their special events, not only in South Florida,
          but all over the world.
        </p>

      </div>

      <div className="max-w-screen-xl mx-auto container px-6 xl:px-0 py-5">
        <div className="flex flex-col">

          <div className="mt-10 grid lg:grid-cols-2 gap-x-1 gap-y-1 items-center">

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={birthday} alt="meeting" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  Corporate Events
                </h2>

              
                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl ">
                  <HashLink smooth to='/service/#corporate'>LEARN MORE</HashLink>
                </button>
              </div>

            </div>


            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={trade} alt="concert" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold '>
                  Entertainment Event
                </h2>
                <Link to={"/service"}>

                  <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl">
                     <HashLink smooth to='/service/#entertainment'>LEARN MORE</HashLink>
                  </button>

                </Link>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={wedding} alt="wedding" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold '>
                  Social Event

                </h2>

                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl"> 
                  <HashLink smooth to='/service/#socialevent'>LEARN MORE</HashLink>
                </button>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={videography} alt="videography" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  Marketing &
                  <br />
                  Promotion
                </h2>
                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl ">
                  <HashLink smooth to='/service/#marketing'>LEARN MORE</HashLink>
                </button>

              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={award} alt="award" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Post-Event Analysis
                </h2>
                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl ">
                  <HashLink smooth to='/service/#postevent'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={trade} alt="trade" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Trade Fair
                </h2>
                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl">
                  <HashLink smooth to='/service/#trade'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={birthday} alt="birthday" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Photo &  <br />
                  Videography
                </h2>
                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl">
                  <HashLink smooth to='/service/#photovideo'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 " src={concert} alt="business" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold '>
                  Concert
                </h2>
                <button className="bg-gray-600 hover:bg-blue-500 text-amber-50 px-5 py-3 text-md rounded-2xl">
                  <HashLink smooth to='/service/#concert'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className=" flex flex-wrap justify-center items-center" data-aos="flip-left" data-aos-duration="1000" id="homecontact" >
          <Contact />
        </div>
      

      <div className="max-w-screen-xl mx-auto" data-aos="fade-left" data-aos-duration="1000">
        <Location />
      </div>



      <div className="max-w-screen-xl mx-auto my-10">
        <smoothTop />
      </div>


    </>

  );
};

export default Hero;