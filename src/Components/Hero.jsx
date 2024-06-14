
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



// import { useNavigate } from 'react-router-dom';


const Hero = () => {
  // const navigate = useNavigate();

  return (
    <>

      <div
        className="relative flex flex-col lg:flex-row px-4 mx-4 sm:px-8 md:px-12
               lg:px-10 xl:px-20 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10 flex-wrap text-wrap"
      >
        {/* text-container */}
        <div className="h-1/2 flex flex-wrap flex-col lg:h-full lg:w-1/3 gap-6 items-center justify-center px-2">
          {/* title */}
          <h1 className="uppercase ">Unforgotable Events</h1>
          {/* desc */}
          <p className="md:text-xl text-justify flex-wrap text-wrap font-extralight">
            Welcome to Festivida, where every occasion becomes a cherished
            memory. We specialize in creating bespoke events tailored to your
            vision, offering a comprehensive range of services including
            exquisite decoration, seamless documentation, stunning photo and
            videography, reliable transportation, and delectable catering. Explore our services and discover
            how we can make your next event truly unforgettable.
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

              className={"text-lg px-7 py-2 rounded-full bg-card-foreground tracking-tighter bg-blue-900 text-white"}

            >
               <HashLink slot to='/#contact'>GET STARTED</HashLink>
              
            </button>
          </div>
        </div>

        {/* image-container */}
        <div className={"h-1/2 lg:h-full lg:w-2/3 relative lg:pl-20 xl:pl-20   "}>
         <Carousel images = {countries} />
        </div>
        {/* <div className={"h-1/2 lg:h-full lg:w-1/2 relative cursor-pointer lg:mt-20 xl:mt-20"} >
          <EmblaCarousel />
        </div> */}

      </div>

      <div className=" flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
        <h2 className="w-5/6 px-2 mx-2 flex items-center justify-center">
          WE'VE GOT YOUR BACK
        </h2>
        <p className="w-5/6 md:text-xl text-justify flex-wrap text-wrap px-2 mx-2 font-extralight">
          We are a full service international event planning and design studio
          based in Miami, Florida. Global clients seek our services to plan,
          design, and produce their special events, not only in South Florida,
          but all over the world.
        </p>

      </div>

      <div className="mx-auto container px-6 xl:px-0 py-5">
        <div className="flex flex-col">

          <div className="mt-10 grid lg:grid-cols-2  items-center lg:px-20 lg:mx-10 xl:px-22 xl:mx-12">

            <div className=" w-full h-full relative flex justify-center items-center ">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={corporate} alt="corporate-event" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  CORPORATE EVENTS
                </h2>

                {/* <button className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full" >
                      <HashLink slot to='/#contact'>CONTACT NOW</HashLink>

                    </button> */}
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                  <HashLink slot to='/service/#corporate'>LEARN MORE</HashLink>
                </button>
              </div>

            </div>


            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={wedding} alt="weddings" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  WEDDINGS
                </h2>
                <Link to={"/service"}>

                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#wedding'>LEARN MORE</HashLink>
                </button>
             
                </Link>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={concert} alt="concert" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  CONCERT
                </h2>
                
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#concert'>LEARN MORE</HashLink>
                </button>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={videography} alt="videography" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold'>
                  PHOTO &
                  <br />
                  VIDEOGRAPHY
                </h2>
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#videography'>LEARN MORE</HashLink>
                </button>
                
              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={award} alt="award" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  AWARD CEREMONY
                </h2>
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#award'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={trade} alt="trade" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  TRADE FAIR
                </h2>
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#trade'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>
            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="cursor-pointer transition duration-300 hover:opacity-70" src={birthday} alt="birthday" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center font-extrabold'>
                  BIRTHDAY CELEBRATION
                </h2>
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#birthday'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

            <div className=" w-full h-full relative flex justify-center items-center ">
              <img className="cursor-pointer transition duration-300 hover:opacity-70 " src={meeting} alt="business" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#ffffff] text-center font-extrabold '>
                  BUSINESS CONFERENCE
                </h2>
                <button  className="bg-blue-900 text-amber-50 px-5 py-2 rounded-full">
                <HashLink slot to='/service/#meeting'>LEARN MORE</HashLink>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

        

      <div className="mt-5 pt-5 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20" id="contact">
        <h2>
          GET IN TOUCH
        </h2>
        <p className="w-5/6 lg:w-3/6 xl:w-3/6 md:text-xl text-center flex-wrap text-wrap px-2 mx-2 font-extralight">
          Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com or by phone at 305-298-4618.
        </p>
        <div className="flex flex-wrap justify-center items-center" >
          <Contact />
        </div>
      </div>

      <div id="insta" className="my-10 pt-10 pb-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2 className="font-extralight">
                    FOLLOW US ON INSTAGRAM
                </h2>

                <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                    <p className='text-2xl italic hover:underline hover:text-blue-600 font-extralight'>
                        @Festivida
                    </p>
                </a>

            </div>

    </>

  );
};

export default Hero;


