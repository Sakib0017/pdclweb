import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import {   Nav, Navbar,  Tech} from "../components";
import { Link } from "react-router-dom";
import { char,
  md,
  ad,
  agf,
  gm,
  agm,
  me,
  mf,
  m,
  age,
  dgm,
  mm } from "../assets";
const About = () => {
  return (
    <>
    
<div className="bg-white">
<Nav />
 <Navbar />
 <div className={` justify-center items-center  text-center flex flex-wrap `}>
       <div className="  flex-col  max-w-7xl container  md:flex-col   mt-[150px] mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl  items-center justify-center">
 <div className="">
    <div className="w-full text-[#006642] p-5">
      <select  className="block py-2.5 px-0 w-full text-sm text-[#006642] bg-transparent pl-2 border border-[#125133]  border-1  dark:text-[#006642] dark:border-[#125133] dark:focus:border-[#006642] focus:outline-none focus:ring-0 focus:border-[#006642] peer">
      <option className="text-[#006642]" selected><Link to="/about">Management Team</Link></option>
        <option className="text-[#006642]"><Link>Goals & Objects</Link></option>
        <option className="text-[#006642]"><Link>Message from Chairman</Link></option>
        <option className="text-[#006642]"><Link>Message from Managing Director</Link></option>  
      </select>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    <div className={` justify-center items-center  text-center flex flex-wrap `}>
       <div className="  flex-col  max-w-7xl container  md:flex-col   mt-[150px] mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl  items-center bg-none rounded-[10px] justify-center">
  <div className="grid md:grid-cols-4 bg-gray-100 shadow md:gap-1 ">
    <div className="text-black  text-center">
    
    </div>
    <div className="text-black  text-center">
   <img className="h-[350px] mx-auto p-5 w-[300px]" src={char} />
   <p className="text-[#006642] font-ubuntu font-bold ">LATE TAHERA AKHTER</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Chairman</p>
    </div>
    <div className="text-black text-center ">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={md} />
    <p className="text-[#006642] font-ubuntu font-bold ">DR. MOSTAFIZUR RAHMAN</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Managing Director</p>
    </div>
    <div className="text-black text-center ">
         
    </div>
  </div>
  <div className="grid md:grid-cols-3 mt-5 bg-gray-100 shadow mx-auto   md:gap-1 ">
    
    <div className="text-black  text-center">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={ad} />
    <p className="text-[#006642] font-ubuntu font-bold ">AFZAL HOSSAIN</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Advisor, Marketing</p>
    </div>
    <div className="text-black text-center ">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={gm} />
    <p className="text-[#006642] font-ubuntu font-bold ">MOSADDEQUE HOSSAIN</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">General Manager, Customer Services</p>
    </div>
    <div className="text-black text-center ">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={dgm} />
    <p className="text-[#006642] font-ubuntu font-bold ">Md. Alauddin, FCMA</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">DGM & Head of Finance & Accounts</p>
    </div>
  </div>
  <div className="grid md:grid-cols-3 mt-5 bg-gray-100 shadow  md:gap-1 ">
    
    <div className="text-black  text-center">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={agm} />
    <p className="text-[#006642] font-ubuntu font-bold ">ACHINTO KUMAR NAG</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">AGM, (HR & Admin)</p>
    </div>
    <div className="text-black text-center ">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={age} />
    <p className="text-[#006642] font-ubuntu font-bold ">MOSTAFA NURMOHAMMAD (PALASH)</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">AGM, (Engineering)</p>
    </div>
    <div className="text-black text-center ">
    <img className="h-[350px] mx-auto p-5 w-[300px]" src={agf} />
    <p className="text-[#006642] font-ubuntu font-bold ">ABDUR RAZZAK</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">AGM, (Finance & Accounts)</p>
    </div>
  </div>
  <div className="grid md:grid-cols-4 mt-5 bg-gray-100 shadow md:gap-1 ">
    <div className="text-black  text-center">
    <img className="h-[350px] mx-auto p-[50px] w-[320px]" src={m} />
    <p className="text-[#006642] font-ubuntu font-bold ">MOHAMMAD ARIF</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Manager, (ICT)</p>
    </div>
    <div className="text-black  text-center">
    <img className="h-[350px] mx-auto p-[50px] w-[320px]" src={mm} />
    <p className="text-[#006642] font-ubuntu font-bold ">Md. Ziaul Haque Faruk</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Manager, (Marketing)</p>
    </div>
    <div className="text-black text-center ">
    <img className="h-[350px] mx-auto p-[50px] w-[320px]" src={me} />
    <p className="text-[#006642] font-ubuntu font-bold ">Mr. Kabir Ahmed</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Manager, (Engineering)</p>
    </div>
    <div className="text-black  text-center ">
    <img className="h-[350px] mx-auto p-[50px] w-[320px]" src={mf} />
    <p className="text-[#006642] font-ubuntu font-bold ">Md. Sahab Uddin</p>
   <p className="text-[#006642] font-ubuntu text-[12px] pb-2">Manager, (Finance & Accounts)</p>
    </div>
  </div>
  
</form>


     </div>      
     </div>    
     </div>

    <Tech />
    </div>
    </>
  );
};

export default About
