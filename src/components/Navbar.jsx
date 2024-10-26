import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaCertificate, FaEnvelope, FaCog } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-gray-950  p-5">
      <div className="flex items-center justify-between container mx-auto text-lg text-white">
        {/*Logo element- will add later */}
        <p className="text-lg"></p>
        
        {/* Navigation items */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="flex items-center group">
            <FaHome className="text-white mr-2 transition-colors duration-300 group-hover:text-blue-400" />
            <Link to="/" className="text-white transition-colors duration-300 group-hover:text-blue-400">Home</Link>
          </li>
          <li className="flex items-center group">
            <FaInfoCircle className="text-white mr-2 transition-colors duration-300 group-hover:text-blue-400" />
            <Link to="/about" className="text-white transition-colors duration-300 group-hover:text-blue-400">About</Link>
          </li>
          <li className="flex items-center group">
            <FaProjectDiagram className="text-white mr-2 transition-colors duration-300 group-hover:text-blue-400" />
            <Link to="/projects" className="text-white transition-colors duration-300 group-hover:text-blue-400">Projects</Link>
          </li>
          <li className="flex items-center group">
            <FaCog className="text-white mr-2 transition-colors duration-300 group-hover:text-blue-400" />
            <Link to="/techstacks" className="text-white transition-colors duration-300 group-hover:text-blue-400">TechStacks</Link>
          </li>
          <li className="flex items-center group">
            <FaCertificate className="text-white mr-2 transition-colors duration-300 group-hover:text-blue-400" />
            <Link to="/certifications" className="text-white transition-colors duration-300 group-hover:text-blue-400">Certifications</Link>
          </li>
          <li className="flex items-center group">
            <FaEnvelope className="text-white mr-2 transition-colors duration-300 group-hover:text-blue-400" />
            <Link to="/contact" className="text-white transition-colors duration-300 group-hover:text-blue-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
