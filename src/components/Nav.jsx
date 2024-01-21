import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  p,
} from "@material-tailwind/react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close,login,signup, mobile, telephone, about, gmail } from "../assets";
import Modal from "../components/Modal";

const Nav = () => {
  const navigate = useNavigate();
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
   
  <nav className={`${styles.paddingX} w-full  h-[45px] fixed flex flex-col items-center  top-0 z-20 bg-[#d5e7d9]`} >
  <div className="w-full h-[45px] flex flex-wrap items-center justify-between max-w-7xl text-[#006642] " >
  <div className="flex flex-col items-center  justify-center me-auto">
      
      <a href=""> 
      
      <Link to="/modal"> <p onClick={() => navigate('modal')} className="text-[#006642] justify-center items-center text-[12px] font-small  font-ubuntu">
        <span className="text-[15px] items-center font-ubuntu font-small justify-center">✆</span> 10636(DHANMONDI)</p> </Link> </a> 
        <Popover placement="bottom-start">
          <PopoverHandler>
           <a> <p className="text-[#006642] cursor-pointer justify-center items-center text-[10px]   font-ubuntu">OTHER BRANCHES 》</p></a>
          </PopoverHandler>
          <PopoverContent>
            <p className="text-[#006642] p-2 cursor-pointer justify-center items-center text-[12px]   font-ubuntu">DHANMONDI-09666 787801</p>
            <p className="text-[#006642] p-2 cursor-pointer justify-center items-center text-[12px]   font-ubuntu">ENGLISH ROAD-09666 787802</p>
            <p className="text-[#006642] p-2 cursor-pointer justify-center items-center text-[12px]   font-ubuntu">SHANTINAGAR (U-1)-09666 787803</p>
            <p className="text-[#006642] p-2 cursor-pointer justify-center items-center text-[12px]   font-ubuntu">NARAYANGONJ-09666 787804</p>
            <p className="text-[#006642] p-2 cursor-pointer justify-center items-center text-[12px]   font-ubuntu">SAVAR-09666 787808</p>
          </PopoverContent>
        </Popover>
                
                  

      </div>
  
     
        
       
       <div className="text-[#006642]  ms-auto  justify-center items-center flex flex-row ">
         
         

         <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-row  ">
     
        <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="bottom-start">
          <PopoverHandler>
           <a> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu">🧪 </p></a>
          </PopoverHandler>
          <PopoverContent>
           <a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Home Sample Collection</p></a>
          </PopoverContent>
        </Popover><a to="/" href=""><span className="pl-1 text-[12px] hidden md:block">Home Sample Collection</span></a></p>
                    
                    

        </div>
        
        </li>


         <li className="mr-4 inline-flex flex-row justify-center items-center">
        
      <div className="flex flex-row  ">
      
      
                    <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="bottom-start">
          <PopoverHandler>
           <a> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu"> 🧑🏻‍💻 </p></a>
          </PopoverHandler>
          <PopoverContent>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Video Consutancy</p></a>
          </PopoverContent>
        </Popover>
        
        <a href=""> <span className="pl-1 text-[12px] hidden md:block">Video Consutancy</span></a></p>
              
        </div>
        
        </li>
         
         
         <li className="inline-flex flex-row mr-4 justify-center items-center">
        
      <div className="flex flex-row  ">
      
     
                    
                    <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="bottom-start">
          <PopoverHandler>
           <a> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu"> 📋 </p></a>
          </PopoverHandler>
          <PopoverContent>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Report Download</p></a>
          </PopoverContent>
        </Popover><a href=""> <span className="pl-1 text-[12px] hidden md:block">Report Download</span></a></p>
              
        </div>
        
        </li>
         
         
        <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-row  ">
     
        <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="bottom-start">
          <PopoverHandler>
           <a> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu">✍️ </p></a>
          </PopoverHandler>
          <PopoverContent>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Complain Submission</p></a>
          </PopoverContent>
        </Popover><a href=""><span className="pl-1 text-[12px] hidden md:block">Complain Submission</span></a></p>
                    
                    

        </div>
        
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