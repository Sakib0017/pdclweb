import { styles } from '../styles';
import { ServiceCost, topManagement } from "../constants";
import React, { useState } from 'react';
import { Sidemenu, Bottommenu } from "../components";
import video from '../assets/video.mp4';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';
import { Link } from "react-router-dom";
const ListHeader = () => (
  <div className="flex  justify-between px-8 py-2  bg-gray-400 font-bold">
    <p>Service Name</p>
    <p>Service Cost</p>
  </div>
);

const handleReportDownload = (reportDownloadLink) => {
  // Handle branch click event (consider opening link in new tab or redirecting)
  window.open(reportDownloadLink, '_blank'); // Open report in new tab
};
const Hero = ({ color, href, children }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default link behavior (navigation within app)
    window.open("http://appointment.populardiagnostic.com/appointment", '_blank', 'noopener,noreferrer'); // Open link in new tab
  };
  const [openTab, setOpenTab] = React.useState(1);
  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();

      
    
      const [selectedBranch, setSelectedBranch] = useState(null);
  const [filteredServices, setFilteredServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setFilteredServices([]); // Reset filtered services on branch change
    setSearchTerm(""); // Reset search term on branch change
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    const branchServices = ServiceCost.find(
      (branch) => branch.braId === parseInt(selectedBranch)
    )?.services;
    if (branchServices) {
      const filtered = branchServices.flatMap((category) =>
        category.items.filter((service) =>
          service.serviceName.toLowerCase().includes(searchTerm)
        )
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  };
  const renderRow = ({ index, style }) => {
    const service = filteredServices[index];

    return (
      <li
      key={service.serviceId}
      style={style}
      className="flex justify-between px-4 py-2 bg-gray-300 hover:bg-gray-100 "
    >
      <p className="text-gray-600 font-ubuntu">{service.serviceName}</p>
      <p className="font-medium text-gray-700 font-ubuntu">{service.price.toLocaleString("en-BD", { style: "currency", currency: "BDT",})} </p>
    </li>
    );
  };
      
  
  return (
    <>


       

    <section className='w-full h-[700px]  relative  justify-top items-bottom'>
     
       <video className=" w-full h-[700px] object-cover object-top   top-0 left-0" src={video} autoPlay loop muted />
       <div className='absolute w-full h-[700px]  top-0 left-0 bg-gray-900/50'></div>
       <Sidemenu /> 
       <Bottommenu /> 
      <div className={`${styles.paddingX} absolute  top-[80px] max-w-7xl mx-auto inset-1 justify-center   items-bottom  text-center flex flex-col  text-white`}>
       
       
       
       
       
       
       
       
       
       <div className="flex-col  hidden md:block   max-w-7xl     mx-auto">
        <div className="max-w-7xl rounded-[5px] shadow bg-gray-100/95 ">
          <ul
            className="flex mb-0 ml-2 mr-2 list-none   flex-wrap pt-1 pb-2 flex-row"
            role="tablist"
          >
            <li className=" mr-2 mb-1 last:mr-0 fixed-left flex-auto text-center">
              <a
                className={
                  "text-[16px] font-ubuntu font-bold  px-2 py-3  shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-slate-900 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-PDCL-green ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Find Doctor
              </a>
            </li>
            <li className=" mr-2 last:mr-0 fixed-center flex-auto text-center">
              <a
                className={
                  "text-[16px] font-ubuntu  font-bold  px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-slate-900  bg-" + color + "-600"
                    : "text-" + color + "-600  bg-PDCL-green")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 <p className='text-shadow'>Appointment</p>
              </a>
            </li>
            <li className=" mr-2 last:mr-0 fixed-right flex-auto text-center">
              <a
                className={
                  "text-[16px] font-ubuntu font-bold  px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-slate-900 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-PDCL-green")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Test Price
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0   w-full mb-1 shadow-lg rounded">
            <div className="px-2 py-2 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                <form className="max-w-screen-xl   mx-auto">
  <div className="grid md:grid-cols-8 items-center p-6 h-[150px] md:gap-1">
   
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border border-gray-500  border-1  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
  <option  selected>Choose a Branch</option>
  <option  value="US">Dhanmondi</option>
  <option value="CA">Shymoli</option>
  <option value="FR">Shantinagar</option>
  <option value="DE">Uttara</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border b  border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
  <option selected>Choose a Specilization</option>
  <option value="US">Chest Medicine</option>
  <option value="CA">Neuro Medicine</option>
  <option value="FR">Sonologist</option>
  <option value="DE">Cardiology</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border b  border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
  <option selected>Choose a Day</option>
  <option value="US">Saterday</option>
  <option value="CA">Sunday</option>
  <option value="FR">Monday</option>
  <option value="DE">Tuesday</option>
</select></div>
<div className="relative z-0 w-full col-span-5 mb-1 group ">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block pl-2 py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-gray-500  border-1   dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"  required />
        
    </div>
   {/*} <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border   border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
  <option selected>Choose a Day</option>
  <option value="US">Sunday</option>
  <option value="CA">Monday</option>
  <option value="FR">Tuesday</option>
  <option value="DE">Wednesday</option>
</select></div> */}
    

    </div>
 
  
</form>
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link2">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-8  h-[150px] md:gap-1">
    
  <div class="w-full h-[150px] col-span-7 bg-gray-200 flex flex-col">
 
  <div class="flex-grow overflow-auto m-1 px-4 py-2">
  <div class="px-4 py-2 h-auto  rounded text-gray-900 bg-blue-300/50 text-left mb-2 flex items-center">
    <pre>Patients Inquery </pre>
     
    </div>
 
    <div class="px-4 py-2 h-auto  rounded text-gray-900 bg-emerald-300/50 text-left mb-2 flex items-center">
    
      <pre>This is a chatbot message.</pre>
    </div>
  </div>
  <div class="flex items-center">
    <input type="text" class="w-full p-2 ml-5 mr-10 rounded-lg border text-gray-900 bg-white border-gray-300 focus:outline-none focus:border-gray-500"/>
    <svg class="w-[50px] mr-5 h-[50px] fill-blue-300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

 <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"></path>

</svg></div>
</div>

    <Link onClick={handleClick} to=""><button  type="button"  className="text-white w-full mt-[50px] rounded block  h-[43px] hover:text-white border bg-PDCL-green border-none focus:ring-4 focus:outline-none focus:ring-[#006642] font-ubuntu  text-[16px] font-bold px-5 py-2.5 text-center  mb-0 dark:border-[#006642] dark:text-white dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-[#006642]">Appointment</button>
    </Link>
    </div>
 
  
</form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"}  id="link3">
                <form className="max-w-7xl  mx-auto">
  <div className="grid md:grid-cols-8 items-center  p-6 h-[150px] md:gap-[14px]">
  <div  className="relative  mb-1 group ">
  <select  value={selectedBranch} onChange={handleBranchChange} className="block py-2.5 px-0 w-full   text-sm text-gray-600 bg-transparent pl-2 border   border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
        <option value="">Select Branch</option>
        {ServiceCost.map((branch) => (
          <option key={branch.braId} value={branch.braId}>
            {branch.braName}
          </option>
        ))}
      </select>
   </div>
    <div  className="relative  col-span-7  mb-1 group ">
        <input type="text" value={searchTerm}  onChange={handleSearchChange} name="floating_first_name" placeholder="Test Name" id="floating_first_name" className="block   py-2.5 px-0 w-full  text-sm text-gray-900 bg-transparent border   border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"  required />
        
        
        <ul className='top-[100px] '>
       
        {filteredServices.length > 0 && (
        <div>
          {/* Render the header */}
          <ListHeader />

          {/* List */}
          <AutoSizer>
            {({ width }) => (
              <List
                height={250}
                rowCount={filteredServices.length}
                rowHeight={50}
                rowRenderer={renderRow}
                overscanRowCount={5}
                width={width}
              />
            )}
          </AutoSizer>
        </div>
      )}
      </ul>
      
    </div>
    
    </div>
 
  
</form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     


      <div className="flex flex-col mb-2 rounded sm:hidden  flex-1  justify-top items-center    mt-[90px] mx-auto">
        <div className=" w-[120%] h-auto bg-gray-100/95 p-2 rounded block">
          <ul
            className="flex mb-0 ml-2 mr-2 list-none flex-wrap pt-1 pb-1 flex-col shadow-lg"
            role="tablist"
          >
            <li className="pb-1  last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-[16px] font-bold font-ubuntu  px-2 py-3  shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-slate-900 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-PDCL-green ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Find Doctor
              </a>
            </li>
            <li className="pb-1 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-[16px] font-bold font-ubuntu  px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-slate-900 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-PDCL-green")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Appointment
              </a>
            </li>
            <li className=" last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-[16px] font-bold font-ubuntu  px-2 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-slate-900 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-PDCL-green")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Test Price
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0   w-full mb-1 shadow-lg rounded">
            <div className="px-2 py-2 flex-auto ">
              <div className="tab-content tab-space">
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                <form className="max-w-screen-xl bg-white mx-auto">
  <div className="grid md:grid-cols-4  md:gap-1">
   
    <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border   border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
  <option  selected>Choose a Branch</option>
  <option  value="US">Dhanmondi</option>
  <option value="CA">Shymoli</option>
  <option value="FR">Shantinagar</option>
  <option value="DE">Uttara</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border  border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
  <option selected>Choose a Specilization</option>
  <option value="US">Chest Medicine</option>
  <option value="CA">Neuro Medicine</option>
  <option value="FR">Sonologist</option>
  <option value="DE">Cardiology</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border focus:outline-none shadow-lg focus:border-gray-500  border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green  focus:ring-0 focus:border-PDCL-green peer">
  <option selected>Choose a Day</option>
  <option value="US">Saterday</option>
  <option value="CA">Sunday</option>
  <option value="FR">Monday</option>
  <option value="DE">Tuesday</option>
</select></div>
<div className="relative z-0 w-full mb-1 group">
        <input type="text" name="floating_first_name" placeholder="Doctors Name" id="floating_first_name" className="block pl-2 py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border   border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer"  required />
        
    </div>
   {/* <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-[#00a884]  border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
  <option selected>Choose a Day</option>
  <option value="US">Sunday</option>
  <option value="CA">Monday</option>
  <option value="FR">Tuesday</option>
  <option value="DE">Wednesday</option>
              </select></div> */}
    
   
    </div>
 
  
</form>
                </div>
                <div className={openTab === 1 ? "block" : "hidden"} id="link2">
                <form className="max-w-screen-xl  mx-auto">

                <div className="grid md:grid-cols-8   md:gap-1">
    
    
                <div class="w-full h-[220px]  bg-gray-200 flex flex-col">
    <div class="flex-grow overflow-auto m-1 px-4 py-2">
    <div className="block py-2.5 px-0 w-full text-sm  border h-auto  rounded text-gray-900 bg-blue-300/50 text-left   mb-2 dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
      <pre className="w-[100%]">Patients Inquery </pre>
       
      </div>
   
      <div className="block py-2.5 px-0 w-full h-auto  rounded text-gray-900 bg-emerald-300/50 text-left text-sm  border     dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
      
        <pre className="w-[200px] ">This is a chatbot message. <br></br>This is a chatbot message.</pre>
      </div>
    </div>
    <div class="relative  z-0 w-full mb-1 group">
      <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border     dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green border-1 border-gray-300 focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"/>
      <svg class="w-[50px] mr-5 h-[50px] ms-auto mt-2 p-1 fill-blue-300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  
   <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"></path>
  
  </svg></div>
  </div>
  
      <button type="button" className="text-white w-full mt-3 rounded block  h-[43px] hover:text-white border bg-PDCL-green border-none focus:ring-4 focus:outline-none focus:ring-[#006642] font-ubuntu  text-[16px] font-bold px-5 py-2.5 text-center  mb-0 dark:border-[#006642] dark:text-white dark:hover:text-white dark:hover:bg-gray-500 dark:focus:ring-[#006642]">Appointment</button>
      
      </div>
  
 
  
</form>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <form className="max-w-screen-xl  mx-auto">
  <div className="grid md:grid-cols-4  md:gap-12">
  <div className="relative z-0 w-full mb-1 group">
  <select  value={selectedBranch} onChange={handleBranchChange} className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent pl-2 border  border-1 border-gray-500  dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer">
        <option value="">Select Branch</option>
        {ServiceCost.map((branch) => (
          <option key={branch.braId} value={branch.braId}>
            {branch.braName}
          </option>
        ))}
      </select>
    
    </div>
    <div className="relative z-0 w-full mb-1 group">
        <input type="text" value={searchTerm}  onChange={handleSearchChange} name="floating_first_name" placeholder="Test Name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-600 bg-transparent border border-gray-500  border-1   dark:text-gray-600 dark:border-gray-500 dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2"  required />
        <ul className='top-[100px]'>
       
        {filteredServices.length > 0 && (
        <div>
          {/* Render the header */}
          <ListHeader />

          {/* List */}
          <AutoSizer>
            {({ width }) => (
              <List
                height={250}
                rowCount={filteredServices.length}
                rowHeight={50}
                rowRenderer={renderRow}
                overscanRowCount={5}
                width={width}
              />
            )}
          </AutoSizer>
        </div>
      )}
      </ul>
    </div>
   
    {/* <div className="relative z-0 w-full mb-1 group">
    <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-600-500 bg-transparent border border-[#00a884]  border-1 border-[#00a884]  dark:text-gray-600 dark:border-[#00a884] dark:focus:border-PDCL-green focus:outline-none focus:ring-0 focus:border-PDCL-green peer pl-2">
  <option selected>Choose a branch</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select></div>
     */}
   
    </div>
 
  
</form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>










      </div>
     
    </section>
 
    </>
  );
};

export default Hero;
