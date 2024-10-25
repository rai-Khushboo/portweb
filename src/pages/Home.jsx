import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/img/me.jpeg';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import About from './About'; // Adjust the import paths as needed
import Projects from './Projects';
import TechStacks from './TechStacks';
import Certifications from './Certifications';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='bg-gray-900'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 md:h-[80vh] mx-auto py-16'>
        <div className="col-span-2 px-6 ml-3">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4">
            Hello👋
            <br />
            <span className="primary-color text-4xl sm:text-5xl lg:text-5xl mb-5">I'm Khushboo</span>
            <br />
            <TypeAnimation className='text-blue-500 text-4xl sm:text-5xl lg:text-7xl mt-10'
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
          <p className="text-white text-lg sm:text-xl my-8 lg:text-xl">
            I’m Khushboo Kumari, a pre-final year Information Technology student with a passion for front-end development and problem-solving.
          </p>
          <div className='my-10'>
            <a href="/khushbooResume.pdf" download className='px-10 py-3 w-full rounded-xl bg-gradient-to-br from-blue-500 to-pink-300 text-white hover:font-extrabold transition-transform'>
              Download Resume ↓
            </a>
          </div>
          
          {/* Social Links Section */}
            <div className="flex flex-row space-x-6 mt-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500">
                <FaTwitter size={30} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400">
                <FaGithub size={30} />
              </a>
              <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-red-500">
                <FaEnvelope size={30} />
              </a>
            </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 m-14 hidden sm:block">
          <img 
            src={me} 
            className="rounded-full shadow-lg w-60 transition-transform transform hover:scale-110 
              shadow-blue-500/100 shadow-md" 
            alt="Khushboo" 
          />
        </div>
      </div>

      {/* Render other components directly */}
      <div className="py-8">
        <About />
        <Projects />
        <TechStacks />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
