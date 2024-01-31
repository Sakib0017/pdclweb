import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo, tripguide } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  icon,
}) => {
  return (
    
      <div
        className='bg-[#ffffff] m-2 h-[275px] sm:w-[271px] w-full'
      >
        <div className='relative w-[60px]  ml-5  h-[60px]'>
          <img
            src={icon}
            alt='project_image'
            className='w-full h-full object-cover opacity-80 '
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              
            </div>
          </div>
        </div>

        <div className='p-5'>
          <h3 className='text-[#006642] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-[#006642] text-[14px]'>{description}</p>
        </div>

       
      </div>
   
  );
};


const Works = () => {
  
  return (
    <>
    <div className="flex flex-row flex-wrap mb-10 gap-10 shadow-lg p-5 rounded-[5px]">
    <div className="bg-[#ffffff] mx-auto w-full ">
      <div className="flex flex-row  flex-wrap max-w-screen-xl mx-auto  ">
       <div className="w-[480px]  border-l-[5px]  border-[#006642] border-opacity-50 pl-2  text-start ml-3">
       <h1 className="text-gray-900/50 font-ubuntu font-bold">DISCOVER <span className="text-[#006642] font-ubuntu">POPULAR</span></h1>
         <p className="text-[#006642] font-ubuntu ">Popular Diagnostic Centre Ltd. exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more world-class diagnostics and much more.</p>
        </div>
        <div className="flex flex-row flex-wrap max-w-7xl mx-auto  ">
          <div className="flex flex-col items-start p-2 ">
            <h6 className="text-[#006642] font-small font-ubuntu text-[60px]">27</h6>
              <p className="text-[#006642] font-bold font-ubuntu text-[20px]">
                DEPARTMENTS
              </p>
               
          </div>
          <div className="flex items-start p-2 flex-col ">
            <h6 className="text-[#006642] font-small font-ubuntu text-[60px]">5K+</h6>
              <p className="text-[#006642] font-bold font-ubuntu text-[20px]">
                DOCTORS
              </p>
          </div>
          <div className="flex flex-col p-2 items-start ">
            <h6 className="text-[#006642] font-small font-ubuntu text-[60px]">270K+</h6>
              <p className="text-[#006642]  font-bold font-ubuntu text-[20px]">
                PATIENTS SERVED
              </p>
          </div>
       </div>
        </div>
        </div> 
      </div>
      
    
 <h2 className='text-gray-900/50  text-start mb-10 text-[28px] font-bold font-ubuntu'>FEATURED CARE SERVICE AREAS</h2>
     
    

      

      <div className=' flex flex-wrap shadow-lg rounded-[5px]'>
        {projects.map((project, index) => (
          <div className="border-r-[1px] border-b-[1px]  border-gray-200/90">
          <ProjectCard  key={`project-${index}`} index={index} {...project} />
          </div> ))}
      </div>
      


         
    
    </>
  );
};

export default SectionWrapper(Works, "");
