import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo ,tripguide } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects2  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    image,
    notice,
    
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div
          
          className='bg-[#f3f3f3]  h-[370px] sm:w-[299px] w-full'
        >
          <div className='relative w-full h-[150px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-[150px] object-cover opacity-95'
            />
  
            
          </div>
  
          <div className='mt-0 p-5'>
           
            <p className='text-[#006642] font-ubuntu text-[15px]'>{notice}</p>
            
          </div>
  
          <div className=' p-5'>
           
            <p className='text-[#006642]  text-end font-ubuntu text-[15px]'>READ MORE</p>
            
          </div>
        </div>
      </motion.div>
    );
  };


function Notice() {
  return (
   <div className="bg-white">
    {/*<Nav />*/}
     
      
     <Navbar />
          
 <motion.div variants={textVariant()}>
  <div className="flex flex-col pt-[200px] mx-auto  max-w-7xl">
        <h2 className='text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu'>Check out our Latest News & Notices</h2>
        </div>
      </motion.div>
     <div className=' flex mx-auto  pb-10 max-w-7xl justify-center flex-wrap gap-7'>
        {projects2.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        
      </div>
     <Tech />

     
   </div>
  )
}

export default Notice