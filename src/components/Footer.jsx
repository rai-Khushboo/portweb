import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black border-t-4 border-primary text-white py-6 px-4 flex flex-col items-center space-y-4">
      <div className="flex space-x-6 mb-2">
        <a href="https://github.com/rai-Khushboo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125" title="GitHub">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/khushboo-kumari-b08973255/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125" title="LinkedIn">
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:khushboo83687@gmail.com" className="text-gray-300 hover:text-primary transition-transform transform hover:scale-125" title="Email">
          <FaEnvelope size={28} />
        </a>
      </div>
      <p className="text-center text-gray-400 text-sm">&#169; {new Date().getFullYear()} Khushboo Kumari. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
