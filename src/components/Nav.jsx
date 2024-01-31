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
    window.open('/branch', '_blank');
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
   
  <nav className={`${styles.paddingX}shadow-lg   w-full fixed h-[40px] top-0 z-20 flex flex-col items-center  bg-[#f3f3f3]`} >
  <div className="w-full h-[40px]  flex flex-wrap items-center   justify-between max-w-7xl text-[#006642] " >
  <div className="flex flex-col items-start  justify-start me-auto">
      
      <a href=""> 
      
       <p onClick={() => navigate('/')} className="text-[#006642] pl-2 justify-center items-start text-[12px] font-medium  font-ubuntu">
        <span className="text-[16px] items-start font-ubuntu font-bold justify-start">✆10636</span>-Dhanmondi </p></a> 
        <Popover placement="bottom">
          <PopoverHandler>
          <Link > <a> <p className="text-[#006642] pl-2 cursor-pointer justify-start items-start text-[10px] font-medium  font-ubuntu">OTHER BRANCHES 》</p></a></Link>
        </PopoverHandler>
          <PopoverContent className="mt-[70px]">
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Dhanmondi(09666 787801)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Shantinagar(09666 787803)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">English Road(09666 787802)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Savar(09666 787808)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Mirpur(09666 787807)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Uttara(09666 787805)</p></a></Link>
          </PopoverContent>
        </Popover>
       
        
                  

      </div>
  
     
        
       
       <div className="text-[#006642]  ms-auto  justify-center items-center flex flex-wrap ">
         
         

         <li className="flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-col items-center  justify-center me-auto ">
     
      <Link onClick={handleClick1} ><p onClick={() => navigate('/')} className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        
           <a href=""> <p className="text-[#006642]  cursor-pointer justify-center items-center text-[20px]   font-ubuntu">🧪 </p></a>
        
          
        <a href=""><span className="pl-1 text-[13px] hidden md:block">Home Sample <br></br>Collection</span></a></p></Link>
                    
                    

        </div>
        
        </li>


         <li className="mr-4 inline-flex flex-row justify-center items-center">
        
      <div className="flex flex-row  ">
      
      
                    <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[20px]   font-ubuntu"> 🧑🏻‍💻 </p></a>
          
          
        
        <a href=""> <span className="pl-1 text-[13px] hidden md:block">Video<br></br>Consutancy</span></a></p>
              
        </div>
        
        </li>
         
         
         <li className="inline-flex flex-row mr-4 justify-center items-center">
        
      <div className="flex flex-row  ">
      
     
                    
      <Link to="/login">  <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
       
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[20px]   font-ubuntu"> 📋 </p></a>
         
              <a href=""> <span className="pl-1 text-[13px] hidden md:block">Report<br></br> Download</span></a></p>
              </Link>
        </div>
        
        </li>
         
         
        <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-row  ">
     
        <Link onClick={handleClick2}><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
           <a href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[20px]   font-ubuntu">✍️ </p></a>
         
        <a href=""><span className="pl-1  text-[13px] hidden md:block">Complain <br></br>Submission</span></a></p>
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