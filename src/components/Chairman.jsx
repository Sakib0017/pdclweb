import React from "react";
import { SectionWrapper } from "../hoc";
import { Nav, Navbar, Sidemenu, Tech, Bottommenu } from "../components";

import { LateTaheraAkhter } from "../assets";
const Chairman = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="pt-[200px] ">
        <div className=" flex  flex-wrap gap-10">
          <div className=" rounded-lg p-5 mx-auto w-full ">
            <div className="flex flex-row sm:w-[80%] flex-wrap max-w-screen-xl mx-auto  ">
              <div className="w-auto me-auto items-start justify-start border-opacity-50 pl-2  text-start ml-3">
                <h1 className="text-slate-900/50 font-ubuntu font-extrabold text-[42px]">
                  Late Tahera Akhter{" "}
                </h1>
                <p className="text-[#00664a] font-ubuntu font-bold text-[28px]">
                  Chairman
                </p>
              </div>
              <div className="ms-auto">
                <img
                  src={LateTaheraAkhter}
                  className="h-[200px] w-[150px]"
                ></img>
              </div>

              <div className="w-auto me-auto items-start justify-start border-opacity-50 pl-2  text-start ml-3">
                <hr className="mt-5"></hr>
                <p className="text-gray-900 pt-5">
                  After the liberation war, the health sector of Bangladesh was
                  completely deprived due to various political instability and
                  uncertainity. Unfortunately a significant number of people of
                  this country died on that time only because of incomplete
                  diagnosis of disease and lack of better treatment. When the
                  sufferings were beyond the limit, at that time we established
                  Popular Diagnostic Centre Ltd.
                  <br></br> in Elephant Road, Dhaka. Our goal was to ensure
                  modern treatment facilities for the mass people of the
                  country. Popular started its journey in June 1983 and within
                  few days due to its accuracy of the reports and quality of the
                  service Popular became an unparallel symbol of reliability and
                  trust from the end of respective doctors and the people of our
                  country.<br></br> To meet the demand of the respective doctors
                  we ensured a modern setup of latest high-tech machineries one
                  after another for complete diagnosis of patients with utmost
                  accuracy. Popular Diagnostic is the first private organization
                  which ensured world latest medical equipments and technology
                  in this country. Popular is committed to render the possible
                  standard service to the people of the country at an affordable
                  cost. This will definitely reduce the burden of the government
                  and will make the path of "Health for all" more smooth and
                  effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tech />
    </div>
  );
};

export default Chairman;
