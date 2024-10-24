import React, { useState } from 'react';
import effect from '../assets/img/effect.jpeg'; // Ensure this is the correct image
import leetcode from '../assets/img/leetcode.jpeg'; // Use a unique name for the LeetCode image
import { SiLeetcode } from "react-icons/si";
import { FaGraduationCap , FaSchool } from 'react-icons/fa';

const About = () => {
    // Step 1: Add state for managing which tab is active
    const [activeTab, setActiveTab] = useState('skills');

    // Step 2: Create a toggle function
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="bg-gray-900 text-white about section py-20" id="about">
            <h2 className="section-title text-7xl font-bold text-center mb-10">About Me</h2>
            <div className='flex flex-row space-x-4 p-4'>
                <div className="container mx-auto px-4 flex-1">
                    <div className="bg-gray-700 rounded-lg shadow-lg p-6 mb-4 flex flex-row">
                        <img 
                            src={effect} 
                            alt="Description of the GIF"
                            className="w-40 h-50 rounded-full object-cover ml-4"
                        />
                        <p className="text-m text-center mb-5 ml-2">
                            Hello! I am Khushboo, a passionate web developer with a focus on creating dynamic and responsive web applications. 
                            I specialize in frontend development, using technologies such as React, Tailwind CSS, and JavaScript to build seamless user experiences.
                            
                            I enjoy exploring new technologies and constantly strive to improve my skills. 
                            My goal is to leverage my expertise to contribute to innovative projects that make a positive impact.
                            <br /><br />
                            In my free time, I love working on personal projects, participating in hackathons, and learning more about emerging trends in technology.
                        </p>
                    </div>
                </div>

                <div className="flex-none w-1/3">
                    <div className="bg-gray-700 rounded-lg shadow-lg p-2 h-full flex flex-col items-center justify-center relative overflow-hidden">
                        <img 
                            src={leetcode} 
                            alt="Leetcode" 
                            className="w-full h-full object-fit" 
                        />
                      
                    </div>
                </div>
            </div>

            {/* Education and Skills Toggle Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Toggle Tabs */}
                        <div className="col-span-2">
                            {/* Skills Tab Navigation */}
                            <div className="flex justify-between mb-8">
                                <div className="flex">
                                    <button 
                                        className={`px-4 py-2 rounded-l-md w-32 ${activeTab === 'skills' ? 'bg-purple-500' : 'bg-gray-800'} text-white`} 
                                        onClick={() => handleTabClick('skills')}
                                    >
                                        Skills
                                    </button>
                                    <button 
                                        className={`px-4 py-2 rounded-r-md w-32 ${activeTab === 'education' ? 'bg-purple-500' : 'bg-gray-800'} text-white`} 
                                        onClick={() => handleTabClick('education')}
                                    >
                                        Education
                                    </button>
                                </div>
                            </div>

                            {/* Step 3: Conditionally render content based on activeTab */}
                            {activeTab === 'skills' ? (
                                <div className='flex flex-1 bg-gray-800 p-6 rounded-lg'>
                                    {/* Technical Skills */}
                                    <div className="bg-gray-800 p-6 rounded-lg w-2/3">
                                        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
                                        <div className="space-y-4">
                                            {[
                                                { name: 'JavaScript', percent: 95 },
                                                { name: 'React JS', percent: 90 },
                                                { name: 'Css3', percent: 85 },
                                                { name: 'C++', percent: 90 },
                                                { name: 'Python', percent: 60 }
                                            ].map(skill => (
                                                <div key={skill.name}>
                                                    <div className="flex justify-between mb-1">
                                                        <span>{skill.name}</span>
                                                        <span>{skill.percent}%</span>
                                                    </div>
                                                    <div className="bg-gray-700 rounded-full h-2">
                                                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${skill.percent}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Professional Skills */}
                                    <div className="bg-gray-800 p-6 rounded-md mt-8">
                                        <h3 className="text-2xl font-semibold mb-4">Professional Skills</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { skill: 'Team Work', percent: 90 },
                                                { skill: 'Communication', percent: 80 },
                                                { skill: 'Management', percent: 85 },
                                                { skill: 'Creativity', percent: 90 }
                                            ].map(proSkill => (
                                                <div className="text-center" key={proSkill.skill}>
                                                    <div className="text-3xl mb-2">{proSkill.percent}%</div>
                                                    <div className="text-lg">{proSkill.skill}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex flex-1 bg-gray-800 p-6 rounded-lg'>
                                    {/* Education Section */}
                                    <div className="bg-gray-800 p-6 rounded-lg">
                                        <h3 className="text-2xl font-semibold mb-4">Education</h3>
                                        {/* Add your education content here */}
                                        <div className=' bg-gray-800 p-6 rounded-lg'>
                                          {/* /added code/ */}
                                        <span className="text-xl font-sm">2022-2026(Expected)</span>
                                          <p className="text-3xl font-bold"><FaGraduationCap className="inline-block underline"/> JSS Academy Of Technical Education Noida</p>
                                          <p>BTech in Information and Technology</p>
                                          <p>8.32(Till Date)</p>
                                          <br></br>
                                          <span className="text-xl font-sm">Schooling</span>
                                          <br/>
                                          <p className="text-3xl font-bold"><FaSchool className="inline-block "/> Delhi Public School Ghaziabad</p>
                                          <p>Higher Secondary Education</p>
                                          <p>Secured 91%</p>
                                          <p>Secondary Education</p>
                                          <p>Secured 98%</p>

                                        {/*  Added code*/}
                                        </div>
                                        
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: GitHub Stats */}
                        <div>
                            <div className="bg-gray-800 p-6 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4">GitHub</h3>
                                <ul className="mb-4">
                                    <li>Total Stars Earned: 13</li>
                                    <li>Total Commits: 302</li>
                                    <li>Total PRs: 17</li>
                                    <li>Total Issues: 21</li>
                                    <li>Contributed to (last year): 7</li>
                                </ul>

                                {/* Language Usage Bar */}
                                <div className="flex items-center mb-2">
                                    <div className="w-56 h-2 bg-gray-700 rounded-full mr-2">
                                        <div className="h-2 bg-blue-600" style={{ width: '56.80%' }}></div>
                                    </div>
                                    <span>Python 56.80%</span>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-56 h-2 bg-gray-700 rounded-full mr-2">
                                        <div className="h-2 bg-orange-500" style={{ width: '30.69%' }}></div>
                                    </div>
                                    <span>Jupyter Notebook 30.69%</span>
                                </div>

                                <div className="flex items-center mb-2">
                                    <div className="w-56 h-2 bg-gray-700 rounded-full mr-2">
                                        <div className="h-2 bg-pink-500" style={{ width: '8.39%' }}></div>
                                    </div>
                                    <span>C++ 8.39%</span>
                                </div>

                                {/* Add more languages similarly */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
