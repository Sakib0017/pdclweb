import {Routes, Route, BrowserRouter } from "react-router-dom";

import { Modal, Layout, Sample, Complain } from "./components";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} />
     
        
    <Route path="/sample" element={<Sample />} />
     
    <Route path="/complain" element={<Complain />} />
     <Route path="/modal" element={<Modal />} />

     
    
    
    </Routes>
    </BrowserRouter>
    
   </>
  );
}

export default App;
