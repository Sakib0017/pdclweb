// import React from "react";
// import { Details,  Nav, Navbar,  Tech} from "../components";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { logo ,tripguide } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects1  } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { Link } from "react-router-dom";
// const ProjectCard = ({
//   index,
//   image,
//   name,
//   address,
//   Hotline,
//   Email,
//   heading,
  
  
// }) => {
 
//   return (
    
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <div
        
//         className='bg-gray-100-5 p-0 shadow-xl rounded-md sm:w-[299px] w-full'
//       >
//         <div className='relative w-full pb-5'>
//           <img
//             src={image}
//             alt='project_image'
//             className='w-full rounded-md object-cover opacity-95'
//           />

          
//         </div>

//        <div className='p-5 h-[380px] flex flex-col justify-between'>
//           <h1 className='text-[#006642] font-ubuntu font-bold flex justify-center text-[25px]'>{heading}</h1>
//           <p className='text-[#006642] p-2 font-ubuntu font-medium text-[16px]'>{name}</p>
//           <p className='text-[#006642] p-2 font-ubuntu text-[16px]'><span className=' text-[18px] font-medium font-ubuntu'>Address: </span> {address}</p>
//           <p className='text-[#006642] p-2 font-ubuntu text-[16px]'><span className=' text-[18px] font-medium font-ubuntu'>Hotline: </span> {Hotline}</p>
//           <p className='text-[#006642] p-2 font-ubuntu text-[16px]'><span className=' text-[18px] font-medium font-ubuntu'>Email: </span> {Email}</p>
//         </div>

       
//       </div>
//     </motion.div>
//   );
// };

   
// const Modal = () => {

//   return (
//     <div className="bg-white">
//     <Nav />
     
      
//      <Navbar />
          
//  <motion.div variants={textVariant()}>
//   <div className="flex flex-col pt-[200px] mx-auto  max-w-7xl">
//         <h2 className='text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu'>ALL THE BRANCHES CONTACT INFO</h2>
//         </div>
        
//       </motion.div>
//      <div className=' flex mx-auto  pb-10 max-w-7xl justify-center flex-wrap gap-7'>
//         {projects1.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
        
//       </div>
//       <Details/>

//      <Tech />

     
//    </div>
//   );
// };

// export default  Modal;




import React, { useState } from "react";
import { Details, Nav, Navbar, Tech } from "../components";
import { motion } from "framer-motion";
import { projects1 } from "../constants";
import { textVariant } from "../utils/motion";

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
            <p className='text-[#006642] px-2 font-ubuntu text-[16px]'><span className=' text-[18px] font-medium font-ubuntu'>Address: </span> {address}</p>
            <p className='text-[#006642] px-2 font-ubuntu text-[16px]'><span className=' text-[18px] font-medium font-ubuntu'>Hotline: </span> {Hotline}</p>          
            <p className='text-[#006642] px-2 font-ubuntu text-[16px]'><span className=' text-[18px] font-medium font-ubuntu'>Email: </span> {Email}</p>
            <button
          className="bg-[#006642] hover:bg-[#005c3f] text-white font-ubuntu font-medium py-2 px-4 rounded-md focus:outline-none shadow-md"
          onClick={handleOpenModal}
        >
          View Details
        </button>
        </div>

      {isOpen && <Details branchPage={branchPage} onClose= {handleCloseModal}/>}
    </div>
  );
};

const Modal = () => {
  return (
    <div className="bg-white">
      <Nav />
      <Navbar />
      <motion.div variants={textVariant()}>
        <div className="flex flex-col pt-[200px] mx-auto max-w-7xl">
          <h2 className="text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu">
            ALL THE BRANCHES CONTACT INFO
          </h2>
        </div>
      </motion.div>
      <div className="flex mx-auto pb-10 max-w-7xl justify-center flex-wrap gap-7">
        {projects1.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
      <Tech />
    </div>
  );
};

export default Modal;