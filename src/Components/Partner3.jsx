import React from "react";
import Marquee from "react-fast-marquee";

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.png"


const Partner3 = () => {
    return (


        <div className="2xl:mx-auto 2xl:container  lg:px-20 md:px-6 mx-10 ">

                <div className="flex flex-col justify-center items-center text-center space-y-4">
                     <h1 className=" text-center mb-5 uppercase">Our  Partners</h1>
                     <p className=" text-xl text-base  text-center text-gray-600 w-full md:w-10/12"> It has been the most incredible journey. We work with some of the best institution and company across the nation</p>
                 </div>
        

            <div className="gap-x-2 gap-y-6 xl:gap-x-5 mt-10">
                <Marquee autoFill pauseOnHover >

                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p1} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p2} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p3} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p4} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p5} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p6} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                    <div className="mx-6 focus:outline-none  flex justify-center items-center">
                        <img src={p7} alt="logo" className="md:cursor-pointer  h-[100px]  drop-shadow-lg"  />
                    </div>
                 
                    

                
                </Marquee>
            </div>
        </div>
    );
};

export default Partner3;