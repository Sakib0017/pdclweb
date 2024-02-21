import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";


 


const Feedbacks = () => {
  return (
    <div className={` bg-none `}>
     
        
          <h2 className="mt-[-100px] text-Start text-gray-900/50 font-medium mb-[20px] font-ubuntu text-[28px]">TESTIMONIALS</h2>
         
     
     
     
    
    <div className={` justify-center items-center  text-center flex flex-wrap `}>
       <div className="  flex-col  max-w-7xl container  md:flex-col   mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl  items-center bg-none rounded-[10px] justify-center">
  <div className="grid md:grid-cols-2 items-center justify-center mx-auto  md:gap-1 ">
    <div className=" m-2 p-5 bg-gray-100 shadow text-start">
    
    <div className="flex flex-wrap   max-w-7xl   ">
    <div >
    <p className='text-[#006642] font-ubuntu font-black text-[48px]'>"</p>
      <p className='text-[#006642] font-ubuntu text-[18px]'>I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.</p>
      <p className='text-[#006642] font-ubuntu font-black text-[48px]'>"</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className=' flex flex-col'>
          <p className='text-[#006642] font-medium text-[16px]'>
            <span className='blue-text-gradient font-ubuntu'>@</span> Mr. Ahmed
          </p>
          <p className='mt-1 blue-text-gradient font-ubuntu text-[12px]'>
          CFO of Biman Bangladesh
          </p>
        </div>

        <img
          src={"http://populardiagnostic.com/public/testimonial/1-20190319155227.jpg"}
          alt={`feedback_by`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>   
        </div>
 </div>
    <div className=" m-2 bg-gray-100 shadow  p-5 text-start">
    
    <div className="flex flex-wrap   max-w-7xl   ">
    <div >
    <p className='text-[#006642] font-ubuntu font-black text-[48px]'>"</p>
      <p className='text-[#006642] font-ubuntu text-[18px]'>I've never met a web developer who truly cares about their clients' success like Rick does.</p>
      <p className='text-[#006642] font-ubuntu font-black text-[48px]'>"</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className=' flex flex-col'>
          <p className='text-[#006642] font-medium text-[16px]'>
            <span className='blue-text-gradient font-ubuntu'>@</span> Mr. Hasan
          </p>
          <p className='mt-1 blue-text-gradient font-ubuntu text-[12px]'>
          COO of Brac Bank
          </p>
        </div>

        <img
          src={"http://populardiagnostic.com/public/testimonial/2-20190319153146.jpg"}
          alt={`feedback_by`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>   
        </div>

       
      </div>

    
  </div>
</form>
    </div>      
     </div>    
     </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
