import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';

const techStacks = [
  { name: 'C++', icon: <SiCplusplus size={50} color="#f34b20" />, description: 'A high-performance programming language.' },
  { name: 'React', icon: <FaReact size={50} color="#61dafb" />, description: 'A library for building user interfaces with components.' },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={50} color="#38b2ac" />, description: 'A utility-first CSS framework for rapid UI design.' },
  { name: 'Python', icon: <FaPython size={50} color="#3776ab" />, description: 'A versatile, high-level programming language.' },
  { name: 'JavaScript', icon: <FaJs size={50} color="#f7df1e" />, description: 'A dynamic language for web development.' },
  { name: 'Node.js', icon: <FaNodeJs size={50} color="#3c873a" />, description: 'JavaScript runtime for building scalable server-side applications.' },
  { name: 'MongoDB', icon: <SiMongodb size={50} color="#47A248" />, description: 'A NoSQL database for modern web apps.' },
  { name: 'MySQL', icon: <GrMysql size={50} color="#00758f" />, description: 'A popular relational database management system.' },
];

const TechStacks = () => {
  return (
    <div className="bg-black py-10">
      <h1 className="text-center text-5xl font-bold text-white mb-8">My Tech Stacks</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4 justify-items-center">
        {techStacks.map((tech, index) => (
          <div 
            key={index} 
            className="bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center overflow-hidden w-60 h-64"
          >
            <div className="mb-4">{tech.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2 hover:text-gray-200 transition-colors cursor-pointer">{tech.name}</h2>
            <p className="text-gray-300 text-center">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;
