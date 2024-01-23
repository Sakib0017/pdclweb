import React from 'react'
import {   Feedbacks, Hero,   Nav, Navbar,  Tech, Works, StarsCanvas } from "../components";

function Layout() {
  return (
    <div className="bg-white">
        
      <Nav />
     
      
      <Navbar />
      
      <Hero />
      <Works />
      <Feedbacks />
      <Tech />
    </div>
  )
}

export default Layout
