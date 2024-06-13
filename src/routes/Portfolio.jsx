import { useMediaQuery } from '../hooks/use-media-query';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Gallery from '../Components/Gallery';


const Portfolio = () => {

    const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

    return isDesktop ? (
        <>
            <Navbar />

         

            
            <div className='relative flex flex-col justify-center items-center px-4 mx-2 sm:px-8 md:px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-5 lg:pt-10 xl:pt-10'>

                <h2 className='mb-20'>
                    PORTFOLIO
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

            <Gallery />

            <Footer />
        </>

    ) : (
    <>
         <Gallery />
    </>

)




}

export default Portfolio;
