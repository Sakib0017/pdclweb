import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close,login,signup, mobile, telephone, about, gmail } from "../assets";


const Nav = () => {
  
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return
   
  () =>
   
  window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
   
  <nav className={`${styles.paddingX} w-full  h-[40px] fixed flex flex-col items-center  top-0 z-20 bg-[#d5e7d9]`} >
  <div className="w-full h-[40px] flex flex-wrap items-center justify-between max-w-7xl text-[#006642] " >
  <div className="flex flex-row items-center justify-center me-auto">
      
      <a href=""> 
      
        <p className="text-[#006642] justify-center items-center text-[20px]   font-ubuntu">
        <span className="text-[22px] items-center justify-center">✆</span> 10636</p>
                  </a> 
                  

      </div>
  
     
        
       
       <div className="text-[#006642]  ms-auto  justify-center items-center flex flex-row ">
         
         

         <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-row  ">
     
        <a href=""><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 🧪 <span className="pl-1 text-[12px] hidden md:block">Sample Collection</span></p>
                    </a> 
                    

        </div>
        
        </li>


         <li className="mr-4 inline-flex flex-row justify-center items-center">
        
      <div className="flex flex-row  ">
      
      <a href=""><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu">
      🧑🏻‍💻
      <div data-popover id="popover-bottom" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Popover bottom</h3>
    </div>
    <div class="px-3 py-2">
        
    </div>
    <div data-popper-arrow></div>
</div>
      <span className="pl-1 text-[12px] hidden md:block">Video Consutancy</span></p>
                    </a> 

        </div>
        
        </li>
         
         
         <li className="inline-flex flex-row mr-4 justify-center items-center">
        
      <div className="flex flex-row  ">
      
      <a href=""><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 📋 <span className="pl-1 text-[12px] hidden md:block">Report Download</span></p>
                    </a> 
                    

        </div>
        
        </li>
         
         
         <li className="inline-flex flex-row  justify-center items-center">
         
     
        
        </li>

       </div>
       
       <div>
      
      
    </div>


      
      </div>
      
      
  </nav>
  
 </>
  );
};

export default Nav;