import React from "react";
import { Nav, Navbar, Sidemenu, Bottommenu, Tech } from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer, downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { dhan } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { healh, dical, cover } from "../assets";
import img from "../assets/PDCLbranches/Dhanmondi.webp";
import { Card, Typography } from "@material-tailwind/react";

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
      <div className="relative bg-white">
        <div className="  bg-cover bg-top h-auto">
          <Nav />

          <Navbar />
          <Sidemenu />
          <Bottommenu />
          <div
            className={` justify-center items-center  text-center flex flex-wrap `}
          >
            
            <div className="  flex-wrap  max-w-7xl container  md:flex-wrap   mt-[150px] mx-auto">
              <div className="flex flex-wrap">
                <form className="max-w-7xl  items-center flex flex-wrap   rounded justify-center">
                  <div className="bg-gradient-to-b  from-white m-5 to-[#00664218] hover:bg-gray-100 shadow-2xl rounded h-auto sm:w-auto w-auto ">
                    <div className="p-1">
                      <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>
                      <Card className="h-auto w-auto    shadow-transparent bg-gray-100/5">
                        <table className="w-auto min-w-max  text-left">
                          <tbody>
                            {TABLE_ROWS.map(({ no, test, price }) => (
                              <tr key={no} className="even:bg-blue-gray-50/50">
                                <td className="p-4 ">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {no}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {test}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
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
                  <div className="bg-gradient-to-b  from-white m-5 to-[#00664218] hover:bg-gray-100 shadow-2xl rounded h-auto sm:w-auto w-auto ">
                    <div className="p-1">
                      <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>
                      <Card className="h-auto w-auto    shadow-transparent bg-gray-100/5">
                        <table className="w-auto min-w-max  text-left">
                          <tbody>
                            {TABLE_ROWS.map(({ no, test, price }) => (
                              <tr key={no} className="even:bg-blue-gray-50/50">
                                <td className="p-4 ">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {no}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {test}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
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
                  <div className="bg-gradient-to-b  from-white m-5 to-[#00664218] hover:bg-gray-100 shadow-2xl rounded h-auto sm:w-auto w-auto ">
                    <div className="p-1">
                      <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>
                      <Card className="h-auto w-auto    shadow-transparent bg-gray-100/5">
                        <table className="w-auto min-w-max  text-left">
                          <tbody>
                            {TABLE_ROWS.map(({ no, test, price }) => (
                              <tr key={no} className="even:bg-blue-gray-50/50">
                                <td className="p-4 ">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {no}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {test}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
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
                  <div className="bg-gradient-to-b  from-white m-5 to-[#00664218] hover:bg-gray-100 shadow-2xl rounded h-auto sm:w-auto w-auto ">
                    <div className="p-1">
                      <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>
                      <Card className="h-auto w-auto    shadow-transparent bg-gray-100/5">
                        <table className="w-auto min-w-max  text-left">
                          <tbody>
                            {TABLE_ROWS.map(({ no, test, price }) => (
                              <tr key={no} className="even:bg-blue-gray-50/50">
                                <td className="p-4 ">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {no}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {test}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
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
                  <div className="bg-gradient-to-b  from-white m-5 to-[#00664218] hover:bg-gray-100 shadow-2xl rounded h-auto sm:w-auto w-auto ">
                    <div className="p-1">
                      <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>
                      <Card className="h-auto w-auto    shadow-transparent bg-gray-100/5">
                        <table className="w-auto min-w-max  text-left">
                          <tbody>
                            {TABLE_ROWS.map(({ no, test, price }) => (
                              <tr key={no} className="even:bg-blue-gray-50/50">
                                <td className="p-4 ">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {no}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {test}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
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
                  <div className="bg-gradient-to-b  from-white m-5 to-[#00664218] hover:bg-gray-100 shadow-2xl rounded h-auto sm:w-auto w-auto ">
                    <div className="p-1">
                      <h3 className="text-[24px] text-[#006642] font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>
                      <Card className="h-auto w-auto    shadow-transparent bg-gray-100/5">
                        <table className="w-auto min-w-max  text-left">
                          <tbody>
                            {TABLE_ROWS.map(({ no, test, price }) => (
                              <tr key={no} className="even:bg-blue-gray-50/50">
                                <td className="p-4 ">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {no}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
                                    {test}
                                  </Typography>
                                </td>
                                <td className="p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="text-gray-900  font-ubuntu font-medium text-[16px]"
                                  >
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
                </form>
                </div>
            </div>
              </div>
            
          <Tech />
        </div>
      </div>
    </>
  );
}

export default Health;
