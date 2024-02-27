import React, { useState, useEffect } from 'react';

function Notification() {
  
  const [showNotification, setShowNotification] = useState(true);

  // Hide notification after a certain time
  useEffect(() => {
    const timeout = setTimeout(() => setShowNotification(false), 30000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
   <div
      
      className={`fixed w-[500px] top-[85px] hidden md:block right-[55px] rounded-lg bg-emerald-900/90 text-white p-4 shadow-md transition-opacity ${showNotification ? 'opacity-100' : 'opacity-0'}`}
        
    >
     Please click the Icons in the Top-Right-center corner to<br></br>
     Collect Your Report, Branches Contact,Sample Collection<br></br>
     from Home, Online Doctor Consaltancy, Submit Complain<br></br> 
     And Chat Messanger with Us. 
     <div className='flex flex-row'>
     <p className="text-start  p-5">
     <span 
        className=" text-white-500  "
        
      >
      Wait 30 Sec to read Otherwise
      </span>
     </p>
     <p className="text-end  p-5">
     <span 
        className=" text-red-500  hover:underline cursor-pointer"
        onClick={() => setShowNotification(false)}
      >
        Click to Close
      </span>
     </p>
     </div>
    </div>
    <div 
      className={`fixed top-[300px] w-[390px] right-[3px] p-5 sm:hidden  bg-emerald-900/90 text-white  rounded-lg shadow-md transition-opacity ${showNotification ? 'opacity-100' : 'opacity-0'}`}
    >
     Please click the Icon Button in the bottom<br></br>
     -Right corner to  Collect Your Report, <br></br>
     Branches, Contact, Sample Collection from<br></br>
     Home, Online Doctor Consaltancy, Submit<br></br> 
     Complain And Chat Messanger with Us. <br></br>
     <div className='flex flex-row'>
     <p className="text-start  p-5">
     <span 
        className=" text-white-500  "
        
      >
      Wait 30 Sec to read 
      </span>
     </p>
     <p className="text-end  p-5">
     <span 
        className=" text-red-500  hover:underline cursor-pointer"
        onClick={() => setShowNotification(false)}
      >
        Click to Close
      </span>
     </p>
     </div>
    
      
    </div>
    </>
  );
}

export default Notification;
