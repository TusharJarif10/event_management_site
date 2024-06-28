import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import ScrollTop from '../Components/ScrolltoTop';
import Location from '../Components/Location';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='text-wrap'>
        <Hero />
      </div>
      <Location/>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Home;
