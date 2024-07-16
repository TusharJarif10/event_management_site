import { useMediaQuery } from '../hooks/use-media-query';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import fes from "../assets/festivida.png";
import Contact from '../Components/contact';
import AOS from "aos";
import ScrollTop from '../Components/ScrolltoTop';
import { useEffect } from "react";


const Portfolio = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const handleEmailClick = () => {
        window.location.href = 'mailto:Festivida74@Gmail.com?subject=Hello&body=This is the email body.';
    };


    const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

    return isDesktop ? (
        <>
            <Navbar />

            <div className='max-w-screen-xl mx-auto pt-20'>
                <div className='relative flex flex-col justify-center items-center xl:pt-10 lg:pt-10 xl:mt-20 lg:mt-20'>

                    <h1 className='mb-10' data-aos="zoom-in-right">
                        PORT<span className='text-blue-500'>FOLIO </span>
                    </h1>

                    <p className='text-xl text-justify flex-wrap text-wrap pb-10' data-aos="zoom-in-left">
                        Festivida is a premier event management company located in Dhaka, Bangladesh, dedicated to creating unforgettable experiences through meticulously planned and flawlessly executed events all through bangladesh. With a passion for innovation and a commitment to excellence, Festivida has established itself as a trusted name in the event management industry.

                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500">
                    <Gallery />
                </div>


                {/* <div className="lg:pt-10 xl:pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                    <h2>
                        GET IN TOUCH
                    </h2>
                    <p className="w-5/6 lg:w-3/6 xl:w-3/6 md:text-xl text-center flex-wrap text-wrap px-2 mx-2 font-extralight">
                        Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com or by phone at 305-298-4618.
                    </p>

                </div>

                <div className=" flex flex-wrap justify-center items-center">
                    <Contact />
                </div> */}

                <div className="my-10 pt-5  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                    <h2 className='px-5 text-center text-balance'>
                        FOLLOW US ON <span className='text-blue-500'>INSTAGRAM</span>
                    </h2>

                    <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                        <p className='text-4xl font-extralight italic hover:text-blue-500'>
                            @Festivida
                        </p>
                    </a>

                </div>

                {/* <div className='flex items-center justify-center gap-20'>
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
                </div> */}

            </div>
            <div className="max-w-screen-xl mx-auto my-10">
                <ScrollTop />
            </div>
            <Footer />
        </>

    ) : (
        <>
            <Navbar />

            <div className='pt-24 relative flex flex-col justify-center items-center px-4 mt-10 pb-5'>

                <h1 className='mb-5'>
                    PORT<span className='text-blue-500'>FOLIO</span>
                </h1>

                <p className='text-lg text-justify flex-wrap text-wrap font-extralight'>
                    welcome to Festivida, where every occasion becomes a cherished
                    memory. We specialize in creating bespoke events tailored to your
                    vision, offering a comprehensive range of services including
                    exquisite decoration, seamless documentation, stunning photo and
                    videography, reliable transportation, and delectable catering. Our
                    dedicated team is committed to ensuring your event is flawlessly
                    executed from start to finish, leaving you free to savor every
                </p>
            </div>

            <Gallery />


            {/* <div className="lg:pt-10 xl:pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2>
                    GET IN TOUCH
                </h2>
                <p className="w-5/6 lg:w-3/6 xl:w-3/6 md:text-xl text-center flex-wrap text-wrap px-2 mx-2 font-extralight">
                    Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com or by phone at 305-298-4618.
                </p>

            </div>

            <div className=" flex flex-wrap justify-center items-center">
                <Contact />
            </div> */}

            <div className="my-10 pt-5  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2 className='px-5 text-center text-balance font-extralight'>
                    FOLLOW US ON  <span className='text-blue-500'>INSTAGRAM</span>
                </h2>

                <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                    <p className='text-2xl font-extralight italic hover:text-blue-500'>
                        @Festivida
                    </p>
                </a>

            </div>
            <ScrollTop />
            <Footer />
        </>

    )




}

export default Portfolio;