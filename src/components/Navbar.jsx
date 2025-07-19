import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaCertificate, FaEnvelope, FaCog } from 'react-icons/fa';
import { LuCode2 } from "react-icons/lu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-black border-b-4 border-primary shadow-lg p-4 sticky top-0 z-50">
      <div className="flex items-center justify-between container mx-auto text-lg text-white">
        {/* Logo element */}
        <Link to="/" className="text-4xl p-2 rounded-full border-4 border-primary bg-black/60 shadow-lg text-primary flex items-center justify-center cursor-pointer transition-transform hover:scale-110" title="Home">
          <LuCode2 />
        </Link>
        {/* Desktop Navigation items */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary">
            <FaHome className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary hover:decoration-white">Home</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary">
            <FaInfoCircle className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/about" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">About</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary">
            <FaProjectDiagram className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/projects" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Projects</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary">
            <FaCog className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/techstacks" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">TechStacks</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary">
            <FaCertificate className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/certifications" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Certifications</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary">
            <FaEnvelope className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/contact" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Contact</Link>
          </li>
        </ul>
        {/* Mobile menu button (hamburger) */}
        <button onClick={handleMenuToggle} className="md:hidden flex items-center px-3 py-2 border rounded text-white border-primary hover:bg-primary/20 transition-colors focus:outline-none">
          <svg className="fill-current h-6 w-6" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-xl py-4 px-6 space-y-4 text-lg">
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleLinkClick}>
            <FaHome className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Home</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleLinkClick}>
            <FaInfoCircle className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/about" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">About</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleLinkClick}>
            <FaProjectDiagram className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/projects" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Projects</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleLinkClick}>
            <FaCog className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/techstacks" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">TechStacks</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleLinkClick}>
            <FaCertificate className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/certifications" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Certifications</Link>
          </li>
          <li className="flex items-center group transition hover:bg-primary/30 hover:text-primary rounded px-2 focus-visible:ring-2 focus-visible:ring-primary" onClick={handleLinkClick}>
            <FaEnvelope className="text-white mr-2 transition-colors duration-300 group-hover:text-primary" />
            <Link to="/contact" className="text-white transition-colors duration-300 group-hover:text-primary hover:text-primary  hover:decoration-white">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;