import React from 'react';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Report from "./components/Report";
import Modal from "./components/Modal";
import Layout from "./components/Layout";
import Sample from "./components/Sample";
import Contact from "./components/Contact";
import Health from "./components/Health";
import Details from "./components/Details";
import Complain from "./components/Complain";
import Login from "./components/Login";
import Sign from "./components/Sign";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/report" element={<Report />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sample" element={<Sample />} />
    <Route path="/sign" element={<Sign />} />
    <Route path="/complain" element={<Complain />} />
     <Route path="/modal" element={<Modal />} />
     
     <Route path="/notice" element={<Notice />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/health" element={<Health />} />
     <Route path="/details" element={<Details />} />
    </Routes>
    </BrowserRouter>
    
   </>
  );
}

export default App;
