import React from 'react';
import music from '../assets/img/effect.jpeg';

const About = () => {
  return (
    <section className="bg-black text-white min-h-[60vh] flex flex-col lg:flex-row justify-center items-center p-10">
      <div className="max-w-4xl lg:w-2/3 lg:pr-10 bg-black/70 rounded-2xl p-8 shadow-lg flex flex-col items-center lg:items-start">
        <h1 className="text-5xl font-extrabold mb-5 text-white text-center drop-shadow-lg">About Me</h1>
        <p className="text-lg mb-8 text-gray-200 text-center lg:text-left">
          I'm <span className="text-primary font-semibold">Khushboo Kumari</span>, a frontend developer and Information Technology student from Ghaziabad. I love building elegant and efficient user interfaces using <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Tailwind CSS</span>, and modern web tools.
          <br /><br />
          I'm always up for a challenge , whether it's writing clean code, solving problems on platforms like <span className="text-primary font-semibold">LeetCode</span>, or designing smooth user experiences that work across devices.
        </p>
        <p className="text-lg mb-6 text-gray-200 text-center lg:text-left">
          Outside of code, I enjoy:
        </p>
        <ul className="list-none text-m mb-8 text-gray-300 text-center lg:text-left">
          <li className="flex items-center justify-center lg:justify-start mb-3">
            <span className="mr-2">🎯</span> Building passion projects
          </li>
          <li className="flex items-center justify-center lg:justify-start mb-3">
            <span className="mr-2">⚡</span> Exploring tech communities & hackathons
          </li>
          <li className="flex items-center justify-center lg:justify-start mb-3">
            <span className="mr-2">🎧</span> Unwinding with music & podcasts
          </li>
        </ul>
        <p className="italic font-semibold text-lg text-primary text-center lg:text-left">"Keep learning, keep building."</p>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center">
        <img
          src={music}
          alt="coding illustration"
          className="w-56 h-56 rounded-full border-4 border-primary shadow-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default About;
