import React, { useState } from "react";
import { Details, Nav, Navbar, Tech } from "../components";
import { motion } from "framer-motion";
import { projects1 } from "../constants";
import { textVariant } from "../utils/motion";

const BranchContact = ({ address, Hotline, Email }) => {
  return (
    <div className="h-[180px] flex flex-col justify-between">
      <p className="text-[#006642] px-2 font-ubuntu text-[16px]">
        <span className="text-[18px] font-medium font-ubuntu">Address: </span>
        {address}
      </p>
      <p className="text-[#006642] px-2 font-ubuntu text-[16px]">
        <span className="text-[18px] font-medium font-ubuntu">Hotline: </span>
        {Hotline}
      </p>
      <p className="text-[#006642] px-2 font-ubuntu text-[16px]">
        <span className="text-[18px] font-medium font-ubuntu">Email: </span>
        {Email}
      </p>
    </div>
  );
};

const ProjectCard = ({ image, name, address, Hotline, Email, heading, branchPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="bg-gray-100/5 p-0 shadow-2xl rounded-2xl sm:w-[299px] w-full">
      <div className="relative w-full">
        <img
          src={image}
          alt="Branch_image"
          className="w-full shadow-xl rounded-3xl object-cover opacity-95 p-2 "
        />
      </div>
      <div className='pl-3 pr-2 pt-2 pb-3 h-[360px] flex flex-col justify-between'>
      <h1 className='text-[#006642] px-2 font-ubuntu font-bold text-center text-[25px]'>{heading}</h1>
      <p className='text-[#006642] px-2 font-ubuntu font-medium text-[16px]'>{name}</p>
      <BranchContact address={address} Hotline={Hotline} Email={Email} />
      <button
      className="bg-[#006642] hover:bg-[#005c3f] text-white font-ubuntu font-medium py-2 px-4 rounded-md focus:outline-none shadow-md"
      onClick={handleOpenModal}
      >
        View Details
        </button>
        {isOpen && <Details branchPage={branchPage} onClose= {handleCloseModal}/>}
      </div>
 
    </div>
  );
};

const Modal = () => {
  const [filterByCity, setFilterByCity] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredProjects = filterByCity
    ? projects1.filter((project) => project.branchPage.braCity === "Dhaka")
    : projects1;

  const filteredAndSearchedProjects = filteredProjects.filter((project) => {
    const searchTermLower = searchTerm.toLowerCase();
    const projectNameLower = project.name.toLowerCase();
    return projectNameLower.includes(searchTermLower);
  });

  const handleFilterToggle = () => {
    setFilterByCity(!filterByCity); 
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <div className="bg-white">
      <Nav />
      <Navbar />
      <motion.div variants={textVariant()}>
        
        <div className="flex flex-col pt-[150px] pb mx-auto max-w-7xl">

          <h2 className="text-gray-900/50 pb-5 text-center text-[35px] font-bold font-ubuntu">
            ALL BRANCHES
          </h2>

        </div>
        <div className="flex flex-col-reverse gap-2 sm:flex-row pb-10 row-span-1 mx-12 xl:mx-auto xl:max-w-7xl justify-between">

        <button
            className="bg-gray-900/50 hover:bg-[#006642] h-[40px] text-white font-ubuntu font-medium py-2 px-4 rounded-md focus:outline-none shadow-md"
            onClick={handleFilterToggle}
          >
            {filterByCity ? "Show All Branches" : "Inside Dhaka"}
          </button>

        <input
            className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 h-[40px] rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
            type="text"
            placeholder="Search Branches"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          
        </div>
      </motion.div>
      <div className="flex mx-auto pb-10 max-w-7xl justify-center flex-wrap gap-7">
        {filteredAndSearchedProjects.map((project) => (
          <ProjectCard
            key={project.branchID}
            {...project} 
          />
        ))}
      </div>
      <Tech />
    </div>
  );
};


export default Modal;