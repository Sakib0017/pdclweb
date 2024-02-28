import React, { useRef } from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects1  } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Card, Typography, IconButton } from "@material-tailwind/react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
 

function Report() {
  const pdfRef = useRef();
  const downloadPDF = () =>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX  = (pdfWidth - imgWidth * ratio ) / 2 ;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    });
  };
  return (
    <>
    <div className="bg-white" >
    <Nav />
     
      
     <Navbar />
 
  <div className="flex flex-col pt-[200px] mx-auto   max-w-7xl" >
        <h2 className='text-gray-900/50 pb-5 text-center pl-2 text-[28px] font-bold font-ubuntu'>ALL THE REPORTS THAT YOU WANT</h2>
        </div>
    
        <div className="flex flex-col pb-10 mx-auto p-3  max-w-7xl" >
        <Card className="h-full w-full overflow-scroll bg-gray-100-5" ref={pdfRef}>
      <table className="w-full min-w-max table-auto  text-left" >
        <thead>
          <tr>
           
              <th className="border-b  text-[#006642]  border-blue-gray-100 bg-blue-gray-50 p-4">
                
                 <p>Test Name</p>
                
              </th>
              <th className="border-b  text-[#006642]  border-blue-gray-100 bg-blue-gray-50 p-4">
                
                <p>Pataint Name</p>
               
             </th>
             <th className="border-b  text-[#006642]  border-blue-gray-100 bg-blue-gray-50 p-4">
                
                <p>Publish Date</p>
               
             </th>
             <th className="border-b  text-[#006642]  border-blue-gray-100 bg-blue-gray-50 p-4">
                
                <p>Download</p>
               
             </th>
             <th className="border-b  text-[#006642]   border-blue-gray-100 bg-blue-gray-50 p-4">
                
                <p>Print</p>
               
             </th>
         
          </tr>
        </thead>
        <tbody>
          
            <tr  className="even:bg-blue-gray-50/50">
              <td className="p-4  text-[#006642] font-ubuntu ">
               
                  <p>Tssue Cell Test</p>
              
              </td>
              <td className="p-4  text-[#006642] font-ubuntu ">
               
              <p>Rayhan Ali</p>
               
              </td>
              <td className="p-4 text-[#006642] font-ubuntu ">
              
              <p>19/09/23</p>
               
              </td>
              <td className="p-2">
                <button className="" onClick={downloadPDF}> <img className=" h-[18px] w-[18px]"  src={downloads} /></button>
              
                  
               
              </td>
              <td className="p-2 ">
               <img className=" h-[18px] w-[18px]" onClick={downloadPDF} src={printer} />
                  
               
              </td>
            </tr>
         
        </tbody>
      </table>
    </Card>
        
        </div>
    



     <Tech />

     
   </div>
          
   </>
  )
}



export default Report