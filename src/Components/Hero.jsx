
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
import ScrolltoTop from "../Components/ScrolltoTop";

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

            <button className=" text-lg mb-10 font-mono
               px-4 py-2 rounded-md  bg-card-foreground bg-gradient-to-b font-extrabold
                from-blue-300 to-teal-300 hover:opacity-70 tracking-wider text-blue-900"
            >
              <HashLink smooth to='/#contact'>GET STARTED</HashLink>

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
        <p className=" text-justify flex-wrap text-wrap px-2 text-xl max-w-screen-xl mx-auto" data-aos="fade-top"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine">
          We are a full service international event planning and design studio
          based in Miami, Florida. Global clients seek our services to plan,
          design, and produce their special events, not only in South Florida,
          but all over the world.
        </p>

      </div>

      <div className="max-w-screen-xl mx-auto container px-2 xl:px-0 py-5">
        <div className="flex flex-col">

          <div className="mt-10 grid lg:grid-cols-2 gap-x-1 gap-y-1 items-center">

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={birthday} alt="meeting" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-amber-50 text-center font-extrabold'>
                  Corporate Events
                </h2>


                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#corporate'>LEARN MORE</HashLink>
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

                  <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm">
                    <HashLink slot to='/service/#entertainment'>LEARN MORE</HashLink>
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

                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm ">
                  <HashLink slot to='/service/#socialevent'>LEARN MORE</HashLink>
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
                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#marketing'>LEARN MORE</HashLink>
                </button>

              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={award} alt="award" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Post-Event Analysis
                </h2>
                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm ">
                  <HashLink slot to='/service/#postevent'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={trade} alt="trade" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Trade Fair
                </h2>
                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#trade'>LEARN MORE</HashLink>
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
                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#photovideo'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 " src={concert} alt="business" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold '>
                  Concert
                </h2>
                <button className="bg-gray-500 text-lg hover:bg-gradient-to-b font-extrabold
                from-blue-500 to-amber-200 hover:text-gray-700 text-amber-100 px-2 py-1 rounded-sm">
                  <HashLink slot to='/service/#concert'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-16 pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
        <h2 >
          GET IN TOUCH
        </h2>
        <p className="text-xl text-wrap flex-wrap px-2 mx-2 max-w-screen-lg text-center mb-10">
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