import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close,login,signup, star2, telephone, about, gmail } from "../assets";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const Navbar = () => {
  
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
   


   










  
  
  <nav className={`${styles.paddingX} w-full  flex items-center   fixed top-[45px] z-20 bg-white`} >
  <div className="w-full h-[70px] flex flex-wrap justify-between max-w-7xl text-[#006642]  mx-auto" >
    
  <div className="w-full h-[70px] flex flex-row max-w-7xl justify-between  items-center  mx-auto">
     <Link to="/" className="flex items-center  gap-2" onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
          <img src={logo} alt="logo" className="w-[30px] h-[30px] bg-none object-contain" />
          
        </Link>
        
        <ul className="list-none hidden sm:flex mx-auto flex-row gap-5">
            {navLinks.map((link) => 
              <li key={link.id} className={`${
                active === link.title
                ?"text-black"
                :"text-[#006642]"} hover:text-[#000000] pr-5 text-[18px]   font-ubuntu  border-gray-900  text-center focus:ring-4 text-sm focus:outline-none cursor-pointer`} onClick={() =>{setToggle(!toggle);setActive(link.title)}}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              
            )}
            
        </ul>
        
        <div className="flex items-center hidden md:block md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
      
      <Popover placement="top-[115px] bottom-start">
          <PopoverHandler>
          <p type="button" data-dropdown-toggle="language-dropdown-menu" className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm  rounded-lg cursor-pointer">
      <svg className="w-[20px] h-[20px] text-[#006642] hover:text-[#000000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" clip-rule="evenodd"/>
              </svg>
              <span className="text-[#006642] hover:text-[#000000] text-[13px] ms-0 mx-auto  font-ubuntu">My Account</span>
      </p>
      </PopoverHandler>
          <PopoverContent>
          <p type="button" data-dropdown-toggle="language-dropdown-menu" className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm  rounded-lg cursor-pointer">
      <svg className="w-[20px] h-[20px] text-[#006642] hover:text-[#000000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" clip-rule="evenodd"/>
              </svg>
              <span className="text-[#006642] hover:text-[#000000] text-[13px] ms-0 mx-auto  font-ubuntu">Login</span>
      </p><br />
      <p type="button" data-dropdown-toggle="language-dropdown-menu" className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm  rounded-lg cursor-pointer">
      <svg className="w-[20px] h-[20px] text-[#006642] hover:text-[#000000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" clip-rule="evenodd"/>
              </svg>
              <span className="text-[#006642] hover:text-[#000000] text-[13px] ms-0 mx-auto  font-ubuntu">Register</span>
      </p>
           </PopoverContent>
        </Popover>
                 
      
      
     </div> 
          
          
    

      
          
          
   
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu}  alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' :'flex'} p-6 bg-[#ffffff]  absolute top-20 right-20 mx-4 my-2 min-w-[335px] z-10 rounded-xl`}>
                <ul className="list-none flex justify-start items-start flex-col gap-5">
                {navLinks.map((link) => 
                  <li key={link.id} className={`${
                    active === link.title
                    ?"text-black"
                    :"text-[#006642]"} hover:text-black text-[14px] font-ubuntu cursor-pointer`} onClick={() => setActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                )}
               
              
          <li>
            <a href="#" className="block px-4 py-2 text-sm  me-auto  font-ubuntu text-white-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
              <a href="#" className=" p-1 rounded-[50px] text-white-400 inline-flex flex-row hover:text-[#000000] dark:hover:text-[#000000]">
              <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 13">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" clip-rule="evenodd"/>
              </svg>
              
          </a>

          <span className="text-[#006642] hover:text-[#000000] text-[14px]   font-ubuntu ms-0 me-auto  font-ubuntu">login</span>
              </div>
            </a>
          </li>
          <li>
            <a href="Modal.jsx" className="block px-4 py-2 text-sm text-[#006642] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div className="inline-flex items-center">
              <a href="#" className=" p-1 rounded-[50px] text-black-400 inline-flex flex-row hover:text-[#000000] dark:hover:text-[#000000]">
              <svg className="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 13">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> <path  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" clip-rule="evenodd"/>
              </svg>
              
          </a> <span className="text-[#006642] text-[14px]   font-ubuntu hover:text-[#000000] text-[13px] ms-0 mx-auto  font-ubuntu">Register</span>
              </div>
            </a>
          </li>
          
          
        
                </ul>
            </div>
        </div>

    
        
      </div>

  
</div>

    
  </nav>






    
  




  </>
  );
};

export default Navbar;
