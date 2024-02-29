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
  {/*const handleClick = () => {
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
  }, []);*/}

  return (
    <>
   <nav className={`${styles.paddingX} shadow-lg   w-full fixed h-[30px] top-0 z-20 flex flex-col items-center justify-center bg-emerald-900/80`} >
  <div className="w-full h-[30px]  flex flex-wrap items-center   justify-between max-w-7xl text-[#ffffff] " >
  <div className="flex flex-row items-center  justify-start me-auto">
    <div className="flex flex-row items-center  justify-center ">
  <a href="#" className="text-white ">
  <svg className="w-4 h-4 ml-2 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

    <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>

    </svg>
              
              </a>
              <h2 className={`${styles.lightingNeon}  pl-1 text-[18px]  font-extrabold   font-ubuntu`}>10636<span className={`${styles.lightingNeon} text-[15px] pl-1  font-ubuntu font-normal`}>(Dhanmondi)</span></h2>   
           </div>
              
              <div className="flex flex-row items-center  justify-center ">
              <a href="#" className="text-white pl-2 ">
              <svg className="w-4 h-4 fill-white " viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

               <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>

                </svg>
              
              </a>
              <p className="pl-1 text-[15px]  text-white font-extrabold font-ubuntu">24/7
</p> 
              </div>
              </div>
              <div className="flex flex-row items-start  justify-start ms-auto">
              <a href="#" className="text-white   p-1 pl-2">
                  <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  
              </a>
              
              <a href="#" className="text-white  p-1 pl-2 ">
                  <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  
              </a>
              <a href="#" className="text-white p-1 pl-2 mr-2 hover:text-gray-900 dark:hover:text-black">
              <svg className="w-4 h-4 text-white " viewBox="0 0 576 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor">

              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" clip-rule="evenodd"/>

              </svg>
                 
              </a>
             
  </div>
  </div>
  </nav>
 {/* <nav className={`${styles.paddingX}shadow-lg   w-full fixed h-[40px] top-0 z-20 flex flex-col items-center  bg-[#f3f3f3]`} >
  <div className="w-full h-[40px]  flex flex-wrap items-center   justify-between max-w-7xl text-white " >
  <div className="flex flex-col items-start  justify-start me-auto">
      
      <a href=""> 
      
       <p onClick={() => navigate('/')} className="text-white pl-2 justify-center items-start text-[12px] font-medium  font-ubuntu">
        <span className="text-[16px] items-start font-ubuntu font-bold justify-start">✆10636</span>-Dhanmondi </p></a> 
        <Popover placement="bottom">
          <PopoverHandler>
          <Link > <a> <p className="text-white pl-2 cursor-pointer justify-start items-start text-[10px] font-medium  font-ubuntu">OTHER BRANCHES 》</p></a></Link>
        </PopoverHandler>
          <PopoverContent className="mt-[70px]">
           <Link to="/details"><a  href=""> <p className="text-white cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Dhanmondi(09666 787801)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-white cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Shantinagar(09666 787803)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-white cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">English Road(09666 787802)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-white cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Savar(09666 787808)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-white cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Mirpur(09666 787807)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-white cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Uttara(09666 787805)</p></a></Link>
          </PopoverContent>
        </Popover>
       
        
                  

      </div>
  
     
        
       
       <div className="text-white  ms-auto  justify-center items-center flex flex-wrap ">
         
         

         <li className="flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-col items-center  justify-center me-auto ">
     
      <Link onClick={handleClick1} ><p onClick={() => navigate('/')} className="text-white  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        
           <a href=""> <p className="text-white  cursor-pointer justify-center items-center text-[20px]   font-ubuntu">🧪 </p></a>
        
          
        <a href=""><span className="pl-1 text-[13px] hidden md:block">Home Sample <br></br>Collection</span></a></p></Link>
                    
                    

        </div>
        
        </li>


         <li className="mr-4 inline-flex flex-row justify-center items-center">
        
      <div className="flex flex-row  ">
      
      
                    <p className="text-white  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        
           <a href=""> <p className="text-white cursor-pointer justify-center items-center text-[20px]   font-ubuntu"> 🧑🏻‍💻 </p></a>
          
          
        
        <a href=""> <span className="pl-1 text-[13px] hidden md:block">Video<br></br>Consutancy</span></a></p>
              
        </div>
        
        </li>
         
         
         <li className="inline-flex flex-row mr-4 justify-center items-center">
        
      <div className="flex flex-row  ">
      
     
                    
      <Link to="/login">  <p className="text-white  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
       
           <a href=""> <p className="text-white cursor-pointer justify-center items-center text-[20px]   font-ubuntu"> 📋 </p></a>
         
              <a href=""> <span className="pl-1 text-[13px] hidden md:block">Report<br></br> Download</span></a></p>
              </Link>
        </div>
        
        </li>
         
         
        <li className="inline-flex mr-4 flex-row justify-center items-center">
         
      <div className="flex flex-row  ">
     
        <Link onClick={handleClick2}><p className="text-white  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
           <a href=""> <p className="text-white cursor-pointer justify-center items-center text-[20px]   font-ubuntu">✍️ </p></a>
         
        <a href=""><span className="pl-1  text-[13px] hidden md:block">Complain <br></br>Submission</span></a></p>
        </Link>         
                    

        </div>
        
        </li>
       </div>
       
       <div>
      
      
    </div>


      
      </div>
      
      
  </nav>*/}
  
 </>
  );
};

export default Nav;