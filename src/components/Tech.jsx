import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import img from "../assets/link.jpg";
import back from "../assets/back.jpg";
import { useNavigate, Link } from "react-router-dom";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  p,
} from "@material-tailwind/react";

const Tech = () => {
    
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
    
    <footer className="flex flex-row flex-wrap mt-10  justify-center">
    <div className="bg-[#f3f3f3]  shadow-lg  opacity-90 mx-auto w-full ">
      <div className=' flex mx-auto p-3 justify-evenly max-w-screen-xl flex-wrap '>
        <div className=' '>
            <h2 className="mb-6 text-[18px] font-bold font-ubuntu text-[#006642] uppercase dark:text-[#006642]">Contact Us</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">House #16, Road # 2, Dhanmondi R/A, Dhaka-1205, Bangladesh</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Phone : 09666 787801</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">E-mail : info@populardiagnostic.com</a>
                </li>
                
            </ul>
        </div>
        <div className=' '>
            <h2 className="mb-6 font-bold font-ubuntu text-[#006642] uppercase dark:text-[#006642]">Important Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Popular Pharmaceuticals</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Popular Medical College</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Popular Medical College Hospital</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Management Team</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Career</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Refund & Return Policy</a>
                </li>
            </ul>
        </div>
        <div className=''>
            <h1 className="mb-6 font-bold font-ubuntu text-[#006642] uppercase dark:text-[#006642]">Quick Links</h1>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Our Services</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Our Branches</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Call for Appointments</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Find Doctors</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Gallery</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Sitemap</a>
                </li>
            </ul>
        </div>
        
    </div>
    <img src={img} className="flex mt-4 p-5  sm:justify-center w-full max-w-7xl mx-auto "/>
    <div className="bg-[#d5e7d9] shadow-lg  px-4 py-6 mt-5 md:flex md:items-center md:justify-between ">
        
        <div className="flex  mt-4 sm:justify-center  md:mt-0 space-x-5 rtl:space-x-reverse max-w-7xl mx-auto">
        <span className="text-sm text-[#006642] font-ubuntu dark:text-[#006642] sm:text-center me-auto">© 2024 <a href="https://flowbite.com/">PDCL Corporate</a>
        </span>
            
            <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                 
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                 
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                 
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                
              </a>
        </div>
      </div>
    </div>
<div className="hidden md:block">
    <Popover placement="left">
          <PopoverHandler>
          <a target="_blank" className="fixed  top-[250px] border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
    <svg class="w-[60px] h-[60px] p-4 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent>
        
       
        
          <Link > <a> <p className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu">All BRANCHES 》</p></a></Link>
        
          <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Dhanmondi(09666 787801)   |   Dhanmondi(09666 787801)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Shantinagar(09666 787803)  |  Shantinagar(09666 787803)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">English Road(09666 787802)  |  English Road(09666 787802)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Savar(09666 787808)  |  Savar(09666 787808)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Mirpur(09666 787807)  |  Mirpur(09666 787807)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Uttara(09666 787805)  |  Uttara(09666 787805)</p></a></Link>

          
      
           </PopoverContent>
        </Popover>
                 
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[312px] border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
    <svg class="w-[60px] h-[60px] p-4 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M0 64C0 46.3 14.3 32 32 32H88h48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64zM136 96H88V256h48V96zM288 64c0-17.7 14.3-32 32-32h56 48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32zM424 96H376V256h48V96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent>
          <Link onClick={handleClick1} ><p onClick={() => navigate('/')} className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        
          
        <a href=""><span className="pl-1 text-[13px] ">Home Sample Collection</span></a></p></Link>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[374px] right-0 bg-[#006642]  border-[1px] border-gray-200/90 shadow-md">
<svg class="w-[60px] h-[60px] p-4 fill-[#ffffff]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
         
          <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        
        
     
     <a href=""> <span className="pl-1 text-[13px]">Video Consutancy</span></a></p>
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[434px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg class="w-[60px] h-[60px] p-4 fill-[#ffffff]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
              
                    
      <Link to="/login">  <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
       
      
          <a href=""> <span className="pl-1 text-[13px] ">Report Download</span></a></p>
          </Link>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[496px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg class="w-[60px] h-[60px] p-4 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM224 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V272H176c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h48V160z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
          <Link onClick={handleClick2}><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
         
        <a href=""><span className="pl-1  text-[13px] ">Complain Submission</span></a></p>
        </Link>   
      
           </PopoverContent>
        </Popover>



        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed bottom-[40px] right-1 rounded-[10px] bg-[#006642]">
          <svg class="w-[60px] h-[60px] p-4 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
         
      
           </PopoverContent>
        </Popover>
    
</div>
<div className="sm:hidden">
<Popover placement="left">
          <PopoverHandler>
          <a target="_blank" className="fixed  top-[125px] border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
    <svg class="w-[40px] h-[40px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent>
        
       
        
          <Link > <a> <p className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu">All BRANCHES 》</p></a></Link>
        
          <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Dhanmondi(09666 787801)   |   Dhanmondi(09666 787801)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Shantinagar(09666 787803)  |  Shantinagar(09666 787803)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">English Road(09666 787802)  |  English Road(09666 787802)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Savar(09666 787808)  |  Savar(09666 787808)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Mirpur(09666 787807)  |  Mirpur(09666 787807)</p></a></Link>
           <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Uttara(09666 787805)  |  Uttara(09666 787805)</p></a></Link>

          
      
           </PopoverContent>
        </Popover>
                 
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[166px] border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
    <svg class="w-[40px] h-[40px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M0 64C0 46.3 14.3 32 32 32H88h48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64zM136 96H88V256h48V96zM288 64c0-17.7 14.3-32 32-32h56 48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32zM424 96H376V256h48V96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent>
          <Link onClick={handleClick1} ><p onClick={() => navigate('/')} className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        
          
        <a href=""><span className="pl-1 text-[13px] ">Home Sample Collection</span></a></p></Link>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[207px] right-0 bg-[#006642]  border-[1px] border-gray-200/90 shadow-md">
<svg class="w-[40px] h-[40px] p-2 fill-[#ffffff]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
         
          <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
        
        
     
     <a href=""> <span className="pl-1 text-[13px]">Video Consutancy</span></a></p>
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[248px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg class="w-[40px] h-[40px] p-2 fill-[#ffffff]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
              
                    
      <Link to="/login">  <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
       
      
          <a href=""> <span className="pl-1 text-[13px] ">Report Download</span></a></p>
          </Link>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[289px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg class="w-[40px] h-[40px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM224 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V272H176c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h48V160z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
          <Link onClick={handleClick2}><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
         
        <a href=""><span className="pl-1  text-[13px] ">Complain Submission</span></a></p>
        </Link>   
      
           </PopoverContent>
        </Popover>



        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed bottom-[20px] right-1 rounded-[10px] bg-[#006642]">
          <svg class="w-[40px] h-[40px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
         
      
           </PopoverContent>
        </Popover>
        </div>
</footer>




    </>
  );
};

export default Tech;
