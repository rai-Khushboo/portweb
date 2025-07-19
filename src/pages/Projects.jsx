import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
// Custom Swiper arrow styles
import '../styles/swiper-arrows.css';
//importing images
import beach from '../assets/img/beach.jpg';
import curr from '../assets/img/curr.jpg';
import amazon from '../assets/img/amazon.jpg';
import Feedback from '../assets/img/Feedback.jpg';
import Citizen from '../assets/img/Citizen.jpg';
import myntra from '../assets/img/myntra.jpg';
import reactPwd from '../assets/img/reactPwd.jpg';
import mini from '../assets/img/mini.jpg';

const projects = [
  {
    title: "Beach Website",
    description: "A resort website built with React.js and Tailwind CSS, showcasing beautiful beach destinations.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo/React/tree/main/Website-beach",
    liveLink: "https://react-beryl-kappa.vercel.app/"
  },
  {
    title: "Currency Converter",
    description: "A user-friendly currency converter application using React, providing real-time exchange rates.",
    thumbnail: curr,
    githubLink: "https://github.com/rai-Khushboo/React/tree/main/currencyConverter",
    liveLink: "https://react-h69x.vercel.app/"
  },
  {
    title: "Amazon dot com Clone",
    description: "A clone of Amazon.com created with HTML, CSS, and JavaScript, replicating key functionalities.",
    thumbnail: amazon,
    githubLink: "https://github.com/rai-Khushboo/amazon.com-Clone",
    liveLink: "https://github.com/rai-Khushboo/amazon.com-Clone"
  },
  {
    title: "FMS JSS Noida",
    description: "A web application using PHP, SQL, and JavaScript for managing feedback of Faculty in the College",
    thumbnail: Feedback,
    githubLink: "https://github.com/rai-Khushboo/FeedbackSystem",
    liveLink: "https://github.com/rai-Khushboo/FeedbackSystem"
  },
  {
    title: "Nagrik Aur Samvidhan SIH@2024",
    description: "A collaborative project focused on Indian citizen rights and duties, developed as part of a hackathon.",
    thumbnail: Citizen,
    githubLink: "https://github.com/Garimas10u/SIH2024",
    liveLink: "https://sih-2024-zeta.vercel.app/"
  },
  {
    title: "WeForShe",
    description: "A project developed for the Myntra Hackerramp@24, addressing the clothing needs and preferences of the Gen-Z audience.",
    thumbnail: myntra,
    githubLink: "https://github.com/rai-Khushboo/Myntra-TechSirens",
    liveLink: "https://github.com/rai-Khushboo/Myntra-TechSirens"
  },
  {
    title: "Random PWD Generator",
    description: "A React application that generates random passwords for enhanced security.",
    thumbnail: reactPwd,
    githubLink: "https://github.com/rai-Khushboo/React-Pwd-Generator/",
    liveLink: "https://react-pwd-generator-k7u6.vercel.app/"
  },
  {
    title: "Some Mini Project",
    description: "A collection of mini projects built using HTML, CSS, and JavaScript, showcasing basic web development skills.",
    thumbnail: mini,
    githubLink: "https://github.com/rai-Khushboo/WebPulse",
    liveLink: "https://github.com/rai-Khushboo/WebPulse/"
  },
];

const ProjectSlider = () => {
  return (
    <div className="relative bg-black">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className="flex justify-center p-4">
            <div className="bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 mx-2 flex flex-col items-center justify-between overflow-hidden w-80 h-96 p-4">
              <img src={project.thumbnail} alt={project.title} className="w-full h-36 object-cover rounded mb-4" />
              <h3 className="text-lg text-white font-bold mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 text-sm text-center mb-4 flex-1">{project.description}</p>
              <div className="flex w-full space-x-2 mt-auto">
                <a href={project.githubLink} className="bg-gray-800 text-white py-2 rounded-md text-center w-1/2 flex justify-center items-center hover:bg-gray-700 transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub <FaExternalLinkAlt className="ml-2" />
                </a>
                <a href={project.liveLink} className="bg-green-500 text-white py-2 rounded-md text-center w-1/2 flex justify-center items-center hover:bg-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  Live Link <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Project = () => {
  return (
    <section className="bg-black py-16 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg text-center">My Projects</h1>
      <div className="w-full max-w-6xl">
        <ProjectSlider />
      </div>
    </section>
  );
};

export default Project;
