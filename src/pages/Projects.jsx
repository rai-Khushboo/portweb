import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
//importing images
import beach from '../assets/img/beach.jpg';

const projects = [
  {
    title: "Beach Website",
    description: "Resort Website created using React js and tailwind css.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo/React/tree/main/Website-beach",
    liveLink: "https://react-beryl-kappa.vercel.app/"
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo",
    liveLink: "https://rai-Khushboo.com"
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo",
    liveLink: "https://rai-Khushboo.com"
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo",
    liveLink: "https://rai-Khushboo.com"
  },
  {
    title: "Project 5",
    description: "Description of project 5.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo",
    liveLink: "https://rai-Khushboo.com"
  },
  {
    title: "Project 6",
    description: "Description of project 6.",
    thumbnail: beach,
    githubLink: "https://github.com/rai-Khushboo",
    liveLink: "https://rai-Khushboo.com"
  },
];

const ProjectSlider = () => {
  return (
    <div className="relative bg-gray-900">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title} className="flex justify-center p-4">
            <div className="bg-gray-600 shadow-lg rounded-lg p-3 w-80 h-96 flex flex-col">
              <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-fit rounded" />
              <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
              <p className="text-gray-200">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a href={project.githubLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  GitHub <FaExternalLinkAlt />
                </a>
                <a href={project.liveLink} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Live Link <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Project = () => {
  return (
    <div className="bg-slate-900">
      <h1 className="text-center text-5xl font-bold text-white mb-4">My Projects</h1>
      <ProjectSlider />
    </div>
  );
};

export default Project;
