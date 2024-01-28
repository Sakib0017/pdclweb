import {Routes, Route, BrowserRouter } from "react-router-dom";

import { Modal, Layout, Sample, Complain,Login,Notice, Sign, Report } from "./components";

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
    
    
    </Routes>
    </BrowserRouter>
    
   </>
  );
}

export default App;
