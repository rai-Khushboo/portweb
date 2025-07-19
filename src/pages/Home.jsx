import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import me from '../assets/img/me.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import About from './About'; // Adjust the import paths as needed
import Projects from './Projects';
import TechStacks from './TechStacks';
import Certifications from './Certifications';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='bg-black'>
      <div className='bg-black grid grid-cols-1 sm:grid-cols-3 gap-10 md:h-[80vh] mx-auto py-16 rounded-b-3xl shadow-lg'>
        <div className="col-span-2 px-6 ml-3 flex flex-col justify-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Hello👋
            <br />
            <span className="text-primary-light text-4xl sm:text-5xl lg:text-5xl mb-5 font-black">I'm Khushboo</span>
            <br />
            <TypeAnimation className='text-primary-light text-4xl sm:text-5xl lg:text-7xl mt-10 font-bold drop-shadow-md'
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
          <p className="text-white text-lg sm:text-xl my-8 lg:text-base/loose">
            I'm Khushboo Kumari, a pre-final year IT student at JSS Noida, passionate about frontend development, building user-friendly interfaces with React and Tailwind CSS, and solving problems through code.
          </p>  
            <div className='my-10'>
            <a 
              href="https://drive.google.com/file/d/1vkXngHuGSKfk2eU5XsG8LImzurO6_zGz/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='px-10 py-3 w-full rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-transform border-2 border-primary hover:scale-105 shadow-lg'
            >
              View Resume ↓
            </a>
          </div>
          {/* Social Links Section */}
          <div className="flex flex-row space-x-6 mt-6">
            <a href="https://www.linkedin.com/in/khushboo-kumari-b08973255/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125">
              <FaLinkedin size={30} />
            </a>
            <a href="https://x.com/khushboo_raii" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125">
              <FaTwitter size={30} />
            </a>
            <a href="https://github.com/rai-Khushboo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125">
              <FaGithub size={30} />
            </a>
            <a href="mailto:khushboo83687@gmail.com" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-shrink-0 m-14 flex justify-center items-center sm:block">
          <img 
            src={me} 
            className="rounded-full border-4 border-primary shadow-2xl w-56 h-56 object-cover transition-transform transform hover:scale-110" 
            alt="Khushboo" 
          />
        </div>
      </div>
      {/* Render other components directly */}
      <div className="py-16">
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
