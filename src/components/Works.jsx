import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo ,tripguide } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        
        className='bg-[#f3f3f3] p-0  sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-[200px] object-cover opacity-95'
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

        <div className='mt-0 p-5 flex font-ubuntu flex-wrap p-2 gap-2'>
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
    </motion.div>
  );
};


const Works = () => {
  
  return (
    <>
    <div className="flex flex-row flex-wrap mb-10 gap-10">
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
      
    <div className="container">
    <h2 className='text-gray-900/50 pb-2 text-start pl-2 text-[28px] font-bold font-ubuntu'>FEATURED CARE AREAS</h2>
       <div className='bg-[#f3f3f3] max-w-7xl  flex flex-wrap'>
       <div className=' text-start '>
       <img
            src={tripguide}
            alt='project_image'
            className='xs:w-[480px] w-full h-[275px] '
          />
         
        </div>
        <div className='flex flex-wrap items-start p-5 justify-center'>

        <div className="flex flex-col items-start">
            <h6 className="text-[#006642] font-small font-ubuntu text-[30px]">Heart Health</h6>
              <p className="text-[#006642]  font-small font-ubuntu text-[14px]">
              Keeping your heart healthy is essential for overall good health. Learn how you can take <br></br>
              of it to benefit you in the long run Keeping your heart healthy is essential for overall<br></br>
              good health. Learn how you can take care of it to benefit you in the long run... <br></br>
              
              </p>
          </div>
      
        </div>
        
      </div>
      <a href="/"><p className='text-[#006642] pt-2 text-end mb-10 pr-2 text-[20px]  font-ubuntu'>View More.....</p></a>
      </div>
      
 <motion.div variants={textVariant()}>
  <div className="flex flex-col  max-w-7xl">
        <h2 className='text-gray-900/50 pb-2 text-start pl-2 text-[28px] font-bold font-ubuntu'>EXPLORE HEALTH PLUS</h2>
        </div>
      </motion.div>

      

      <div className=' flex mx-auto p-0 justify-center flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        
      </div>
      <a href="/"><p className='text-[#006642] pt-1 text-end pr-2 text-[20px]  font-ubuntu'>View More.....</p></a>
      


         
    
    </>
  );
};

export default SectionWrapper(Works, "");
