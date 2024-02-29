import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="grid md:grid-row-2 items-center justify-center sm:w-[550px] w-full mx-auto  md:gap-0 "
  >
    
    <div className=" m-2 p-10 bg-gray-100/5 shadow text-start">
    
    <div className="flex flex-wrap   max-w-7xl   ">
    <div >
    <p className='text-[#006642] font-ubuntu font-bold text-[48px]'>"</p>
      <p className='text-[#006642] font-ubuntu  font-medium text-[16px]'>{testimonial}</p>
      <p className='text-[#006642] font-ubuntu font-bold text-[48px]'>"</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className=' flex flex-col'>
          <p className='text-[#006642] font-medium text-[16px]'>
            <span className='blue-text-gradient font-ubuntu font-bold'>@</span> {name}
          </p>
          <p className='mt-1 blue-text-gradient font-ubuntu font-bold text-[14px]'>
          {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>   
        </div>
 </div>
  </div>
);
 


const Feedbacks = () => {
  return (
    <div className={` bg-none `}>
     
        
          <h2 className="mt-[-100px] text-Start text-gray-900/50 font-bold mb-[20px] font-ubuntu text-[28px]">TESTIMONIALS</h2>
         
     
          <div className={`  flex  mx-auto p-0 justify-center  justify-items-center flex-wrap  gap-0`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
     
    
    
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
