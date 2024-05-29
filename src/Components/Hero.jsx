
import hero3 from "../assets/hero3.png";
import corporate from "../assets/corporate.jpg";
import wedding from "../assets/wedding.jpg";
import concert from "../assets/concert.jpg";
import videography from "../assets/videograpy.jpg";
import cellular from "../assets/cellular.jpg";

import { Button } from '@mui/material';



// import { useNavigate } from 'react-router-dom';


const Hero = () => {
  // const navigate = useNavigate();

  return (
    <>

      <div
        className="relative flex flex-col lg:flex-row px-4 mx-4 sm:px-8 md:px-12
               lg:px-20 xl:px-48 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10 flex-wrap text-wrap"
               >
        {/* text-container */}
        <div className="h-1/2 flex flex-wrap flex-col lg:h-full lg:w-2/4 gap-8 items-center justify-center px-2">
          {/* title */}
          <h1 >Unforgettable Events, Perfectly Crafted</h1>
          {/* desc */}
          <p className="md:text-xl text-justify flex-wrap text-wrap">
            Welcome to Festivida, where every occasion becomes a cherished
            memory. We specialize in creating bespoke events tailored to your
            vision, offering a comprehensive range of services including
            exquisite decoration, seamless documentation, stunning photo and
            videography, reliable transportation, and delectable catering. Our
            dedicated team is committed to ensuring your event is flawlessly
            executed from start to finish, leaving you free to savor every
            moment. Let us turn your dreams into reality with unparalleled
            expertise and a personal touch. Explore our services and discover
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
            <Button
              variant='contained'
              className=
              " text-xl px-7 rounded-full bg-card-foreground tracking-tighter"
            >
              GET STARTED
            </Button>
          </div>
        </div>

        {/* image-container */}
        <div className={"h-1/2 lg:h-full lg:w-1/2 relative lg:pl-20 xl:pl-20 lg:mt-20 xl:mt-20 pt-10 lg:pt-0"}>
          <img
            src={cellular}
            alt="hero"
            width={600}
            className="object-contain"
          />
        </div>
        {/* <div className={"h-1/2 lg:h-full lg:w-1/2 relative cursor-pointer lg:mt-20 xl:mt-20"} >
          <EmblaCarousel />
        </div> */}

      </div>

      <div className=" flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
        <h2 className="w-5/6 px-2 mx-2 flex items-center justify-center">
          WE'VE GOT YOUR BACK
        </h2>
        <p className="w-5/6 md:text-xl text-justify flex-wrap text-wrap px-2 mx-2">
          We are a full service international event planning and design studio
          based in Miami, Florida. Global clients seek our services to plan,
          design, and produce their special events, not only in South Florida,
          but all over the world.
        </p>

      </div>

      <div className="mx-auto container px-6 xl:px-0 py-5">
        <div className="flex flex-col">

          <div className="mt-10 grid lg:grid-cols-2 gap-x-4 gap-y-4 items-center lg:px-20 lg:mx-10 xl:px-20 xl:mx-10">

            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="group-hover:opacity-60 transition duration-500" src={corporate} alt="corporate-event" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center'>
                  CORPORATE EVENTS
                </h2>
                <Button variant='contained'>
                  LEARN MORE
                </Button>
              </div>

            </div>


            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="group-hover:opacity-60 transition duration-500" src={wedding} alt="weddings" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center'>
                  WEDDINGS
                </h2>
                <Button variant='contained'>
                  LEARN MORE
                </Button>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="group-hover:opacity-60 transition duration-500" src={concert} alt="concert" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center'>
                  CONCERT
                </h2>
                <Button variant='contained'>
                  LEARN MORE
                </Button>
              </div>

            </div>

            <div className=" w-full h-full relative flex justify-center items-center">
              <img className="group-hover:opacity-60 transition duration-500" src={videography} alt="videography" />
              <div className="absolute flex justify-center items-center flex-col gap-2">
                <h2 className='text-[#fdfeff] text-center'>
                  PHOTO & VIDEOGRAPHY
                </h2>
                <Button variant='contained'>
                  LEARN MORE
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>

  );
};

export default Hero;


