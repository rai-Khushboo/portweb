import React, { useState } from 'react';
import profile1 from '../assets/img/profile1.jpeg';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_d4fbo28', 'template_22saq18', formData, 'eo7g3tn34eZVj76al')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        //reset the form
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Failed to send email. Error: ', error);
      });
  };

  return (
    <div className="bg-black py-10">
      <h1 className="text-center text-5xl font-bold text-white mb-6">Contact Me</h1>
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto items-center">
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 text-center lg:text-left">
          <img 
            src={profile1}
            alt="Your Name"
            className="w-56 h-56 rounded-full mx-auto mb-4" 
          />
          <p className="text-gray-300 font-bold">
            I'm always open to discussing new projects, creative ideas, or opportunities. 
            Feel free to reach out using the form or connect with me on social media!
          </p>
        </div>
        
        <div className="flex-1 bg-gray-900 rounded-lg p-5 shadow-lg">
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring focus:ring-blue-500"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring focus:ring-blue-500"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring focus:ring-blue-500"
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.linkedin.com/in/khushboo-kumari-b08973255/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500">
          <FaLinkedin size={30} />
        </a>
        <a href="https://x.com/khushboo_raii" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500">
          <FaTwitter size={30} />
        </a>
        <a href="https://github.com/rai-Khushboo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400">
          <FaGithub size={30} />
        </a>
        <a href="mailto:khushboo83687@gmail.com" className="text-gray-300 hover:text-red-500">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
