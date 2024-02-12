import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import img from "../assets/link.jpg";
function Cor() {
  return (
  <>
    <h3 className='text-gray-900/50  text-center text-[28px] font-ubuntu'>Corporate Partners</h3>
    <hr className="h-px my-8 bg-gray-200 max-w-screen-xl mx-auto border-0 dark:bg-gray-700"></hr>
    <div className=' flex flex-row flex-wrap mt-10 max-w-screen-xl mx-auto justify-center gap-10'>
 
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
         
          <img src={technology.icon} />
        </div>
      ))}
    </div>
    </>
  )
}

export default Cor