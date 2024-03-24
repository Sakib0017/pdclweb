import React, { useState, useEffect } from 'react';
import { doctorData } from "../constants";

const DoctorSearch = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [searchDoctor, setSearchDoctor] = useState('');

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    setSelectedSpecialization('');
    setSelectedDay('');
  };

  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
    setSelectedDay('');
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleDoctorSearch = (event) => {
    setSearchDoctor(event.target.value);
  };

  const filterDoctors = () => {
    let doctors = doctorData.branches;

    // Filter by branch
    if (selectedBranch) {
      doctors = doctors.filter(branch => branch.braName === selectedBranch);
    }

    // Filter by specialization
    if (selectedSpecialization) {
      doctors = doctors.flatMap(branch =>
        branch.specilizations.filter(
          spec => spec.specializationName === selectedSpecialization
        )
      );
    }

    // Filter by day
    if (selectedDay) {
      doctors = doctors.flatMap(branch =>
        branch.specilizations.flatMap(spec =>
          spec.doctorDetails.filter(doctor =>
            doctor.weekday.some(day => day.day === selectedDay)
          )
        )
      );
    }

    // Filter by doctor name search (case-insensitive)
    if (searchDoctor) {
      doctors = doctors.flatMap(branch =>
        branch.specilizations.flatMap(spec =>
          spec.doctorDetails.filter(doctor =>
            doctor.drName.toLowerCase().includes(searchDoctor.toLowerCase())
          )
        )
      );
    }

    return doctors;
  };

  const filteredDoctors = filterDoctors();

  const renderDoctors = () => {
    return (
      <div>
        <h2>Search Results</h2>
        {filteredDoctors.length === 0 ? (
          <p>No doctors found based on your search criteria.</p>
        ) : (
          filteredDoctors.flatMap(branch => (
            <div key={branch.braID}>
              <h3>{branch.braName}</h3>
              {branch.specilizations.flatMap(spec => (
                <div key={spec.SpecilizationID}>
                  <h4>{spec.specializationName}</h4>
                  {spec.doctorDetails.map(doctor => (
                    <div key={doctor.drNumber}>
                      <p>
                        <b>Dr. {doctor.drName}</b> - {doctor.degree}
                      </p>
                      <p>
                        <b>Day(s):</b> {doctor.weekday.map(day => day.day).join(', ')}
                      </p>
                      <p>
                        <b>Time:</b> {doctor.weekday[0].time}
                      </p>
                      {/* Add rendering of other doctor details as needed */}
                      <p><b>Building:</b> {doctor.building}</p>
                      <p><b>Room:</b> {doctor.room}</p>
                      <p><b>New Patient Fee:</b> {doctor.newPatient}</p>
                      <p><b>Old Patient Fee:</b> {doctor.oldPatient}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    );
  };

  // Simplified function definitions for better clarity
  const getBranches = () => {
    return doctorData.branches.map(branch => (
      <option key={branch.braID} value={branch.braName}>
        {branch.braName}
      </option>
    ));
  };

  const getSpecializations = () => {
    const allSpecializations = new Set();
    doctorData.branches.forEach(branch => {
      branch.specilizations.forEach(spec => allSpecializations.add(spec.specializationName));
    });
    return Array.from(allSpecializations).map(spec => (
      <option key={spec.SpecilizationID} value={spec}>
        {spec}
      </option>
    ));
  };

  const getDays = () => {
    // Generate options for all 7 days of the week
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(
      day => (
        <option key={day} value={day}>
          {day}
        </option>
      )
    );
  };

  return (
    <div>
      <h2>Doctor Search</h2>
      <select value={selectedBranch} onChange={handleBranchChange}>
        <option value="">Select Branch</option>
        {getBranches()}
      </select>
      <select value={selectedSpecialization} onChange={handleSpecializationChange}>
        <option value="">Select Specialization</option>
        {getSpecializations()}
      </select>
      <select value={selectedDay} onChange={handleDayChange}>
        <option value="">Select Day</option>
        {getDays()}
      </select>
      <input
        type="text"
        placeholder="Search Doctor by Name"
        value={searchDoctor}
        onChange={handleDoctorSearch}
      />
      {filteredDoctors.length > 0 && renderDoctors()}
    </div>
  );
};

export default DoctorSearch;