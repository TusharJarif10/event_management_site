import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import award from "../assets/award.jpg";
import corporate from "../assets/corporate.jpg";
import wedding from "../assets/wedding.jpg";
import concert from "../assets/concert.jpg";
import videography from "../assets/videograpy.jpg";
import trade from "../assets/trade-fair.jpg";
import birthday from "../assets/birthday.jpg";
import meeting from "../assets/meeting.jpg";
import Contact from '../Components/contact';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import fes from "../assets/festivida.png";
import { useMediaQuery } from '../hooks/use-media-query';
import { CgMail } from "react-icons/cg";


const Service = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:Festivida74@Gmail.com?subject=Hello&body=This is the email body.';
    };

    const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

    return isDesktop ? (
        <>
            <Navbar />

            <div className='relative flex flex-col justify-center items-center px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-10 mb-20 pb-5 lg:pt-10 xl:pt-10'>

                <h1 className='mb-10'>
                    SERVICES
                </h1>

                <p className='md:text-xl text-justify flex-wrap text-wrap px-2 mx-2'>
                    welcome to Festivida, where every occasion becomes a cherished
                    memory. We specialize in creating bespoke events tailored to your
                    vision, offering a comprehensive range of services including
                    exquisite decoration, seamless documentation, stunning photo and
                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly
                    executed from start to finish, leaving you free to savor every

                    <br />
                    <br />

                    vision, offering a comprehensive range of services including
                    exquisite decoration, seamless documentation, stunning photo and
                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly

                    <br />
                    <br />

                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly
                </p>
            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="corporate" >
                <div className='flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            CORPORATE EVENTS
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img src={corporate} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="relative flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="wedding" >
                <div className=' flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/3 w-full '>
                        <img src={wedding} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            WEDDINGS
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                </div>
            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="concert" >
                <div className='flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            CONCERT
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img src={concert} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="relative flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="videography">
                <div className=' flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/3 w-full '>
                        <img src={videography} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            PHOTO & VIDEOGRAPHY
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                </div>
            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="award">
                <div className='flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            AWARD CEREMONY
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img src={award} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="relative flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="trade">
                <div className=' flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/3 w-full '>
                        <img src={trade} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            TRADE FAIR
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                </div>
            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id="birthday">
                <div className='flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            BIRTHDAY CELEBRATION
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                    <div className='lg:w-1/3 w-full'>
                        <img src={birthday} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="relative flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10"
                id='meeting'>
                <div className=' flex lg:flex-row flex-col gap-5 justify-between'>
                    <div className='lg:w-1/3 w-full '>
                        <img src={meeting} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            BUSINESS CONFERENCE
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>
                    </div>
                </div>
            </div>

            <div className=" mt-5 pt-5 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2>
                    GET IN TOUCH
                </h2>
                <p className="w-5/6 lg:w-3/6 xl:w-3/6 md:text-xl text-center flex-wrap text-wrap px-2 mx-2 font-extralight">
                    Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com or by phone at 305-298-4618.
                </p>

            </div>

            <div className=" flex flex-wrap justify-center items-center">
                <Contact />
            </div>

            {/* <div className="my-10 pt-10  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2>
                    FOLLOW US ON INSTAGRAM
                </h2>

                <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                    <p className='text-3xl font-extrabold'>
                        @Festivida
                    </p>
                </a>

            </div> */}

            <div className='flex items-center justify-center gap-20'>
                <div className="my-10 pt-10  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                    <h2 className='text-4xl'>
                        FOLLOW US
                    </h2>

                    <div className='flex justify-between gap-10'>
                        <FaFacebook size={35} />
                        <FaInstagram size={35} />
                    </div>
                </div>

                <div>
                    <img className="w-[370px]" src={fes} alt="logo" />
                </div>

                <div onClick={handleEmailClick} className='flex items-center gap-2 cursor-pointer'>
                    <CgMail size={35} />

                    <h3 className='font-extralight text-xl'>
                        Festivida74@Gmail.com
                    </h3>

                </div>
            </div>





            {/* footer */}
            <div className='bottom-0'>
                <Footer />
            </div>

        </>



    ) : (

        <>
            <Navbar />

            <div className='relative flex flex-col justify-center items-center px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-10 mb-20 pb-5 md:pt-10'>

                <h2 className='mb-10 lg:mb-20 xl:mb-20 md:mb-16'>
                    SERVICES
                </h2>

                <p className='md:text-xl text-justify flex-wrap text-wrap px-2 mx-2'>
                    welcome to Festivida, where every occasion becomes a cherished
                    memory. We specialize in creating bespoke events tailored to your
                    vision, offering a comprehensive range of services including
                    exquisite decoration, seamless documentation, stunning photo and
                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly
                    executed from start to finish, leaving you free to savor every

                    <br />
                    <br />

                    vision, offering a comprehensive range of services including
                    exquisite decoration, seamless documentation, stunning photo and
                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly

                    <br />
                    <br />

                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly
                </p>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id="corporate" >

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            CORPORATE EVENTS
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={corporate} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id="wedding">

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            WEDDINGS
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={wedding} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='concert'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            CONCERT
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={concert} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='videography'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            PHOTO &
                            <br />
                            VIDEOGRAPHY
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={videography} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='award'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            AWARD CEREMONY
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={award} alt="" />
                    </div>
                </div>


            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='birthday'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            BIRTHDAY CELEBRATION
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={birthday} alt="" />
                    </div>
                </div>


            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='meeting' >

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            BUSINESS CONFERENCE
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={meeting} alt="" />
                    </div>
                </div>


            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='trade'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            TRADE FAIR
                        </h2>
                        <p className='md:text-xl text-justify flex-wrap text-wrap'>
                            elcome to Festivida, where every occasion becomes a cherished
                            memory. We specialize in creating bespoke events tailored to your
                            vision, offering a comprehensive range of services including
                            exquisite decoration, seamless documentation, stunning photo and
                            videography, reliable transportation, and delectable catering. Our
                            dedicated team is committed to ensuring your event is flawlessly
                            executed from start to finish, leaving you free to savor every
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={trade} alt="" />
                    </div>
                </div>


            </div>

            <div className="lg:pt-10 xl:pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2>
                    GET IN TOUCH
                </h2>
                <p className="w-5/6 lg:w-3/6 xl:w-3/6 md:text-xl text-center flex-wrap text-wrap px-2 mx-2 font-extralight">
                    Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com or by phone at 305-298-4618.
                </p>

            </div>

            <div className=" flex flex-wrap justify-center items-center">
                <Contact />
            </div>

            {/* <div className="my-10 pt-5  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2 className='px-5 text-center text-balance'>
                    FOLLOW US ON INSTAGRAM
                </h2>

                <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                    <p className='text-2xl'>
                        @Festivida
                    </p>
                </a>

            </div> */}
            <div className='flex items-center justify-center gap-10'>
                <div className="py-10  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                    <h2 className='text-xl'>
                        FOLLOW US ON
                    </h2>

                    <div className='flex justify-between gap-7'>
                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                    </div>
                </div>

                {/* <div className='flex flex-col items-center gap-3'>

                    <div onClick={handleEmailClick} className='flex items-center gap-2 cursor-pointer'>
                        <CgMail size={20} />
                        <p className='text-sm font-extralight'>
                            Festivida74@Gmail.com
                        </p>
                    </div>
                    <img className="w-[170px]" src={fes} alt="logo" />
                </div> */}

            </div>

            <div className='bottom-0'>
                <Footer />
            </div>
        </>
    )

};


export default Service;
