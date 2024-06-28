
import React from "react";
import corporate from "../assets/corporate.jpg";
import wedding from "../assets/p7.jpg";
import concert from "../assets/concert.jpg";
import videography from "../assets/videograpy.jpg";
import cellular from "../assets/cellular.jpg";
import award from "../assets/award.jpg";
import trade from "../assets/trade-fair.jpg";
import birthday from "../assets/birthday.jpg";
import meeting from "../assets/meeting.jpg";
import Contact from '../Components/contact';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import ScrollTop from '../Components/ScrolltoTop';

function About() {
  const missionContent = "Our mission is to transform our clients' visions into reality by delivering exceptional events that exceed expectations. We aim to provide comprehensive event management solutions that cater to diverse needs, ensuring every event is unique, memorable, and successful. ";
  const visionContent = "Our mission is to transform our clients' visions into reality by delivering exceptional events that exceed expectations. We aim to provide comprehensive event management solutions that cater to diverse needs, ensuring every event is unique, memorable, and successful.  ";
  const promiseContent =
    "To excel in event planning, focus on building strong client relationships by understanding their unique needs and tailoring events accordingly. Stay informed about industry trends and customer preferences to offer innovative solutions. Diversify your services to cover all aspects of event planning, maintain positive vendor relationships, invest in staff training, and incorporate sustainability practices to appeal to environmentally conscious clients and attendees.";
  const whyCompanyContent = [
    {
      icon: (
        <svg
          className="w-6 h-6 fill-current text-blue-500"
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
          className="w-6 h-6 fill-current text-blue-500"
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
          className="w-6 h-6 fill-current text-blue-500"
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
          className="w-6 h-6 fill-current text-blue-500"
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
    { name: "John Doe", position: "CEO", img: birthday},
    { name: "Jane Smith", position: "CTO", img: meeting },
  ];

  return (
    <>
    <Navbar />
    <div className="p-4  text-[#01579b] mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row shadow-lg">
        <div className="md:w-1/2 p-4">
          <i className="fa-solid fa-bullseye text-4xl mb-2"></i>
          <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
          <p>{missionContent}</p>
          <img
            src= {trade}
            className="w-full h-[200px] mt-4 our-vision-animate"
            alt="Illustrating our mission"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <i className="fa-solid fa-eye text-4xl mb-2"></i>
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p>{visionContent}</p>
          <img
            src={wedding}
            className="w-full h-[200px] mt-4 our-vision-animate"
            alt="Illustrating our vision"
          />
        </div>
      </div>

      <div className="p-4 shadow-lg">
        <i className="fa-solid fa-handshake text-4xl mb-2"></i>
        <h2 className="text-2xl font-bold mb-2">What We Promise</h2>
        <p>{promiseContent}</p>
        <img
          src= {concert}
          className="w-full h-[200px] mt-4"
          alt="Illustrating our promise"
        />
      </div>

      <div className="p-4 shadow-lg">
        <i className="fa-solid fa-building text-4xl mb-2"></i>
        <h2 className="text-2xl font-bold mb-2">Why This Company</h2>
        <ul className="list-none ml-5">
          {whyCompanyContent.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-start mb-2 why-company-icon">

                <div className="text-xl mr-3"> {item.icon} </div>
                {/* <i className={`${item.icon} text-xl mr-3`}></i> */}
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Top Management</h2>
        <div className="flex flex-col md:flex-row">
          {topManagement.map((person, index) => (
            <div key={index} className="md:w-1/2 p-4 text-center">
              <img
                src={person.img}
                className="w-[150px] h-[150px] rounded-full mx-auto mb-4"
                alt={`Photo of ${person.name}`}
              />
              <h3 className="font-semibold">{person.name}</h3>
              <p>{person.position}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .our-vision-animate {
          animation: fadeInUp 1s ease-in-out;
        }
        .why-company-icon {
          animation: bounceIn 1s ease-in-out;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0%, 20%, 40%, 60%, 80%, 100% {
            -webkit-animation-timing-function: cubic-bezier(0.215,0.61,0.355,1);
            animation-timing-function: cubic-bezier(0.215,0.61,0.355,1);
          }
          0% {
            opacity: 0;
            transform: scale3d(.3,.3,.3);
          }
          20% {
            transform: scale3d(1.1,1.1,1.1);
          }
          40% {
            transform: scale3d(.9,.9,.9);
          }
          60% {
            opacity: 1;
            transform: scale3d(1.03,1.03,1.03);
          }
          80% {
            transform: scale3d(.97,.97,.97);
          }
          100% {
            opacity: 1;
            transform: scale3d(1,1,1);
          }
        }
      `}</style>
      <ScrollTop />
    </div>

    
    <Footer />
    </>
  );
}

export default About;