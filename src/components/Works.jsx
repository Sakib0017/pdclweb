import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo ,tripguide, doctor } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  video,
  source_code_link,
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
       
        className='bg-[#ffffff] shadow-lg p-0  sm:w-[360px] w-auto '
      >
        <div className='relative w-full h-[230px]'>
          <video
            src={video}
            alt='project_image' 
            className='w-full h-[200px] object-cover opacity-95' autoPlay loop muted
          />

          <div className='absolute inset-0 flex justify-end p-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='green-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={logo}
                alt='source code'
                className='w-1/2 h-1/2 object-contain '
              />
            </div>
          </div>
        </div>

        <div className='mt-0 p-5'>
          <h3 className='text-[#006642] p-2 font-ubuntu text-[24px]'>{name}</h3>
          <p className='mt-2 text-[#006642] font-ubuntu p-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-0 p-5 flex font-ubuntu flex-wrap  gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] p-2 font-ubuntu ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};



const Works = () => {
  
  return (
    <>
    <div  className="">
    <div className="flex flex-wrap  flex-row mb-10 gap-10 shadow-lg p-5 rounded-[5px]">
    <div className="bg-[#ffffff] mx-auto w-full ">
      <div className="flex flex-wrap   max-w-7xl mx-auto  ">
       <div className="w-[480px]  border-l-[5px]  border-[#006642] border-opacity-50 pl-2  text-start ml-3">
       <h1 className="text-gray-900/50 font-ubuntu font-bold">DISCOVER <span className="text-[#006642] font-ubuntu">POPULAR</span></h1>
         <p className="text-[#006642] font-ubuntu ">Popular Diagnostic Centre Ltd. exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more world-class diagnostics and much more.</p>
        </div>
        <div className="flex flex-wrap max-w-7xl mx-auto  ">
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
      
    
      <motion.div variants={textVariant()}>
  <div className="flex flex-col  max-w-7xl">
        <h2 className='text-gray-900/50 pb-2 text-start pl-2 text-[28px] font-bold font-ubuntu'>EXPLORE HEALTH PLUS</h2>
        </div>
      </motion.div>

      <div className={`  flex flex-wrap gap-7`}>
    {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
    </div>
 
      <a href="/"><p className='text-[#006642] pt-1 text-end pr-2 text-[20px]  font-ubuntu'>View More.....</p></a>
      


         
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
