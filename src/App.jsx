import { BrowserRouter } from "react-router-dom";

import { About,  Feedbacks, Hero,Count, Nav,  Navbar,  Tech, Works, StarsCanvas } from "./components";

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
        {/* <Count /> */}
        <Feedbacks />
        <div className='relative z-0'>
          
          <StarsCanvas />
        </div>
        <Tech />
      </div>
    </BrowserRouter>
  );
}

export default App;
