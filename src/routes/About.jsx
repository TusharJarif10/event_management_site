
import wedding from "../assets/concert.jpg";
import concert from "../assets/concert.jpg";
import trade from "../assets/trade-fair.jpg";
import Jayanta from "../assets/jayanta.jpg";
import chayan from "../assets/chayan.jpg";
import babor from "../assets/babor.jpg";
import shila from "../assets/shila.jpg";
import moynal from "../assets/moynal.jpg";

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ScrollTop from '../Components/ScrolltoTop';

function About() {
  const missionContent = "Our mission is to transform our clients' visions into reality by delivering exceptional events that exceed expectations. We aim to provide comprehensive event management solutions that cater to diverse needs, ensuring every event is unique, memorable, and successful. ";
  const visionContent = "Our goal is to make ourselves memorable, sustainable and your lifetime partner. Your pride by our presentation is our experience and strength for future. With all our expertise and experience and overall, with your support, our ultimate vision is to put ourselves on the MNC shelves.";
  const promiseContent =
    "To excel in event planning, focus on building strong client relationships by understanding their unique needs and tailoring events accordingly. Stay informed about industry trends and customer preferences to offer innovative solutions. Diversify your services to cover all aspects of event planning, maintain positive vendor relationships, invest in staff training, and incorporate sustainability practices to appeal to environmentally conscious clients and attendees.";
  const whyCompanyContent = [
    {
      icon: (
        <svg
          className="w-6 h-6 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 3L8.59 4.41 14.17 10H3v2h11.17l-5.59 5.59L10 17l7-7-7-7z" />
        </svg>
      ),
      title: "Experienced Team",
      detail: "Our team of professionals brings extensive experience and expertise to every event. We have the ability to perform well under pressure and remain calm in crisis situation. We ensure that every aspect of an event is perfect.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M15 3h-4V1H9v2H5c-1.11 0-2 .89-2 2v14l7-3.5L17 19V5c0-1.11-.89-2-2-2zm0 12.5l-5-2.5-5 2.5V5h10v10.5z" />
        </svg>
      ),
      title: "Customized Solutions",
      detail: "We offer personalized event solutions to meet the unique needs of each client. We have the ability to multitask, as the job often requires dealing with multiple parties and tasks concurrently.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M6 2h8l4 4v10c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V4c0-1.11.89-2 2-2zm2 2H4v10h12V7h-5V2H8v2z" />
        </svg>
      ),
      title: "Commitment to Excellence",
      detail: "We are dedicated to delivering high-quality events that leave a lasting impression.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
<path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#FFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>


        </svg>
      ),
      title: "Professionalism",
      detail: "Experienced and dedicated team of event planners. Strong negotiation skills to effectively deal with suppliers and contractors.",
    },
  ];
  const topManagement = [
    { name: "Jayanta Karmaker", position: "Chairman", img: Jayanta},
    { name: "Shila Debi", position: "CEO", img: shila },
    { name: "Zahir Uddin Md. Babor", position: "Managing Director", img: babor },
    { name: "Chayan Debnath", position: "Cheif Operation Officer", img: chayan },
    { name: "Moynal Hossain Saeed", position: "Executive Director", img: moynal },
  ];

  return (
    <>
    <Navbar />
    <div className="px-2 text-[#444545] mx-auto max-w-screen-xl lg:mt-20 mt-5 pt-20 md:pt-20">
      <div className="flex flex-col md:flex-row shadow-lg">
        <div className="md:w-1/2 p-4 mt-5">
          <i className="fa-solid fa-bullseye text-4xl mb-2"></i>
          <h2 className="pb-4">MISSION</h2>
          <p className="text-xl text-justify">{missionContent}</p>
          <img
            src= {trade}
            className="w-full h-[400px] mt-4 our-vision-animate"
            alt="Illustrating our mission"
          />
        </div>
        <div className="md:w-1/2 p-4 mt-5">
          <i className="fa-solid fa-eye text-4xl mb-2"></i>
          <h2 className="pb-4">VISION</h2>
          <p className="text-xl text-justify">{visionContent}</p>
          <img
            src={wedding}
            className="w-full h-[400px] mt-4 our-vision-animate"
            alt="Illustrating our vision"
          />
        </div>
      </div>

      <div className="p-4 shadow-md mt-10">
        <i className="fa-solid fa-handshake text-4xl mb-2"></i>
        <h2 className=" mb-4 ">PROMISE</h2>
        <p className="text-xl text-justify">{promiseContent}</p>
        <img
          src= {concert}
          className="w-full h-[700px] mt-4"
          alt="Illustrating our promise"
        />
      </div>

      <div className="p-4 shadow-md mt-10">
        <i className="fa-solid fa-building text-4xl mb-2"></i>
        <h2 className="mb-4 uppercase">Why This Company</h2>
        <ul className="list-none ml-5">
          {whyCompanyContent.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-start mb-2 why-company-icon">

                <div className="text-xl mr-3"> {item.icon} </div>
                {/* <i className={`${item.icon} text-xl mr-3`}></i> */}
                <div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-xl text-justify">{item.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 shadow-md mt-10">
        <h2 className=" mb-8 pb-8 uppercase">Festivida Overheads</h2>
        <div className="flex flex-col md:flex-row">
          {topManagement.map((person, index) => (
            <div key={index} className="md:w-1/2 p-4 text-center">
              <img
                src={person.img}
                className="w-[180px] h-[250px] rounded-full mx-auto mb-4"
                alt={`Photo of ${person.name}`}
              />
              <h3 className="font-semibold text-lg">{person.name}</h3>
              <p className="text-md">{person.position}</p>
            </div>
          ))}
        </div>
      </div>


      <ScrollTop />
    </div>

    
    <Footer />
    </>
  );
}

export default About;