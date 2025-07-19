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
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Failed to send email. Error: ', error);
      });
  };

  return (
    <section className="bg-black py-16 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg text-center">Contact Me</h1>
      <div className="flex flex-col lg:flex-row max-w-6xl w-full mx-auto items-center gap-8">
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <img 
            src={profile1}
            alt="Your Name"
            className="w-40 h-40 rounded-full mb-4 border-4 border-primary shadow-2xl object-cover" 
          />
          <p className="text-gray-300 font-bold">
            I'm always open to discussing new projects, creative ideas, or opportunities. 
            Feel free to reach out using the form or connect with me on social media!
          </p>
        </div>
        <div className="flex-1 w-full">
          <form onSubmit={sendEmail} className="bg-black/70 rounded-2xl p-8 shadow-lg">
            <div className="mb-4">
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring focus:ring-primary"
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
                className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring focus:ring-primary"
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
                className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring focus:ring-primary"
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
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
