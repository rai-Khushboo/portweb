import React from 'react';
import music from '../assets/img/music.png';

const About = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex flex-col lg:flex-row justify-center items-center p-10">
      <div className="max-w-4xl lg:w-2/3 lg:pr-10">
        <h2 className="text-5xl font-bold mb-5 text-white text-center">Know Who I'M</h2>
        <p className="text-lg mb-8 ">
        Hi there!, I'm <span className="font-bold">Khushboo</span> from <span className="font-bold">Ghaziabad</span> , 
          a Frotend Web developer with a keen focus on building efficient, user-centered applications.I’m constantly refining my skills in problem-solving.
          <br></br>
          You’ll often find me actively coding on platforms like LeetCode, HackerRank, and GeeksforGeeks, where I consistently challenge myself to enhance my understanding of algorithms and push the boundaries of efficient design.
        </p>
            <p className="text-lg mb-6">
            When I'm not coding, I love to do.
            </p>
            <ul className="list-none mb-8">
            <li className="flex items-center text-lg mb-3">
                <span className="mr-2">💻</span> Working on my own projects
            </li>
            <li className="flex items-center mb-3">
                <span className="mr-2">🏆</span> Taking part in hackathons
            </li>
            <li className="flex items-center mb-3">
                <span className="mr-2">📚</span> Learning new tech trends
            </li>
            </ul>

        <p className="italic font-semibold text-lg text-white">"Code with precision, impact with purpose!"</p>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
        <img
          src={music} 
          alt="coding illustration"
          className="w-70 h-70 rounded-md" 
        />
      </div>
    </section>
  );
};

export default About;
