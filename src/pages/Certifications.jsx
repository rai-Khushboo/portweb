import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import { EffectCube, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt } from 'react-icons/fa';
import FMS from "../assets/img/FMS.jpg"
import myntra1 from "../assets/img/myntra1.jpg"
import flipkart from "../assets/img/flipkart.jpg"
import myntra2 from "../assets/img/myntra2.jpg"
import runway from "../assets/img/runway.jpg"

const certificates = [
  {
    title: "FMS JSS Noida",
    description: "Description of certificate 5.",
    image: FMS,
    link: "https://drive.google.com/file/d/1zmt1rGBqbblgyacSHCKJAd_mh55BJIOF/view?usp=sharing"
  },
  {
    title: "Myntra Hackerramp",
    description: "Ideation of Designer's Collaboration Platform",
    image: myntra1,
    link: "https://unstop.com/certificate-preview/bfe4ca6e-3fae-42c4-9ba8-0c811f9bfb3e"
  },
  {
    title: "Certificate 2",
    description: "Description of certificate 2.",
    image: flipkart,
    link: "https://example.com/certificate2"
  },
  {
    title: "Certificate 3",
    description: "Description of certificate 3.",
    image: myntra2,
    link: "https://example.com/certificate3"
  },
  {
    title: "Certificate 4",
    description: "Description of certificate 4.",
    image: runway,
    link: "https://example.com/certificate4"
  },
  
  {
    title: "Certificate 6",
    description: "Description of certificate 6.",
    image: FMS,
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
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-fit" />
                <div className="absolute bottom-24 left-4 text-blue-500 font-bold text-lg">{cert.title}</div>
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
