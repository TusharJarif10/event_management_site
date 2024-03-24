import {ReactTyped} from 'react-typed';
import { Link } from 'react-router-dom';
import hero1 from "../assets/hero1.jpg";

// import { useNavigate } from 'react-router-dom';


const Hero = () => {
  // const navigate = useNavigate();

  return (
    <>


    
    <div className='text-[#596196]'>
    <img src={hero1} alt="A work table with house plants" className="hidden w-full h-full" />

      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      {/* <p className='text-[#bd664e] text-1xl font-bold p-2'>[growing old is mandatory but growing up is optional] </p> */}
       <div className='flex justify-center items-center'>
       <h1 className='md:text-3xl sm:text-1xl text-1xl font-medium md:py-6'>We Work For </h1>
        <ReactTyped 
           className='md:text-3xl sm:text-1xl text-1xl font-medium text-[#90aedc] pl-3 md:py-6'
           strings={['Opening Ceremony', 'Trade Fair', "Birthday Celebrations", 'Award Ceremony', 'Concert & Entertainment']}
            typeSpeed={80} backSpeed={190} loop/>
       </div>
       
         <div className='flex justify-center items-center'>
           <p className='md:text-4xl sm:text-3xl text-xl text-[#596196] py-4'>Making your dream event a reality.</p>
           {/* <ReactTyped 
           className='md:text-4xl sm:text-3xl text-xl font-mono text-[#67aad0] pl-2'
           strings={['Imaginary', 'Illusions']} typeSpeed={120} backSpeed={140} loop/> */}
         </div>
         {/* <p className='md:text-2xl text-xl font-bold text-[#596196] pt-3'>Welcome to Festivida.</p> */}
         <div>
          <Link to={"/details"}>
          <button className='bg-[#596196] w-[130px] hover:bg-[#6c77bd] text-[#adc4e6] text-[19px] font-semibold px-2 rounded-md my-6 mx-auto py-2'>Get a Tour</button>
          </Link>
         </div>
      </div>
    </div>
    </>
   
  );
};

export default Hero;


