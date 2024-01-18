import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='mx-auto xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full rounded-[5px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-900/90  rounded-[8px] py-5 px-5 min-h-[130px] flex justify-evenly items-center flex-row'
      >
        
        <h3 className='text-[white] text-[16px] font-ubuntu text-left'>
        <a href="" className="hover:none">{title}</a>
          
        </h3>
        <a href="">
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        </a>
      </div>
      
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
     <div className='sm:mt-[-150px] flex flex-wrap gap-7'>
        {services.map((service, index) => (
          <ServiceCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>

      
    </>
  );
};

export default SectionWrapper(About, "");
