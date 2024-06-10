import { useMediaQuery } from '../hooks/use-media-query';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import fes from "../assets/festivida.png";

const Portfolio = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:Festivida74@Gmail.com?subject=Hello&body=This is the email body.';
    };


    const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

    return isDesktop ? (
        <>
            <Navbar />

            <div className='relative flex flex-col justify-center items-center px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-10 mb-20 pb-5 lg:pt-10 xl:pt-10'>

                <h1 className='mb-10'>
                    PORTFOLIO
                </h1>

                <p className='md:text-xl text-justify flex-wrap text-wrap px-2 mx-2 font-extralight'>
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

            <div className="my-10 pt-5  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2 className='px-5 text-center text-balance'>
                    FOLLOW US ON INSTAGRAM
                </h2>

                <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                    <p className='text-2xl'>
                        @Festivida
                    </p>
                </a>

            </div>

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




            <Footer />
        </>

    ) : (
        <>
            <Navbar />
            <Gallery />

            <div className="my-10 pt-5  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2 className='px-5 text-center text-balance'>
                    FOLLOW US ON INSTAGRAM
                </h2>

                <a href="https://www.instagram.com/festivida_event?igsh=dm5qdnBwdWc5cnRp">
                    <p className='text-2xl'>
                        @Festivida
                    </p>
                </a>

            </div>

            <Footer />
        </>

    )




}

export default Portfolio;
