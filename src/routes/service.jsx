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


import ScrollTop from '../Components/ScrolltoTop';


const Service = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:Festivida74@Gmail.com?subject=Hello&body=This is the email body.';
    };

    const isDesktop = useMediaQuery("only screen and (min-width: 768px)");

    return isDesktop ? (
        <>
            <Navbar />

            <div className='relative flex flex-col max-w-screen-2xl justify-center items-center mt-20 mx-auto mb-20'>

                <h1 className='mb-10 mt-10'>
                    SERVICES
                </h1>

                <p className='text-2xl text-justify flex-wrap text-wrap px-2 mx-2'>
                    At our event management company, we excel in creating unforgettable experiences through meticulous Event Planning and Coordination. From the initial concept to the final execution, we ensure every detail is perfectly managed, delivering seamless and flawless events. Our Venue Selection service helps find the ideal location that complements your event's theme and requirements. With our strong Vendor Management, we guarantee high-quality services and competitive pricing, thanks to our relationships with top vendors. We handle all Logistics and Operations, from transportation and accommodation to on-site management, ensuring everything runs smoothly. Our Marketing and Promotion strategies maximize visibility and engagement, making your event a standout success.


                    <br />
                    <br />

                    We prioritize Risk Management, preparing comprehensive contingency plans to address any emergencies. After the event, our Post-Event Evaluation gathers valuable feedback, allowing us to continuously enhance our services and exceed your expectations. Trust us to make your event extraordinary, from start to finish.


                </p>
            </div>


            <div
                className=" max-w-screen-2xl relative mt-20 mx-auto pt-20"
                id="corporate" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Corporate Events
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            At our event management company, we specialize in a wide range of Corporate Events, ensuring each one is a resounding success. We expertly organize Conferences, Seminars, AGMs, and Anniversary Celebrations, catering to your company's specific needs. Our team is adept at orchestrating memorable Product and Branch Launches, as well as Corporate Retreats that foster team building and relaxation. We also manage Reunions, Exhibitions, and Trade Shows, creating impactful and engaging experiences for all attendees. Trust us to handle every detail, making your corporate event exceptional and seamless.
                        </p>
                    </div>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={corporate} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="max-w-screen-2xl relative mt-20 mx-auto"
                id="entertainment" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={trade} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Entertainment Event
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company excels in creating spectacular Entertainment Events that captivate and delight. We bring your vision to life with imaginative Theme Parties and vibrant School, College, and University Events. Our expertise extends to organizing unforgettable Concerts, lively Carnivals, and thrilling Music and Dance Festivals. We also produce stunning Fashion Shows that showcase the latest trends in style. With meticulous planning and flawless execution, we ensure every entertainment event is a memorable experience for all attendees. Trust us to deliver an extraordinary event that leaves a lasting impression.
                        </p>
                    </div>
                </div>
            </div>


            <div
                className=" max-w-screen-2xl relative mt-20 mx-auto"
                id="corporate" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Social Event
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company takes pride in crafting unforgettable Social Events tailored to your unique celebrations. From joyous Birthday Celebrations and meticulously planned Weddings for all religions to heartwarming Anniversary Parties and Family Gatherings, we ensure every detail is perfect. We also specialize in festive Eid Celebrations and traditional Puja Celebrations, honoring your cultural and religious traditions. With our expertise and attention to detail, we create memorable and seamless events that bring your vision to life and leave lasting memories for you and your loved ones.
                        </p>
                    </div>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={wedding} alt="" />
                    </div>
                </div>
            </div>




            <div
                className="max-w-screen-2xl relative mx-auto mt-20"
                id="marketing" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={videography} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Marketing & Promotion
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company excels in Marketing and Promotion, ensuring your event garners maximum visibility and engagement. We develop tailored Event Marketing Strategies that effectively target your audience and amplify your event's reach. Our expertise in Social Media Engagement leverages various platforms to create buzz and interactive experiences, driving attendance and participation. Additionally, we execute impactful Promotional Activities that enhance your event’s presence and appeal. Trust us to elevate your event through innovative and comprehensive marketing and promotion efforts.
                        </p>
                    </div>
                </div>
            </div>


            <div
                className=" max-w-screen-2xl relative mt-20 mx-auto"
                id="postevent" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Post-Event Analysis                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                        </p>
                    </div>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={award} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="max-w-screen-2xl relative mx-auto mt-20"
                id="trade" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={trade} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Trade Fair
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                        </p>
                    </div>
                </div>
            </div>


            <div
                className=" max-w-screen-2xl relative mt-20 mx-auto"
                id="photo" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Photo &
                            Videography
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                        </p>
                    </div>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={birthday} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="max-w-screen-2xl relative mx-auto mt-20"
                id="concert" >
                <div className='flex flex-row gap-10 justify-center items-center px-5'>
                    <div className='lg:w-2/4 xl:w-2/4 w-full'>
                        <img src={concert} alt="" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Concert
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                        </p>
                    </div>
                </div>
            </div>


            <div className=" mt-20 pt-10 flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                <h2>
                    GET IN TOUCH
                </h2>
                <p className="w-5/6 lg:w-3/6 xl:w-3/6 text-2xl text-center flex-wrap text-wrap px-2 mx-2">
                    Tell us a bit about yourself, and we will get in touch as soon as we can. You can also reach us directly at Festivida74@Gmail.com or by phone at 305-298-4618.
                </p>

            </div>

            <div className="flex flex-wrap justify-center items-center">
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

                    <h3 className= text-2xl'>
                        Festivida74@Gmail.com
                    </h3>

                </div>
            </div> */}


            <div className="max-w-screen-2xl mx-auto my-10">
                <ScrollTop />
            </div>


            {/* footer */}
            <div className='bottom-0'>
                <Footer />
            </div>

        </>



    ) : (

        <>
            <Navbar />

            <div className='relative flex flex-col justify-center items-center px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-10 mb-20 pb-5 pt-10'>

                <h1 className='mb-10 lg:mb-20 xl:mb-20 mb-16'>
                    SERVICES
                </h1>

                <p className='text-2xl text-justify flex-wrap text-wrap px-2 mx-2'>
                    At our event management company, we excel in creating unforgettable experiences through meticulous Event Planning and Coordination. From the initial concept to the final execution, we ensure every detail is perfectly managed, delivering seamless and flawless events. Our Venue Selection service helps find the ideal location that complements your event's theme and requirements. With our strong Vendor Management, we guarantee high-quality services and competitive pricing, thanks to our relationships with top vendors. We handle all Logistics and Operations, from transportation and accommodation to on-site management, ensuring everything runs smoothly. Our Marketing and Promotion strategies maximize visibility and engagement, making your event a standout success.


                    <br />
                    <br />

                    We prioritize Risk Management, preparing comprehensive contingency plans to address any emergencies. After the event, our Post-Event Evaluation gathers valuable feedback, allowing us to continuously enhance our services and exceed your expectations. Trust us to make your event extraordinary, from start to finish.
                </p>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id="corporate" >

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Corporate Events
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            At our event management company, we specialize in a wide range of Corporate Events, ensuring each one is a resounding success. We expertly organize Conferences, Seminars, AGMs, and Anniversary Celebrations, catering to your company's specific needs. Our team is adept at orchestrating memorable Product and Branch Launches, as well as Corporate Retreats that foster team building and relaxation. We also manage Reunions, Exhibitions, and Trade Shows, creating impactful and engaging experiences for all attendees. Trust us to handle every detail, making your corporate event exceptional and seamless.
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={corporate} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id="wedding">

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>

                            Entertainment Event
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company excels in creating spectacular Entertainment Events that captivate and delight. We bring your vision to life with imaginative Theme Parties and vibrant School, College, and University Events. Our expertise extends to organizing unforgettable Concerts, lively Carnivals, and thrilling Music and Dance Festivals. We also produce stunning Fashion Shows that showcase the latest trends in style. With meticulous planning and flawless execution, we ensure every entertainment event is a memorable experience for all attendees. Trust us to deliver an extraordinary event that leaves a lasting impression.
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={wedding} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='concert'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Social Event
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company takes pride in crafting unforgettable Social Events tailored to your unique celebrations. From joyous Birthday Celebrations and meticulously planned Weddings for all religions to heartwarming Anniversary Parties and Family Gatherings, we ensure every detail is perfect. We also specialize in festive Eid Celebrations and traditional Puja Celebrations, honoring your cultural and religious traditions. With our expertise and attention to detail, we create memorable and seamless events that bring your vision to life and leave lasting memories for you and your loved ones.
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={concert} alt="" />
                    </div>
                </div>
            </div>

            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='videography'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Marketing &
                            <br />
                            Promotion
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company excels in Marketing and Promotion, ensuring your event garners maximum visibility and engagement. We develop tailored Event Marketing Strategies that effectively target your audience and amplify your event's reach. Our expertise in Social Media Engagement leverages various platforms to create buzz and interactive experiences, driving attendance and participation. Additionally, we execute impactful Promotional Activities that enhance your event’s presence and appeal. Trust us to elevate your event through innovative and comprehensive marketing and promotion efforts.
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={videography} alt="" />
                    </div>
                </div>
            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='award'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>

                            Post-Event Analysis
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={award} alt="" />
                    </div>
                </div>


            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='birthday'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Trade Fair
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
                            Our event management company places great importance on Post-Event Analysis to ensure continuous improvement and client satisfaction. We meticulously gather feedback from attendees and stakeholders, providing detailed reports that assess the event's success and highlight areas for enhancement. This comprehensive analysis allows us to identify strengths and opportunities, ensuring each event we manage is better than the last. Trust us to not only deliver exceptional events but also to refine our services through thorough post-event evaluations.
                        </p>

                    </div>

                    <div className='lg:w-1/3 w-full'>
                        <img src={birthday} alt="" />
                    </div>
                </div>


            </div>


            <div
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='meeting' >

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>

                            Photo &
                            <br /> Videography
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
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
                className="relative flex flex-col justify-between lg:flex-row px-4 mx-2 sm:px-8 px-10 lg:px-12 xl:px-36 mt-20 mb-20 pb-10 lg:pt-10 xl:pt-10" id='trade'>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>

                    <div className='lg:w-1/2 w-full'>
                        <h2 className='pb-5'>
                            Concert
                        </h2>
                        <p className='text-2xl text-justify flex-wrap text-wrap'>
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
                <p className="w-5/6 lg:w-3/6 xl:w-3/6 text-2xl text-center flex-wrap text-wrap px-2 mx-2">
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
                {/* <div className="py-10  flex flex-col items-center justify-center flex-wrap text-wrap gap-6 lg:px-20 xl:px-20">
                    <h2 className='text-2xl'>
                        FOLLOW US ON
                    </h2>

                    <div className='flex justify-between gap-7'>
                        <FaFacebook size={25} />
                        <FaInstagram size={25} />
                    </div>
                </div> */}

                {/* <div className='flex flex-col items-center gap-3'>

                    <div onClick={handleEmailClick} className='flex items-center gap-2 cursor-pointer'>
                        <CgMail size={20} />
                        <p className='text-sm'>
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
