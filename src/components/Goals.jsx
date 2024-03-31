import React from 'react'
import { Nav, Navbar, Sidemenu, Tech, Bottommenu } from "../components";
import { goals, objective } from "../assets";
import { Link } from "react-router-dom";
const Goals = () => {
  return (
    <div className="bg-[#F5FFFA]">
      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="pt-[150px]">
        <div className="flex flex-col  max-w-7xl mx-auto">
          <h1 className="text-[36px] p-5 text-gray-900">
            The New Way to Diagnostic Treatment
          </h1>
        </div>
        <div className="flex flex-wrap max-w-7xl mx-auto">
          <p className="text-[20px] p-5 mx-auto text-gray-500">
            Popular is committed to render the possible standard service to the
            people of the country at an affordable cost. This will definitely
            reduce the burden of the government and will make the path of
            "Health for all".
          </p>
          <Link to="/about">
            <button className="bg-[#006642] p-2 pl-5 pr-5 rounded-xl mt-5 mx-auto">
              SEE OUR TEAM
            </button>
          </Link>
        </div>
      </div>
      <div className="pt-[20px] hidden md:block">
        <div className=" md:grid-rows-1 flex bg-gray-100/5 shadow-md items-start justify-start sm:w-[100%] w-full mx-auto  md:gap-0 ">
          <div className=" m-1 p-10   text-start">
            <div className="flex flex-row  max-w-7xl   ">
              <div className="me-auto h-auto w-auto">
                <img src={goals} className="h-auto p-5 w-auto" />
              </div>
            </div>
          </div>
          <div className=" m-1 p-10   text-start">
            <div className="flex flex-row  max-w-7xl   ">
              <div className="me-auto h-auto w-auto">
                <h1 className="font-bold text-gray-900 p-5">Who We Are</h1>
                <p className="text-gray-500 p-5">
                  Popular Diagnostic Centre Ltd. is an advanced Centre for
                  diagnostic and medical services. It is one of the prestigious
                  diagnostic complexes of Bangladesh which started its
                  activities in 1983. Popular Diagnostic Centre Ltd. is the
                  largest diagnostic services provider organization in private
                  sector of the country. It is been pioneer in introducing world
                  latest medical equipments and advanced technology to provide
                  round the clock medical investigations and consultancy
                  services. LEGAL STATUS Popular Diagnostic Centre Ltd. is a
                  private limited company registered with the Ministry of Health
                  & Family Welfare, People’s Republic Govt. of Bangladesh having
                  License No. 1275 &688 & Trade License Number
                  TRAD/DSCC/211718/2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[20px] sm:hidden">
        <div className="pt-[20px]">
          <div className="flex flex-col  max-w-7xl mx-auto">
            <img src={goals} className="h-auto p-5 w-auto" />
          </div>
          <div className="flex flex-wrap max-w-7xl mx-auto">
            <h1 className="font-bold text-gray-900 p-5">Who We Are</h1>
            <p className="text-gray-500 p-5">
              Popular Diagnostic Centre Ltd. is an advanced Centre for
              diagnostic and medical services. It is one of the prestigious
              diagnostic complexes of Bangladesh which started its activities in
              1983. Popular Diagnostic Centre Ltd. is the largest diagnostic
              services provider organization in private sector of the country.
              It is been pioneer in introducing world latest medical equipments
              and advanced technology to provide round the clock medical
              investigations and consultancy services. LEGAL STATUS Popular
              Diagnostic Centre Ltd. is a private limited company registered
              with the Ministry of Health & Family Welfare, People’s Republic
              Govt. of Bangladesh having License No. 1275 &688 & Trade License
              Number TRAD/DSCC/211718/2019
            </p>
          </div>
        </div>
      </div>

      <div className="pt-[20px] hidden md:block">
        <div className=" md:grid-rows-1 flex bg-gray-100/5 shadow-md items-start justify-start sm:w-[100%] w-full mx-auto  md:gap-0 ">
          <div className=" m-1 p-10   text-start">
            <div className="flex flex-row  max-w-7xl">
              <div className="me-auto h-auto w-auto">
                <h1 className="text-gray-900 font-bold p-5">Our Goal</h1>
                <p className="text-gray-500 p-5">
                  To establish a referral Diagnostic and Medical Services
                  Centre.
                </p>

                <h1 className="text-gray-900 font-bold p-5">Our Objective</h1>
                <p className="text-gray-500 p-5">
                  To render the world standard diagnostic service to the people
                  of the country at an affordable cost and in turn to limit the
                  outflow of the patient abroad at the expense of heard earn
                  foreign currency by providing quality diagnostic services.
                </p>
                <p className="text-gray-500 p-5">
                  Out door basis treatment by renowned General Practitioners,
                  Consultants and Professors in different medical fields.
                </p>
                <p className="text-gray-500 p-5">
                  To promote Health Education & Medical Services.
                </p>
                <p className="text-gray-500 p-5">
                  Day care Centre for follow-up cardiac renal and oncology
                  patients.
                </p>
                <p className="text-gray-500 p-5">
                  To build a full fledged specialized (Tertiary) Hospital.
                </p>
                <p className="text-gray-500 p-5">
                  Set up Satellite collection Centre.
                </p>
              </div>
            </div>
          </div>
          <div className=" m-1 p-10   text-start">
            <div className="flex flex-row  max-w-7xl   ">
              <div className="me-auto h-auto w-auto">
                <img src={objective} className="h-auto p-5 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[20px] sm:hidden">
        <div className="pt-[20px]">
          <div className="flex flex-wrap max-w-7xl mx-auto">
            <h1 className="text-gray-900 font-bold p-5">Our Goal</h1>
            <p className="text-gray-500 p-5">
              To establish a referral Diagnostic and Medical Services Centre.
            </p>

            <h1 className="text-gray-900 font-bold p-5">Our Objective</h1>
            <p className="text-gray-500 p-5">
              To render the world standard diagnostic service to the people of
              the country at an affordable cost and in turn to limit the outflow
              of the patient abroad at the expense of heard earn foreign
              currency by providing quality diagnostic services.
            </p>
            <p className="text-gray-500 p-5">
              Out door basis treatment by renowned General Practitioners,
              Consultants and Professors in different medical fields.
            </p>
            <p className="text-gray-500 p-5">
              To promote Health Education & Medical Services.
            </p>
            <p className="text-gray-500 p-5">
              Day care Centre for follow-up cardiac renal and oncology patients.
            </p>
            <p className="text-gray-500 p-5">
              To build a full fledged specialized (Tertiary) Hospital.
            </p>
            <p className="text-gray-500 p-5">
              Set up Satellite collection Centre.
            </p>
          </div>

          <div className="flex flex-col  max-w-7xl mx-auto">
            <img src={objective} className="h-auto p-5 w-auto" />
          </div>
        </div>
      </div>
      <Tech />
    </div>
  );
}

export default Goals