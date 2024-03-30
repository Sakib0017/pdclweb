import React from 'react'
import { SectionWrapper } from "../hoc";
import { Nav, Navbar, Sidemenu, Tech, Bottommenu } from "../components";

import { DrMostafizurRahman } from "../assets";
const Director = () => {
  return (
    <section className="bg-[#F5FFFA]">
      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="pt-[200px]">
        <div className=" flex flex-wrap mb-10 gap-10">
          <div className=" rounded-lg p-5 mx-auto w-full ">
            <div className="flex flex-row  flex-wrap max-w-screen-xl mx-auto  ">
              <div className="w-auto me-auto items-start justify-start border-opacity-50 pl-2  text-start ml-3">
                <h1 className="text-slate-900/50 font-ubuntu font-extrabold text-[42px]">
                  Dr. Mostafizur Rahman{" "}
                </h1>
                <p className="text-[#00664a] font-ubuntu font-bold text-[28px]">
                  Managing Director
                </p>
              </div>
              <div className="ms-auto">
                <img
                  src={DrMostafizurRahman}
                  className="h-[200px] w-[150px]"></img>
              </div>

              <div className="w-auto me-auto items-start justify-start border-opacity-50 pl-2  text-start ml-3">
                <hr className="mt-5"></hr>
                <p className="text-gray-900 pt-5">
                  Popular started its journey as diagnostic centre in June 1983
                  with a Promise to render the possible standard service to the
                  people of the country at an affordable cost and in turn to
                  limit the outflow of the patient abroad at the expense of
                  heard earn foreign currency. When I started working in
                  pathology department of Dhaka Medical College Hospital, I saw
                  that thousands of people of our country are going to abroad
                  every year only for treatment. The country was losing millions
                  of taka worth foreign currency. That time I felt, as a Doctor
                  I must do something about it. I had the spirit but didn't have
                  the resources. From that inspiration I started Popular
                  Diagnostic.<br></br> Bangladesh is a developing country. We
                  have tremendous scope and potentiality in our industry
                  especially in health sector. Basically my father was a Doctor.
                  None of my family members were engaged in business. My dream
                  was to be a surgeon. But necessity and circumstances force me
                  to start diagnostic business. Challenges and problems are
                  many. But solving strategies are very few and precise. As a
                  businessman we should relentlessly concern about our
                  commitment and quality.<br></br> To achieve the goal and
                  ensure the quality service need highly skilled manpower who
                  will continue to produce high level productivity relentlessly
                  maintaining high standard of medical services. I always higher
                  the skilled manpower and motivate them. Being an entrepreneur
                  of a health services provider organization I always concern to
                  ensure the right man in the right place. I believe that if a
                  person whether he is a doctor or not works hard, has merit,
                  good behaviour and remains honest, he will be a successful
                  businessman. Success is nothing but a goal of achievement. In
                  an every success has positive productivity, which is dedicated
                  for the welfare of mankind. Almighty God, Honorable Doctors
                  and my beloved colleagues are always inspired me to do good
                  and take challenges. My all afford to happy them..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tech />
    </section>
  );
}

export default Director 