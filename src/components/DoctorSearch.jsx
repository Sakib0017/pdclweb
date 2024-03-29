import React, { useState, useEffect } from "react";
import { doctorData } from "../constants";



const DoctorCard = ({ doctor }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          {doctor.image === "Yes" ? (
            <img
              src={`path_to_images/${doctor.drName}.jpg`}
              alt={doctor.drName}
            />
          ) : (
            <div className="no-image">No Image Available</div>
          )}
          <h3>{doctor.drName}</h3>
        </div>
        <div className="card-body">
          <p>
            <strong>Specialization:</strong> {doctor.specializationName}
          </p>
          <p>
            <strong>Degrees:</strong> {doctor.degree}
          </p>
          <p>
            <strong>Working Days:</strong>
          </p>
          <ul>
            {doctor.weekday.map((day, index) => (
              <li key={index}>
                {day.day}: {day.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <p>
            <strong>Contact:</strong> {doctor.drNumber}
          </p>
          <p>
            <strong>Email:</strong> {doctor.email || "N/A"}
          </p>
        </div>
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
    <div>
      <input
        type="text"
        placeholder="Search by doctor's name..."
        onChange={handleSearchChange}
      />
      <select onChange={handleBranchChange}>
        <option value="">Select Branch</option>
        {doctorData.branches.map((branch) => (
          <option key={branch.braID} value={branch.braName}>
            {branch.braName}
          </option>
        ))}
      </select>
      <select onChange={handleSpecializationChange}>
        <option value="">Select Specialization</option>
        {doctorData.branches
          .flatMap((branch) => branch.specilizations)
          .map((spec) => (
            <option key={spec.SpecilizationID} value={spec.specializationName}>
              {spec.specializationName}
            </option>
          ))}
      </select>
      <select onChange={handleDayChange}>
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
      </select>
      <div className="doctor-list">
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;