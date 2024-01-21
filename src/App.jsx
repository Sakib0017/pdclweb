
import { Routes, Route, BrowserRouter  } from "react-router-dom";
import Modal from "./components/Modal";
import { About,  Feedbacks, Hero,   Nav, Navbar,  Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
         
          <Nav />
          <Navbar />
          <Hero/>
          
        </div>
        
        <Works />
        
        <Feedbacks />
        <div className='relative z-0'>
          
          <StarsCanvas />
        </div>
        <Tech />
        
      </div>
      <Routes>
      <Route path="modal" element={<Modal />} />

      
     </Routes>
      
    </BrowserRouter>


    
   
  );
}

export default App;
