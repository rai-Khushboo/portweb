import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const techStacks = [
  
  { name: 'React', icon: <FaReact size={50} />, description: 'A JavaScript library for building user interfaces.' },
  { name: 'Node.js', icon: <FaNodeJs size={50} />, description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
  { name: 'Python', icon: <FaPython size={50} />, description: 'A high-level programming language for general-purpose programming.' },
  { name: 'Java', icon: <FaJava size={50} />, description: 'A high-level, class-based, object-oriented programming language.' },
  { name: 'HTML5', icon: <FaHtml5 size={50} />, description: 'The standard markup language for creating web pages.' },
  { name: 'CSS3', icon: <FaCss3Alt size={50} />, description: 'Style sheet language used for describing the presentation of a document.' },
];

const TechStacks = () => {
  return (
    <div className="bg-gray-900 py-10">
      <h1 className="text-center text-5xl font-bold text-white mb-8">My Tech Stacks</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {techStacks.map((tech, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-110 hover:shadow-2xl"
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
