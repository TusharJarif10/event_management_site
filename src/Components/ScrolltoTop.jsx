import { RiArrowUpCircleFill } from "react-icons/ri";

const ScrolltoTop = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

  return (
    <div>
       <div className="">
               
               <button className="bottom-0 left-0 fixed px-2 py-2 text-[#31acff] animate-bounce"
                   onClick={scrollToTop}>
                   <RiArrowUpCircleFill  size={55} />
               </button>
           </div>
    </div>
    
  )
}

export default ScrolltoTop;
