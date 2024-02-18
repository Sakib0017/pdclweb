import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import img from "../assets/link.jpg";
import back from "../assets/back.jpg";
import { useNavigate, Link } from "react-router-dom";
import { healh, dical, cover, arrow, arrow1, arrow2 } from "../assets";
import {
   
  Card, Typography
} from "@material-tailwind/react";



import {
  Popover,
  PopoverHandler,
  PopoverContent,
 
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
    <div className="bg-[#f3f3f3]   opacity-90 mx-auto w-full ">
    <form className="max-w-screen-xl mx-auto  items-center justify-center">
  <div className="grid md:grid-cols-3   md:gap-1 ">
  <div className="text-black p-10 text-center">
  
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
    
   
  <div className='text-black p-10 text-center '>
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
        </div>
        <div className='text-black p-10 text-center'>
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

 
</form>
</div>
    <div className="bg-[#f3f3f3]  shadow-lg  opacity-90 mx-auto w-full ">
      <div className=' flex mx-auto p-3 justify-evenly max-w-screen-xl flex-wrap '>
       
        
       
    </div>
    <img src={img} className="flex mt-4 p-5  sm:justify-center w-full max-w-7xl mx-auto "/>
    <div className="bg-[#d5e7d9] shadow-lg  px-4 py-6 mt-5 md:flex md:items-center md:justify-between ">
        
        <div className="flex  mt-4 sm:justify-center  md:mt-0 space-x-5 rtl:space-x-reverse max-w-7xl mx-auto">
        <span className="text-sm text-[#006642] font-ubuntu text-center dark:text-[#006642] sm:text-center me-auto">© Copyright 2024. <a href="">Popular Diagnostic Centre Ltd.</a>
        </span>
            
            
        </div>
      </div>
    </div>
<div className=" hidden md:block">


        


       
           <div>
           <Popover placement="left-start">
          <PopoverHandler>
          <a target="_blank" className="fixed top-[220px] border-[1px] border-gray-200/90 right-0 bg-[#006642]  shadow-md">
    <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent >
        
       
        
          <a> <Link > <a> <p className="text-[#006642]  pl-2 cursor-pointer justify-start items-start text-[12px] font-medium  font-ubuntu">All BRANCHES 》</p></a></Link></a>
        
          <a><Link to="/details"><a  href=""> <p className="text-[#006642]  cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Dhanmondi(09666 787801)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Shantinagar(09666 787803)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">English Road(09666 787802)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Savar(09666 787808)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Mirpur(09666 787807)</p></a></Link></a>
          <a>  <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Uttara(09666 787805)</p></a></Link></a>

          
      
           </PopoverContent>
        </Popover>
    
                 
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[270px] border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
    <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M0 64C0 46.3 14.3 32 32 32H88h48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64zM136 96H88V256h48V96zM288 64c0-17.7 14.3-32 32-32h56 48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32zM424 96H376V256h48V96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent>
          <a> <Link to="/sample" ><p onClick={() => navigate('/')} className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        
          
        <a href=""><span className="pl-1 text-[13px] ">Home Sample Collection</span></a></p></Link></a>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[320px] right-0 bg-[#006642]  border-[1px] border-gray-200/90 shadow-md">
<svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

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
          <a  target="_blank" className="fixed top-[370px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
              
                    
          <a> <Link to="/login">  <p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
       
      
          <a href=""> <span className="pl-1 text-[13px] ">Report Download</span></a></p>
          </Link></a>
      
           </PopoverContent>
        </Popover>
          <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[420px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM224 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V272H176c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h48V160z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
          <a><Link to="/complain"><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
         
        <a href=""><span className="pl-1  text-[13px] ">Complain Submission</span></a></p>
        </Link>   </a>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed top-[470px]     border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
          <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
          <a> <Link onClick={handleClick2}><p className="text-[#006642]  items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
         
        <a href=""><span className="pl-1  text-[13px] ">Messanger Chat</span></a></p>
        </Link>   </a>
      
           </PopoverContent>
        </Popover>
        </div>
          

        
    
</div>



<div className="sm:hidden">

{/*<div className="fixed bottom-[10px] w-[100px] p-0 right-[40px] bg-none">
  <img src={arrow1} alt="arrow1" className="w-[100px]  h-[60px] " />
</div> */}
<div className="fixed bottom-[56px] w-[80px] p-0 right-0 bg-none">
  <img src={arrow1} alt="arrow2" className="w-[80px]  h-[60px] " />
</div>

<Popover placement="top">
          <PopoverHandler>
          
          <a target="_blank" className="fixed bottom-[20px] border-[1px] border-gray-200/90 right-1 bg-[#006642]  shadow-md">
          <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>

</svg></a>

      </PopoverHandler>
          <PopoverContent >
        
       
        
          <Popover placement="left-start">
          <PopoverHandler>
          <a target="_blank" className="fixed bottom-[320px] sm:hidden border-[1px] border-gray-200/90 right-1 bg-[#006642]  shadow-md">
    <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent >
        
       
        
          <a><Link > <a> <p className="text-[#006642]  pl-2 cursor-pointer justify-start items-start text-[12px] font-medium  font-ubuntu">All BRANCHES 》</p></a></Link></a>
        
          <a><Link to="/details"><a  href=""> <p className="text-[#006642]  cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Dhanmondi(09666 787801)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Shantinagar(09666 787803)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">English Road(09666 787802)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Savar(09666 787808)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Mirpur(09666 787807)</p></a></Link></a>
          <a> <Link to="/details"><a  href=""> <p className="text-[#006642] cursor-pointer justify-center items-center text-[12px] p-2  font-ubuntu">Uttara(09666 787805)</p></a></Link></a>

          
      
           </PopoverContent>
        </Popover>
    
                 
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed bottom-[270px] sm:hidden border-[1px] border-gray-200/90 right-1 bg-[#006642] shadow-md">
    <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M0 64C0 46.3 14.3 32 32 32H88h48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96C14.3 96 0 81.7 0 64zM136 96H88V256h48V96zM288 64c0-17.7 14.3-32 32-32h56 48 56c17.7 0 32 14.3 32 32s-14.3 32-32 32V400c0 44.2-35.8 80-80 80s-80-35.8-80-80V96c-17.7 0-32-14.3-32-32zM424 96H376V256h48V96z"></path>

</svg></a>
      </PopoverHandler>
          <PopoverContent>
          <a><Link to="/sample" ><p onClick={() => navigate('/')} className="text-[#006642]  items-center flex flex-row text-[12px] mx-auto  font-ubuntu"> 
        
          
        <a href=""><span className="pl-1 text-[13px] ">Home Sample Collection</span></a></p></Link></a>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed bottom-[220px]  sm:hidden right-1 bg-[#006642]  border-[1px] border-gray-200/90 shadow-md">
<svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

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
          <a  target="_blank" className="fixed bottom-[170px] sm:hidden border-[1px] border-gray-200/90 right-1 bg-[#006642] shadow-md">
<svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM160 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H224v48c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V352H112c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16h48V240z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
              
                    
          <a><Link to="/login">  <p className="text-[#006642] sm:hidden items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
       
      
          <a href=""> <span className="pl-1 text-[13px] ">Report Download</span></a></p>
          </Link></a>
      
           </PopoverContent>
        </Popover>
          <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed bottom-[120px] sm:hidden border-[1px] border-gray-200/90 right-1 bg-[#006642] shadow-md">
<svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM224 160c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V272H176c-8.8 0-16-7.2-16-16V224c0-8.8 7.2-16 16-16h48V160z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
          <a> <Link to="/complain"><p className="text-[#006642] sm:hidden items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
         
        <a href=""><span className="pl-1  text-[13px] ">Complain Submission</span></a></p>
        </Link>   </a>
      
           </PopoverContent>
        </Popover>
        <Popover placement="left">
          <PopoverHandler>
          <a  target="_blank" className="fixed bottom-[70px]    sm:hidden border-[1px] border-gray-200/90 right-1 bg-[#006642] shadow-md">
          <svg class="w-[50px] h-[50px] p-2 fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

<path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path>

</svg>
</a>
      </PopoverHandler>
          <PopoverContent>
          <a> <Link onClick={handleClick2}><p className="text-[#006642] sm:hidden items-center flex flex-row text-[12px] ms-0 me-1  font-ubuntu"> 
      
         
        <a href=""><span className="pl-1  text-[13px] ">Messanger Chat</span></a></p>
        </Link>   </a>
      
           </PopoverContent>
        </Popover>
      
           </PopoverContent>
        </Popover>
           
        </div>
</footer>




    </>
  );
};

export default Tech;
