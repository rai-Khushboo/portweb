import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { FaExternalLinkAlt } from 'react-icons/fa';
import FMS from "../assets/img/FMS.jpg";
import myntra1 from "../assets/img/myntra1.jpg";
import flipkart from "../assets/img/flipkart.jpg";
import myntra2 from "../assets/img/myntra2.jpg";
import runway from "../assets/img/runway.jpg";

const certificates = [
  {
    title: "FMS JSS Noida",
    description: "Received an Appreciation Letter from JSS Noida for developing a Feedback Management System.",
    image: FMS,
    link: "https://drive.google.com/file/d/1zmt1rGBqbblgyacSHCKJAd_mh55BJIOF/view?usp=sharing"
  },
  {
    title: "Myntra Hackerramp",
    description: "Contributed innovative ideas for a collaborative platform designed for fashion designers at Myntra.",
    image: myntra1,
    link: "https://unstop.com/certificate-preview/bfe4ca6e-3fae-42c4-9ba8-0c811f9bfb3e"
  },
  {
    title: "Flipkart Grid",
    description: "Engaged in a competitive quiz that tested my knowledge of Data Structures and Algorithms (DSA).",
    image: flipkart,
    link: "https://unstop.com/certificate-preview/b75e0954-bf95-4305-be93-bdba816f73a0"
  },
  {
    title: "Myntra Hackerramp Solution Implementation",
    description: "Successfully implemented solutions for the Designer Collaboration Platform at Myntra, showcasing my technical skills.",
    image: myntra2,
    link: "https://unstop.com/certificate-preview/0fa796fd-fdd7-44b8-9880-221ef1a36b5f"
  },
  {
    title: "Flipkart Runway",
    description: "Participated in the Flipkart Runway event, empowering aspiring female entrepreneurs in the fashion industry.",
    image: runway,
    link: "https://unstop.com/certificate-preview/f7e9b13b-de10-4de0-97f6-5408680eaf15"
  },
];

const Certification = () => {
  return (
    <section className="bg-black py-16 px-4 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg text-center">My Certifications</h1>
      <div className="w-full max-w-4xl">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="relative w-80 h-96 bg-gray-900 rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-lg transition-transform transform hover:scale-105">
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-fit" />
                <div className="absolute bottom-24 left-4 text-white font-bold text-lg">{cert.title}</div>
                <p className="absolute bottom-10 left-4 text-gray-300 text-sm">{cert.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certification;
