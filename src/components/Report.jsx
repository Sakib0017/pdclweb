import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects1  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Card, Typography, IconButton } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Test Name", "Pataint Name", "Publish Date", "Download", "Print"];
 
const TABLE_ROWS = [
  {
    name: "Blood Test",
    job: "Rayhan Ali",
    date: "23/04/23",
    icon1:downloads,
    icon2:printer,
  },
  {
    name: "Urine Test",
    job: "Rayhan Ali",
    date: "23/04/23",
    icon1:downloads,
    icon2:printer,
  },
  {
    name: "Tssue Cell Test",
    job: "Rayhan Ali",
    date: "19/09/23",
    icon1:downloads,
    icon2:printer,
  },
  {
    name: "Dengue Test",
    job: "Rayhan Ali",
    date: "24/12/23",
    icon1:downloads,
    icon2:printer,
  },
  {
    name: "Corora Test",
    job: "Rayhan Ali",
    date: "04/10/23",
    icon1:downloads,
    icon2:printer,
  },
];
function Report() {
  return (
    <div className="bg-white">
    <Nav />
     
      
     <Navbar />
 
  <div className="flex flex-col pt-[200px] mx-auto   max-w-7xl">
        <h2 className='text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu'>ALL THE REPORTS THAT YOU WANT</h2>
        </div>
    
        <div className="flex flex-col pb-10 mx-auto p-3  max-w-7xl">
        <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto  text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b  text-[#006642] border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="bold"
                  color="blue-gray"
                  className="font-normal font-bold font-ubuntu leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date, icon1, icon2 }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4  text-[#006642] font-ubuntu">
               
                  {name}
              
              </td>
              <td className="p-4  text-[#006642] font-ubuntu">
               
                  {job}
               
              </td>
              <td className="p-4 text-[#006642] font-ubuntu">
              
                  {date}
               
              </td>
              <td className="p-2">
               <img className=" h-[18px] w-[18px]" src={icon1} />
                  
               
              </td>
              <td className="p-2 ">
               <img className=" h-[18px] w-[18px]" src={icon2} />
                  
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
        
        </div>
    



     <Tech />

     
   </div>
  )
}

export default Report