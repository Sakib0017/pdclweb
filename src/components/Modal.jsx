import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo ,tripguide } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects1  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  image,
  name,
  address,
  Hotline,
  Email,
  
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        
        className='bg-[#f3f3f3] p-0 shadow rounded-md sm:w-[299px] w-full'
      >
        <div className='relative w-full h-[320px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-[320px] rounded-md object-cover opacity-95'
          />

          
        </div>

        <div className='mt-0 p-5'>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>{name}</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>{address}</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>{Hotline}</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>{Email}</p>
        </div>

       
      </div>
    </motion.div>
  );
};

   
const Modal = () => {

  return (
    <div className="bg-gray-200">
    <Nav />
     
      
     <Navbar />
          
 <motion.div variants={textVariant()}>
  <div className="flex flex-col pt-[200px] mx-auto  max-w-7xl">
        <h2 className='text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu'>ALL THE BRANCHES CONTACT INFO</h2>
        </div>
      </motion.div>
     <div className=' flex mx-auto  pb-10 max-w-7xl justify-center flex-wrap gap-7'>
        {projects1.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        
      </div>
     <Tech />

     
   </div>
  );
};

export default  Modal;
