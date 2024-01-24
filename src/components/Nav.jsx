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


const Nav = () => {
  const handleClick = () => {
    window.open('/modal', '_blank');
  };
  const handleClick1 = () => {
    window.open('/sample', '_blank');
  };
  const handleClick2 = () => {
    window.open('/complain', '_blank');
  };
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
   
  <nav className={`${styles.paddingX} w-full fixed h-[45px] top-0 z-20 flex flex-col items-center  bg-[#d5e7d9]`} >
  <div className="w-full h-[45px]  flex flex-wrap items-center   justify-between max-w-7xl text-[#006642] " >
  <div className="flex flex-col items-center  justify-center me-auto">
      
      <a href=""> 
      
       <p onClick={() => navigate('/')} className="text-[#006642] justify-center items-center text-[14px] font-small  font-ubuntu">
        <span className="text-[18px] items-center font-ubuntu font-bold justify-center">✆ 10636</span> (Dhanmondi)</p>  </a> 
        <Link onClick={handleClick}> <a> <p className="text-[#006642] cursor-pointer justify-center items-center text-[10px]   font-ubuntu">OTHER BRANCHES 》</p></a></Link>
          
       
        
                  

      </div>
  
     
        
       
       <div className="text-[#006642]  ms-auto  justify-center items-center flex flex-row ">
         
         

         <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-col items-center  justify-center me-auto ">
     
      <Link onClick={handleClick1} ><p onClick={() => navigate('/')} className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        <Popover placement="left">
          <PopoverHandler>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu">🧪 </p></a>
          </PopoverHandler>
          <PopoverContent className="">
           <a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Home Sample Collection</p></a>
          </PopoverContent>
        </Popover><a href=""><span className="pl-1 text-[14px] hidden md:block">Home Sample Collection</span></a></p></Link>
                    
                    

        </div>
        
        </li>


         <li className="mr-4 inline-flex flex-row justify-center items-center">
        
      <div className="flex flex-row  ">
      
      
                    <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="left">
          <PopoverHandler>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu"> 🧑🏻‍💻 </p></a>
          </PopoverHandler>
          <PopoverContent>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Video Consutancy</p></a>
          </PopoverContent>
        </Popover>
        
        <a href=""> <span className="pl-1 text-[14px] hidden md:block">Video Consutancy</span></a></p>
              
        </div>
        
        </li>
         
         
         <li className="inline-flex flex-row mr-4 justify-center items-center">
        
      <div className="flex flex-row  ">
      
     
                    
      <Link to="/login">  <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="left">
          <PopoverHandler>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu"> 📋 </p></a>
          </PopoverHandler>
          <PopoverContent className="">
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Report Download</p></a>
          </PopoverContent>
        </Popover><a href=""> <span className="pl-1 text-[14px] hidden md:block">Report Download</span></a></p>
              </Link>
        </div>
        
        </li>
         
         
        <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-row  ">
     
        <Link onClick={handleClick2}><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        <Popover placement="left">
          <PopoverHandler>
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px]   font-ubuntu">✍️ </p></a>
          </PopoverHandler>
          <PopoverContent className="">
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-0  font-ubuntu">Complain Submission</p></a>
          </PopoverContent>
        </Popover><a href=""><span className="pl-1  text-[14px] hidden md:block">Complain Submission</span></a></p>
        </Link>         
                    

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