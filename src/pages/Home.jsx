import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/img/me.jpeg';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[70vh] mx-auto py-8 bg-gray-900'>
  
        <div className="col-span-2 px-5 ml-3">
          <h1 className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <h2>Hello👋</h2>
            <span className="primary-color">I'm Khushboo </span>
            <br />
            <TypeAnimation className='text-purple-500'
              sequence={[
                "Web Dev",
                1000,
                "Frontend Dev",
                1000,
                "React Js Dev",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-blue-400 sm:text-lg my-6 lg:text-xl">
            I’m Khushboo Kumari, a pre-final year Information Technology student with a passion for front-end development, data structures, and problem-solving.
          </p>
          <div className='my-8 mt-7'>
            <a href="/resume.pdf" download className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-500 to-pink-500 text-white on hover:text-xl'>
              Download Resume ↓
            </a>
          
          </div>
          
          {/* Social Links Section */}
          <div className="flex space-x-6 mt-8">
            <SocialLink 
              href="mailto:khushboo53903@gmail.com"
              icon={<FaEnvelope />}
            />
            <SocialLink 
              href="https://www.linkedin.com/in/khushboo-kumari-b08973255/"
              icon={<FaLinkedin />}
            />
            <SocialLink 
              href="https://x.com/khushboo_raii"
              icon={<FaTwitter />}
            />
            <SocialLink 
              href="https://www.instagram.com/khushboo_.rai"
              icon={<FaInstagram />}
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 m-14">
          <img src={me} className="rounded-full shadow-lg w-60 transition-transform transform hover:scale-110" alt="khushboo" />
        </div>
      </div>
    </>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Home;
