import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { dhan  } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { Card, Typography} from "@material-tailwind/react";
import {
   
 
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
  import { hea1, hea2  } from "../assets";

import { Link } from "react-router-dom";
function Health() {
  return (
    <div className="bg-white">
    <Nav />
     
      
     <Navbar />
     <div className={`inset-0 justify-center items-center  text-center flex flex-wrap  text-white`}>
       <div className="flex flex-wrap  max-w-screen-xl container rounded block items-stretch md:flex-wrap   mt-[150px] mx-auto">
       <div className="flex flex-col">
     <div className="h-full w-full p-2">
        <img  src={hea1} />
     </div>
     <div className="h-full w-full p-2">
        <img src={hea2} />
     </div>
     </div>      
     </div>    
     </div>
     <Tech />

     
   </div>
  )
}

export default Health