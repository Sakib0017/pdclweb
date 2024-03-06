import React from "react";
import { Nav, Navbar, Tech } from "../components";
import { topManagement } from "../constants";


const ProjectCard = ({ manImg, manName, manDesignation }) => {
  return (
    <div className="bg-gray-100/5 p-0 shadow-2xl rounded-2xl sm:w-[299px] w-full">
      <div className="relative w-full">
        <img
          src={manImg}
          alt="Top_Management_Image"
          className="w-full shadow-xl rounded-3xl object-cover opacity-95 p-2"
        />
      </div>
      <div className="py-7 flex flex-col text-center">
        <p className="text-gray-600 px-2 font-bold font-ubuntu text-[24px]">
          {manName}
        </p>
        <p className="text-[#808080] px-2 font-medium font-ubuntu text-[16px]">
          {manDesignation}
        </p>
      </div>
    </div>
  );
};



const About = () => {
  // Split the topManagement data into groups
  const topPosition = topManagement.slice(0, 2);
  const secondTopPosition = topManagement.slice(2, 5);
  const thirdTopPosition = topManagement.slice(5, 8);
  const fourthTopPosition = topManagement.slice(8, 12);

  return (
    <div className="bg-white">
      <Nav />
      <Navbar />

      <div className="flex flex-col pt-[150px] pb mx-auto max-w-7xl">
        <h2 className="text-gray-900/50 pb-5 text-center text-[35px] font-bold font-ubuntu">
          Top Management
        </h2>
      </div>

      {/* Top Section */}
      <div className="flex mx-auto pb-10 pt-2 max-w-7xl justify-center flex-wrap gap-7">
        {topPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Second Section */}
      <div className="flex mx-auto py-10  max-w-7xl justify-center flex-wrap gap-7">
        {secondTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Third Section */}
      <div className="flex mx-auto py-10 max-w-7xl justify-center flex-wrap gap-7">
        {thirdTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Fourth Section */}
      <div className="flex mx-auto py-10 max-w-7xl justify-center flex-wrap gap-7">
        {fourthTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      <Tech />
    </div>
  );
};

export default About;
