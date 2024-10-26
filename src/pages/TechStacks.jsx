import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiCplusplus } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

const techStacks = [
  { name: 'C++', icon: <SiCplusplus size={50} color="#f34b20" />, description: 'A high-performance programming language.' },
  { name: 'React', icon: <FaReact size={50} color="#61dafb" />, description: 'A library for building user interfaces with components.' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={50} color="#38b2ac" />, description: 'A utility-first CSS framework for rapid UI design.' },
  { name: 'Python', icon: <FaPython size={50} color="#3776ab" />, description: 'A versatile, high-level programming language.' },
  { name: 'JavaScript', icon: <FaJs size={50} color="#f7df1e" />, description: 'A dynamic language for web development.' },
  { name: 'HTML5', icon: <FaHtml5 size={50} color="#e34f26" />, description: 'The standard markup language for web pages.' },
  { name: 'CSS3', icon: <FaCss3Alt size={50} color="#1572b6" />, description: 'A style sheet language for web document presentation.' },
  { name: 'MySQL', icon: <GrMysql size={50} color="#00758f" />, description: 'A popular relational database management system.' },
];

const TechStacks = () => {
  return (
    <div className="bg-black py-10">
      <h1 className="text-center text-5xl font-bold text-white mb-8">My Tech Stacks</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {techStacks.map((tech, index) => (
          <div 
            key={index} 
            className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl"
          >
            <div className="mb-4">{tech.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{tech.name}</h2>
            <p className="text-gray-300 text-center">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
