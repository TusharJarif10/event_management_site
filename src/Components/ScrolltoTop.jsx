import { RiArrowUpCircleFill } from "react-icons/ri";

const ScrolltoTop = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

  return (
    <div>
       <div className="">
               
               <button className="px-2 py-2 text-[#2179A9]"
                   onClick={scrollToTop}>
                   <RiArrowUpCircleFill   size={45} />
               </button>
           </div>
    </div>
    
  )
}

export default ScrolltoTop;
