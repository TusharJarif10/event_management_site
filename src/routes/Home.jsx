import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';



const Home = () => {
  return (
    <>
      <Navbar />
      <div className='text-wrap'>
        <Hero />
      </div>
     
      <Footer />
    </>
  );
};

export default Home;
