import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {motion, useScroll, useTransform } from "framer-motion";
import image4 from "../assets/d.jpg";
import image5 from "../assets/e.jpg";
import image6 from "../assets/f.jpg";
import subtract from "../assets/Subtract.png";
import view from "../assets/view.jpg";

const Lifestyle = () => {

// const ref = useRef(null);
// const { scrollYProgress } = useScroll({
//   target: ref,
//   offset: ["start start", "end start"],
// });
// const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
// const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);


  return (
    <>
    <Navbar  />

 {/* <div ref={ref}
  className="w-full  overflow-hidden relative grid place-items-center h-[900px] ">

  <motion.h1
  style={{ y: textY }} 
  className="font-bold pb-[300px] text-white text-7xl md:text-9xl relative z-10">
    Navila Tanna
  </motion.h1>

<motion.div
className="absolute inset-0 z-0"
style={{
  backgroundImage: `url(/assets/view.jpg)`,
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  y: backgroundY,
}}
 />

<div className="absolute inset-0 z-0">
<img className="w-[1920px] h-[1280px]" src={view} alt="shoes and clothes" />
</div>

<div className="absolute inset-0 z-20">
<img className="w-[1920px] h-[999px]" src={subtract} alt="shoes and clothes" />
</div>


 </div> */}
 <Footer />
 </>
  )
}

export default Lifestyle;
