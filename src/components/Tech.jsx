import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import img from "../assets/link.jpg";
const Tech = () => {
  return (
    <>
    
    <footer className="flex flex-row flex-wrap mt-10  justify-center gap-10">
    <div className="bg-[#f3f3f3]  shadow-lg  opacity-90 mx-auto w-full ">
      <div className=' flex mx-auto p-3 justify-evenly max-w-screen-xl flex-wrap '>
        <div className=' '>
            <h2 className="mb-6 text-[18px] font-bold font-ubuntu text-[#006642] uppercase dark:text-[#006642]">Contact Us</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">House #16, Road # 2, Dhanmondi R/A, Dhaka-1205, Bangladesh</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Phone : 09666 787801</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">E-mail : info@populardiagnostic.com</a>
                </li>
                
            </ul>
        </div>
        <div className=' '>
            <h2 className="mb-6 text-sm font-ubuntu text-[#006642] uppercase dark:text-[#006642]">Important Links</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Popular Pharmaceuticals</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Popular Medical College</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Popular Medical College Hospital</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Management Team</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Career</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Refund & Return Policy</a>
                </li>
            </ul>
        </div>
        <div className=''>
            <h1 className="mb-6 text-sm font-ubuntu text-[#006642] uppercase dark:text-[#006642]">Quick Links</h1>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Our Services</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Our Branches</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Call for Appointments</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Find Doctors</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Gallery</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="font-ubuntu hover:underline">Sitemap</a>
                </li>
            </ul>
        </div>
        
    </div>
    <img src={img} className="flex mt-4 p-5  sm:justify-center w-full max-w-7xl mx-auto "/>
    <div className="bg-[#d5e7d9] shadow-lg  px-4 py-6 mt-5 md:flex md:items-center md:justify-between ">
        
        <div className="flex  mt-4 sm:justify-center  md:mt-0 space-x-5 rtl:space-x-reverse max-w-7xl mx-auto">
        <span className="text-sm text-[#006642] font-ubuntu dark:text-[#006642] sm:text-center me-auto">© 2024 <a href="https://flowbite.com/">PDCL Corporate</a>
        </span>
            
            <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-[#006642] hover:text-gray-900 dark:hover:text-black">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
    </div>

    <a href="https://wa.me/1234567890" target="_blank" className="fixed bottom-[286px] border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
    <svg className="w-[60px] h-[60px] fill-[#ffffff] p-3" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

   <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"></path>

</svg></a>
<a href="https://wa.me/1234567890" target="_blank" className="fixed bottom-[224px] right-0 bg-[#006642]  border-[1px] border-gray-200/90 shadow-md">
<svg className="w-[60px] h-[60px] fill-[#ffffff] p-3" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

<path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>

</svg>
</a>
<a href="https://wa.me/1234567890" target="_blank" className="fixed bottom-[162px]  border-[1px] border-gray-200/90 right-0 bg-[#006642] shadow-md">
<svg className="w-[60px] h-[60px] fill-[#ffffff] p-3" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

  <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z"></path>

</svg>
</a>

    <a href="https://wa.me/1234567890" target="_blank" className="fixed bottom-[100px] right-0 bg-[#006642] border-[1px] border-gray-200/90 shadow-md">
  <svg className="w-[60px] h-[60px] p-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.16156 47.9359L3.52765 35.6439C1.45131 32.0462 0.359162 27.9653 0.360688 23.7844C0.366028 10.705 11.0098 0.0639038 24.0889 0.0639038C30.4358 0.0665741 36.3932 2.53697 40.8732 7.02075C45.3528 11.5045 47.819 17.4646 47.8167 23.8035C47.811 36.8825 37.1657 47.5251 24.0889 47.5251C24.0881 47.5251 24.0893 47.5251 24.0889 47.5251H24.0786C20.1075 47.5236 16.2058 46.5276 12.7402 44.6374L0.16156 47.9359ZM13.3227 40.3432L14.0433 40.7701C17.0706 42.5668 20.5416 43.517 24.0813 43.5189H24.0889C34.9585 43.5189 43.8056 34.6734 43.8101 23.8019C43.8121 18.5335 41.7628 13.5793 38.0393 9.85277C34.3154 6.12621 29.3643 4.07276 24.0961 4.07047C13.2178 4.07047 4.37108 12.9148 4.36689 23.7859C4.36536 27.5113 5.40754 31.1391 7.38203 34.2786L7.85124 35.0248L5.85844 42.3001L13.3227 40.3432Z"
      fill="white" />
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M18.1585 13.8678C17.7145 12.8805 17.2468 12.8607 16.8241 12.8435C16.4785 12.8287 16.0829 12.8294 15.6881 12.8294C15.2929 12.8294 14.6505 12.9782 14.1073 13.5714C13.5637 14.1646 12.0317 15.5989 12.0317 18.516C12.0317 21.4335 14.1565 24.2522 14.4529 24.6482C14.7493 25.0438 18.5545 31.2213 24.5805 33.5979C29.5888 35.5731 30.6077 35.1802 31.6949 35.0814C32.7821 34.9826 35.2025 33.6471 35.6965 32.2627C36.1909 30.8784 36.1909 29.692 36.0425 29.4436C35.8941 29.1968 35.4989 29.0484 34.9061 28.752C34.3133 28.4556 31.3985 27.0209 30.8549 26.8233C30.3113 26.6253 29.9161 26.5269 29.5209 27.1205C29.1254 27.7133 27.9901 29.0484 27.6441 29.4436C27.2981 29.84 26.9521 29.8896 26.3593 29.5928C25.7665 29.2956 23.8569 28.67 21.5917 26.6501C19.8293 25.0788 18.6392 23.1379 18.2932 22.5444C17.9476 21.9515 18.2874 21.6586 18.5537 21.3347C19.0332 20.7514 19.8377 19.7028 20.0353 19.3076C20.2329 18.9116 20.1341 18.5656 19.9861 18.2688C19.8377 17.9724 18.6853 15.0404 18.1585 13.8678V13.8678Z"
      fill="white" />
  </svg>
</a>
</footer>




    </>
  );
};

export default Tech;
