import { Nav, Navbar, Tech } from "../components";
import React, { useState, useEffect } from 'react';
import { projects1 } from "../constants";
import { motion } from "framer-motion";



const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
const buttonVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 1, scale: 1.1 },
  hover: { scale: 1.05 },
};

const searchBoxVariants = {
  initial: { opacity: 1, scale: 1 },
  hover: { scale: 1.03 },
};


const BranchCard = ({ branch, handleReportDownload }) => {
  return (
    <li
      key={branch.branchID}
      className=" bg-gradient-to-b from-white to-[#00664218] hover:bg-gray-100 text-gray-500 branch-card cursor-pointer rounded shadow-xl m-4"
      onClick={() => handleReportDownload(branch.branchPage.reportDownload)}
    >
      <div className="branch-info p-4">
        <h3 className="text-gray-600 font-medium">{branch.heading}</h3>
        <p>{branch.address}</p>
        <p>
          Hotline: {branch.Hotline} | Email: {branch.Email}
        </p>
      </div>
    </li>
  );
};

const Report = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allDhakaBranches, setAllDhakaBranches] = useState([]);
  const [allOtherBranches, setAllOtherBranches] = useState([]);
  const [filteredDhakaBranches, setFilteredDhakaBranches] = useState([]);
  const [filteredOtherBranches, setFilteredOtherBranches] = useState([]);

  useEffect(() => {
    const dhaka = projects1.filter((branch) => branch.branchPage.braCity === 'Dhaka');
    const others = projects1.filter((branch) => branch.branchPage.braCity !== 'Dhaka');

    setAllDhakaBranches(dhaka);
    setAllOtherBranches(others);

    // Initial render: Set initial filtered lists to all branches
    setFilteredDhakaBranches(dhaka);
    setFilteredOtherBranches(others);
  }, []);

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setSearchTerm(searchQuery);

    const filteredBranches = projects1.filter((branch) =>
      branch.heading.toLowerCase().includes(searchQuery)
    );

    const dhaka = filteredBranches.filter(
      (branch) => branch.branchPage.braCity === 'Dhaka'
    );
    const others = filteredBranches.filter(
      (branch) => branch.branchPage.braCity !== 'Dhaka'
    );

    setFilteredDhakaBranches(dhaka);
    setFilteredOtherBranches(others);
  };

  const handleReportDownload = (reportDownloadLink) => {
    // Handle branch click event (consider opening link in new tab or redirecting)
    window.open(reportDownloadLink, '_blank'); // Open report in new tab
  };

  return (
    <div className="bg-white">
      <Nav />
      <Navbar />
      <div className="p-10 flex flex-wrap mx-auto max-w-7xl">
      <div className="flex flex-col w-full  pt-[100px] pb-10">
      <motion.input 
          type="text"
          placeholder="Search branches..."
          className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200  rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
          value={searchTerm}
          variants={searchBoxVariants}
          onChange={handleSearchChange}
          whileHover="hover"
        />
      </div>
    <div className="report-container bg-white grid grid-cols-1 md:grid-cols-2 gap-4">

      <div>
        <h2 className="text-[#006642] text-center font-semibold">Dhaka Branches</h2>
        {filteredDhakaBranches.length > 0 ? (
          <ul>
            {filteredDhakaBranches.map((branch) => (
              <BranchCard
                key={branch.branchID}
                branch={branch}
                handleReportDownload={handleReportDownload}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No branches found inside Dhaka.</p>
        )}
      </div>
      <div>
        <h2 className="text-[#006642] text-center font-semibold">Other Branches</h2>
        {filteredOtherBranches.length > 0 ? (
          <ul>
            {filteredOtherBranches.map((branch) => (
              <BranchCard
                key={branch.branchID}
                branch={branch}
                handleReportDownload={handleReportDownload}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No branches found outside Dhaka.</p>
        )}
      </div>
    </div>
    </div>
    <Tech />
    </div>
  );
};

export default Report;