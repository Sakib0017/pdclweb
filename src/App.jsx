import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  Modal,
  Layout,
  Sample,
  Contact,
  Health,
  DoctorDetail,
  DoctorSearch,
  Notification,
  Details,
  About,
  Complain,
  Login,
  Notice,
  Sign,
  Report,
} from "./components";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/report" element={<Report />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/doctordetail" element={<DoctorDetail />} />
          <Route path="/doctorsearch" element={<DoctorSearch />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/complain" element={<Complain />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health" element={<Health />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
