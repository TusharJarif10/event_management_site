import Marquee from "react-fast-marquee";

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.png"


const Partners = () => {
    return (

        <div className="  py-10">

            <div className="flex flex-col justify-center items-center text-center space-y-4  py-5 mb-10 md:mx-auto mx-4 " >
                <h2 className=" text-center uppercase">
                    <span className="text-blue-800 pr-3">
                    Trusted by these
                    </span>
                    <span className="text-blue-500">
                    amazing companies
                    </span>
                     </h2>
                <p className=" text-xl text-center text-gray-600 w-full md:w-10/12"> It has been the most incredible journey. We work with some of the best institution and company across the nation.</p>
            </div>


            <div className="gap-x-2 gap-y-6 xl:gap-x-5 mt-10 md:mx-2 mx-4">
                <Marquee autoFill pauseOnHover >

                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p1} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p2} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p3} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p4} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p5} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p6} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p7} alt="logo" className="md:cursor-pointer  md:h-[70px] h-[40px]  drop-shadow-lg" />
                    </div>

                </Marquee>
            </div>
        </div>




        // <div className="bg-gray-100 shadow-xl px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        //     <div className="max-w-2xl mx-auto text-center">
        //         <h2 className="uppercase pt-5">Trusted by these amazing companies</h2>
        //     </div>

        //     <div className="pb-5 grid items-center md:grid-rows-3 md:grid-cols-3 grid-rows-2 grid-cols-2 my-5 space-y-10  justify-center">
        //         <div>
        //             <img className="md:cursor-pointer  md:h-[70px] h-[45px]  drop-shadow-lg mt-10 ml-4 md:ml-0" src={p2} alt="" />
        //         </div>
        //         <div>
        //             <img className="md:cursor-pointer  md:h-[60px] h-[40px]  drop-shadow-lg md:mr-0 mr-4" src={p4} alt="" />
        //         </div>

        //         <div>
        //             <img className="md:cursor-pointer  md:h-[80px]  h-[60px]  drop-shadow-lg md:ml-0 ml-5" src={p1} alt="" />
        //         </div>



        //         <div>
        //             <img className="md:cursor-pointer  md:h-[80px] h-[50px]  drop-shadow-lg" src={p3} alt="" />
        //         </div>



        //         <div>
        //             <img className="md:cursor-pointer  md:h-[80px] h-[50px]  drop-shadow-lg md:ml-0 ml-4" src={p5} alt="" />
        //         </div>

        //         <div>
        //             <img className="md:cursor-pointer  md:h-[60px] h-[40px]  drop-shadow-lg" src={p6} alt="" />
        //         </div>

        //         <div >
        //             <img className="md:cursor-pointer  md:h-[90px] h-[60px]  shadow-xl ml-3 md:ml-0" src={p7} alt="" />
        //         </div>
        //     </div>

        // </div>
    );
};

export default Partners;