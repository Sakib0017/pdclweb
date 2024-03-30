import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sidemenu,
  Bottommenu,
  Details,
  Nav,
  Navbar,
  Tech,
} from "../components";
import { doctorData } from "../constants";



const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
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


const DoctorCard = ({ doctor }) => {
  return (
    <div className="card-container text-gray-500 bg-gradient-to-b from-white to-[#f0fff0] hover:bg-gray-100 shadow-2xl rounded-2xl sm:w-[399px] w-ful">
      <div className="card-header relative w-full">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.drName}
            className="w-full shadow-xl rounded-3xl object-cover opacity-95 p-2 "
          />
        ) : (
          <div className="no-image font-ubuntu">No Image Available</div>
        )}
      </div>
      <div className="card-body p-4 flex flex-col justify-between">
        <h1 className="text-[#006642] px-2 font-ubuntu font-bold text-center text-[24px]">
          {doctor.drName}
        </h1>
        <p className="px-2 pt-2 font-ubuntu text-[16px]">
          <strong>Specialization:</strong> {doctor.specializationName}
        </p>
        <p className="font-ubuntu px-2">
          <strong>Degrees:</strong> {doctor.degree}
        </p>
        <p className="font-ubuntu px-2">
          <strong>Working Days:</strong>
        </p>
        <ul className="font-ubuntu px-2">
          {doctor.weekday.map((day, index) => (
            <li key={index}>
              {day.day}: {day.time}
            </li>
          ))}
        </ul>
      </div>
      <div className="card-footer p-4 flex flex-col justify-between">
        <p className="font-ubuntu px-2">
          <strong>Contact:</strong> {doctor.drNumber}
        </p>
        <p className="font-ubuntu px-2">
          <strong>Email:</strong> {doctor.email || "N/A"}
        </p>
      </div>
      <div className="branch-name p-4 flex flex-col justify-between">
        <p className="font-ubuntu px-2">
          <strong>Branch:</strong> {doctor.braName}
        </p>
      </div>
    </div>
  );
};

const DoctorSearch = () => {
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    setFilteredDoctors(
      doctorData.branches.flatMap((branch) =>
        branch.specilizations.flatMap((spec) => spec.doctorDetails)
      )
    );
  }, []);

    const specializationSet = new Set(
      doctorData.branches
        .flatMap((branch) => branch.specilizations)
        .map((spec) => spec.specializationName)
    );
    const specializationOptions = Array.from(specializationSet);

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSelectedSpecialization(e.target.value);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  useEffect(() => {
    let result = doctorData.branches.flatMap((branch) =>
      branch.specilizations.flatMap((spec) =>
        spec.doctorDetails.map((doctor) => ({
          ...doctor,
          braName: branch.braName,
          specializationName: spec.specializationName,
        }))
      )
    );

    if (selectedBranch) {
      result = result.filter((doctor) => doctor.braName === selectedBranch);
    }

    if (selectedSpecialization) {
      result = result.filter(
        (doctor) => doctor.specializationName === selectedSpecialization
      );
    }

    if (selectedDay) {
      result = result.filter((doctor) =>
        doctor.weekday.some(
          (day) => day.day.toLowerCase() === selectedDay.toLowerCase()
        )
      );
    }

    if (searchTerm) {
      result = result.filter((doctor) =>
        doctor.drName.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredDoctors(result);
  }, [selectedBranch, selectedSpecialization, selectedDay, searchTerm]);

  return (
    <div className="bg-[#F5FFFA]">
      <Nav />
      <Navbar />
      <Sidemenu />
      <Bottommenu />
      <div className="sticky top-[99px] z-10 rounded-xl shadow-2xl bg-white flex flex-col-reverse gap-2 sm:flex-row p-5 row-span-1 mx-12 xl:mx-auto xl:max-w-7xl justify-between">
        <motion.input
          className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200  rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
          type="text"
          placeholder="Search by doctor's name..."
          layout
          transition={spring}
          whileTap={{ scale: 0.9 }}
          variants={buttonVariants}
          whileHover="hover"
          onChange={handleSearchChange}
        />
        <motion.select
          className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
          onChange={handleBranchChange}
          layout
          transition={spring}
          whileTap={{ scale: 0.9 }}
          variants={buttonVariants}
          whileHover="hover">
          <option value="">Select Branch</option>
          {doctorData.branches.map((branch) => (
            <option key={branch.braID} value={branch.braName}>
              {branch.braName}
            </option>
          ))}
        </motion.select>
        <motion.select
          className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
          onChange={handleSpecializationChange}
          layout
          transition={spring}
          whileTap={{ scale: 0.9 }}
          variants={buttonVariants}
          whileHover="hover">
          <option value="">Select Specialization</option>
          {specializationOptions.map((specName) => (
            <option key={specName} value={specName}>
              {specName}
            </option>
          ))}
        </motion.select>
        <motion.select
          className="px-2 py-1 border text-[#006642] border-PDCL-green bg-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-PDCL-green"
          onChange={handleDayChange}
          layout
          transition={spring}
          whileTap={{ scale: 0.9 }}
          variants={buttonVariants}
          whileHover="hover">
          <option value="">Select Day</option>
          {[
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ].map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </motion.select>
      </div>
      <div className="doctor-list flex mx-auto pb-10 pt-[150px] max-w-7xl justify-center px-1 flex-wrap gap-7">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
      <Tech />
    </div>
  );
};

export default DoctorSearch;