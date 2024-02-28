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
   

  <nav className={`${styles.paddingX} w-full  flex items-center shadow fixed top-[25px] z-20 bg-gray-100/80`} >
  
  
  <div className="w-full h-[75px] flex flex-wrap justify-between max-w-7xl text-emerald-900/80  mx-auto" >
    
  <div className="w-full h-[75px]  flex flex-row max-w-7xl justify-between  items-center  mx-auto">
  <a><Link to="/" className="flex items-center  gap-0" onClick={() => {setActive(""); window.scrollTo(0, 0);}}>
          <img src={logo} alt="logo" className="w-[30px] h-[30px] bg-none object-contain" />
          
        </Link></a>
       {/* <div className=" mt-[-50px] ml-[50px] p-1  text-center h-[55px] w-[80px] rounded-br-[20px]  rounded-bl-[20px]  fill-white">

 <Link to="/" >
         
          <h3 className="text-emerald-900/80   font-ubuntu font-bold">Hotline</h3>
          <p className="text-emerald-900/80  font-ubuntu font-bold">10636</p>
          
        </Link>
  </div> */}
        <ul className="list-none  hidden sm:flex mx-auto flex-row gap-1">
        <li className="flex mr-4  flex-row justify-center items-center">
        <div className="flex flex-row  ">
         
         
        <a> <Link to="/login">      <p className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
           
            
           
           <a href=""> <span className="pl-1 text-[16px] font-bold font-ubuntu hidden md:block">Pataint Portal</span></a></p>
                 </Link></a>
           </div>
         
           
           </li>
   
   
            <li className="mr-4 inline-flex flex-row justify-center items-center">
           
         <div className="flex flex-row  ">
         
         
         <a> <Link to="/health">      <p className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
           
            
           
           <a href=""> <span className="pl-1 text-[16px] font-bold font-ubuntu hidden md:block">Pakages</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
            <li className="inline-flex flex-row mr-4 justify-center items-center">
           
         <div className="flex flex-row  ">
         
        
                       
          
                 
                 <Popover placement="bottom">
          <PopoverHandler>
          
          <a>   <p className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
          
            
         <span className="pl-1 text-[16px] font-bold font-ubuntu hidden md:block cursor-pointer">Branchs</span>
          </p>
                 </a>
      </PopoverHandler>
          <PopoverContent className="mt-[24px] fill-white">
          <a><Link to="/details"><p onClick={() => navigate('/')} className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
         
           <a ><span className="pl-1  text-[16px] font-bold font-ubuntu hidden md:block">Dhanmondi</span></a></p>
           </Link>         
           </a>      
           </PopoverContent>
        </Popover>
                 
      
      
     
              
           </div>
           
           </li>
            
            
           <li className="inline-flex mr-4 flex-row justify-center items-center">
            
         <div className="flex flex-row  ">
        
           <a><Link to="/notice"><p className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
         
           <a href=""><span className="pl-1  text-[16px] font-bold font-ubuntu hidden md:block">Notices</span></a></p>
           </Link>         
           </a>          
   
           </div>
           
           </li>
           <li className="inline-flex mr-4 flex-row justify-center items-center">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/contact"><p className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
            
              <a href=""><span className="pl-1  text-[16px] font-bold font-ubuntu hidden md:block">Contact</span></a></p>
              </Link>         
              </a>          
      
              </div>
              
              </li>
              <li className="inline-flex mr-4 flex-row justify-center items-center">
            
            <div className="flex flex-row  ">
           
            <a> <Link to="/about"><p className="text-emerald-900/80  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
            
              <a href=""><span className="pl-1  text-[16px] font-bold font-ubuntu hidden md:block">About Us</span></a></p>
              </Link>         
              </a>        
      
              </div>
              
              </li>
            
        </ul>
        
        <div className=" items-end hidden  md:block md:order-2 ">
      
      <Popover placement="bottom">
          <PopoverHandler>
          <p type="button" data-dropdown-toggle="language-dropdown-menu" className="ms-auto inline-flex items-end font-ubuntu justify-end text-sm  rounded-lg cursor-pointer">
          <svg class="w-[20px] h-[20px] fill-emerald-900/80 p-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

<path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"></path>

