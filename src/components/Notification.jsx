import React, { useState, useEffect , useRef} from 'react';

function Notification() {
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffsetX(event.clientX - ref.current.getBoundingClientRect().left);
    setOffsetY(event.clientY - ref.current.getBoundingClientRect().top);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      ref.current.style.left = `${event.clientX - offsetX}px`;
      ref.current.style.top = `${event.clientY - offsetY}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowNotification(false), 300000); 
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div
      ref={ref}
      className={`absolute w-[500px]  top-[85px] right-[55px] hidden md:block  rounded-lg bg-emerald-900/90 text-white p-4 shadow-md transition-opacity ${showNotification ? 'opacity-100' : 'opacity-0'} ${
        isDragging ? 'z-10' : ''
      }`} onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
   
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
      className={`fixed  bottom-[83px]  w-[62px] text-[18px] font-ubuntu h-auto justify-center items-center text-center right-1 p-0 sm:hidden  bg-emerald-900/90 text-white   shadow-md transition-opacity ${showNotification ? 'opacity-100' : 'opacity-0'}`}>
    
   
  
    
      
    </div>
    </>
  );
}

export default Notification;
