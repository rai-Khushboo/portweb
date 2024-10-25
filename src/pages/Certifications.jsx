import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: "Certificate 1",
    description: "Description of certificate 1.",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/certificate1"
  },
  {
    title: "Certificate 2",
    description: "Description of certificate 2.",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/certificate2"
  },
  {
    title: "Certificate 3",
    description: "Description of certificate 3.",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/certificate3"
  },
  {
    title: "Certificate 4",
    description: "Description of certificate 4.",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/certificate4"
  },
  {
    title: "Certificate 5",
    description: "Description of certificate 5.",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/certificate5"
  },
  {
    title: "Certificate 6",
    description: "Description of certificate 6.",
    image: "https://via.placeholder.com/300x200",
    link: "https://example.com/certificate6"
  },
];

const Certification = () => {
  return (
    <div className="bg-gray-900 py-10">
      <h1 className="text-center text-5xl font-bold text-white mb-6">My Certifications</h1>
      
      <div className="relative w-full max-w-4xl mx-auto">
        <Swiper
          effect="cube"
          navigation
          modules={[EffectCube, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30} // Increased space between slides
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-80 h-96 bg-gray-700 rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105 mx-2">
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
                <div className="absolute bottom-24 left-4 text-white font-bold text-lg">{cert.title}</div>
                <p className="absolute bottom-12 left-4 text-gray-300 text-sm">{cert.description}</p>
                <a href={cert.link} className="absolute bottom-4 left-4 text-blue-400 flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                  View Certificate <FaExternalLinkAlt className="ml-1" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certification;
