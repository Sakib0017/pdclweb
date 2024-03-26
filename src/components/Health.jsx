import React from "react";
import { Nav, Navbar, Sidemenu, Bottommenu, Tech } from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { printer, downloads } from "../assets";
import { SectionWrapper } from "../hoc";
import { dhan } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { healh, dical, cover } from "../assets";

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
            <div className="  flex-col  max-w-7xl container  md:flex-col   mt-[150px] mx-auto">
              <div className="flex flex-col">
                <form className="max-w-7xl  items-center p-20  rounded-[10px] justify-center">
                  <div className="grid md:grid-cols-2   md:gap-10 ">
                    <div className="me-auto shadow w-full p-10">
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
                    <div className="text-black p-10 w-full shadow text-center">
                      <h3 className="text-[24px]  text-[#006642] font-bold font-ubuntu pb-10">
                        হেল্‌থ চেক-আপ এর পূর্ব প্রস্ততি সমূহ:-{" "}
                      </h3>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০১. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০২. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৩. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৪. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৫. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৬. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৭. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৮. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ০৯. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                      <p className=" text-gray-900 font-ubuntu text-[16px] font-medium">
                        ১০. হেল্‌থ চেক-আপ এর বিষয়ে জানতে পপুলার অনুসন্ধান
                        কেন্দ্রে যোগাযোগ করুন
                      </p>
                    </div>
                  </div>
                </form>

                <form className="max-w-screen-xl bg-gray-100-5 p-10 rounded-[10px] shadow mt-10 items-center justify-center">
                  <div className="grid md:grid-cols-3   md:gap-1 ">
                    <div className="text-black overflow-scroll p-10 text-center">
                      <h3 className="text-[20px] text-gray-900 font-ubuntu font-bold">
                        Primary Health Cheak-up Pakage-1<br></br>For 40 Years
                        Age Above
                      </h3>
                      <Card className="h-auto w-full  shadow-transparent bg-gray-100-5">
                        <table className="w-full min-w-max table-auto text-left">
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

                    <div className="text-black overflow-scroll p-10 text-center ">
                      <h3 className="text-[20px] text-gray-900 font-ubuntu font-bold">
                        Primary Health Cheak-up Pakage-2<br></br>For 40 Years
                        Age Above
                      </h3>
                      <Card className="h-auto w-full   shadow-transparent bg-gray-100-5">
                        <table className="w-full min-w-max  table-auto text-left">
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

                    <div className="text-black  overflow-scroll p-10 text-center ">
                      <h3 className="text-[20px] text-gray-900 font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>

                      <Card className="h-auto w-full  shadow-transparent bg-gray-100-5 ">
                        <table className="w-full min-w-max  table-auto text-left">
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
                  <div className="grid md:grid-cols-3   md:gap-1">
                    <div className="text-black text-center p-10">
                      <img
                        className=" mx-auto h-[500px] p-1 w-auto"
                        src={dhan}
                      />
                    </div>

                    <div className="text-black  overflow-scroll p-10 text-center ">
                      <h3 className="text-[20px] text-gray-900 font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>

                      <Card className="h-auto w-full  shadow-transparent bg-gray-100-5 ">
                        <table className="w-full min-w-max  table-auto text-left">
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
                    <div className="text-black  overflow-scroll p-10 text-center ">
                      <h3 className="text-[20px] text-gray-900 font-ubuntu font-bold">
                        Health Cheak-up Pakages<br></br>For 40 Years Age Above
                      </h3>

                      <Card className="h-auto w-full  shadow-transparent bg-gray-100-5 ">
                        <table className="w-full min-w-max  table-auto text-left">
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
