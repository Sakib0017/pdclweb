import React from 'react'
import {   Feedbacks, Hero, Cor,  Nav, Navbar,  Tech, Works, StarsCanvas } from "../components";

function Layout() {
  return (
    <div className="bg-white">
        
      {/*<Nav />*/}
     
      
      <Navbar />
      
      <Hero />
      <Works />
      <Feedbacks />
      <Cor />
      <Tech />
    </div>
  )
}

export default Layout
