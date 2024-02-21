import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { logo ,tripguide, doctor } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import pakages from '../assets/pakages.mp4';
import cons from '../assets/cons.mp4';
import diag from '../assets/diag.mp4';




const Works = () => {
  
  return (
    <>
    <div  className="">
    
      


      <div className={` justify-center items-center  text-center flex flex-wrap `}>
       <div className="  flex-col  max-w-7xl container bg-gray-100 shadow md:flex-col   mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl  items-center bg-none rounded-[10px] justify-center">
  <div className="grid md:grid-cols-2 items-center justify-center mx-auto  md:gap-1 ">
    <div className="text-black m-2  text-center">
    
    <div className="flex flex-wrap   max-w-7xl mx-auto  ">
       <div className="w-[480px]  border-l-[5px]  border-[#006642] border-opacity-50 pl-2  text-start ml-3">
       <h1 className="text-gray-900/50 font-ubuntu font-bold">DISCOVER <span className="text-[#006642] font-ubuntu">POPULAR</span></h1>
         <p className="text-[#006642] font-ubuntu ">Popular Diagnostic Centre Ltd. exists to provide a better patient experience. We are a one-stop-shop for your health, offering caring doctors, world-class diagnostics and much more world-class diagnostics and much more.</p>
        </div>
       
        </div>

        

        
      
    </div>
    <div className="text-black m-2   text-center">
    
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
</form>
    </div>      
     </div>    
     </div>





    
      
  <div className="flex flex-col mt-[50px] max-w-7xl">
        <h2 className='text-gray-900/50 pb-2 text-start pl-2 text-[28px] font-bold font-ubuntu'>EXPLORE HEALTH PLUS</h2>
        </div>
      

      <div className={` justify-center items-center  text-center flex flex-wrap `}>
       <div className="  flex-col  max-w-7xl container  md:flex-col   mt-[20px] mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl  items-center bg-none rounded-[10px] justify-center">
  <div className="grid md:grid-cols-3 items-center justify-center mx-auto  md:gap-1 ">
    <div className="text-black m-2 bg-gray-100 shadow text-center">
    
        <div className='relative w-full h-[230px]'>
          <video
            src={pakages}
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
          <h3 className='text-[#006642] p-2 font-ubuntu text-[24px]'>HEALTH DIAGNOSIS</h3>
          <p className='mt-2 text-[#006642] font-ubuntu p-2 text-[14px]'>Ambulance BD 24 is the best ambulance service in Dhaka, Bangladesh. We provide emergency ambulance service in Dhaka city and transport patient.</p>
        </div>

        <div className='mt-0 p-5 flex font-ubuntu flex-wrap  gap-2'>
          
            <p
              
              className={`text-[14px] p-2 text-[blue] font-ubuntu `}
            >
              #InsideDhaka
            </p>
            <p
              
            className={`text-[14px] p-2 text-[blue] font-ubuntu `}
          >
            #OutsideDhaka
          </p>
        
        </div>
      
    </div>
    <div className="text-black m-2 bg-gray-100 shadow  text-center">
    
        <div className='relative w-full h-[230px]'>
          <video
            src={cons}
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
          <h3 className='text-[#006642] p-2 font-ubuntu text-[24px]'>HEALTH CONSULTATION</h3>
          <p className='mt-2 text-[#006642] font-ubuntu p-2 text-[14px]'>Blood Bank Management System  Management System (BBMS) under Safe Blood Transfusion Program, HSM, DGHS. Blood Transfusion Transfusion Program, HSM, DGHS.</p>
        </div>

        <div className='mt-0 p-5 flex font-ubuntu flex-wrap  gap-2'>
         
            <p
             
              className={`text-[14px] p-2 text-[blue] font-ubuntu `}
            >
              #InsideDhaka
            </p>
            <p
             
             className={`text-[14px] p-2 text-[blue] font-ubuntu `}
           >
             #OutsideDhaka
           </p>
        </div>
      </div>
    
    <div className="text-black m-2 bg-gray-100 shadow  text-center ">
    
        <div className='relative w-full h-[230px]'>
          <video
            src={diag}
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
          <h3 className='text-[#006642] p-2 font-ubuntu text-[24px]'>HEALTH PAKAGES</h3>
          <p className='mt-2 text-[#006642] font-ubuntu p-2 text-[14px]'>We believe everyone should have access to convenient, affordable, and high-quality healthcare. Our health checks and packages help you stay on top of your </p>
        </div>

        <div className='mt-0 p-5 flex font-ubuntu flex-wrap  gap-2'>
          
            <p
            
              className={`text-[14px] text-[blue] p-2 font-ubuntu`}
            >
              #InsideDhaka
            </p>
            <p
            
            className={`text-[14px] p-2 text-[blue] font-ubuntu`}
          >
            #OutsideDhaka
          </p>
        </div>
      
    </div>
    
  </div>
</form>
    </div>      
     </div>    
     </div>
 
      <a href="/"><p className='text-[#006642] pt-1 text-end pr-2 text-[20px]  font-ubuntu'>View More.....</p></a>
    </div>
    </>
  );
};

export default SectionWrapper(Works, "");
