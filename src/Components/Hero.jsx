
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
import ScrollTop from '../Components/ScrolltoTop';
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
        className="relative flex flex-row items-center lg:justify-between xl:justify-between max-w-screen-2xl mx-auto
         justify-center flex-wrap text-wrap mt-10"
      >
        {/* text-container */}
        <div className="h-2/3 flex flex-wrap flex-col lg:h-full lg:w-1/3 gap-6
         items-center justify-center lg:mx-6 xl:mx-6 px-2 mx-2">
          {/* title */}
          <h1 className="uppercase" data-aos="fade-up" >Unforgotable Events</h1>
          {/* desc */}
          <p className="text-2xl text-justify" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            Festivida is a premier event management company located in Dhaka, Bangladesh, dedicated to creating unforgettable experiences through meticulously planned and flawlessly executed events all through bangladesh. With a passion for innovation and a commitment to excellence, Festivida has established itself as a trusted name in the event management industry.
          </p>
          {/* button */}
          <div className={"w-full flex gap-4 mt-3"}>
            {/* <Button
          className={"text-lg px-2 bg-card-foreground text-background"}
          variant={"outline"}
        >
          View Our Work
        </Button> */}
            <button

              className={"text-xl px-6 py-2 rounded-2xl  bg-card-foreground bg-gray-600 hover:bg-blue-500 font-bold tracking-wider text-white"}
data-aos="zoom-in" 
            >
              <HashLink slot to='/#contact'>GET STARTED</HashLink>

            </button>
          </div>
        </div>

        {/* image-container */}
        <div className={"h-1/2 lg:h-full lg:w-1/2 mr-20 relative cursor-pointer lg:mt-20 xl:mt-20" }
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        >
          <Carousel images={countries} />
        </div>



        {/* <div className={"h-1/2 lg:h-full lg:w-1/2 relative cursor-pointer lg:mt-20 xl:mt-20"} >
          <EmblaCarousel />
        </div> */}

      </div>

      <div className=" flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
        <h2 className=" px-2 mx-2 flex items-center justify-center">
          WE'VE GOT YOUR BACK
        </h2>
        <p className=" text-justify flex-wrap text-wrap px-2 text-2xl max-w-screen-2xl mx-auto" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
          We are a full service international event planning and design studio
          based in Miami, Florida. Global clients seek our services to plan,
          design, and produce their special events, not only in South Florida,
          but all over the world.
        </p>

      </div>

      <div className="mx-auto container px-6 xl:px-0 py-5">
        <div className="flex flex-col">

          <div className="mt-10 grid lg:grid-cols-2 gap-x-1 gap-y-1 items-center">

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={birthday} alt="meeting" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  Corporate Events
                </h2>

                {/* <button className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full" >
                      <HashLink slot to='/#contact'>CONTACT NOW</HashLink>

                    </button> */}
                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#corporate'>Learn More</HashLink>
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

                  <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                    <HashLink slot to='/service/#entertainment'>Learn More</HashLink>
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

                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#socialevent'>Learn More</HashLink>
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
                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#marketing'>Learn More</HashLink>
                </button>

              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-right" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={award} alt="award" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Post-Event Analysis
                </h2>
                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#postevent'>Learn More</HashLink>
                </button>
              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center" data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={trade} alt="trade" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  Trade Fair
                </h2>
                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#trade'>Learn More</HashLink>
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
                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#photo'>Learn More</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center " data-aos="fade-left" data-aos-duration="1500">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 " src={concert} alt="business" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold '>
                  Concert
                </h2>
                <button className="bg-gray-600 text-amber-50 px-5 py-3 text-xl rounded-2xl">
                  <HashLink slot to='/service/#concert'>Learn More</HashLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-5 pt-5 flex flex-col items-center justify-center 
      flex-wrap text-wrap gap-4 lg:px-20 xl:px-20" id="contact">
        <h2>
          GET IN TOUCH
        </h2>
        <p className="text-2xl text-wrap flex-wrap px-2 mx-2 max-w-screen-lg text-center">
          Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com.
        </p>
        <div className=" flex flex-wrap justify-center items-center" >
          <Contact />
        </div>
      </div>

      <div>
        <Location />
      </div>

      {/* <div className="my-10 pt-5  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
        <h2 className='px-5 text-center text-balance '>
          FOLLOW US ON INSTAGRAM
        </h2>

        <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
          <p className='text-4xl font-extralight italic hover:text-blue-500'>
            @Festivida
          </p>
        </a>
      </div> */}


      <div className="max-w-screen-2xl mx-auto my-10">
        <ScrollTop />
      </div>


    </>

  );
};

export default Hero;