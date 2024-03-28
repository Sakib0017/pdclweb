import React, { useState } from "react";
import { Nav, Navbar, Sidemenu, Bottommenu, Tech } from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo, tripguide } from "../assets";
import { SectionWrapper } from "../hoc";
import { notice } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, noticeID, noticeImage, noticeHead, noticeDetail },  { content, initiallyExpanded = false }) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  
  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-gray-100-5 shadow rounded-md h-auto  sm:w-[299px] w-full">
        <div className="relative w-full h-[150px]">
          <img
            src={noticeImage}
            alt="project_image"
            className="w-full h-[150px] rounded-md object-cover sm:w-[299px]  opacity-95"
          />
        </div>

        <div className="mt-0 p-5">
          <p className="text-[#006642] font-ubuntu  text-[15px]">{noticeHead}</p>
        </div>

        <div className=" p-5">
        <div className="mb-4">

        <div className={`mt-2 prose ${expanded ? '' : 'h-0 overflow-hidden '}`}>
        <p className="text-gray-900">{noticeDetail}</p>
      </div>
      <button
        className={`w-full text-center font-medium  text-gray-900 hover:text-indigo-500 ${
          expanded ? '' : 'truncate'
        }`}
        onClick={handleClick}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
      
    </div>
        </div>
      </div>
    </motion.div>
  );
};

function Notice() {
  return (
    <div className="bg-white">
      <Nav />

      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <motion.div variants={textVariant()}>
        <div className="flex flex-col pt-[200px] mx-auto  max-w-7xl">
          <h2 className="text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu">
            Check out our Latest News & Notices
          </h2>
        </div>
      </motion.div>
      <div className=" flex mx-auto  pb-3 max-w-7xl p-5 justify-center flex-wrap gap-7">
        {notice.map((project, noticeID) => (
          <ProjectCard key={`noticeID-${noticeID}`} noticeID={noticeID} {...project} />
        ))}
      </div>
      <Tech />
    </div>
  );
}

export default Notice;
