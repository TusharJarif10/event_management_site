
import React from "react";
import corporate from "../assets/corporate.jpg";

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

function About1({
  mission,
  vision,
  promise,
  companyReasons,
  management,
}) {
  return (
    <div className="font-roboto bg-sky-100 p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-sky-900">About Us</h1>
        <p className="text-lg text-sky-700">
          We are dedicated to providing top-notch solutions in web development,
          focusing on React.js.
        </p>
        <img
          src="team.jpg"
          alt="ReactJS Team"
          className="w-full h-[300px] object-cover rounded-lg shadow-md mx-auto"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded-md relative">
          <h2 className="text-2xl font-semibold text-sky-900 flex items-center space-x-2">
            <span>Our Mission</span>
            <i className="fas fa-bullseye text-sky-700"></i>
          </h2>
          <p className="text-sky-700">{mission}</p>
          <img
            src="mission.jpg"
            alt="Mission"
            className="w-full h-[200px] object-cover rounded-lg shadow-md mt-4"
          />
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-sky-900 flex items-center space-x-2">
            <span>Our Vision</span>
            <i className="fas fa-eye text-sky-700"></i>
          </h2>
          <p className="text-sky-700">{vision}</p>
          <img
            src="vision.jpg"
            alt="Vision"
            className="w-full h-[200px] object-cover rounded-lg shadow-md mt-4"
          />
        </div>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md relative">
        <h2 className="text-2xl font-semibold text-sky-900 flex items-center space-x-2">
          <span>What We Promise</span>
          <i className="fas fa-handshake text-sky-700"></i>
        </h2>
        <p className="text-sky-700">{promise}</p>
        <img
          src="promise.jpg"
          alt="Promise"
          className="w-full h-[200px] object-cover rounded-lg shadow-md mt-4"
        />
      </div>

      <div className="bg-white p-6 shadow-md rounded-md relative">
        <h2 className="text-2xl font-semibold text-sky-900 flex items-center space-x-2">
          <span>Why This Company</span>
          <i className="fas fa-lightbulb text-sky-700"></i>
        </h2>
        <ul className="list-disc list-inside text-sky-700">
          {companyReasons.map((reason, index) => (
            <li key={index} className="flex items-start space-x-2 my-4">
              <i
                className={`fas ${reason.icon} text-sky-700 animate-bounce`}
              ></i>
              <div>
                <h3 className="font-semibold">{reason.title}</h3>
                <p>{reason.detail}</p>
              </div>
              <img
                src= {birthday}
                alt= "something"
                className="w-[100px] h-[100px] object-cover rounded-lg shadow-md"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 shadow-md rounded-md relative">
        <h2 className="text-2xl font-semibold text-sky-900 flex items-center space-x-2">
          <span>Top Management</span>
          <i className="fas fa-users text-sky-700"></i>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {management.map((person, index) => (
            <div key={index} className="text-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-[150px] object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="font-semibold text-sky-900">{person.name}</h3>
              <p className="text-sky-700">{person.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}

function StoryComponent() {
  const mission =
    "We aim to provide innovative and efficient web solutions using React.js.";
  const vision =
    "To be the leading firm in React.js development, setting benchmarks in the industry.";
  const promise =
    "Quality, efficiency, and innovation in every project we undertake.";
  const companyReasons = [
    {
      icon: "fas fa-cogs",
      title: "Innovative Solutions",
      detail:
        "Our team continuously develops innovative solutions to improve user experience.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security",
      detail: "We prioritize security to protect your data at all times.",
    },
    {
      icon: "fas fa-thumbs-up",
      title: "Customer Satisfaction",
      detail: "Customer satisfaction is our top priority.",
    },
  ];
  const management = [
    {
      name: "John Doe",
      role: "CEO",
      image: "ceo.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "cto.jpg",
    },
    {
      name: "Sam Wilson",
      role: "CFO",
      image: "cfo.jpg",
    },
  ];

  return (
    <About1
      mission={mission}
      vision={vision}
      promise={promise}
      companyReasons={companyReasons}
      management={management}
    />
  );
}

export default About1;