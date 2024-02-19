import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo ,tripguide, akn, dhan } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects1  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


function Details() {
  return (
    <div className="bg-gray-200">
   <Nav />
     
      
     <Navbar />
          
     <h2 className='text-gray-900/50 pt-[200px] pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu'>NEERBY BRANCHES CONTACT INFO</h2>
  <div className="flex flex-wrap p-2  mx-auto  max-w-7xl">
        
        <div className='bg-[#f3f3f3]  mb-2 mr-5 sm:w-[385px] w-full'>
        <div className='relative w-full h-[320px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2197080792394!2d90.37959757619976!3d23.73954337867781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ca7af5f82b%3A0xce7d1ab6b16a027!2sPopular%20Diagnostic%20Centre%20Ltd.!5e0!3m2!1sen!2sbd!4v1706512680599!5m2!1sen!2sbd" width="350" height="320"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        

          
        </div>

        <div className='mt-0 p-5'>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Popular Diagnostic Centre Ltd. (Dhanmondi)</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Address: House # 16, Road # 2, Dhanmondi, Dhaka1205</p>
          </div>

       
      </div>


      <div className='bg-[#f3f3f3]  mb-2 mr-5 sm:w-[385px] w-full'>
        <div className='relative w-full h-[320px]'>
          <img
            src={dhan}
            alt='project_image'
            className='w-full h-[320px] object-cover opacity-95'
          />

          
        </div>

        <div className='mt-0 p-5'>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Popular Diagnostic Centre Ltd. (Dhanmondi)</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Address: House # 16, Road # 2, Dhanmondi, Dhaka1205</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Hotline: 09666 787801</p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Email: info@populardiagnostic.com</p>
        </div>

       
      </div>


      <div className='bg-[#f3f3f3]  mb-2   sm:w-[385px] w-full'>
        <div className='relative w-full h-[320px]'>
          <img
            src={akn}
            alt='project_image'
            className='w-full h-[320px] object-cover opacity-95'
          />

          
        </div>

        <div className='mt-0 p-5'>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Name : Achinto Kumar Nag </p>
          <p className='text-[#006642] p-2 font-ubuntu text-[15px]'>Designation : AGM (HR & Admin) </p>
        </div>

       
      </div>
        </div>
        
     
        
    
     <Tech />

     
   </div>
  )
}

export default Details