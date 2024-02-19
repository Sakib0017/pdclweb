import React from "react";
import {   Nav, Navbar,  Tech} from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer ,downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { dhan  } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { healh, dical, cover } from "../assets";

import {
   
    Card, Typography
  } from "@material-tailwind/react";


 
const TABLE_ROWS = [
  {
    no: "1.",
    test: "Complete Blood Count (CBC)",
    price: "400.00",
  },
  {
    no: "2.",
    test: "Fasting Blood Sugar (2 hrs ABF)",
    price: "400.00",
  },
  {
    no: "3.",
    test: "HbA1c",
    price: "1200.00",
  },
  {
    no: "4.",
    test: "Lipid Profile(Fasting)",
    price: "1200.00",
  },
  {
    no: "5.",
    test: "Liver Function Test",
    price: "1000.00",
  },
  {
    no: "6.",
    test: "Complete Blood Count (CBC)",
    price: "400.00",
  },
  {
    no: "7.",
    test: "Fasting Blood Sugar (2 hrs ABF)",
    price: "400.00",
  },
  {
    no: "8.",
    test: "HbA1c",
    price: "1200.00",
  },
  {
    no: "9.",
    test: "Lipid Profile(Fasting)",
    price: "1200.00",
  },
  {
    no: "10.",
    test: "Liver Function Test",
    price: "1000.00",
  },
];
function Health() {
  return (
    <>
    <div className="bg-white">
    <Nav />
     
      
     <Navbar />
     <div className={` justify-center items-center  text-center flex flex-wrap  text-white`}>
       <div className="  flex-col  max-w-7xl container  md:flex-col   mt-[150px] mx-auto">
       <div className="flex flex-col">
       <form className="max-w-7xl shadow items-center justify-center">
  <div className="grid md:grid-cols-3   md:gap-1 ">
    <div className="text-black text-center">
    <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">Health Cheak-up Pakages<br></br>For 40 Years Age Above</h3>
    <Card className="h-full w-full shadow-none overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
       
        <tbody>
          {TABLE_ROWS.map(({ no, test, price }) => (
            <tr key={no} className="even:bg-blue-gray-50/50">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {test}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {price}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
    <div className="text-black  text-center">
    <div className="text-black text-center">
    <h3 className="text-[24px] text-[#006642] font-bold font-ubuntu pb-10">হেল্‌থ চেক-আপ এর পূর্ব প্রস্ততি সমূহ:- </h3>
    <p className=" font-ubuntu">০১ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className=" font-ubuntu">০২ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className=" font-ubuntu">০৩ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className="font-ubuntu">০৪ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className="font-ubuntu">০৫ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className=" font-ubuntu">০৬ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className="font-ubuntu">০৭ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className=" font-ubuntu">০৮ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className=" font-ubuntu">০৯ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    <p className=" font-ubuntu">১০ হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান কেন্দ্রে যোগাযোগ করুন</p>
    </div>
    </div>
    <div className="text-black text-center ">
          <h5 className="text-[36px] text-[#006642] font-bold pt-8 font-ubuntu">POPULAR <br></br>HEALTH CHECK-UP <br></br>PAKAGES</h5>
          <img className="mx-auto mt-[100px] w-[250px] h-[250px] " src={healh} />
    </div>
  </div>
  <div className="grid md:grid-cols-3   md:gap-1">
    <div className="text-black text-center">
      <p className="text-[24px] text-[#006642] font-bold pt-10 font-ubuntu">'We are committed to<br></br> meet our patient's needs<br></br> compassionately by utilizing<br></br> safe and appropriate tests'</p>
    <img className="p-10 mx-auto" src={dical}/>
    </div>
    <div className="text-black text-center">
    <img className="p-10 w-full h-[220px] mx-auto" src={cover}/>
    </div>
    <div className="text-black text-center">
      <p className="text-[#006642] text-center p-10">We care....</p>
      <p className="text-[red] text-[18px] font-ubuntu font-bold text-center">Hotline</p>
      <p className="text-[#006642] text-[24px] font-ubuntu font-bold text-center">09666787801</p>
      <p className="text-[#006642] text-[24px] font-ubuntu font-bold text-center">09613787801</p>
      <img className="p-10 w-full h-[180px] mx-auto" src={cover}/>
    </div>
  </div>
  
</form>

<form className="max-w-screen-xl shadow mt-10 items-center justify-center">
  
  <div className="grid md:grid-cols-3   md:gap-1 ">
  <div className="text-black  text-center">
    <div className="text-black text-center mb-0 mt-0">
    <div className="text-black text-center">
    <h3 className="text-[20px] text-[#006642] font-ubuntu font-bold">Primary Health Cheak-up Pakage-1<br></br>For 40 Years Age Above</h3>
    <Card className="h-full w-full shadow-none">
      <table className="w-full min-w-max table-auto text-left">
       
        <tbody>
          {TABLE_ROWS.map(({ no, test, price }) => (
            <tr key={no} className="even:bg-blue-gray-50/50">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {test}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {price}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
    </div>
    <div className="text-black  text-center">
    <div className="text-black text-center mb-0 mt-0">
    <div className="text-black text-center ">
    <h3 className="text-[20px] text-[#006642] font-ubuntu font-bold">Primary Health Cheak-up Pakage-2<br></br>For 40 Years Age Above</h3>
    <Card className="h-full w-full shadow-none">
      <table className="w-full min-w-max table-auto text-left">
       
        <tbody>
          {TABLE_ROWS.map(({ no, test, price }) => (
            <tr key={no} className="even:bg-blue-gray-50/50">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {test}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {price}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
    </div>
    <div className="text-black text-center ">
    <div className="text-black text-center ">
    <h3 className="text-[20px] text-[#006642] font-ubuntu font-bold">Health Cheak-up Pakages<br></br>For 40 Years Age Above</h3>
    
    <Card className="h-full w-full shadow-none ">
      <table className="w-full min-w-max table-auto text-left">
       
        <tbody>
          {TABLE_ROWS.map(({ no, test, price }) => (
            <tr key={no} className="even:bg-blue-gray-50/50">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {test}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {price}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
  </div>
  <div className="grid md:grid-cols-3   md:gap-1">
    <div className="text-black text-center">
    <div className="text-black text-center ">
    <img className=" mx-auto h-[500px] w-full" src={dhan}/>
    </div>
    </div>
    <div className="text-black text-center">
    <div className="text-black text-center">
    <Card className="h-full w-full shadow-none ">
    <h3 className="text-[20px] text-[#006642] font-ubuntu font-bold">Comprehensive Health Check-up<br></br>Pakages for Male</h3>
    
      <table className="w-full min-w-max table-auto text-left">
       
        <tbody>
          {TABLE_ROWS.map(({ no, test, price }) => (
            <tr key={no} className="even:bg-blue-gray-50/50">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {test}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {price}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
    <div className="text-black text-center">
    <div className="text-black text-center ">
    <h3 className="text-[20px] text-[#006642] font-ubuntu font-bold">Comprehensive Health Check-up<br></br>Pakages for Female</h3>
    <Card className="h-full w-full shadow-none ">
      <table className="w-full min-w-max table-auto text-left">
       
        <tbody>
          {TABLE_ROWS.map(({ no, test, price }) => (
            <tr key={no} className="even:bg-blue-gray-50/50">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {no}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {test}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal font-ubuntu">
                  {price}
                </Typography>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
  </div>
  
</form>
     </div>      
     </div>    
     </div>
     <Tech />

     
   </div>
   </>
  )
}

export default Health