</svg>
      </p>
      </PopoverHandler>
          <PopoverContent className="mt-[24px] fill-white">
          <a><Link to="/login"> <p type="button" data-dropdown-toggle="language-dropdown-menu" className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm  rounded-lg cursor-pointer">
         <svg class="w-[25px] h-[25px] fill-emerald-900/80 p-1" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>

</svg>
              <span className="text-emerald-900/80 hover:text-[#000000] text-[13px] ms-0 mx-auto  font-bold font-ubuntu">Login</span>
      </p></Link></a><br />
      <a> <Link to="/sign"><p type="button" data-dropdown-toggle="language-dropdown-menu" className="ms-auto inline-flex items-center font-ubuntu justify-center px-4 py-2 text-sm  rounded-lg cursor-pointer">
      <svg class="w-[25px] h-[25px] fill-emerald-900/80 p-1" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>

</svg>
              <span className="text-emerald-900/80 hover:text-[#000000] text-[13px] ms-0 mx-auto font-bold font-ubuntu">Register</span>
      </p></Link></a>
           </PopoverContent>
        </Popover>
                 
      
      
     </div> 
          
          
    

      
          
          
   
        <div className="sm:hidden  flex flex-1 justify-end items-start">
        <svg  className="w-[28px] h-[28px] fill-emerald-900/80" onClick={() => setToggle(!toggle)}  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>

</svg>
            <div className={`${!toggle ? 'hidden' :'flex'} p-10 bg-emerald-900/90  absolute top-20 rounded-md`}>
                <ul className=" flex me-auto flex-col gap-3">
                <li className="inline-flex flex-row justify-start items-start">
        <div className="flex flex-row  ">
         
         
        <a><Link to="/login">      <p className="text-white me-auto  items-start flex flex-row text-[16px]  font-medium font-ubuntu"> 
           
            
           
           <a href=""> <span className=" me-auto text-[16px] font-bold font-ubuntu ">Pataint Portal</span></a></p>
                 </Link></a>
           </div>
         
           
           </li>
                <li className="inline-flex flex-row justify-start items-start">
           
         <div className="flex flex-col ">
         
         
         <a> <Link to="/health">      <p className="text-white me-auto  items-start flex flex-row text-[16px]  font-bold font-ubuntu"> 
           
            
           
           <a href=""> <span className="me-auto text-[16px] font-bold font-ubuntu">Pakages</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
            <li className="inline-flex flex-row justify-start items-start">
           
         <div className="flex flex-row  ">
         
        
                       
         <a>  <Link to="/modal">  <p className="text-white me-auto items-start flex flex-row text-[16px] font-medium font-ubuntu"> 
          
             
                 <a href=""> <span className="text-[16px] font-bold font-ubuntu ">Branchs</span></a></p>
                 </Link></a>
           </div>
           
           </li>
            
            
           <li className="inline-flex flex-row justify-start items-start">
            
         <div className="flex flex-row  ">
        
         <a> <Link to="/notice"><p className="text-white  items-center flex flex-row text-[16px]  font-medium font-ubuntu"> 
         
           <a href=""><span className="text-[16px] font-bold font-ubuntu ">Notices</span></a></p>
           </Link>      </a>   
                       
   
           </div>
           
           </li>
           <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/contact"><p className="text-white  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
            
              <a href=""><span className="text-[16px] font-bold font-ubuntu ">Contact</span></a></p>
              </Link>   </a>      
                          
      
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/about"><p className="text-white  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
            
              <a href=""><span className="text-[16px] font-bold font-ubuntu ">About Us</span></a></p>
              </Link>    </a>     
                          
      
              </div>
              
              </li>
              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a> <Link to="/login"><p className="text-white  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
              <svg class="w-[12px] h-[12px]  fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>

</svg>
              <a href=""><span className="text-[16px] pl-2 font-bold font-ubuntu ">Login</span></a></p>
              </Link>  </a>       
                          
      
              </div>
              
              </li>

              <li className="inline-flex flex-row justify-start items-start">
            
            <div className="flex flex-row  ">
           
            <a>  <Link to="/sign"><p className="text-white  items-center flex flex-row text-[16px] ms-0 me-1 font-medium font-ubuntu"> 
              <svg class="w-[15px] h-[15px] fill-white " viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

<path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>

</svg>
              <a href=""><span className="text-[16px] pl-1 font-bold font-ubuntu ">Register</span></a></p>
              </Link> </a>        
                          
      
              </div>
              
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
