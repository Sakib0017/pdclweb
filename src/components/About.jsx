import { Nav, Navbar, Tech } from "../components";
import { ServiceCost, topManagement } from "../constants";
import React, { useState } from 'react';


const ProjectCard = ({ manImg, manName, manDesignation }) => {
  return (
    <div className="bg-gradient-to-b from-white to-[#00664218] hover:bg-gray-100 p-0 shadow-2xl rounded-2xl sm:w-[299px] w-full">
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
  const topPosition = topManagement.slice(0, 3);
  const secondTopPosition = topManagement.slice(3, 6);
  const thirdTopPosition = topManagement.slice(6, 9);
  const fourthTopPosition = topManagement.slice(9, 13);

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setFilteredServices([]); // Reset filtered services on branch change
    setSearchTerm(''); // Reset search term on branch change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const branchServices = ServiceCost.find(
      (branch) => branch.braId === parseInt(selectedBranch)
    )?.services;
    if (branchServices) {
      const filtered = branchServices.flatMap((category) =>
        category.items.filter((service) =>
          service.serviceName.toLowerCase().includes(searchTerm)
        )
      );
            // Limit results to top 5
      const topFive = filtered.slice(0, 5);
      setFilteredServices(topFive);
    } else {
      setFilteredServices([]);
    }
  };


  return (
    <div className="bg-white">
      <Nav />
      <Navbar />

      <div className="flex flex-col pt-[150px] pb mx-auto max-w-7xl">
        <h2 className="text-gray-900/50 pb-5 text-center text-[35px] font-bold font-ubuntu">
          Top Management
        </h2>
      </div>

      {/* Top section for chairman ma'am, Md sir and Sardin sir */}
      <div className="flex mx-auto pb-10 pt-2 max-w-7xl justify-center flex-wrap gap-7">
        {topPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Second section for general managers and advisors*/}
      <div className="flex mx-auto py-10  max-w-7xl justify-center flex-wrap gap-7">
        {secondTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Third section for AGMs */}
      <div className="flex mx-auto py-10 max-w-7xl justify-center flex-wrap gap-7">
        {thirdTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      {/* Fourth section for managers */}
      <div className="flex mx-auto py-10 max-w-7xl justify-center flex-wrap gap-7">
        {fourthTopPosition.map((project) => (
          <ProjectCard key={project.manID} {...project} />
        ))}
      </div>

      <div>
        <h1 className="bg-black text-white font-bold text-center text-[24px]"> Test Price Searching <span className="text-red-500 font-bold text-[10px]">temporary</span> </h1> 
        <div className="text-black ">
      <select value={selectedBranch} onChange={handleBranchChange}>
        <option value="">Select Branch</option>
        {ServiceCost.map((branch) => (
          <option key={branch.braId} value={branch.braId}>
            {branch.braName}
          </option>
        ))}
      </select>
      <br />
      <input
        type="text"
        placeholder="Search Services"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredServices.length > 0 && (
        <ul>
          {filteredServices.map((service) => (
            <li key={service.serviceId}>{service.serviceName} .................... {service.price}.00 taka</li>
          ))}
        </ul>
      )}
    </div>
      </div>

      <Tech />

    </div>

  );
};

export default About;
