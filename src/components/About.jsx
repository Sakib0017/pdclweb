import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import {   Nav, Navbar,  Tech} from "../components";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
    
<div className="bg-gray-200">
<Nav />
 <Navbar />
 <div className={` justify-center items-center  text-center flex flex-wrap `}>
       <div className="  flex-col  max-w-7xl container  md:flex-col   mt-[150px] mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl  items-center justify-center">
 <div className="">
    <div className="w-full text-[#006642]">
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

    <Tech />
    </div>
    </>
  );
};

export default About
